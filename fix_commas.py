import re
import os

directory = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\afrika"

def fix_commas(content):
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        original_line = line
        stripped = line.strip()
        if stripped and ':' in stripped:
            items = stripped.split(':', 1)
            if len(items) == 2:
                key = items[0].strip()
                val = items[1].strip()
                if key.startswith('"') and key.endswith('"'):
                    # Check if line ends with a marker that it is a start of block or already fine
                    # Exclude: , } ] { [ (
                    if not (val.endswith(',') or val.endswith('}') or val.endswith(']') or val.endswith('{') or val.endswith('[') or val.endswith('(')):
                        # Reconstruct line with comma
                        indent_match = re.match(r'^(\s*)', line)
                        indent = indent_match.group(1) if indent_match else ""
                        line = f"{indent}{key}: {val},"
        new_lines.append(line)
        
    return '\n'.join(new_lines)

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".ts") and filename != "_index.ts":
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original = content
        content = fix_commas(content)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Fixed commas in {count} files")
