/**
 * spatial_vfx.rs
 * [SPATIAL EXPLOSION ENGINE]
 * 
 * High-performance Area-of-Effect (AOE) calculation for tactile combat impact.
 */

pub struct ExplosionEffect {
    pub radius: f32,
    pub shockwave_speed: f32,
    pub dissipation_rate: f32,
    pub debris_count: u32,
    pub debris_max_velocity: f32,
}

impl ExplosionEffect {
    pub fn get_magnitude(source_type: &str, is_critical: bool) -> Self {
        match source_type {
            "destroyer" | "induk" | "artileri_berat" => {
                ExplosionEffect {
                    radius: if is_critical { 1500.0 } else { 1000.0 },
                    shockwave_speed: 120.0,
                    dissipation_rate: 0.95,
                    debris_count: 50,
                    debris_max_velocity: 15.0,
                }
            },
            "tank" | "roket" | "sam" => {
                ExplosionEffect {
                    radius: 400.0,
                    shockwave_speed: 80.0,
                    dissipation_rate: 0.85,
                    debris_count: 20,
                    debris_max_velocity: 8.0,
                }
            },
            _ => {
                ExplosionEffect {
                    radius: 200.0,
                    shockwave_speed: 60.0,
                    dissipation_rate: 0.80,
                    debris_count: 10,
                    debris_max_velocity: 5.0,
                }
            },
        }
    }
}
