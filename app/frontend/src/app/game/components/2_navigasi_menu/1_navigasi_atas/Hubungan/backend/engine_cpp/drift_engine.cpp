#include <iostream>
#include <vector>
#include <string>
#include <random>
#include <map>

// Struct to represent a relationship entry
struct RelationEntry {
    float score;
    int embassy;
    int pact;
    int alliance;
    int trade;
};

// Global matrix simulation
extern "C" {
    /**
     * calculate_drift_batch
     * Performs O(N^2) drift calculation including Triad Alignment.
     * inputs: 
     * - scores: flat array of size count * count
     * - statuses: flat array of size count * count * 4 (e, p, a, t)
     */
    void calculate_drift_batch(float* scores, int* statuses, int count, float user_drift_factor) {
        std::random_device rd;
        std::mt19937 gen(rd());
        std::uniform_real_distribution<> dis(-0.4, 0.4);
        std::uniform_real_distribution<> chance_dis(0, 1);

        for (int i = 0; i < count; ++i) {
            for (int j = 0; j < count; ++j) {
                if (i == j) continue;

                int idx = i * count + j;
                float current_score = scores[idx];
                
                // 1. Basic Drift
                float drift = dis(gen);

                // 2. Status Modifiers
                int e = statuses[idx * 4 + 0];
                int p = statuses[idx * 4 + 1];
                int a = statuses[idx * 4 + 2];
                int t = statuses[idx * 4 + 3];

                if (a) drift += 0.25f;
                else if (p) drift += 0.15f;
                else if (t) drift += 0.10f;

                if (e) drift += (0.001f / 7.0f);
                else drift -= (0.01f / 7.0f);

                // 3. Triad Alignment (Sampling 5 random third parties)
                for (int k = 0; k < 5; ++k) {
                    int third = std::uniform_int_distribution<>(0, count - 1)(gen);
                    if (third == i || third == j) continue;

                    float i_to_third = scores[i * count + third];
                    float third_to_j = scores[third * count + j];

                    if (i_to_third > 70.0f && third_to_j > 70.0f) drift += 0.05f;
                    else if (i_to_third > 70.0f && third_to_j < 30.0f) drift -= 0.05f;
                }

                // Apply drift
                scores[idx] = std::max(0.0f, std::min(100.0f, current_score + drift));
            }
        }
    }
}
