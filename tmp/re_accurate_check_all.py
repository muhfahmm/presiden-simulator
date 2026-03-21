import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"
out_path = r"c:\fhm\EM4\tmp\mismatch_tags_full.txt"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip comments
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
content = re.sub(r'\/\/.*', '', content)

# Strict match <tag and </tag>
pattern = re.compile(r'<(div|span|button|main|footer|header|h3)\b[^>]*>|<\/(div|span|button|main|footer|header|h3)>', re.IGNORECASE)
matches = pattern.finditer(content)

tag_stack = []
output = []

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
         
    if is_close:
         if tag_stack:
              top = tag_stack[-1][0]
              if top == name:
                   tag_stack.pop()
              else:
                   output.append(f"[{line_no}] Mismatch: Closed </{name}> but expected </{top}> opened at line {tag_stack[-1][1]}")
                   # To avoid cascading, we can either leave it on stack or pop it
         else:
              output.append(f"[{line_no}] Extra closing tag: </{name}>")
    else:
         tag_stack.append((name, line_no))

output.append("\n--- UNCLOSED TAGS AT END OF FILE ---")
for tag in tag_stack:
    output.append(f"Unclosed <{tag[0]}> opened at line {tag[1]}")

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print("Full tag trace saved to mismatch_tags_full.txt")
