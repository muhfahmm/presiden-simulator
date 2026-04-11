import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
profile_root = r'c:\fhm\em\app\frontend\src\app\database\data\semua_fitur_negara\0_profiles'

# 1. Read members from file
with open(members_path, 'r', encoding='utf-8') as f:
    text = f.read()
    members = re.findall(r'\"([^\"]+)\"', text)

print(f"Original members count: {len(members)}")

# 2. Extract valid nameIds from country profiles
# These are the ones that WILL show up in the UI
functional_name_ids = set()
for r, d, files in os.walk(profile_root):
    for file in files:
        if file.endswith('.ts'):
            with open(os.path.join(r, file), 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                # Find name_id: "Name"
                match = re.search(r'\"name_id\"\s*:\s*\"([^\"]+)\"', content)
                if match:
                    functional_name_ids.add(match.group(1).lower())

print(f"Functional countries found in code: {len(functional_name_ids)}")

# 3. Filter members
final_list = []
removed = []
for m in members:
    if m.lower().strip() in functional_name_ids:
        final_list.append(m.lower().strip())
    else:
        removed.append(m)

# 4. Final output
final_list = sorted(list(set(final_list)))
print(f"Final valid count: {len(final_list)}")
print(f"Countries removed (no code profile found): {removed}")

# 5. Write back
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(final_list):
        comma = "," if i < len(final_list) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")
