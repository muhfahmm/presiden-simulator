/**
 * vfx_engine.cpp
 * [CORE COMBAT VFX ENGINE]
 * 
 * Performance-critical muzzle flash and particle physics calculations.
 */

#include <iostream>
#include <vector>
#include <string>
#include <cmath>

struct VFXSpark {
    float vx;
    float vy;
    float size;
    float life; // 0 to 1
};

struct VFXMuzzleFlash {
    float intensity;
    float spread;
    std::string color;
    std::vector<VFXSpark> sparks;
};

class MuzzleFlashManager {
public:
    VFXMuzzleFlash calculateFlash(std::string unitType, float rotation) {
        VFXMuzzleFlash flash;
        int sparkCount = 0;
        
        if (unitType == "tank" || unitType == "artileri") {
            flash.intensity = 1.0f;
            flash.color = "#fbbf24";
            sparkCount = 30;
        } else if (unitType == "infanteri") {
            flash.intensity = 0.4f;
            flash.color = "#fef08a";
            sparkCount = 8;
        } else {
            flash.intensity = 0.6f;
            flash.color = "#ffffff";
            sparkCount = 15;
        }

        // Complex Spark Simulation Logic
        for (int i = 0; i < sparkCount; i++) {
            float angle = rotation + ((float)rand() / RAND_MAX - 0.5f) * 0.8f;
            float speed = 2.0f + ((float)rand() / RAND_MAX) * 5.0f;
            VFXSpark spark;
            spark.vx = cos(angle) * speed;
            spark.vy = sin(angle) * speed;
            spark.size = 1.0f + ((float)rand() / RAND_MAX) * 3.0f;
            spark.life = 0.5f + ((float)rand() / RAND_MAX) * 0.5f;
            flash.sparks.push_back(spark);
        }
        
        return flash;
    }
};
