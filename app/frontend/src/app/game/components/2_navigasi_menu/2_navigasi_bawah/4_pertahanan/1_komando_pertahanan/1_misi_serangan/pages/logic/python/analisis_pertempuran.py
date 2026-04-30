import random

def analisis_probabilitas_kemenangan(kekuatan_pemain, kekuatan_musuh, faktor_cuaca=1.0):
    """
    ANALISIS STRATEGIS PERTEMPURAN (PYTHON)
    Menghitung probabilitas kemenangan berdasarkan kekuatan total dan faktor eksternal.
    
    Args:
        kekuatan_pemain (float): Total Power Score pemain
        kekuatan_musuh (float): Total Power Score musuh
        faktor_cuaca (float): Pengaruh lingkungan (0.5 - 1.5)
        
    Returns:
        dict: Hasil analisis berupa persentase dan rekomendasi taktis
    """
    
    # Normalisasi kekuatan dengan faktor cuaca
    kekuatan_efektif_pemain = kekuatan_pemain * faktor_cuaca
    total_kekuatan = kekuatan_efektif_pemain + kekuatan_musuh
    
    if total_kekuatan == 0:
        return {"probabilitas": 0, "status": "Data tidak valid"}
        
    # Hitung rasio kemenangan dasar
    rasio = (kekuatan_efektif_pemain / total_kekuatan) * 100
    
    # Tambahkan faktor keberuntungan (variabel acak militer)
    keberuntungan = random.uniform(-5, 5)
    probabilitas_akhir = max(0, min(100, rasio + keberuntungan))
    
    # Penentuan status taktis
    if probabilitas_akhir > 75:
        rekomendasi = "SERANG PENUH: Keunggulan mutlak terdeteksi."
    elif probabilitas_akhir > 50:
        rekomendasi = "MAJU HATI-HATI: Keunggulan tipis, perkuat lini udara."
    else:
        rekomendasi = "BERTAHAN / MUNDUR: Risiko kekalahan tinggi."
        
    return {
        "probabilitas": round(probabilitas_akhir, 2),
        "rekomendasi": rekomendasi,
        "faktor_efektif": faktor_cuaca
    }

# Contoh penggunaan logika untuk simulasi backend
if __name__ == "__main__":
    print("Analisis Strategis Python v1.0")
    print(analisis_probabilitas_kemenangan(500000, 450000))
