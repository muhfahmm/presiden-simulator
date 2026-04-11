import re
import os

index_path = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua\index.ts'
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'

# 1. Extra all country variables from index.ts
with open(index_path, 'r', encoding='utf-8') as f:
    text = f.read()

# We look for the patterns of imports
# example: import { afganistan, ... } from "./global/asia/index";
import_blocks = re.findall(r'import\s+\{\s*([^\}]+)\s*\}\s+from\s+"./global/', text)

valid_names = set()
for block in import_blocks:
    # Split by comma and clean up
    names = [n.strip() for n in block.split(',')]
    for n in names:
        if n:
            # Normalize: underscores to spaces, lowercase
            valid_names.add(n.replace('_', ' ').lower())

print(f"Total valid country entries in index.ts: {len(valid_names)}")

# 2. Read members.ts
with open(members_path, 'r', encoding='utf-8') as f:
    m_text = f.read()
    members = re.findall(r'\"([^\"]+)\"', m_text)

print(f"Current members in file: {len(members)}")

# 3. Filter
final_list = []
removed = []
for m in members:
    norm_m = m.lower().strip()
    if norm_m in valid_names:
        final_list.append(norm_m)
    else:
        removed.append(m)

# 4. Final deduplication and sort
final_list = sorted(list(set(final_list)))

# 5. Write back
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(final_list):
        comma = "," if i < len(final_list) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")

print(f"Removed countries: {removed}")
print(f"Final Count written: {len(final_list)}")
