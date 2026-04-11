import os

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def get_subdirs(parent):
    if not os.path.exists(parent): return []
    return [d for d in os.listdir(parent) if os.path.isdir(os.path.join(parent, d))]

pbb_orgs = get_subdirs(pbb_dir)
regional_orgs = get_subdirs(regional_dir)

# Helper to normalize folder name to ID
def to_id(folder_name):
    # Strip number prefix (e.g. "1_")
    name = folder_name.split('_', 1)[1]
    # Clean up name: lowercase, replace spaces/hyphens with underscore, strip brackets
    name = name.lower()
    name = name.replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
    # Special overrides to match existing UI
    if "dana_moneter" in name: return "imf"
    if "bank_dunia" in name: return "world_bank"
    if "kesehatan_dunia" in name: return "who"
    if "maritim_internasional" in name: return "imo"
    if "telekomunikasi_internasional" in name: return "itu"
    if "meteorologi_dunia" in name: return "wmo"
    if "uni_eropa" in name: return "uni_eropa"
    if "perdagangan_dunia" in name: return "wto"
    if "buruh_internasional" in name: return "ilo"
    if "pangan_dan_pertanian" in name: return "fao"
    if "penerbangan_sipil" in name: return "icao"
    return name

# 1. Initialize members.ts
for d in pbb_orgs:
    path = os.path.join(pbb_dir, d, "members.ts")
    if not os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write("export const members = [];\n")

for d in regional_orgs:
    path = os.path.join(regional_dir, d, "members.ts")
    if not os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write("export const members = [];\n")

# 2. Generate index.tsx
imports = []
mapping = []

for d in pbb_orgs:
    id_name = to_id(d)
    var_name = f"{id_name}_Members"
    imports.append(f'import {{ members as {var_name} }} from "./1_organisasi_PBB/{d}/members";')
    mapping.append(f'  {id_name}: {var_name},')

for d in regional_orgs:
    id_name = to_id(d)
    var_name = f"{id_name}_Members"
    imports.append(f'import {{ members as {var_name} }} from "./2_organisasi_regional/{d}/members";')
    mapping.append(f'  {id_name}: {var_name},')

content = "\n".join(imports) + "\n\n"
content += "export const OrganizationMembers: Record<string, string[]> = {\n"
content += "\n".join(mapping) + "\n"
content += "};\n"

with open(os.path.join(root_dir, "index.tsx"), 'w', encoding='utf-8') as f:
    f.write(content)

print("Mass Initialization and Registration Complete.")
