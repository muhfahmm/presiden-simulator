import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Tag stack of opened tags
tag_stack = [] # holds (tag_name, line_no)

lines = content.split("\n")

# Use regex to find all <tag and </tag>
# This avoids JS expressions as long as they don't look like tags
pattern = re.compile(r'<(/?)([a-zA-Z0-9_]+)', re.IGNORECASE)

current_line = 1
for i, line in enumerate(lines):
    # Strip comments
    line = line.split("//")[0]
    
    matches = pattern.findall(line)
    for match in matches:
         is_close = match[0] == "/"
         name = match[1]
         if name.lower() in ["button", "div", "span", "main", "footer", "header"]:
              if is_close:
                   if tag_stack:
                        top = tag_stack[-1][0]
                        if top == name:
                             tag_stack.pop()
                        else:
                             # Mismatch
                             print(f"[{i+1}] Mismatch: Closed </{name}> but expected </{top}>")
                   else:
                        print(f"[{i+1}] Extra closing tag: </{name}>")
              else:
                   # Check if it is self-closing like <div />
                   if f"<{name}" in line and "/>" in line:
                         # self closing tag, do nothing
                         pass
                   else:
                        tag_stack.append((name, i+1))

print("\n--- UNCLOSED TAGS ---")
for tag in tag_stack:
    print(f"Unclosed <{tag[0]}> opened at line {tag[1]}")
