import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match ALL coordinate lists
coords_blocks = re.findall(r'coords:\s*\[([\s\S]+?)\]', text)

found = False
for i, block in enumerate(coords_blocks):
    nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', block)
    if len(nodes) >= 2:
        lon0 = float(nodes[0][0])
        lat0 = float(nodes[0][1])
        lon1 = float(nodes[1][0])
        lat1 = float(nodes[1][1])
        
        # Check if first node is Kuwait (47.98) and second node is around Strait of Hormuz (55.0 to 57.0)
        if 47.90 <= lon0 <= 48.10 and 55.0 <= lon1 <= 57.0:
            print(f"Match found in coord block index {i}!")
            print(f"  Node 0: {nodes[0]}")
            print(f"  Node 1: {nodes[1]}")
            found = True

if not found:
    print("No such direct jumps found.")
