import sys
import json

def calculate_duration(target_continent, is_same_continent):
    # Base duration for each continent
    base_durations = {
        "Asia": 20,
        "Afrika": 45,
        "Eropa": 15,
        "Amerika Utara": 20,
        "Amerika Selatan": 25,
        "Oceania": 35
    }
    
    duration = base_durations.get(target_continent, 30)
    
    # Modifier based on location
    if is_same_continent:
        duration -= 5
    else:
        duration += 10
        
    return max(7, duration)

def calculate_price(user_ideology, target_ideology, user_religion, target_religion, user_continent, target_continent):
    base_price = 500000
    modifiers = 0.0
    details = []

    # Ideology Logic
    if user_ideology == target_ideology:
        modifiers -= 0.05
        details.append(f"Ideologi Sama ({user_ideology}): -5%")
    else:
        modifiers += 0.15
        details.append(f"Ideologi Berbeda ({user_ideology} vs {target_ideology}): +15%")

    # Religion Logic
    if user_religion == target_religion:
        modifiers -= 0.05
        details.append(f"Agama Sama ({user_religion}): -5%")
    else:
        modifiers += 0.10
        details.append(f"Agama Berbeda ({user_religion} vs {target_religion}): +10%")

    # Continent Logic
    is_same_continent = user_continent == target_continent
    if is_same_continent:
        modifiers -= 0.10
        details.append(f"Benua Sama ({user_continent}): -10%")
    else:
        modifiers += 0.05
        details.append(f"Benua Berbeda ({user_continent} vs {target_continent}): +5%")

    total_price = int(base_price * (1 + modifiers))
    construction_duration = calculate_duration(target_continent, is_same_continent)
    
    return {
        "base_price": base_price,
        "total_price": max(0, total_price),
        "modifiers_total_percent": round(modifiers * 100, 1),
        "details": details,
        "construction_duration": construction_duration
    }

if __name__ == "__main__":
    if len(sys.argv) < 7:
        print(json.dumps({"error": "Missing arguments"}))
        sys.exit(1)

    # Arguments: user_ideology, target_ideology, user_religion, target_religion, user_continent, target_continent
    result = calculate_price(
        sys.argv[1], sys.argv[2], 
        sys.argv[3], sys.argv[4], 
        sys.argv[5], sys.argv[6]
    )
    print(json.dumps(result))
