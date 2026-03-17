import json
import os

daftar_negara_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\daftar-menu\6.DAFTAR NEGARA.txt"
centers_path = r"c:\fhm\PROJECT - ANTIGRAVITY\GAME PRESIDEN\app\frontend-desktop\public\country_centers.json"
output_checklist_path = r"C:\Users\fahim\.gemini\antigravity\brain\1d14f05c-f696-4b08-ba79-3342ae8c4932\checklist_negara.md"

daftar = []
if os.path.exists(daftar_negara_path):
    with open(daftar_negara_path, 'r', encoding='utf-8') as f:
        for line in f:
            parts = line.strip().split('. ', 1)
            if len(parts) > 1:
                daftar.append(parts[1].strip())

centers = []
if os.path.exists(centers_path):
    with open(centers_path, 'r', encoding='utf-8') as f:
        centers = json.load(f)

countries_on_map = {c['name_id'].lower(): c for c in centers} or {}

with open(output_checklist_path, 'w', encoding='utf-8') as f:
    f.write("# Checklist Negara dalam Game\n\n")
    f.write("Berikut adalah daftar negara dari `/daftar-menu/6.DAFTAR NEGARA.txt` dan status keberadaannya di map visual:\n\n")
    
    missing_count = 0
    found_count = 0
    
    for country in daftar:
        c_lower = country.lower()
        on_map = False
        
        if c_lower in countries_on_map:
            on_map = True
        else:
            # fuzzy matching for overlapping translations (e.g., 'Amerika Serikat' vs 'Amerika')
            for m_name in countries_on_map.keys():
                if c_lower == m_name or c_lower in m_name or m_name in c_lower:
                    on_map = True
                    break
                    
        if on_map:
            f.write(f"- [x] {country.title()}\n")
            found_count += 1
        else:
            f.write(f"- [ ] **{country.title()}** _(Belum Terlihat)_\n")
            missing_count += 1
            
    f.write(f"\n## 📊 Ringkasan\n")
    f.write(f"- **Total Negara di List**: {len(daftar)}\n")
    f.write(f"- **Telah Ada di Map**: {found_count}\n")
    f.write(f"- **Belum Ada di Map**: {missing_count}\n")
    
print(f"Checklist generated: {output_checklist_path}")
print(f"Total: {len(daftar)}, Found: {found_count}, Missing: {missing_count}")
