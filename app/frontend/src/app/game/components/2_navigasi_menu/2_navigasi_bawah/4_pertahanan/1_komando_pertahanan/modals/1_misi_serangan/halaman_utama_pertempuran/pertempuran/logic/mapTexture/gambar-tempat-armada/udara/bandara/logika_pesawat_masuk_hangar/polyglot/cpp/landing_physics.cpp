/**
 * landing_physics.cpp - Landing Gear Suspension
 */

#include <algorithm>

class GearSuspension {
public:
    float compression_ratio = 0.0f;
    float damping_factor = 25.0f;

    float calculate_impact_absorption(float vertical_speed) {
        // Linear damping for touchdown
        return vertical_speed * damping_factor;
    }

    bool is_gear_locked(float hydraulic_pressure) {
        return hydraulic_pressure > 3000.0f;
    }
};
