import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Clean back to Yemen (Hodeidah)
parts = text.split('  "Yemen (Hodeidah)": {')
head = parts[0]
tail = parts[1]
yemen_sub = tail.split('    }\n  }')
clean_body = head + '  "Yemen (Hodeidah)": {' + yemen_sub[0] + '    }\n  }\n'

# 2. Extract Kuwait destinations subtree node arrays
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', clean_body)
kuwait_content = match.group(1)

def extract_destinations(block_text):
    dests = {}
    items = re.findall(r'    "([^"]+)":\s*\{([\s\S]+?)\n    \}', block_text)
    for name, content in items:
        color_match = re.search(r'color:\s*"([^"]+)"', content)
        color = color_match.group(1) if color_match else "#f59e0b"
        coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', content)
        coords_str = coords_match.group(1).strip() if coords_match else ""
        dests[name] = {"color": color, "coords": coords_str}
    return dests

kuwait_dests = extract_destinations(kuwait_content)

# 3. Apply Custom Curves for exact drawings
# Bushehr: Join Node 2 (51.00)
# Kiri: Join Node 7 (56.40)
# Kanan: Join Node 12 (60.40) -> wait, let's find closest node with lon between 59.5 and 61.5 for Kanan 
hubs_manual = {
    "Iran (Bushehr)": { "lon": 50.84, "lat": 28.97, "join_index": 2 },
    "Iran (Kiri)": { "lon": 56.28, "lat": 27.18, "join_index": 7 },
    "Iran (Kanan)": { "lon": 60.62, "lat": 25.29, "join_index": 12 }
}

new_origins_lines = []

for name, hub_coord in hubs_manual.items():
    origin_block = f'  "{name}": {{\n'
    dest_blocks = []
    
    for dname, dinfo in kuwait_dests.items():
        coords_str = dinfo["coords"]
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        
        # Select target index from dict
        best_idx = hub_coord["join_index"]
        
        # Guard index boundaries
        if best_idx >= len(nodes):
            best_idx = len(nodes) - 1
            
        sliced_nodes = nodes[best_idx:]
        sliced_coords_str = []
        for snode in sliced_nodes:
             sliced_coords_str.append(f"{{ lon: {snode[0]}, lat: {snode[1]} }}")
             
        h_lon, h_lat = hub_coord["lon"], hub_coord["lat"]
        full_coords = [f"{{ lon: {h_lon}, lat: {h_lat} }}"] + sliced_coords_str
        coords_formatted = ",\n        ".join(full_coords)
        
        dest_block = f"""    "{dname}": {{
      color: "{dinfo["color"]}",
      coords: [
        {coords_formatted}
      ]
    }}"""
        dest_blocks.append(dest_block)
        
    origin_block += ",\n".join(dest_blocks) + "\n  }"
    new_origins_lines.append(origin_block)

final_inject = ",\n".join(new_origins_lines)

final_text = clean_body.strip() + ",\n" + final_inject + "\n};\n"

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(final_text)

print("Iran Hubs custom curves updated successfully.")
