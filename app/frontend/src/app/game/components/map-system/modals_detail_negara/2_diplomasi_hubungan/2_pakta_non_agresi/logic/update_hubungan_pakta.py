import json

def get_pact_delta(current_score, has_pact):
    """Menghitung tambahan delta dari Pakta Non-Agresi (+0.01%)."""
    BONUS_RATE = 0.0001 # +0.01%
    
    if has_pact:
        return current_score * BONUS_RATE
    return 0.0

if __name__ == "__main__":
    # Test logic only
    print(get_pact_delta(100, True))
