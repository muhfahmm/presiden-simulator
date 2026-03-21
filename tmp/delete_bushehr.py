import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match the full Iran (Bushehr) block
#   "Iran (Bushehr)": {
#     ...
#   },
match = re.search(r'  "Iran \(Bushehr\)":\s*\{([\s\S]+?)\n  \},', text)
if match:
    # Full capture is the whole string includes header
    full_block = match.group(0)
    print("Found Bushehr block to remove.")
    # Replace with empty string
    new_text = text.replace(full_block, "")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Bushehr block Wiped successfully.")
else:
    print("Could not find Iran (Bushehr) block with standard regex!")
