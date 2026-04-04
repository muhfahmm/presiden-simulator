/**
 * physics.rs - Helicopter Lift & Rotor Physics
 * 
 * Responsibilities:
 * - Calculate Vertical Take-Off (Lift) force.
 * - Manage altitude climb rates based on engine power.
 */

pub struct HeliPhysics {
    pub engine_power: f32,
    pub drag_coefficient: f32,
}

impl HeliPhysics {
    pub fn calculate_climb_rate(&self, current_altitude: f32) -> f32 {
        // High lift near ground (ground effect), decreasing with altitude
        let lift = self.engine_power * (1.0 / (1.0 + current_altitude * 0.01));
        lift - (current_altitude * self.drag_coefficient)
    }
}
