import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Define previous diverging snippet 
buggy_snippet = """        { lon: 76.50, lat: 5.50 },
        { lon: 78.50, lat: 4.90 },
        { lon: 79.86, lat: 6.92 }"""

# Fixed snippet lock-overs existing orange track
fixed_snippet = """        { lon: 76.50, lat: 5.50 },
        { lon: 77.80, lat: 5.80 },
        { lon: 79.00, lat: 6.60 },
        { lon: 79.86, lat: 6.92 }"""

if buggy_snippet not in text:
    print("Buggy divergent sequence snippet not found in exact form.")
    sys.exit(1)

text_fixed = text.replace(buggy_snippet, fixed_snippet)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text_fixed)

print("Exact match overlapping fix applied successfully.")
