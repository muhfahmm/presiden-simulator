/*
 * ═══════════════════════════════════════════════════════════
 * AI TRADE ENGINE — C++ High-Performance Trade Matcher
 * President Simulator — Polyglot Architecture
 *
 * Input:  JSON via stdin  (nations, prices, maxTransactions, seed)
 * Output: JSON via stdout (completed trades, updated budgets)
 *
 * Why C++? Pure computation on 207 nations × 50+ commodities
 * needs to complete in <10ms to avoid blocking the Go tick.
 * ═══════════════════════════════════════════════════════════
 */

#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <map>
#include <algorithm>
#include <cmath>
#include <cstdlib>
#include <cstring>
#include <cstdint>

// ─── Minimal JSON Parser (no external deps) ───

static std::string trim(const std::string& s) {
    size_t a = s.find_first_not_of(" \t\r\n");
    size_t b = s.find_last_not_of(" \t\r\n");
    return (a == std::string::npos) ? "" : s.substr(a, b - a + 1);
}

static std::string extractString(const std::string& json, const std::string& key) {
    std::string search = "\"" + key + "\"";
    size_t pos = json.find(search);
    if (pos == std::string::npos) return "";
    pos = json.find("\"", pos + search.size() + 1);
    if (pos == std::string::npos) return "";
    size_t end = json.find("\"", pos + 1);
    return json.substr(pos + 1, end - pos - 1);
}

static double extractNumber(const std::string& json, const std::string& key) {
    std::string search = "\"" + key + "\"";
    size_t pos = json.find(search);
    if (pos == std::string::npos) return 0.0;
    pos = json.find(":", pos);
    if (pos == std::string::npos) return 0.0;
    pos++;
    while (pos < json.size() && (json[pos] == ' ' || json[pos] == '\t')) pos++;
    std::string num;
    while (pos < json.size() && (json[pos] == '-' || json[pos] == '.' || (json[pos] >= '0' && json[pos] <= '9'))) {
        num += json[pos++];
    }
    return num.empty() ? 0.0 : std::stod(num);
}

static int extractInt(const std::string& json, const std::string& key) {
    return (int)extractNumber(json, key);
}

// ─── Data Structures ───

struct Nation {
    std::string name;
    double budget;
    std::map<std::string, int> commodities;  // key -> stock
    std::vector<std::string> partners;
};

struct Price {
    std::string key;
    int buyPrice;
    int sellPrice;
};

struct Trade {
    std::string seller;
    std::string buyer;
    std::string commodity;
    int qty;
    double price;
    double total;
};

// ─── Deterministic PRNG (LCG) ───

class FastRNG {
    uint64_t state;
public:
    FastRNG(uint64_t seed) : state(seed) {}
    uint32_t nextRaw() {
        state = state * 6364136223846793005ULL + 1442695040888963407ULL;
        return (uint32_t)(state >> 32);
    }
    int nextInt(int max) {
        return (int)(nextRaw() % (uint32_t)max);
    }
    double nextDouble() {
        return (double)nextRaw() / 4294967296.0;
    }
    void shuffle(std::vector<int>& v) {
        for (int i = (int)v.size() - 1; i > 0; i--) {
            int j = nextInt(i + 1);
            std::swap(v[i], v[j]);
        }
    }
};

// ─── JSON Object Parser (braces-balanced extraction) ───

static std::string extractObject(const std::string& json, const std::string& key) {
    std::string search = "\"" + key + "\"";
    size_t pos = json.find(search);
    if (pos == std::string::npos) return "{}";
    pos = json.find("{", pos);
    if (pos == std::string::npos) return "{}";
    int depth = 0;
    size_t start = pos;
    for (size_t i = pos; i < json.size(); i++) {
        if (json[i] == '{') depth++;
        else if (json[i] == '}') { depth--; if (depth == 0) return json.substr(start, i - start + 1); }
    }
    return "{}";
}

static std::string extractArray(const std::string& json, const std::string& key) {
    std::string search = "\"" + key + "\"";
    size_t pos = json.find(search);
    if (pos == std::string::npos) return "[]";
    pos = json.find("[", pos);
    if (pos == std::string::npos) return "[]";
    int depth = 0;
    size_t start = pos;
    for (size_t i = pos; i < json.size(); i++) {
        if (json[i] == '[') depth++;
        else if (json[i] == ']') { depth--; if (depth == 0) return json.substr(start, i - start + 1); }
    }
    return "[]";
}

