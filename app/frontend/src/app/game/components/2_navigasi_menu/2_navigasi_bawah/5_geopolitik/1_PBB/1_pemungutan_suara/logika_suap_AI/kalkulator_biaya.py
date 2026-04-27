import random

def hitung_biaya_suap(un_vote, relation_score, is_opponent=True):
    """
    un_vote: Jumlah suara/pengaruh negara (misal: 188)
    relation_score: Hubungan saat ini (0-100)
    is_opponent: True jika negara 'Tolak', False jika 'Abstain'
    """
    # Rumus Dasar: un_vote ditambahkan tiga nol (x1000)
    base_cost = un_vote * 1000
    
    # Faktor Penambah:
    # 1. Jika Opponent (Tolak) -> Lebih mahal daripada Abstain
    type_multiplier = 1.5 if is_opponent else 1.0
    
    # 2. Faktor Hubungan: Semakin buruk hubungan, semakin mahal
    # (100 - 50) = 50 -> multiplier 1.0 (Netral)
    # (100 - 20) = 80 -> multiplier 1.6 (Benci)
    relation_multiplier = (100 - relation_score) / 50.0
    
    # Total Biaya
    total_cost = base_cost * type_multiplier * relation_multiplier
    
    # Pembulatan ke ribuan terdekat
    return int(round(total_cost / 1000) * 1000)
