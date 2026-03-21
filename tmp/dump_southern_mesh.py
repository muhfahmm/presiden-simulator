import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = ["Bahrain", "Qatar"]
results = []

for orig in origins:
    # Match origin block
    match = re.search(r'  "' + re.escape(orig) + r'":\s*\{([\s\S]+?)\n  \},', text)
    if match:
        content = match.group(1)
        items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
        results.append(f"\n--- Origin: {orig} ---")
        for name, dcontent in items:
            coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
            coords_str = coords_match.group(1) if coords_match else ""
            nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
            if nodes:
                results.append(f"  Destination: {name}")
                results.append(f"    Coords: {nodes[:5]}")

with open(r"c:\fhm\EM4\tmp\southern_mesh_dump.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Southern mesh dump written to file.")
