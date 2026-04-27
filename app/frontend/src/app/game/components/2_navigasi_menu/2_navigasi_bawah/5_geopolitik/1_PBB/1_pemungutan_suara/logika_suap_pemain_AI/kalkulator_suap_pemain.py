import random

def hitung_biaya_suap_pihak_pemain(un_vote, player_vote, country_current_vote, relation_with_player):
    """
    un_vote: Pengaruh negara (un_vote)
    player_vote: Suara pemain ('SETUJU' atau 'TOLAK')
    country_current_vote: Suara negara saat ini ('supporters', 'opponents', 'abstainers')
    relation_with_player: Hubungan negara tersebut dengan pemain (0-100)
    """
    # Dasar biaya
    base_cost = un_vote * 1000
    
    # Pengali berdasarkan tingkat kesulitan meyakinkan
    # Mengubah 'Tolak' menjadi 'Setuju' (atau sebaliknya) lebih mahal daripada mengubah 'Abstain'
    difficulty_multiplier = 1.0
    
    if player_vote == 'SETUJU':
        if country_current_vote == 'opponents': # Lawan jadi kawan
            difficulty_multiplier = 2.0
        elif country_current_vote == 'abstainers': # Netral jadi kawan
            difficulty_multiplier = 1.2
            
    elif player_vote == 'TOLAK':
        if country_current_vote == 'supporters': # Kawan jadi lawan
            difficulty_multiplier = 2.0
        elif country_current_vote == 'abstainers': # Netral jadi lawan
            difficulty_multiplier = 1.2
            
    # Pengali hubungan (Semakin benci pemain, semakin mahal)
    relation_multiplier = (120 - relation_with_player) / 60.0
    
    total_cost = base_cost * difficulty_multiplier * relation_multiplier
    
    return int(round(total_cost / 1000) * 1000)
