import os
import re

targets = ["maroko", "marshall", "mauritania", "mauritius", "meksiko", "mikronesia", "moldova", "monako", "mongolia", "montenegro"]

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

# 1. Delete .ts files
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts"):
            name_no_ext = os.path.splitext(file)[0]
            if name_no_ext in targets:
                filepath = os.path.join(root, file)
                print(f"Deleting file: {filepath}")
                try:
                    os.remove(filepath)
                except Exception as e:
                    print(f"Error deleting {filepath}: {e}")

# 2. Clean _index.ts in folders
for cont in ["asia", "afrika", "eropa", "na", "sa", "oceania"]:
    index_path = os.path.join(base_dir, cont, "_index.ts")
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        new_lines = []
        for line in lines:
             contains_target = False
             for t in targets:
                  if f'export {{ {t} }}' in line or f'./{t}' in line:
                       contains_target = True
                       break
             if not contains_target:
                  new_lines.append(line)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write("".join(new_lines))
        print(f"Cleaned {index_path}")

# 3. Clean main index.ts
main_index = os.path.join(base_dir, "index.ts")
if os.path.exists(main_index):
    with open(main_index, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def remove_import(m):
        vars_str = m.group(1)
        items = [x.strip() for x in vars_str.split(',')]
        cleaned = [x for x in items if x not in targets and x]
        if not cleaned:
             return ""
        return f'import {{ {", ".join(cleaned)} }} from {m.group(2)};'

    content = re.sub(r'import\s*\{\s*(.*?)\s*\}\s*from\s*(".*?");', remove_import, content)
    
    array_match = re.search(r'(export const countries: CountryData\[\]\s*=\s*\[)(.*?)(\s*\];)', content, re.DOTALL)
    if array_match:
        prefix = array_match.group(1)
        body = array_match.group(2)
        suffix = array_match.group(3)
        items = [x.strip() for x in body.split(',')]
        cleaned = [x for x in items if x not in targets and x]
        new_body = "\n  " + ",\n  ".join(cleaned) + ",\n"
        content = content.replace(array_match.group(0), f"{prefix}{new_body}{suffix}")

    with open(main_index, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Cleaned {main_index}")

print("Batch 8 cleanup finished.")
