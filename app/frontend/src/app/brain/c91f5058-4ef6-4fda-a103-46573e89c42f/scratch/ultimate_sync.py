import re
import os

# Paths
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'
index_path = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua\index.ts'
base_dir = r'c:\fhm\em\app\frontend\src\app\database\data\negara\benua'

# 1. Get current members from file
with open(members_path, 'r', encoding='utf-8') as f:
    matches = re.findall(r'\"([^\"]+)\"', f.read())
    
print(f"Total in file: {len(matches)}")

# 2. Get all valid name_ids from the actual game codebase
# We need to look into the individual country files to get 'name_id'
valid_name_ids = set()

# Read index.ts to get all relative paths (roughly)
with open(index_path, 'r', encoding='utf-8') as f:
    imports = re.findall(r"from \"(.*?)\"", f.read())

for imp in imports:
    # imp like './global/asia/index'
    if imp.startswith('.'):
        sub_index_path = os.path.join(base_dir, imp + '.ts')
        if not os.path.exists(sub_index_path):
             sub_index_path = os.path.join(base_dir, imp, 'index.ts')
             
        if os.path.exists(sub_index_path):
            with open(sub_index_path, 'r', encoding='utf-8') as f2:
                # Get specific country file imports
                country_imports = re.findall(r"from \"(.*?)\"", f2.read())
                for ci in country_imports:
                    if ci.startswith('.'):
                        country_file_path = os.path.join(os.path.dirname(sub_index_path), ci + '.ts')
                        if os.path.exists(country_file_path):
                            with open(country_file_path, 'r', encoding='utf-8') as f3:
                                content = f3.read()
                                name_id_match = re.search(r'\"name_id\"\s*:\s*\"(.*?)\"', content)
                                if name_id_match:
                                    valid_name_ids.add(name_id_match.group(1).lower())

print(f"Total valid name_ids in game: {len(valid_name_ids)}")

# 3. Compare
in_game = [m for m in matches if m.lower() in valid_name_ids]
not_in_game = [m for m in matches if m.lower() not in valid_name_ids]
dups = [k for k, v in __import__('collections').Counter(matches).items() if v > 1]

print(f"Matched: {len(in_game)}")
print(f"Not in game: {not_in_game}")
print(f"Duplicates: {dups}")

# 4. Final Clean List
final_list = sorted(list(set(in_game)))
print(f"Final Count: {len(final_list)}")

with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(final_list):
        comma = "," if i < len(final_list) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")
