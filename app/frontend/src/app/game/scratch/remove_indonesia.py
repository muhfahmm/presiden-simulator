import os

files = [
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\9_Organisasi_Penerbangan_Sipil_Internasional\unICAOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\8_Organisasi_Pangan_dan_Pertanian\unFAOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\7_Organisasi_Buruh_Internasional\unILOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\6_Organisasi_Perdagangan_Dunia\unWTOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\5_Organisasi_Pendidikan_Ilmu_Pengetahuan_dan_Kebudayaan_PBB\unUNESCOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\3_Interpol\unInterpolStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\4_Organisasi_Kesehatan_Dunia\unWHOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional\unIMFStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\12_Organisasi_Meteorologi_Dunia\unWMOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\11_Organisasi_Telekomunikasi_Internasional\unITUStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB\10_Organisasi_Maritim_Internasional\unIMOStorage.ts",
    r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\1_PBB\2_dewan_keamanan\storageKeamanan\dewan_keamanan\unSecurityCouncilStorage.ts"
]

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = content.replace('localStorage.getItem("selectedCountry") || "Indonesia"', 'localStorage.getItem("selectedCountry") || ""')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")
    else:
        print(f"Skipped (not found): {file_path}")
