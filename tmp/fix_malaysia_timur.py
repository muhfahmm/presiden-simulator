import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\regional\AsianRoutes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Malaysia Timur (Kiri) block
match = re.search(r'  "Malaysia Timur \(Kiri\)":\s*\{([\s\S]+?)\n  \},', text)
if match:
    block = match.group(1)
    
    # Match Brunei coords
    coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', block)
    if coords_match:
         old_coords = coords_match.group(1)
         
         # New coordinates designed for pushing Northwards safely style
         new_coords = """        { lon: 110.35, lat: 1.55 }, // Kiri
        { lon: 111.00, lat: 3.00 }, // Push North
        { lon: 112.50, lat: 4.20 }, // Push North-East
        { lon: 114.00, lat: 5.00 }, // Push North-East 2
        { lon: 115.00, lat: 5.00 }  // Brunei"""
         
         fixed_block = block.replace(old_coords, new_coords)
         new_text = text.replace(block, fixed_block)
         
         with open(filepath, 'w', encoding='utf-8') as f:
             f.write(new_text)
         print("Malaysia Timur route fixed successfully.")
    else:
         print("Could not find coords inside Brunei in Malaysia Timur.")
else:
    print("Could not find Malaysia Timur (Kiri) block.")
