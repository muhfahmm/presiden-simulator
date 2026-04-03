// warMap.rs - Ultra-Fast Map Spatial Engine (Rust / WebAssembly)
// Menyempurnakan CanvasMapWar.ts dengan struktur data spasial berkinerja tinggi.
// Menangani: Quadtree Indexing, Chunk Streaming, Terrain Collision, LOS Grid.

use std::collections::HashMap;

// ============================================================
// CONSTANTS - Sinkronisasi dengan CanvasMapWar.ts
// ============================================================
const THEATER_LIMIT: f32 = 15000.0;
const SEA_LEVEL_Y: f32 = -6000.0;
const CHUNK_SIZE: f32 = 1000.0;     // Setiap chunk = 1km x 1km
const QUADTREE_DEPTH: u32 = 6;      // Kedalaman maksimal quadtree
const LOS_GRID_CELL: f32 = 250.0;   // Resolusi Line-of-Sight grid

// ============================================================
// DATA STRUCTURES
// ============================================================

#[derive(Clone, Copy, Debug)]
pub struct Vec2 {
    pub x: f32,
    pub y: f32,
}

impl Vec2 {
    pub fn new(x: f32, y: f32) -> Self { Self { x, y } }
    pub fn distance_to(&self, other: &Vec2) -> f32 {
        ((self.x - other.x).powi(2) + (self.y - other.y).powi(2)).sqrt()
    }
    pub fn distance_sq(&self, other: &Vec2) -> f32 {
        (self.x - other.x).powi(2) + (self.y - other.y).powi(2)
    }
}

#[derive(Clone, Debug)]
pub struct AABB {
    pub min_x: f32,
    pub min_y: f32,
    pub max_x: f32,
    pub max_y: f32,
}

impl AABB {
    pub fn new(min_x: f32, min_y: f32, max_x: f32, max_y: f32) -> Self {
        Self { min_x, min_y, max_x, max_y }
    }

    pub fn contains_point(&self, p: &Vec2) -> bool {
        p.x >= self.min_x && p.x <= self.max_x && p.y >= self.min_y && p.y <= self.max_y
    }

    pub fn intersects(&self, other: &AABB) -> bool {
        self.min_x <= other.max_x && self.max_x >= other.min_x &&
        self.min_y <= other.max_y && self.max_y >= other.min_y
    }

    pub fn center(&self) -> Vec2 {
        Vec2::new((self.min_x + self.max_x) / 2.0, (self.min_y + self.max_y) / 2.0)
    }

    pub fn half_size(&self) -> Vec2 {
        Vec2::new((self.max_x - self.min_x) / 2.0, (self.max_y - self.min_y) / 2.0)
    }
}

#[derive(Clone, Debug)]
pub struct MapUnit {
    pub id: u64,
    pub pos: Vec2,
    pub side: u8,        // 0 = user, 1 = enemy
    pub unit_type: u8,   // Encoded type index
    pub sight_range: f32,
}

// ============================================================
// 1. QUADTREE SPATIAL INDEX
//    Menggantikan O(N) distance checks di gameplay.tsx
//    dengan O(log N) spatial queries untuk unit dekat kamera.
// ============================================================

#[derive(Clone)]
pub struct QuadTreeNode {
    bounds: AABB,
    units: Vec<MapUnit>,
    children: Option<Box<[QuadTreeNode; 4]>>,
    depth: u32,
}

impl QuadTreeNode {
    const MAX_UNITS: usize = 8;

    pub fn new(bounds: AABB, depth: u32) -> Self {
        Self { bounds, units: Vec::new(), children: None, depth }
    }

    pub fn insert(&mut self, unit: MapUnit) -> bool {
        if !self.bounds.contains_point(&unit.pos) { return false; }

        if self.children.is_none() && self.units.len() < Self::MAX_UNITS {
            self.units.push(unit);
            return true;
        }

        if self.children.is_none() && self.depth < QUADTREE_DEPTH {
            self.subdivide();
        }

        if let Some(ref mut children) = self.children {
            for child in children.iter_mut() {
                if child.insert(unit.clone()) { return true; }
            }
        }

        // Fallback: simpan di node ini jika tidak bisa masuk ke anak
        self.units.push(unit);
        true
    }

