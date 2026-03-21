import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()

in_colombo = False
current_dest = None

for line in lines:
    if '  "Sri Lanka (Colombo)": {' in line:
        in_colombo = True
        print("--- Sri Lanka (Colombo) Origin ---")
    elif in_colombo and line.startswith('  },'):
        break # end of Colombo
    elif in_colombo:
        if line.startswith('    "') and '": {' in line:
            current_dest = line.split('"')[1]
            if current_dest not in ["coords", "color"]:
                print(f"Destination: {current_dest}")
        elif current_dest and "coords:" in line:
            pass # can extract coords if needed
