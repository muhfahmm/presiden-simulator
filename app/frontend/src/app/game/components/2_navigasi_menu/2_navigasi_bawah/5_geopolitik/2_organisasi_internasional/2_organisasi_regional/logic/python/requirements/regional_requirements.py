from location_detector import LocationDetector

class RegionalRequirements:
    """
    Handles eligibility checks for regional organizations.
    Some organizations are open to all, while others have strict geographic or political requirements.
    """
    
    def __init__(self):
        # Definition of restricted organizations and their requirements
        self.requirements = {
            "asean": {"type": "region", "value": "Southeast Asia"},
            "uni_eropa": {"type": "continent", "value": "Europe"},
            "liga_arab": {"type": "culture", "value": "Arab"},
            "uni_afrika": {"type": "continent", "value": "Africa"},
            "gcc": {"type": "region", "value": "Persian Gulf"},
            "mercosur": {"type": "continent", "value": "South America"},
            "nato": {"type": "continent", "value": ["Europe", "North America"]},
            # G20, BRICS, etc. might be 'open' but based on economic rank (not geographic)
            "g20": {"type": "economic_rank", "value": 20},
            "brics": {"type": "status", "value": "emerging_power"}
        }

    def is_eligible(self, country_data, org_id):
        """
        Checks if a country is eligible to join a specific organization.
        """
        name = country_data.get("name_en") or country_data.get("name") or ""
        location = LocationDetector.detect(name)
        enhanced_data = {**country_data, **location}
        
        req = self.requirements.get(org_id.lower())
        
        # If no requirement listed, assume it's open for all global nations
        if not req:
            return True, "Open to all nations."

        req_type = req["type"]
        req_value = req["value"]

        if req_type == "region":
            if enhanced_data.get("region") == req_value:
                return True, "Geographically eligible."
            return False, f"Requires being in the {req_value} region."

        elif req_type == "continent":
            allowed_continents = req_value if isinstance(req_value, list) else [req_value]
            if enhanced_data.get("continent") in allowed_continents:
                return True, "Geographically eligible."
            return False, f"Requires being in {', '.join(allowed_continents)}."

        elif req_type == "culture":
            if country_data.get("culture") == req_value:
                return True, "Culturally eligible."
            return False, f"Requires {req_value} cultural alignment."

        return True, "Eligible."
