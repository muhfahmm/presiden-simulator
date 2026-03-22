import os
import re
import random

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

def process_file(filepath):
    if os.path.basename(filepath) in ["index.ts", "_index.ts"]:
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    def fix_top(m):
        key = m.group(1)
        # Randomize a reasonable value
        val = random.randint(100, 900)
        return f'"{key}": "Rp {val} T",'

    # Match integer values for budget and income
    pattern_budget = r'"budget":\s*(\d+)\s*,'
    pattern_income = r'"income":\s*(\d+)\s*,'
    
    changes = False
    # replace first match of budget (which is top-level)
    if re.search(pattern_budget, content):
        # Verify it's not inside military or defense by looking at context or just using count=1 
        # Since it's linear traversal, count=1 replaces the FIRST match in the file.
        # Top-level budget is ALWAYS first in these templates.
        new_content = re.sub(pattern_budget, fix_top, content, count=1)
        if new_content != content:
            content = new_content
            changes = True

    if re.search(pattern_income, content):
        new_content = re.sub(pattern_income, fix_top, content, count=1)
        if new_content != content:
            content = new_content
            changes = True

    if changes:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and os.path.basename(file) not in ["index.ts", "_index.ts"]:
            process_file(os.path.join(root, file))

print("Fix complete.")
