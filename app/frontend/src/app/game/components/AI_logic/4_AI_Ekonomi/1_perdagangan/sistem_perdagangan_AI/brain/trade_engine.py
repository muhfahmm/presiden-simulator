"""
Trade Engine — Main Orchestrator
Menjalankan semua modul AI perdagangan secara berurutan.
Dipanggil oleh API route setiap hari game.
"""
import sys
import json
import os

# Tambahkan path agar bisa import sub-modules
sys.path.insert(0, os.path.dirname(__file__))

from ai_to_user.embassy_proposals import simulate_embassy_proposals
from ai_to_user.trade_agreement_proposals import simulate_trade_agreement_proposals
from ai_to_user.product_offers import simulate_product_offers
from ai_to_user.purchase_requests import simulate_purchase_requests
from ai_to_user.contract_proposals import simulate_contract_proposals
from ai_to_ai.npc_trade_engine import simulate_npc_trades
from ai_to_ai.market_events import simulate_market_events


def run_daily_trade_simulation(input_data):
    """
    Orkestrator utama — menjalankan seluruh simulasi perdagangan AI dalam 1 hari game.
    
    Input:
    - matrix: Matriks hubungan global (dari AI diplomacy)
    - userCountry: Negara pemain
    - countriesData: Data produksi semua negara
    - userStock: Stok komoditas pemain saat ini
    - dayTimestamp: Hari game saat ini (integer)
    - existingOffers: Tawaran yang sedang pending
    - existingRequests: Permintaan yang sedang pending
    - existingContracts: Kontrak yang aktif/pending
    
    Output:
    - events: Array of notifications/news
    - offers: Array of new product offers
    - requests: Array of new purchase requests
    - contracts: Array of new contract proposals
    - npcTransactions: Array of NPC-to-NPC trades
    - priceImpacts: Array of market event impacts
    - expiredOffers: Array of expired offer IDs
    - expiredRequests: Array of expired request IDs
    """
    all_events = []
    all_offers = []
    all_requests = []
    all_contracts = []
    all_trade_agreements = []
    all_embassy_proposals = []
    all_new_npc_trade_agreements = []
    all_npc_transactions = []
    all_price_impacts = []
    expired_offers = []
    expired_requests = []

    day_timestamp = input_data.get("dayTimestamp", 0)

    # --- LANGKAH 0: Expire tawaran yang sudah lewat ---
    existing_offers = input_data.get("existingOffers", [])
    for offer in existing_offers:
        if offer.get("status") == "pending":
            created_day = offer.get("dayCreated", 0)
            expiry_days = offer.get("expiryDays", 10)
            if day_timestamp - created_day >= expiry_days:
                expired_offers.append(offer["id"])

    existing_requests = input_data.get("existingRequests", [])
    for req in existing_requests:
        if req.get("status") == "pending":
            created_day = req.get("dayCreated", 0)
            expiry_days = req.get("expiryDays", 10)
            if day_timestamp - created_day >= expiry_days:
                expired_requests.append(req["id"])

    # --- LANGKAH 0.3: AI TANPA kedutaan menawarkan KEDUTAAN ---
    try:
        result = simulate_embassy_proposals(input_data)
        all_events.extend(result.get("events", []))
        all_embassy_proposals.extend(result.get("embassyProposals", []))
    except Exception as e:
        pass

    # --- LANGKAH 0.5: AI TANPA perjanjian dagang menawarkan PERJANJIAN ---
    try:
        result = simulate_trade_agreement_proposals(input_data)
        all_events.extend(result.get("events", []))
        all_trade_agreements.extend(result.get("tradeAgreements", []))
    except Exception as e:
        pass  # Silently fail — jangan crash seluruh engine

    # --- LANGKAH 1: AI DENGAN perjanjian dagang menawarkan produk ke user ---
    try:
        result = simulate_product_offers(input_data)
        all_events.extend(result.get("events", []))
        all_offers.extend(result.get("offers", []))
    except Exception as e:
        pass  # Silently fail — jangan crash seluruh engine

    # --- LANGKAH 2: AI meminta pembelian dari user ---
    try:
        result = simulate_purchase_requests(input_data)
        all_events.extend(result.get("events", []))
        all_requests.extend(result.get("requests", []))
    except Exception as e:
        pass

    # --- LANGKAH 3: AI mengajukan kontrak jangka panjang ---
    try:
        result = simulate_contract_proposals(input_data)
        all_events.extend(result.get("events", []))
        all_contracts.extend(result.get("contracts", []))
    except Exception as e:
        pass

    # --- LANGKAH 4: Simulasi perdagangan NPC-to-NPC ---
    try:
        result = simulate_npc_trades(input_data)
        all_events.extend(result.get("events", []))
        all_npc_transactions.extend(result.get("npcTransactions", []))
        all_new_npc_trade_agreements.extend(result.get("newNpcTradeAgreements", []))
    except Exception as e:
        pass

    # --- LANGKAH 5: Event pasar global ---
    try:
        result = simulate_market_events(input_data)
        all_events.extend(result.get("events", []))
        all_price_impacts.extend(result.get("priceImpacts", []))
    except Exception as e:
        pass

    return {
        "events": all_events,
        "offers": all_offers,
        "requests": all_requests,
        "contracts": all_contracts,
        "tradeAgreements": all_trade_agreements,
        "embassyProposals": all_embassy_proposals,
        "newNpcTradeAgreements": all_new_npc_trade_agreements,
        "npcTransactions": all_npc_transactions,
        "priceImpacts": all_price_impacts,
        "expiredOffers": expired_offers,
        "expiredRequests": expired_requests
    }


if __name__ == "__main__":
    try:
        input_data = json.loads(sys.stdin.read())
        result = run_daily_trade_simulation(input_data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
