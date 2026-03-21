import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

current_origin = None
results = []

for line in lines:
    if line.startswith('  "') and '": {' in line:
        current_origin = line.split('"')[1]
    elif line.startswith('    "') and '": {' in line:
        if current_origin and "coords" not in line and "color" not in line:
            dest = line.split('"')[1]
            results.append(f"{current_origin} -> {dest}")

with open(r"c:\fhm\EM4\tmp\regional_graph.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Graph dumped to file.")
