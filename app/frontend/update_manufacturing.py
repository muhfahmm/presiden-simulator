import os
import re

# Directory mapping
base_dir = r"c:\fhm\em\app\frontend\src\app\database\data\semua_fitur_negara\1_produksi\3_manufaktur"
continents = ["afrika", "asia", "eropa", "na", "oceania", "sa"]

# Required keys in order
required_keys = [
    "semikonduktor",
    "mobil",
    "sepeda_motor",
    "smelter",
    "semen_beton",
    "kayu",
    "pupuk"
]

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract variable name
        var_match = re.search(r'export const (\w+) =', content)
        if not var_match:
            return
        var_name = var_match.group(1)

        # Extract existing values
        values = {}
        # Simple extraction for "key": value OR key: value
        for m in re.finditer(r'["\']?(\w+)["\']?\s*:\s*(\d+)', content):
            key, val = m.groups()
            values[key] = int(val)

        # Special handling for "sepeda_motor" if it was written as "sepeda_motor" (quoted)
        # The regex above handles it.
        
        # Ensure pupuk exists
        if "pupuk" not in values:
            values["pupuk"] = 15 # Default value

        # Mapping for output (standardized keys)
        output_values = {
            "semikonduktor": values.get("semikonduktor", 0),
            "mobil": values.get("mobil", 0),
            "sepeda_motor": values.get("sepeda_motor", 0),
            "smelter": values.get("smelter", 0),
            "semen_beton": values.get("semen_beton", 0),
            "kayu": values.get("kayu", 0),
            "pupuk": values.get("pupuk", 15)
        }

        # Create new content
        new_content = f'export const {var_name} = {{\n'
        new_content += f'  "semikonduktor": {output_values["semikonduktor"]},\n'
        new_content += f'  "mobil": {output_values["mobil"]},\n'
        new_content += f'  "sepeda_motor": {output_values["sepeda_motor"]},\n'
        new_content += f'  "smelter": {output_values["smelter"]},\n'
        new_content += f'  "semen_beton": {output_values["semen_beton"]},\n'
        new_content += f'  "kayu": {output_values["kayu"]},\n'
        new_content += f'  "pupuk": {output_values["pupuk"]}\n'
        new_content += '} as const;\n'

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    count = 0
    for continent in continents:
        continent_path = os.path.join(base_dir, continent)
        if not os.path.exists(continent_path):
            continue
        
        for filename in os.listdir(continent_path):
            if filename.endswith(".ts"):
                file_path = os.path.join(continent_path, filename)
                process_file(file_path)
                count += 1
    print(f"Successfully processed {count} files.")

if __name__ == "__main__":
    main()