    fn subdivide(&mut self) {
        let cx = (self.bounds.min_x + self.bounds.max_x) / 2.0;
        let cy = (self.bounds.min_y + self.bounds.max_y) / 2.0;
        let d = self.depth + 1;

        let children = Box::new([
            QuadTreeNode::new(AABB::new(self.bounds.min_x, self.bounds.min_y, cx, cy), d),
            QuadTreeNode::new(AABB::new(cx, self.bounds.min_y, self.bounds.max_x, cy), d),
            QuadTreeNode::new(AABB::new(self.bounds.min_x, cy, cx, self.bounds.max_y), d),
            QuadTreeNode::new(AABB::new(cx, cy, self.bounds.max_x, self.bounds.max_y), d),
        ]);

        self.children = Some(children);

        // Redistribute existing units
        let old_units: Vec<MapUnit> = self.units.drain(..).collect();
        for u in old_units {
            let mut placed = false;
            if let Some(ref mut ch) = self.children {
                for c in ch.iter_mut() {
                    if c.insert(u.clone()) { placed = true; break; }
                }
            }
            if !placed { self.units.push(u); }
        }
    }

    /// Query semua unit dalam area AABB (frustum culling cepat)
    pub fn query_range(&self, range: &AABB, result: &mut Vec<MapUnit>) {
        if !self.bounds.intersects(range) { return; }

        for u in &self.units {
            if range.contains_point(&u.pos) { result.push(u.clone()); }
        }

        if let Some(ref children) = self.children {
            for child in children.iter() {
                child.query_range(range, result);
            }
        }
    }

    /// Query unit terdekat dari titik (untuk tooltip hover di gameplay.tsx)
    pub fn query_nearest(&self, point: &Vec2, max_dist: f32) -> Option<MapUnit> {
        let search_box = AABB::new(
            point.x - max_dist, point.y - max_dist,
            point.x + max_dist, point.y + max_dist,
        );
        let mut candidates = Vec::new();
        self.query_range(&search_box, &mut candidates);

        candidates.into_iter()
            .min_by(|a, b| {
                a.pos.distance_sq(point)
                    .partial_cmp(&b.pos.distance_sq(point))
                    .unwrap_or(std::cmp::Ordering::Equal)
            })
    }
}

// ============================================================
// 2. MAP CHUNK STREAMING MANAGER
//    Mengelola loading/unloading chunk peta berdasarkan posisi kamera.
//    Sinkron dengan terrain_chunker.rs tapi khusus untuk war map overlay.
// ============================================================

#[derive(Clone, Debug)]
pub struct WarMapChunk {
    pub chunk_x: i32,
    pub chunk_y: i32,
    pub terrain_type: u8,     // 0=land, 1=sea, 2=coastal, 3=sand
    pub elevation_data: Vec<f32>,
    pub is_active: bool,
    pub biome_seed: f32,
}

pub struct ChunkStreamManager {
    chunks: HashMap<(i32, i32), WarMapChunk>,
    render_distance: f32,
    has_sea: bool,
}

impl ChunkStreamManager {
    pub fn new(render_dist: f32, has_sea: bool) -> Self {
        Self { chunks: HashMap::new(), render_distance: render_dist, has_sea }
    }

    /// Seed deterministik identik dengan getSeed() di CanvasMapWar.ts
    fn get_seed(x: f32, y: f32) -> f32 {
        let h = (x * 12.9898 + y * 78.233).sin() * 43758.5453;
        h - h.floor()
    }

    /// Update chunks berdasarkan posisi kamera viewport
    pub fn update_viewport(&mut self, cam_x: f32, cam_y: f32, cam_zoom: f32,
                           vp_width: f32, vp_height: f32) -> Vec<(i32, i32)> {
        let world_start_x = -cam_x / cam_zoom;
        let world_start_y = -cam_y / cam_zoom;
        let world_end_x = world_start_x + vp_width / cam_zoom;
        let world_end_y = world_start_y + vp_height / cam_zoom;

        let margin = self.render_distance;
        let c_start_x = ((world_start_x - margin) / CHUNK_SIZE).floor() as i32;
        let c_end_x = ((world_end_x + margin) / CHUNK_SIZE).ceil() as i32;
        let c_start_y = ((world_start_y - margin) / CHUNK_SIZE).floor() as i32;
        let c_end_y = ((world_end_y + margin) / CHUNK_SIZE).ceil() as i32;

        let mut active_keys = Vec::new();

        for cx in c_start_x..=c_end_x {
            for cy in c_start_y..=c_end_y {
                let world_y = cy as f32 * CHUNK_SIZE;
                let key = (cx, cy);
                active_keys.push(key);

                if !self.chunks.contains_key(&key) {
                    let world_x = cx as f32 * CHUNK_SIZE;
                    let seed = Self::get_seed(world_x, world_y);

                    let terrain_type = if self.has_sea && world_y < SEA_LEVEL_Y { 1 }
                        else if self.has_sea && (world_y - SEA_LEVEL_Y).abs() < 800.0 { 2 }
                        else { 0 };

                    let chunk = WarMapChunk {
                        chunk_x: cx, chunk_y: cy,
                        terrain_type,
                        elevation_data: vec![seed * 100.0; 16],
                        is_active: true,
                        biome_seed: seed,
                    };
                    self.chunks.insert(key, chunk);
                }
            }
        }

        // Deaktivasi chunks di luar viewport
        for (key, chunk) in self.chunks.iter_mut() {
            chunk.is_active = active_keys.contains(key);
        }

        // Garbage collect: hapus chunk yang sangat jauh
        let center_cx = ((world_start_x + world_end_x) / 2.0 / CHUNK_SIZE) as i32;
        let center_cy = ((world_start_y + world_end_y) / 2.0 / CHUNK_SIZE) as i32;
        self.chunks.retain(|&(cx, cy), _| {
            let dx = (cx - center_cx).abs();
            let dy = (cy - center_cy).abs();
            dx < 50 && dy < 50
        });

        active_keys
    }

