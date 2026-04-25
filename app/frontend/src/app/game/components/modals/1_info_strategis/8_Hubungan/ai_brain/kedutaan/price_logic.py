import sys, json

def main():
    try:
        user_ideology = sys.argv[1] if len(sys.argv) > 1 else "Netral"
        target_ideology = sys.argv[2] if len(sys.argv) > 2 else "Netral"
        user_religion = sys.argv[3] if len(sys.argv) > 3 else "Sekuler"
        target_religion = sys.argv[4] if len(sys.argv) > 4 else "Sekuler"
        user_continent = sys.argv[5] if len(sys.argv) > 5 else "Global"
        target_continent = sys.argv[6] if len(sys.argv) > 6 else "Global"

        base_price = 50000000
        multiplier = 1.0
        adjustments = []

        # Ideology Adjustment
        if user_ideology == target_ideology:
            multiplier *= 0.8
            adjustments.append({
                "category": "Ideologi",
                "status": "Sama",
                "change": "-20%",
                "detail": f"Kesamaan ideologi ({user_ideology})"
            })
        else:
            multiplier *= 1.2
            adjustments.append({
                "category": "Ideologi",
                "status": "Berbeda",
                "change": "+20%",
                "detail": "Perbedaan pandangan politik"
            })

        # Religion Adjustment
        if user_religion == target_religion:
            multiplier *= 0.9
            adjustments.append({
                "category": "Agama",
                "status": "Sama",
                "change": "-10%",
                "detail": f"Kesamaan mayoritas agama ({user_religion})"
            })
        else:
            multiplier *= 1.1
            adjustments.append({
                "category": "Agama",
                "status": "Berbeda",
                "change": "+10%",
                "detail": "Perbedaan latar belakang budaya"
            })

        # Continent Adjustment
        if user_continent == target_continent:
            multiplier *= 0.9
            adjustments.append({
                "category": "Wilayah",
                "status": "Sama",
                "change": "-10%",
                "detail": f"Sesama benua {user_continent}"
            })
        else:
            multiplier *= 1.1
            adjustments.append({
                "category": "Wilayah",
                "status": "Berbeda",
                "change": "+10%",
                "detail": "Logistik lintas benua"
            })

        final_price = int(base_price * multiplier)

        print(json.dumps({
            "base_price": base_price,
            "adjustments": adjustments,
            "multiplier": round(multiplier, 2),
            "final_price": final_price
        }))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
