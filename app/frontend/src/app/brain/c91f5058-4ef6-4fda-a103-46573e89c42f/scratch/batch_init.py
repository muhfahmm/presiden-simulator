import os

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"

pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def get_subdirs(parent):
    return [d for d in os.listdir(parent) if os.path.isdir(os.path.join(parent, d))]

pbb_orgs = get_subdirs(pbb_dir)
regional_orgs = get_subdirs(regional_dir)

# Create members.ts if not exists
for d in pbb_orgs:
    path = os.path.join(pbb_dir, d, "members.ts")
    if not os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write("export const members = [];\n")
        print(f"Initialized {d}")

for d in regional_orgs:
    path = os.path.join(regional_dir, d, "members.ts")
    if not os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write("export const members = [];\n")
        print(f"Initialized {d}")

# Generate index.tsx content
content = ""

# PBB
for d in pbb_orgs:
    var_name = d.split('_', 1)[1].lower().replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
    # Special handling for already defined ones to match previous names
    if "dana_moneter" in var_name: var_name = "imf"
    elif "bank_dunia" in var_name: var_name = "bankDunia"
    elif "interpol" in var_name: var_name = "interpol"
    elif "kesehatan_dunia" in var_name: var_name = "who"
    
    content += f'import {{ members as {var_name}Members }} from "./1_organisasi_PBB/{d}/members";\n'

# Regional
for d in regional_orgs:
    var_name = d.split('_', 1)[1].lower().replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
    content += f'import {{ members as {var_name}Members }} from "./2_organisasi_regional/{d}/members";\n'

content += "\nexport const OrganizationMembers: Record<string, string[]> = {\n"

# PBB Key mapping
for d in pbb_orgs:
    key = d.split('_', 1)[1].lower().replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
    var_name = key
    if "dana_moneter" in var_name: var_name = "imf"; key="imf"
    elif "bank_dunia" in var_name: var_name = "bankDunia"; key="bank_dunia"
    elif "interpol" in var_name: var_name = "interpol"; key="interpol"
    elif "kesehatan_dunia" in var_name: var_name = "who"; key="who"
    
    content += f'  {key}: {var_name}Members,\n'

# Regional Key mapping
for d in regional_orgs:
    key = d.split('_', 1)[1].lower().replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
    content += f'  {key}: {key}Members,\n'

content += "};\n"

with open(os.path.join(root_dir, "index.tsx"), 'w', encoding='utf-8') as f:
    f.write(content)

print("Generated index.tsx")
