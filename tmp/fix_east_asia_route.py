import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Kuwait block
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', text)
kuwait_content = match.group(1)

# Find Jepang (Tokyo)
tokyo_match = re.search(r'    "Jepang \(Tokyo\)":\s*\{([\s\S]+?)\n    \}', kuwait_content)
tokyo_block = tokyo_match.group(1)

coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', tokyo_block)
coords_str = coords_match.group(1) if coords_match else ""
nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)

# Filter out index 47 which is 121.50, 31.20 
new_nodes = []
for i, n in enumerate(nodes):
    lon = float(n[0])
    if i == 47 and abs(lon - 121.50) < 0.1:
         print(f"Skipping isolated detour to: {n}")
         continue
    new_nodes.append(n)

new_coords_str = ",\n        ".join([f"{{ lon: {n[0]}, lat: {n[1]} }}" for n in new_nodes])

fixed_tokyo = re.sub(r'coords:\s*\[([\s\S]+?)\]', f'coords: [\n        {new_coords_str}\n      ]', tokyo_block)

fixed_content = kuwait_content.replace(tokyo_block, fixed_tokyo)
new_text = text.replace(kuwait_content, fixed_content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("East-Asia Tokyo route fixed successfully.")
