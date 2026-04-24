import re

file_path = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\OrgIntlModal.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Map of orgId to path
orgs = {
    "eu": "2_Uni_Eropa",
    "arab_league": "3_Liga_Arab",
    "au": "4_Uni_Afrika",
    "oic": "5_OKI",
    "brics": "6_BRICS",
    "nato": "7_NATO",
    "opec": "8_OPEC",
    "g20": "9_G20",
    "apec": "10_APEC",
    "sco": "11_SCO",
    "oas": "12_OAS",
    "gcc": "13_GCC",
    "mercosur": "14_MERCOSUR",
    "commonwealth": "15_Commonwealth",
    "g7": "16_G7",
    "quad": "17_QUAD",
    "oecd": "18_OECD",
}

new_imports = []
for org_id, folder in orgs.items():
    new_imports.append(f'  {org_id}: lazy(() => import("./2_organisasi_regional/{folder}/anggota")),')

new_imports_str = "\n".join(new_imports)

# Find the end of asean: lazy(...) line
pattern = r'(asean: lazy\(\(\) => import\("./2_organisasi_regional/1_ASEAN/anggota"\)\),)'
content = re.sub(pattern, r'\1\n' + new_imports_str, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated OrgIntlModal.tsx with regional member imports.")
