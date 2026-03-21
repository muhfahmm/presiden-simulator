import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

results = []
for i, line in enumerate(lines):
    if line.startswith('  "') and '": {' in line:
        results.append(f"Line {i+1}: {line.strip()}")

with open(r"c:\fhm\EM4\tmp\origins_lines.txt", 'w', encoding='utf-8') as f:
    f.write("\n".join(results))

print("Origins lines saved to file.")
