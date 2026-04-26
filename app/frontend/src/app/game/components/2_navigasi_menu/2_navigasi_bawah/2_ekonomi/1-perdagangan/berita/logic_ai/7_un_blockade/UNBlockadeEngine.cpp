// UNBlockadeEngine.cpp
// High-performance engine for checking UN-mandated blockades during real-time processing.

#include <iostream>
#include <string>
#include <vector>

struct UNResolution {
    std::string targetCountry;
    std::string type;
    bool isPassed;
};

class UNBlockadeEngine {
private:
    std::vector<UNResolution> resolutions;

public:
    UNBlockadeEngine() {
        // Mock passed resolution
        resolutions.push_back({"Negara X", "Total Embargo", true});
    }

    bool isBlockaded(std::string countryName) {
        for (const auto& res : resolutions) {
            if (res.isPassed && res.targetCountry == countryName) {
                return true;
            }
        }
        return false;
    }

    double getPriceMultiplier(std::string countryName) {
        return isBlockaded(countryName) ? 3.0 : 1.0;
    }
};

int main() {
    UNBlockadeEngine engine;
    std::string testCountry = "Negara X";
    
    if (engine.isBlockaded(testCountry)) {
        std::cout << "Negara " << testCountry << " sedang diblokade PBB!" << std::endl;
        std::cout << "Multiplier Harga: " << engine.getPriceMultiplier(testCountry) << "x" << std::endl;
    }
    
    return 0;
}
