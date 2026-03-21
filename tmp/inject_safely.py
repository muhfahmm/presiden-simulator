import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# --- STEP 1: Parse Kuwait Coordinates ---
lines = content.split('\n')
routes_data = {}
current_origin = None
current_dest = None

for line in lines:
    if 'Coordinate' in line or 'InternationalRoute' in line:
         continue
         
    m_origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line)
    if m_origin:
        current_origin = m_origin.group(1)
        if current_origin not in routes_data:
            routes_data[current_origin] = {}
        current_dest = None
        continue
        
    m_dest = re.search(r'^    "([^"]+)":\s*\{', line)
    if m_dest:
        if current_origin:
             current_dest = m_dest.group(1)
             routes_data[current_origin][current_dest] = []
        continue
        
    if current_origin and current_dest:
         if '{ lon:' in line:
             lon_match = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
             lat_match = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
             if lon_match and lat_match:
                  routes_data[current_origin][current_dest].append({
                      'lon': float(lon_match.group(1)),
                      'lat': float(lat_match.group(1))
                  })

def format_route(coords):
    res = "      coords: [\n"
    for c in coords:
        res += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    res = res.rstrip(',\n') + "\n"
    res += "      ]\n"
    return res

# --- STEP 2: Generate TypeScript additions ---
output_ts = ""

if "Kuwait" in routes_data:
    output_ts += ',\n  "Bahrain": {\n'
    for dest, coords in routes_data["Kuwait"].items():
        if len(coords) > 2:
            # Connect at Kuwait Trunk Index 2
            sliced_coords = [{'lon': 50.58, 'lat': 26.22}] + coords[2:]
            output_ts += f'    "{dest}": {{\n'
            output_ts += '      color: "#f59e0b",\n'
            output_ts += format_route(sliced_coords)
            output_ts += '    },\n'
    output_ts = output_ts.rstrip(',\n') + '\n  }'

if "Kuwait" in routes_data:
    output_ts += ',\n  "Qatar": {\n'
    for dest, coords in routes_data["Kuwait"].items():
        if len(coords) > 3:
            # Connect at Kuwait Trunk Index 3
            sliced_coords = [{'lon': 51.53, 'lat': 25.28}] + coords[3:]
            output_ts += f'    "{dest}": {{\n'
            output_ts += '      color: "#f59e0b",\n'
            output_ts += format_route(sliced_coords)
            output_ts += '    },\n'
    output_ts = output_ts.rstrip(',\n') + '\n  }'

# Ensure trailing structure is safe
# We inject BEFORE the last `};`
idx = content.rfind('};')
if idx != -1:
    # Check if there is already a comma or if we need output_ts to adapt
    # Since output_ts starts with `,\n`, it perfectly separates from the PREVIOUS origin's closing brace `}`!
    new_content = content[:idx] + output_ts + '\n' + content[idx:]
    with open(file_path, 'w', encoding='utf-8') as f:
         f.write(new_content)
    print("Injection successful.")
else:
    print("Could not find closing `};`")
