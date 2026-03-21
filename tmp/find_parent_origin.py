import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

target_line = 1242

print(f"Checking ancestor of line {target_line}")

# Go upwards
for i in range(target_line - 1, -1, -1):
    line = lines[i]
    if line.startswith('  "') and '": {' in line:
        print(f"Parent Origin Key found at line {i+1}: {line.strip()}")
        break

# Also check around line 1100 to 1250 just to print everything with 2-spaces indent
results = []
for i in range(1100, min(1300, len(lines))):
    if lines[i].startswith('  "') and '": {' in lines[i]:
        results.append(f"Line {i+1}: {lines[i].strip()}")

print("\nAll 2-space origins around line 1100-1300:")
print("\n".join(results))
