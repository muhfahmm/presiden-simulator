import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

in_kuwait = False
current_dest = None
results = []

# Get Kuwait origin line starts
for i, line in enumerate(lines):
    if '  "Kuwait": {' in line:
        in_kuwait = True
        results.append(f"Kuwait Origin start at line {i+1}")
    elif in_kuwait and line.startswith('  },'):
        results.append(f"Kuwait Origin end at line {i+1}")
        break
    elif in_kuwait:
        if line.startswith('    "') and '": {' in line:
            current_dest = line.split('"')[1]
            results.append(f"  Destination: {current_dest} (Line {i+1})")
        elif current_dest and "coords:" in line:
            results.append(f"    coords start: Line {i+1}")
        elif current_dest and "lon" in line:
            # list only first and first 2 nodes nodes
            pass

with open(r"c:\fhm\EM4\tmp\kuwait_live_dests.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Block limits saved to file.")
