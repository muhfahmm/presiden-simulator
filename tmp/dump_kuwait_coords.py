import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

in_kuwait = False
current_dest = None
results = []

for line in lines:
    if '  "Kuwait": {' in line:
        in_kuwait = True
        results.append("--- Kuwait Origin ---")
    elif in_kuwait and line.startswith('  },'):
        break # end of Kuwait
    elif in_kuwait:
        if line.startswith('    "') and '": {' in line:
            current_dest = line.split('"')[1]
            if current_dest not in ["coords", "color"]:
                results.append(f"\nDestination: {current_dest}")
        elif current_dest and "lon" in line:
            results.append(line.strip())

with open(r"c:\fhm\EM4\tmp\kuwait_coords.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Coordinates dumped.")