// Extract all top-level key-value pairs from an object where values are objects
static std::vector<std::pair<std::string, std::string>> extractObjectEntries(const std::string& json) {
    std::vector<std::pair<std::string, std::string>> entries;
    size_t pos = json.find("{");
    if (pos == std::string::npos) return entries;
    pos++;
    
    while (pos < json.size()) {
        // Find key
        size_t kStart = json.find("\"", pos);
        if (kStart == std::string::npos || kStart >= json.size() - 1) break;
        size_t kEnd = json.find("\"", kStart + 1);
        if (kEnd == std::string::npos) break;
        std::string key = json.substr(kStart + 1, kEnd - kStart - 1);
        
        // Find value start (should be an object)
        size_t vStart = json.find("{", kEnd);
        if (vStart == std::string::npos) break;
        
        // Balance braces
        int depth = 0;
        size_t vEnd = vStart;
        for (size_t i = vStart; i < json.size(); i++) {
            if (json[i] == '{') depth++;
            else if (json[i] == '}') { depth--; if (depth == 0) { vEnd = i; break; } }
        }
        
        entries.push_back({key, json.substr(vStart, vEnd - vStart + 1)});
        pos = vEnd + 1;
    }
    return entries;
}

// Extract string array items
static std::vector<std::string> extractStringArray(const std::string& arrJson) {
    std::vector<std::string> result;
    size_t pos = 0;
    while (true) {
        size_t q1 = arrJson.find("\"", pos);
        if (q1 == std::string::npos) break;
        size_t q2 = arrJson.find("\"", q1 + 1);
        if (q2 == std::string::npos) break;
        result.push_back(arrJson.substr(q1 + 1, q2 - q1 - 1));
        pos = q2 + 1;
    }
    return result;
}

// Extract int map from object like {"padi": 100, "ikan": 50}
static std::map<std::string, int> extractIntMap(const std::string& objJson) {
    std::map<std::string, int> result;
    size_t pos = 0;
    while (true) {
        size_t q1 = objJson.find("\"", pos);
        if (q1 == std::string::npos) break;
        size_t q2 = objJson.find("\"", q1 + 1);
        if (q2 == std::string::npos) break;
        std::string key = objJson.substr(q1 + 1, q2 - q1 - 1);
        
        size_t colon = objJson.find(":", q2);
        if (colon == std::string::npos) break;
        colon++;
        while (colon < objJson.size() && objJson[colon] == ' ') colon++;
        
        std::string num;
        while (colon < objJson.size() && (objJson[colon] == '-' || objJson[colon] == '.' || (objJson[colon] >= '0' && objJson[colon] <= '9'))) {
            num += objJson[colon++];
        }
        if (!num.empty()) result[key] = (int)std::stod(num);
        pos = colon;
    }
    return result;
}


// ═══════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════

