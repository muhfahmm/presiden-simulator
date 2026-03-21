import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def robust_replace(content):
    # Saudi Unified Nodes we WANT
    target_nodes = [
        {'lon': 42.95, 'lat': 14.80},
        {'lon': 42.53, 'lat': 16.88},
        {'lon': 39.18, 'lat': 21.48},
        {'lon': 37.98, 'lat': 23.95},
        {'lon': 34.00, 'lat': 27.50},
        {'lon': 32.53, 'lat': 29.93}
    ]
    formatted_nodes = ""
    for c in target_nodes:
        formatted_nodes += f"        {{ lon: {c['lon']:.2f}, lat: {c['lat']:.2f} }},\n"
    formatted_nodes = formatted_nodes.rstrip(',\n')
    
    # We want to find any `coords: [` block
    block_pattern = re.compile(r'(coords:\s*\[\s*)(.*?)(\s*\])', re.DOTALL)
    
    def repl(match):
        prefix = match.group(1)
        coords_str = match.group(2)
        suffix = match.group(3)
        
        # Check if this string contains our targets
        # regex for { lon: 38.00, lat: 20.00 } allowing comments
        if re.search(r'lon:\s*38\.00\s*,\s*lat:\s*20\.00', coords_str) or re.search(r'lon:\s*41\.00\s*,\s*lat:\s*15\.00', coords_str):
            # We found an old path!
            # Let's find index where Gulf of Aden ends / Suez starts
            # Match coordinate lines
            lines = coords_str.splitlines()
            new_lines = []
            skip = False
            inserted = False
            
            for line in lines:
                if skip:
                    if '32.53' in line and '29.93' in line:
                        # Reached the end (Suez)
                        # The formatted nodes INCLUDE 32.53, so we can just skip inserting this line, wait, let's keep it index wise
                        skip = False
                    continue
                    
                if '42.95' in line and '14.80' in line:
                    # Found start of replacement
                    new_lines.append(formatted_nodes)
                    skip = True
                    inserted = True
                    continue
                    
                # Alternate start if 42.95 is not there (e.g., 43.30)
                if '43.30' in line and '12.60' in line:
                    new_lines.append(line) # keep this node
                    new_lines.append(formatted_nodes)
                    skip = True
                    inserted = True
                    continue
                    
                new_lines.append(line)
            
            # If we didn't find the start correctly with spacing, do a safer fallback
            if not inserted:
                 # Fallback: Just replace the middle segments
                 print("Fallback trigger for block:")
                 # Regex match lines containing 41.0, 38.0 and remove them, insert saudi ones.
                 # But it's risky if we don't know the exact lines.
                 return match.group(0) # Do nothing and print for debug
            
            return prefix + '\n'.join(new_lines) + suffix
            
        return match.group(0)

    # Let's run a dry run first to see what matches!
    res = block_pattern.sub(repl, content)
    return res

output_content = robust_replace(content)

with open(r"c:\fhm\EM4\tmp\unify_dry.py", 'w', encoding='utf-8') as f:
    f.write("""import json
# File rewritten for verification
""")
    
# Let's just execute the replacement and write to file IF we are confident
# Better: regex match and strip comments inside the repl loop for exact matching.
