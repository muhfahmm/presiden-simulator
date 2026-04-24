import os
import re

regional_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\2_organisasi_regional"
config_import = 'import { getOrgFee } from "@/app/game/logic/geopolitik/GeopoliticalConfig";\n'

for root, dirs, files in os.walk(regional_dir):
    for file in files:
        if file == "index.tsx":
            file_path = os.path.join(root, file)
            # Skip the main RegionalJoinOrgButton or other logic files if any
            if "logic" in root: continue
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find orgId from the file content or folder name
            # Usually it's like orgId="asean"
            match = re.search(r'orgId="([^"]+)"', content)
            if match:
                org_id = match.group(1)
                
                if config_import not in content:
                    lines = content.split('\n')
                    last_import = 0
                    for i, line in enumerate(lines):
                        if line.startswith('import'):
                            last_import = i
                    lines.insert(last_import + 1, config_import)
                    content = '\n'.join(lines)
                
                # Replace membershipFee={...} with membershipFee={getOrgFee("...")}
                content = re.sub(r'membershipFee={\d+}', f'membershipFee={{getOrgFee("{org_id}")}}', content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Refactored Regional: {file_path}")
