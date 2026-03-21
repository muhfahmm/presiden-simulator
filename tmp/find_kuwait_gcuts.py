import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Kuwait block
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', text)
if not match:
    print("Could not find Kuwait origin block.")
    sys.exit(1)

kuwait_content = match.group(1)

# Extract all destinations
items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', kuwait_content)

results = []
for name, content in items:
    coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', content)
    coords_str = coords_match.group(1) if coords_match else ""
    nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
    
    inside_gulf = []
    for lon, lat in nodes:
        if float(lon) < 58.0:
            inside_gulf.append(lon)
            
    results.append(f"Destination: {name} - Nodes inside Gulf: {len(inside_gulf)}")
    if len(inside_gulf) <= 2:
        results.append(f"  --> POTENTIAL STRAIGHT CUT FOUND: {name}")
        for n in nodes[:5]:
            results.append(f"    {n}")

with open(r"c:\fhm\EM4\tmp\kuwait_gcuts.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Coordinates dumped to file.")
