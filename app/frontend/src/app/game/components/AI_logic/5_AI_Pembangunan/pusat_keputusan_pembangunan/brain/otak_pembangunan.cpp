#include <iostream>
#include <string>
#include <vector>
#include <cmath>
#include <algorithm>
#include <iomanip>

/**
 * OTAK PEMBANGUNAN AI (C++ Version)
 * Optimized for lightweight high-performance NPC decision making.
 */

using namespace std;

// Minimalist JSON value extractor for flat objects
double getNum(const string& json, const string& key) {
    size_t pos = json.find("\"" + key + "\":");
    if (pos == string::npos) return 0;
    size_t start = json.find_first_of("0123456789.-", pos + key.length() + 2);
    if (start == string::npos) return 0;
    size_t end = json.find_first_of(",}", start);
    try {
        return stod(json.substr(start, end - start));
    } catch (...) { return 0; }
}

string getStr(const string& json, const string& key) {
    size_t pos = json.find("\"" + key + "\":\"");
    if (pos == string::npos) return "";
    size_t start = pos + key.length() + 4;
    size_t end = json.find("\"", start);
    return json.substr(start, end - start);
}

int main() {
    string input;
    getline(cin, input);

    if (input.empty()) return 1;

    // 1. Parse Flat Payload
    string negara = getStr(input, "negara");
    double budget = getNum(input, "budget");
    double pop = getNum(input, "pop");
    int queue_count = (int)getNum(input, "q");
    double income = getNum(input, "income");
    string date = getStr(input, "date");

    // Current Units
    double r_sub = getNum(input, "r_sub");
    double apart = getNum(input, "apart");
    double mans = getNum(input, "mans");

    // Costs
    double cost_sub = getNum(input, "cost_sub");
    double cost_apart = getNum(input, "cost_apart");
    double cost_mans = getNum(input, "cost_mans");

    // 2. Capacity Calculations
    double cap_sub = r_sub * 5;
    double cap_apart = apart * 6000;
    double cap_mans = mans * 10;

    // 3. Target Coverage (Standard EM Ratios)
    double target_sub_pop = pop * 0.55;
    double target_apart_pop = pop * 0.40;
    double target_mans_pop = pop * 0.05;

    // 4. Coverage Ratios
    double cov_sub = (target_sub_pop > 0) ? (cap_sub / target_sub_pop) : 1.0;
    double cov_apart = (target_apart_pop > 0) ? (cap_apart / target_apart_pop) : 1.0;
    double cov_mans = (target_mans_pop > 0) ? (cap_mans / target_mans_pop) : 1.0;

    // 5. DECISION LOGIC: Find Worst Sector
    struct Sector { string key; double cov; double cost; string label; double unit_cap; };
    vector<Sector> sectors = {
        {"rumah_subsidi", cov_sub, cost_sub, "Rumah Subsidi", 5},
        {"apartemen", cov_apart, cost_apart, "Apartemen", 6000},
        {"mansion", cov_mans, cost_mans, "Mansion", 10}
    };

    Sector* worst = &sectors[0];
    for(int i=1; i<sectors.size(); ++i) {
        if(sectors[i].cov < worst->cov) worst = &sectors[i];
    }

    // 6. Mandatory Building Check
    // If coverage < 100% and we have money, we MUST build.
    double safety_reserve = max(income * 1.0, 0.0); 
    double spendable = budget - safety_reserve;

    // Queue limit: AI can handle up to 5 concurrent projects
    if (queue_count < 5 && worst->cov < 1.0) {
        if (spendable >= worst->cost) {
            // Determine quantity
            int affordable_qty = (int)(spendable / worst->cost);
            int needed_units = (int)ceil(( (pop * (worst->key=="rumah_subsidi"?0.55:worst->key=="apartemen"?0.40:0.05)) - (worst->key=="rumah_subsidi"?cap_sub:worst->key=="apartemen"?cap_apart:cap_mans) ) / worst->unit_cap);
            
            int final_qty = min(min(50, affordable_qty), max(1, needed_units / 10)); 
            if (final_qty < 1) final_qty = 1; // MANDATORY: Build at least 1

            cout << "{"
                 << "\"decision\":\"EXECUTE\","
                 << "\"building_key\":\"" << worst->key << "\","
                 << "\"reason\":\"MANDATORY BUILD: Sektor " << worst->label << " kurang (Cakupan " << fixed << setprecision(1) << worst->cov*100 << "%). Melakukan pembangunan darurat " << final_qty << " unit.\","
                 << "\"quantity\":" << final_qty
                 << "}" << endl;
            return 0;
        }
    }

    // Default SKIP
    cout << "{\"decision\":\"SKIP\",\"reason\":\"Budget atau kapasitas cukup.\"}" << endl;

    return 0;
}
