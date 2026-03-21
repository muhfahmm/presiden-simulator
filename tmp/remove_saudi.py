import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

target = '  "Arab Saudi (Dammam)": {'
idx = content.find(target)

if idx != -1:
    clean_content = content[:idx].rstrip(',\n ')
    clean_content += '\n  }\n};\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(clean_content)
    print("Saudi routes removed successfully.")
else:
    print("Saudi routes not found.")
