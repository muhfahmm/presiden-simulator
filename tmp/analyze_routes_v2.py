import re
import json

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

origin_pattern = re.compile(r'^  "([^"]+)":\s*\{', re.MULTILINE)
dest_pattern = re.compile(r'^    "([^"]+)":\s*\{', re.MULTILINE)

current_origin = None
current_dest = None
routes_data = {}

lines = content.split('\n')
for i, line in enumerate(lines):
    # Match origin
    m_origin = origin_pattern.match(line)
    if m_origin:
        current_origin = m_origin.group(1)
        routes_data[current_origin] = {}
        current_dest = None
        continue
        
    # Match destination
    m_dest = dest_pattern.match(line)
    if m_dest:
        if current_origin:
            current_dest = m_dest.group(1)
            routes_data[current_origin][current_dest] = []
        continue
        
    # Match coordinates line
    if current_origin and current_dest:
        if '{ lon:' in line:
            # Extract numbers
            # Match floats including negatives
            nums = re.findall(r'[-+]?\d*\.\d+|\d+', line)
            if len(nums) >= 2:
                # Assuming first is lon, second is lat
                # But let's check order in string
                # lon: X, lat: Y
                lon_val = None
                lat_val = None
                
                # Check with regex
                lon_match = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
                lat_match = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
                
                if lon_match and lat_match:
                    lon_val = float(lon_match.group(1))
                    lat_val = float(lat_match.group(1))
                    routes_data[current_origin][current_dest].append({
                        'lon': lon_val,
                        'lat': lat_val
                    })

results = []
for orig, dests in routes_data.items():
    for dest, coords in dests.items():
        if "Taiwan" in orig or "Taiwan" in dest:
            is_in_indo = False
            # Check coords
            for c in coords:
                lon = c['lon']
                lat = c['lat']
                # Indonesia coordinates
                if 95 <= lon <= 141 and -11 <= lat <= 6:
                    is_in_indo = True
                    break
            
            if "Taiwan" in orig:
                # Every route FROM Taiwan goes south through SCS
                # Let's include them if they pass into Indonesian box
                pass
                
            if is_in_indo:
                results.append({
                    'origin': orig,
                    'destination': dest,
                    'coords': coords
                })

with open(r"C:\fhm\EM4\tmp\routes_analysis.json", 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f"Analysis complete. Found {len(results)} routes.")
print("Saved to C:\\fhm\\EM4\\tmp\\routes_analysis.json")
