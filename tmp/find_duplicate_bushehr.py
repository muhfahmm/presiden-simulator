import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

count = 0
for i, line in enumerate(lines):
    if '"Iran (Bushehr)"' in line:
        print(f"Match found at line {i+1}: {line.strip()}")
        count += 1

print(f"Total occurrences of Iran (Bushehr): {count}")
if count == 0:
    print("None found!")
