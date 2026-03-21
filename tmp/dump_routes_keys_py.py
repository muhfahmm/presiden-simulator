import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match all 2-space indented string keys accurately
matches = re.findall(r'^\s{2}"([^"]+)":', text, re.MULTILINE)

# Remove duplicates with order preserved
seen = set()
clean = []
for m in matches:
    if m not in seen:
        seen.add(m)
        clean.append(m)

with open(r"c:\fhm\EM4\tmp\memory_keys.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(clean))

print(f"Keys found on text scan: {len(clean)}")
