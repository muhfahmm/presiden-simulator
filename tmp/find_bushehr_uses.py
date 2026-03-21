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
        
        for i, node in enumerate(nodes):
            lon = float(node[0])
            lat = float(node[1])
            if abs(lon - 50.84) < 0.1 and abs(lat - 28.97) < 0.1:
                found.append(f"Route: {orig_name} -> {dest_name} (Node index {i})")

with open(r"c:\fhm\EM4\tmp\all_bushehr_uses.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(found))

print("All uses written to file.")
