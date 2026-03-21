import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_coords(text, key):
    res = {}
    lines = text.splitlines()
    in_origin = False
    in_dest = False
    current_dest = None
    
    for line in lines:
        if re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line):
            m = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line)
            origin = m.group(1)
            in_origin = (origin == key)
            continue
            
        if in_origin:
            m = re.search(r'^    "([^"]+)":\s*\{', line)
            if m:
                current_dest = m.group(1)
                res[current_dest] = []
                continue
                
            if current_dest and '{ lon:' in line:
                lon = float(re.search(r'lon:\s*([-+]?\d*\.?\d+)', line).group(1))
                lat = float(re.search(r'lat:\s*([-+]?\d*\.?\d+)', line).group(1))
                res[current_dest].append((lon, lat))
                
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

oman = get_coords(content, "Oman (Muscat)")
iran = get_coords(content, "Iran (Kanan)")

with open(r"c:\fhm\EM4\tmp\verify_join_oman_v4.py", 'w', encoding='utf-8') as f:
     f.write(f"Oman (M) to Suez (first 3): {oman.get('Terusan Suez', [])[:3]}\n")
     f.write(f"Oman (M) to India (first 3): {oman.get('India (Mumbai)', [])[:3]}\n")
     f.write(f"Iran (Kanan) to Suez (first 3): {iran.get('Terusan Suez', [])[:3]}\n")
     f.write(f"Iran (Kanan) to India (first 3): {iran.get('India (Mumbai)', [])[:3]}\n")
     f.write(f"Kuwait to Suez (indices 4..7): {get_coords(content, 'Kuwait').get('Terusan Suez', [])[4:8]}\n")
     f.write(f"Kuwait to Asia (indices 4..7): {get_coords(content, 'Kuwait').get('India (Mumbai)', [])[4:8]}\n")
