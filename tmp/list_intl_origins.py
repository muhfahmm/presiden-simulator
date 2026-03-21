import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

origins = []
destinations = {}

for line in lines:
    if line.startswith('  "') and '": {' in line:
        origin = line.split('"')[1]
        origins.append(origin)

print("Origins found:")
for o in origins:
    print(o)