    pub fn get_active_chunks(&self) -> Vec<&WarMapChunk> {
        self.chunks.values().filter(|c| c.is_active).collect()
    }
}

// ============================================================
// 3. LINE OF SIGHT (LOS) MAP
//    Kalkulasi visibilitas terrain untuk fog of war overlay.
//    Digunakan bersama dengan warMap.py fog_of_war_grid.
// ============================================================

pub struct LOSMap {
    grid_cols: usize,
    grid_rows: usize,
    visibility: Vec<bool>,  // true = terlihat
    elevation: Vec<f32>,
}

impl LOSMap {
    pub fn new() -> Self {
        let cols = ((THEATER_LIMIT * 2.0) / LOS_GRID_CELL) as usize;
        let rows = cols;
        Self {
            grid_cols: cols, grid_rows: rows,
            visibility: vec![false; cols * rows],
            elevation: vec![0.0; cols * rows],
        }
    }

    fn world_to_grid(&self, wx: f32, wy: f32) -> (usize, usize) {
        let c = ((wx + THEATER_LIMIT) / LOS_GRID_CELL).max(0.0).min(self.grid_cols as f32 - 1.0) as usize;
        let r = ((wy + THEATER_LIMIT) / LOS_GRID_CELL).max(0.0).min(self.grid_rows as f32 - 1.0) as usize;
        (r, c)
    }

    /// Raycasting LOS dari posisi unit ke semua sel dalam jangkauan
    pub fn cast_visibility(&mut self, origin: &Vec2, sight_range: f32) {
        let (or, oc) = self.world_to_grid(origin.x, origin.y);
        let cell_range = (sight_range / LOS_GRID_CELL) as i32 + 1;

        let r_min = (or as i32 - cell_range).max(0) as usize;
        let r_max = (or as i32 + cell_range).min(self.grid_rows as i32 - 1) as usize;
        let c_min = (oc as i32 - cell_range).max(0) as usize;
        let c_max = (oc as i32 + cell_range).min(self.grid_cols as i32 - 1) as usize;

        let origin_elev = self.elevation[or * self.grid_cols + oc];

        for r in r_min..=r_max {
            for c in c_min..=c_max {
                let dx = c as f32 - oc as f32;
                let dy = r as f32 - or as f32;
                let dist = (dx * dx + dy * dy).sqrt() * LOS_GRID_CELL;

                if dist > sight_range { continue; }

                // Simplified LOS: check elevation blocking
                let target_elev = self.elevation[r * self.grid_cols + c];
                let elev_diff = target_elev - origin_elev;

                // Jika target lebih tinggi dari sudut pandang → blocked
                if elev_diff > dist * 0.1 { continue; }

                self.visibility[r * self.grid_cols + c] = true;
            }
        }
    }

    /// Reset seluruh visibilitas (setiap turn/tick)
    pub fn reset(&mut self) {
        self.visibility.fill(false);
    }

    /// Export ke flat array untuk WASM → JS transfer
    pub fn export_visibility(&self) -> &[bool] {
        &self.visibility
    }
}

// ============================================================
// 4. WAR MAP SPATIAL ENGINE (Main Interface)
// ============================================================

pub struct WarMapSpatialEngine {
    quadtree: QuadTreeNode,
    chunk_manager: ChunkStreamManager,
    los_map: LOSMap,
    has_sea: bool,
}

