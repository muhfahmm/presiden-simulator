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

if data:
    c = data[0]
    print(f"Country: {c['name']['common']}")
    print(f"Translations Keys: {list(c.get('translations', {}).keys())}")
    
    # Check for 'ind' or 'idn' or similar
    all_keys = set()
    for item in data:
         for k in item.get("translations", {}).keys():
              all_keys.add(k)
    print(f"All translation keys on any country: {sorted(list(all_keys))}")
