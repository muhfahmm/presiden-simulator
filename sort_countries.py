import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\index.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the array content
pattern = r"(export const countries: CountryData\[\] = \[\n)(.*?)(\n\];)"
match = re.search(pattern, content, re.DOTALL)

if match:
    prefix = match.group(1)
    array_str = match.group(2)
    suffix = match.group(3)
    
    # Split by comma and clean up
    items = [item.strip() for item in array_str.split(',') if item.strip()]
    
    # Sort alphabetically
    items.sort()
    
    # Reconstruct string
    new_array_str = ",\n".join([f"  {item}" for item in items]) + ","
    
    new_content = content[:match.start()] + prefix + new_array_str + suffix + content[match.end():]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully sorted countries in index.ts")
else:
    print("Could not find array in index.ts")
