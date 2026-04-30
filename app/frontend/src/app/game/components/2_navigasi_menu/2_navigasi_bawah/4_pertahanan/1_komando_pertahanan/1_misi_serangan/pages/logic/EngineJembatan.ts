/**
 * ENGINE JEMBATAN LOGIKA (POLYGLOT BRIDGE)
 * File ini menghubungkan logika dari C++ dan Python ke dalam lingkungan TypeScript/Next.js.
 * Memastikan kalkulasi pertempuran berjalan sesuai dengan parameter yang telah ditentukan.
 */

/**
 * REPRESENTASI LOGIKA C++: Kalkulasi Atrisi Lanchester
 * Mengambil logika dari kalkulasi_tempur.cpp
 */
export const hitungAtrisiUnit = (
    jumlahPasukan: number, 
    kekuatanLawan: number, 
    faktorPertahanan: number = 0.2
): number => {
    if (jumlahPasukan <= 0) return 0;

    // Dasar 5% per siklus (Sesuai cpp: rasio_atrisi = 0.05)
    const rasioAtrisi = 0.05; 
    
    // Penalti berdasarkan kekuatan lawan (Sesuai cpp: kekuatan_lawan / 100000.0 * 2.0)
    const penaltiKekuatan = (kekuatanLawan / 100000.0) * 2.0;
    
    const kerugianRaw = (jumlahPasukan * rasioAtrisi) + penaltiKekuatan;
    
    // Mitigasi pertahanan (Sesuai cpp: 1.0 - (faktor_pertahanan * 0.5))
    const kerugianFinal = kerugianRaw * (1.0 - (faktorPertahanan * 0.5));

    // Kembalikan jumlah yang gugur (pembulatan)
    return Math.min(jumlahPasukan, Math.round(kerugianFinal));
};

/**
 * REPRESENTASI LOGIKA PYTHON: Analisis Strategis
 * Mengambil logika dari analisis_pertempuran.py
 */
export const analisisStrategi = (
    kekuatanPemain: number, 
    kekuatanMusuh: number, 
    faktorLingkungan: number = 1.0
) => {
    // Normalisasi (Sesuai py: kekuatan_pemain * faktor_cuaca)
    const kekuatanEfektifPemain = kekuatanPemain * faktorLingkungan;
    const totalKekuatan = kekuatanEfektifPemain + kekuatanMusuh;

    if (totalKekuatan === 0) return { probabilitas: 0, rekomendasi: "SIAGA" };

    // Rasio dasar
    const rasio = (kekuatanEfektifPemain / totalKekuatan) * 100;
    
    // Variabel keberuntungan acak (-5 s/d 5)
    const keberuntungan = (Math.random() * 10) - 5;
    const probabilitasAkhir = Math.max(0, Math.min(100, rasio + keberuntungan));

    let rekomendasi = "";
    if (probabilitasAkhir > 75) {
        rekomendasi = "SERANG PENUH: Keunggulan mutlak terdeteksi.";
    } else if (probabilitasAkhir > 50) {
        rekomendasi = "MAJU HATI-HATI: Keunggulan tipis, perkuat lini udara.";
    } else {
        rekomendasi = "BERTAHAN / MUNDUR: Risiko kekalahan tinggi.";
    }

    return {
        probabilitas: Math.round(probabilitasAkhir * 100) / 100,
        rekomendasi
    };
};

/**
 * REPRESENTASI LOGIKA C++: Matriks Efektivitas Satuan
 * Mengambil logika dari matriks_efektivitas.cpp
 */
export const getUnitMatchupMultiplier = (penyerang: string, bertahan: string): number => {
    const p = penyerang.toLowerCase();
    const b = bertahan.toLowerCase();

    // TANK VS ...
    if (p.includes('tank')) {
        if (b.includes('infanteri')) return 4.0;
        if (b.includes('artileri')) return 2.0;
        if (b.includes('sam')) return 3.0;
        if (b.includes('kapal')) return 0.5;
        return 1.2;
    }

    // INFANTERI VS ...
    if (b.includes('infanteri')) {
        if (b.includes('tank')) return 0.2;
        if (b.includes('jet')) return 0.05;
        return 1.0;
    }

    // SAM VS ...
    if (p.includes('sam') || p.includes('pertahanan udara')) {
        if (b.includes('jet') || b.includes('pesawat')) return 6.0;
        if (b.includes('drone')) return 4.0;
        return 0.1;
    }

    // JET VS ...
    if (p.includes('jet') || p.includes('pesawat')) {
        if (b.includes('kapal')) return 2.5;
        if (b.includes('tank')) return 2.0;
        if (b.includes('sam')) return 0.5; // SAM is a counter
        return 1.5;
    }

    // ARTILERI VS ...
    if (p.includes('artileri') || p.includes('rocket')) {
        if (b.includes('infanteri')) return 2.5;
        if (b.includes('tank')) return 1.5;
        return 1.0;
    }

    return 1.0;
};

