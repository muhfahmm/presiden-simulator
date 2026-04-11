import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
js_root = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua'

# 1. Read members from file
with open(members_path, 'r', encoding='utf-8') as f:
    text = f.read()
    members = re.findall(r'\"([^\"]+)\"', text)

print(f"Total in members.ts: {len(members)}")

# 2. Extract actual name_id values from JS/TS code files
game_name_ids = set()
for r, d, files in os.walk(js_root):
    for file in files:
        if file.endswith('.ts') and 'index.ts' not in file:
            try:
                with open(os.path.join(r, file), 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    # Look for "name_id": "value"
                    found = re.findall(r'[\"\']name_id[\"\']\s*:\s*[\"\']([^\"\']+)[\"\']', content)
                    for m in found:
                        game_name_ids.add(m.lower())
            except:
                pass

print(f"Total unique name_ids found in game code: {len(game_name_ids)}")

# 3. Filter
valid_members = []
removed = []
for m in members:
    if m.lower() in game_name_ids:
        valid_members.append(m.lower())
    else:
        removed.append(m)

# Deduplicate just in case
unique_valid = []
seen = set()
for m in valid_members:
    if m not in seen:
        unique_valid.append(m)
        seen.add(m)

unique_valid.sort()

# 4. Write back
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(unique_valid):
        comma = "," if i < len(unique_valid) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")

print(f"Removed countries (not found in code): {removed}")
print(f"Final count: {len(unique_valid)}")
