import os
import re

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional"
pbb_dir = os.path.join(root_dir, "1_organisasi_PBB")
regional_dir = os.path.join(root_dir, "2_organisasi_regional")

def get_mapping(parent, category_name):
    mapping = []
    if not os.path.exists(parent): return mapping
    for d in os.listdir(parent):
        path = os.path.join(parent, d)
        if os.path.isdir(path) and os.path.exists(os.path.join(path, "members.ts")):
            # Extract name
            m = re.search(r'\((.*?)\)', d)
            if m:
                clean_name = m.group(1).replace(' ', '').replace('-', '').replace('_', '')
            else:
                # Clean full name
                raw = d.split('_', 1)[1] if '_' in d else d
                clean_name = raw.replace(' ', '').replace('_', '').replace('(', '').replace(')', '').replace('-', '')
            
            new_file = f"member{clean_name}.ts"
            mapping.append({
                "category": category_name,
                "folder": d,
                "old_file": "members.ts",
                "new_file": new_file
            })
    return mapping

all_mappings = get_mapping(pbb_dir, "1_organisasi_PBB") + get_mapping(regional_dir, "2_organisasi_regional")

print("| Category | Folder | New Filename |")
print("| --- | --- | --- |")
for m in all_mappings:
    print(f"| {m['category']} | {m['folder']} | {m['new_file']} |")
