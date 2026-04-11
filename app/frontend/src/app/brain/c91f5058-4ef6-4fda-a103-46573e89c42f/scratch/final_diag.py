import re

db = set()
with open(r'c:\fhm\em\daftar-menu\database_negara.txt', 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            db.add(line.split(']')[1].strip().lower())

with open(r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    matches = re.findall(r'\"([^\"]+)\"', content)

unique_matches = []
seen = set()
for m in matches:
    if m not in seen:
        unique_matches.append(m)
        seen.add(m)
    else:
        print(f"DUPLICATE FOUND: {m}")

not_in_db = [x for x in unique_matches if x not in db]

print(f"TOTAL UNIQUE IN FILE: {len(unique_matches)}")
print(f"TOTAL SHOWN IN UI (IN DB): {len(unique_matches) - len(not_in_db)}")
print(f"MISSING FROM DATABASE: {not_in_db}")
