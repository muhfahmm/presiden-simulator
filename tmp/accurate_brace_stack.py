import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"
out_path = r"c:\fhm\EM4\tmp\brace_stack_trace.txt"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip comments
content = re.sub(r'\{\/\*.*?\*\/\}', '', content, flags=re.DOTALL)
content = re.sub(r'\/\/.*', '', content)

stack = []
output = []

for i, char in enumerate(content):
    if char == '{':
         # Count lines up to current index
         line_no = content[:i].count('\n') + 1
         stack.append(line_no)
    elif char == '}':
         line_no = content[:i].count('\n') + 1
         if stack:
              stack.pop()
         else:
              output.append(f"[{line_no}] Extra closing brace: }}")

output.append("\n--- UNCLOSED BRACES AT END OF FILE ---")
for line in stack:
    output.append(f"Unclosed {{ opened at line {line}")

with open(out_path, 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print("Fixed Brace stack trace saved to brace_stack_trace.txt")
