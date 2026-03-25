import os
import re

def migrate_country_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract values from sektor_peternakan
    peternakan_match = re.search(r'"sektor_peternakan":\s*\{([^}]+)\}', content)
    if not peternakan_match:
        return False

    peternakan_block = peternakan_match.group(1)
    
    udang_match = re.search(r'"udang_kerang":\s*([\d.]+)', peternakan_block)
    ikan_match = re.search(r'"ikan":\s*([\d.]+)', peternakan_block)
    
    if not udang_match or not ikan_match:
        return False

    udang_val = udang_match.group(1)
    ikan_val = ikan_match.group(1)

    # 2. Remove udang_kerang and ikan from sektor_peternakan
    # Also handle trailing commas
    new_peternakan_block = re.sub(r'\s*"udang_kerang":\s*[\d.]+,?', '', peternakan_block)
    new_peternakan_block = re.sub(r'\s*"ikan":\s*[\d.]+,?', '', new_peternakan_block).strip()
    
    # Clean up trailing commas specifically at the end of the block
    new_peternakan_block = re.sub(r',\s*$', '', new_peternakan_block)

    content = content.replace(peternakan_block, " " + new_peternakan_block + "\n  ")

    # 3. Add sektor_perikanan after sektor_agrikultur
    perikanan_str = f'\n  "sektor_perikanan": {{\n    "udang_kerang": {udang_val},\n    "ikan": {ikan_val}\n  }},'
    
    # Find the end of sektor_agrikultur
    agri_match = re.search(r'"sektor_agrikultur":\s*\{[^}]+\},', content)
    if agri_match:
        content = content.replace(agri_match.group(0), agri_match.group(0) + perikanan_str)
    else:
        # Fallback: after sektor_peternakan
        content = content.replace(f'"sektor_peternakan": {{ {new_peternakan_block}\n  }},', 
                                  f'"sektor_peternakan": {{ {new_peternakan_block}\n  }},' + perikanan_str)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

base_dir = r'c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries'
count = 0
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.ts') and file != '_index.ts':
            if migrate_country_file(os.path.join(root, file)):
                count += 1

print(f"Migrated {count} files.")
