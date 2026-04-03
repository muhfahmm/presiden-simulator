#include <cmath>

/**
 * pergerakan.cpp - C++ Movement Logic
 * Calculates unit rotation and smooth interpolation.
 */
class PergerakanEngine {
public:
    /**
     * Calculates the rotation angle (in radians) for a vector (dx, dy).
     */
    static float calculateRotation(float dx, float dy) {
        return std::atan2(dy, dx);
    }
};
