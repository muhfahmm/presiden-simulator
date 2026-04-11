import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
db_txt_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
js_root = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua'

# 1. Read members.ts
with open(members_path, 'r', encoding='utf-8') as f:
    members = set(re.findall(r'\"([^\"]+)\"', f.read()))

# 2. Read database_negara.txt
db_txt = set()
with open(db_txt_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db_txt.add(name)

# 3. Read actual Game JS name_ids
js_names = set()
for r, d, files in os.walk(js_root):
    for file in files:
        if file.endswith('.ts') and file != 'index.ts':
            with open(os.path.join(r, file), 'r', encoding='utf-8') as f:
                match = re.search(r'\"name_id\"\s*:\s*\"(.*?)\"', f.read())
                if match:
                    js_names.add(match.group(1).lower())

# 4. Diagnostics
print(f"Total in members.ts: {len(members)}")
print(f"Total in database_negara.txt: {len(db_txt)}")
print(f"Total in Game JS: {len(js_names)}")

missing_from_txt = members - db_txt
missing_from_js = members - js_names

print(f"In members.ts but NOT in TXT: {missing_from_txt}")
print(f"In members.ts but NOT in JS: {sorted(list(missing_from_js))}")
