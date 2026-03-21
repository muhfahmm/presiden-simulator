import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Strip mistake backtick Added in previous script
content = content.replace(".toString()}`", ".toString()}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed mistake backticks successfully.")
