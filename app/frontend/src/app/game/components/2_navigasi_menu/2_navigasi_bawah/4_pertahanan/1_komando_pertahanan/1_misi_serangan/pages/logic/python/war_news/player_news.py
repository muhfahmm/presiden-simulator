# DATABASE BERITA PEMAIN (PLAYER) - PYTHON VERSION
# Semua narasi pertempuran untuk faksi pemain dikelola di sini.

PLAYER_NEWS = {
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
}

def get_player_news():
    return PLAYER_NEWS
