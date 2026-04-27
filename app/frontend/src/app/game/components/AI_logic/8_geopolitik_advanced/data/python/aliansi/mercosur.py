def apply_logic(country_a, country_b, current_rel, orgs=None):
    if not orgs: return 0
    members = [m.lower() for m in orgs.get("mercosur", [])]
    if country_a['name'].lower() in members and country_b['name'].lower() in members:
        return 3 # Dynamic MERCOSUR cooperation
    return 0
