import sys
import re
import math

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

def distance(n1, n2):
    return math.sqrt((n1[0] - n2[0])**2 + (n1[1] - n2[1])**2)

# 1. Re-Clean back to Yemen (Hodeidah) 
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

# 3. Apply Euclidean Distance snaps
suborigins_gulf = {
    "Iran (Bushehr)": { "lon": 50.84, "lat": 28.97 },
    "Bahrain": { "lon": 50.58, "lat": 26.22 },
    "Qatar": { "lon": 51.53, "lat": 25.28 },
    "Iran (Kiri)": { "lon": 56.28, "lat": 27.18 },
    "Iran (Kanan)": { "lon": 60.62, "lat": 25.29 }
}

new_origins_lines = []

for name, hub_coord in suborigins_gulf.items():
    origin_block = f'  "{name}": {{\n'
    dest_blocks = []
    
    for dname, dinfo in kuwait_dests.items():
        coords_str = dinfo["coords"]
        nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)
        
        # Find continuous minimum distance node to hub 
        h_lon, h_lat = hub_coord["lon"], hub_coord["lat"]
        min_distance = 9999.0
        best_idx = 0
        
        for i, node in enumerate(nodes):
            n_lon, n_lat = float(node[0]), float(node[1])
            dist = distance((h_lon, h_lat), (n_lon, n_lat))
            if dist < min_distance:
                min_distance = dist
                best_idx = i
                
        # Slice forward FROM the minimum distance index
        sliced_nodes = nodes[best_idx:]
        
        sliced_coords_str = []
        for snode in sliced_nodes:
            sliced_coords_str.append(f"{{ lon: {snode[0]}, lat: {snode[1]} }}")
            
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


pakistan_block = """  "Pakistan (Karachi)": {
    "Jakarta": {
      color: "#f59e0b",
      coords: [
        { lon: 67.00, lat: 24.83 },
        { lon: 69.80, lat: 22.20 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 77.80, lat: 5.80 },
        { lon: 79.00, lat: 6.60 },
        { lon: 79.86, lat: 6.92 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.95, lat: 6.20 },
        { lon: 80.20, lat: 5.70 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 92.00, lat: 6.20 },
        { lon: 94.80, lat: 6.50 },
        { lon: 103.85, lat: 1.25 },
        { lon: 104.80, lat: -0.20 },
        { lon: 106.82, lat: -6.17 }
      ]
    }
  },
  "Pakistan (Gwadar)": {
    "Jakarta": {
      color: "#f59e0b",
      coords: [
        { lon: 62.33, lat: 25.12 },
        { lon: 67.00, lat: 24.83 },
        { lon: 69.80, lat: 22.20 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 77.80, lat: 5.80 },
        { lon: 79.00, lat: 6.60 },
        { lon: 79.86, lat: 6.92 },
        { lon: 79.83, lat: 6.50 },
        { lon: 79.95, lat: 6.20 },
        { lon: 80.20, lat: 5.70 },
        { lon: 81.20, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 92.00, lat: 6.20 },
        { lon: 94.80, lat: 6.50 },
        { lon: 103.85, lat: 1.25 },
        { lon: 104.80, lat: -0.20 },
        { lon: 106.82, lat: -6.17 }
      ]
    }
  }"""

new_origins_lines.append(pakistan_block)

final_inject = ",\n".join(new_origins_lines)

final_text = clean_body.strip() + ",\n" + final_inject + "\n};\n"

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(final_text)

print("Gulf slices fixed and appended successfully.")
