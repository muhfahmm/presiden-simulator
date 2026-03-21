import os

file_path = r'c:\fhm\EM4\tmp\tsc_direct.txt'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-16') as f:
        content = f.read()
    print("TSC OUTPUT START:\n")
    print(content)
    print("\nTSC OUTPUT END")
else:
    print("tsc_direct.txt not found.")
