import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Insert two </div> before "RIGHT SIDE PANELS" at row 313ish
target_index = 312 # 0-indexed is 312 (Row 313)
lines.insert(target_index, "        </div>\n        </div>\n")

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Inserted two divs at row 313.")
