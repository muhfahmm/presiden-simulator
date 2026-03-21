import os

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
index_file_name = "_index.ts"

continents = ['asia', 'afrika', 'eropa', 'na', 'sa', 'oceania']

index_exports = {}

for folder in continents:
    folder_path = os.path.join(base_dir, folder)
    if not os.path.exists(folder_path):
        continue
    
    files = [f for f in os.listdir(folder_path) if f.endswith('.ts') and f != index_file_name]
    
    if not files:
        continue
        
    export_lines = []
    names = []
    
    for f in files:
         name_id = f.replace('.ts', '')
         export_lines.append(f'export {{ {name_id} }} from "./{name_id}";')
         names.append(name_id)
         
    index_exports[folder] = names
    
    # Write _index.ts
    index_path = os.path.join(folder_path, index_file_name)
    with open(index_path, 'w', encoding='utf-8') as f_out:
         f_out.write('\n'.join(export_lines) + '\n')
         
    print(f"Created {index_file_name} in {folder}")

# 2. Re-write countries.ts
main_countries_ts = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries.ts"

imports_list = []
array_items = []

for folder, names in index_exports.items():
    if not names:
        continue
    names_str = ', '.join(names)
    imports_list.append(f'import {{ {names_str} }} from "./countries/{folder}/_index";')
    array_items.extend(names)

new_index_content = """import { CountryData } from "./types";

""" + '\n'.join(imports_list) + """

export const countries: CountryData[] = [
  """ + ',\n  '.join(array_items) + """
];
"""

with open(main_countries_ts, 'w', encoding='utf-8') as f:
    f.write(new_index_content)

print("countries.ts index file updated to use continent index files.")
