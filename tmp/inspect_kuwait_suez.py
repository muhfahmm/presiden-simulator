import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_coords(text, key):
    res = {}
    lines = text.splitlines()
    in_origin = False
    current_dest = None
    for line in lines:
        if re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line):
            origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line).group(1)
            in_origin = (origin == key)
            continue
        if in_origin:
            m = re.search(r'^    "([^"]+)":\s*\{', line)
            if m:
                current_dest = m.group(1)
                res[current_dest] = []
                continue
            if current_dest and '{ lon:' in line:
                m_lon = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
                m_lat = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
                if m_lon and m_lat:
                    res[current_dest].append((float(m_lon.group(1)), float(m_lat.group(1))))
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

kuwait = get_coords(content, "Kuwait")
with open(r"c:\fhm\EM4\tmp\verify_kuwait_suez.txt", 'w', encoding='utf-8') as f:
     f.write(f"Kuwait to Suez:\n")
     for c in kuwait.get('Terusan Suez', []):
          f.write(f"  {c}\n")

     f.write(f"\nKuwait to India:\n")
     for c in kuwait.get('India (Mumbai)', []):
          f.write(f"  {c}\n")
