import os
import urllib.request
import json
import re
import random

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
# Use original valid template file (afganistan.ts is still valid inside index.ts, wait)
# afganistan.ts WAS ALREADY updated with numbers in turn 2!
# So it is valid and populated!
template_path = os.path.join(base_dir, "asia", "afganistan.ts")

def randomize_values(m):
    key = m.group(1)
    val_str = m.group(2)
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

for id_name, meta in country_map.items():
    en_name = meta["en"]
    continent = meta["continent"]
    print(f"Re-generating {id_name}...")
    
    match = None
    for c in countries_data:
        names = [c["name"].get("common", "").lower(), c["name"].get("official", "").lower()] + [alias.lower() for alias in c.get("altSpellings", [])]
        if en_name.lower() in names:
            match = c
            break
            
    if not match:
        print(f"Warning: {en_name} not found.")
        continue

    capital = match["capital"][0] if match.get("capital") else "N/A"
    lat, lon = match["latlng"] if len(match.get("latlng", [])) == 2 else [0, 0]
    cca2 = match["cca2"]
    flag = flags_data.get(cca2, {}).get("emoji", "🗺️")
    var_name = id_name.replace(" dan ", "_dan_").replace(" ", "_")
    
    content = template_content
    content = re.sub(r'export const afganistan: CountryData =', f'export const {var_name}: CountryData =', content)
    content = re.sub(r'"name_en": ".*?",', f'"name_en": "{en_name}",', content)
    content = re.sub(r'"capital": ".*?",', f'"capital": "{capital}",', content)
    content = re.sub(r'"name_id": ".*?",', f'"name_id": "{id_name.capitalize()}",', content)
    content = re.sub(r'"lon": -?\d+,', f'"lon": {lon},', content)
    content = re.sub(r'"lat": -?\d+,', f'"lat": {lat},', content)
    content = re.sub(r'"flag": ".*?",', f'"flag": "{flag}",', content)
    content = re.sub(r'"pop": ".*?",', f'"pop": "10M",', content)
    # Randomize top level budget and income manually
    budget_val = f"Rp {random.randint(100, 800)} T"
    income_val = f"Rp {random.randint(200, 1000)} T"
    content = re.sub(r'"budget":\s*"Rp \d+ T",', f'"budget": "{budget_val}",', content, count=1)
    content = re.sub(r'"income":\s*"Rp \d+ T",', f'"income": "{income_val}",', content, count=1)
    
    # Randomize only inside scope to protect budget and income lines
    # Find "infrastructure" index
    parts = content.split('"infrastructure":', 1)
    if len(parts) == 2:
         # randomize inside part[1] and append
         rand_part = re.sub(r'"(\w+)":\s*(\d+)\s*,', randomize_values, parts[1])
         content = parts[0] + '"infrastructure":' + rand_part
         
    target_file = os.path.join(base_dir, continent, f"{var_name}.ts")
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Re-generation complete.")
