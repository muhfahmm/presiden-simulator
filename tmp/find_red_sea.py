import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

target_seq = """        { lon: 42.95, lat: 14.80 },
        { lon: 41.00, lat: 15.00 },
        { lon: 38.00, lat: 20.00 },
        { lon: 34.00, lat: 27.50 }"""

num_matches = content.count(target_seq)
print(f"Target sequence found '{num_matches}' times.")

target_seq2 = """        { lon: 41.00, lat: 15.00 },
        { lon: 38.00, lat: 20.00 },
        { lon: 34.00, lat: 27.50 }"""

num_matches2 = content.count(target_seq2)
print(f"Target sequence 2 found '{num_matches2}' times.")
