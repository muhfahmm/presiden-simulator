import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

in_double = False
in_single = False
in_backtick = False

for i, char in enumerate(content):
    if char == '"' and not in_single and not in_backtick:
         in_double = not in_double
    elif char == "'" and not in_double and not in_backtick:
         in_single = not in_single
    elif char == '`' and not in_double and not in_single:
         in_backtick = not in_backtick

print(f"File end states: Double={in_double}, Single={in_single}, Backtick={in_backtick}")
