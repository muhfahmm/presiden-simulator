import json
import os
import difflib

daftar_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\daftar-menu\6.DAFTAR NEGARA.txt"
geojson_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\world.geojson"
output_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\translations.json"

# 1. Load lists
list_id = []
if os.path.exists(daftar_path):
    with open(daftar_path, 'r', encoding='utf-8') as f:
        for line in f:
            if '. ' in line:
                list_id.append(line.strip().split('. ', 1)[1].strip())

geojson = {}
if os.path.exists(geojson_path):
    with open(geojson_path, 'r', encoding='utf-8') as f:
        geojson = json.load(f)

names_en = [f['properties']['name'] for f in geojson.get('features', [])]

# 2. Manual Translation Overrides for items with high-delta string lengths
translation_map = {
    "afrika selatan": "South Africa",
    "aljazair": "Algeria",
    "amerika serikat": "United States",
    "arab saudi": "Saudi Arabia",
    "belanda": "Netherlands",
    "belgia": "Belgium",
    "ceko": "Czech Republic",
    "china": "China",
    "filipina": "Philippines",
    "hungaria": "Hungary",
    "inggris": "United Kingdom",
    "irak": "Iraq",
    "islandia": "Iceland",
    "italia": "Italy",
    "jepang": "Japan",
    "jerman": "Germany",
    "kamboja": "Cambodia",
    "kanada": "Canada",
    "kirgizstan": "Kyrgyzstan",
    "kosta rika": "Costa Rica",
    "kroasia": "Croatia",
    "kuba": "Cuba",
    "mesir": "Egypt",
    "meksiko": "Mexico",
    "republik rumania": "Romania",
    "perancis": "France",
    "polandia": "Poland",
    "republik afrika tengah": "Central African Republic",
    "republik demokratik kongo": "Dem. Rep. Congo",
    "serbia": "Serbia",
    "selandia baru": "New Zealand",
    "siprus": "Cyprus",
    "slowakia": "Slovakia",
    "spanyol": "Spain",
    "suriah": "Syria",
    "swedia": "Sweden",
    "swiss": "Switzerland",
    "turki": "Turkey",
    "ukraina": "Ukraine",
    "uni emirat arab": "United Arab Emirates",
    "yaman": "Yemen",
    "yordania": "Jordan"
}

# 3. Fuzzy Matching loop
lookup = {} # maps English Name -> Indonesian Name Title
matched_list = []

for id_name in list_id:
    id_lower = id_name.lower()
    
    # Check Manual Overrides first
    if id_lower in translation_map:
        lookup[translation_map[id_lower]] = id_name.title()
        continue
        
    # use difflib fuzzy
    matches = difflib.get_close_matches(id_lower, names_en, n=1, cutoff=0.5)
    if matches:
        lookup[matches[0]] = id_name.title()
    else:
        print(f"Failed to match: {id_name}")

# Reverse Lookup map (EN -> ID) and save
# We also have list to reverse (which English matches which Indonesian name)
# Wait, extract_centers.py iterates GeoJSON (English names) and needs Indonesian translation.
# So lookup structure { "Indonesia": "Indonesia", "Singapore": "Singapura" } is exact!

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(lookup, f, indent=2, ensure_ascii=False)

print(f"Generated {len(lookup)} translation keys to {output_path}")
