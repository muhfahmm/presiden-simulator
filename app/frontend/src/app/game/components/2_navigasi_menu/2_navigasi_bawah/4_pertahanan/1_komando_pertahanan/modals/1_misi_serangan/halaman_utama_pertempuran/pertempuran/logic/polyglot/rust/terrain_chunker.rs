// terrain_chunker.rs - Rust WASM Map Chunking Manager
// Mengelola area peta 100 km2 (Death Row / Crown of Thorns) ke dalam sel-sel kecil.

pub struct Chunk {
    pub chunk_id: String,
    pub boundaries: (f32, f32, f32, f32), // minX, minY, maxX, maxY
    pub is_visible: bool
}

pub struct TerrainChunker {
    active_chunks: Vec<Chunk>,
    render_distance: f32
}

impl TerrainChunker {
    pub fn new(render_dist: f32) -> Self {
        Self {
            active_chunks: Vec::new(),
            render_distance: render_dist
        }
    }

    pub fn update_camera_position(&mut self, cam_x: f32, cam_y: f32) -> Vec<Chunk> {
        // Logic: Memisahkan 100km2 menjadi kotak-kotak berukuran 1000x1000 (1km2)
        // Jika kotak tersebut masuk dalam radius 'render_distance' dari kamera,
        // masukan kotak tersebut ke array Active Chunks untuk dirender TSX.
        
        let mut visible_chunks = Vec::new();
        // .. frustum / chunk bounds math ..
        visible_chunks
    }
}
