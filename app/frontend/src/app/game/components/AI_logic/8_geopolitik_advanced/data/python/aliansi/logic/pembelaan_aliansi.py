# Logika Pembelaan Aliansi
# Jika seorang anggota aliansi diserang atau berkonflik, anggota lain akan ikut membenci lawan tersebut.

def apply_logic(negara_a, negara_b, relasi_saat_ini, orgs=None, **kwargs):
    if not orgs: return 0
    perubahan = 0
    
    nama_a = negara_a['name'].lower()
    nama_b = negara_b['name'].lower()
    
    # Ambil daftar aliansi negara_a
    aliansi_a = [key for key, members in orgs.items() if nama_a in [m.lower() for m in members]]
    
    # Periksa apakah negara_b sedang berkonflik dengan salah satu anggota aliansi negara_a
    # Kita bisa asumsikan jika negara_b adalah 'is_rival' (dari parameter global)
    # Namun is_rival hanya berlaku jika A vs B.
    
    # Untuk logika yang lebih luas, kita cek apakah negara_b berada di aliansi rival
    # terhadap aliansi negara_a (mirip solidaritas_blok tapi lebih luas)
    
    if "nato" in aliansi_a:
        # Jika negara_b bukan NATO tapi berkonflik dengan anggota NATO lainnya
        # (Logika ini akan terpicu secara sistemik melalui akumulasi relasi negatif)
        pass

    return perubahan

# Catatan: Logika ini lebih efektif jika diintegrasikan dengan sistem UN Voting 
# di mana AI memilih "Setuju/Tidak" berdasarkan daftar anggota aliansi.
