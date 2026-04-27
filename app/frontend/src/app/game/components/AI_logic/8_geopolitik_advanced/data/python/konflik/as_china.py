PARTICIPANTS = ["Amerika Serikat", "China"]

def apply_logic(country_a, country_b, current_rel, orgs=None):
    shift = 0
    name_a = country_a['name']
    name_b = country_b['name']
    
    if (name_a in PARTICIPANTS and name_b in PARTICIPANTS):
        shift -= 4 # Strategic competition
        # If trade is high, malus is slightly reduced
        if country_a.get('economic_focus', 50) > 70: shift += 1
    return shift
