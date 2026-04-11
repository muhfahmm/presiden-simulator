import os
import re

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def to_id(folder_name):
    raw = folder_name.split('_', 1)[1] if '_' in folder_name else folder_name
    name = raw.lower()
    name = name.replace('(', '').replace(')', '').replace('-', '_').replace(' ', '_').replace('.', '').replace('__', '_')
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

def to_filename(folder_name):
    m = re.search(r'\((.*?)\)', folder_name)
    if m:
        clean = m.group(1).replace(' ', '').replace('-', '').replace('_', '')
    else:
        raw = folder_name.split('_', 1)[1] if '_' in folder_name else folder_name
        clean = raw.replace(' ', '').replace('_', '').replace('(', '').replace(')', '').replace('-', '')
    return f"member{clean}.ts"

def process(parent, category_name):
    imports = []
    mapping = []
    if not os.path.exists(parent): return imports, mapping
    for d in os.listdir(parent):
        path = os.path.join(parent, d)
        if os.path.isdir(path):
            old_file = os.path.join(path, "members.ts")
            new_fname = to_filename(d)
            new_file = os.path.join(path, new_fname)
            
            if os.path.exists(old_file):
                os.rename(old_file, new_file)
                print(f"Renamed: {old_file} -> {new_fname}")
            
            # Check if new file exists (already renamed or exists)
            if os.path.exists(new_file):
                id_name = to_id(d)
                var_name = f"{id_name}_Members"
                imports.append(f'import {{ members as {var_name} }} from "./{category_name}/{d}/{new_fname.replace(".ts", "")}";')
                mapping.append(f'  {id_name}: {var_name},')
    return imports, mapping

pbb_imports, pbb_mapping = process(pbb_dir, "1_organisasi_PBB")
reg_imports, reg_mapping = process(regional_dir, "2_organisasi_regional")

content = "\n".join(pbb_imports + reg_imports) + "\n\n"
content += "export const OrganizationMembers: Record<string, string[]> = {\n"
content += "\n".join(pbb_mapping + reg_mapping) + "\n"
content += "};\n"

with open(os.path.join(root_dir, "index.tsx"), 'w', encoding='utf-8') as f:
    f.write(content)

print("Batch Renaming and Registry Update Complete.")
