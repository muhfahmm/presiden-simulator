import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Taiwan origin
match = re.search(r'  "Taiwan":\s*\{([\s\S]+?)\n  \},', text)
if match:
    content = match.group(1)
    items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
    for name, dcontent in items:
        coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
        coords_str = coords_match.group(1) if coords_match else ""
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        print(f"Taiwan -> {name} Coords:")
        for i, n in enumerate(nodes):
            print(f"  {i}: {n}")
else:
    print("Could not find Taiwan origin block.")
