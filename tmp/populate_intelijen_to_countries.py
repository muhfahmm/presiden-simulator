import os
import re

# Paths
BASE_DIR = r"c:\fhm\em\app\frontend\src\app\database\data\negara\benua\global"
REGIONS = ["afrika", "asia", "eropa", "na", "oceania", "sa"]

for region in REGIONS:
    region_dir = os.path.join(BASE_DIR, region)
    if not os.path.exists(region_dir):
        print(f"Region {region} not found at {region_dir}")
        continue
    
    print(f"Processing region {region}...")
    for filename in os.listdir(region_dir):
        if not filename.endswith(".ts") or filename == "index.ts":
            continue
        
        filepath = os.path.join(region_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        file_id = filename[:-3] # Remove .ts
        # For 67_indonesia, file_id = 67_indonesia
        parts = file_id.split("_")
        if len(parts) < 2:
            continue
        
        country_prefix = parts[0]
        country_name = "_".join(parts[1:])
        
        # import { indonsia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/67_indonesia";
        import_stmt = f"import {{ {country_name}_intelijen }} from \"@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/{region}/{file_id}\";\n"
        
        # Check if already imported
        if f"{country_name}_intelijen" in content:
            print(f"Skipping {filename}: already has intelijen.")
            continue
        
        # Add import at the top (after import { CountryData })
        if "import { CountryData }" in content:
            content = content.replace("import { CountryData } from \"@/app/database/data/semua_fitur_negara\";", 
                                     "import { CountryData } from \"@/app/database/data/semua_fitur_negara\";\n" + import_stmt)
        else:
            content = import_stmt + content
            
        # Add field to the export object
        # export const indonesia: CountryData = {
        pattern = rf"export const {country_name}: CountryData = \{{(.*?)\}};"
        match = re.search(pattern, content, re.DOTALL)
        if match:
            # We want to insert the line, usually near other sektor_ references
            body = match.group(1)
            new_field = f"\n  \"intelijen\": {country_name}_intelijen,"
            # Insert before the last closing brace in the object body
            # Or better, insert after pabrik_militer if found
            if f"\"pabrik_militer\": {country_name}_pabrik" in body:
                body = body.replace(f"\"pabrik_militer\": {country_name}_pabrik,", 
                                     f"\"pabrik_militer\": {country_name}_pabrik,{new_field}")
            else:
                body += new_field
            
            content = content.replace(match.group(1), body)
            
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
            
        print(f"Updated {filename}.")

print("All regions processed.")
