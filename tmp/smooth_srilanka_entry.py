import sys

# Define replacement patterns for both directions

# Pattern 1: Colombo to Southbound (AsianRoutes.ts and after Colombo lists)
# From { lon: 79.86, lat: 6.92 } to { lon: 79.95, lat: 6.20 }
pattern1 = """        { lon: 79.86, lat: 6.92 },
        { lon: 79.95, lat: 6.20 }"""

replace1 = """        { lon: 79.86, lat: 6.92 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.95, lat: 6.20 }"""

# Pattern 2: Southbound to Colombo (Arrivals in routes.ts)
# From { lon: 79.95, lat: 6.20 } to { lon: 79.86, lat: 6.92 }
pattern2 = """        { lon: 79.95, lat: 6.20 },
        { lon: 79.86, lat: 6.92 }"""

replace2 = """        { lon: 79.95, lat: 6.20 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.86, lat: 6.92 }"""

filepath_asian = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"
filepath_intl = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath_asian, 'r', encoding='utf-8') as f:
    asian_text = f.read()

asian_text = asian_text.replace(pattern1, replace1)
asian_text = asian_text.replace(pattern2, replace2)

with open(filepath_asian, 'w', encoding='utf-8') as f:
    f.write(asian_text)

print("AsianRoutes.ts fixed.")

with open(filepath_intl, 'r', encoding='utf-8') as f:
    intl_text = f.read()

intl_text = intl_text.replace(pattern1, replace1)
intl_text = intl_text.replace(pattern2, replace2)

with open(filepath_intl, 'w', encoding='utf-8') as f:
    f.write(intl_text)

print("routes.ts fixed.")
