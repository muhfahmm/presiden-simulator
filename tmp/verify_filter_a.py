import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.findall(r'"name_id":\s*"([^"]+)"', content)
print(f"Remaining countries ({len(matches)}):")
for m in matches:
    print(f"- {m}")
