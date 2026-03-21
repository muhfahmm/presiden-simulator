import re
import json

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I want to extract the structure: Origin -> Destination -> Coords
# A simple way is to find top level keys in the `internationalRoutes` object.
# Let's find matches for:
#   "Origin": {
#     "Destination": {
#       color: "...",
#       coords: [ ... ]
#     }
#   }

# We can find all lines starting with index 2 space and ending with `: {`
origins = []
origin_pattern = re.compile(r'^  "([^"]+)":\s*\{', re.MULTILINE)
dest_pattern = re.compile(r'^    "([^"]+)":\s*\{', re.MULTILINE)

# Let's split by origin to handle them safely.
# Wait, a safer way is to just walk through the lines.

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
        continue
        
    # Match destination
    m_dest = dest_pattern.match(line)
    if m_dest:
        if current_origin:
            current_dest = m_dest.group(1)
            routes_data[current_origin][current_dest] = []
        continue
        
    # Match coordinates line
    # { lon: 103.85, lat: 1.25 }
    if current_origin and current_dest:
        if '{ lon:' in line:
            # Extract numbers
            nums = re.findall(r'-?\d+\.\d+', line)
            if len(nums) >= 2:
                routes_data[current_origin][current_dest].append({
                    'lon': float(nums[0]),
                    'lat': float(nums[1])
                })

# Now filter for any route involving "Taiwan"
results = []
for orig, dests in routes_data.items():
    for dest, coords in dests.items():
        if "Taiwan" in orig or "Taiwan" in dest:
            # Check if any coord is in Indonesia
            # Indonesia general bounding box: Lon 95-141, Lat -11 to 6
            # We also want to include relevant passages.
            is_in_indo = False
            details = []
            for c in coords:
                lon = c['lon']
                lat = c['lat']
                # Check for Indonesian waters
                if 95 <= lon <= 141 and -11 <= lat <= 6:
                    is_in_indo = True
                    details.append(c)
            
            if is_in_indo:
                results.append({
                    'origin': orig,
                    'destination': dest,
                    'coords': coords
                })

print(json.dumps(results, indent=2))
