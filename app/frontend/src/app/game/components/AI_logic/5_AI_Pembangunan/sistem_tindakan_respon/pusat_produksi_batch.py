import sys
import json
import os

# ============================================================
# PRODUCTION RATES (Consolidated from all sector scripts)
# ============================================================
RATES = {
    # 1. Kelistrikan (MW)
    "1_pembangkit_listrik_tenaga_nuklir": 3000,
    "2_pembangkit_listrik_tenaga_air": 500,
    "3_pembangkit_listrik_tenaga_surya": 50,
    "4_pembangkit_listrik_tenaga_uap": 1000,
    "5_pembangkit_listrik_tenaga_gas": 1200,
    "6_pembangkit_listrik_tenaga_angin": 150,

    # 2. Mineral / Ekstraksi
    "1_tambang_emas": 150,
    "2_tambang_uranium": 100,
    "3_tambang_batu_bara": 15000,
    "4_sumur_minyak": 25000,
    "5_sumur_gas": 5000,
    "6_tambang_garam": 10000,
    "7_tambang_nikel": 12000,
    "8_tambang_litium": 8000,
    "9_tambang_tembaga": 14000,
    "10_tambang_aluminium": 18000,
    "11_tambang_ltj": 500,
    "12_tambang_bijih_besi": 25000,

    # 3. Manufaktur (Material Dasar)
    "5_pabrik_semen": 95000,      # Beton
    "4_smelter": 35000,           # Baja
    "6_penggergajian_kayu": 32000, # Kayu
    
    # 3. Manufaktur (Produk)
    "1_pabrik_elektronik": 150,
    "2_pabrik_mobil": 5500,
    "3_pabrik_motor": 18000,
    "7_pabrik_pupuk": 42000,

    # 4. Peternakan
    "1_peternakan_unggas": 25000,
    "2_peternakan_sapi_perah": 12000,
    "3_peternakan_sapi_potong": 8000,
    "4_peternakan_domba": 15000,

    # 5. Agrikultur
    "1_perkebunan_padi": 150000,
    "2_perkebunan_gandum": 120000,
    "3_perkebunan_sayur": 80000,
    "4_perkebunan_kedelai": 50000,
    "5_perkebunan_kelapa_sawit": 25000,
    "6_perkebunan_kopi": 15000,

    # 6. Perikanan
    "1_budidaya_udang": 10000,
    "2_penangkapan_ikan": 45000,

    # 7. Olahan Pangan
    "1_pabrik_air_mineral": 80000,
    "2_pabrik_gula": 45000,
    "3_pabrik_roti": 35000,
    "4_pengolahan_daging": 15000,
    "5_pabrik_mie": 60000,

    # 8. Farmasi
    "1_pabrik_obat": 5000,

    # 9. Militer
    "1_pabrik_amunisi": 20000,
}

def calculate_production_batch():
    try:
        # Expecting a list of objects: [{"countryName": "China", "buildings": {...}}, ...]
        input_data = json.load(sys.stdin)
        countries_data = input_data.get("countries", [])
        
        results = {}
        
        for entry in countries_data:
            country_name = entry.get("countryName")
            buildings = entry.get("buildings", {})
            
            if not country_name:
                continue
                
            deltas = {}
            total_mw = 0
            
            for key, rate in RATES.items():
                count = buildings.get(key, 0)
                if count > 0:
                    # Special case for power (MW stays separate or goes into a specific delta)
                    if key.startswith("1_pembangkit") or key in ["3_pembangkit", "4_pembangkit", "5_pembangkit", "6_pembangkit"]:
                         # We don't really 'store' MW stock, we just calculate it
                         total_mw += count * rate
                    else:
                         deltas[key] = count * rate
            
            results[country_name] = {
                "production_deltas": deltas,
                "total_mw": total_mw
            }
            
        return {
            "status": "success",
            "results": results
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    print(json.dumps(calculate_production_batch()))
