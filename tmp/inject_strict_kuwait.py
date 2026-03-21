import sys
import re

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Locate the anchor right after Korea Selatan (Busan coord)
anchor_start = """        { lon: 129.04, lat: 35.10 }  // Busan
      ]
    },"""

anchor_end = """  }, "India (Mumbai)": {"""

if anchor_start not in content:
    print("Could not find anchor_start (Korea Selatan end)")
    sys.exit(1)

if anchor_end not in content:
    print("Could not find anchor_end (India Mumbai start)")
    sys.exit(1)

# Extract everything between anchor_start and anchor_end to replace it
# We want to replace everything AFTER the anchor_start's comma up to BEFORE anchor_end

split1 = content.split(anchor_start)
if len(split1) < 2:
    print("Split 1 failed")
    sys.exit(1)

remainder = split1[1]
split2 = remainder.split(anchor_end)
if len(split2) < 2:
    print("Split 2 failed")
    sys.exit(1)

# The content to replace is split2[0] (which contains \n    "Bangladesh": { ... \n  })

# Define the new Strict Segments
kuwait_to_colombo = """        { lon: 47.98, lat: 29.37 },
        { lon: 49.50, lat: 28.30 },
        { lon: 51.00, lat: 27.20 },
        { lon: 52.50, lat: 26.30 },
        { lon: 54.00, lat: 25.50 },
        { lon: 55.20, lat: 25.80 },
        { lon: 55.80, lat: 26.30 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.90, lat: 26.10 },
        { lon: 57.50, lat: 25.50 },
        { lon: 58.20, lat: 24.90 },
        { lon: 60.00, lat: 23.50 },
        { lon: 63.50, lat: 21.00 },
        { lon: 68.00, lat: 19.50 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 78.50, lat: 4.90 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 79.86, lat: 6.92 }"""

colombo_to_kolkata = """        { lon: 79.95, lat: 6.20 },
        { lon: 80.20, lat: 5.70 },
        { lon: 80.70, lat: 5.65 },
        { lon: 81.30, lat: 5.90 },
        { lon: 82.10, lat: 6.40 },
        { lon: 82.40, lat: 7.20 },
        { lon: 82.10, lat: 8.50 },
        { lon: 81.50, lat: 10.00 },
        { lon: 81.00, lat: 11.50 },
        { lon: 80.60, lat: 12.50 },
        { lon: 80.27, lat: 13.08 },
        { lon: 82.50, lat: 16.50 },
        { lon: 86.50, lat: 19.50 },
        { lon: 88.10, lat: 21.70 }"""

kolkata_to_bangladesh = """        { lon: 88.50, lat: 21.20 },
        { lon: 90.00, lat: 21.00 },
        { lon: 91.00, lat: 21.50 },
        { lon: 91.80, lat: 22.33 }"""

bangladesh_to_myanmar_utara = """        { lon: 91.80, lat: 22.20 },
        { lon: 91.81, lat: 22.07 },
        { lon: 91.82, lat: 21.94 },
        { lon: 91.84, lat: 21.82 },
        { lon: 91.87, lat: 21.69 },
        { lon: 91.90, lat: 21.58 },
        { lon: 91.93, lat: 21.46 },
        { lon: 91.98, lat: 21.34 },
        { lon: 92.02, lat: 21.23 },
        { lon: 92.07, lat: 21.12 },
        { lon: 92.13, lat: 21.01 },
        { lon: 92.20, lat: 20.91 },
        { lon: 92.26, lat: 20.80 },
        { lon: 92.34, lat: 20.70 },
        { lon: 92.42, lat: 20.60 },
        { lon: 92.50, lat: 20.51 },
        { lon: 92.59, lat: 20.42 },
        { lon: 92.69, lat: 20.32 },
        { lon: 92.79, lat: 20.24 },
        { lon: 92.90, lat: 20.15 }"""

myanmar_utara_to_selatan = """        { lon: 92.70, lat: 19.60 },
        { lon: 92.55, lat: 19.10 },
        { lon: 92.50, lat: 18.50 },
        { lon: 92.65, lat: 17.80 },
        { lon: 93.00, lat: 17.20 },
        { lon: 93.40, lat: 16.40 },
        { lon: 93.80, lat: 15.80 },
        { lon: 94.20, lat: 15.50 },
        { lon: 94.70, lat: 15.55 },
        { lon: 95.20, lat: 15.40 },
        { lon: 95.80, lat: 15.40 },
        { lon: 96.20, lat: 15.40 },
        { lon: 96.20, lat: 16.75 }"""