int main() {
    // Read all stdin
    std::ostringstream ss;
    ss << std::cin.rdbuf();
    std::string input = ss.str();
    
    if (input.empty()) {
        std::cout << "{\"trades\":[],\"updatedBudgets\":{}}" << std::endl;
        return 0;
    }
    
    // Parse top-level fields
    int maxTransactions = extractInt(input, "maxTransactions");
    int seed = extractInt(input, "seed");
    if (maxTransactions <= 0) maxTransactions = 35;
    if (seed == 0) seed = 42;
    
    FastRNG rng((uint64_t)seed);
    
    // Parse nations
    std::string nationsJson = extractObject(input, "nations");
    auto nationEntries = extractObjectEntries(nationsJson);
    
    std::vector<Nation> nations;
    std::map<std::string, int> nationIndex; // name -> index
    
    for (auto& entry : nationEntries) {
        Nation n;
        n.name = entry.first;
        n.budget = extractNumber(entry.second, "budget");
        
        std::string commJson = extractObject(entry.second, "commodities");
        n.commodities = extractIntMap(commJson);
        
        std::string partnersJson = extractArray(entry.second, "partners");
        n.partners = extractStringArray(partnersJson);
        
        nationIndex[n.name] = (int)nations.size();
        nations.push_back(n);
    }
    
    // Parse prices
    std::string pricesJson = extractObject(input, "prices");
    auto priceEntries = extractObjectEntries(pricesJson);
    
    std::map<std::string, Price> prices;
    for (auto& entry : priceEntries) {
        Price p;
        p.key = entry.first;
        p.buyPrice = extractInt(entry.second, "buy");
        p.sellPrice = extractInt(entry.second, "sell");
        prices[p.key] = p;
    }
    
    // ─── Build Candidate Trades ───
    struct Candidate {
        int sellerIdx;
        int buyerIdx;
        std::string commodity;
    };
    
    std::vector<Candidate> candidates;
    
    for (int i = 0; i < (int)nations.size(); i++) {
        Nation& seller = nations[i];
        for (auto& comm : seller.commodities) {
            if (comm.second <= 0) continue; // No stock to sell
            
            // Find buyers among trade partners
            for (auto& partner : seller.partners) {
                auto it = nationIndex.find(partner);
                if (it == nationIndex.end()) continue;
                
                int buyerIdx = it->second;
                if (buyerIdx == i) continue; // Can't trade with self
                
                candidates.push_back({i, buyerIdx, comm.first});
            }
        }
    }
    
    // ─── Shuffle candidates deterministically ───
    if (!candidates.empty()) {
        for (int i = (int)candidates.size() - 1; i > 0; i--) {
            int j = rng.nextInt(i + 1);
            std::swap(candidates[i], candidates[j]);
        }
    }
    
    // ─── Execute trades up to maxTransactions ───
    std::vector<Trade> completedTrades;
    
    for (auto& cand : candidates) {
        if ((int)completedTrades.size() >= maxTransactions) break;
        
        Nation& seller = nations[cand.sellerIdx];
        Nation& buyer = nations[cand.buyerIdx];
        
        // Check seller has stock
        auto stockIt = seller.commodities.find(cand.commodity);
        if (stockIt == seller.commodities.end() || stockIt->second <= 0) continue;
        
        // Get price
        auto priceIt = prices.find(cand.commodity);
        if (priceIt == prices.end()) continue;
        
        // Price variance: sellPrice × (0.85 + rand × 0.30)
        double unitPrice = priceIt->second.sellPrice * (0.85 + rng.nextDouble() * 0.30);
        
        // Determine quantity: 1 to min(stock, 20)
        int maxQty = std::min(stockIt->second, 20);
        if (maxQty <= 0) continue;
        int qty = 1 + rng.nextInt(maxQty);
        
        double totalCost = unitPrice * qty;
        
        // ═══ BUDGET VALIDATION LAYER ═══
        // Buyer MUST have enough budget to afford the import
        if (buyer.budget < totalCost) {
            // Try smaller quantity that buyer can afford
            if (unitPrice > 0) {
                qty = (int)(buyer.budget / unitPrice);
            }
            if (qty <= 0) continue; // Buyer cannot afford even 1 unit — skip
            totalCost = unitPrice * qty;
        }
        
        // Execute trade
        seller.commodities[cand.commodity] -= qty;
        seller.budget += totalCost;
        buyer.budget -= totalCost;
        buyer.commodities[cand.commodity] += qty;
        
        Trade t;
        t.seller = seller.name;
        t.buyer = buyer.name;
        t.commodity = cand.commodity;
        t.qty = qty;
        t.price = unitPrice;
        t.total = totalCost;
        completedTrades.push_back(t);
    }
    
    // ─── Output JSON ───
    std::ostringstream out;
    out << "{\"trades\":[";
    for (int i = 0; i < (int)completedTrades.size(); i++) {
        if (i > 0) out << ",";
        Trade& t = completedTrades[i];
        out << "{\"seller\":\"" << t.seller << "\""
            << ",\"buyer\":\"" << t.buyer << "\""
            << ",\"commodity\":\"" << t.commodity << "\""
            << ",\"qty\":" << t.qty
            << ",\"price\":" << (int)t.price
            << ",\"total\":" << (int)t.total
            << "}";
    }
    out << "],\"updatedBudgets\":{";
    bool first = true;
    for (auto& n : nations) {
        if (!first) out << ",";
        out << "\"" << n.name << "\":" << (int)n.budget;
        first = false;
    }
    out << "},\"updatedCommodities\":{";
    first = true;
    for (auto& n : nations) {
        if (!first) out << ",";
        out << "\"" << n.name << "\":{";
        bool cfirst = true;
        for (auto& c : n.commodities) {
            if (!cfirst) out << ",";
            out << "\"" << c.first << "\":" << c.second;
            cfirst = false;
        }
        out << "}";
        first = false;
    }
    out << "}}";
    
    std::cout << out.str() << std::endl;
    return 0;
}
