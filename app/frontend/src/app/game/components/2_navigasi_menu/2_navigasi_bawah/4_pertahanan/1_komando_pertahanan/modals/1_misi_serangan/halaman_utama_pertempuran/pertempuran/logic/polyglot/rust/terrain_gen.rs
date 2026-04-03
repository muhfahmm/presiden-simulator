// terrain_gen.rs - Rust WebAssembly Procedural Map Generation

// Simulasi Crate perlin noise
pub fn generate_simplex_noise(chunk_x: i32, chunk_y: i32) -> Vec<(f32, f32, f32)> {
    let mut polygons = Vec::new();
    
    // Alih-alih di TSX, kalkulasi matematika sin/cos triliunan polygon dijalankan di WASM Memory!
    for layer in 0..5 {
        let radius = 200.0 - (layer as f32 * 40.0);
        
        let mut angle: f32 = 0.0;
        while angle < std::f32::consts::PI * 2.0 {
             let noise = (angle * 3.0).sin() * 20.0 + (angle * 5.0).cos() * 15.0;
             polygons.push((
                 chunk_x as f32 + angle.cos() * (radius + noise),
                 chunk_y as f32 + angle.sin() * (radius + noise),
                 layer as f32
             ));
             angle += 0.1;
        }
    }
    
    // Array GeoJSON/Titik mentah dilempar ke TSX untuk digambar tanpa kalkulasi internal
    polygons
}