kuwait_to_hongkong_trunk = """        { lon: 47.98, lat: 29.37 },
        { lon: 49.50, lat: 28.30 },
        { lon: 51.00, lat: 27.20 },
        { lon: 52.50, lat: 26.30 },
        { lon: 54.00, lat: 25.50 },
        { lon: 55.20, lat: 25.80 },
        { lon: 55.80, lat: 26.30 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.90, lat: 26.10 },
        { lon: 57.50, lat: 25.50 },
        { lon: 58.20, lat: 24.90 },
        { lon: 60.00, lat: 23.50 },
        { lon: 63.50, lat: 21.00 },
        { lon: 68.00, lat: 19.50 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 78.50, lat: 4.90 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 92.00, lat: 6.20 },
        { lon: 94.80, lat: 6.50 },
        { lon: 95.00, lat: 6.50 },
        { lon: 97.50, lat: 7.70 },
        { lon: 98.39, lat: 7.88 },
        { lon: 98.80, lat: 7.50 },
        { lon: 99.50, lat: 6.20 },
        { lon: 100.50, lat: 4.80 },
        { lon: 100.40, lat: 4.20 },
        { lon: 100.80, lat: 3.50 },
        { lon: 101.35, lat: 3.00 },
        { lon: 101.80, lat: 2.20 },
        { lon: 102.70, lat: 1.40 },
        { lon: 103.85, lat: 1.25 },
        { lon: 104.50, lat: 1.80 },
        { lon: 106.00, lat: 4.00 },
        { lon: 108.50, lat: 7.50 },
        { lon: 111.50, lat: 11.50 },
        { lon: 114.30, lat: 15.30 },
        { lon: 116.50, lat: 19.00 },
        { lon: 115.50, lat: 20.50 },
        { lon: 114.15, lat: 22.25 }"""

kuwait_to_taiwan_trunk = """        { lon: 47.98, lat: 29.37 },
        { lon: 49.50, lat: 28.30 },
        { lon: 51.00, lat: 27.20 },
        { lon: 52.50, lat: 26.30 },
        { lon: 54.00, lat: 25.50 },
        { lon: 55.20, lat: 25.80 },
        { lon: 55.80, lat: 26.30 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.90, lat: 26.10 },
        { lon: 57.50, lat: 25.50 },
        { lon: 58.20, lat: 24.90 },
        { lon: 60.00, lat: 23.50 },
        { lon: 63.50, lat: 21.00 },
        { lon: 68.00, lat: 19.50 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 78.50, lat: 4.90 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 92.00, lat: 6.20 },
        { lon: 94.80, lat: 6.50 },
        { lon: 95.00, lat: 6.50 },
        { lon: 97.50, lat: 7.70 },
        { lon: 98.39, lat: 7.88 },
        { lon: 98.80, lat: 7.50 },
        { lon: 99.50, lat: 6.20 },
        { lon: 100.50, lat: 4.80 },
        { lon: 100.40, lat: 4.20 },
        { lon: 100.80, lat: 3.50 },
        { lon: 101.35, lat: 3.00 },
        { lon: 101.80, lat: 2.20 },
        { lon: 102.70, lat: 1.40 },
        { lon: 103.85, lat: 1.25 },
        { lon: 104.50, lat: 1.80 },
        { lon: 106.00, lat: 4.00 },
        { lon: 108.50, lat: 7.50 },
        { lon: 111.50, lat: 11.50 },
        { lon: 114.30, lat: 15.30 },
        { lon: 116.50, lat: 19.00 },
        { lon: 118.20, lat: 21.80 },
        { lon: 120.30, lat: 22.62 }"""

