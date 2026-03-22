import os
base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

counts = []
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and "index" not in file:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                counts.append(f"{file} : {len(lines)}")

counts.sort()
print("\n".join(counts))
