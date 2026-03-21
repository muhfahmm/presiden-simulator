import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Find Iran Kiri Origin block
match = re.search(r'  "Iran \(Kiri\)":\s*\{([\s\S]+?)\n  \},', text)
if not match:
    print("Could not find Iran (Kiri) Origin block.")
    sys.exit(1)

content = match.group(1)

# List all destinations
items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)

for name, dcontent in items:
    coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
    coords_str = coords_match.group(1) if coords_match else ""
    nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
    if len(nodes) >= 2:
        lon1 = float(nodes[1][0])
        if 47.90 <= lon1 <= 48.10: # Kuwait
            print(f"BROKEN DESTINATION DETECTED under Iran (Kiri): {name}")
            print(f"  First Node: {nodes[0]}")
            print(f"  Second Node: {nodes[1]}")
