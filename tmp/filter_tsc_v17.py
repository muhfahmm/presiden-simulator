import os

file_path = r'c:\fhm\EM4\tmp\tsc_direct17.txt'
out_path = r'c:\fhm\EM4\tmp\tsc_filtered_errors17.txt'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-16') as f:
        lines = f.readlines()
    
    filtered_lines = []
    for line in lines:
         if "node_modules" not in line and (".tsx" in line or "error" in line.lower()):
              filtered_lines.append(line.strip())
              
    with open(out_path, 'w', encoding='utf-8') as f:
         f.write("\n".join(filtered_lines))
         
    print(f"Filtered {len(filtered_lines)} lines to tsc_filtered_errors17.txt")
else:
    print("tsc_direct17.txt not found.")
