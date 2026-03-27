import os
import re

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if 'id:' in content
    if 'id:' in content:
        return

    # Find the objects
    # Handle both {name: and { id:
    pattern = r'(\{)\s*(name:)'
    
    count = 1
    def replace_func(match):
        nonlocal count
        res = f"{{ id: {count}, name:"
        count += 1
        return res

    new_content = re.sub(pattern, replace_func, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

base_dir = r"c:\fhm\EM\app\frontend\src\app\database\data\countries\relations"
processed_count = 0
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and file != "index.ts":
            process_file(os.path.join(root, file))
            processed_count += 1

print(f"Migration complete. Processed {processed_count} files.")
