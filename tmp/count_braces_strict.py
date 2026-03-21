import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

brace_count = 0
trace = []

for i, line in enumerate(lines):
    clean_line = line.split("//")[0] # strip comment
    
    for char in clean_line:
        if char == '{':
            brace_count += 1
            trace.append((i+1, '{', brace_count))
        elif char == '}':
            brace_count -= 1
            trace.append((i+1, '}', brace_count))

print("STRICT BRACE BALANCE TRACE:")
for item in trace[-20:]: # Print last 20 actions
    print(f"Line {item[0]}: {item[1]} -> Count: {item[2]}")

print(f"\nFinal net braces balance: {brace_count}")
