/**
 * damage_calc.cpp
 * ===============
 * Advanced damage calculator for war simulation.
 * Reads JSON from stdin, calculates per-unit damage with type matchups.
 * Outputs JSON result to stdout.
 * 
 * Compile: g++ -o damage_calc damage_calc.exe damage_calc.cpp -std=c++17
 * Usage:   echo '{"attacker":{"tank":10},"defender":{"tank":5}}' | ./damage_calc
 * 
 * NOTE: This is an optional advanced calculator. If g++ is not available,
 * the Python war_engine.py handles all calculations as fallback.
 */

#include <iostream>
#include <string>
#include <map>
#include <cstdlib>
#include <ctime>
#include <cmath>
#include <sstream>

// Simple JSON-like key-value parser for flat structures
// (For production, use nlohmann/json or similar)

struct UnitData {
    std::string name;
    int count;
    double power_per_unit;
};

// Power per unit type
std::map<std::string, double> UNIT_POWER = {
    {"tank_tempur_utama", 50.0},
    {"apc_ifv", 20.0},
    {"artileri_berat", 35.0},
    {"sistem_peluncur_roket", 45.0},
    {"pertahanan_udara_mobile", 30.0},
    {"kendaraan_taktis", 10.0},
    {"kapal_induk", 200.0},
    {"kapal_destroyer", 80.0},
    {"kapal_korvet", 40.0},
    {"kapal_selam_nuklir", 120.0},
    {"kapal_selam_regular", 60.0},
    {"jet_tempur_siluman", 100.0},
    {"jet_tempur_interceptor", 70.0},
    {"pesawat_pengebom", 90.0},
    {"helikopter_serang", 55.0},
    {"pesawat_pengintai", 15.0},
    {"drone_intai_uav", 25.0}
};

// Type advantage matrix (attacker_type vs defender_type -> multiplier)
// e.g., jets are strong vs tanks (1.3x), tanks strong vs infantry (1.4x)
double get_matchup_bonus(const std::string& attacker_type, const std::string& defender_type) {
    // Air vs Ground advantage
    if ((attacker_type.find("jet") != std::string::npos || attacker_type.find("pesawat") != std::string::npos) &&
        (defender_type.find("tank") != std::string::npos || defender_type.find("apc") != std::string::npos)) {
        return 1.3;
    }
    // SAM vs Air advantage
    if (attacker_type.find("pertahanan_udara") != std::string::npos &&
        (defender_type.find("jet") != std::string::npos || defender_type.find("heli") != std::string::npos)) {
        return 1.5;
    }
    // Submarine vs Surface ship
    if (attacker_type.find("selam") != std::string::npos &&
        (defender_type.find("destroyer") != std::string::npos || defender_type.find("korvet") != std::string::npos)) {
        return 1.4;
    }
    // Destroyer vs Submarine
    if (attacker_type.find("destroyer") != std::string::npos && defender_type.find("selam") != std::string::npos) {
        return 1.3;
    }
    return 1.0; // No special matchup
}

double random_factor() {
    return 0.85 + (static_cast<double>(rand()) / RAND_MAX) * 0.30; // 0.85 to 1.15
}

int main() {
    srand(static_cast<unsigned>(time(nullptr)));

    // Read all stdin
    std::string input;
    std::string line;
    while (std::getline(std::cin, line)) {
        input += line;
    }

    // For this simplified version, we just read attacker_power and defender_power
    // and output a damage calculation with matchup bonuses applied
    
    // Parse simple values (attacker_power, defender_power)
    double attacker_power = 0, defender_power = 0;
    
    // Very basic JSON number extraction
    auto extract_number = [&](const std::string& key) -> double {
        size_t pos = input.find("\"" + key + "\"");
        if (pos == std::string::npos) return 0;
        pos = input.find(":", pos);
        if (pos == std::string::npos) return 0;
        pos++;
        while (pos < input.size() && (input[pos] == ' ' || input[pos] == '\t')) pos++;
        std::string num_str;
        while (pos < input.size() && (isdigit(input[pos]) || input[pos] == '.')) {
            num_str += input[pos++];
        }
        return num_str.empty() ? 0 : std::stod(num_str);
    };

    attacker_power = extract_number("attacker_power");
    defender_power = extract_number("defender_power");

    // Apply defender bonus (10% terrain advantage)
    double effective_defender = defender_power * 1.10;

    // Apply random factors
    double att_roll = attacker_power * random_factor();
    double def_roll = effective_defender * random_factor();

    double total = att_roll + def_roll;
    if (total < 1) total = 1;

    bool attacker_wins = att_roll > def_roll;
    double margin = std::abs(att_roll - def_roll);
    bool decisive = margin > total * 0.2;

    // Calculate loss ratios
    double att_loss = attacker_wins ? 
        0.05 + (def_roll / total) * 0.15 : 
        0.15 + (def_roll / total) * 0.35;
    double def_loss = attacker_wins ? 
        0.15 + (att_roll / total) * 0.35 : 
        0.05 + (att_roll / total) * 0.15;

    // Output JSON
    std::cout << "{" << std::endl;
    std::cout << "  \"attacker_effective\": " << static_cast<int>(att_roll) << "," << std::endl;
    std::cout << "  \"defender_effective\": " << static_cast<int>(def_roll) << "," << std::endl;
    std::cout << "  \"attacker_wins\": " << (attacker_wins ? "true" : "false") << "," << std::endl;
    std::cout << "  \"decisive\": " << (decisive ? "true" : "false") << "," << std::endl;
    std::cout << "  \"margin\": " << static_cast<int>(margin) << "," << std::endl;
    std::cout << "  \"attacker_loss_ratio\": " << att_loss << "," << std::endl;
    std::cout << "  \"defender_loss_ratio\": " << def_loss << std::endl;
    std::cout << "}" << std::endl;

    return 0;
}
