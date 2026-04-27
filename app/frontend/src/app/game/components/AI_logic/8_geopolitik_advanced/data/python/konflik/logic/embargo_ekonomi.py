import random
try:
    from .konfigurasi import PROBABILITAS_AKSI_PBB
except ImportError:
    PROBABILITAS_AKSI_PBB = 0.35

def apply_logic(negara_a, negara_b, relasi_saat_ini, orgs=None, is_rival=False, **kwargs):
    perubahan = 0
    
    # Embargo hanya terjadi jika ada status konflik yang aktif dan probabilitas terpenuhi
    if is_rival and random.random() < PROBABILITAS_AKSI_PBB:
        perubahan -= 10 # Penalti embargo dasar
            
        # Jika salah satu negara sangat bergantung pada ekonomi (economic_focus tinggi)
        # maka dampak embargo akan terasa lebih berat
        if negara_a.get('economic_focus', 50) > 80 or negara_b.get('economic_focus', 50) > 80:
            perubahan -= 5
            
        # Embargo tambahan jika ideologi sangat bertentangan (misal Komunis vs Demokrasi)
        if ("Komunis" in negara_a['ideology'] and "Demokrasi" in negara_b['ideology']) or \
           ("Komunis" in negara_b['ideology'] and "Demokrasi" in negara_a['ideology']):
            perubahan -= 3
                
    return perubahan
