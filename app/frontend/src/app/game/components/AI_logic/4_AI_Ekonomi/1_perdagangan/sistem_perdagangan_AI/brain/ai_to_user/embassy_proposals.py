"""
Embassy Proposals — AI-to-User Module
Negara AI yang BELUM punya kedutaan (e=0) dengan user
menawarkan proposal pembukaan kedutaan besar (Level 1 Hubungan).

Logika:
1. Scan negara AI di matrix yang e=0 (belum punya kedutaan)
2. Hanya negara dengan skor hubungan >= 40 
3. Throttle: 10% peluang per hari
4. Generate event type: "AI_EMBASSY_PROPOSAL"
5. Jika user terima → set e=1 di matrix (jadi dasar diplomasi)
"""
import sys
import json
import random
import os

def simulate_embassy_proposals(input_data):
    """AI tanpa kedutaan menawarkan proposal pembukaan kedutaan ke user."""
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    day_timestamp = input_data.get("dayTimestamp", 0)

    events = []
    embassy_proposals = []

    # THROTTLING — Peluang dasar 10% per hari
    chance = 0.10
    
    # BOOST HARI PERTAMA: Agar user tidak melihat tab kosong saat baru mulai
    if day_timestamp < 5:
        chance = 0.80

    if random.random() > chance:
        return {"events": [], "embassyProposals": []}

    potential_proposers = []

    for source_country, targets in matrix.items():
        source_lower = source_country.lower().strip()
        if source_lower == user_country:
            continue

        # Cek hubungan dengan user
        user_rel = None
        for target_key, rel_data in targets.items():
            if target_key.lower().strip() == user_country:
                user_rel = rel_data
                break

        if not user_rel:
            continue

        score = user_rel.get("s", 50)
        has_embassy = user_rel.get("e", 0) == 1

        # KUNCI HIERARKI: Hanya jika BELUM ada KEDUTAAN (e=0)
        if has_embassy:
            continue

        # Minimal skor hubungan >= 40
        if score < 40:
            continue

        potential_proposers.append({
            "country": source_country,
            "score": score
        })

    if not potential_proposers:
        return {"events": [], "embassyProposals": []}

    # Pilih 1 kandidat terbaik atau acak berbobot
    weights = [p["score"] for p in potential_proposers]
    selected = random.choices(potential_proposers, weights=weights, k=1)[0]

    country_name = selected["country"].capitalize()
    proposal_id = f"embassy_proposal_{selected['country']}_{day_timestamp}"

    proposal = {
        "id": proposal_id,
        "type": "embassy_proposal",
        "country": selected["country"],
        "countryLabel": country_name,
        "status": "pending",
        "dayCreated": day_timestamp,
        "expiryDays": 14
    }
    embassy_proposals.append(proposal)

    # Notifikasi untuk user
    events.append({
        "type": "AI_EMBASSY_PROPOSAL",
        "source": selected["country"],
        "category": "embassy",
        "subject": f"Permohonan Pembukaan Kedutaan Besar ({country_name})",
        "content": (
            f"Pemerintah {country_name} secara resmi menyampaikan keinginan untuk membuka "
            f"perwakilan diplomatik permanen (Kedutaan Besar) di ibu kota Anda.\n\n"
            f"Langkah ini merupakan fondasi utama bagi hubungan bilateral kita ke depannya. "
            f"Hanya setelah Kedutaan Besar didirikan, kita dapat membicarakan perjanjian "
            f"perdagangan formal dan kerjasama strategis lainnya.\n\n"
            f"Setujui untuk memulai hubungan diplomatik resmi dengan {country_name}."
        ),
        "priority": "high",
        "isProposal": True,
        "proposalId": proposal_id
    })

    return {"events": events, "embassyProposals": embassy_proposals}

if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = simulate_embassy_proposals(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "events": [], "embassyProposals": []}))
        sys.exit(1)
