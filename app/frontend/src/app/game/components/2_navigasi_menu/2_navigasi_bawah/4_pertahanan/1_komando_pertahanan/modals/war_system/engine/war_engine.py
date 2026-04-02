"""
War Engine: Military Combat Calculator
=======================================
Reads attacker/defender force data from stdin (JSON).
Calculates battle outcome based on:
- Total power comparison
- Unit type matchups
- Defender terrain advantage (+10%)
- Random factor (±15%)
Outputs JSON result to stdout.
"""

import sys
import json
import random
import subprocess
import os

# Unit power multipliers (value per unit)
UNIT_POWER = {
    # Darat
    "tank_tempur_utama": 50,
    "apc_ifv": 20,
    "artileri_berat": 35,
    "sistem_peluncur_roket": 45,
    "pertahanan_udara_mobile": 30,
    "kendaraan_taktis": 10,
    # Laut
    "kapal_induk": 200,
    "kapal_destroyer": 80,
    "kapal_korvet": 40,
    "kapal_selam_nuklir": 120,
    "kapal_selam_regular": 60,
    # Udara
    "jet_tempur_siluman": 100,
    "jet_tempur_interceptor": 70,
    "pesawat_pengebom": 90,
    "helikopter_serang": 55,
    "pesawat_pengintai": 15,
    "drone_intai_uav": 25,
}

DEFENDER_BONUS = 1.10  # 10% defense advantage

def calculate_total_power(forces: dict) -> float:
    total = 0.0
    for category in forces.values():
        if isinstance(category, dict):
            for unit_type, count in category.items():
                multiplier = UNIT_POWER.get(unit_type, 10)
                total += count * multiplier
    return total

def calculate_casualties(forces: dict, loss_ratio: float) -> dict:
    """Calculate casualties as percentage of each unit type."""
    casualties = {}
    for category_name, category in forces.items():
        if isinstance(category, dict):
            for unit_type, count in category.items():
                lost = int(count * loss_ratio * random.uniform(0.5, 1.5))
                lost = min(lost, count)  # Can't lose more than you have
                if lost > 0:
                    casualties[unit_type] = lost
    return casualties

def simulate_battle(data: dict) -> dict:
    attacker_forces = data.get("attacker_forces", {})
    defender_forces = data.get("defender_forces", {})
    
    # Calculate raw power
    attacker_power = data.get("attacker_power", calculate_total_power(attacker_forces))
    defender_power = data.get("defender_power", calculate_total_power(defender_forces))
    
    # Apply defender bonus
    effective_defender_power = defender_power * DEFENDER_BONUS
    
    # Random factor ±15%
    attacker_roll = attacker_power * random.uniform(0.85, 1.15)
    defender_roll = effective_defender_power * random.uniform(0.85, 1.15)
    
    # Determine winner
    total = attacker_roll + defender_roll
    if total == 0:
        total = 1  # Avoid division by zero
    
    attacker_ratio = attacker_roll / total
    defender_ratio = defender_roll / total
    
    winner = data.get("attacker", "attacker") if attacker_roll > defender_roll else data.get("defender", "defender")
    
    # Calculate casualty ratios
    # Winner loses less, loser loses more
    if attacker_roll > defender_roll:
        attacker_loss_ratio = 0.05 + (defender_ratio * 0.15)  # 5-20%
        defender_loss_ratio = 0.15 + (attacker_ratio * 0.35)   # 15-50%
    else:
        attacker_loss_ratio = 0.15 + (defender_ratio * 0.35)
        defender_loss_ratio = 0.05 + (attacker_ratio * 0.15)
    
    attacker_casualties = calculate_casualties(attacker_forces, attacker_loss_ratio)
    defender_casualties = calculate_casualties(defender_forces, defender_loss_ratio)
    
    # Calculate relation impact
    relation_impact = -15 if winner == data.get("attacker") else -10
    
    return {
        "winner": winner,
        "attacker_power_effective": round(attacker_roll),
        "defender_power_effective": round(defender_roll),
        "power_ratio": round(attacker_ratio * 100, 1),
        "casualties": {
            "attacker": attacker_casualties,
            "defender": defender_casualties,
        },
        "relation_impact": relation_impact,
        "battle_summary": {
            "decisive": abs(attacker_roll - defender_roll) > total * 0.2,
            "margin": round(abs(attacker_roll - defender_roll)),
        }
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "Input data kosong"}))
            sys.exit(1)
        
        data = json.loads(input_data)
        result = simulate_battle(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
