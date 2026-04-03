// pergerakan.rs - Rust Movement Engine (High-Performance Spatial)
// Migrated from PertempuranIndex.tsx:L165-215

pub struct MovementUnit {
    pub id: String,
    pub x: f32,
    pub y: f32,
    pub side: String,
    pub speed: f32,
    pub range: f32,
}

pub struct MovementEngine {
    pub separation_radius: f32,
    pub separation_force: f32,
}

impl MovementEngine {
    pub fn new() -> Self {
        Self {
            separation_radius: 80.0,
            separation_force: 150.0,
        }
    }

    /// Calculate new positions for all units.
    /// Returns a list of updated coordinates and rotations.
    pub fn simulate_tick(&self, units: &mut Vec<MovementUnit>, enemies: &[MovementUnit], allies: &[MovementUnit], dt: f32) {
        for u in units.iter_mut() {
            if enemies.is_empty() { continue; }

            // 1. Separation Logic: Avoid clumping with allies (O(N^2) bottleneck migrated here)
            let mut sep_x = 0.0;
            let mut sep_y = 0.0;
            
            for a in allies {
                if a.id == u.id { continue; }
                let dx = u.x - a.x;
                let dy = u.y - a.y;
                let d2 = dx * dx + dy * dy;
                if d2 < self.separation_radius * self.separation_radius && d2 > 0.0 {
                    let d = d2.sqrt();
                    let force = (self.separation_radius - d) / self.separation_radius;
                    sep_x += (dx / d) * force * self.separation_force * dt;
                    sep_y += (dy / d) * force * self.separation_force * dt;
                }
            }

            // 2. Target Logic: Find closest enemy
            let mut closest = &enemies[0];
            let mut min_sq_dist = f32::MAX;
            
            for e in enemies {
                let dx = u.x - e.x;
                let dy = u.y - e.y;
                let sq_dist = dx * dx + dy * dy;
                if sq_dist < min_sq_dist {
                    min_sq_dist = sq_dist;
                    closest = e;
                }
            }

            let range_sq = u.range * u.range;

            if min_sq_dist > range_sq {
                // Move towards nearest enemy + separation force
                let actual_dist = min_sq_dist.sqrt();
                let dx = closest.x - u.x;
                let dy = closest.y - u.y;
                
                // Directional movement (4x speed factor from original TSX)
                let move_x = (dx / actual_dist) * u.speed * dt * 4.0;
                let move_y = (dy / actual_dist) * u.speed * dt * 4.0;
                
                u.x += move_x + sep_x;
                u.y += move_y + sep_y;
            } else {
                // Stay and separate slightly
                u.x += sep_x * 0.5;
                u.y += sep_y * 0.5;
            }
        }
    }
}
