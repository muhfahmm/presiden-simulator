import os
import re
import urllib.request
import json

def fetch_json(url):
    try:
        with urllib.request.urlopen(url) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
         print(f"Error fetching online data: {e}")
         return []

# 1. Read existing countries from .ts files
base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
existing_names_en = set()

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and file not in ["_index.ts", "index.ts"]:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    match = re.search(r'"name_en":\s*"([^"]+)"', content)
                    if not match:
                        match = re.search(r"'name_en':\s*'([^']+)'", content)
                    if match:
                        existing_names_en.add(match.group(1).strip().lower())
            except Exception as e:
                 pass

# 2. Fetch online database
online_data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")

missing_countries = []
missing_territories = []

for c in online_data:
    name_common = c["name"].get("common", "").strip()
    name_official = c["name"].get("official", "").strip()
    independent = c.get("independent", False)
    
    # Check if already exists
    if name_common.lower() in existing_names_en or name_official.lower() in existing_names_en:
        continue
        
    alt_names = [a.lower() for a in c.get("altSpellings", [])]
    if any(alt in existing_names_en for alt in alt_names):
        continue

    item = f"{name_common} ({c.get('region', 'Unknown')})"
    if independent:
        missing_countries.append(item)
    else:
        missing_territories.append(item)

# 3. Write results to file
with open(r'c:\fhm\EM4\tmp\missing_countries.txt', 'w', encoding='utf-8') as f_out:
    f_out.write(f"Total existing countries in data files: {len(existing_names_en)}\n")
    f_out.write("\n--- Missing Independent Countries ---\n")
    for m in sorted(missing_countries):
        f_out.write(f"- {m}\n")

    f_out.write("\n--- Missing Non-Independent Territories ---\n")
    for m in sorted(missing_territories):
        f_out.write(f"- {m}\n")
