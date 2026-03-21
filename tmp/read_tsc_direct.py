import os

file_path = r"c:\fhm\EM4\tmp\tsc_direct11.txt"

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-16') as f:
        content = f.read()
    print("TSC DIRECT 11 CONTENTS:")
    print(content[:3000]) # First 3000 chars should show first 5-10 errors with detail
else:
    print("File not found.")
