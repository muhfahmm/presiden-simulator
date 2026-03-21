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
        
        has_bushehr = any(40.80 <= float(n[0]) <= 51.00 and 28.7 <= float(n[1]) <= 29.2 for n in nodes)
        has_node1 = any(49.4 <= float(n[0]) <= 49.6 and 28.2 <= float(n[1]) <= 28.4 for n in nodes)
        
        if has_bushehr and has_node1:
            found.append(f"Route: {orig_name} -> {dest_name}")

if found:
    print(f"Match found in: {', '.join(found)}")
else:
    print("No coordinate array contains BOTH Bushehr and Node 1!")
