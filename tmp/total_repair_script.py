import os
import re
import random

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'"\d+":\s*"Rp \d+ T",'
    
    if re.search(pattern, content):
        content = re.sub(pattern, lambda m: f'"budget": {random.randint(4, 25)},', content)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed bug in {filepath}")

count = 0
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and os.path.basename(file) not in ["index.ts", "_index.ts"]:
            fix_file(os.path.join(root, file))
            count += 1

print(f"Checked {count} files.")
