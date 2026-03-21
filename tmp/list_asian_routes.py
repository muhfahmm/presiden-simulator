import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

current_origin = None

for line in lines:
    # Match root keys like:   "Singapore": {
    if line.startswith('  "') and '": {' in line:
        current_origin = line.split('"')[1]
    # Match destination keys like:     "Hainan": {
    elif line.startswith('    "') and '": {' in line:
        if current_origin and "coords" not in line and "color" not in line:
            dest = line.split('"')[1]
            print(f"{current_origin} -> {dest}")
