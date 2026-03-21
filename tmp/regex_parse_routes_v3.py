import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We can find all Origins by looking for 2-space indented keys or keys inside the root.
# But since formatting is weird, let's use a standard nested state parser that just looks for BRACES.

# We will just iterate line by line, but use `re.search` to find keys!
lines = content.split('\n')
routes_data = {}
current_origin = None
current_dest = None

for i, line in enumerate(lines):
    # Skip export statement and types at start
    if 'Coordinate' in line or 'InternationalRoute' in line:
         continue
         
    # Origin Pattern: matches `"Origin": {` or `}, "Origin": {` 
    # Usually Origin is the FIRST nested level key.
    # To be extremely safe, Origin keys in this file are strictly at 2-space relative indentation or after a `},`
    m_origin = re.search(r'(?:^  |},\s*)"([^"]+)":\s*\{', line)
    if m_origin:
        current_origin = m_origin.group(1)
        if current_origin not in routes_data:
            routes_data[current_origin] = {}
        # print(f"Found Origin: {current_origin} at line {i+1}")
        current_dest = None # Reset dest
        continue
        
    # Destination Pattern: matches `"Destination": {`
    # Typically 4-space indented level inside an Origin.
    m_dest = re.search(r'^    "([^"]+)":\s*\{', line)
    if m_dest:
        if current_origin:
             current_dest = m_dest.group(1)
             routes_data[current_origin][current_dest] = []
             # print(f"Found Dest: {current_dest} for {current_origin}")
        continue
        
    # Coordinate Pattern
    if current_origin and current_dest:
         if '{ lon:' in line:
             lon_match = re.search(r'lon:\s*([-+]?\d*\.?\d+)', line)
             lat_match = re.search(r'lat:\s*([-+]?\d*\.?\d+)', line)
             if lon_match and lat_match:
                  routes_data[current_origin][current_dest].append({
                      'lon': float(lon_match.group(1)),
                      'lat': float(lat_match.group(1))
                  })

with open(r"c:\fhm\EM4\tmp\parsed_routes_debug_v3.txt", 'w', encoding='utf-8') as f:
    if "Kuwait" in routes_data:
        f.write("Kuwait routes found:\n")
        f.write(f"Destinations: {list(routes_data['Kuwait'].keys())}\n")
        
        for dest, coords in routes_data["Kuwait"].items():
            f.write(f"\n--- {dest} ---\n")
            f.write(f"Coords Count: {len(coords)}\n")
            for c in coords:
                 f.write(f"  {c}\n")
    else:
        f.write(f"Kuwait not found. Available origins: {list(routes_data.keys())}\n")

print("Done. Saved results.")
