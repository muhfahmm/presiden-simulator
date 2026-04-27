import random
import json
import os

def apply_larangan_perang_logic(voter_data, resolution):
    """
    Logika khusus untuk resolusi 'LARANGAN PERANG'.
    Jika negara tidak memiliki hubungan diplomatik (alignment 50) 
    dan tidak mengikuti aliansi manapun, maka:
    35% Setuju, 35% Tolak, 30% Absen.
    """
    
    # 1. Pastikan ini adalah resolusi Larangan Perang
    if resolution.get('title', '').upper() != "LARANGAN PERANG":
        return None

    # 2. Ambil alignment dengan pengusul
    proposer = resolution.get('proposer', 'Global')
    alignment = voter_data.get('alignment', {})
    alignment_score = alignment.get(proposer, 50)

    # 3. Cek Aliansi dari geopolitical_data.json
    # Kita cari file tersebut di folder sebelah (logika_pemungutan_suara)
    try:
        base_dir = os.path.dirname(__file__)
        geo_data_path = os.path.join(base_dir, "../../logika_pemungutan_suara/geopolitical_data.json")
        
        with open(geo_data_path, 'r', encoding='utf-8') as f:
            geo_data = json.load(f)
            organizations = geo_data.get("organizations", {})
    except Exception as e:
        # Jika gagal load, anggap tidak punya aliansi untuk keamanan logic
        organizations = {}

    # Cek apakah negara ini ada di aliansi utama (NATO, BRICS, EU, ASEAN, dll)
    is_in_alliance = False
    my_name_lower = voter_data.get('name', '').lower()
    
    # Daftar aliansi strategis yang dianggap 'aliansi' dalam konteks ini
    major_orgs = ["nato", "brics", "eu", "asean", "arab_league", "au", "g7", "quad"]
    
    for org_name in major_orgs:
        members = [m.lower() for m in organizations.get(org_name, [])]
        if my_name_lower in members:
            is_in_alliance = True
            break

    # 4. Terapkan Logika Probabilitas jika syarat terpenuhi
    # Syarat: Tidak ada hubungan khusus (50) DAN tidak ikut aliansi
    if alignment_score == 50 and not is_in_alliance:
        chance = random.random()
        if chance < 0.35:
            return "Setuju"
        elif chance < 0.70: # 0.35 + 0.35
            return "Tolak"
        else:
            return "Abstain"

    return None # Kembalikan None jika ingin menggunakan logika standar
