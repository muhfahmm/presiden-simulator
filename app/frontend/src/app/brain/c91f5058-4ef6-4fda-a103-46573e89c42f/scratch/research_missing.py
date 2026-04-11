import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
profile_root = r'c:\fhm\em\app\frontend\src\app\database\data\semua_fitur_negara\0_profiles'

def get_members():
    try:
        with open(members_path, 'r', encoding='utf-8') as f:
            content = f.read()
            return re.findall(r'\"([^\"]+)\"', content)
    except:
        return []

def get_functional_countries():
    names = set()
    for r, d, files in os.walk(profile_root):
        for file in files:
            if file.endswith('.ts'):
                try:
                    with open(os.path.join(r, file), 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()
                        match = re.search(r'\"name_id\"\s*:\s*\"([^\"]+)\"', content)
                        if match:
                            names.add(match.group(1).lower().strip())
                except:
                    pass
    return names

members = get_members()
game_names = get_functional_countries()

missing = [m for m in members if m.lower().strip() not in game_names]

print(f"Total Members in file: {len(members)}")
print(f"Total Functional Countries in code: {len(game_names)}")
print(f"Mismatched/Missing Countries: {missing}")
