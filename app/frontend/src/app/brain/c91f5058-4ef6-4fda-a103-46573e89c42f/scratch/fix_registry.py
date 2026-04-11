import os

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def get_actual_filename(dir_path):
    for f in os.listdir(dir_path):
        if f.startswith("member") and f.endswith(".ts"):
            return f.replace(".ts", "")
    return None

ID_OVERRIDES = {
    # PBB
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
    
    # Regional
    "1_Perhimpunan_Bangsa-Bangsa_Asia_Tenggara_(ASEAN)": "asean",
    "2_Uni_Eropa_(EU)": "eu",
    "3_Liga_Arab": "arab_league",
    "4_Uni_Afrika_(AU)": "au",
    "5_Organisasi_Kerja_Sama_Islam_(OKI)": "oic",
    "6_BRICS_(Brasil_Rusia_India_China_Afrika_Selatan)": "brics",
    "7_Pakta_Pertahanan_Atlantik_Utara_(NATO)": "nato",
    "8_Organisasi_Negara-Negara_Pengekspor_Minyak_Bumi_(OPEC)": "opec",
    "9_Kelompok_Duapuluh_(G20)": "g20",
    "10_Kerja_Sama_Ekonomi_Asia-Pasifik_(APEC)": "apec",
    "11_Organisasi_Kerja_Sama_Shanghai_(SCO)": "sco",
    "12_Organisasi_Negara-Negara_Amerika_(OAS)": "oas",
    "13_Dewan_Kerja_Sama_Teluk_(GCC)": "gcc",
    "14_Pasar_Umum_Selatan_(MERCOSUR)": "mercosur",
    "15_Persemakmuran_Bangsa-Bangsa_(Commonwealth)": "commonwealth",
    "16_Kelompok_Tujuh_(G7)": "g7",
    "17_Dialog_Keamanan_Kuadrilateral_(QUAD)": "quad",
    "18_Organisasi_Kerja_Sama_dan_Pembangunan_Ekonomi_(OECD)": "oecd"
}

imports = []
mapping = []

def process(parent, cat_folder):
    if not os.path.exists(parent): return
    for d in sorted(os.listdir(parent)):
        dir_path = os.path.join(parent, d)
        if os.path.isdir(dir_path):
            org_id = ID_OVERRIDES.get(d)
            if not org_id: continue
            
            fname = get_actual_filename(dir_path)
            if not fname: continue
            
            var_name = f"{org_id}_Members"
            imports.append(f'import {{ members as {var_name} }} from "./{cat_folder}/{d}/{fname}";')
            mapping.append(f'  {org_id}: {var_name},')

process(pbb_dir, "1_organisasi_PBB")
process(regional_dir, "2_organisasi_regional")

content = "\n".join(imports) + "\n\n"
content += "export const OrganizationMembers: Record<string, string[]> = {\n"
content += "\n".join(mapping) + "\n"
content += "};\n"

with open(os.path.join(root_dir, "index.tsx"), 'w', encoding='utf-8') as f:
    f.write(content)

print("Registry Fixed with Actual Filenames.")
