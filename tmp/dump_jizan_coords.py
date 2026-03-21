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

jizan = get_coords(content, "Arab Saudi (Jizan)")
with open(r"c:\fhm\EM4\tmp\jizan_verify.txt", 'w') as f:
    for dest, coords in jizan.items():
        f.write(f"Jizan to {dest}:\n")
        f.write(f"  {coords[:6]}\n")
