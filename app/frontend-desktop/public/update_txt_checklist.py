import json
import os

daftar_negara_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\daftar-menu\6.DAFTAR NEGARA.txt"
centers_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\country_centers.json"

with open(centers_path, 'r', encoding='utf-8') as f:
    centers = json.load(f)
countries_on_map = [c['name_id'].lower() for c in centers]

with open(daftar_negara_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if '. ' in line:
        parts = line.strip().split('. ', 1)
        number = parts[0]
        country = parts[1].strip()
        if country.startswith('[x] '):
            country = str(country).replace('[x] ', '', 1).strip()
        elif country.startswith('[ ] '):
            country = str(country).replace('[ ] ', '', 1).strip()
        c_lower = country.lower()
        
        on_map = False
        for m_name in countries_on_map:
            m_str = str(m_name)
            c_str = str(c_lower)
            if c_str == m_str or c_str in m_str or m_str in c_str:
                 on_map = True
                 break
                 
        if on_map:
            new_lines.append(f"{number}. [x] {country}\n")
        else:
            new_lines.append(f"{number}. [ ] {country}\n")
    else:
        new_lines.append(line)

with open(daftar_negara_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("6.DAFTAR NEGARA.txt successfully checklisted.")
