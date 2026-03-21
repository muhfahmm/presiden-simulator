import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Match Kuwait to Jepang (Tokyo)
match = re.search(r'  "Kuwait":\s*\{([\s\S]+?)\n  \},', text)
kuwait_content = match.group(1)

tokyo_match = re.search(r'    "Jepang \(Tokyo\)":\s*\{([\s\S]+?)\n    \}', kuwait_content)
coords_match = re.search(r'coords:\s*\[([\s\S]+?)\]', tokyo_match.group(1))
coords_str = coords_match.group(1) if coords_match else ""
nodes = re.findall(r'\{\s*lon:\s*([-0-9.]+),\s*lat:\s*([-0-9.]+)\s*\}', coords_str)

# Filter nodes in East Asia BOX
svg_width = 800
svg_height = 600
min_lon, max_lon = 118.0, 142.0
min_lat, max_lat = 20.0, 38.0

def scale_lon(lon):
    return (float(lon) - min_lon) / (max_lon - min_lon) * svg_width

def scale_lat(lat):
    # Latitude is inverted for SVG Y
    return svg_height - ((float(lat) - min_lat) / (max_lat - min_lat) * svg_height)

svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_width} {svg_height}" width="{svg_width}" height="{svg_height}" style="background:#001b3a;">\n'

# Draw path
points = []
for i, n in enumerate(nodes):
    lon, lat = float(n[0]), float(n[1])
    if min_lon <= lon <= max_lon and min_lat <= lat <= max_lat:
        px = scale_lon(lon)
        py = scale_lat(lat)
        points.append(f"{px},{py}")
        svg += f'  <circle cx="{px}" cy="{py}" r="4" fill="#ffffff" />\n'
        svg += f'  <text x="{px+5}" y="{py-5}" fill="#ffffff" font-size="10">{i}: {n[0]},{n[1]}</text>\n'

if points:
    svg += f'  <polyline points="{" ".join(points)}" fill="none" stroke="#f59e0b" stroke-width="2" />\n'

svg += '</svg>'

with open(r"c:\fhm\EM4\tmp\east_asia_plot.svg", 'w', encoding='utf-8') as f:
    f.write(svg)

print("East Asia SVG plot generated successfully.")
