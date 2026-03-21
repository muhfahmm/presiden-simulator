import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_coords(text, origin_key, dest_key):
    lines = text.splitlines()
    in_origin = False
    in_dest = False
    coords = []
    for line in lines:
        if re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line):
            origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line).group(1)
            in_origin = (origin == origin_key)
            continue
        if in_origin:
            m = re.search(r'^    "([^"]+)":\s*\{', line)
            if m:
                current_dest = m.group(1)
                in_dest = (current_dest == dest_key)
                continue
            if in_dest and '{ lon:' in line:
                m_lon = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
                m_lat = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
                if m_lon and m_lat:
                    coords.append((float(m_lon.group(1)), float(m_lat.group(1))))
            if line.strip() == '},' and in_dest:
                 in_dest = False
    return coords

kuwait_suez = get_coords(content, "Kuwait", "Terusan Suez")
print(f"Kuwait to Suez Coords: {kuwait_suez}")
with open(r"c:\fhm\EM4\tmp\kuwait_coords.txt", 'w') as f:
    f.write(str(kuwait_suez))
