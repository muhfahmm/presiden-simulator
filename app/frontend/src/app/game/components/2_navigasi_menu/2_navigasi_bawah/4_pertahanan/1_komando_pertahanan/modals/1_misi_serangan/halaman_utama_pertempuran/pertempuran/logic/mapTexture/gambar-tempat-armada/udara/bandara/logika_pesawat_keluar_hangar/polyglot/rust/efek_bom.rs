/**
 * efek_bom.rs - High-Performance Damage Falloff Calculator
 * 
 * Responsibilities:
 * - Calculate blast pressure based on Distance from epicenter.
 * - Determine structural damage multipliers.
 */

pub struct BombEffect {
    pub radius: f32,
    pub epicenter_damage: f32,
}

impl BombEffect {
    pub fn calculate_damage_at(&self, distance: f32) -> f32 {
        if distance >= self.radius {
            return 0.0;
        }
        // Linear falloff: 1.0 at center, 0.0 at radius edge
        let factor = 1.0 - (distance / self.radius);
        self.epicenter_damage * factor
    }
}
