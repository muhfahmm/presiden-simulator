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
        if dest_name == "Kuwait":
            coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
            coords_str = coords_match.group(1) if coords_match else ""
            nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
            found.append(f"Origin: {orig_name} -> Kuwait")
            found.append(f"  Coords: {nodes}")

if found:
    with open(r"c:\fhm\EM4\tmp\kuwait_dest_dense.txt", 'w', encoding='utf-8') as f:
        f.write("\n".join(found))
    print(f"Kuwait Destination routes found: {len(found)//2}")
else:
    print("No route has Kuwait as Destination!")
