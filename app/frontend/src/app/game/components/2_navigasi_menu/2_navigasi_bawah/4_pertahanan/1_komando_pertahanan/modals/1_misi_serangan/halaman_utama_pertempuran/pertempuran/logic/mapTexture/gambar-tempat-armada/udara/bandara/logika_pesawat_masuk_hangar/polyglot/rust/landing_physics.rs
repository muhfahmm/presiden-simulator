/**
 * landing_physics.rs - Aircraft Braking & Tire Friction
 */

pub struct LandingBrakes {
    pub friction_coefficient: f32,
    pub brake_force: f32,
}

impl LandingBrakes {
    pub fn calculate_deceleration(&self, current_velocity: f32) -> f32 {
        // Friction increases as weight settles on wheels
        let effective_friction = self.friction_coefficient * 1.5;
        (current_velocity * effective_friction) + self.brake_force
    }
}
