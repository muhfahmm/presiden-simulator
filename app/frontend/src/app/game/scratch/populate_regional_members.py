import os

regional_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\2_organisasi_regional"

# Map of folder name to orgId and formal Name
org_map = {
    "10_APEC": ("apec", "APEC"),
    "11_SCO": ("sco", "SCO"),
    "12_OAS": ("oas", "OAS"),
    "13_GCC": ("gcc", "GCC"),
    "14_MERCOSUR": ("mercosur", "MERCOSUR"),
    "15_Commonwealth": ("commonwealth", "Commonwealth"),
    "16_G7": ("g7", "G7"),
    "17_QUAD": ("quad", "QUAD"),
    "18_OECD": ("oecd", "OECD"),
    "1_ASEAN": ("asean", "ASEAN"),
    "2_Uni_Eropa": ("eu", "Uni Eropa (EU)"),
    "3_Liga_Arab": ("arab_league", "Liga Arab"),
    "4_Uni_Afrika": ("au", "Uni Afrika (AU)"),
    "5_OKI": ("oic", "Organisasi Kerja Sama Islam (OKI)"),
    "6_BRICS": ("brics", "BRICS"),
    "7_NATO": ("nato", "NATO"),
    "8_OPEC": ("opec", "OPEC"),
    "9_G20": ("g20", "G20"),
}

template = """\"use client\"

import OrgMembersList from "../../OrgMembersList";

export default function Anggota{componentName}({{ searchQuery = "" }}: {{ searchQuery?: string }}) {{
  return (
    <OrgMembersList 
      orgId="{orgId}" 
      orgName="{orgName}" 
      searchQuery={{searchQuery}} 
      category="REGIONAL" 
    />
  );
}}
"""

for folder, (orgId, orgName) in org_map.items():
    folder_path = os.path.join(regional_dir, folder, "anggota")
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    
    file_path = os.path.join(folder_path, "index.tsx")
    
    component_name = folder.split('_')[-1].replace('(', '').replace(')', '')
    
    content = template.format(
        componentName=component_name,
        orgId=orgId,
        orgName=orgName
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created: {file_path}")
