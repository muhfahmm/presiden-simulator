import os
import re

# Database of realistic military stats (Global Firepower 2024 approximation)
# Values represent total strength (Power Index factors)
military_data = {
    "united_states": {
        "barak": 133, "tank_tempur_utama": 4650, "apc_ifv": 45000, "artileri_berat": 2500, 
        "sistem_peluncur_roket": 1366, "pertahanan_udara_mobile": 800, "kendaraan_taktis": 15000,
        "kapal_induk": 0, "kapal_induk_nuklir": 11, "kapal_destroyer": 92, "kapal_korvet": 0, 
        "kapal_selam_nuklir": 71, "kapal_selam_regular": 0, "kapal_ranjau": 8, "kapal_logistik": 30,
        "jet_tempur_siluman": 450, "jet_tempur_interceptor": 1914, "pesawat_pengebom": 150, 
        "helikopter_serang": 900, "pesawat_pengintai": 600, "drone_intai_uav": 1500, "drone_kamikaze": 5000, "pesawat_angkut": 900
    },
    "china": {
        "barak": 203, "tank_tempur_utama": 5000, "apc_ifv": 35000, "artileri_berat": 7000, 
        "sistem_peluncur_roket": 3000, "pertahanan_udara_mobile": 1200, "kendaraan_taktis": 10000,
        "kapal_induk": 2, "kapal_induk_nuklir": 0, "kapal_destroyer": 50, "kapal_korvet": 70, 
        "kapal_selam_nuklir": 12, "kapal_selam_regular": 60, "kapal_ranjau": 30, "kapal_logistik": 60,
        "jet_tempur_siluman": 150, "jet_tempur_interceptor": 1200, "pesawat_pengebom": 120, 
        "helikopter_serang": 300, "pesawat_pengintai": 100, "drone_intai_uav": 1500, "drone_kamikaze": 4000, "pesawat_angkut": 300
    },
    "russia": {
        "barak": 132, "tank_tempur_utama": 14777, "apc_ifv": 30000, "artileri_berat": 10000, 
        "sistem_peluncur_roket": 3300, "pertahanan_udara_mobile": 1500, "kendaraan_taktis": 8000,
        "kapal_induk": 1, "kapal_induk_nuklir": 0, "kapal_destroyer": 15, "kapal_korvet": 80, 
        "kapal_selam_nuklir": 29, "kapal_selam_regular": 35, "kapal_ranjau": 40, "kapal_logistik": 50,
        "jet_tempur_siluman": 20, "jet_tempur_interceptor": 800, "pesawat_pengebom": 130, 
        "helikopter_serang": 500, "pesawat_pengintai": 100, "drone_intai_uav": 2000, "drone_kamikaze": 3000, "pesawat_angkut": 400
    },
    "india": {
        "barak": 145, "tank_tempur_utama": 4614, "apc_ifv": 8500, "artileri_berat": 4000, 
        "sistem_peluncur_roket": 1500, "pertahanan_udara_mobile": 500, "kendaraan_taktis": 2000,
        "kapal_induk": 2, "kapal_induk_nuklir": 0, "kapal_destroyer": 12, "kapal_korvet": 18, 
        "kapal_selam_nuklir": 1, "kapal_selam_regular": 16, "kapal_ranjau": 0, "kapal_logistik": 15,
        "jet_tempur_siluman": 0, "jet_tempur_interceptor": 600, "pesawat_pengebom": 250, 
        "helikopter_serang": 40, "pesawat_pengintai": 70, "drone_intai_uav": 100, "drone_kamikaze": 500, "pesawat_angkut": 250
    },
    "south_korea": {
        "barak": 60, "tank_tempur_utama": 2501, "apc_ifv": 6600, "artileri_berat": 5000, 
        "sistem_peluncur_roket": 600, "pertahanan_udara_mobile": 300, "kendaraan_taktis": 2000,
        "kapal_induk": 0, "kapal_induk_nuklir": 0, "kapal_destroyer": 13, "kapal_korvet": 10, 
        "kapal_selam_nuklir": 0, "kapal_selam_regular": 22, "kapal_ranjau": 11, "kapal_logistik": 20,
        "jet_tempur_siluman": 40, "jet_tempur_interceptor": 400, "pesawat_pengebom": 0, 
        "helikopter_serang": 112, "pesawat_pengintai": 30, "drone_intai_uav": 100, "drone_kamikaze": 200, "pesawat_angkut": 40
    },
    "united_kingdom": {
        "barak": 19, "tank_tempur_utama": 213, "apc_ifv": 5000, "artileri_berat": 200, 
        "sistem_peluncur_roket": 42, "pertahanan_udara_mobile": 40, "kendaraan_taktis": 1500,
        "kapal_induk": 2, "kapal_induk_nuklir": 0, "kapal_destroyer": 6, "kapal_korvet": 0, 
        "kapal_selam_nuklir": 10, "kapal_selam_regular": 0, "kapal_ranjau": 11, "kapal_logistik": 20,
        "jet_tempur_siluman": 30, "jet_tempur_interceptor": 120, "pesawat_pengebom": 0, 
        "helikopter_serang": 50, "pesawat_pengintai": 20, "drone_intai_uav": 50, "drone_kamikaze": 100, "pesawat_angkut": 40
    },
    "france": {
        "barak": 20, "tank_tempur_utama": 222, "apc_ifv": 6000, "artileri_berat": 100, 
        "sistem_peluncur_roket": 13, "pertahanan_udara_mobile": 40, "kendaraan_taktis": 1500,
        "kapal_induk": 1, "kapal_induk_nuklir": 0, "kapal_destroyer": 10, "kapal_korvet": 0, 
        "kapal_selam_nuklir": 10, "kapal_selam_regular": 0, "kapal_ranjau": 17, "kapal_logistik": 20,
        "jet_tempur_siluman": 0, "jet_tempur_interceptor": 230, "pesawat_pengebom": 0, 
        "helikopter_serang": 70, "pesawat_pengintai": 40, "drone_intai_uav": 50, "drone_kamikaze": 100, "pesawat_angkut": 100
    },
    "japan": {
        "barak": 25, "tank_tempur_utama": 518, "apc_ifv": 3000, "artileri_berat": 500, 
        "sistem_peluncur_roket": 99, "pertahanan_udara_mobile": 100, "kendaraan_taktis": 1000,
        "kapal_induk": 4, "kapal_induk_nuklir": 0, "kapal_destroyer": 36, "kapal_korvet": 0, 
        "kapal_selam_nuklir": 0, "kapal_selam_regular": 22, "kapal_ranjau": 22, "kapal_logistik": 25,
        "jet_tempur_siluman": 30, "jet_tempur_interceptor": 250, "pesawat_pengebom": 0, 
        "helikopter_serang": 119, "pesawat_pengintai": 150, "drone_intai_uav": 50, "drone_kamikaze": 100, "pesawat_angkut": 60
    },
    "indonesia": {
        "barak": 40, "tank_tempur_utama": 313, "apc_ifv": 1200, "artileri_berat": 600, 
        "sistem_peluncur_roket": 63, "pertahanan_udara_mobile": 40, "kendaraan_taktis": 500,
        "kapal_induk": 0, "kapal_induk_nuklir": 0, "kapal_destroyer": 0, "kapal_korvet": 24, 
        "kapal_selam_nuklir": 0, "kapal_selam_regular": 4, "kapal_ranjau": 10, "kapal_logistik": 30,
        "jet_tempur_siluman": 0, "jet_tempur_interceptor": 108, "pesawat_pengebom": 0, 
        "helikopter_serang": 15, "pesawat_pengintai": 5, "drone_intai_uav": 20, "drone_kamikaze": 50, "pesawat_angkut": 54
    },
    "israel": {
        "barak": 17, "tank_tempur_utama": 2200, "apc_ifv": 56000, "artileri_berat": 1000, 
        "sistem_peluncur_roket": 300, "pertahanan_udara_mobile": 100, "kendaraan_taktis": 5000,
        "kapal_induk": 0, "kapal_induk_nuklir": 0, "kapal_destroyer": 0, "kapal_korvet": 7, 
        "kapal_selam_nuklir": 0, "kapal_selam_regular": 6, "kapal_ranjau": 0, "kapal_logistik": 10,
        "jet_tempur_siluman": 39, "jet_tempur_interceptor": 200, "pesawat_pengebom": 0, 
        "helikopter_serang": 48, "pesawat_pengintai": 30, "drone_intai_uav": 150, "drone_kamikaze": 1000, "pesawat_angkut": 15
    },
}

