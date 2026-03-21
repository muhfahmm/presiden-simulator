import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)

hubs = {
    "Bushehr": (50.84, 28.97),
    "Bahrain": (50.58, 26.22),
    "Qatar": (51.53, 25.28)
}

found = []
for indent, orig_name, content in origins:
    items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
    for dest_name, dcontent in items:
        coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
        coords_str = coords_match.group(1) if coords_match else ""
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        
        for i in range(len(nodes) - 1):
            n1_lon, n1_lat = float(nodes[i][0]), float(nodes[i][1])
            n2_lon, n2_lat = float(nodes[i+1][0]), float(nodes[i+1][1])
            
            p1_type = None
            p2_type = None
            for hname, hcoords in hubs.items():
                if abs(n1_lon - hcoords[0]) < 0.1 and abs(n1_lat - hcoords[1]) < 0.1:
                    p1_type = hname
                if abs(n2_lon - hcoords[0]) < 0.1 and abs(n2_lat - hcoords[1]) < 0.1:
                    p2_type = hname
                    
            if p1_type and p2_type and p1_type != p2_type:
                found.append(f"Route: {orig_name} -> {dest_name} connects {p1_type} and {p2_type} at index {i} -> {i+1}")

if found:
    print(f"Inter-hub connectors found: {', '.join(found)}")
else:
    print("No contiguous inter-hub connects inside any array in routes.ts!")
