import os
import re
import math

root_dir = r"c:\fhm\em\app\frontend\src\app\database\data\semua_fitur_negara\1_pembangunan\2_produksi_militer\1_pabrik_militer"

updated_count = 0

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".ts"):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract drone count
            drone_match = re.search(r'"pabrik_drone_kamikaze":\s*(\d+)', content)
            amunisi_match = re.search(r'"pabrik_amunisi":\s*(\d+)', content)
            
            if not drone_match or not amunisi_match:
                continue
                
            drone = int(drone_match.group(1))
            amunisi = int(amunisi_match.group(1))
            
            if drone > 0:
                v = math.ceil(drone * 0.5)
                h = math.ceil(drone * 0.3)
            elif amunisi > 0:
                v = math.ceil(amunisi * 0.1)
                h = math.ceil(amunisi * 0.05)
            else:
                v = 0
                h = 0
                
            # Ensure at least 1 if they have any military factories
            if (drone > 0 or amunisi > 0):
                if v < 1: v = 1
                if h < 1: h = 1
            
            # Update the values
            # Replace: "pabrik_kendaraan_tempur": 0,
            # Replace: "pabrik_senjata_berat": 0,
            
            new_content = re.sub(r'"pabrik_kendaraan_tempur":\s*0', f'"pabrik_kendaraan_tempur": {v}', content)
            new_content = re.sub(r'"pabrik_senjata_berat":\s*0', f'"pabrik_senjata_berat": {h}', new_content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                updated_count += 1

print(f"Populated values for: {updated_count} files")