# The template pattern to replace
def migrate_file(filepath, country_key):
    # Mapping to handle Indonesian filenames
    normalized_key = country_key.replace(" ", "_").lower().strip()
    
    target_stats = None
    if normalized_key == "amerika_serikat": target_stats = military_data["united_states"]
    elif "china" in normalized_key or "tiongkok" in normalized_key: target_stats = military_data["china"]
    elif "rusia" in normalized_key: target_stats = military_data["russia"]
    elif "india" in normalized_key: target_stats = military_data["india"]
    elif "korea_selatan" in normalized_key: target_stats = military_data["south_korea"]
    elif "inggris" in normalized_key: target_stats = military_data["united_kingdom"]
    elif "prancis" in normalized_key: target_stats = military_data["france"]
    elif "jepang" in normalized_key: target_stats = military_data["japan"]
    elif "indonesia" in normalized_key: target_stats = military_data["indonesia"]
    elif "israel" in normalized_key: target_stats = military_data["israel"]
    elif normalized_key in military_data: target_stats = military_data[normalized_key]

    if not target_stats:
        # Realistic defaults for minor powers
        target_stats = {
            "barak": 2, "tank_tempur_utama": 0, "apc_ifv": 20, "artileri_berat": 4, 
            "sistem_peluncur_roket": 0, "pertahanan_udara_mobile": 0, "kendaraan_taktis": 10,
            "kapal_induk": 0, "kapal_induk_nuklir": 0, "kapal_destroyer": 0, "kapal_korvet": 0, 
            "kapal_selam_nuklir": 0, "kapal_selam_regular": 0, "kapal_ranjau": 0, "kapal_logistik": 2,
            "jet_tempur_siluman": 0, "jet_tempur_interceptor": 8, "pesawat_pengebom": 0, 
            "helikopter_serang": 2, "pesawat_pengintai": 0, "drone_intai_uav": 2, "drone_kamikaze": 10, "pesawat_angkut": 2
        }

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic replace pattern for the structure using regex
    # Added extra flexibility for whitespace and quotes
    def replace_val(pattern_key, val, text):
        return re.sub(fr'\"{pattern_key}\":\s*\d+', f'\"{pattern_key}\": {val}', text)

    new_content = replace_val("barak", target_stats["barak"], content)
    new_content = replace_val("tank_tempur_utama", target_stats["tank_tempur_utama"], new_content)
    new_content = replace_val("apc_ifv", target_stats["apc_ifv"], new_content)
    new_content = replace_val("artileri_berat", target_stats["artileri_berat"], new_content)
    new_content = replace_val("sistem_peluncur_roket", target_stats["sistem_peluncur_roket"], new_content)
    new_content = replace_val("pertahanan_udara_mobile", target_stats["pertahanan_udara_mobile"], new_content)
    new_content = replace_val("kendaraan_taktis", target_stats["kendaraan_taktis"], new_content)
    new_content = replace_val("kapal_induk", target_stats["kapal_induk"], new_content)
    new_content = replace_val("kapal_induk_nuklir", target_stats["kapal_induk_nuklir"], new_content)
    new_content = replace_val("kapal_destroyer", target_stats["kapal_destroyer"], new_content)
    new_content = replace_val("kapal_korvet", target_stats["kapal_korvet"], new_content)
    new_content = replace_val("kapal_selam_nuklir", target_stats["kapal_selam_nuklir"], new_content)
    new_content = replace_val("kapal_selam_regular", target_stats["kapal_selam_regular"], new_content)
    new_content = replace_val("kapal_ranjau", target_stats["kapal_ranjau"], new_content)
    new_content = replace_val("kapal_logistik", target_stats["kapal_logistik"], new_content)
    new_content = replace_val("jet_tempur_siluman", target_stats["jet_tempur_siluman"], new_content)
    new_content = replace_val("jet_tempur_interceptor", target_stats["jet_tempur_interceptor"], new_content)
    new_content = replace_val("pesawat_pengebom", target_stats["pesawat_pengebom"], new_content)
    new_content = replace_val("helikopter_serang", target_stats["helikopter_serang"], new_content)
    new_content = replace_val("pesawat_pengintai", target_stats["pesawat_pengintai"], new_content)
    new_content = replace_val("drone_intai_uav", target_stats["drone_intai_uav"], new_content)
    new_content = replace_val("drone_kamikaze", target_stats["drone_kamikaze"], new_content)
    new_content = replace_val("pesawat_angkut", target_stats["pesawat_angkut"], new_content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Scan all directories
base_dir = r"c:\fhm\em\app\frontend\src\app\database\data\semua_fitur_negara\2_pertahanan\3_armada_militer"
updated_count = 0
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".ts") and file != "index.ts":
            # Extract name part: e.g. "152_amerika_serikat.ts" -> "amerika_serikat"
            # Or "67_indonesia.ts" -> "indonesia"
            name_part = file.split("_", 1)[-1].replace(".ts", "")
            try:
                migrate_file(os.path.join(root, file), name_part)
                updated_count += 1
            except Exception as e:
                print(f"Error processing {file}: {e}")

print(f"Successfully updated {updated_count} country files with realistic stats mapping.")
