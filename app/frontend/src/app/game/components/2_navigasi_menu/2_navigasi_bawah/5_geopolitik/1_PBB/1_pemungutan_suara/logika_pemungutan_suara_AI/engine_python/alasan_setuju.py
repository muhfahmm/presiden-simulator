import random

def get_alasan_setuju(country_name, proposer, target, relation_proposer, relation_target, is_same_org):
    reasons = [
        f"Memiliki hubungan diplomatik yang sangat kuat dengan {proposer}.",
        f"Mendukung resolusi karena memiliki rivalitas sejarah dengan {target}.",
        f"Berada dalam aliansi yang sama dengan {proposer} dan setuju dengan visi strategisnya.",
        f"Melihat tindakan {target} sebagai ancaman terhadap stabilitas kawasan.",
        f"Menilai bahwa sanksi ini diperlukan untuk menegakkan hukum internasional.",
        f"Memiliki kepentingan ekonomi yang selaras dengan keberhasilan resolusi ini."
    ]
    
    # Logic-based selection
    if is_same_org:
        return reasons[2]
    if relation_proposer > 70:
        return reasons[0]
    if relation_target < 30:
        return reasons[1]
        
    return random.choice(reasons)
