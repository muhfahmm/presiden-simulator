import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Define the sequence to eliminate coordinate stepback 
buggy_snippet = """        { lon: 78.50, lat: 4.90 },
        { lon: 79.95, lat: 6.20 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.86, lat: 6.92 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.95, lat: 6.20 },
        { lon: 80.20, lat: 5.70 }"""

# Fixed sequence goes directly to Colombo then leaves safe
fixed_snippet = """        { lon: 78.50, lat: 4.90 },
        { lon: 79.86, lat: 6.92 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.95, lat: 6.20 },
        { lon: 80.20, lat: 5.70 }"""

if buggy_snippet not in text:
    print("Buggy arrow sequence snippet not found in exact form.")
    sys.exit(1)

text_fixed = text.replace(buggy_snippet, fixed_snippet)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text_fixed)

print("One-way visual loop fix applied successfully.")
