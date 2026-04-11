import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
js_root = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua'

# 1. Read members from file
with open(members_path, 'r', encoding='utf-8') as f:
    members = re.findall(r'\"([^\"]+)\"', f.read())

# 2. Extract actual name_id values from JS/TS code files
game_name_ids = set()
for r, d, files in os.walk(js_root):
    for file in files:
        if file.endswith('.ts'):
            with open(os.path.join(r, file), 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = re.findall(r'\"name_id\"\s*:\s*\"([^\"]+)\"', content)
                for m in matches:
                    game_name_ids.add(m.lower())

# 3. Filter members
valid_members = []
removed = []
for m in members:
    if m.lower() in game_name_ids:
        valid_members.append(m.lower())
    else:
        removed.append(m)

valid_members = sorted(list(set(valid_members)))

# 4. Write back
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(valid_members):
        comma = "," if i < len(valid_members) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")

print(f"Original Count: {len(members)}")
print(f"Final Count: {len(valid_members)}")
print(f"Removed: {removed}")
