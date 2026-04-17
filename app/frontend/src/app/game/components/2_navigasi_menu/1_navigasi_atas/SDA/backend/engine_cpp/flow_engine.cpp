#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <cmath>

extern "C" {
    /**
     * calculate_flow_batch
     * Calculates extraction, consumption, and surplus for all commodities.
     * inputs:
     * - production: array of size country_count * commodity_count
     * - population: array of size country_count
     * - consumption_ratios: array of size commodity_count
     * - results_net: output array of size country_count * commodity_count
     */
    void calculate_flow_batch(
        float* production, 
        float* population, 
        float* consumption_ratios, 
        float* results_net,
        int country_count,
        int commodity_count
    ) {
        for (int i = 0; i < country_count; ++i) {
            float pop_juta = population[i] / 1000000.0f;
            float pop_factor = std::max(0.5f, std::min(2.0f, pop_juta / 100.0f));

            for (int j = 0; j < commodity_count; ++j) {
                int idx = i * commodity_count + j;
                float prod = production[idx];
                float base_cons_ratio = consumption_ratios[j];

                float consumption = prod * base_cons_ratio * pop_factor;
                results_net[idx] = prod - consumption;
            }
        }
    }
}
