import re

list_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"
summary_path = r"c:\fhm\EM4\tmp\country_list_summary.txt"

# 1. Load 46 countries from summary. Avoid space variations.
with open(summary_path, 'r', encoding='utf-8') as f:
    countries_loaded = [line.strip().replace('- ', '').lower() for line in f if line.strip()]

with open(list_path, 'r', encoding='utf-8') as f:
    list_content = f.read()

lines = list_content.splitlines()
new_lines = []

for line in lines:
    # Match pattern: "1. [ ] name" or "1. [x] name"
    m = re.match(r'^(\d+\.\s*\[)([^\]]*)(\]\s*)(.*)$', line)
    if m:
        prefix = m.group(1)
        # current_check = m.group(2)
        suffix = m.group(3)
        country_name = m.group(4).strip().lower()
        
        # Check if present in loaded list
        if country_name in countries_loaded:
             new_lines.append(f"{m.group(1)}x{m.group(3)}{m.group(4)}")
        else:
             new_lines.append(f"{m.group(1)} {m.group(3)}{m.group(4)}")
    else:
        new_lines.append(line)

with open(list_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines) + '\n')

print("Checklist updated.")
