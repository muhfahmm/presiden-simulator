// math_core.cpp
// High-performance mathematical computations for the map engine.

#include <cmath>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

extern "C" {
    // Calculate the strategic distance between two coordinates
    // used for trade route optimization.
    double calculate_strategic_distance(double lat1, double lon1, double lat2, double lon2) {
        double dLat = (lat2 - lat1) * M_PI / 180.0;
        double dLon = (lon2 - lon1) * M_PI / 180.0;

        lat1 = (lat1) * M_PI / 180.0;
        lat2 = (lat2) * M_PI / 180.0;

        double a = pow(sin(dLat / 2), 2) +
                   pow(sin(dLon / 2), 2) *
                   cos(lat1) * cos(lat2);
        double rad = 6371; // Earth radius in km
        double c = 2 * asin(sqrt(a));
        return rad * c;
    }

    // New: Miller Projection Calculation for Realistic Curvature
    typedef struct {
        double x;
        double y;
    } Point;

    Point project_miller(double lat, double lon, double width, double height) {
        Point p;
        p.x = ((lon + 180.0) / 360.0) * width;
        
        double lat_rad = lat * M_PI / 180.0;
        double y_miller = 1.25 * log(tan(M_PI / 4.0 + 0.4 * lat_rad));
        
        p.y = (height / 2.0) - (y_miller * (height / (2.0 * 2.3)));
        return p;
    }
}
