import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

with open(r"c:\fhm\EM4\tmp\asian_routes_all.txt", 'w', encoding='utf-8') as f:
    f.write(text)

print("AsianRoutes written to file.")
