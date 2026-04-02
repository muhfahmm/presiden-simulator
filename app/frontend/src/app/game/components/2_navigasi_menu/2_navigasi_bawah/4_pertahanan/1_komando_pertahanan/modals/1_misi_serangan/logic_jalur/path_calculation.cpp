#include <iostream>
#include <vector>
#include <cmath>
#include <string>
#include <iomanip>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

struct Point {
    double lon;
    double lat;
};

/**
 * High-performance path distance calculation for mission logistics.
 */
int main(int argc, char* argv[]) {
    if (argc < 5) {
        std::cerr << "Error: Not enough arguments" << std::endl;
        return 1;
    }

    try {
        double s_lon = std::stod(argv[1]);
        double s_lat = std::stod(argv[2]);
        double e_lon = std::stod(argv[3]);
        double e_lat = std::stod(argv[4]);

        // Haversine formula for distance
        double R = 6371.0;
        double dLat = (e_lat - s_lat) * M_PI / 180.0;
        double dLon = (e_lon - s_lon) * M_PI / 180.0;
        double a = std::sin(dLat / 2) * std::sin(dLat / 2) +
                   std::cos(s_lat * M_PI / 180.0) * std::cos(e_lat * M_PI / 180.0) *
                   std::sin(dLon / 2) * std::sin(dLon / 2);
        double c = 2 * std::atan2(std::sqrt(a), std::sqrt(1 - a));
        double distance = R * c;

        // Output mission duration (scaled)
        std::cout << std::fixed << std::setprecision(2) << distance << std::endl;
    } catch (...) {
        std::cerr << "Error: Invalid coordinates" << std::endl;
        return 1;
    }

    return 0;
}
