import re

txt_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"

lines_data = []

try:
    with open(txt_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line: continue
            # Match "1. [x] afganistan" -> number, checkmark, name
            match = re.search(r'^(\d+)\.\s*\[([ x])\]\s+(.+)$', line)
            if match:
                num = int(match.group(1))
                check = match.group(2)
                name = match.group(3).strip()
                lines_data.append((name.lower(), check, name)) # sort_key, check, original case name
            else:
                # If it doesn't match standard, print warning but keep it?
                 print(f"Skipping line (no match): {line}")

    # Sort alphabetically by the lower-case name
    lines_data.sort(key=lambda x: x[0])

    # Re-write file
    with open(txt_path, 'w', encoding='utf-8') as f_out:
        for i, (sort_key, check, name) in enumerate(lines_data, 1):
            f_out.write(f"{i}. [{check}] {name}\n")
            
    print(f"Sorted {len(lines_data)} items successfully.")

except Exception as e:
    print(f"Error sorting file: {e}")
