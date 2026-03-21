import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip any trailing whitespace
content = content.rstrip()

# Remove very last '}' if it is on its own line or separate
if content.endswith("}"):
    content = content[:-1]
    
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed trailing brace } from end of file.")
