import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

paren_stack = [] 
brace_stack = [] 

current_line = 1
for i, char in enumerate(content):
    if char == "\n":
         current_line += 1
         continue
         
    if char == '(':
         paren_stack.append(current_line)
    elif char == ')':
         if paren_stack:
              paren_stack.pop()

    elif char == '{':
         brace_stack.append(current_line)
    elif char == '}':
         if brace_stack:
              brace_stack.pop()

print("\n--- UNCLOSED ITEMS ---")
if paren_stack:
     print(f"Unclosed ( counts: {len(paren_stack)}")
     # Print unique lines
     uniq = sorted(list(set(paren_stack)))
     print("Lines that opened ( and never closed:", uniq[:20]) # First 20
else:
     print("All ( are balanced!")

if brace_stack:
     print(f"Unclosed {{ counts: {len(brace_stack)}")
     uniq_b = sorted(list(set(brace_stack)))
     print("Lines that opened {{ and never closed:", uniq_b[:20])
