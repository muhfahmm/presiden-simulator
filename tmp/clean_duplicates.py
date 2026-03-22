import re

txt_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"

lines_data = []
seen_names = set()
unique_lines = []

try:
    with open(txt_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line: continue
            match = re.search(r'^\d+\.\s*\[([ x])\]\s+(.+)$', line)
            if match:
                check = match.group(1)
                name = match.group(2).strip()
                name_lower = name.lower()
                
                if name_lower not in seen_names:
                    seen_names.add(name_lower)
                    unique_lines.append((name_lower, check, name))
                else:
                    print(f"Found duplicate: {name}")

    # Re-write file
    with open(txt_path, 'w', encoding='utf-8') as f_out:
        for i, (sort_key, check, name) in enumerate(unique_lines, 1):
            f_out.write(f"{i}. [{check}] {name}\n")
            
    print(f"Total unique countries: {len(unique_lines)}")

except Exception as e:
    print(f"Error deduplicating: {e}")
