import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Map: absolute tiny fonts to standard readable Tailwind
replace_map = {
    'text-[7px]': 'text-[9px]',
    'text-[8px]': 'text-[10px]',
    'text-[9px]': 'text-xs',      # 12px
    'text-[10px]': 'text-xs',     # 12px
    'text-[11px]': 'text-sm',     # 14px
}

for old, new in replace_map.items():
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Increased font sizes across layout safely.")
