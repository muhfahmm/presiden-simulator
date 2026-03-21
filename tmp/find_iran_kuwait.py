import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Find Iran Kiri Origin block
match = re.search(r'  "Iran \(Kiri\)":\s*\{([\s\S]+?)\n  \},', text)
if not match:
    print("Could not find Iran (Kiri) Origin block.")
    sys.exit(1)

content = match.group(1)

# List all destinations
items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', content)

for name, _ in items:
    print(f"Destination found: {name}")
    if name == "Kuwait":
        print("  --> BINGO found Kuwait!")
