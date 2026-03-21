import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Routes definition to append
additional_routes = """,
  "Arab Saudi (Yanbu)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 37.98, lat: 23.95 },
        { lon: 36.50, lat: 25.00 },
        { lon: 35.30, lat: 26.00 },
        { lon: 34.00, lat: 27.50 },
        { lon: 32.53, lat: 29.93 }
      ]
    }
  },
  "Arab Saudi (Jeddah)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 39.18, lat: 21.48 },
        { lon: 38.00, lat: 22.50 },
        { lon: 36.50, lat: 24.50 },
        { lon: 35.30, lat: 26.00 },
        { lon: 34.00, lat: 27.50 },
        { lon: 32.53, lat: 29.93 }
      ]
    }
  }"""

# Find closing dictionary brace
idx_end = content.rfind('};')
if idx_end != -1:
    new_content = content[:idx_end].rstrip(',\n ') + additional_routes + '\n};\n'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Routes appended successfully for Yanbu and Jeddah.")
else:
    print("Closing variable declaration not found.")
