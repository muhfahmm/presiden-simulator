/**
 * TacticalRenderer (RUST) - EXTREME PERFORMANCE VERSION
 * Optimized for 42,000+ units using Spatial Grid Indexing.
 */

const GRID_SIZE: usize = 32;

pub struct TacticalRenderer {
    pub scale: f64,
    pub is_paused: bool,
    pub width: f32,
    pub height: f32,
    // Spatial grid for fast proximity checks
    pub grid: Vec<Vec<usize>>, 
}

#[derive(Debug, Clone, Copy)]
pub struct TacticalPoint {
    pub x: f32,
    pub y: f32,
    pub intensity: f32,
}

impl TacticalRenderer {
    pub fn new(width: f32, height: f32, scale: f64) -> Self {
        Self { 
            width, 
            height, 
            scale, 
            is_paused: false,
            grid: vec![vec![]; GRID_SIZE * GRID_SIZE],
        }
    }

    /**
     * Rebuilds the spatial grid for 42k units.
     * Call this once per frame before proximity checks.
     */
    pub fn rebuild_grid(&mut self, units: &[TacticalPoint]) {
        for cell in self.grid.iter_mut() { cell.clear(); }
        
        for (idx, unit) in units.iter().enumerate() {
            let gx = (unit.x / self.width * (GRID_SIZE as f32)) as usize;
            let gy = (unit.y / self.height * (GRID_SIZE as f32)) as usize;
            
            if gx < GRID_SIZE && gy < GRID_SIZE {
                self.grid[gy * GRID_SIZE + gx].push(idx);
            }
        }
    }

    /**
     * Spatial Proximity Check: Only checks nearby grid cells.
     * O(1) complexity relative to total unit count.
     */
    pub fn check_proximity_spatial(&self, units: &[TacticalPoint], target: (f32, f32), radius: f32) -> Vec<usize> {
        let gx = (target.0 / self.width * (GRID_SIZE as f32)) as usize;
        let gy = (target.1 / self.height * (GRID_SIZE as f32)) as usize;
        let r_sq = radius * radius;
        let mut results = Vec::new();

        if gx < GRID_SIZE && gy < GRID_SIZE {
            // Check current and neighboring 8 cells
            for dy in -1..=1 {
                for dx in -1..=1 {
                    let nx = gx as isize + dx;
                    let ny = gy as isize + dy;
                    
                    if nx >= 0 && nx < GRID_SIZE as isize && ny >= 0 && ny < GRID_SIZE as isize {
                        let cell_idx = (ny as usize) * GRID_SIZE + (nx as usize);
                        for &unit_idx in &self.grid[cell_idx] {
                            let p = &units[unit_idx];
                            let d2 = (p.x - target.0).powi(2) + (p.y - target.1).powi(2);
                            if d2 < r_sq { results.push(unit_idx); }
                        }
                    }
                }
            }
        }
        results
    }
}
