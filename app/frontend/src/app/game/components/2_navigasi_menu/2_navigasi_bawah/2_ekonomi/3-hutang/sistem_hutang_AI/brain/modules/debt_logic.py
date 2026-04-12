"""
Debt Logic Module — AI Debt System
Menentukan penawaran pinjaman (NPC -> User) dan permintaan pinjaman (NPC <- User).
"""
import random

def generate_npc_proposals(offerer_data, user_credit_score, relationship_score, day_timestamp):
    """
    Menghasilkan tawaran pinjaman dari NPC ke User jika NPC punya surplus.
    """
    # 1. Throttling: Tidak setiap hari ada tawaran
    if random.random() > 0.15: # 15% chance per day per liquid NPC
        return None

    # 2. Cek Kesanggupan NPC (offerer)
    offerer_cash = offerer_data.get("anggaran", 0)
    if offerer_cash < 500000000: # Minimal punya 500M untuk meminjamkan
        return None

    # 3. Hitung Bunga & Tenor
    from modules.risk_analyzer import determine_interest_rate
    interest = determine_interest_rate(user_credit_score, base_rate=4.0, relationship_score=relationship_score)
    
    # Tenor acak antara 6 - 60 bulan
    tenor = random.choice([6, 12, 24, 36, 48, 60])
    
    # Jumlah pinjaman (max 20% dari cash NPC, atau max 5% dari PDB User)
    amount = round(offerer_cash * random.uniform(0.05, 0.20), -6) # Bulatkan ke jutaan

    return {
        "id": f"debt_off_{offerer_data['name_en']}_{day_timestamp}",
        "type": "NPC_OFFER",
        "lender": offerer_data["name_id"],
        "amount": amount,
        "interestRate": interest,
        "tenorMonths": tenor,
        "expiryDays": 7,
        "status": "pending",
        "dayCreated": day_timestamp
    }

def generate_npc_borrow_requests(borrower_data, user_cash, relationship_score, day_timestamp):
    """
    Menghasilkan permohonan pinjaman dari NPC ke User jika NPC sedang krisis.
    """
    # 1. Throttling: NPC minta hutang lebih jarang
    if random.random() > 0.10: # 10% chance
        return None

    # 2. Cek Kondisi NPC
    borrower_cash = borrower_data.get("anggaran", 0)
    if borrower_cash > 0: # Hanya minta kalau minus atau mepet 0
        return None

    # 3. Jumlah yang diminta
    requested_amount = round(abs(borrower_cash) * 1.5 + 100000000, -6)
    
    # NPC biasanya menawarkan bunga lebih tinggi agar User mau meminjamkan
    offered_interest = round(random.uniform(5.0, 12.0), 2)
    tenor = random.choice([12, 24, 48])

    return {
        "id": f"debt_req_{borrower_data['name_en']}_{day_timestamp}",
        "type": "NPC_REQUEST",
        "lender": borrower_data["name_id"], # Di sini 'lender' diisi nama negara yang MINTA (calon borrower)
        "amount": requested_amount,
        "interestRate": offered_interest,
        "tenorMonths": tenor,
        "expiryDays": 5,
        "status": "pending",
        "dayCreated": day_timestamp
    }
