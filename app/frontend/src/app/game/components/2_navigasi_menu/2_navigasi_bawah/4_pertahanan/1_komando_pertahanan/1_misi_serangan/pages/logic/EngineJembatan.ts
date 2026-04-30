/**
 * ENGINE JEMBATAN LOGIKA (POLYGLOT BRIDGE)
 * File ini menghubungkan logika dari C++ dan Python ke dalam lingkungan TypeScript/Next.js.
 * Memastikan kalkulasi pertempuran berjalan sesuai dengan parameter yang telah ditentukan.
 */
/**
 * REPRESENTASI LOGIKA PYTHON: Analisis Medan (Terrain)
 */
const TERRAINS_PYTHON: Record<string, any> = {
    "Urban": {
        "description": "Area padat penduduk dengan gedung-gedung tinggi. Pertahanan Infanteri sangat kuat.",
        "multipliers": { "Infanteri": 1.5, "Tank": 0.8, "Jet": 0.7, "Heli": 1.1 }
    },
    "Jungle": {
        "description": "Hutan tropis lebat. Kendaraan berat sulit bermanuver.",
        "multipliers": { "Infanteri": 1.3, "Tank": 0.6, "Heli": 0.9, "Drone": 1.2 }
    },
    "Desert": {
        "description": "Padang pasir luas. Jarak pandang jauh, menguntungkan kendaraan tempur.",
        "multipliers": { "Tank": 1.4, "Infanteri": 0.7, "Jet": 1.2, "Artileri": 1.3 }
    },
    "Tundra": {
        "description": "Wilayah beku dan ekstrem. Mesin kendaraan sering bermasalah.",
        "multipliers": { "Tank": 0.7, "Infanteri": 0.8, "Heli": 0.6, "Drone": 0.5 }
    },
    "Mountain": {
        "description": "Pegunungan terjal. Sangat sulit untuk manuver darat.",
        "multipliers": { "Infanteri": 1.4, "Tank": 0.4, "Artileri": 0.7, "Heli": 1.3 }
    },
    "Plains": {
        "description": "Dataran terbuka. Ideal untuk pertempuran tank skala besar.",
        "multipliers": { "Tank": 1.5, "Infanteri": 1.0, "Artileri": 1.2, "Jet": 1.1 }
    }
};

const COUNTRY_TERRAIN_MAP_PYTHON: Record<string, string> = {
    "Singapura": "Urban", "Jepang": "Urban", "Korea Selatan": "Urban", "Hong Kong": "Urban", "Makau": "Urban",
    "Jerman": "Urban", "Belanda": "Urban", "Belgia": "Urban", "Inggris": "Urban", "Prancis": "Urban",
    "Italia": "Urban", "Amerika Serikat": "Urban", "Israel": "Urban", "Taiwan": "Urban",
    "Indonesia": "Jungle", "Malaysia": "Jungle", "Vietnam": "Jungle", "Thailand": "Jungle", "Filipina": "Jungle",
    "Brazil": "Jungle", "Kamboja": "Jungle", "Laos": "Jungle", "Papua Nugini": "Jungle", "Kongo": "Jungle",
    "Nigeria": "Jungle", "Kolombia": "Jungle", "Guyana": "Jungle", "Suriname": "Jungle",
    "Arab Saudi": "Desert", "Mesir": "Desert", "Irak": "Desert", "Iran": "Desert", "Libya": "Desert",
    "Uni Emirat Arab": "Desert", "Oman": "Desert", "Yaman": "Desert", "Qatar": "Desert", "Kuwait": "Desert",
    "Aljazair": "Desert", "Maroko": "Desert", "Sudan": "Desert", "Pakistan": "Desert",
    "Rusia": "Tundra", "Kanada": "Tundra", "Norwegia": "Tundra", "Swedia": "Tundra", "Finlandia": "Tundra",
    "Islandia": "Tundra", "Greenland": "Tundra", "Mongolia": "Tundra",
    "Swiss": "Mountain", "Nepal": "Mountain", "Bhutan": "Mountain", "Afganistan": "Mountain", "Kirgizstan": "Mountain",
    "Tajikistan": "Mountain", "Andorra": "Mountain", "Liechtenstein": "Mountain", "Armenia": "Mountain"
};

