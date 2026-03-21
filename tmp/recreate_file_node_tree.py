import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"
out_path = r"c:\fhm\EM4\tmp\layout_tree.txt"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'<(/?)([a-zA-Z0-9_]+)', re.IGNORECASE)

lines = content.split("\n")
indent = 0
tree = []

for i, line in enumerate(lines):
    # Skip JS expressions inside layouts that don't carry tags
    clean = line.split("//")[0]
    matches = pattern.findall(clean)
    
    for match in matches:
         is_close = match[0] == "/"
         name = match[1]
         if name.lower() in ["button", "div", "span", "main", "footer", "header", "h3"]:
              if is_close:
                   indent -= 1
                   tree.append("  " * indent + f"</{name}> (Line {i+1})")
              else:
                   if f"<{name}" in clean and "/>" in clean:
                        # self closing
                        tree.append("  " * indent + f"<{name} /> (Line {i+1})")
                   else:
                        tree.append("  " * indent + f"<{name}> (Line {i+1})")
                        indent += 1

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(tree))

print(f"Layout tree printed to layout_tree.txt ({len(tree)} tags)")
