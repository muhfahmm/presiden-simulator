import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'a', encoding='utf-8') as f:
    f.write("\n}\n")

print("Appended brace } to end of file.")