impl WarMapSpatialEngine {
    pub fn new(has_sea: bool) -> Self {
        let bounds = AABB::new(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT, THEATER_LIMIT);
        Self {
            quadtree: QuadTreeNode::new(bounds, 0),
            chunk_manager: ChunkStreamManager::new(2000.0, has_sea),
            los_map: LOSMap::new(),
            has_sea,
        }
    }

    /// Rebuild quadtree dgn unit terbaru (dipanggil setiap game tick)
    pub fn rebuild_spatial_index(&mut self, units: Vec<MapUnit>) {
        let bounds = AABB::new(-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT, THEATER_LIMIT);
        self.quadtree = QuadTreeNode::new(bounds, 0);
        for u in units { self.quadtree.insert(u); }
    }

    /// Query unit dalam viewport kamera (frustum culling O(log N))
    pub fn query_viewport_units(&self, cam_x: f32, cam_y: f32, cam_zoom: f32,
                                 vp_w: f32, vp_h: f32) -> Vec<MapUnit> {
        let sx = -cam_x / cam_zoom;
        let sy = -cam_y / cam_zoom;
        let range = AABB::new(sx, sy, sx + vp_w / cam_zoom, sy + vp_h / cam_zoom);
        let mut result = Vec::new();
        self.quadtree.query_range(&range, &mut result);
        result
    }

    /// Cari unit terdekat dari titik (hover tooltip di gameplay.tsx)
    pub fn find_nearest_unit(&self, wx: f32, wy: f32, max_dist: f32) -> Option<MapUnit> {
        self.quadtree.query_nearest(&Vec2::new(wx, wy), max_dist)
    }

    /// Update chunk streaming berdasarkan kamera
    pub fn update_chunks(&mut self, cx: f32, cy: f32, zoom: f32, w: f32, h: f32) {
        self.chunk_manager.update_viewport(cx, cy, zoom, w, h);
    }

    /// Compute LOS untuk semua user units
    pub fn compute_line_of_sight(&mut self, user_units: &[MapUnit]) {
        self.los_map.reset();
        for u in user_units {
            if u.side == 0 {
                self.los_map.cast_visibility(&u.pos, u.sight_range);
            }
        }
    }
}

// ============================================================
// 5. FORCE FIELD ENGINE (3D Potential Surface Mesh)
//    High-speed Gaussian field sampler for 3D wireframe mesh.
//    Each unit emits Z = side * amplitude * exp(-dist²/2σ²)
//    Result: flat Vec<f32> of Z-heights for grid_res × grid_res vertices.
// ============================================================

pub struct ForceFieldEngine {
    grid_res: usize,
    sigma: f32,
    cell_size: f32,
    z_data: Vec<f32>,
}

#[derive(Clone, Debug)]
pub struct ForceFieldUnit {
    pub x: f32,
    pub y: f32,
    pub amplitude: f32, // positive = user peak, negative = enemy valley
}

impl ForceFieldEngine {
    pub fn new(grid_res: usize, sigma: f32) -> Self {
        let cell_size = (THEATER_LIMIT * 2.0) / grid_res as f32;
        Self {
            grid_res,
            sigma,
            cell_size,
            z_data: vec![0.0; grid_res * grid_res],
        }
    }

    /// Calculate potential field: O(units × grid²) but with early distance cutoff
    pub fn calculate(&mut self, units: &[ForceFieldUnit]) {
        // Reset
        self.z_data.fill(0.0);

        let sigma_sq_2 = 2.0 * self.sigma * self.sigma;
        let cutoff_sq = (self.sigma * 4.0) * (self.sigma * 4.0);

        for unit in units {
            for r in 0..self.grid_res {
                let wy = -THEATER_LIMIT + (r as f32 + 0.5) * self.cell_size;
                let dy = wy - unit.y;
                let dy_sq = dy * dy;

                if dy_sq > cutoff_sq { continue; }

                for c in 0..self.grid_res {
                    let wx = -THEATER_LIMIT + (c as f32 + 0.5) * self.cell_size;
                    let dx = wx - unit.x;
                    let dist_sq = dx * dx + dy_sq;

                    if dist_sq > cutoff_sq { continue; }

                    // Gaussian: e^(-dist²/2σ²)
                    let z = unit.amplitude * (-dist_sq / sigma_sq_2).exp();
                    self.z_data[r * self.grid_res + c] += z;
                }
            }
        }
    }

