import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

open_p = 0
close_p = 0
open_b = 0
close_b = 0

for i, char in enumerate(content):
    if char == '(': open_p += 1
    elif char == ')': close_p += 1
    elif char == '{': open_b += 1
    elif char == '}': close_b += 1

print(f"Total Parentheses: Open={open_p}, Close={close_p}, Diff={open_p - close_p}")
print(f"Total Braces: Open={open_b}, Close={close_b}, Diff={open_b - close_b}")

# Find WHERE they diverge
open_p = 0
close_p = 0
lines = content.split("\n")
for i, line in enumerate(lines):
    open_p += line.count("(")
    close_p += line.count(")")
    if open_p < close_p:
        print(f"Line {i+1} has NEGATIVE parens balance!")
        open_p = close_p # reset
    elif open_p > close_p and "map" not in line and "=>" not in line:
        # print(f"Line {i+1} has open parens: {line.strip()}")
        pass

print("Finished scan.")
