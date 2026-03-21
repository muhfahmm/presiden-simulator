import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Locate Jizan block
idx = content.find('"Arab Saudi (Jizan)": {')

if idx != -1:
    jizan_block = content[idx:]
    
    # We want to replace `{ lon: 45.03, lat: 12.78 },\n        { lon: 50.00, lat: 12.00 }`
    # WITH `{ lon: 45.03, lat: 12.78 },\n        { lon: 45.00, lat: 12.00 },\n        { lon: 50.00, lat: 12.00 }`
    
    old_seq = "{ lon: 45.03, lat: 12.78 },\n        { lon: 50.00, lat: 12.00 }"
    new_seq = "{ lon: 45.03, lat: 12.78 },\n        { lon: 45.00, lat: 12.00 },\n        { lon: 50.00, lat: 12.00 }"
    
    if old_seq in jizan_block:
         # Replace all matches within the Jizan block
         new_jizan_block = jizan_block.replace(old_seq, new_seq)
         content = content[:idx] + new_jizan_block
         
         with open(file_path, 'w', encoding='utf-8') as f:
             f.write(content)
         print("Jizan route corner-cut fixed with (45.00, 12.00).")
    else:
         print("Sequence for replacement not found in Jizan block.")
else:
    print("Arab Saudi (Jizan) not found.")