export const getTerrainData = (countryName: string) => {
    const type = COUNTRY_TERRAIN_MAP_PYTHON[countryName] || "Plains";
    return {
        type: type,
        info: TERRAINS_PYTHON[type]
    };
};

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
    playerUnits: any[],
    enemyUnits: any[],
    playerPower: number,
    enemyPower: number,
    faktorLingkungan: number = 1.0
) => {
    // Normalisasi (Sesuai py: kekuatan_pemain * faktor_cuaca)
    let kekuatanEfektifPemain = playerPower * faktorLingkungan;
    let kekuatanEfektifMusuh = enemyPower;

    // AMBIL DATA MEDAN
    // Catatan: Di sini kita asumsikan pertempuran terjadi di negara musuh (targetCountry)
    // Jika tidak ada nama negara, default ke faktorLingkungan

    // CEK AIR SUPERIORITY (PENTING UNTUK REALISME)
    const playerHasAir = playerUnits.some(u => (u.type.toLowerCase().includes('jet') || u.type.toLowerCase().includes('pesawat') || u.type.toLowerCase().includes('heli') || u.type.toLowerCase().includes('drone')) && u.count > 0);
    const enemyHasAir = enemyUnits.some(u => (u.type.toLowerCase().includes('jet') || u.type.toLowerCase().includes('pesawat') || u.type.toLowerCase().includes('heli') || u.type.toLowerCase().includes('drone')) && u.count > 0);
    
    const playerHasAA = playerUnits.some(u => (u.type.toLowerCase().includes('sam') || u.type.toLowerCase().includes('jet') || u.type.toLowerCase().includes('interceptor')) && u.count > 0);
    const enemyHasAA = enemyUnits.some(u => (u.type.toLowerCase().includes('sam') || u.type.toLowerCase().includes('jet') || u.type.toLowerCase().includes('interceptor')) && u.count > 0);

    // Jika musuh punya udara tapi pemain TIDAK PUNYA Anti-Air sama sekali (SAM/Jet)
    if (enemyHasAir && !playerHasAA) {
        kekuatanEfektifMusuh *= 1.5; // Musuh mendominasi dari langit
    }
    // Sebaliknya
    if (playerHasAir && !enemyHasAA) {
        kekuatanEfektifPemain *= 1.5; 
    }

    const totalKekuatan = kekuatanEfektifPemain + kekuatanEfektifMusuh;
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
        rekomendasi = enemyHasAir && !playerHasAA 
            ? "MAJU HATI-HATI: BAHAYA UDARA! Segera perkuat lini Anti-Air (SAM/Jet)."
            : "MAJU HATI-HATI: Keunggulan tipis, pertahankan tempo.";
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
 * Data ini adalah representasi langsung dari player_news.py dan enemy_news.py
 */

const PLAYER_NEWS_PYTHON = {
    "tank": [
        "Divisi Kavaleri {player} melakukan manuver penjepit di sektor barat {target}.",
        "Main Battle Tank {player} menembus garis pertahanan pertama {target}.",
        "Gempuran lapis baja {player} merontokkan barikade pertahanan lawan.",
        "Konvoi tank {player} berhasil mengamankan jalur logistik utama.",
        "Resimen tank {player} melakukan penetrasi dalam ke wilayah {target}.",
        "Duel artileri tank terjadi di dataran terbuka, {player} unggul mutlak.",
        "Lini depan {target} runtuh akibat serangan kavaleri berat {player}.",
        "Unit kavaleri {player} melaporkan penguasaan titik strategis di {target}.",
        "Tank {player} berhasil menghancurkan bunker pertahanan {target}.",
        "Serangan kilat lapis baja {player} melumpuhkan artileri {target}."
    ],
    "pesawat": [
        "Skuadron udara {player} melakukan pengeboman presisi pada instalasi militer {target}.",
        "Superioritas udara di langit {target} berhasil diamankan oleh {player}.",
        "Jet tempur {player} melakukan intersepsi terhadap target strategis.",
        "Serangan udara {player} berhasil melumpuhkan pusat komunikasi {target}.",
        "Pesawat pengebom {player} menghancurkan gudang amunisi {target}.",
        "UAV {player} memberikan koordinat presisi untuk gempuran udara.",
        "Dogfight sengit di langit {target} berakhir dengan kemenangan {player}.",
        "Penerbang {player} berhasil meluncurkan rudal presisi ke markas {target}.",
        "Sorti udara {player} melumpuhkan sistem radar pertahanan {target}.",
        "Pesawat intai {player} mengonfirmasi kerusakan berat di pangkalan {target}."
    ],
    "infanteri": [
        "Pasukan infanteri {player} bergerak maju mengamankan perimeter {target}.",
        "Terjadi kontak senjata jarak dekat antara {player} dan {target} di perbatasan.",
        "Pasukan darat {player} berhasil melakukan penetrasi ke wilayah dalam {target}.",
        "Pembersihan bunker {target} dilakukan oleh unit infanteri khusus {player}.",
        "Pasukan linud {player} berhasil mendarat di belakang garis pertahanan {target}.",
        "Sniper {player} berhasil melumpuhkan perwira lapangan {target}.",
        "Pasukan khusus {player} melakukan sabotase di pusat logistik {target}.",
        "Batalyon {player} berhasil mengamankan desa di pinggiran {target}.",
        "Infanteri mekanis {player} memberikan perlindungan pada unit logistik.",
        "Pasukan baret {player} berhasil membebaskan sandera di garis depan."
    ],
    "kapal": [
        "Armada laut {player} melakukan blokade ketat di perairan {target}.",
        "Kapal selam {player} mendeteksi pergerakan bawah air {target}.",
        "Gempuran rudal dari laut {player} menghancurkan pangkalan pantai {target}.",
        "Satuan kapal cepat {player} melakukan serangan kilat ke armada {target}.",
        "Gugus tugas {player} berhasil menghalau upaya pendaratan {target}.",
        "Kapal perusak {player} menenggelamkan kapal suplai {target}.",
        "Rudal Tomahawk {player} meluncur dari kapal selam menuju pusat kota {target}.",
        "Kapal induk {player} meluncurkan skuadron jet ke arah {target}.",
        "Pertempuran laut sengit pecah, {player} mendominasi perairan {target}.",
        "Kapal ranjau {player} membersihkan jalur pelayaran menuju {target}."
    ],
    "general": [
        "Pasukan {player} terus menekan pertahanan {target} tanpa henti.",
        "Semangat tempur prajurit {player} sangat tinggi di medan laga.",
        "Komando pusat {player} mengumumkan keberhasilan fase pertama serangan.",
        "Intelijen {player} berhasil menyadap komunikasi rahasia {target}.",
        "Garis pasokan {player} ke {target} berjalan dengan aman dan lancar.",
        "Pasukan {player} telah mengepung kota strategis di {target}, memutus jalur suplai.",
        "Pengepungan total sedang berlangsung, {player} menuntut {target} menyerah.",
        "Sektor logistik {target} kini berada dalam jangkauan tembak {player}.",
        "Pengeboman karpet oleh {player} meratakan instalasi militer utama {target}.",
        "Artileri berat {player} melakukan pengeboman tanpa henti selama 24 jam.",
        "Blokade {player} membuat kota-kota besar di {target} mulai kekurangan daya.",
        "Operasi pengepungan {player} di sektor utara {target} berjalan sukses."
    ]
};

const ENEMY_NEWS_PYTHON = {
    "artileri": [
        "Hujan artileri {target} menghambat laju gerak pasukan {player}!",
        "Radar {player} mendeteksi tembakan balasan artileri berat {target}.",
        "Posisi {player} sedang diincar oleh baterai artileri {target}.",
        "Ledakan artileri {target} menyebabkan kerusakan pada lini depan {player}.",
        "Pasukan {target} menggunakan taktik bumi hangus dengan artileri.",
        "Baterai roket {target} menghantam kamp konsentrasi {player}.",
        "Tembakan mortir {target} menyulitkan pergerakan infanteri {player}.",
        "Artileri medan {target} melakukan tembakan salvo ke arah {player}.",
        "Gempuran artileri {target} merusak jalur komunikasi {player}.",
        "Pecahan peluru artileri {target} menghujani sektor pertahanan {player}."
    ],
    "sam": [
        "Sistem pertahanan udara {target} aktif, pesawat {player} dalam bahaya!",
        "Rudal SAM {target} diluncurkan dari posisi tersembunyi.",
        "Pilot {player} melaporkan kuncian radar (radar lock) dari pertahanan {target}.",
        "Sistem pertahanan SAM {target} sangat rapat di area mandala tempur.",
        "Pesawat {player} terpaksa manuver evasif menghindari rudal {target}.",
        "Pangkalan SAM {target} berhasil mendeteksi jet siluman {player}.",
        "Anti-Air {target} berhasil menjatuhkan drone pengintai {player}.",
        "Pertahanan udara {target} melakukan intersepsi terhadap rudal {player}.",
        "Baterai S-400 {target} mengunci target di wilayah udara {player}.",
        "AAA (Anti-Aircraft Artillery) {target} menembak jatuh heli {player}."
    ],
    "pesawat": [
        "Intersepsi udara dilakukan oleh jet tempur {target} terhadap {player}.",
        "Dogfight terjadi di langit Sektor 7 antara {player} and {target}!",
        "Pesawat intai {target} terpantau melakukan pengintaian posisi {player}.",
        "Serangan udara {target} menargetkan unit logistik {player}.",
        "Helikopter serang {target} menghujani posisi {player} dengan roket.",
        "Pesawat pengebom {target} mencoba menembus zona larangan terbang {player}.",
        "Serangan udara mendadak {target} menghancurkan beberapa tank {player}.",
        "Skuadron 'Ghost' {target} melakukan serangan malam hari ke {player}.",
        "Jet tempur {target} melakukan manuver berbahaya di dekat {player}.",
        "Serangan kamikaze drone {target} menghantam konvoi {player}."
    ],
    "general": [
        "Pasukan {target} memperkuat lini pertahanan mereka di semua sektor.",
        "Laporan intelijen menyebutkan {target} memanggil pasukan cadangan.",
        "Serangan balik {target} mulai dirasakan oleh pasukan {player}.",
        "Propaganda {target} mencoba menurunkan moral prajurit {player}.",
        "Ranjau darat yang dipasang {target} memakan korban di pihak {player}.",
        "Komando {target} memerintahkan perlawanan mati-matian di kota yang dikepung.",
        "Pengeboman udara {player} menyebabkan kepanikan hebat di pusat kota {target}.",
        "Unit pertahanan {target} mencoba melakukan breakout dari pengepungan.",
        "Rakyat {target} dimobilisasi untuk membangun barikade pertahanan kota.",
        "{target} menggunakan terowongan bawah tanah untuk menghindari pengeboman.",
        "Upaya {target} menghancurkan jembatan suplai {player} gagal total.",
        "Sirine pertanda serangan udara terus meraung di seluruh penjuru {target}."
    ]
};

export const getDynamicNarratives = (
    playerUnits: any[], 
    enemyUnits: any[],
    playerCountry: string,
    targetCountry: string
): { player: string[], enemy: string[] } => {
    const playerLogs: string[] = [];
    const enemyLogs: string[] = [];
    
    const hasPlayer = (keyword: string) => playerUnits.some(u => u.type.toLowerCase().includes(keyword.toLowerCase()) && u.count > 0);
    const hasEnemy = (keyword: string) => enemyUnits.some(u => u.type.toLowerCase().includes(keyword.toLowerCase()) && u.count > 0);

    const format = (text: string) => text.replace(/{player}/g, playerCountry).replace(/{target}/g, targetCountry);

    // PEMAIN ACTIONS (Source: player_news.py)
    if (hasPlayer('tank')) playerLogs.push(...PLAYER_NEWS_PYTHON.tank.map(format));
    if (hasPlayer('jet') || hasPlayer('pesawat')) playerLogs.push(...PLAYER_NEWS_PYTHON.pesawat.map(format));
    if (hasPlayer('infanteri')) playerLogs.push(...PLAYER_NEWS_PYTHON.infanteri.map(format));
    if (hasPlayer('kapal') || hasPlayer('selam')) playerLogs.push(...PLAYER_NEWS_PYTHON.kapal.map(format));
    playerLogs.push(...PLAYER_NEWS_PYTHON.general.map(format));

    // MUSUH REACTIONS (Source: enemy_news.py)
    if (hasEnemy('artileri') || hasEnemy('rocket')) enemyLogs.push(...ENEMY_NEWS_PYTHON.artileri.map(format));
    if (hasEnemy('sam') || hasEnemy('pertahanan udara')) enemyLogs.push(...ENEMY_NEWS_PYTHON.sam.map(format));
    if (hasEnemy('jet') || hasEnemy('pesawat')) enemyLogs.push(...ENEMY_NEWS_PYTHON.pesawat.map(format));
    enemyLogs.push(...ENEMY_NEWS_PYTHON.general.map(format));

    return {
        player: Array.from(new Set(playerLogs)),
        enemy: Array.from(new Set(enemyLogs))
    };
};
