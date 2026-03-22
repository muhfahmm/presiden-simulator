import urllib.request
import json

def fetch_json(url):
    try:
         with urllib.request.urlopen(url) as response:
             return json.loads(response.read().decode('utf-8'))
    except Exception as e:
         return []

data = fetch_json("https://raw.githubusercontent.com/mledoze/countries/master/countries.json")

with open(r'c:\fhm\EM4\tmp\json_keys.txt', 'w', encoding='utf-8') as f:
    if data:
         c = data[0]
         f.write(f"First Country: {c['name']['common']}\n")
         f.write(f"Translation Keys: {list(c.get('translations', {}).keys())}\n")
         
         # Example ind data
         f.write(f"Value for 'ind': {c.get('translations', {}).get('ind', 'Missing')}\n")
         
         # Look for ind in any country
         found_ind = False
         for item in data:
              if 'ind' in item.get('translations', {}):
                   found_ind = True
                   f.write(f"Found 'ind' in {item['name']['common']}: {item['translations']['ind']}\n")
                   break
         if not found_ind:
              f.write("Did NOT find 'ind' key in any country database!\n")
