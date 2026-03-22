import re
import os

directory = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\afrika"

def sort_section(content, section_name):
    # Match the section block using simple concatenation to avoid f-string issues
    # Note: section_name is just string, no special regex chars expected but good to be careful
    pattern = r'("' + section_name + r'":\s*\{)(.*?)(\s*\})'
    
    matches = list(re.finditer(pattern, content, re.DOTALL))
    
    if not matches:
        return content
        
    new_content = content
    # Process from back to front
    for match in reversed(matches):
        prefix = match.group(1)
        body = match.group(2)
        suffix = match.group(3)
        
        # Split by newline, clean up
        lines = [line.strip() for line in body.split('\n') if line.strip()]
        
        # Sort lines
        lines.sort()
        
        # Assemble
        new_body = "\n" + "\n".join([f"    {line}" for line in lines]) + "\n  "
        
        # Replace
        new_content = new_content[:match.start()] + prefix + new_body + suffix + new_content[match.end():]
        
    return new_content

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".ts") and filename != "_index.ts":
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original = content
        content = sort_section(content, "infrastructure")
        content = sort_section(content, "sector_extraction")
        content = sort_section(content, "sector_manufacturing")
        content = sort_section(content, "sector_livestock")
        content = sort_section(content, "sector_agriculture")
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Done sorting fields for {count} African country files")
