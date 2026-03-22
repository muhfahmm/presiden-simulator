import os
import urllib.request
import json
import re
import random

# Mapping Indonesian name -> English Name, Continent Code
country_map = {
    "bahama": {"en": "Bahamas", "continent": "na"},
    "bahrain": {"en": "Bahrain", "continent": "asia"},
    "bangladesh": {"en": "Bangladesh", "continent": "asia"},
    "barbados": {"en": "Barbados", "continent": "na"},
    "belanda": {"en": "Netherlands", "continent": "eropa"},
    "belarus": {"en": "Belarus", "continent": "eropa"},
    "belgia": {"en": "Belgium", "continent": "eropa"},
    "belize": {"en": "Belize", "continent": "na"},
    "benin": {"en": "Benin", "continent": "afrika"},
    "bhutan": {"en": "Bhutan", "continent": "asia"},
    "bolivia": {"en": "Bolivia", "continent": "sa"},
    "bosnia dan hercegovina": {"en": "Bosnia and Herzegovina", "continent": "eropa"},
    "botswana": {"en": "Botswana", "continent": "afrika"},
    "brazil": {"en": "Brazil", "continent": "sa"},
    "brunei": {"en": "Brunei", "continent": "asia"},
    "bulgaria": {"en": "Bulgaria", "continent": "eropa"},
    "burkina faso": {"en": "Burkina Faso", "continent": "afrika"},
    "burundi": {"en": "Burundi", "continent": "afrika"},
    "chad": {"en": "Chad", "continent": "afrika"},
    "chile": {"en": "Chile", "continent": "sa"},
    "china": {"en": "China", "continent": "asia"},
    "costa rica": {"en": "Costa Rica", "continent": "na"},
    "ceko": {"en": "Czechia", "continent": "eropa"}
}

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
template_path = os.path.join(base_dir, "asia", "afganistan.ts")

def randomize_values(m):
    key = m.group(1)
    val_str = m.group(2)
    # Customize based on types
    if key in ["power_grid", "road_quality", "internet_coverage", "tech_stack", "water_access", "literacy", "healthcare_index", "security_index", "satisfaction", "readiness", "public_trust", "literacy", "corruption_index"]:
        return f'"{key}": {random.randint(50, 95)},'
    if key in ["personnel"]:
        return f'"{key}": {random.randint(5000, 30000)},'
    if key in ["hospital_beds"] or key.endswith("fleet"):
         return f'"{key}": {random.randint(500, 10000)},'
    if key in ["main_battle_tank", "apc", "artileri_berat", "kapal_destroyer", "jet_tempur_stealth", "helikopter_serang", "pesawat_pengintai"]:
         return f'"{key}": {random.randint(10, 200)},'
    if key in ["sat", "satellite_system", "radar_network"]:
         return f'"{key}": {random.randint(0, 5)},'
    if key == "budget" and "Rp" in val_str:
        return f'"{key}": "Rp {random.randint(100, 600)} T",'
    return f'"{key}": {random.randint(1, 40)},'

def fetch_json(url):
    try:
        with urllib.request.urlopen(url) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return []

print("Downloading reference data...")
countries_data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
flags_data = fetch_json("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json")

# Load Template
with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

# Build indices dict
continent_additions = {c: [] for c in ["asia", "afrika", "eropa", "na", "sa", "oceania"]}

for id_name, meta in country_map.items():
    en_name = meta["en"]
    continent = meta["continent"]
    print(f"Processing {id_name} ({en_name})...")
    
    # Match in countries_data
    match = None
    for c in countries_data:
        names = [c["name"].get("common", "").lower(), c["name"].get("official", "").lower()] + [alias.lower() for alias in c.get("altSpellings", [])]
        if en_name.lower() in names:
            match = c
            break
            
    if not match:
        print(f"Warning: Could not match {en_name} in database. Skipping coords.")
        continue

    capital = match["capital"][0] if match.get("capital") else "N/A"
    lat, lon = match["latlng"] if len(match.get("latlng", [])) == 2 else [0, 0]
    cca2 = match["cca2"]
    flag = flags_data.get(cca2, {}).get("emoji", "🗺️")

    # Generate variable name
    var_name = id_name.replace(" dan ", "_dan_").replace(" ", "_")
    
    # Perform Regex string replacement for Metadata
    content = template_content
    # Replace Variable Name and Export
    content = re.sub(r'export const afganistan: CountryData =', f'export const {var_name}: CountryData =', content)
    # Replace properties
    content = re.sub(r'"name_en": ".*?",', f'"name_en": "{en_name}",', content)
    content = re.sub(r'"capital": ".*?",', f'"capital": "{capital}",', content)
    content = re.sub(r'"name_id": ".*?",', f'"name_id": "{id_name.capitalize()}",', content)
    content = re.sub(r'"lon": \d+,', f'"lon": {lon},', content)
    content = re.sub(r'"lat": \d+,', f'"lat": {lat},', content)
    content = re.sub(r'"flag": ".*?",', f'"flag": "{flag}",', content)
    content = re.sub(r'"pop": ".*?",', f'"pop": "10M",', content) # Generic pop
    
    # Randomize values for stats
    content = re.sub(r'"(\w+)":\s*(\d+)\s*,', randomize_values, content)
    content = re.sub(r'"(\w+)":\s*"Rp (\d+) T",', randomize_values, content) # handle budget
    
    # Write File
    target_file = os.path.join(base_dir, continent, f"{var_name}.ts")
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    continent_additions[continent].append(var_name)
    print(f"Created file: {target_file}")

# Update _index.ts in continents
for cont, vars_list in continent_additions.items():
    if not vars_list:
        continue
    index_file = os.path.join(base_dir, cont, "_index.ts")
    if not os.path.exists(index_file):
        print(f"Static indexing not found for {cont}")
        continue
        
    with open(index_file, 'r', encoding='utf-8') as f:
        idx_content = f.read()
        
    for v in vars_list:
        if f'export {{ {v} }}' not in idx_content:
            idx_content += f'\nexport {{ {v} }} from "./{v}";'
            
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(idx_content)
    print(f"Updated index: {index_file}")

# Update core index.ts in data/countries
main_index = os.path.join(base_dir, "index.ts")
with open(main_index, 'r', encoding='utf-8') as f:
    main_content = f.read()

for cont, vars_list in continent_additions.items():
    if not vars_list:
        continue
    # Find import line for cont, e.g. import { ... } from "./asia/_index";
    pattern = rf'(import\s*\{{\s*(.*?)\s*\}}\s*from\s*"\./{cont}/_index";)'
    match = re.search(pattern, main_content)
    if match:
        existing_vars = match.group(2)
        new_vars = existing_vars + ", " + ", ".join(vars_list)
        main_content = main_content.replace(match.group(1), f'import {{ {new_vars} }} from "./{cont}/_index";')

# Append to countries array
for vars_list in continent_additions.values():
    for v in vars_list:
        if f'  {v},' not in main_content and f'  {v}\n' not in main_content:
            # Insert before final ];
            main_content = re.sub(r'(\s*\];\s*$)', f'\n  {v},\n\\1', main_content)

with open(main_index, 'w', encoding='utf-8') as f:
    f.write(main_content)
    
print("Synchronization complete.")
