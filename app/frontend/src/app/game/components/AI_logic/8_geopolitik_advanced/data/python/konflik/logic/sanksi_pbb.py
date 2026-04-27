import random
try:
    from .konfigurasi import PROBABILITAS_AKSI_PBB
except ImportError:
    PROBABILITAS_AKSI_PBB = 0.35

def apply_logic(negara_a, negara_b, relasi_saat_ini, orgs=None, is_rival=False, **kwargs):
    perubahan = 0
    
    # Hanya terjadi berdasarkan probabilitas yang ditentukan (35%)
    if is_rival and random.random() < PROBABILITAS_AKSI_PBB:
        print(f"[LOG PBB] Sanksi PBB terpicu antara {negara_a['name']} dan {negara_b['name']}")
        perubahan -= 7 # Penalti sanksi PBB otomatis untuk negara yang berkonflik
            
        # Dukungan blok aliansi terhadap sanksi
        if orgs:
            nato = [m.lower() for m in orgs.get("nato", [])]
            brics = [m.lower() for m in orgs.get("brics", [])]
            
            # Jika satu di NATO dan satu di BRICS (rivalitas blok)
            if (negara_a['name'].lower() in nato and negara_b['name'].lower() in brics) or \
               (negara_b['name'].lower() in nato and negara_a['name'].lower() in brics):
                perubahan -= 5 # Eskalasi sanksi antar blok
            
    return perubahan
