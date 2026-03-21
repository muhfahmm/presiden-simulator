import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

tag_stack = []

print("RIGHT SECTION TAG TRACE [316 - 700]:")
for i in range(315, 700): # 0-indexed
    line = lines[i].split("//")[0]
    matches = re.findall(r'<(/?)(div|span|h3|button|footer|main)\b', line, re.IGNORECASE)
    
    for match in matches:
         is_close = match[0] == "/"
         name = match[1].lower()
         
         if not is_close and "/>" in line:
              if f"<{name}" in line and "/>" in line:
                   continue
                   
         if is_close:
              if tag_stack:
                   top = tag_stack[-1]
                   if top == name:
                        tag_stack.pop()
                   else:
                        print(f"[{i+1}] Mismatch: Closed </{name}> but expected </{top}>")
              else:
                   print(f"[{i+1}] Extra closing tag: </{name}>")
         else:
              tag_stack.append(name)
              print(f"[{i+1}] Open <{name}> | Stack: {tag_stack}")

print("\n--- REMAINING OPEN TAGS AT ROW 700 ---")
print(tag_stack)
