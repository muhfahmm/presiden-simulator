"""
Debt Engine Orchestrator — AI Debt System
Main Entry point untuk koordinasi sistem hutang bilateral & multilateral.
"""
import sys
import json
import random
import os

# Tambahkan path agar bisa import sub-modules
sys.path.insert(0, os.path.dirname(__file__))

from modules.risk_analyzer import calculate_credit_score
from modules.debt_logic import generate_npc_proposals, generate_npc_borrow_requests

def process_ai_debt():
    try:
        # Membaca data dari stdin (dikirim oleh Next.js API route)
        raw_input = sys.stdin.read()
        if not raw_input:
            print(json.dumps({"error": "No input data provided via stdin"}))
            return

        input_data = json.loads(raw_input)
        
        user_country = input_data.get("userCountry", "Indonesia")
        countries_data = input_data.get("countriesData", {})
        matrix = input_data.get("matrix", {})
        user_cash = input_data.get("userCash", 0)
        current_debt = input_data.get("currentDebt", 0)
        is_imf_member = input_data.get("isImfMember", False)
        day_timestamp = input_data.get("dayTimestamp", 0)
        
        user_stats = countries_data.get(user_country, {})
        
        # 1. Hitung Credit Score User
        credit_score = calculate_credit_score(user_stats, current_debt, is_imf_member)
        
        new_offers = []
        events = []
        
        # 2. Proses Bilateral Debt (NPC <-> User)
        # Ambil negara-negara yang punya hubungan diplomatik & ketersediaan dana
        potential_partners = []
        for c_name, c_data in countries_data.items():
            if c_name.lower() == user_country.lower(): continue
            
            # Ambil relasi spesifik: Apa pendapat NPC ini terhadap USER
            rel_to_user = matrix.get(c_name.lower(), {}).get(user_country.lower(), {})
            
            # ATAU Hubungan Diplomatik yang tidak buruk (score s >= 50 - Netral keatas)
            is_eligible = rel_to_user.get("t", 0) == 1 or rel_to_user.get("s", 50) >= 50
            if not is_eligible: continue 
            
            score = rel_to_user.get("s", 50)
            potential_partners.append({
                "name": c_name,
                "data": c_data,
                "score": score
            })

        # Random sampling untuk efisiensi & variasi
        if potential_partners:
            # 1. NPC Menawarkan Pinjaman (Melihat likuiditas mereka)
            # Threshold diturunkan agar lebih banyak negara yang mau meminjamkan (misal > 100 Juta)
            liquid_npcs = [p for p in potential_partners if p["data"].get("anggaran", 0) > 100000000]
            if liquid_npcs and random.random() < 0.7: # 70% chance ada penawaran jika ada partner
                target_npc = random.choice(liquid_npcs)
                proposal = generate_npc_proposals(target_npc["data"], credit_score, target_npc["score"], day_timestamp)
                if proposal:
                    new_offers.append(proposal)
                    events.append({
                        "type": "DEBT_OFFER",
                        "source": target_npc["name"],
                        "subject": f"Tawaran Pinjaman Bilateral: {target_npc['name']}",
                        "content": f"Pemerintah {target_npc['name']} menawarkan fasilitas pinjaman sebesar ${proposal['amount']:,} untuk memperkuat cadangan devisa Anda.",
                        "offerId": proposal["id"]
                    })

            # 2. NPC Meminta Pinjaman (User sebagai lender)
            # LOGIKA BARU: Negara kaya pun bisa meminta hutang untuk "Infrastruktur/Investasi"
            # Kita ambil yang hubungannya baik dengan user
            borrow_candidates = potential_partners
            if borrow_candidates and random.random() < 0.5: # 50% chance NPC mau pinjam
                target_npc = random.choice(borrow_candidates)
                request = generate_npc_borrow_requests(target_npc["data"], user_cash, target_npc["score"], day_timestamp)
                if request:
                    is_crisis = target_npc["data"].get("anggaran", 0) < 0
                    subject = f"Permohonan Bantuan Dana: {target_npc['name']}" if is_crisis else f"Pinjaman Investasi: {target_npc['name']}"
                    content = f"Negara {target_npc['name']} sedang mengalami krisis likuiditas." if is_crisis else f"Pemerintah {target_npc['name']} ingin meminjam dana untuk proyek strategis nasional."
                    
                    new_offers.append(request)
                    events.append({
                        "type": "DEBT_REQUEST",
                        "source": target_npc["name"],
                        "subject": subject,
                        "content": f"{content} Mereka memohon pinjaman sebesar ${request['amount']:,} kepada Anda.",
                        "offerId": request["id"]
                    })

        # 3. Output Response
        response = {
            "creditScore": credit_score,
            "newOffers": new_offers,
            "events": events
        }
        
        print(json.dumps(response))

    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    process_ai_debt()
