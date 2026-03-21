import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip comments
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
content = re.sub(r'\/\/.*', '', content)

# Strict match <tag and </tag>
pattern = re.compile(r'<(div|span|button|main|footer|h3)\b[^>]*>|<\/(div|span|button|main|footer|h3)>', re.IGNORECASE)
matches = pattern.finditer(content)

tag_stack = []

print("NON-CASCADING TAG STACK FAILURE REPORT:")
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
         
    if line_no < 316: 
         continue # Skip Left section
    if line_no > 700:
         break # Skip bottom items
         
    if is_close:
         if tag_stack:
              top = tag_stack[-1]
              if top == name:
                   tag_stack.pop()
              else:
                   print(f"[{line_no}] Mismatch: Closed </{name}> but expected </{top}>")
         else:
              print(f"[{line_no}] Extra closing tag: </{name}>")
    else:
         tag_stack.append(name)

print("\n--- UNCLOSED TAGS AT LINE 700 ---")
print(tag_stack)
