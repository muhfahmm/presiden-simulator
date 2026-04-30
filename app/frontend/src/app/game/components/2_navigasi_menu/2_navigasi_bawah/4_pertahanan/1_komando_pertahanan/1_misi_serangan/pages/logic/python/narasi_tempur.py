from database_berita import DATA_BERITA

def generate_narasi_tempur(unit_pemain, unit_musuh):
    """
    GENERATOR NARASI TEMPUR DINAMIS (PYTHON)
    Mengambil data dari database_berita.py berdasarkan unit aktif.
    """
    
    logs = []
    
    # Deteksi keberadaan unit spesifik
    punya_tank = any("Tank" in u['type'] and u['count'] > 0 for u in unit_pemain)
    punya_udara = any(("Jet" in u['type'] or "Pesawat" in u['type']) and u['count'] > 0 for u in unit_pemain)
    punya_infanteri = any("Infanteri" in u['type'] and u['count'] > 0 for u in unit_pemain)
    punya_laut = any(("Kapal" in u['type'] or "Selam" in u['type']) and u['count'] > 0 for u in unit_pemain)
    
    musuh_punya_artileri = any(("Artileri" in u['type'] or "Rocket" in u['type']) and u['count'] > 0 for u in unit_musuh)
    musuh_punya_udara = any(("Jet" in u['type'] or "Pesawat" in u['type']) and u['count'] > 0 for u in unit_musuh)
    musuh_punya_sam = any(("SAM" in u['type'] or "Pertahanan Udara" in u['type']) and u['count'] > 0 for u in unit_musuh)

    # Ambil narasi dari database berdasarkan kategori
    if punya_tank: logs.extend(DATA_BERITA['pemain']['tank'])
    if punya_udara: logs.extend(DATA_BERITA['pemain']['udara'])
    if punya_infanteri: logs.extend(DATA_BERITA['pemain']['infanteri'])
    if punya_laut: logs.extend(DATA_BERITA['pemain']['laut'])

    if musuh_punya_artileri: logs.extend(DATA_BERITA['musuh']['artileri'])
    if musuh_punya_sam: logs.extend(DATA_BERITA['musuh']['sam'])
    if musuh_punya_udara: logs.extend(DATA_BERITA['musuh']['udara'])

    # Selalu tambahkan narasi umum
    logs.extend(DATA_BERITA['umum'])

    return list(set(logs))
