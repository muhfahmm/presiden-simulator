import os
import re
import random

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
template_path = os.path.join(base_dir, "asia", "afganistan.ts")

with open(template_path, 'r', encoding='utf-8') as f:
    template_content = f.read()

def randomize_values(m):
    key = m.group(1)
    if key in ["power_grid", "road_quality", "internet_coverage", "tech_stack", "water_access", "literacy", "healthcare_index", "security_index", "satisfaction", "readiness", "public_trust", "literacy", "corruption_index"]:
        return f'"{key}": {random.randint(50, 95)},'
    if key in ["personnel"]:
        return f'"{key}": {random.randint(5000, 30000)},'
    if key in ["hospital_beds"] or key.endswith("fleet"):
         return f'"{key}": {random.randint(500, 10000)},'
    return f'"{key}": {random.randint(1, 40)},'

def process_file(filepath):
    if os.path.basename(filepath) in ["index.ts", "_index.ts"]:
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        file_content = f.read()
        
    # Extract
    match_en = re.search(r'"name_en":\s*"(.*?)",', file_content)
    match_id = re.search(r'"name_id":\s*"(.*?)",', file_content)
    match_capital = re.search(r'"capital":\s*"(.*?)",', file_content)
    
    match_lon = re.search(r'"lon":\s*(-?\d+\.?\d*),', file_content)
    match_lat = re.search(r'"lat":\s*(-?\d+\.?\d*),', file_content)
    match_flag = re.search(r'"flag":\s*"(.*?)",', file_content)
    match_pop = re.search(r'"pop":\s*"(.*?)",', file_content)
    
    if not (match_en and match_id and match_capital):
         print(f"Skipping {filepath} (core metadata missing)")
         return
         
    name_en = match_en.group(1)
    name_id = match_id.group(1)
    capital = match_capital.group(1)
    lon = match_lon.group(1) if match_lon else "0"
    lat = match_lat.group(1) if match_lat else "0"
    flag = match_flag.group(1) if match_flag else "🗺️"
    pop = match_pop.group(1) if match_pop else "10M"
    
    var_name = os.path.splitext(os.path.basename(filepath))[0]
    
    content = template_content
    content = re.sub(r'export const afganistan: CountryData =', f'export const {var_name}: CountryData =', content)
    content = re.sub(r'"name_en": ".*?",', f'"name_en": "{name_en}",', content)
    content = re.sub(r'"capital": ".*?",', f'"capital": "{capital}",', content)
    content = re.sub(r'"name_id": ".*?",', f'"name_id": "{name_id}",', content)
    content = re.sub(r'"lon": -?\d+,', f'"lon": {lon},', content)
    content = re.sub(r'"lat": -?\d+,', f'"lat": {lat},', content)
    content = re.sub(r'"flag": ".*?",', f'"flag": "{flag}",', content)
    content = re.sub(r'"pop": ".*?",', f'"pop": "{pop}",', content)
    
    budget_val = f"Rp {random.randint(100, 800)} T"
    income_val = f"Rp {random.randint(200, 1000)} T"
    content = re.sub(r'"budget":\s*"Rp \d+ T",', f'"budget": "{budget_val}",', content, count=1)
    content = re.sub(r'"income":\s*"Rp \d+ T",', f'"income": "{income_val}",', content, count=1)
    
    parts = content.split('"infrastructure":', 1)
    if len(parts) == 2:
         rand_part = re.sub(r'"(\w+)":\s*(\d+)\s*,', randomize_values, parts[1])
         content = parts[0] + '"infrastructure":' + rand_part
         
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Unified: {filepath}")

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and os.path.basename(file) not in ["index.ts", "_index.ts"]:
            process_file(os.path.join(root, file))

print("All files processed.")
