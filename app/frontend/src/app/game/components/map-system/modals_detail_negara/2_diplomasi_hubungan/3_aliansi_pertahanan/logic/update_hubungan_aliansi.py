import json

def get_alliance_delta(current_score, has_alliance):
    """Menghitung tambahan delta dari Aliansi Pertahanan (+0.01%)."""
    BONUS_RATE = 0.0001 # +0.01%
    
    if has_alliance:
        return current_score * BONUS_RATE
    return 0.0

if __name__ == "__main__":
    # Test logic only
    print(get_alliance_delta(100, True))
