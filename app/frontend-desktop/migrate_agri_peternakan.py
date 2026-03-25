import os
import glob
import re

directory = "src/app/select-country/data/countries/**/*.ts"
files = glob.glob(directory, recursive=True)

peternakan_keys = ["ayam_unggas", "sapi_perah", "sapi_potong", "domba_kambing", "udang_kerang", "ikan"]
agrikultur_keys = ["padi", "gandum_jagung", "sayur_umbi", "kedelai", "kelapa_sawit", "kopi_teh_kakao"]

migrated_count = 0
for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    pattern = r'"sektor_agri_peternakan"\s*:\s*\{([^}]+)\}'
    match = re.search(pattern, content)
    if not match:
        continue
        
    block_content = match.group(1)
    
    kv_pattern = r'"?([a-zA-Z0-9_]+)"?\s*:\s*([0-9.]+)'
    kv_matches = re.finditer(kv_pattern, block_content)
    
    peternakan_lines = []
    agrikultur_lines = []
    
    for kv in kv_matches:
        key = kv.group(1)
        val = kv.group(2)
        line = f'    "{key}": {val}'
        if key in peternakan_keys:
            peternakan_lines.append(line)
        elif key in agrikultur_keys:
            agrikultur_lines.append(line)
            
    new_blocks = '"sektor_peternakan": {\n' + ',\n'.join(peternakan_lines) + '\n  },\n  "sektor_agrikultur": {\n' + ',\n'.join(agrikultur_lines) + '\n  }'
    
    new_content = content[:match.start()] + new_blocks + content[match.end():]
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    migrated_count += 1
        
print(f"Migrated {migrated_count} files.")
