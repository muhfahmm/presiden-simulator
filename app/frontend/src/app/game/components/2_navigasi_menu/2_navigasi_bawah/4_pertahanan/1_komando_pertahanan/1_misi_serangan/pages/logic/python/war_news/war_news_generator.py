# DATABASE BERITA PERANG (WAR NEWS DATABASE)
# File ini berisi kumpulan narasi pertempuran yang dikategorikan berdasarkan jenis unit.

WAR_NEWS = {
    "player": {
        "tank": [
            "Divisi Kavaleri {player} melakukan manuver penjepit di sektor barat {target}.",
            "Main Battle Tank {player} menembus garis pertahanan pertama {target}.",
            "Gempuran lapis baja {player} merontokkan barikade pertahanan lawan.",
            "Konvoi tank {player} berhasil mengamankan jalur logistik utama.",
            "Resimen tank {player} melakukan penetrasi dalam ke wilayah {target}.",
            "Duel artileri tank terjadi di dataran terbuka, {player} unggul mutlak.",
            "Lini depan {target} runtuh akibat serangan kavaleri berat {player}."
        ],
        "pesawat": [
            "Skuadron udara {player} melakukan pengeboman presisi pada instalasi militer {target}.",
            "Superioritas udara di langit {target} berhasil diamankan oleh {player}.",
            "Jet tempur {player} melakukan intersepsi terhadap target strategis.",
            "Serangan udara {player} berhasil melumpuhkan pusat komunikasi {target}.",
            "Pesawat pengebom {player} menghancurkan gudang amunisi {target}.",
            "UAV {player} memberikan koordinat presisi untuk gempuran udara.",
            "Dogfight sengit di langit {target} berakhir dengan kemenangan {player}."
        ],
        "infanteri": [
            "Pasukan infanteri {player} bergerak maju mengamankan perimeter {target}.",
            "Terjadi kontak senjata jarak dekat antara {player} dan {target} di perbatasan.",
            "Pasukan darat {player} berhasil melakukan penetrasi ke wilayah dalam {target}.",
            "Pembersihan bunker {target} dilakukan oleh unit infanteri khusus {player}.",
            "Pasukan linud {player} berhasil mendarat di belakang garis pertahanan {target}.",
            "Sniper {player} berhasil melumpuhkan perwira lapangan {target}.",
            "Pasukan khusus {player} melakukan sabotase di pusat logistik {target}."
        ],
        "kapal": [
            "Armada laut {player} melakukan blokade ketat di perairan {target}.",
            "Kapal selam {player} mendeteksi pergerakan bawah air {target}.",
            "Gempuran rudal dari laut {player} menghancurkan pangkalan pantai {target}.",
            "Satuan kapal cepat {player} melakukan serangan kilat ke armada {target}.",
            "Gugus tugas {player} berhasil menghalau upaya pendaratan {target}.",
            "Kapal perusak {player} menenggelamkan kapal suplai {target}.",
            "Rudal Tomahawk {player} meluncur dari kapal selam menuju pusat kota {target}."
        ]
    },
    "enemy": {
        "artileri": [
            "Hujan artileri {target} menghambat laju gerak pasukan {player}!",
            "Radar {player} mendeteksi tembakan balasan artileri berat {target}.",
            "Posisi {player} sedang diincar oleh baterai artileri {target}.",
            "Ledakan artileri {target} menyebabkan kerusakan pada lini depan {player}.",
            "Pasukan {target} menggunakan taktik bumi hangus dengan artileri.",
            "Baterai roket {target} menghantam kamp konsentrasi {player}.",
            "Tembakan mortir {target} menyulitkan pergerakan infanteri {player}."
        ],
        "sam": [
            "Sistem pertahanan udara {target} aktif, pesawat {player} dalam bahaya!",
            "Rudal SAM {target} diluncurkan dari posisi tersembunyi.",
            "Pilot {player} melaporkan kuncian radar (radar lock) dari pertahanan {target}.",
            "Sistem pertahanan SAM {target} sangat rapat di area mandala tempur.",
            "Pesawat {player} terpaksa manuver evasif menghindari rudal {target}.",
            "Pangkalan SAM {target} berhasil mendeteksi jet siluman {player}.",
            "Anti-Air {target} berhasil menjatuhkan drone pengintai {player}."
        ],
        "pesawat": [
            "Intersepsi udara dilakukan oleh jet tempur {target} terhadap {player}.",
            "Dogfight terjadi di langit Sektor 7 antara {player} dan {target}!",
            "Pesawat intai {target} terpantau melakukan pengintaian posisi {player}.",
            "Serangan udara {target} menargetkan unit logistik {player}.",
            "Helikopter serang {target} menghujani posisi {player} dengan roket.",
            "Pesawat pengebom {target} mencoba menembus zona larangan terbang {player}.",
            "Serangan udara mendadak {target} menghancurkan beberapa tank {player}."
        ]
    },
    "general": [
        "Operasi militer antara {player} dan {target} berlangsung intens.",
        "Pertukaran tembakan terjadi di sepanjang garis depan {target}.",
        "Pertahanan {target} mulai goyah di bawah tekanan {player}.",
        "Kondisi medan tempur di {target} semakin mencekam.",
        "Logistik perang mulai menipis bagi {player} dan {target}.",
        "Kabut perang di {target} menyulitkan identifikasi kawan dan lawan.",
        "Komando {player} memerintahkan serangan tanpa henti ke {target}."
    ]
}

def get_news_json():
    import json
    return json.dumps(WAR_NEWS, indent=4)

if __name__ == "__main__":
    # Generate JSON file for frontend bridge
    with open("war_news_database.json", "w") as f:
        f.write(get_news_json())
    print("War news database generated successfully.")
