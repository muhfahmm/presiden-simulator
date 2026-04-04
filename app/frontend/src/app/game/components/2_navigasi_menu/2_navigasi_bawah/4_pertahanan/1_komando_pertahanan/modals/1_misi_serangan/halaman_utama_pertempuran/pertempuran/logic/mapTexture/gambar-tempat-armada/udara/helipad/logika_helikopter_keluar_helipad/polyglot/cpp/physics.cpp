/**
 * physics.cpp - Helicopter Rotor Torque & Stability
 * 
 * Responsibilities:
 * - Rotor rotation simulation (visual sync).
 * - Yaw compensation to maintain steady heading.
 */

#include <cmath>

class HeliStabilityHelper {
public:
    float rotor_rpm = 0.0f;
    float max_rpm = 400.0f;

    float calculate_spin_acceleration(float throttle) {
        // Torque-induced spin acceleration
        return (throttle * max_rpm) * 0.1f;
    }

    bool is_flight_stable(float yaw_offset) {
        // Anti-torque tail rotor simulation
        return std::abs(yaw_offset) < 5.0f;
    }
};
