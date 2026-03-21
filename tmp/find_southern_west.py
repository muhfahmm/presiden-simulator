import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = ["Bahrain", "Qatar"]
found = []

for orig in origins:
    # Match origin block
    match = re.search(r'  "' + re.escape(orig) + r'":\s*\{([\s\S]+?)\n  \},', text)
    if match:
        content = match.group(1)
        items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
        for dest_name, dcontent in items:
            coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
            coords_str = coords_match.group(1) if coords_match else ""
            nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
            if len(nodes) >= 2:
                n0_lon = float(nodes[0][0])
                n1_lon = float(nodes[1][0])
                # Check Westward hop (going towards lower longitude)
                if n1_lon < n0_lon:
                    found.append(f"Origin: {orig} -> Destination: {dest_name} hop {nodes[0]} -> {nodes[1]}")

if found:
    print(f"Westward hops found: {len(found)}")
    print("\n".join(found))
else:
    print("No Westward hops found from any Southern hub node 0.")
