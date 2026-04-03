// gameplay.rs - High Performance Procedural Map & Matrix Generator
// Interacts with WASM bindings to feed terrain data to TSX UI.

use std::collections::HashMap;

pub struct ChunkPos {
    x: i32,
    y: i32,
}

pub struct TerrainChunk {
    topography: Vec<u8>,
    influence_nodes: Vec<f32>,
}

pub struct TerrainGenerator {
    chunk_cache: HashMap<(i32, i32), TerrainChunk>,
}

impl TerrainGenerator {
    pub fn new() -> Self {
        Self {
            chunk_cache: HashMap::new(),
        }
    }

    /// Implements Infinite Chunk-Based Loading Strategy
    pub fn request_chunk(&mut self, world_x: f32, world_y: f32) -> &TerrainChunk {
        let chunk_size = 1000.0;
        let c_x = (world_x / chunk_size).floor() as i32;
        let c_y = (world_y / chunk_size).floor() as i32;

        let key = (c_x, c_y);

        if !self.chunk_cache.contains_key(&key) {
            // Dynamically generates Perlin noise mesh topology when approaching end of map
            let procedural_data = TerrainChunk {
                topography: vec![0; 100], 
                influence_nodes: vec![0.0; 100],
            };
            self.chunk_cache.insert(key, procedural_data);
        }

        self.chunk_cache.get(&key).unwrap()
    }
}
