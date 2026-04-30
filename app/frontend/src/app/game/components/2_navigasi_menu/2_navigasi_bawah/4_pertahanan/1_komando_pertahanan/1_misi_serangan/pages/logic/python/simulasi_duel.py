import random

def simulasi_duel_satuan(nama_penyerang, jumlah_penyerang, nama_bertahan, jumlah_bertahan):
    """
    SIMULASI DUEL SATUAN (PYTHON)
    Menghitung hasil bentrokan antara dua jenis satuan secara spesifik.
    
    Args:
        nama_penyerang (str): Jenis unit penyerang
        jumlah_penyerang (int): Jumlah unit penyerang
        nama_bertahan (str): Jenis unit yang bertahan
        jumlah_bertahan (int): Jumlah unit yang bertahan
        
    Returns:
        dict: Hasil kerusakan pada kedua belah pihak
    """
    
    # Logika Counter Dasar
    multiplier_penyerang = 1.0
    
    # Aturan Batu-Gunting-Kertas Militer
    if "Tank" in nama_penyerang and "Infanteri" in nama_bertahan:
        multiplier_penyerang = 3.5
    elif "Jet" in nama_penyerang and "Kapal" in nama_bertahan:
        multiplier_penyerang = 2.0
    elif "Infanteri" in nama_penyerang and "Tank" in nama_bertahan:
        multiplier_penyerang = 0.2
    elif "SAM" in nama_penyerang and "Jet" in nama_bertahan:
        multiplier_penyerang = 5.0
        
    # Kalkulasi Kerugian Dasar
    kerusakan_ke_musuh = (jumlah_penyerang * 0.1) * multiplier_penyerang * random.uniform(0.8, 1.2)
    kerusakan_ke_diri = (jumlah_bertahan * 0.05) * (1/multiplier_penyerang) * random.uniform(0.8, 1.2)
    
    return {
        "unit_musuh_hancur": round(min(jumlah_bertahan, kerusakan_ke_musuh)),
        "unit_kita_hancur": round(min(jumlah_penyerang, kerusakan_ke_diri)),
        "narasi": f"{nama_penyerang} melakukan kontak dengan {nama_bertahan}."
    }

# Contoh simulasi internal
if __name__ == "__main__":
    hasil = simulasi_duel_satuan("Main Battle Tank", 100, "Pasukan Infanteri", 1000)
    print(f"Hasil Duel: {hasil}")
