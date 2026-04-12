"""
Risk Analyzer Module — AI Debt System
Menghitung Credit Score negara (0-100) untuk menentukan bunga & limit hutang.
"""

def calculate_credit_score(country_data, current_debt, is_imf_member):
    """
    Menghitung skor kredit berdasarkan data ekonomi & geopolitik.
    """
    score = 70  # Base score
    
    # 1. PDB & Debt Ratio
    # Mengasumsikan pendapatan_nasional sebagai pendekatan PDB
    pdb_str = country_data.get("pendapatan_nasional", "0").replace(".", "").replace(",", "")
    try:
        pdb = int(pdb_str)
    except:
        pdb = 1000000000 # Default fallback
        
    debt_ratio = (current_debt / pdb) * 100 if pdb > 0 else 100
    
    if debt_ratio < 30:
        score += 15
    elif debt_ratio < 60:
        score += 5
    else:
        score -= 20 # Rasio hutang tinggi menurunkan trust
        
    # 2. Budget Liquidity (Anggaran)
    anggaran = country_data.get("anggaran", 0)
    if anggaran > pdb * 0.1: # Punya cash gede
        score += 10
    elif anggaran < 0:
        score -= 15
        
    # 3. Membership Bonus
    if is_imf_member:
        score += 10 # Anggota IMF dianggap lebih diawasi & stabil
        
    # 4. Politik/Geopolitik (Stability Placeholder)
    # Di masa depan bisa pakai skor popularitas dari data kementerian
    
    return max(10, min(100, score))

def determine_interest_rate(credit_score, base_rate=3.5, relationship_score=50):
    """
    Menentukan bunga berdasarkan resiko (credit score) & diplomasi.
    """
    # Semakin tinggi credit score, semakin rendah bunga (low risk)
    risk_premium = max(0, (100 - credit_score) / 10)
    
    # Faktor Diplomasi: Hubungan baik mengurangi bunga
    diplomacy_discount = (relationship_score - 50) / 20 # -2.5% s/d +2.5%
    
    final_rate = base_rate + risk_premium - diplomacy_discount
    return round(max(0.5, final_rate), 2)
