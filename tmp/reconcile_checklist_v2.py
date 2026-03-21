import re

list_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"

# Standard 14 countries that start with A from current countries.ts
countries_allowed = [
    'afganistan', 'afrika selatan', 'albania', 'aljazair', 'amerika serikat', 
    'andorra', 'angola', 'antigua dan barbuda', 'arab saudi', 'argentina', 
    'armenia', 'australia', 'austria', 'azerbaijan'
]

with open(list_path, 'r', encoding='utf-8') as f:
    list_content = f.read()

lines = list_content.splitlines()
new_lines = []

for line in lines:
    m = re.match(r'^(\d+\.\s*\[)([^\]]*)(\]\s*)(.*)$', line)
    if m:
        prefix = m.group(1)
        suffix = m.group(3)
        country_name = m.group(4).strip().lower()
        
        if country_name in countries_allowed:
             new_lines.append(f"{m.group(1)}x{m.group(3)}{m.group(4)}")
        else:
             new_lines.append(f"{m.group(1)} {m.group(3)}{m.group(4)}")
    else:
        new_lines.append(line)

with open(list_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines) + '\n')

print("Checklist updated for remaining 14 A countries.")
