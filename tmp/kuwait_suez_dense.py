import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Kuwait block
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', text)
kuwait_content = match.group(1)

# Find Terusan Suez
suez_match = re.search(r'    "Terusan Suez":\s*\{([\s\S]+?)\n    \}', kuwait_content)
coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', suez_match.group(1))
coords_str = coords_match.group(1) if coords_match else ""
nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)

results = []
for i, n in enumerate(nodes):
    results.append(f"{i}: {n}")

with open(r"c:\fhm\EM4\tmp\kuwait_suez_nodes.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Nodes dumped to file.")
