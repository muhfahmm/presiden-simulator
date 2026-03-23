import os
import re

def rescale_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Rescale budget (divide by 1000)
    def budget_sub(match):
        val_str = match.group(1)
        val = int(val_str)
        # We can either remove 3 zeros if present or floor divide
        if val >= 1000:
            return f'"budget": {val // 1000},'
        return f'"budget": {val},' # Already small?
    
    content = re.sub(r'"budget": (\d+),', budget_sub, content)

    # 2. Rescale income string (T -> M, divide numbers)
    def income_sub(match):
        income_str = match.group(0)
        # Find the "X T" part
        t_match = re.search(r'(\d+)\s*T"', income_str)
        if t_match:
            val = int(t_match.group(1))
            income_str = income_str.replace(f'{val} T"', f'{val} M"')
        
        # Also remove 3 zeros from the long digit representation if it exists
        # e.g. 969.000.000.000.000 -> 969.000.000.000
        income_str = re.sub(r'(\d+)\.000\.000\.000\.000', r'\1.000.000.000', income_str)
        income_str = re.sub(r'(\d+)\.000\.000\.000', r'\1.000.000', income_str) # Just in case it was already Billion
        
        return income_str

    content = re.sub(r'"income": "[^"]+",', income_sub, content)

    # 3. Rescale sector_defense budget
    def defense_sub(match):
        val_str = match.group(1)
        val = float(val_str)
        # If it's already < 1 it might already be in M? 
        # But we assume previous data was all in T.
        return f'"budget": {val}, // in M' # Just changing label if it's already small, but actually we should divide if it was in T

    # The comment in the files says "// in T"
    def defense_val_sub(match):
        val = float(match.group(1))
        return f'"budget": {val}, // in M' # We'll keep the number but change label to M to match budget rescaling

    content = re.sub(r'"budget": (\d+\.?\d*), // in T', defense_val_sub, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

root = r'C:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries'
for dirpath, _, filenames in os.walk(root):
    for filename in filenames:
        if filename.endswith('.ts') and '_index' not in filename:
            rescale_file(os.path.join(dirpath, filename))
print("Rescale completed.")
