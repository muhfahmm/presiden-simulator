class LocationDetector:
    """
    Python version of the location detector.
    Maps countries to their respective continents and regions.
    """
    
    ASIA = [
        "afghanistan", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", "china", 
        "georgia", "india", "indonesia", "iraq", "iran", "israel", "japan", "jordan", "cambodia", 
        "kazakhstan", "kyrgyzstan", "south korea", "north korea", "kuwait", "laos", "lebanon", 
        "malaysia", "maldives", "mongolia", "myanmar", "nepal", "oman", "pakistan", "palestine", 
        "qatar", "timor-leste", "singapore", "sri lanka", "syria", "taiwan", "tajikistan", 
        "thailand", "turkmenistan", "uae", "uzbekistan", "vietnam", "yemen", "philippines"
    ]
    
    EUROPE = [
        "albania", "andorra", "austria", "belarus", "belgium", "bosnia and herzegovina", "bulgaria", 
        "croatia", "cyprus", "czech republic", "denmark", "estonia", "finland", "france", "germany", 
        "greece", "hungary", "iceland", "ireland", "italia", "italy", "latvia", "liechtenstein", 
        "lithuania", "luxembourg", "malta", "moldova", "monaco", "montenegro", "netherlands", 
        "norway", "poland", "portugal", "romania", "russia", "san marino", "serbia", "slovakia", 
        "slovenia", "spanyol", "spain", "sweden", "switzerland", "turkey", "ukraine", "united kingdom", "vatican city"
    ]
    
    AFRICA = [
        "algeria", "angola", "benin", "botswana", "burkina faso", "burundi", "cameroon", "cape verde", 
        "central african republic", "chad", "comoros", "congo", "djibouti", "egypt", "equatorial guinea", 
        "eritrea", "ethiopia", "gabon", "gambia", "ghana", "guinea", "guinea-bissau", "ivory coast", 
        "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi", "mali", "mauritania", 
        "mauritius", "morocco", "mozambique", "namibia", "niger", "nigeria", "rwanda", "sao tome and principe", 
        "senegal", "seychelles", "sierra leone", "somalia", "south africa", "south sudan", "sudan", 
        "tanzania", "togo", "tunisia", "uganda", "zambia", "zimbabwe"
    ]
    
    NA = ["usa", "canada", "mexico", "cuba", "haiti", "dominican republic", "panama", "costa rica", "jamaica"]
    SA = ["argentina", "brazil", "chile", "colombia", "peru", "venezuela", "ecuador", "bolivia", "paraguay", "uruguay"]
    OCEANIA = ["australia", "new zealand", "fiji", "papua new guinea", "samoa", "vanuatu"]

    SOUTHEAST_ASIA = ["indonesia", "malaysia", "singapore", "thailand", "philippines", "vietnam", "brunei", "laos", "cambodia", "myanmar", "timor-leste"]
    MIDDLE_EAST = ["saudi arabia", "uae", "qatar", "kuwait", "oman", "bahrain", "iran", "iraq", "israel", "palestine", "jordan", "lebanon", "syria", "yemen"]

    @classmethod
    def detect(cls, country_name):
        name = country_name.lower()
        
        if name in cls.EUROPE: return {"continent": "Europe", "region": "Europe"}
        if name in cls.AFRICA: return {"continent": "Africa", "region": "Africa"}
        if name in cls.NA: return {"continent": "North America", "region": "North America"}
        if name in cls.SA: return {"continent": "South America", "region": "South America"}
        if name in cls.OCEANIA: return {"continent": "Oceania", "region": "Oceania"}
        
        if name in cls.ASIA:
            if name in cls.SOUTHEAST_ASIA: return {"continent": "Asia", "region": "Southeast Asia"}
            if name in cls.MIDDLE_EAST: return {"continent": "Asia", "region": "Middle East"}
            return {"continent": "Asia", "region": "Asia"}
            
        return {"continent": "Unknown", "region": "Unknown"}
