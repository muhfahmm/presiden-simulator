import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Restore Math.floor closures that end in percentage
# something</div>% -> something)}%
print("Replacing </div>% with )}%")
content = content.replace("</div>%", ")}%")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Restored percentage data closures successfully.")
