import re
import json
import os

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data"
file_path = os.path.join(base_dir, "countries.ts")

mapping = {
    "afganistan": "asia",
    "afrika selatan": "afrika",
    "albania": "eropa",
    "aljazair": "afrika",
    "amerika serikat": "na",
    "andorra": "eropa",
    "angola": "afrika",
    "antigua dan barbuda": "na",
    "arab saudi": "asia",
    "argentina": "sa",
    "armenia": "asia",
    "australia": "oceania",
    "austria": "eropa",
    "azerbaijan": "asia"
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(export const countries: CountryData\[\] = \[\s*)(.*?)(\s*\];)', content, re.DOTALL)

if not match:
    # also match standard import setup if I already modified it
    print("Array declaration not found in standard look.")
    exit()

array_body = match.group(2)
data = json.loads("[" + array_body + "]")

imports_list = []
array_items = []

for item in data:
    name_id = item.get('name_id', '')
    p_name = name_id.lower()
    
    continent = mapping.get(p_name, "misc")
    
    file_id = p_name.replace(' ', '_')
    folder_path = os.path.join(base_dir, "countries", continent)
    os.makedirs(folder_path, exist_ok=True)
    
    file_out = os.path.join(folder_path, f"{file_id}.ts")
    
    with open(file_out, 'w', encoding='utf-8') as f:
        f.write('import { CountryData } from "../../types";\n\n')
        item_json = json.dumps(item, indent=2, ensure_ascii=False)
        f.write(f"export const {file_id}: CountryData = {item_json};\n")
        
    imports_list.append(f'import {{ {file_id} }} from "./countries/{continent}/{file_id}";')
    array_items.append(file_id)

new_index_content = """import { CountryData } from "./types";

""" + '\n'.join(imports_list) + """

export const countries: CountryData[] = [
  """ + ',\n  '.join(array_items) + """
];
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_index_content)

print(f"Split {len(data)} countries into continent folders successfully.")
