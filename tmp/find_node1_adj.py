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
        
        for i in range(len(nodes)):
            lon = float(nodes[i][0])
            if 49.4 <= lon <= 49.6: # Around 49.50 (Node 1)
                # print before and after
                before = nodes[i-1] if i > 0 else "START"
                after = nodes[i+1] if i < len(nodes) - 1 else "END"
                found.append(f"Route: {orig_name} -> {dest_name} (Node 1 at index {i})")
                found.append(f"  Before: {before}")
                found.append(f"  After: {after}")

if found:
    with open(r"c:\fhm\EM4\tmp\node1_adjacency.txt", 'w', encoding='utf-8') as f:
        f.write("\n".join(found))
    print(f"Adjacency cases found: {len(found)//3}")
else:
    print("No uses of Node 1 in any array!")
