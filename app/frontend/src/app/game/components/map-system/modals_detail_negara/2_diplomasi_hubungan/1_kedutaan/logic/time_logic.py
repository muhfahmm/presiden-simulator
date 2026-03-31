"""
Logika Waktu Pembangunan Kedutaan Besar Berbasis Wilayah (Sub-Region)
=====================================================================
Waktu Dasar (Hari Game):
  - Wilayah yang sama (misal: Asia Tenggara -> Asia Tenggara): 10 Hari (MINIMAL)
  - Benua sama, wilayah tetangga (misal: Asia Tenggara -> Asia Timur): 20 Hari
  - Benua sama, wilayah jauh (misal: Asia Tenggara -> Timur Tengah): 40 Hari
  - Benua berbeda (Antar-Benua): 60 Hari

Usage:
  python time_logic.py <user_region> <target_region> <user_continent> <target_continent>
"""

import sys
import json

def calculate_regional_time(user_region: str, target_region: str, user_cont: str, target_cont: str) -> dict:
    # Aturan Waktu (Dalam Hari)
    TIME_SAME_REGION = 10
    TIME_NEIGHBOR_REGION = 20
    TIME_DISTANT_REGION = 40
    TIME_CROSS_CONTINENT = 60

    final_time = TIME_CROSS_CONTINENT
    details = f"Lintas Benua ({user_cont} → {target_cont})"

    if user_cont == target_cont:
        if user_region == target_region:
            final_time = TIME_SAME_REGION
            details = f"Dalam Wilayah yang Sama ({user_region})"
        else:
            # Logika Kedekatan Wilayah (Sederhana)
            neighbors = {
                "Asia Tenggara": ["Asia Timur", "Oceania", "Asia Selatan"],
                "Asia Timur": ["Asia Tenggara", "Asia Tengah"],
                "Timur Tengah": ["Asia Barat", "Afrika Utara", "Eropa Selatan"],
                "Eropa Barat": ["Eropa Utara", "Eropa Selatan"],
                "Amerika Utara": ["Amerika Tengah"],
            }

            if target_region in neighbors.get(user_region, []):
                final_time = TIME_NEIGHBOR_REGION
                details = f"Wilayah Tetangga ({user_region} → {target_region})"
            else:
                final_time = TIME_DISTANT_REGION
                details = f"Wilayah Berbeda dalam Satu Benua ({user_region} → {target_region})"

    return {
        "final_time": final_time,
        "details": details,
        "region_info": {
            "user": user_region,
            "target": target_region
        }
    }

if __name__ == "__main__":
    u_reg = sys.argv[1] if len(sys.argv) > 1 else "Global"
    t_reg = sys.argv[2] if len(sys.argv) > 2 else "Global"
    u_cont = sys.argv[3] if len(sys.argv) > 3 else "Global"
    t_cont = sys.argv[4] if len(sys.argv) > 4 else "Global"

    result = calculate_regional_time(u_reg, t_reg, u_cont, t_cont)
    print(json.dumps(result))
