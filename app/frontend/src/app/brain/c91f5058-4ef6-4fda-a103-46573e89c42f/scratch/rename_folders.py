import os
import shutil
import re

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

RENAME_MAP = {
    "1_ASEAN": "1_Perhimpunan_Bangsa-Bangsa_Asia_Tenggara_(ASEAN)",
    "6_BRICS": "6_BRICS_(Brasil_Rusia_India_China_Afrika_Selatan)",
    "7_NATO": "7_Pakta_Pertahanan_Atlantik_Utara_(NATO)",
    "8_OPEC": "8_Organisasi_Negara-Negara_Pengekspor_Minyak_Bumi_(OPEC)",
    "9_G20": "9_Kelompok_Duapuluh_(G20)",
    "10_APEC": "10_Kerja_Sama_Ekonomi_Asia-Pasifik_(APEC)",
    "11_SCO": "11_Organisasi_Kerja_Sama_Shanghai_(SCO)",
    "12_OAS": "12_Organisasi_Negara-Negara_Amerika_(OAS)",
    "13_GCC": "13_Dewan_Kerja_Sama_Teluk_(GCC)",
    "14_MERCOSUR": "14_Pasar_Umum_Selatan_(MERCOSUR)",
    "15_Commonwealth": "15_Persemakmuran_Bangsa-Bangsa_(Commonwealth)",
    "16_G7": "16_Kelompok_Tujuh_(G7)",
    "17_QUAD": "17_Dialog_Keamanan_Kuadrilateral_(QUAD)",
    "18_OECD": "18_Organisasi_Kerja_Sama_dan_Pembangunan_Ekonomi_(OECD)"
}

# 1. Rename Folders
for old_name, new_name in RENAME_MAP.items():
    old_path = os.path.join(regional_dir, old_name)
    new_path = os.path.join(regional_dir, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed folder: {old_name} -> {new_name}")

# IDs for UI consistency (from previous successful sync)
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
    
    "1_Perhimpunan_Bangsa-Bangsa_Asia_Tenggara_(ASEAN)": "asean",
    "1_ASEAN": "asean", # fallback
    "2_Uni_Eropa_(EU)": "eu",
    "3_Liga_Arab": "arab_league",
    "4_Uni_Afrika_(AU)": "au",
    "5_Organisasi_Kerja_Sama_Islam_(OKI)": "oic",
    "6_BRICS_(Brasil_Rusia_India_China_Afrika_Selatan)": "brics",
    "6_BRICS": "brics",
    "7_Pakta_Pertahanan_Atlantik_Utara_(NATO)": "nato",
    "7_NATO": "nato",
    "8_Organisasi_Negara-Negara_Pengekspor_Minyak_Bumi_(OPEC)": "opec",
    "8_OPEC": "opec",
    "9_Kelompok_Duapuluh_(G20)": "g20",
    "9_G20": "g20",
    "10_Kerja_Sama_Ekonomi_Asia-Pasifik_(APEC)": "apec",
    "10_APEC": "apec",
    "11_Organisasi_Kerja_Sama_Shanghai_(SCO)": "sco",
    "11_SCO": "sco",
    "12_Organisasi_Negara-Negara_Amerika_(OAS)": "oas",
    "12_OAS": "oas",
    "13_Dewan_Kerja_Sama_Teluk_(GCC)": "gcc",
    "13_GCC": "gcc",
    "14_Pasar_Umum_Selatan_(MERCOSUR)": "mercosur",
    "14_MERCOSUR": "mercosur",
    "15_Persemakmuran_Bangsa-Bangsa_(Commonwealth)": "commonwealth",
    "15_Commonwealth": "commonwealth",
    "16_Kelompok_Tujuh_(G7)": "g7",
    "16_G7": "g7",
    "17_Dialog_Keamanan_Kuadrilateral_(QUAD)": "quad",
    "17_QUAD": "quad",
    "18_Organisasi_Kerja_Sama_dan_Pembangunan_Ekonomi_(OECD)": "oecd",
    "18_OECD": "oecd"
}

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

imports = []
mapping = []

# Regenerate index.tsx
def process_category(parent, cat_folder):
    for d in get_subdirs(parent):
        org_id = ID_OVERRIDES.get(d)
        if not org_id: continue
        
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

print("Batch Folder Rename and Registry Update Complete.")
