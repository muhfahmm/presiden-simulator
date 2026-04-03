/**
 * tembakan.cpp - C++ Combat & Damage Calculations
 * Ported from Power_Logic.tsx and PertempuranIndex.tsx
 */

struct CombatStats {
    float attackPower;
    float defensePower;
    float armorPenetration;
    float critChance;
};

class TembakanEngine {
public:
    /**
     * Calculates the actual damage dealt by an attacker to a target.
     * Incorporates armor and random variability.
     */
    static float calculateActualDamage(const CombatStats& attacker, const CombatStats& target) {
        float baseDamage = attacker.attackPower - (target.defensePower * 0.2f);
        if (baseDamage < 5.0f) baseDamage = 5.0f; // Minimal damage threshold

        // Armor reduction (simplified from Power_Logic)
        float reduction = 1.0f - (target.defensePower / (target.defensePower + 400.0f));
        float finalDamage = baseDamage * reduction;

        return finalDamage;
    }

    /**
     * Helper to check if a unit's reload timer is ready.
     */
    static bool isReadyToFire(long long currentTime, long long lastAttackTime, int reloadSpeed) {
        return (currentTime - lastAttackTime) > reloadSpeed;
    }
};
