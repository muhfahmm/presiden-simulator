import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Match Kuwait block
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', text)
kuwait_content = match.group(1)

# 2. Match Terusan Suez coords
suez_match = re.search(r'    "Terusan Suez":\s*\{([\s\S]+?)\n    \}', kuwait_content)
suez_block = suez_match.group(1)

# Inside suez_block, coords list is:
new_coords = """        { lon: 47.98, lat: 29.37 },
        { lon: 49.50, lat: 28.30 },
        { lon: 51.00, lat: 27.20 },
        { lon: 52.50, lat: 26.30 },
        { lon: 54.00, lat: 25.50 },
        { lon: 55.20, lat: 25.80 },
        { lon: 55.80, lat: 26.30 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.90, lat: 26.10 },
        { lon: 57.50, lat: 25.50 },
        { lon: 58.20, lat: 24.90 },
        { lon: 59.00, lat: 24.10 },
        { lon: 59.80, lat: 23.00 },
        { lon: 60.40, lat: 22.00 },
        { lon: 60.60, lat: 21.00 },
        { lon: 58.50, lat: 16.50 },
        { lon: 55.00, lat: 13.00 },
        { lon: 50.00, lat: 11.80 },
        { lon: 45.00, lat: 12.00 },
        { lon: 43.40, lat: 12.40 },
        { lon: 42.95, lat: 14.80 },
        { lon: 41.00, lat: 15.00 },
        { lon: 38.00, lat: 20.00 },
        { lon: 34.00, lat: 27.50 },
        { lon: 32.53, lat: 29.93 }"""

# Replace coords: [...] in suez_block
fixed_block = re.sub(r'coords:\s*\[([\s\S]+?)\]', f'coords: [\n{new_coords}\n      ]', suez_block)

# Replace suez_block back to kuwait_content 
fixed_kuwait_content = kuwait_content.replace(suez_block, fixed_block)

# Replace kuwait_content back to text
new_text = text.replace(kuwait_content, fixed_kuwait_content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Kuwait -> Suez tail appended successfully.")