kuwait_to_shanghai_trunk = """        { lon: 47.98, lat: 29.37 },
        { lon: 49.50, lat: 28.30 },
        { lon: 51.00, lat: 27.20 },
        { lon: 52.50, lat: 26.30 },
        { lon: 54.00, lat: 25.50 },
        { lon: 55.20, lat: 25.80 },
        { lon: 55.80, lat: 26.30 },
        { lon: 56.40, lat: 26.65 },
        { lon: 56.90, lat: 26.10 },
        { lon: 57.50, lat: 25.50 },
        { lon: 58.20, lat: 24.90 },
        { lon: 60.00, lat: 23.50 },
        { lon: 63.50, lat: 21.00 },
        { lon: 68.00, lat: 19.50 },
        { lon: 72.85, lat: 19.00 },
        { lon: 73.20, lat: 10.50 },
        { lon: 74.50, lat: 7.20 },
        { lon: 76.50, lat: 5.50 },
        { lon: 78.50, lat: 4.90 },
        { lon: 81.00, lat: 4.80 },
        { lon: 85.00, lat: 5.15 },
        { lon: 89.00, lat: 5.80 },
        { lon: 92.00, lat: 6.20 },
        { lon: 94.80, lat: 6.50 },
        { lon: 95.00, lat: 6.50 },
        { lon: 97.50, lat: 7.70 },
        { lon: 98.39, lat: 7.88 },
        { lon: 98.80, lat: 7.50 },
        { lon: 99.50, lat: 6.20 },
        { lon: 100.50, lat: 4.80 },
        { lon: 100.40, lat: 4.20 },
        { lon: 100.80, lat: 3.50 },
        { lon: 101.35, lat: 3.00 },
        { lon: 101.80, lat: 2.20 },
        { lon: 102.70, lat: 1.40 },
        { lon: 103.85, lat: 1.25 },
        { lon: 104.50, lat: 1.80 },
        { lon: 106.00, lat: 4.00 },
        { lon: 108.50, lat: 7.50 },
        { lon: 111.50, lat: 11.50 },
        { lon: 114.30, lat: 15.30 },
        { lon: 116.50, lat: 19.00 },
        { lon: 118.20, lat: 21.80 },
        { lon: 119.50, lat: 23.80 },
        { lon: 120.80, lat: 25.50 },
        { lon: 122.00, lat: 27.50 },
        { lon: 122.60, lat: 29.50 },
        { lon: 121.50, lat: 31.20 }"""

kuwait_to_busan_trunk = kuwait_to_shanghai_trunk + """,
        { lon: 123.00, lat: 31.00 },
        { lon: 125.00, lat: 30.80 },
        { lon: 126.50, lat: 33.00 },
        { lon: 129.04, lat: 35.10 }"""

r_bangladesh = f"""    "Bangladesh": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_colombo},
{colombo_to_kolkata},
{kolkata_to_bangladesh}
      ]
    }}"""

r_myanmar = f"""    "Myanmar (Selatan)": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_colombo},
{colombo_to_kolkata},
{kolkata_to_bangladesh},
{bangladesh_to_myanmar_utara},
{myanmar_utara_to_selatan}
      ]
    }}"""

r_hainan = f"""    "Hainan": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_hongkong_trunk},
        {{ lon: 113.50, lat: 21.50 }},
        {{ lon: 112.00, lat: 20.50 }},
        {{ lon: 110.70, lat: 19.40 }}
      ]
    }}"""

# Use Filipina (Utara)
r_filipina = f"""    "Filipina (Utara)": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_taiwan_trunk},
        {{ lon: 120.80, lat: 20.50 }},
        {{ lon: 121.00, lat: 18.30 }}
      ]
    }}"""

r_korut = f"""    "Korea Utara": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_shanghai_trunk},
        {{ lon: 122.50, lat: 31.50 }},
        {{ lon: 123.00, lat: 34.20 }},
        {{ lon: 122.50, lat: 37.50 }},
        {{ lon: 121.00, lat: 38.20 }},
        {{ lon: 119.50, lat: 38.50 }},
        {{ lon: 117.70, lat: 38.98 }},
        {{ lon: 119.50, lat: 38.50 }},
        {{ lon: 121.50, lat: 38.40 }},
        {{ lon: 123.50, lat: 38.50 }},
        {{ lon: 125.40, lat: 38.74 }}
      ]
    }}"""

r_rusia = f"""    "Rusia (Vladivostok)": {{
      color: "#f59e0b",
      coords: [
{kuwait_to_busan_trunk},
        {{ lon: 129.50, lat: 35.50 }},
        {{ lon: 130.00, lat: 38.00 }},
        {{ lon: 131.00, lat: 41.00 }},
        {{ lon: 131.90, lat: 43.10 }}
      ]
    }}"""

new_dump = ",\n".join([r_bangladesh, r_myanmar, r_hainan, r_filipina, r_korut, r_rusia])

new_segment = f"""\n{new_dump}\n"""

final_text = split1[0] + anchor_start + new_segment + anchor_end + split2[1]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(final_text)

print("Strict regional injection completed effectively.")
