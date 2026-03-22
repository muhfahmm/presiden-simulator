import urllib.request
import json
import re

def fetch_json(url):
    try:
        with urllib.request.urlopen(url) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
         print(f"Error fetching online data: {e}")
         return []

# 1. Read existing countries from 7.DAFTAR NEGARA.txt
txt_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"
txt_countries = set()

try:
    with open(txt_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line: continue
            # Extract name: "197. [ ] prancis" -> "prancis"
            match = re.search(r'^\d+\.\s*\[[ x]\]\s+(.+)$', line)
            if match:
                 name = match.group(1).split("[")[0].strip().lower() # remove any brackets
                 txt_countries.add(name)
except Exception as e:
     print(f"Error reading file: {e}")

print(f"Total countries in .txt file: {len(txt_countries)}")

# 2. Fetch online database
online_data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")

missing_independent = []
missing_territories = []

for c in online_data:
    name_common = c["name"].get("common", "").strip()
    independent = c.get("independent", False)
    
    # Get Indonesian common name
    ind_data = c.get("translations", {}).get("ind", {})
    name_id = ind_data.get("common", "").strip().lower()
    name_id_official = ind_data.get("official", "").strip().lower()
    
    # Fallback to English common if ID is missing (rare)
    lookup_names = [name_id, name_id_official, name_common.lower()]
    
    found = False
    for l_name in lookup_names:
        if l_name and l_name in txt_countries:
            found = True
            break
            
    if not found:
        # Extra check: some names might be slight variations
        # Let's collect them for display
        item = f"{name_common} (ID: {ind_data.get('common', 'None')})"
        if independent:
            missing_independent.append(item)
        else:
            missing_territories.append(item)

# 3. Write results to file
with open(r'c:\fhm\EM4\tmp\missing_from_txt.txt', 'w', encoding='utf-8') as f_out:
    f_out.write(f"Total entries loaded from .txt: {len(txt_countries)}\n")
    f_out.write("\n--- Missing Independent Countries in .txt ---\n")
    for m in sorted(missing_independent):
        f_out.write(f"- {m}\n")

    f_out.write("\n--- Missing Non-Independent Territories in .txt ---\n")
    for m in sorted(missing_territories):
        f_out.write(f"- {m}\n")
