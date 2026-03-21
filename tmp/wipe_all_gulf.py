import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match the full Yemen (Hodeidah) up to end and just restore Yemen as the only footer.
if '  "Yemen (Hodeidah)": {' not in text:
    print("Could not find Yemen Hodeidah origin block.")
    sys.exit(1)

parts = text.split('  "Yemen (Hodeidah)": {')
head = parts[0]
tail = parts[1]

yemen_sub = tail.split('    }\n  }')
if len(yemen_sub) < 2:
    print("Could not find Yemen closing brackets.")
    sys.exit(1)

# file text with safe Yemen footer only (All appended hubs deleted at once!)
clean_body = head + '  "Yemen (Hodeidah)": {' + yemen_sub[0] + '    }\n  }\n'
final_text = clean_body.strip() + "\n};\n"

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(final_text)

print("All Gulf added hubs Wiped successfully.")
