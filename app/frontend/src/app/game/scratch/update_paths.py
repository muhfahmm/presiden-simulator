import os
import re

search_path = r'C:\fhm\em\app\frontend\src\app\game'
old_path = '3_hubungan'
new_path = 'modals/1_info_strategis/8_Hubungan'

# Regex to match the path in imports/strings
# Handles @/app/game/components/3_hubungan and relative ../components/3_hubungan
pattern = re.compile(r'([\w./]*components/)3_hubungan')

for root, dirs, files in os.walk(search_path):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub(r'\1' + new_path, content)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {filepath}")
