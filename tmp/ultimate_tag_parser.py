import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"
out_path = r"c:\fhm\EM4\tmp\ultimate_tags.txt"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Strip JSX comments
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
# 2. Strip single line comments
content = re.sub(r'\/\/.*', '', content)
# 3. Strip backtick template strings to avoid interpolations interfering
content = re.sub(r'`[^`]*`', '``', content, flags=re.DOTALL)

# Find all <tags ... > and </tags>
# Let's match just "<tag_name " or "<tag_name>" and "</tag_name>"
tag_stack = []
output = []

# Regex to find any tag opening <NAME or closing </NAME
# It avoids reading props or text if we match the start of the tag carefully
matches = re.finditer(r'<(/?)([a-zA-Z0-9_]+)', content)

allowed_tags = ["div", "span", "button", "main", "footer", "header", "h3"]

for match in matches:
    is_close = match.group(1) == "/"
    name = match.group(2).lower()
    
    if name not in allowed_tags:
         continue
         
    # Find the tag end to check for self-closing />
    # Search from match start to see close >
    sub = content[match.start():content.find('>', match.start()) + 1]
    is_self_closing = sub.endswith("/>")
    
    line_no = content[:match.start()].count('\n') + 1
    
    if is_self_closing:
         continue
         
    if is_close:
         if tag_stack:
              top = tag_stack[-1][0]
              if top == name:
                   tag_stack.pop()
              else:
                   output.append(f"[{line_no}] Mismatch: Closed </{name}> but expected </{top}> opened at line {tag_stack[-1][1]}")
         else:
              output.append(f"[{line_no}] Extra closing tag: </{name}>")
    else:
         tag_stack.append((name, line_no))

output.append("\n--- UNCLOSED TAGS AT END OF FILE ---")
for tag in tag_stack:
    output.append(f"Unclosed <{tag[0]}> opened at line {tag[1]}")

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print("Ultimate tag trace saved to ultimate_tags.txt")
