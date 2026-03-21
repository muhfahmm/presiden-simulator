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
        m = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line)
        if m:
            origin = m.group(1)
            in_origin = (origin == key)
            continue
            
        if in_origin:
            m_dest = re.search(r'^    "([^"]+)":\s*\{', line)
            if m_dest:
                current_dest = m_dest.group(1)
                res[current_dest] = []
                continue
                
            if current_dest and '{ lon:' in line:
                m_lon = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
                m_lat = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
                if m_lon and m_lat:
                    lon = float(m_lon.group(1))
                    lat = float(m_lat.group(1))
                    res[current_dest].append((lon, lat))
                
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

yemen_aden = get_coords(content, "Yemen (Aden)")

with open(r"c:\fhm\EM4\tmp\verify_red_sea.py", 'w', encoding='utf-8') as f:
     f.write(f"Yemen (Aden) connections:\n")
     for k, v in yemen_aden.items():
          f.write(f"  {k}: {v[:3]}\n")

# Also let's check Oman (Salalah)
oman_s = get_coords(content, "Oman (Salalah)")
with open(r"c:\fhm\EM4\tmp\verify_red_sea.py", 'a', encoding='utf-8') as f:
     f.write(f"\nOman (Salalah) connections:\n")
     for k, v in oman_s.items():
          f.write(f"  {k}: {v[:3]}\n")
