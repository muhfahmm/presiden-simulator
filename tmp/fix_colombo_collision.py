import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Define the buggy and fixed strings starting from the relevant node
# Inside Bangladesh or Myanmar, coords had:
buggy_snippet = """        { lon: 78.50, lat: 4.90 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 79.86, lat: 6.92 }"""

fixed_snippet = """        { lon: 78.50, lat: 4.90 },
        { lon: 79.95, lat: 6.20 },
        { lon: 79.86, lat: 6.92 }"""

if buggy_snippet not in text:
    print("Buggy coordinates not found in exact form.")
    sys.exit(1)

text_fixed = text.replace(buggy_snippet, fixed_snippet)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text_fixed)

print("Colombo collision fix applied successfully.")
