import os
import re
import subprocess

checklist_file = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"
base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"

print("Parsing checklist lines 11-90...")
with open(checklist_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()[10:90] # 0-indexed 10 to 89 (lines 11 to 90)

list_needed = []
for line in lines:
     m = re.search(r'\d+\.\s*\[[x ]\]\s*(.*)', line)
     if m:
          list_needed.append(m.group(1).strip().lower())

print(f"Found {len(list_needed)} target names for rollback.")

def process_file(filepath):
    if os.path.basename(filepath) in ["index.ts", "_index.ts"]:
         return
    with open(filepath, 'r', encoding='utf-8') as f:
        file_content = f.read()
    match_id = re.search(r'"name_id":\s*"(.*?)",', file_content)
    if match_id:
         name_id = match_id.group(1).lower()
         if name_id in list_needed:
              print(f"Reverting: {os.path.basename(filepath)}")
              # Run git checkout sequentially to restore file
              subprocess.run(f'git checkout -- "{filepath}"', shell=True, cwd=r"c:\fhm\EM4")

for root, dirs, files in os.walk(base_dir):
     for file in files:
          if file.endswith(".ts"):
               process_file(os.path.join(root, file))

print("Rollback batch finished.")
