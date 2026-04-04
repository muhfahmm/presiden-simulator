/**
 * victory_check.rs - High-Performance Entity Validator
 * 
 * Responsibilities:
 * - Validate zero-active-hostile state across map boundaries.
 * - Detect hidden units in the fog of war.
 */

pub fn is_victory_achieved(user_unit_count: u32, structure_count: u32) -> bool {
    // If no user-side entities remain, the defense (enemy side) has won.
    user_unit_count == 0 && structure_count == 0
}

/**
 * Validates if a new launch is authorized based on active airborne capacity.
 */
pub fn can_launch_aircraft(active_count: u32, max_active: u32) -> bool {
    active_count < max_active
}
