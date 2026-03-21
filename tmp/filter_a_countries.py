import re
import json

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(export const countries: CountryData\[\] = \[\s*)(.*?)(\s*\];)', content, re.DOTALL)

if match:
    prefix = match.group(1)
    array_body = match.group(2)
    suffix = match.group(3)
    
    try:
        data = json.loads("[" + array_body + "]")
        print(f"Loaded {len(data)} countries.")
        
        filtered = [item for item in data if item.get('name_id', '').lower().startswith('a')]
        print(f"Filtered to {len(filtered)} countries.")
        
        new_body = json.dumps(filtered, indent=2, ensure_ascii=False)
        new_body = new_body.strip()[1:-1].strip()
        
        new_content = prefix + new_body + suffix
        with open(file_path, 'w', encoding='utf-8') as f:
             f.write(new_content)
        print("File updated with countries starting with A.")
    except Exception as e:
        print(f"Error parsing array: {e}")
else:
    print("Array declaration not found.")
