import os
import re

pbb_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB"
config_import = 'import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";\n'

storage_files = [
    ("unWorldBankStorage.ts", "world_bank"),
    ("unIMFStorage.ts", "imf"),
    ("unInterpolStorage.ts", "interpol"),
    ("unWHOStorage.ts", "who"),
    ("unUNESCOStorage.ts", "unesco"),
    ("unWTOStorage.ts", "wto"),
    ("unILOStorage.ts", "ilo"),
    ("unFAOStorage.ts", "fao"),
    ("unICAOStorage.ts", "icao"),
    ("unIMOStorage.ts", "imo"),
    ("unITUStorage.ts", "itu"),
    ("unWMOStorage.ts", "wmo"),
]

for root, dirs, files in os.walk(pbb_dir):
    for file in files:
        for storage_file, org_id in storage_files:
            if file == storage_file:
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if config_import not in content:
                    # Add import at the top (after other imports)
                    lines = content.split('\n')
                    last_import = 0
                    for i, line in enumerate(lines):
                        if line.startswith('import'):
                            last_import = i
                    lines.insert(last_import + 1, config_import)
                    content = '\n'.join(lines)
                
                # Replace const cost = ... with const cost = getOrgFee(...)
                if org_id == "imf":
                    content = re.sub(r'const cost = Math\.floor\(currentCash \* 0\.0025\);', f'const cost = getOrgFee("{org_id}", currentCash);', content)
                else:
                    content = re.sub(r'const cost = \d+;', f'const cost = getOrgFee("{org_id}");', content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Refactored: {file_path}")