    /// Get Z value at grid position
    pub fn get_z(&self, row: usize, col: usize) -> f32 {
        if row < self.grid_res && col < self.grid_res {
            self.z_data[row * self.grid_res + col]
        } else {
            0.0
        }
    }

    /// Get Z range for color normalization
    pub fn z_range(&self) -> (f32, f32) {
        let mut z_min = f32::MAX;
        let mut z_max = f32::MIN;
        for &z in &self.z_data {
            if z < z_min { z_min = z; }
            if z > z_max { z_max = z; }
        }
        if z_min == f32::MAX { return (0.0, 0.0); }
        (z_min, z_max)
    }

    /// SpatialEffectEngine - Performance for Overlays (Fog, Heatmap)
    /// Offloads O(G^2 * N) nested loops from TS to Rust.
    pub struct SpatialEffectEngine {
        pub theater_limit: f32,
        pub grid_res: usize,
    }

    impl SpatialEffectEngine {
        pub fn new(limit: f32, res: usize) -> Self {
            Self { theater_limit: limit, grid_res: res }
        }

        /// Computes Fog of War grid by checking distances to user units.
        pub fn calculate_fog_grid(&self, user_units: &[UnitInfluence]) -> Vec<(f32, f32, f32)> {
            let mut fog_cells = Vec::new();
            let cell_size = (self.theater_limit * 2.0) / self.grid_res as f32;

            for r in 0..self.grid_res {
                for c in 0..self.grid_res {
                    let wx = -self.theater_limit + c as f32 * cell_size;
                    let wy = -self.theater_limit + r as f32 * cell_size;
                    
                    let mut visible = false;
                    for u in user_units {
                        let dx = (u.x - (wx + cell_size * 0.5));
                        let dy = (u.y - (wy + cell_size * 0.5));
                        if (dx*dx + dy*dy) < 6250000.0 { // 2500^2
                            visible = true;
                            break;
                        }
                    }
                    if !visible {
                        fog_cells.push((wx, wy, 0.6));
                    }
                }
            }
            fog_cells
        }

        /// Computes Territorial Influence Heatmap.
        pub fn calculate_heatmap_grid(&self, units: &[UnitInfluence]) -> Vec<(f32, f32, f32)> {
            let mut heatmap = Vec::new();
            let cell_size = (self.theater_limit * 2.0) / self.grid_res as f32;

            for r in 0..self.grid_res {
                for c in 0..self.grid_res {
                    let wx = -self.theater_limit + c as f32 * cell_size;
                    let wy = -self.theater_limit + r as f32 * cell_size;
                    
                    let mut influence = 0.0;
                    for u in units {
                        let d = ((u.x - (wx + cell_size * 0.5)).powi(2) + (u.y - (wy + cell_size * 0.5)).powi(2)).sqrt();
                        if d < 3000.0 {
                            influence += u.side * 20.0 / (1.0 + d / 500.0);
                        }
                    }

                    if influence.abs() > 3.0 {
                        heatmap.push((wx, wy, influence));
                    }
                }
            }
            heatmap
        }
    }

    /// Export flat Z data for WASM → JS transfer
    pub fn export_z_data(&self) -> &[f32] {
        &self.z_data
    }

    pub fn grid_resolution(&self) -> usize {
        self.grid_res
    }
}

// ============================================================
// WASM EXPORT INTERFACE
// ============================================================

static mut ENGINE: Option<WarMapSpatialEngine> = None;
static mut FORCE_ENGINE: Option<ForceFieldEngine> = None;

#[no_mangle]
pub extern "C" fn warmap_rs_init(has_sea: bool) {
    unsafe {
        ENGINE = Some(WarMapSpatialEngine::new(has_sea));
        FORCE_ENGINE = Some(ForceFieldEngine::new(60, 2500.0));
    }
}

#[no_mangle]
pub extern "C" fn warmap_rs_query_count(cx: f32, cy: f32, z: f32, w: f32, h: f32) -> u32 {
    unsafe {
        ENGINE.as_ref()
            .map(|e| e.query_viewport_units(cx, cy, z, w, h).len() as u32)
            .unwrap_or(0)
    }
}

#[no_mangle]
pub extern "C" fn warmap_rs_force_field_res() -> u32 {
    unsafe {
        FORCE_ENGINE.as_ref()
            .map(|e| e.grid_resolution() as u32)
            .unwrap_or(0)
    }
}

#[no_mangle]
pub extern "C" fn warmap_rs_cleanup() {
    unsafe {
        ENGINE = None;
        FORCE_ENGINE = None;
    }
}

