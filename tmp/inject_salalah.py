import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

additional_route = """,
  "Oman (Salalah)": {
    "Terusan Suez": {
      color: "#f59e0b",
      coords: [
        { lon: 54.10, lat: 17.00 },
        { lon: 52.00, lat: 14.00 },
        { lon: 50.00, lat: 11.80 },
        { lon: 45.00, lat: 12.00 },
        { lon: 43.40, lat: 12.40 },
        { lon: 42.95, lat: 14.80 },
        { lon: 41.00, lat: 15.00 },
        { lon: 38.00, lat: 20.00 },
        { lon: 34.00, lat: 27.50 },
        { lon: 32.53, lat: 29.93 }
      ]
    }
  }"""

idx_end = content.rfind('};')
if idx_end != -1:
    new_content = content[:idx_end].rstrip(',\n ') + additional_route + '\n};\n'
    with open(file_path, 'w', encoding='utf-8') as f:
         f.write(new_content)
    print("Oman (Salalah) route injected successfully.")
else:
    print("Closing variable declaration not found.")
