import os
import re

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

def process_file(filepath):
    if os.path.basename(filepath) in ["index.ts", "_index.ts"]:
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '"bus_terminal"' in content:
        print(f"Skipping {filepath} (already has bus_terminal)")
        return

    # Regex to find "airport": value,
    pattern = r'("airport":\s*\d+\s*,)'
    if re.search(pattern, content):
        new_content = re.sub(
            pattern,
            r'\1\n    "bus_terminal": 0,\n    "helipad": 0,',
            content
        )
        # Verify if replace made any changes
        if new_content == content:
            print(f"Failed to match/replace in {filepath}")
            return
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Warning: 'airport' field not found in {filepath}")

count = 0
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts"):
            process_file(os.path.join(root, file))
            count += 1

print(f"Processed {count} files.")
