// PriceCalculator.cpp
// Core high-performance engine for economic simulations.

#include <iostream>

class PriceCalculator {
public:
    double calculateNewPrice(double base, double multiplier) {
        return base * multiplier;
    }
};

int main() {
    PriceCalculator calc;
    std::cout << "Price calculated: " << calc.calculateNewPrice(100.0, 1.05) << std::endl;
    return 0;
}
