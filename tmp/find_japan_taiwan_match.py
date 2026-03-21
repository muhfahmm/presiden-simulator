import sys
import re

filepaths = [
    r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts",
    r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"
]

results = []

for filepath in filepaths:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)
    
    for indent, orig_name, content in origins:
        items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)
        for dest_name, dcontent in items:
            coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', dcontent)
            coords_str = coords_match.group(1) if coords_match else ""
            nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
            
            has_taiwan = any(121.0 <= float(n[0]) <= 122.0 and 24.5 <= float(n[1]) <= 25.5 for n in nodes)
            has_japan = any(139.0 <= float(n[0]) <= 140.0 and 35.0 <= float(n[1]) <= 36.0 for n in nodes)
            
            if has_taiwan and has_japan:
                results.append(f"File: {filepath} -> Route: {orig_name} -> {dest_name}")

if results:
    with open(r"c:\fhm\EM4\tmp\japan_taiwan_dense.txt", 'w', encoding='utf-8') as f:
        f.write("\n".join(results))
    print(f"Routes found: {len(results)}")
else:
    print("No route contains both Japan and Taiwan coordinates!")
