import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip any JSX comment blocks {/* text */}
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
# Strip JS comments //
content = re.sub(r'\/\/.*', '', content)

# Find all <tag... > and </tag>
# Match < followed by any char except > ending with >
pattern = re.compile(r'<([^>]+)>')
matches = pattern.findall(content)

tag_stack = []
allowed_tags = ["div", "span", "main", "footer", "header", "h3", "button"]

print("ACCURATE TAG STACK TRACE:")
for i, match in enumerate(matches):
    clean_match = match.strip()
    is_close = clean_match.startswith("/")
    
    if is_close:
         name = clean_match[1:].split()[0].lower()
         if name in allowed_tags:
              if tag_stack:
                   top = tag_stack[-1]
                   if top == name:
                        tag_stack.pop()
                   else:
                        print(f"Mismatch: Found </{name}> but expected </{top}>")
                        tag_stack.append(name) # push error buffer to avoid cascading
              else:
                   print(f"Extra closing tag: </{name}>")
    else:
         if clean_match.endswith("/"):
              # self closing, ignore
              continue
         name = clean_match.split()[0].lower()
         if name in allowed_tags:
              tag_stack.append(name)

print("\n--- REMAINING OPEN TAGS ON STACK ---")
print(tag_stack)
