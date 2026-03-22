import urllib.request
import json

def fetch_json(url):
    try:
        with urllib.request.urlopen(url) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
         print(f"Error: {e}")
         return []

data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")

search_list = [
    "central african republic", "dr congo", "congo", "dominican republic", 
    "madagascar", "moldova", "mozambique", "romania", "serbia", "sudan",
    "tanzania", "timor-leste", "uganda", "zambia", "zimbabwe", "russia", 
    "rwanda", "saint kitts and nevis", "saint lucia", "saint vincent and the grenadines", "samoa"
]

with open(r'c:\fhm\EM4\tmp\test_output.txt', 'w', encoding='utf-8') as f_out:
    f_out.write("Matches:\n")
    for c in data:
        name_common = c["name"].get("common", "").lower()
        name_official = c["name"].get("official", "").lower()
        alt_names = [a.lower() for a in c.get("altSpellings", [])]
        
        for search in search_list:
            if search in name_common or search in name_official or any(search in a for a in alt_names):
                 f_out.write(f"Found search '{search}': common='{c['name'].get('common')}', official='{c['name'].get('official')}', alt={c.get('altSpellings')}\n")

