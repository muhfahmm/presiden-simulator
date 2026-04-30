# DATABASE BERITA MUSUH (ENEMY) - PYTHON VERSION
# Semua narasi pertempuran untuk faksi musuh dikelola di sini.

ENEMY_NEWS = {
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
        "Dogfight terjadi di langit Sektor 7 antara {player} dan {target}!",
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
}

def get_enemy_news():
    return ENEMY_NEWS
