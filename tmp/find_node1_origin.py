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
        if len(nodes) >= 2:
            n_lon = float(nodes[1][0])
            n_lat = float(nodes[1][1])
            # Check for Node 1: lon=49.50
            if 49.40 <= n_lon <= 49.60:
                found.append(f"Origin: {orig_name} -> Destination: {dest_name} uses Node 1 @ index 1")

if found:
    with open(r"c:\fhm\EM4\tmp\node1_uses.txt", 'w', encoding='utf-8') as f:
        f.write("\n".join(found))
    print(f"Index 1 culprits found: {len(found)}")
else:
    print("No origins use Node 1 immediately after hub node.")
