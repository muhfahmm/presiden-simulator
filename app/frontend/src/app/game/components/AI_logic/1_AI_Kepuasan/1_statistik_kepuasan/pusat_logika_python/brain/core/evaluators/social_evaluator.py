from ..constants import (
    BUDDHA_BONUS, KONGHUCU_PENALTY, DEMOKRASI_BONUS, 
    KAPITALISME_PENALTY, KONSERVATISME_BONUS, SOSIALISME_BONUS
)

def evaluate_social(data):
    """Calculates religion and ideology impacts."""
    religion_delta = 0
    rel = data.get('religion', 'Sekuler')
    if rel == 'Buddha': religion_delta = BUDDHA_BONUS
    elif rel == 'Konghucu': religion_delta = KONGHUCU_PENALTY

    ideology_delta = 0
    ideo = data.get('ideology', 'Netral')
    if ideo == 'Demokrasi': ideology_delta = DEMOKRASI_BONUS
    elif ideo == 'Kapitalisme': ideology_delta = KAPITALISME_PENALTY
    elif ideo == 'Konservatisme': ideology_delta = KONSERVATISME_BONUS
    elif ideo == 'Sosialisme': ideology_delta = SOSIALISME_BONUS

    return religion_delta, ideology_delta
