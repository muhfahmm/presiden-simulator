import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

target = """        { lon: 129.04, lat: 35.10 }  // Busan
      ]
    }
  }, "India (Mumbai)": {"""

if target not in content:
    print("Could not find exact position of Korea Selatan closing")
    sys.exit(1)

trunk_mumbai_to_malacca = """        { lon: 47.98, lat: 29.37 },
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
        { lon: 92.00, lat: 6.20 }"""

# Bangladesh Branches at 92.00, 6.20
bangladesh_route = f"""    "Bangladesh": {{
      color: "#f59e0b",
      coords: [
{trunk_mumbai_to_malacca},
        {{ lon: 91.80, lat: 22.33 }}
      ]
    }}"""

# Myanmar (Selatan) Branches at 95.00, 6.50
trunk_to_95 = trunk_mumbai_to_malacca + """,
        { lon: 94.80, lat: 6.50 },
        { lon: 95.00, lat: 6.50 }"""

myanmar_route = f"""    "Myanmar (Selatan)": {{
      color: "#f59e0b",
      coords: [
{trunk_to_95},
        {{ lon: 96.20, lat: 16.75 }}
      ]
    }}"""

# Hainan & Filipina Branch inside South China Sea past Singapore
trunk_to_singapore = trunk_to_95 + """,
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
        { lon: 103.85, lat: 1.25 }"""

trunk_past_singapore = trunk_to_singapore + """,
        { lon: 104.50, lat: 1.80 },
        { lon: 106.00, lat: 4.00 },
        { lon: 108.50, lat: 7.50 }"""

# Hainan Branches at 111.50, 11.50
trunk_to_hainan_branch = trunk_past_singapore + """,
        { lon: 111.50, lat: 11.50 }"""

hainan_route = f"""    "Hainan": {{
      color: "#f59e0b",
      coords: [
{trunk_to_hainan_branch},
        {{ lon: 110.70, lat: 19.40 }}
      ]
    }}"""

# Filipina Branches at 114.30, 15.30
trunk_to_filipina_branch = trunk_to_hainan_branch + """,
        { lon: 114.30, lat: 15.30 }"""

filipina_route = f"""    "Filipina": {{
      color: "#f59e0b",
      coords: [
{trunk_to_filipina_branch},
        {{ lon: 120.20, lat: 14.80 }}
      ]
    }}"""

# Korea Utara Branches from Shanghai
trunk_to_shanghai_branch = trunk_to_filipina_branch + """,
        { lon: 116.50, lat: 19.00 },
        { lon: 118.20, lat: 21.80 },
        { lon: 119.50, lat: 23.80 },
        { lon: 120.80, lat: 25.50 },
        { lon: 122.00, lat: 27.50 },
        { lon: 122.60, lat: 29.50 },
        { lon: 121.50, lat: 31.20 }"""

korut_route = f"""    "Korea Utara": {{
      color: "#f59e0b",
      coords: [
{trunk_to_shanghai_branch},
        {{ lon: 122.50, lat: 34.00 }},
        {{ lon: 124.00, lat: 36.50 }},
        {{ lon: 125.40, lat: 38.74 }}
      ]
    }}"""

# Rusia Branches from Busan
trunk_to_busan = trunk_to_shanghai_branch + """,
        { lon: 123.00, lat: 31.00 },
        { lon: 125.00, lat: 30.80 },
        { lon: 126.50, lat: 33.00 },
        { lon: 129.04, lat: 35.10 }"""

rusia_route = f"""    "Rusia (Vladivostok)": {{
      color: "#f59e0b",
      coords: [
{trunk_to_busan},
        {{ lon: 130.50, lat: 37.50 }},
        {{ lon: 131.50, lat: 40.00 }},
        {{ lon: 131.90, lat: 43.10 }}
      ]
    }}"""

new_content_inject = ",\n".join([bangladesh_route, myanmar_route, hainan_route, filipina_route, korut_route, rusia_route])

replacement = f"""        {{ lon: 129.04, lat: 35.10 }}  // Busan
      ]
    }},
{new_content_inject}
  }}, "India (Mumbai)": {{"""

content_new = content.replace(target, replacement)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content_new)

print("Injected secondary Asian routes successfully.")
