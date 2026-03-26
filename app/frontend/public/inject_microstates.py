import json
import os
import difflib

daftar_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\daftar-menu\6.DAFTAR NEGARA.txt"
centers_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\country_centers.json"
missing_coords_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\missing_coords.json"

daftar = []
with open(daftar_path, 'r', encoding='utf-8') as f:
    for line in f:
        if '. ' in line:
            daftar.append(line.strip().split('. ', 1)[1].strip())

centers = []
with open(centers_path, 'r', encoding='utf-8') as f:
    centers = json.load(f)

countries_on_map = {c['name_id'].lower(): c for c in centers}

with open(missing_coords_path, 'r', encoding='utf-8') as f:
    missing_data = json.load(f)

# Manual dictionary fallback
manual_missing = {
    "antigua dan barbuda": "Antigua and Barbuda",
    "kiribati": "Kiribati",
    "dominika": "Dominica",
    "grenada": "Grenada",
    "maldives": "Maldives",
    "marshall": "Marshall Islands",
    "mauritius": "Mauritius",
    "mikronesia": "Micronesia",
    "monako": "Monaco",
    "nauru": "Nauru",
    "palau": "Palau",
    "saint kitts dan nevis": "Saint Kitts and Nevis",
    "saint lucia": "Saint Lucia",
    "saint vincent dan grenadine": "Saint Vincent and the Grenadines",
    "samoa": "Samoa",
    "san marino": "San Marino",
    "sao tome dan principe": "São Tomé and Príncipe",
    "seychelles": "Seychelles",
    "tonga": "Tonga",
    "tuvalu": "Tuvalu",
    "vatikan": "Vatican City"
}

added_count = [0]
for d_name in daftar:
    d_lower = d_name.lower()
    if d_lower in countries_on_map:
        continue
        
    en_key = manual_missing.get(d_lower)
    if not en_key:
        matches = difflib.get_close_matches(d_name, [m['name']['common'] for m in missing_data], n=1, cutoff=0.5)
        if matches:
            en_key = matches[0]
 
    if en_key:
        target_item = next((m for m in missing_data if m['name']['common'] == en_key), None)
        if target_item and 'latlng' in target_item and len(target_item['latlng']) == 2:
            lat, lon = target_item['latlng']
            flag = target_item.get('flag', "🏳️")
            centers.append({
                "name_en": en_key,
                "name_id": d_name.title(),
                "lon": lon,
                "lat": lat,
                "flag": flag,
                "pop": "1M" if 'population' not in target_item else f"{target_item['population'] / 1000000:.1f}M",
                "budget": "Rp 500 T",
                "religion": "N/A",
                "ideology": "N/A"
            })
            added_count[0] += 1
            print(f"Added: {d_name} ({en_key})")
 
if added_count[0] > 0:
    with open(centers_path, 'w', encoding='utf-8') as f:
         json.dump(centers, f, indent=2, ensure_ascii=False)
    print(f"Successfully injected {added_count[0]} missing microstates!")
else:
    print("No missing items found to inject.")
