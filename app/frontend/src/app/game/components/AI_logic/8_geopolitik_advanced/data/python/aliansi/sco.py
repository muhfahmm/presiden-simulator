def apply_logic(country_a, country_b, current_rel, orgs=None):
    if not orgs: return 0
    members = [m.lower() for m in orgs.get("sco", [])]
    if country_a['name'].lower() in members and country_b['name'].lower() in members:
        return 5 # Dynamic SCO cooperation
    return 0
