import sys
import json
sys.path.insert(0, r'c:\fhm\em\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\2_ekonomi\1-perdagangan\sistem_perdagangan_AI\brain')
from ai_to_ai.npc_trade_engine import simulate_npc_trades
import ai_to_ai.npc_trade_engine as nte

def mock_simulate(input_data):
    matrix = input_data.get("matrix", {})
    user_country = input_data.get("userCountry", "indonesia").lower().strip()
    countries_data = input_data.get("countriesData", {})
    
    country_analysis = {}
    for country_key in matrix.keys():
        c_lower = country_key.lower().strip()
        c_data = countries_data.get(c_lower, countries_data.get(country_key, {}))
        if c_data:
            surpluses = nte.find_surplus_commodities(c_data, min_production=2)
            deficits = nte.find_deficit_commodities(c_data)
            if surpluses or deficits:
                country_analysis[country_key] = {"surpluses": surpluses, "deficits": deficits}
                
    analyzed_keys = list(country_analysis.keys())
    potential_deals = []
    
    for seller_key in analyzed_keys[:20]:
        seller_data = country_analysis[seller_key]
        if not seller_data["surpluses"]:
            continue

        for buyer_key in analyzed_keys[:20]:
            if buyer_key == seller_key:
                continue
            buyer_data = country_analysis[buyer_key]
            if not buyer_data["deficits"]:
                continue

            orig_seller = countries_data.get(seller_key, {})
            orig_buyer = countries_data.get(buyer_key, {})
            
            seller_partners = orig_seller.get("trade_partners", [])
            buyer_partners = orig_buyer.get("trade_partners", [])

            is_partner = (buyer_key in [p.lower().strip() for p in seller_partners]) or \
                         (seller_key in [p.lower().strip() for p in buyer_partners])
                         
            print(f"Checking {seller_key} -> {buyer_key} | is_partner: {is_partner} | Seller partners: {seller_partners}")

            if not is_partner:
                continue
            
            score = 75

            # Match komoditas: seller surplus A, buyer deficit A
            for surplus in seller_data["surpluses"][:3]:
                for deficit in buyer_data["deficits"][:3]:
                    if surplus["key"] == deficit["key"]:
                        potential_deals.append({
                            "seller": seller_key,
                            "buyer": buyer_key,
                            "commodity": surplus["key"],
                            "score": score,
                            "volume": min(surplus["net_surplus"], deficit["net_deficit"])
                        })
                        print(f"MATCH: {surplus['key']} volume {min(surplus['net_surplus'], deficit['net_deficit'])}")
                        
    print("Potential deals count:", len(potential_deals))

data = {
    'matrix': {'afghanistan': {}, 'india': {}}, 
    'userCountry': 'indonesia', 
    'countriesData': {
        'afghanistan': {'traded_stocks': {'kayu': 1000000}, 'trade_partners': ['india']}, 
        'india': {'traded_stocks': {}, 'trade_partners': ['afghanistan']}
    }
}
mock_simulate(data)
