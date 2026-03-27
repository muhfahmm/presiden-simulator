import os
import re

def process_file(file_path):
    print(f"Processing: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if 'id:' in content
    if 'id:' in content:
        print(f"Skipping {file_path} (already has id)")
        return

    # Find the objects
    pattern = r'(\{)\s*(name:)'
    # We want to insert 'id: n, ' before 'name:'
    
    count = 1
    def replace_func(match):
        nonlocal count
        res = f"{{ id: {count}, name:"
        count += 1
        return res

    new_content = re.sub(pattern, replace_func, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Test on one file
test_file = r"c:\fhm\EM\app\frontend\src\app\database\data\countries\relations\afrika\afrika_selatan.ts"
process_file(test_file)
