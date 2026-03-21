import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\hubs.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before Jepang (Utara)
target = '  { name: "Jepang (Utara)"'
saudi_hubs = """  { name: "Arab Saudi (Jeddah)", lon: 39.18, lat: 21.48, radius: 4.5, fill: "#ffffff" },
  { name: "Arab Saudi (Yanbu)", lon: 37.98, lat: 23.95, radius: 4.5, fill: "#ffffff" },
  { name: "Arab Saudi (Jizan)", lon: 42.53, lat: 16.88, radius: 4.5, fill: "#ffffff" },
  { name: "Arab Saudi (Dammam)", lon: 50.15, lat: 26.50, radius: 4.5, fill: "#ffffff" },
"""

if target in content:
    new_content = content.replace(target, saudi_hubs + target)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Saudi hubs restored successfully.")
else:
    print("Target for injection not found.")
