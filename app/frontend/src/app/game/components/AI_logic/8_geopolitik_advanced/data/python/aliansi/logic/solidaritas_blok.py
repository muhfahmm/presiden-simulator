# Logika Solidaritas Blok Aliansi
# Menentukan bagaimana negara anggota aliansi bersikap terhadap satu sama lain dan terhadap rival blok mereka.

BLOK_RIVAL = [
    ("nato", "brics"),   # NATO vs BRICS (Persaingan Global)
    ("g7", "brics"),     # G7 vs BRICS (Ekonomi Politik)
    ("quad", "sco"),     # QUAD vs SCO (Keamanan Asia-Pasifik)
    ("eu", "brics")      # Uni Eropa vs BRICS
]

def apply_logic(negara_a, negara_b, relasi_saat_ini, orgs=None, **kwargs):
    if not orgs: return 0
    perubahan = 0
    
    nama_a = negara_a['name'].lower()
    nama_b = negara_b['name'].lower()
    
    # 1. Identifikasi Aliansi masing-masing negara
    aliansi_a = [key for key, members in orgs.items() if nama_a in [m.lower() for m in members]]
    aliansi_b = [key for key, members in orgs.items() if nama_b in [m.lower() for m in members]]
    
    # 2. Logika Solidaritas (Jika dalam satu aliansi yang sama)
    aliansi_sama = set(aliansi_a).intersection(set(aliansi_b))
    if aliansi_sama:
        # Menambah kemauan untuk saling membela (positif shift)
        perubahan += 2 * len(aliansi_sama)
        
    # 3. Logika Rivalitas Blok (Jika berada di blok yang saling bersaing)
    for blok1, blok2 in BLOK_RIVAL:
        if (blok1 in aliansi_a and blok2 in aliansi_b) or (blok2 in aliansi_a and blok1 in aliansi_b):
            # Menambah kemauan untuk saling menghukum (negatif shift/sanksi)
            perubahan -= 4
            
    return perubahan
