import os

regional_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\2_organisasi_regional"

for root, dirs, files in os.walk(regional_dir):
    for file in files:
        if file == "index.tsx" and "anggota" in root:
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix import path: ../../OrgMembersList -> ../../../OrgMembersList
            new_content = content.replace('import OrgMembersList from "../../OrgMembersList";', 'import OrgMembersList from "../../../OrgMembersList";')
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed import in: {file_path}")
