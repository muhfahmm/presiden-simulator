import sys
import json
import random

def get_defaults():
    """
    Authoritative baseline values for all nations.
    These values represent the 'Fresh Start' state.
    """
    nations = {
        "China": {
            "population": 1392730000.0,
            "budget": 180167.0,
            "happiness": 55.0,
            "stability": 82.0,
            "economicTier": 4
        },
        "India": {
            "population": 1352640000.0,
            "budget": 165000.0,
            "happiness": 55.0,
            "stability": 78.0,
            "economicTier": 4
        },
        "Amerika Serikat": {
            "population": 331002651.0,
            "budget": 150000.0,
            "happiness": 55.0,
            "stability": 85.0,
            "economicTier": 4
        },
        "Indonesia": {
            "population": 273523615.0,
            "budget": 13807.0,
            "happiness": 55.0,
            "stability": 82.0,
            "economicTier": 3
        },
        "Thailand": {
            "population": 69800000.0,
            "budget": 12000.0,
            "happiness": 55.0,
            "stability": 80.0,
            "economicTier": 2
        }
    }
    
    # Fill remaining NPC nations with tiered randoms if needed,
    # but Go backend mostly handles the 206 nations.
    # This script focuses on being the "Intelligence" for high-impact metrics.
    
    return nations

def main():
    if "--reset" in sys.argv:
        # Perform any server-side cleanup here
        # E.g., deleting temp files, clearing database rows
        
        # Return the baseline data
        defaults = get_defaults()
        print(json.dumps(defaults))
        sys.exit(0)

    # Standard strategy output if called without args (legacy support)
    print(json.dumps({"status": "ready"}))

if __name__ == "__main__":
    main()
