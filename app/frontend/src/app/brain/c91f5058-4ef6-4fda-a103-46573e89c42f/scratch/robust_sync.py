import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
db_txt_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
js_root = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua'

# 1. Read the list from the TXT database (the 207 source of truth)
db_txt_names = set()
with open(db_txt_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db_txt_names.add(name)

print(f"Total in database_negara.txt: {len(db_txt_names)}")

# 2. Read the list from members.ts
with open(members_path, 'r', encoding='utf-8') as f:
    current_members = re.findall(r'\"([^\"]+)\"', f.read())

print(f"Total entries in members.ts: {len(current_members)}")

# 3. Scan the ACTUAL game code for 'name_id' values (case-insensitive)
# This is what the UI actually uses.
game_name_ids = set()
for r, d, files in os.walk(js_root):
    for file in files:
        if file.endswith('.ts'):
            with open(os.path.join(r, file), 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                # Find all "name_id": "Value" matches
                matches = re.findall(r'\"name_id\"\s*:\s*\"([^\"]+)\"', content)
                for m in matches:
                    game_name_ids.add(m.lower())

print(f"Total unique name_ids in Game Code: {len(game_name_ids)}")

# 4. Identification of discrepancies
unique_members = []
seen = set()
duplicates = []
for m in current_members:
    m_low = m.lower()
    if m_low in seen:
        duplicates.append(m_low)
    else:
        unique_members.append(m_low)
        seen.add(m_low)

in_db_missing_from_file = db_txt_names - seen
in_file_missing_from_db = seen - db_txt_names
in_file_missing_from_game = seen - game_name_ids

print(f"Duplicates found in file: {duplicates}")
print(f"In file but NOT in database_negara.txt: {in_file_missing_from_db}")
print(f"In file but NOT recognized by Game Engine (missing from JS): {sorted(list(in_file_missing_from_game))}")

# 5. Final Synchronization: 
# We want to keep only items that are in BOTH the file AND the database_negara.txt
# And ideally they should be in the game engine too.
sync_list = sorted([m for m in unique_members if m in db_txt_names])

# Write back
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(sync_list):
        comma = "," if i < len(sync_list) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")

print(f"Final Count written to file: {len(sync_list)}")
