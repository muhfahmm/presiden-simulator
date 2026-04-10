import os
import re

# Konfigurasi Path
BASE_DIR = r'c:\fhm\em\app\frontend\src\app\database\data\database_hubungan_antar_negara'
REGIONS = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa']

# Definisi Geopolitik
BLOK_BARAT = ["amerika serikat", "inggris", "jerman", "prancis", "italia", "kanada", "australia", "jepang", "israel", "selandia baru", "belanda", "belgia", "spanyol", "portugal", "polandia", "ukraina", "korea selatan"]
BLOK_TIMUR = ["rusia", "china", "iran", "korea utara", "belarus", "suriah", "venezuela", "kuba", "nikaragua"]
ASEAN = ["indonesia", "malaysia", "singapura", "thailand", "filipina", "brunei", "vietnam", "kamboja", "laos", "myanmar", "timor leste"]
UNI_EROPA = ["jerman", "prancis", "italia", "belgia", "belanda", "luksemburg", "spanyol", "portugal", "yunani", "austria", "swedia", "finlandia", "polandia", "ceko", "hungaria"]

def get_relation_score(country_name, target_name):
    country_name = country_name.lower()
    target_name = target_name.lower()

    if country_name == target_name:
        return 100

    # Konflik Panas (Skor sangat rendah)
    hot_conflicts = [
        ({"rusia", "ukraina"}, 5),
        ({"israel", "palestina"}, 5),
        ({"korea utara", "korea selatan"}, 10),
        ({"india", "pakistan"}, 15),
        ({"iran", "israel"}, 5),
        ({"as", "iran"}, 15),
        ({"as", "rusia"}, 15),
        ({"as", "china"}, 20),
        ({"china", "taiwan"}, 10)
    ]

    for conflict_pair, score in hot_conflicts:
        if country_name in conflict_pair and target_name in conflict_pair:
            return score

    # Aliansi Kuat (Skor sangat tinggi)
    if country_name in BLOK_BARAT and target_name in BLOK_BARAT: return 95
    if country_name in BLOK_TIMUR and target_name in BLOK_TIMUR: return 95
    if country_name in ASEAN and target_name in ASEAN: return 85
    if country_name in UNI_EROPA and target_name in UNI_EROPA: return 95

    # Hubungan Spesifik Indonesia
    if country_name == "indonesia":
        if target_name == "palestina": return 98
        if target_name == "israel": return 5
        if target_name in ASEAN: return 90
        if target_name == "rusia": return 65 # Bebas aktif, condong kerjasama militer/ekonomi
        if target_name == "amerika serikat": return 65 # Bebas aktif

    # Persaingan Blok (Skor rendah)
    if (country_name in BLOK_BARAT and target_name in BLOK_TIMUR) or \
       (country_name in BLOK_TIMUR and target_name in BLOK_BARAT):
        return 20

    return 50

# Eksekusi Pembaruan
print("Memulai pembaruan massal 207 negara...")
count = 0

for region in REGIONS:
    region_path = os.path.join(BASE_DIR, region)
    if not os.path.exists(region_path):
        continue

    for filename in os.listdir(region_path):
        if filename.endswith(".ts"):
            file_path = os.path.join(region_path, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Ekstrak nama negara dari nama file: "140_rusia.ts" -> "rusia"
            name_match = re.search(r'\d+_(.+)\.ts', filename)
            if not name_match:
                continue
            current_country = name_match.group(1).replace('_', ' ')

            # Fungsi pengganti untuk re.sub
            def replace_rel(match):
                item_id = match.group(1)
                item_name = match.group(2)
                old_score = match.group(3)
                new_score = get_relation_score(current_country, item_name)
                return f'{{ id: {item_id}, name: "{item_name}", relation: {new_score} }}'

            # Regex: mencari pola { id: X, name: "Y", relation: Z }
            pattern = re.compile(r'\{ id: (\d+), name: "([^"]+)", relation: (\d+) \}')
            new_content = pattern.sub(replace_rel, content)

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            count += 1
            print(f"Updated: {filename}")

print(f"\nBERHASIL! Total {count} negara telah diperbarui dengan logika realistis.")
