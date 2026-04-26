import json
import re
import os

# Paths to the real database folders
BASE_DATA_DIR = r"C:\fhm\em\app\frontend\src\app\pilih_negara\data"
NEGARA_DIR = os.path.join(BASE_DATA_DIR, "negara", "benua", "global")
HUBUNGAN_DIR = os.path.join(BASE_DATA_DIR, "database_hubungan_antar_negara")
PROFILES_DIR = os.path.join(BASE_DATA_DIR, "semua_fitur_negara", "0_profiles")

OUTPUT_DIR = r"c:\fhm\em\app\frontend\src\app\game\components\AI_logic\8_geopolitik_advanced\data"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "base_relations.json")

def parse_ts_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def extract_traits(content, profile_content):
    traits = {}
    
    # Generic extractor for string/number fields in profile_content
    def get_val(key, default=""):
        # Matches "key": "value" or "key": 123
        match = re.search(fr'"{key}":\s*"?([^",\n]+)"?', profile_content)
        if match:
            val = match.group(1).strip()
            # Try to convert to int/float if it looks like one
            if val.isdigit(): return int(val)
            try: return float(val)
            except: return val
        return default

    traits['name_en'] = get_val("name_en")
    traits['capital'] = get_val("capital")
    traits['name_id'] = get_val("name_id", "Unknown")
    traits['lon'] = get_val("lon", 0.0)
    traits['lat'] = get_val("lat", 0.0)
    traits['flag'] = get_val("flag")
    traits['jumlah_penduduk'] = get_val("jumlah_penduduk", 0)
    traits['anggaran'] = get_val("anggaran", 0)
    traits['pendapatan_nasional'] = get_val("pendapatan_nasional", "0")
    traits['religion'] = get_val("religion")
    traits['ideology'] = get_val("ideology", "Neutral")

    # Extract kekuatan_lunak and kekuatan_keras from main country file for AI logic
    lunak_match = re.search(r'"kekuatan_lunak":\s*(\d+)', content)
    traits['economic_focus'] = int(lunak_match.group(1)) if lunak_match else 50

    keras_match = re.search(r'"kekuatan_keras":\s*(\d+)', content)
    traits['aggressiveness'] = int(keras_match.group(1)) if keras_match else 50

    return traits

def extract_relations(content):
    relations = []
    # Matches { id: 1, name: "...", relation: 50 }
    matches = re.finditer(r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*relation:\s*(-?\d+)\s*\}', content)
    for m in matches:
        relations.append({
            "id": int(m.group(1)),
            "relation": int(m.group(3))
        })
    return relations

def generate_data():
    num_countries = 207
    countries_data = [None] * num_countries
    
    print("Scanning country data...")
    # Walk NEGARA_DIR to get traits
    for continent in ["asia", "afrika", "eropa", "na", "sa", "oceania"]:
        cont_path = os.path.join(NEGARA_DIR, continent)
        if not os.path.exists(cont_path): continue
        
        for filename in os.listdir(cont_path):
            if filename.endswith(".ts") and "_" in filename:
                try:
                    country_id = int(filename.split("_")[0])
                except:
                    continue
                    
                if country_id > num_countries: continue
                
                filepath = os.path.join(cont_path, filename)
                profile_path = os.path.join(PROFILES_DIR, continent, filename)
                
                content = parse_ts_file(filepath)
                profile_content = parse_ts_file(profile_path) if os.path.exists(profile_path) else ""
                
                traits = extract_traits(content, profile_content)
                countries_data[country_id - 1] = {
                    "id": country_id - 1,
                    "original_id": country_id,
                    "name": traits['name_id'],
                    "name_en": traits['name_en'],
                    "capital": traits['capital'],
                    "lon": traits['lon'],
                    "lat": traits['lat'],
                    "flag": traits['flag'],
                    "jumlah_penduduk": traits['jumlah_penduduk'],
                    "anggaran": traits['anggaran'],
                    "pendapatan_nasional": traits['pendapatan_nasional'],
                    "religion": traits['religion'],
                    "ideology": traits['ideology'],
                    "aggressiveness": traits['aggressiveness'],
                    "economic_focus": traits['economic_focus'],
                    "continent": continent,
                    "filename_base": filename.replace(".ts", "")
                }

    # Fill gaps if any (defensive)
    for i in range(num_countries):
        if countries_data[i] is None:
            countries_data[i] = {
                "id": i,
                "original_id": i + 1,
                "name": f"Country {i+1}",
                "ideology": "Neutral",
                "aggressiveness": 50,
                "economic_focus": 50
            }

    print("Parsing relationship matrix...")
    matrix = [0] * (num_countries * num_countries)
    for i in range(num_countries):
        matrix[i * num_countries + i] = 100 # Self

    # Walk HUBUNGAN_DIR
    for country in countries_data:
        if 'continent' not in country: continue
        rel_path = os.path.join(HUBUNGAN_DIR, country['continent'], country['filename_base'] + ".ts")
        if os.path.exists(rel_path):
            content = parse_ts_file(rel_path)
            rels = extract_relations(content)
            for r in rels:
                target_idx = r['id'] - 1
                if 0 <= target_idx < num_countries:
                    # Set the relation from current country to target
                    matrix[country['id'] * num_countries + target_idx] = r['relation']

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump({
            "countries": countries_data,
            "relations": matrix,
            "matrix_size": num_countries
        }, f, indent=2)
    
    print(f"Successfully generated matrix from real data: {num_countries}x{num_countries}")
    print(f"Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_data()


if __name__ == "__main__":
    generate_data()
