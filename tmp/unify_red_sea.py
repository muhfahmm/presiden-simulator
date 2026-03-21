import re
import json

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Global replacement of the old Red Sea trunk
old_trunk = """        { lon: 42.95, lat: 14.80 },
        { lon: 41.00, lat: 15.00 },
        { lon: 38.00, lat: 20.00 },
        { lon: 34.00, lat: 27.50 }"""

new_trunk = """        { lon: 42.95, lat: 14.80 },
        { lon: 42.53, lat: 16.88 },
        { lon: 39.18, lat: 21.48 },
        { lon: 37.98, lat: 23.95 },
        { lon: 34.00, lat: 27.50 }"""

content = content.replace(old_trunk, new_trunk)

# Let's also catch cases where formatting might be slightly off (spacing)
old_trunk_flat = [
    (42.95, 14.80),
    (41.00, 15.00),
    (38.00, 20.00),
    (34.00, 27.50)
]

# We need to re-generate the Saudi routes so they also use the new trunk points!
# Since I literally just appended them, I can strip them and rebuild.
# Find where Saudi Dammam starts, and slice it off.
idx_saudi = content.find('"Arab Saudi (Dammam)": {')
if idx_saudi != -1:
    # slice cleanly
    idx_end_kuwait = content.rfind('};', 0, idx_saudi)
    # Actually wait, Dammam is exactly preceded by ',\n  "Arab Saudi (Dammam)": {'
    idx_comma = content.rfind(',\n  "Arab Saudi (Dammam)": {')
    if idx_comma != -1:
        content = content[:idx_comma].rstrip(',\n ')
    else:
        content = content[:idx_saudi].rstrip(',\n ')
else:
    idx_end = content.rfind('};')
    content = content[:idx_end].rstrip(',\n ')

# Now rebuild Saudi routes with the unified nodes.
def get_coords(text, key):
    res = {}
    lines = text.splitlines()
    in_origin = False
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
                    res[current_dest].append({'lon': lon, 'lat': lat})
            if line.strip() == '},' and current_dest:
                 current_dest = None
    return res

kuwait = get_coords(content, "Kuwait")

def format_route(coords):
    res = "      coords: [\n"
    for c in coords:
        res += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    res = res.rstrip(',\n') + "\n"
    res += "      ]\n"
    return res

output_ts = ""

# 1. Dammam
output_ts += ',\n  "Arab Saudi (Dammam)": {\n'
for dest, coords in kuwait.items():
    if not coords: continue
    best_i = -1
    for i, c in enumerate(coords):
        if abs(c['lon'] - 52.50) < 0.1 and abs(c['lat'] - 26.30) < 0.1:
            best_i = i
            break
    if best_i != -1:
        sliced = [{'lon': 50.15, 'lat': 26.50}] + coords[best_i:]
        output_ts += f'    "{dest}": {{\n      color: "#f59e0b",\n{format_route(sliced)}    }},\n'
output_ts = output_ts.rstrip(',\n') + '\n  }'

# Common definitions for Red Sea coastal nodes (from North to South)
# Yanbu: 37.98, 23.95
# Jeddah: 39.18, 21.48
# Jizan: 42.53, 16.88

# 2. Yanbu
output_ts += ',\n  "Arab Saudi (Yanbu)": {\n'
yanbu_suez = [{'lon': 37.98, 'lat': 23.95}, {'lon': 34.00, 'lat': 27.50}, {'lon': 32.53, 'lat': 29.93}]
output_ts += f'    "Terusan Suez": {{\n      color: "#f59e0b",\n{format_route(yanbu_suez)}    }}\n  }}'

def build_red_sea_asia(start_point, intermediate_points):
    res = {}
    for dest, coords in kuwait.items():
        if dest == "Terusan Suez": continue
        k_idx = -1
        for i, c in enumerate(coords):
            if abs(c['lon'] - 72.85) < 0.1 and abs(c['lat'] - 19.00) < 0.1:
                k_idx = i
                break
        if k_idx != -1:
             base = [start_point] + intermediate_points 
             base += [
                 {'lon': 45.0, 'lat': 12.0},
                 {'lon': 50.0, 'lat': 12.0},
                 {'lon': 52.0, 'lat': 12.0},
                 {'lon': 60.0, 'lat': 13.0},
                 {'lon': 65.0, 'lat': 16.0}
             ]
             base += coords[k_idx:]
             res[dest] = base
    return res

# 3. Jeddah
# Suez: Jeddah -> Yanbu -> 34.0 -> Suez
jeddah_suez = [{'lon': 39.18, 'lat': 21.48}, {'lon': 37.98, 'lat': 23.95}, {'lon': 34.00, 'lat': 27.50}, {'lon': 32.53, 'lat': 29.93}]
# Asia: Jeddah -> Jizan -> 42.95 -> 43.40
jeddah_inter = [
    {'lon': 42.53, 'lat': 16.88},
    {'lon': 42.95, 'lat': 14.80},
    {'lon': 43.40, 'lat': 12.40}
]
jeddah_paths = build_red_sea_asia({'lon': 39.18, 'lat': 21.48}, jeddah_inter)
jeddah_paths["Terusan Suez"] = jeddah_suez

output_ts += ',\n  "Arab Saudi (Jeddah)": {\n'
for dest, coords in jeddah_paths.items():
    output_ts += f'    "{dest}": {{\n      color: "#f59e0b",\n{format_route(coords)}    }},\n'
output_ts = output_ts.rstrip(',\n') + '\n  }'

# 4. Jizan
# Suez: Jizan -> Jeddah -> Yanbu -> 34.0 -> Suez
jizan_suez = [
    {'lon': 42.53, 'lat': 16.88},
    {'lon': 39.18, 'lat': 21.48},
    {'lon': 37.98, 'lat': 23.95},
    {'lon': 34.00, 'lat': 27.50},
    {'lon': 32.53, 'lat': 29.93}
]
# Asia: Jizan -> 42.95 -> 43.40
jizan_inter = [
    {'lon': 42.95, 'lat': 14.80},
    {'lon': 43.40, 'lat': 12.40}
]
jizan_paths = build_red_sea_asia({'lon': 42.53, 'lat': 16.88}, jizan_inter)
jizan_paths["Terusan Suez"] = jizan_suez

output_ts += ',\n  "Arab Saudi (Jizan)": {\n'
for dest, coords in jizan_paths.items():
    output_ts += f'    "{dest}": {{\n      color: "#f59e0b",\n{format_route(coords)}    }},\n'
output_ts = output_ts.rstrip(',\n') + '\n  }'

new_content = content + output_ts + '\n};\n'

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Unified Red Sea routes injected successfully.")
