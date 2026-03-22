import os
import re

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

def process_file(filepath):
    if os.path.basename(filepath) in ["index.ts", "_index.ts"]:
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match: "17": "Rp 538 T",
    pattern = r'"\d+":\s*"Rp (\d+) T",'
    
    matches = re.findall(pattern, content)
    if len(matches) >= 2:
        # First one set to budget, second to income
        budget_val = matches[0]
        income_val = matches[1]
        
        # Replace first match with budget
        content = re.sub(pattern, f'"budget": "Rp {budget_val} T",', content, count=1)
        # Replace second match (which was index 1) with income
        content = re.sub(pattern, f'"income": "Rp {income_val} T",', content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed keys in {filepath}")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and os.path.basename(file) not in ["index.ts", "_index.ts"]:
            process_file(os.path.join(root, file))

print("Fix complete.")
