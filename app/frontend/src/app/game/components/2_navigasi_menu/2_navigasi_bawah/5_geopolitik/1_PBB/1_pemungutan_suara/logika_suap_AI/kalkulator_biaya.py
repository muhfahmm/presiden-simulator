import random

def hitung_biaya_suap(un_vote, relation_score, from_side='abstainers'):
    """
    un_vote: Jumlah suara/pengaruh negara
    relation_score: Hubungan saat ini (0-100)
    from_side: 'supporters', 'opponents', atau 'abstainers' (posisi asal negara sebelum disuap)
    """
    # Rumus Dasar: un_vote x 1000
    base_cost = un_vote * 1000
    
    # Pengali Kesulitan:
    # Mengubah suara yang sudah ada (Setuju/Tolak) lebih sulit (2.0) 
    # daripada meyakinkan yang Abstain (1.2)
    difficulty_multiplier = 1.2
    if from_side == 'supporters' or from_side == 'opponents':
        difficulty_multiplier = 2.0
        
    # Pengali Hubungan: (120 - relation) / 60
    # Hubungan 60 (Baik) -> multiplier 1.0
    # Hubungan 0 (Benci) -> multiplier 2.0
    relation_multiplier = (120 - relation_score) / 60.0
    
    # Total Biaya
    total_cost = base_cost * difficulty_multiplier * relation_multiplier
    
    # Pembulatan ke ribuan terdekat
    return int(round(total_cost / 1000) * 1000)
