import os
import re

# Paths
BASE_DATA_DIR = r"c:\fhm\em\app\frontend\src\app\pilih_negara\data"
PROFILES_DIR = os.path.join(BASE_DATA_DIR, "semua_fitur_negara", "0_profiles")
ORGS_DIR = os.path.join(BASE_DATA_DIR, "database_organisasi_internasional")
HUBUNGAN_DIR = os.path.join(BASE_DATA_DIR, "database_hubungan_antar_negara")
OUTPUT_DIR = r"c:\fhm\em\app\frontend\src\app\game\components\AI_logic\8_geopolitik_advanced\data\python"

def parse_ts_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def extract_profile_data(content, filename):
    # Basic regex to extract key-value pairs from TS objects
    data = {}
    name_match = re.search(r'name_id:\s*"([^"]+)"', content)
    ideology_match = re.search(r'ideology:\s*"([^"]+)"', content)
    religion_match = re.search(r'religion:\s*"([^"]+)"', content)
    
    # ID from filename (e.g., 67_indonesia -> 67)
    id_match = re.match(r'(\d+)_', filename)
    if id_match: data['id'] = int(id_match.group(1))
    
    if name_match: data['name'] = name_match.group(1)
    if ideology_match: data['ideology'] = ideology_match.group(1)
    if religion_match: data['religion'] = religion_match.group(1)
    
    return data

def extract_org_members():
    orgs = {}
    index_path = os.path.join(ORGS_DIR, "index.tsx")
    if not os.path.exists(index_path): return {}
    
    content = parse_ts_file(index_path)
    
    import_matches = re.findall(r'import\s+{\s*members\s+as\s+(\w+)\s*}\s+from\s+"([^"]+)"', content)
    var_to_path = {var: path for var, path in import_matches}
    
    key_matches = re.findall(r'(\w+):\s*(\w+)', content.split("OrganizationMembers")[1])
    
    for key, var in key_matches:
        if var in var_to_path:
            rel_path = var_to_path[var]
            full_path = os.path.abspath(os.path.join(ORGS_DIR, rel_path.replace("./", "") + ".ts"))
            
            if os.path.exists(full_path):
                file_content = parse_ts_file(full_path)
                members = re.findall(r'"([^"]+)"', file_content)
                if members:
                    orgs[key] = [m.lower() for m in members]
    return orgs

def extract_relations(content):
    # Extract relation matrix entries: { id: 1, relation: 70 }
    rels = []
    matches = re.findall(r'\{\s*id:\s*(\d+),\s*relation:\s*(\d+)\s*\}', content)
    for m in matches:
        rels.append({'id': int(m[0]), 'relation': int(m[1])})
    return rels

def sync():
    print("Syncing country profiles...")
    countries = [None] * 208 # 1-indexed safety
    for continent in os.listdir(PROFILES_DIR):
        cont_path = os.path.join(PROFILES_DIR, continent)
        if not os.path.isdir(cont_path): continue
        for filename in os.listdir(cont_path):
            if filename.endswith(".ts"):
                content = parse_ts_file(os.path.join(cont_path, filename))
                data = extract_profile_data(content, filename)
                data['continent'] = continent
                data['filename'] = filename[:-3]
                if 'id' in data:
                    countries[data['id']] = data

    countries = [c for c in countries if c is not None]
    num_countries = len(countries)

    print("Syncing organizations...")
    orgs = extract_org_members()

    print("Syncing relations matrix...")
    matrix = [50] * (num_countries * num_countries)
    for i in range(num_countries): 
        matrix[i * num_countries + i] = 100 # Self-relation
    
    # Map ID to index
    id_to_idx = {c['id']: i for i, c in enumerate(countries)}
    
    for country in countries:
        rel_path = os.path.join(HUBUNGAN_DIR, country['continent'], country['filename'] + ".ts")
        if os.path.exists(rel_path):
            content = parse_ts_file(rel_path)
            rels = extract_relations(content)
            for r in rels:
                if r['id'] in id_to_idx:
                    target_idx = id_to_idx[r['id']]
                    matrix[id_to_idx[country['id']] * num_countries + target_idx] = r['relation']

    print("Syncing trade and embassies...")
    trade_registry_path = os.path.join(BASE_DATA_DIR, "database_mitra_perdagangan", "agreementsRegistry.ts")
    trade_agreements = []
    if os.path.exists(trade_registry_path):
        trade_registry = parse_ts_file(trade_registry_path)
        trade_agreements = re.findall(r'partner:\s*"([^"]+)"', trade_registry)
    
    embassy_registry_path = os.path.join(BASE_DATA_DIR, "database_kedutaan_besar", "embassyRegistry.ts")
    embassies = []
    if os.path.exists(embassy_registry_path):
        embassy_registry = parse_ts_file(embassy_registry_path)
        embassies = re.findall(r'location:\s*"([^"]+)"', embassy_registry)

    # Write to Python files
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with open(os.path.join(OUTPUT_DIR, "countries_data.py"), 'w', encoding='utf-8') as f:
        f.write(f"COUNTRIES = {repr(countries)}\n")

    with open(os.path.join(OUTPUT_DIR, "initial_relations.py"), 'w', encoding='utf-8') as f:
        f.write(f"RELATIONS = {repr(matrix)}\n")

    with open(os.path.join(OUTPUT_DIR, "organizations_data.py"), 'w', encoding='utf-8') as f:
        f.write(f"ORGANIZATIONS = {repr(orgs)}\n")
    
    with open(os.path.join(OUTPUT_DIR, "extra_data.py"), 'w', encoding='utf-8') as f:
        f.write(f"TRADE_PARTNERS = {repr(trade_agreements)}\n")
        f.write(f"EMBASSIES = {repr(embassies)}\n")

    print(f"Sync Complete. {num_countries} countries, {len(orgs)} organizations, and extra metadata updated.")

if __name__ == "__main__":
    sync()
