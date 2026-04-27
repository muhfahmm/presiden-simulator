import random

def get_alasan_tolak(country_name, proposer, target, relation_proposer, relation_target, is_same_org_target):
    reasons = [
        f"Memiliki hubungan ekonomi dan perdagangan yang signifikan dengan {target}.",
        f"Menentang intervensi eksternal terhadap kedaulatan {target}.",
        f"Berada dalam blok aliansi yang sama dengan {target}.",
        f"Menganggap resolusi dari {proposer} bermotif politik dan tidak berdasar kuat.",
        f"Khawatir bahwa sanksi ini akan merugikan rakyat sipil di {target}.",
        f"Menilai bahwa resolusi ini hanya akan memperkeruh suasana geopolitik."
    ]
    
    # Logic-based selection
    if is_same_org_target:
        return reasons[2]
    if relation_target > 70:
        return reasons[0]
    if relation_proposer < 30:
        return reasons[3]
        
    return random.choice(reasons)
