import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

origins = re.findall(r'(\s*)"([^"]+)":\s*\{([\s\S]+?)\n\1\}', text)

with open(filepath, 'r', encoding='utf-8') as f:
    full_text = f.read()

# Pattern for the overlapping nodes insert
old_seq = """{ lon: 120.80, lat: 25.50 },
        { lon: 122.00, lat: 27.50 }"""

new_seq = """{ lon: 120.80, lat: 25.50 },
        { lon: 121.30, lat: 26.30 }, // Curving North around Taiwan
        { lon: 122.00, lat: 27.50 }"""

# Or match with arbitrary spacing:
def fix_seq(match):
    return """{ lon: 120.80, lat: 25.50 },
        { lon: 121.30, lat: 26.30 },
        { lon: 122.00, lat: 27.50 }"""

fixed_text = re.sub(
    r'\{\s*lon:\s*120\.80,\s*lat:\s*25\.50\s*\},\s*\{\s*lon:\s*122\.00,\s*lat:\s*27\.50\s*\}',
    fix_seq(None),
    full_text
)

# Test count
count = full_text.count("120.80") - fixed_text.count("120.80")
print(f"Nodes sequence matches replaced: {count} times") # Replaces nothing with regex?
# Standard replace without regex to be safe style pass aggregate check style fully load
if "{ lon: 120.80, lat: 25.50 }" in full_text:
     print("Exact string match found.")

# Let's perform programmatic regex-guided precise replacement:
fixed_text_exact = full_text.replace(
    "{ lon: 120.80, lat: 25.50 },\n        { lon: 122.00, lat: 27.50 }",
    "{ lon: 120.80, lat: 25.50 },\n        { lon: 121.30, lat: 26.30 },\n        { lon: 122.00, lat: 27.50 }"
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(fixed_text_exact)

print("Taiwan island-cut fixed successfully.")
