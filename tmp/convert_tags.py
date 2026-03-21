import os

src = r"c:\fhm\EM4\tmp\corrupted_tags.txt"
dst = r"c:\fhm\EM4\tmp\corrupted_tags_utf8.txt"

if os.path.exists(src):
    with open(src, 'r', encoding='utf-16le') as f:
        # Some versions might look like utf-16le, read safely
        content = f.read()
        
    with open(dst, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Conversion done.")
else:
    print("Source not found.")
