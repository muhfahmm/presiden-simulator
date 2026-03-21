import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)

results = []
for indent, orig_name, content in origins:
    items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
    for dest_name, dcontent in items:
        coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
        coords_str = coords_match.group(1) if coords_match else ""
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        
        for i in range(len(nodes) - 1):
            lon1 = float(nodes[i][0])
            lat1 = float(nodes[i][1])
            lon2 = float(nodes[i+1][0])
            lat2 = float(nodes[i+1][1])
            
            # Check jump from Hormuz (lon > 55) to Kuwait (lon < 49)
            if lon1 > 54.5 and lon2 < 49.0 and lat1 < 27.5 and lat2 > 28.0:
                results.append(f"Match found in Route: {orig_name} -> {dest_name} (Index {i} -> {i+1})")
                results.append(f"  Node {i}: lon={lon1}, lat={lat1}")
                results.append(f"  Node {i+1}: lon={lon2}, lat={lat2}")
            
            # Check jump from Kuwait to Hormuz
            if lon1 < 49.0 and lon2 > 54.5 and lat1 > 28.0 and lat2 < 27.5:
                results.append(f"Match found in Route: {orig_name} -> {dest_name} (Index {i} -> {i+1})")
                results.append(f"  Node {i}: lon={lon1}, lat={lat1}")
                results.append(f"  Node {i+1}: lon={lon2}, lat={lat2}")

with open(r"c:\fhm\EM4\tmp\gulf_jumps_all.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("All jumps written with file.")
