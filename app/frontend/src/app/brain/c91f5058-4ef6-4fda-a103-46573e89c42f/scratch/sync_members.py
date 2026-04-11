import re
import os

db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'

# 1. Read Database
db_names = set()
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name:
                db_names.add(name)

# 2. Read current members.ts
with open(members_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Extract all members from the file
all_members = re.findall(r'\"([^\"]+)\"', content)

# 4. Filter only those that exist in the database and remove duplicates
sync_members = []
seen = set()
missing = []

for m in all_members:
    m_low = m.lower()
    if m_low in db_names:
        if m_low not in seen:
            sync_members.append(m_low)
            seen.add(m_low)
    else:
        missing.append(m)

sync_members.sort()

# 5. Write back to members.ts
new_content = "export const members = [\n"
for i, name in enumerate(sync_members):
    comma = "," if i < len(sync_members) - 1 else ""
    new_content += f'  "{name}"{comma}\n'
new_content += "];\n"

with open(members_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"TOTAL ORIGINAL: {len(all_members)}")
print(f"TOTAL SYNCED (UNIQUE & IN DB): {len(sync_members)}")
print(f"REMOVED (NOT IN DB): {missing}")
