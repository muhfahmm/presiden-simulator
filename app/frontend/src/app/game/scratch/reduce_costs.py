import os
import re

# Step 1: PBB Organizations
pbb_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\1_organisasi_PBB"

pbb_costs = {
    "unWorldBankStorage.ts": (10000000, 2500000),
    "unInterpolStorage.ts": (1000000, 250000),
    "unWHOStorage.ts": (400000, 100000),
    "unUNESCOStorage.ts": (800000, 200000),
    "unWTOStorage.ts": (2000000, 500000),
    "unILOStorage.ts": (400000, 100000),
    "unFAOStorage.ts": (1000000, 250000),
    "unICAOStorage.ts": (2000000, 500000),
    "unIMOStorage.ts": (2000000, 500000),
    "unITUStorage.ts": (1000000, 250000),
    "unWMOStorage.ts": (600000, 150000),
}

for root, dirs, files in os.walk(pbb_dir):
    for file in files:
        if file in pbb_costs:
            old_cost, new_cost = pbb_costs[file]
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace numeric cost
            new_content = content.replace(f'const cost = {old_cost};', f'const cost = {new_cost};')
            
            # Replace cost in messages/content (e.g. "10M", "1.000.000", etc.)
            # This is trickier, so we'll look for the old_cost formatted with dots
            old_formatted = f"{old_cost:,}".replace(",", ".")
            new_formatted = f"{new_cost:,}".replace(",", ".")
            new_content = new_content.replace(old_formatted, new_formatted)
            
            # Specific fixes for text like "10M"
            if old_cost == 10000000:
                new_content = new_content.replace("10M", "2.5M")
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated PBB: {file_path}")

# Special case for IMF
imf_file = os.path.join(pbb_dir, r"1_Dana_Moneter_Internasional\unIMFStorage.ts")
if os.path.exists(imf_file):
    with open(imf_file, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace('currentCash * 0.01', 'currentCash * 0.0025')
    new_content = new_content.replace('1% kas', '0.25% kas')
    if new_content != content:
        with open(imf_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated IMF: {imf_file}")

# Step 2: Regional Organizations
regional_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik\2_organisasi_internasional\2_organisasi_regional"

for root, dirs, files in os.walk(regional_dir):
    for file in files:
        if file == "index.tsx":
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find membershipFee={NUMBER}
            match = re.search(r'membershipFee={(\d+)}', content)
            if match:
                old_fee = int(match.group(1))
                new_fee = int(old_fee * 0.25)
                # Ensure even
                if new_fee % 2 != 0:
                    new_fee += 1
                
                new_content = content.replace(f'membershipFee={{{old_fee}}}', f'membershipFee={{{new_fee}}}')
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated Regional: {file_path} ({old_fee} -> {new_fee})")
