import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)

found = []
for indent, orig_name, content in origins:
    items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
    for dest_name, dcontent in items:
        coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
        coords_str = coords_match.group(1) if coords_match else ""
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        
        # Check for any node in the East Asia area
        # Lon 120 to 140, Lat 22 to 36
        matches = []
        for i, n in enumerate(nodes):
            lon = float(n[0])
            lat = float(n[1])
            if 120.0 <= lon <= 140.0 and 22.0 <= lat <= 36.0:
                 matches.append(f"Index {i}: ({lon}, {lat})")
                 
        if matches:
             found.append(f"Route: {orig_name} -> {dest_name}")
             found.append(f"  Nodes in BOX: {', '.join(matches[:10])}")

if found:
    with open(r"c:\fhm\EM4\tmp\east_asia_dense.txt", 'w', encoding='utf-8') as f:
        f.write("\n".join(found))
    print(f"Routes found: {len(found)//2}")
else:
    print("No route found in East Asia box!")
