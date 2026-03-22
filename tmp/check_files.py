import os

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
with open(r'c:\fhm\EM4\tmp\all_filenames.txt', 'w', encoding='utf-8') as f_out:
    for root, dirs, files in os.walk(base_dir):
        for file in files:
             if file.endswith(".ts"):
                 f_out.write(f"{root.split(os.sep)[-1]}/{file}\n")
