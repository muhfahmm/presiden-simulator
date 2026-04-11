import re

imf_path = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts"
with open(imf_path, 'r', encoding='utf-8') as f:
    text = f.read()
    imf_members = re.findall(r'\"([^\"]+)\"', text)

db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
db_names = set()
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db_names.add(name)

def create_members_file(path, members_list):
    members_list = sorted(list(set(members_list)))
    content = "export const members = [\n"
    for i, m in enumerate(members_list):
        comma = "," if i < len(members_list) - 1 else ""
        content += f'  "{m}"{comma}\n'
    content += "];\n"
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Created {path} with {len(members_list)} members")

# 1. Bank Dunia
bd_members = imf_members[:]
# Added Liechtenstein, Nauru, etc are already in IMF list (Andorra, Nauru, etc.)
create_members_file(r"C:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\2_Bank_Dunia\members.ts", bd_members)

# 2. Interpol
interpol_members = imf_members[:]
interpol_extras = ["korea utara", "kuba", "palestina", "monako", "vatikan", "eritrea"] # eritrea is in IMF? yes.
for e in interpol_extras:
    if e in db_names:
        interpol_members.append(e)
create_members_file(r"C:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\3_Interpol\members.ts", interpol_members)

# 3. WHO
who_members = imf_members[:]
who_extras = ["korea utara", "kuba", "monako", "vatikan", "niue", "cook islands"]
for e in who_extras:
    if e in db_names:
        who_members.append(e)
create_members_file(r"C:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\4_Organisasi_Kesehatan_Dunia_(WHO)\members.ts", who_members)
