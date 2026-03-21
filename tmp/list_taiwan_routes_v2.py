import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

origin_pattern = re.compile(r'^  "([^"]+)":\s*\{', re.MULTILINE)
dest_pattern = re.compile(r'^    "([^"]+)":\s*\{', re.MULTILINE)

current_origin = None
routes = {}

lines = content.split('\n')
for line in lines:
    m_origin = origin_pattern.match(line)
    if m_origin:
        current_origin = m_origin.group(1)
        routes[current_origin] = []
        continue
        
    m_dest = dest_pattern.match(line)
    if m_dest:
        if current_origin:
            routes[current_origin].append(m_dest.group(1))

output_lines = []
if "Taiwan" in routes:
    output_lines.append(f"Destinations from Taiwan ({len(routes['Taiwan'])}):")
    for dest in routes["Taiwan"]:
        output_lines.append(f"  - {dest}")
else:
    output_lines.append("Taiwan is not an origin in routes.ts")

origins_to_taiwan = []
for orig, dests in routes.items():
    if "Taiwan" in dests:
        origins_to_taiwan.append(orig)

output_lines.append(f"\nOrigins to Taiwan ({len(origins_to_taiwan)}):")
for orig in origins_to_taiwan:
    output_lines.append(f"  - {orig}")

# Write to file
with open(r"c:\fhm\EM4\tmp\taiwan_routes.txt", 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print("Saved to c:\\fhm\\EM4\\tmp\\taiwan_routes.txt")
