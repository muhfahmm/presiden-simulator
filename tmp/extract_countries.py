import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all "name_id": "..."
matches = re.findall(r'"name_id":\s*"([^"]+)"', content)

with open(r"c:\fhm\EM4\tmp\country_list_summary.txt", 'w', encoding='utf-8') as f:
    for m in sorted(list(set(matches))):
        f.write(f"- {m}\n")
        
print(f"Extracted {len(matches)} countries.")
