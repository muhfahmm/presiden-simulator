// tembakan.rs - Rust Combat Engine (High-Performance)
// Handles target distance checks and firing conditions.

pub struct CombatEngine;

impl CombatEngine {
    pub fn is_in_range(ax: f32, ay: f32, tx: f32, ty: f32, range: f32) -> bool {
        let dx = ax - tx;
        let dy = ay - ty;
        dx * dx + dy * dy <= range * range
    }
}
