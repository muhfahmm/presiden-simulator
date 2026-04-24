import os
import re

patterns = [
    (r'\|\| "Indonesia"', '|| ""'),
    (r'\|\| \'Indonesia\'', '|| ""'),
    (r'useState<string>\("Indonesia"\)', 'useState<string>("")'),
    (r'useState\("Indonesia"\)', 'useState("")'),
    (r'm\.name === "Indonesia"', 'm.name.toLowerCase() === (localStorage.getItem("selectedCountry") || "").toLowerCase()'),
]

root_dir = r"C:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\5_geopolitik"

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in patterns:
                new_content = re.sub(pattern, replacement, new_content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")
