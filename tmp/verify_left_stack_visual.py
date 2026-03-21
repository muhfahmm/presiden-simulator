import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"
out_path = r"c:\fhm\EM4\tmp\left_stack_nested.txt"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip comments
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
content = re.sub(r'\/\/.*', '', content)

# Strict match <tag and </tag>
pattern = re.compile(r'<(/?)(div|span|button|main|footer|header|h3)\b[^>]*>', re.IGNORECASE)
matches = pattern.finditer(content)

tag_stack = []
output = []
depth = 0

for match in matches:
    tag_str = match.group(0)
    line_no = content[:match.start()].count('\n') + 1
    
    is_close = tag_str.startswith("</")
    
    if is_close:
         name = tag_str[2:-1].strip().lower()
    else:
         if tag_str.endswith("/>"):
              continue # skip self closing
         name = tag_str[1:].split()[0].replace('>', '').lower()
         
    if line_no < 150: 
         continue # Skip top
    if line_no > 320:
         break # Skip Right
         
    if is_close:
         depth -= 1
         output.append(f"{'  ' * depth}[{line_no}] </{name}>")
         if tag_stack:
              tag_stack.pop()
    else:
         output.append(f"{'  ' * depth}[{line_no}] <{name}>")
         tag_stack.append(name)
         depth += 1

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print("Left stack trace saved to left_stack_nested.txt")
