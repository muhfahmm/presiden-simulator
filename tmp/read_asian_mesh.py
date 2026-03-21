import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

print("AsianRoutes.ts Content:")
print(text)
