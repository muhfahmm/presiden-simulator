import sys

filepath = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(filepath, 'r', encoding='utf-8') as f:
    text = f.read()

# Define the new Bahrain block
bahrain_block = """  "Bahrain": {
    "India (Mumbai)": {
      color: "#f59e0b",
      coords: [
        { lon: 50.58, lat: 26.22 },
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
        { lon: 72.85, lat: 19.00 }
      ]
    },
    "Sri Lanka (Colombo)": {
      color: "#f59e0b",
      coords: [
        { lon: 50.58, lat: 26.22 },
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
        { lon: 77.80, lat: 5.80 },
        { lon: 79.00, lat: 6.60 },
        { lon: 79.86, lat: 6.92 }
      ]
    }
  }"""

if "};" not in text:
    print("Could not find end of export object.")
    sys.exit(1)

# To append safely before last bracket
text_fixed = text.replace("};\n", ",\n" + bahrain_block + "\n};\n")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(text_fixed)

print("Bahrain routes appended successfully.")
