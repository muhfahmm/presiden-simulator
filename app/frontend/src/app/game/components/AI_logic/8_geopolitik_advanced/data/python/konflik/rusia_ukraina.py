PARTICIPANTS = ["Rusia", "Ukraina"]

def apply_logic(country_a, country_b, current_rel, orgs=None):
    shift = 0
    name_a = country_a['name']
    name_b = country_b['name']
    
    if (name_a in PARTICIPANTS and name_b in PARTICIPANTS):
        shift -= 15 # Full-scale active war
    return shift
