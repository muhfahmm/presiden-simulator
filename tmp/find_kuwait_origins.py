import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Find all origin subtrees
# "Origin": {
#   ...
# }
origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)

results = []
for indent, orig_name, content in origins:
    if '"Kuwait":' in content:
        # found Kuwait inside this origin
        match = re.search(r'"Kuwait":\s*\{([\s\S]+?)\n' + indent + '    \}', content)
        if match:
            c_content = match.group(1)
            coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', c_content)
            coords_str = coords_match.group(1) if coords_match else ""
            nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
            results.append(f"Origin: {orig_name} -> Destination: Kuwait")
            if nodes:
                results.append(f"  First Node: {nodes[0]}")
                if len(nodes) > 1:
                    results.append(f"  Second Node: {nodes[1]}")
                results.append(f"  Last Node: {nodes[-1]}")
                results.append(f"  Node count: {len(nodes)}")

with open(r"c:\fhm\EM4\tmp\kuwait_origins.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Origins written into file.")
