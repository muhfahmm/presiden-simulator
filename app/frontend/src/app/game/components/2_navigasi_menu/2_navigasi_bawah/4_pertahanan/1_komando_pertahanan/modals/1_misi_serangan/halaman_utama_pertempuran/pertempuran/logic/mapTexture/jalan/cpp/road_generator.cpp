/**
 * Road Generator - C++ Implementation
 * Membuat tekstur jalan berwarna hitam dengan garis putus-putus putih
 */

#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <cstdint>
#include <algorithm>

// Simple JSON parser untuk config
struct Color {
    uint8_t r, g, b;
};

struct RoadConfig {
    int width = 512;
    int height = 512;
    int roadWidth = 50;
    int dashLength = 20;
    int dashGap = 10;
    Color roadColor = {0, 0, 0};
    Color dashColor = {255, 255, 255};
};

class RoadGenerator {
private:
    RoadConfig config;
    std::vector<uint8_t> imageData;

    Color parseColor(const std::string& hexColor) {
        Color color;
        std::string hex = hexColor;
        if (hex[0] == '#') hex = hex.substr(1);
        
        color.r = std::stoi(hex.substr(0, 2), nullptr, 16);
        color.g = std::stoi(hex.substr(2, 2), nullptr, 16);
        color.b = std::stoi(hex.substr(4, 2), nullptr, 16);
        
        return color;
    }

    void setPixel(int x, int y, const Color& color) {
        if (x >= 0 && x < config.width && y >= 0 && y < config.height) {
            int index = (y * config.width + x) * 3;
            imageData[index] = color.r;
            imageData[index + 1] = color.g;
            imageData[index + 2] = color.b;
        }
    }

public:
    RoadGenerator(const RoadConfig& cfg) : config(cfg) {
        imageData.resize(config.width * config.height * 3);
    }

    void generate() {
        // Fill dengan warna jalan (hitam)
        for (int y = 0; y < config.height; y++) {
            for (int x = 0; x < config.width; x++) {
                setPixel(x, y, config.roadColor);
            }
        }

        // Gambar garis putus-putus di tengah
        int centerX = config.width / 2;
        int dashWidth = 4;
        int yPos = 0;

        while (yPos < config.height) {
            int yEnd = std::min(yPos + config.dashLength, config.height);
            int xStart = centerX - dashWidth / 2;
            int xEnd = centerX + dashWidth / 2;

            // Gambar dash
            for (int y = yPos; y < yEnd; y++) {
                for (int x = xStart; x < xEnd; x++) {
                    setPixel(x, y, config.dashColor);
                }
            }

            yPos += config.dashLength + config.dashGap;
        }
    }

    std::string toJSON() const {
        std::ostringstream oss;
        oss << "{\"imageData\":[";
        
        for (size_t i = 0; i < imageData.size(); i++) {
            if (i > 0) oss << ",";
            oss << static_cast<int>(imageData[i]);
        }
        
        oss << "],\"width\":" << config.width 
            << ",\"height\":" << config.height << "}";
        
        return oss.str();
    }
};

int main(int argc, char* argv[]) {
    if (argc < 2) {
        std::cerr << "{\"error\":\"No configuration provided\"}" << std::endl;
        return 1;
    }

    try {
        // Parse config dari JSON (simplified)
        RoadConfig config;
        // TODO: Implement proper JSON parsing
        // Untuk sekarang gunakan default values
        
        RoadGenerator generator(config);
        generator.generate();
        
        std::cout << generator.toJSON() << std::endl;
        
    } catch (const std::exception& e) {
        std::cerr << "{\"error\":\"" << e.what() << "\"}" << std::endl;
        return 1;
    }

    return 0;
}
