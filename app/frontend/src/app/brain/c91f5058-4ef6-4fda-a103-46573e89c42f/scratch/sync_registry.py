import os
import re

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def get_subdirs(parent):
    if not os.path.exists(parent): return []
    return sorted([d for d in os.listdir(parent) if os.path.isdir(os.path.join(parent, d))], key=lambda x: int(x.split('_')[0]) if '_' in x and x.split('_')[0].isdigit() else 999)

def to_filename(folder_name):
    m = re.search(r'\((.*?)\)', folder_name)
    if m:
        clean = m.group(1).replace(' ', '').replace('-', '').replace('_', '')
    else:
        raw = folder_name.split('_', 1)[1] if '_' in folder_name else folder_name
        clean = raw.replace(' ', '').replace('_', '').replace('(', '').replace(')', '').replace('-', '')
    return f"member{clean}"

# Manual ID Overrides for consistency with UI (OrgIntlModal.tsx)
ID_OVERRIDES = {
    "1_Dana_Moneter_Internasional_(IMF)": "imf",
    "2_Bank_Dunia": "world_bank",
    "3_Interpol": "interpol",
    "4_Organisasi_Kesehatan_Dunia_(WHO)": "who",
    "5_UNESCO": "unesco",
    "6_Organisasi_Perdagangan_Dunia_(WTO)": "wto",
    "7_Organisasi_Buruh_Internasional_(ILO)": "ilo",
    "8_Organisasi_Pangan_dan_Pertanian_(FAO)": "fao",
    "9_Organisasi_Penerbangan_Sipil_Internasional_(ICAO)": "icao",
    "10_Organisasi_Maritim_Internasional_(IMO)": "imo",
    "11_Organisasi_Telekomunikasi_Internasional_(ITU)": "itu",
    "12_Organisasi_Meteorologi_Dunia_(WMO)": "wmo",
    
    "1_ASEAN": "asean",
    "2_Uni_Eropa_(EU)": "eu",
    "3_Liga_Arab": "arab_league",
    "4_Uni_Afrika_(AU)": "au",
    "5_Organisasi_Kerja_Sama_Islam_(OKI)": "oic",
    "6_BRICS": "brics",
    "7_NATO": "nato",
    "8_OPEC": "opec",
    "9_G20": "g20",
    "10_APEC": "apec",
    "11_SCO": "sco",
    "12_OAS": "oas",
    "13_GCC": "gcc",
    "14_MERCOSUR": "mercosur",
    "15_Commonwealth": "commonwealth",
    "16_G7": "g7",
    "17_QUAD": "quad",
    "18_OECD": "oecd"
}

imports = []
mapping = []

def process_category(parent, cat_folder):
    for d in get_subdirs(parent):
        org_id = ID_OVERRIDES.get(d)
        if not org_id: continue # Skip if not in UI registry for now
        
        fname = to_filename(d)
        var_name = f"{org_id}_Members"
        imports.append(f'import {{ members as {var_name} }} from "./{cat_folder}/{d}/{fname}";')
        mapping.append(f'  {org_id}: {var_name},')

process_category(pbb_dir, "1_organisasi_PBB")
process_category(regional_dir, "2_organisasi_regional")

content = "\n".join(imports) + "\n\n"
content += "export const OrganizationMembers: Record<string, string[]> = {\n"
content += "\n".join(mapping) + "\n"
content += "};\n"

with open(os.path.join(root_dir, "index.tsx"), 'w', encoding='utf-8') as f:
    f.write(content)

print("Registry Synchronized Perfectly.")