/**
 * REPRESENTASI LOGIKA PYTHON: Generator Narasi Dinamis
 * Mengambil logika dari narasi_tempur.py
 */
export const getDynamicNarratives = (playerUnits: any[], enemyUnits: any[]): string[] => {
    const logs: string[] = [];
    
    const hasPlayer = (keyword: string) => playerUnits.some(u => u.type.toLowerCase().includes(keyword.toLowerCase()) && u.count > 0);
    const hasEnemy = (keyword: string) => enemyUnits.some(u => u.type.toLowerCase().includes(keyword.toLowerCase()) && u.count > 0);

    // PEMAIN ACTIONS (SYNCED WITH database_berita.py)
    if (hasPlayer('tank')) {
        logs.push(
            "Divisi Kavaleri melakukan manuver penjepit di sektor barat.",
            "Main Battle Tank menembus garis pertahanan pertama musuh.",
            "Gempuran lapis baja merontokkan barikade pertahanan lawan.",
            "Konvoi tank kita berhasil mengamankan jalur logistik utama."
        );
    }
    if (hasPlayer('jet') || hasPlayer('pesawat')) {
        logs.push(
            "Skuadron udara melakukan pengeboman presisi pada instalasi militer.",
            "Superioritas udara berhasil diamankan oleh penerbang kita.",
            "Jet tempur melakukan intersepsi terhadap target strategis.",
            "Serangan udara berhasil melumpuhkan pusat komunikasi musuh."
        );
    }
    if (hasPlayer('infanteri')) {
        logs.push(
            "Pasukan infanteri bergerak maju mengamankan perimeter.",
            "Terjadi kontak senjata jarak dekat di pemukiman perbatasan.",
            "Pasukan darat berhasil melakukan penetrasi ke wilayah musuh.",
            "Pembersihan bunker musuh dilakukan oleh unit infanteri khusus."
        );
    }
    if (hasPlayer('kapal') || hasPlayer('selam')) {
        logs.push(
            "Armada laut melakukan blokade di wilayah perairan musuh.",
            "Kapal selam kita mendeteksi pergerakan bawah air lawan.",
            "Gempuran rudal dari laut menghancurkan pangkalan pantai musuh.",
            "Satuan kapal cepat melakukan serangan hit-and-run sukses."
        );
    }

    // MUSUH REACTIONS (SYNCED WITH database_berita.py)
    if (hasEnemy('artileri') || hasEnemy('rocket')) {
        logs.push(
            "Hujan artileri musuh menghambat laju gerak pasukan kita!",
            "Radar mendeteksi tembakan balasan artileri berat lawan.",
            "Posisi kita sedang diincar oleh baterai artileri musuh.",
            "Ledakan artileri lawan menyebabkan kerusakan pada lini depan."
        );
    }
    if (hasEnemy('sam') || hasEnemy('pertahanan udara')) {
        logs.push(
            "Sistem pertahanan udara musuh aktif, pesawat kita dalam bahaya!",
            "Rudal SAM musuh diluncurkan dari posisi tersembunyi.",
            "Pilot melaporkan adanya kuncian radar (radar lock) dari bawah.",
            "Sistem pertahanan SAM musuh sangat rapat di area ini."
        );
    }
    if (hasEnemy('jet') || hasEnemy('pesawat')) {
        logs.push(
            "Intersepsi udara dilakukan oleh jet tempur musuh.",
            "Dogfight terjadi di langit Sektor 7!",
            "Pesawat intai musuh terpantau melakukan pengintaian.",
            "Serangan udara musuh menargetkan unit logistik kita."
        );
    }

    // UMUM (SYNCED WITH database_berita.py)
    logs.push(
        "Operasi militer berlangsung dengan intensitas tinggi.",
        "Pertukaran tembakan terus terjadi di sepanjang garis depan.",
        "Pertahanan musuh mulai goyah di bawah tekanan terus menerus.",
        "Kondisi medan pertempuran semakin mencekam dan sulit diprediksi."
    );

    return Array.from(new Set(logs));
};
