import sys, json

def main():
    try:
        user_region = sys.argv[1] if len(sys.argv) > 1 else "Global"
        target_region = sys.argv[2] if len(sys.argv) > 2 else "Global"
        user_continent = sys.argv[3] if len(sys.argv) > 3 else "Global"
        target_continent = sys.argv[4] if len(sys.argv) > 4 else "Global"

        base_time = 30  # 30 Hari
        multiplier = 1.0
        details = "Konstruksi Standar"

        if user_region == target_region:
            multiplier = 0.5
            details = "Satu Wilayah (Konstruksi Cepat)"
        elif user_continent == target_continent:
            multiplier = 0.8
            details = "Satu Benua (Logistik Efisien)"
        else:
            multiplier = 1.2
            details = "Lintas Benua (Prosedur Kompleks)"

        final_time = int(base_time * multiplier)

        print(json.dumps({
            "base_time": base_time,
            "multiplier": multiplier,
            "final_time": final_time,
            "details": details
        }))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
