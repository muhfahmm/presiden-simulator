/**
 * efek_bom.cpp - Particle Emission & Shockwave Dynamics
 * 
 * Responsibilities:
 * - Define explosion velocity and expansion rate.
 * - Manage particle count for tactical simulation performance.
 */

#include <cmath>

struct ExplosionParameters {
    float initial_velocity = 500.0f;
    float expansion_rate = 1.2f;
    int particle_count = 100;

    float get_radius_at_time(float time_seconds) {
        // Logarithmic expansion simulation
        return initial_velocity * std::log1p(time_seconds * expansion_rate);
    }
};
