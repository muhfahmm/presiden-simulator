import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

for i, line in enumerate(lines):
    if "Iran" in line or "56.28" in line:
        print(f"Line {i+1}: {line.strip()}")
        
if not any("Iran" in line for line in lines):
    print("No Iran found in file lines!")
