// gameplay.cpp - Engine Graphics Offloading & Logic
// Architected for WebAssembly Optimization

#include <vector>
#include <cmath>

struct Vector2 {
    float x;
    float y;
};

struct Unit {
    int id;
    Vector2 pos;
    float radius;
};

class GameplayEngineCPP {
public:
    // Implements Frustum Culling to filter active units rendering off-screen
    std::vector<Unit> getVisibleUnits(const std::vector<Unit>& all_units, Vector2 cam_pos, float zoom, float viewport_width, float viewport_height) {
        std::vector<Unit> visible;
        
        float start_x = -cam_pos.x / zoom;
        float start_y = -cam_pos.y / zoom;
        float end_x = start_x + (viewport_width / zoom);
        float end_y = start_y + (viewport_height / zoom);
        
        for (const auto& u : all_units) {
            // Buffer to ensure objects partially outside view still render securely
            if (u.pos.x + u.radius >= start_x && u.pos.x - u.radius <= end_x &&
                u.pos.y + u.radius >= start_y && u.pos.y - u.radius <= end_y) {
                visible.push_back(u);
            }
        }
        
        return visible;
    }
};
