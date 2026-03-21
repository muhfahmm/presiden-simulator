import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Destination sections: "Kuwait": {
# Wait, inside any origin:
# "Origin": {
#   "Kuwait": {
#     coords: [...]
#   }
# }

items = re.findall(r'(\s*)"Kuwait":\s*\{([\s\S]+?)\n\1\}', text)

for i, (indent, content) in enumerate(items):
    coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', content)
    coords_str = coords_match.group(1) if coords_match else ""
    nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
    print(f"\nMatch found for Kuwait Destination #{i+1}")
    if nodes:
        print(f"  First Node: {nodes[0]}")
        for j in range(1, min(4, len(nodes))):
            print(f"  Node {j}: {nodes[j]}")
        if len(nodes) > 4:
            print(f"  Last Node: {nodes[-1]}")
    else:
        print("  No coords found.")
