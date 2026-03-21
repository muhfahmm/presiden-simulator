import os

file_path = r'c:\fhm\EM4\tmp\tsc_direct.txt'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-16') as f:
        lines = f.readlines()
    print("FILTERED TSC ERRORS START:\n")
    for line in lines:
         if ".tsx" in line or "Unterminated" in line:
              print(line.strip())
    print("\nFILTERED TSC ERRORS END")
else:
    print("tsc_direct.txt not found.")
