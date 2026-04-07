"""
Logika Biaya Pembangunan Kedutaan Besar
=======================================
Harga dasar: 400.000

Jika BERBEDA:
  - Agama berbeda   → harga naik 10%
  - Ideologi berbeda → harga naik 15%
  - Benua berbeda   → harga naik 10%

Jika SAMA:
  - Agama sama      → harga turun 5%
  - Ideologi sama   → harga turun 10%
  - Benua sama      → harga turun 5%

Usage:
  python price_logic.py <user_ideology> <target_ideology> <user_religion> <target_religion> <user_continent> <target_continent>

Output: JSON
  {
    "base_price": 400000,
    "adjustments": [...],
    "multiplier": ...,
    "final_price": ...
  }
"""

import sys
import json
import math

BASE_PRICE = 400_000


def calculate_embassy_price(
    user_ideology: str,
    target_ideology: str,
    user_religion: str,
    target_religion: str,
    user_continent: str,
    target_continent: str,
) -> dict:
    """Menghitung biaya pembangunan kedutaan besar berdasarkan perbedaan/kesamaan."""

    multiplier = 1.0
    adjustments = []

    # --- Agama ---
    if user_religion != target_religion:
        multiplier += 0.10
        adjustments.append({
            "category": "Agama",
            "status": "Berbeda",
            "change": "+10%",
            "detail": f"{user_religion} ≠ {target_religion}"
        })
    else:
        multiplier -= 0.05
        adjustments.append({
            "category": "Agama",
            "status": "Sama",
            "change": "-5%",
            "detail": f"{user_religion} = {target_religion}"
        })

    # --- Ideologi ---
    if user_ideology != target_ideology:
        multiplier += 0.15
        adjustments.append({
            "category": "Ideologi",
            "status": "Berbeda",
            "change": "+15%",
            "detail": f"{user_ideology} ≠ {target_ideology}"
        })
    else:
        multiplier -= 0.10
        adjustments.append({
            "category": "Ideologi",
            "status": "Sama",
            "change": "-10%",
            "detail": f"{user_ideology} = {target_ideology}"
        })

    # --- Benua ---
    if user_continent != target_continent:
        multiplier += 0.10
        adjustments.append({
            "category": "Benua",
            "status": "Berbeda",
            "change": "+10%",
            "detail": f"{user_continent} ≠ {target_continent}"
        })
    else:
        multiplier -= 0.05
        adjustments.append({
            "category": "Benua",
            "status": "Sama",
            "change": "-5%",
            "detail": f"{user_continent} = {target_continent}"
        })

    # --- Shinto Penalty ---
    if user_religion == "Shinto":
        multiplier += 0.25
        adjustments.append({
            "category": "Kebijakan Agama",
            "status": "Berbeda",
            "change": "+25%",
            "detail": "Tradisi Shinto (Biaya Diplomasi)"
        })

    final_price = math.floor(BASE_PRICE * multiplier)

    return {
        "base_price": BASE_PRICE,
        "adjustments": adjustments,
        "multiplier": round(multiplier, 2),
        "final_price": final_price,
    }


if __name__ == "__main__":
    if len(sys.argv) < 7:
        result = {
            "error": "Argumen tidak lengkap. Dibutuhkan: user_ideology target_ideology user_religion target_religion user_continent target_continent"
        }
        print(json.dumps(result))
        sys.exit(1)

    user_ideology = sys.argv[1]
    target_ideology = sys.argv[2]
    user_religion = sys.argv[3]
    target_religion = sys.argv[4]
    user_continent = sys.argv[5]
    target_continent = sys.argv[6]

    result = calculate_embassy_price(
        user_ideology, target_ideology,
        user_religion, target_religion,
        user_continent, target_continent,
    )

    print(json.dumps(result))
