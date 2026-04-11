import os
import re

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\negara\benua"
files_processed = 0

# Pattern explained:
# 1. Match the closing brace of 'pengaruh_internasional' AND the comma following it.
# 2. Match the 'organisasi_internasional' field entirely until the array closing bracket.
# 3. We capture the brace but exclude the comma.
pattern = re.compile(r'(\n\s+\}),\s*\n\s+"organisasi_internasional":\s*\[[\s\S]*?\]', re.MULTILINE)

def cleanup_file(file_path):
    global files_processed
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if field exists
    if '"organisasi_internasional"' in content:
        new_content = pattern.sub(r'\1', content)
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            files_processed += 1
            return True
    return False

for r, d, files in os.walk(root_dir):
    for f in files:
        if f.endswith('.ts') and f != 'index.ts':
            cleanup_file(os.path.join(r, f))

print(f"Successfully cleaned up {files_processed} files.")
