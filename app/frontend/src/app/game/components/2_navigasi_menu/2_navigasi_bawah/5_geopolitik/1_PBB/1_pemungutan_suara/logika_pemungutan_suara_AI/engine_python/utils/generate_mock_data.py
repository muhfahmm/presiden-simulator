import json
import random

# Daftar 207 negara berdasarkan database_negara.txt
countries_list = [
    "afganistan", "afrika selatan", "albania", "aljazair", "amerika serikat", "andorra", "angola", "antigua dan barbuda", 
    "arab saudi", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahama", "bahrain", "bangladesh", 
    "barbados", "belanda", "belarus", "belgia", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia dan hercegovina", 
    "botswana", "brazil", "brunei", "bulgaria", "burkina faso", "burundi", "ceko", "chad", "chile", "china", "costa rica", 
    "curacao", "denmark", "djibouti", "dominika", "ekuador", "el salvador", "eritrea", "estonia", "eswatini", "ethiopia", 
    "fiji", "filipina", "finlandia", "gabon", "gambia", "georgia", "ghana", "gibraltar", "greenland", "grenada", "guam", 
    "guatemala", "guiana prancis", "guinea", "guinea bissau", "guyana", "haiti", "honduras", "hong kong", "hungaria", 
    "india", "indonesia", "inggris", "irak", "iran", "irlandia", "islandia", "israel", "italia", "jamaika", "jepang", 
    "jerman", "kamboja", "kamerun", "kanada", "kazakhstan", "kenya", "kepulauan faroe", "kirgizstan", "kiribati", 
    "kolombia", "komoro", "kongo", "korea selatan", "korea utara", "kosovo", "kroasia", "kuba", "kuwait", "laos", 
    "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luksemburg", "madagaskar", 
    "makau", "makedonia utara", "malawi", "malaysia", "maldives", "mali", "malta", "maroko", "marshall", "mauritania", 
    "mauritius", "meksiko", "mesir", "mikronesia", "moldova", "monako", "mongolia", "montenegro", "mozambik", "myanmar", 
    "namibia", "nauru", "nepal", "niger", "nigeria", "nikaragua", "norwegia", "oman", "pakistan", "palau", "palestina", 
    "panama", "pantai gading", "papua nugini", "paraguay", "peru", "polandia", "portugal", "prancis", "puerto rico", 
    "qatar", "republik afrika tengah", "republik demokratik kongo", "republik dominika", "republik rumania", 
    "republik serbia", "republik sudan", "republik tanzania", "republik timor leste", "republik uganda", 
    "republik zambia", "republik zimbabwe", "rusia", "rwanda", "saint kitts dan nevis", "saint lucia", 
    "saint vincent dan grenadine", "samoa", "samoa amerika", "san marino", "sao tome dan principe", "selandia baru", 
    "senegal", "seychelles", "sierra leone", "singapura", "siprus", "slovenia", "slowakia", "somalia", "spanyol", 
    "sri lanka", "sudan selatan", "suriah", "suriname", "swedia", "swiss", "tahiti", "taiwan", "tajikistan", 
    "tanjung verde", "thailand", "togo", "tonga", "trinidad dan tobago", "tunisia", "turki", "turkmenistan", 
    "tuvalu", "ukraina", "uni emirat arab", "uruguay", "uzbekistan", "vanuatu", "vatikan", "venezuela", "vietnam", 
    "yaman", "yordania", "yunani"
]

ideologies = ["Demokrasi", "Komunisme", "Otoriter", "Teokrasi", "Sosialisme"]
tendencies = ["Interventionist", "Isolationist", "Pacifist", "Expansionist", "Neutral"]
priorities_pool = ["Military", "Economy", "Human Rights", "Environment", "Stability", "Technology"]

mock_data = []

def capitalize_name(name):
    return " ".join([word.capitalize() for word in name.split()])

for country in countries_list:
    mock_data.append({
        "name": capitalize_name(country),
        "ideology": random.choice(ideologies),
        "tendency": random.choice(tendencies),
        "alignment": {
            "Player": random.randint(10, 90),
            "Rusia": random.randint(10, 90),
            "China": random.randint(10, 90),
            "USA": random.randint(10, 90)
        },
        "priorities": random.sample(priorities_pool, 2)
    })

with open("../../data_simulator/mock_countries_207.json", "w") as f:
    json.dump(mock_data, f, indent=2)

print(f"Successfully generated data for {len(mock_data)} countries in mock_countries_207.json.")
