import os
import urllib.request
import json
import re
import random

# Mapping for Batch 6: K-L
country_map = {
    "korea utara": {"en": "North Korea", "continent": "asia"},
    "kroasia": {"en": "Croatia", "continent": "eropa"},
    "kuba": {"en": "Cuba", "continent": "na"},
    "kuwait": {"en": "Kuwait", "continent": "asia"},
    "laos": {"en": "Laos", "continent": "asia"},
    "latvia": {"en": "Latvia", "continent": "eropa"},
    "lebanon": {"en": "Lebanon", "continent": "asia"},
    "lesotho": {"en": "Lesotho", "continent": "afrika"},
    "liberia": {"en": "Liberia", "continent": "afrika"}
}

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
template_path = os.path.join(base_dir, "asia", "afganistan.ts")

def randomize_values(m):
    key = m.group(1)
    if key in ["power_grid", "road_quality", "internet_coverage", "tech_stack", "water_access", "literacy", "healthcare_index", "security_index", "satisfaction", "readiness", "public_trust", "literacy", "corruption_index"]:
        return f'"{key}": {random.randint(50, 95)},'
    if key in ["personnel"]:
        return f'"{key}": {random.randint(5000, 30000)},'
    if key in ["hospital_beds"] or key.endswith("fleet"):
         return f'"{key}": {random.randint(500, 10000)},'
    return f'"{key}": {random.randint(1, 40)},'

def fetch_json(url):
    try:
        with urllib.request.urlopen(url) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error {url}: {e}")
        return []

print("Downloading reference data...")
countries_data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")
flags_data = fetch_json("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json")

with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

continent_additions = {c: [] for c in ["asia", "afrika", "eropa", "na", "sa", "oceania"]}

for id_name, meta in country_map.items():
    en_name = meta["en"]
    continent = meta["continent"]
    print(f"Generating {id_name}...")
    
    match = None
    for c in countries_data:
        names = [
            c["name"].get("common", "").lower(), 
            c["name"].get("official", "").lower()
        ] + [alias.lower() for alias in c.get("altSpellings", [])]
        
        if en_name.lower() in names or id_name.lower() in names:
            match = c
            break
        # Special case North Korea
        if id_name == "korea utara" and "democratic people's republic of korea" in "".join(names).lower():
            match = c
            break

    if not match:
        print(f"Warning: {en_name} not found in database.")
        continue

    capital = match["capital"][0] if match.get("capital") else "N/A"
    lat, lon = match["latlng"] if len(match.get("latlng", [])) == 2 else [0, 0]
    cca2 = match["cca2"]
    flag = flags_data.get(cca2, {}).get("emoji", "🗺️")
    var_name = id_name.replace(" dan ", "_dan_").replace(" ", "_").replace("-", "_")
    
    content = template_content
    content = re.sub(r'export const afganistan: CountryData =', f'export const {var_name}: CountryData =', content)
    content = re.sub(r'"name_en": ".*?",', f'"name_en": "{en_name}",', content)
    content = re.sub(r'"capital": ".*?",', f'"capital": "{capital}",', content)
    content = re.sub(r'"name_id": ".*?",', f'"name_id": "{id_name.title()}",', content)
    content = re.sub(r'"lon": -?\d+,', f'"lon": {lon},', content)
    content = re.sub(r'"lat": -?\d+,', f'"lat": {lat},', content)
    content = re.sub(r'"flag": ".*?",', f'"flag": "{flag}",', content)
    content = re.sub(r'"pop": ".*?",', f'"pop": "10M",', content)
    
    budget_val = f"Rp {random.randint(100, 800)} T"
    income_val = f"Rp {random.randint(200, 1000)} T"
    content = re.sub(r'"budget":\s*"Rp \d+ T",', f'"budget": "{budget_val}",', content, count=1)
    content = re.sub(r'"income":\s*"Rp \d+ T",', f'"income": "{income_val}",', content, count=1)
    
    parts = content.split('"infrastructure":', 1)
    if len(parts) == 2:
         rand_part = re.sub(r'"(\w+)":\s*(\d+)\s*,', randomize_values, parts[1])
         content = parts[0] + '"infrastructure":' + rand_part
         
    target_file = os.path.join(base_dir, continent, f"{var_name}.ts")
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created file: {target_file}")
    continent_additions[continent].append(var_name)

# Update _index.ts in continents
for cont, vars_list in continent_additions.items():
    if not vars_list:
        continue
    index_file = os.path.join(base_dir, cont, "_index.ts")
    with open(index_file, 'r', encoding='utf-8') as f:
        idx_content = f.read()
    for v in vars_list:
        if f'export {{ {v} }}' not in idx_content:
            idx_content += f'\nexport {{ {v} }} from "./{v}";'
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(idx_content)

# Update core index.ts in data/countries
main_index = os.path.join(base_dir, "index.ts")
with open(main_index, 'r', encoding='utf-8') as f:
    main_content = f.read()

for cont, vars_list in continent_additions.items():
    if not vars_list:
        continue
    pattern = rf'(import\s*\{{\s*(.*?)\s*\}}\s*from\s*"\./{cont}/_index";)'
    match = re.search(pattern, main_content)
    if match:
        existing_vars = match.group(2)
        new_vars = existing_vars + ", " + ", ".join(vars_list)
        main_content = main_content.replace(match.group(1), f'import {{ {new_vars} }} from "./{cont}/_index";')

for vars_list in continent_additions.values():
    for v in vars_list:
         if f'  {v},' not in main_content and f'  {v}\n' not in main_content:
            main_content = re.sub(r'(\s*\];\s*$)', f'\n  {v},\n\\1', main_content)

with open(main_index, 'w', encoding='utf-8') as f:
    f.write(main_content)

print("Synchronized all listings batch 6.")
