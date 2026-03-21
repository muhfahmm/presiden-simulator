import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def get_full_routes(text, key):
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
                    res[current_dest].append({'lon': float(m_lon.group(1)), 'lat': float(m_lat.group(1))})
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

kuwait = get_full_routes(content, "Kuwait")

def format_route(coords):
    res = "      coords: [\n"
    for c in coords:
        res += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    res = res.rstrip(',\n') + "\n"
    res += "      ]\n"
    return res

output_ts = ',\n  "Arab Saudi (Dammam)": {\n'

# Dammam Base Path
base_path = [
    {'lon': 50.15, 'lat': 26.50}, # Dammam Port
    {'lon': 52.50, 'lat': 26.30}  # Persian Gulf Trunk Merge Node
]

for dest, coords in kuwait.items():
    if dest == "Terusan Suez":
        continue # Pre-existing paths
        
    best_i = -1
    min_dist = 9999
    
    for i, c in enumerate(coords):
        dist = abs(c['lon'] - 52.50) + abs(c['lat'] - 26.30)
        if dist < min_dist:
             min_dist = dist
             best_i = i
             
    if best_i != -1:
        # Avoid including 52.5 twice if already in base_path
        sliced_kuwait = coords[best_i+1:] # Skip the 52.5 node itself from Kuwait list to avoid duplication
        
        final_coords = base_path + sliced_kuwait
        output_ts += f'    "{dest}": {{\n      color: "#f59e0b",\n{format_route(final_coords)}    }},\n'

output_ts = output_ts.rstrip(',\n') + '\n  }'

idx_end = content.rfind('};')
if idx_end != -1:
    new_content = content[:idx_end].rstrip(',\n ') + output_ts + '\n};\n'
    with open(file_path, 'w', encoding='utf-8') as f:
         f.write(new_content)
    print("Dammam routes to Asia injected correctly.")
else:
    print("Closing brace not found.")
