import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_nodes = """        { lon: 42.95, lat: 14.80 },
        { lon: 42.53, lat: 16.88 },
        { lon: 39.18, lat: 21.48 },
        { lon: 37.98, lat: 23.95 },
        { lon: 34.00, lat: 27.50 },
        { lon: 32.53, lat: 29.93 }"""

# Regex to find everything between 43.30 (or similar) and 32.53
# Match the block with coords:[...]
blocks = re.split(r'(coords:\s*\[)', content)

new_blocks = [blocks[0]]

for i in range(1, len(blocks), 2):
    prefix = blocks[i] # "coords: ["
    body = blocks[i+1] # coordinates string inside array
    
    # Check if there is a closing bracket
    idx = body.find(']')
    if idx != -1:
        coords_str = body[:idx]
        suffix = body[idx:]
        
        # Check if contains both old nodes
        if "38.00" in coords_str and "41.00" in coords_str:
            # We must replace the Red Sea loop region
            # Coordinates are parsed line-by-line
            lines = coords_str.splitlines()
            new_lines = []
            skip = False
            inserted = False
            
            for line in lines:
                if skip:
                    if "32.53" in line and "29.93" in line:
                         skip = False
                    continue
                    
                if ("42.95" in line and "14.80" in line) or ("43.30" in line and "12.60" in line) or ("41.00" in line and "15.00" in line):
                     if not inserted:
                          new_lines.append(target_nodes)
                          inserted = True
                     skip = True
                     if "32.53" in line and "29.93" in line:
                          skip = False # don't skip itself if it was the same line, but here they are separate
                     continue
                
                new_lines.append(line)
                
            coords_str = '\n'.join(new_lines)
            
        new_blocks.append(prefix + coords_str + suffix)
    else:
        new_blocks.append(prefix + body)

new_content = ''.join(new_blocks)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Saudi routes unified robustly.")
