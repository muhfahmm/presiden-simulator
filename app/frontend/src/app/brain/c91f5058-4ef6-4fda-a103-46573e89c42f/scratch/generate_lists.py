import os

db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
db_names = []
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db_names.append(name)

# IMF members (as a reference - the 187 list)
imf_members = [
    "afganistan", "afrika selatan", "albania", "aljazair", "amerika serikat", "andorra", "angola", "antigua dan barbuda", 
    "arab saudi", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahama", "bahrain", "bangladesh", 
    "barbados", "belanda", "belarus", "belgia", "belize", "benin", "bhutan", "bolivia", "bosnia dan hercegovina", 
    "botswana", "brazil", "brunei", "bulgaria", "burkina faso", "burundi", "ceko", "chad", "chile", "china", 
    "costa rica", "denmark", "djibouti", "dominika", "ekuador", "el salvador", "eritrea", "estonia", "eswatini", 
    "ethiopia", "fiji", "filipina", "finlandia", "gabon", "gambia", "georgia", "ghana", "grenada", "guatemala", 
    "guinea", "guinea-bissau", "guyana", "haiti", "honduras", "hungaria", "india", "indonesia", "inggris", 
    "irak", "iran", "irlandia", "islandia", "israel", "italia", "jamaika", "jepang", "jerman", "kamboja", 
    "kamerun", "kanada", "kazakhstan", "kenya", "kirgizstan", "kiribati", "kolombia", "komoro", "kongo", 
    "korea selatan", "kosovo", "kuwait", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", 
    "lithuania", "luksemburg", "madagaskar", "makedonia utara", "malawi", "malaysia", 
    "maldives", "mali", "malta", "maroko", "marshall", "mauritania", "mauritius", "meksiko", "mesir", 
    "mikronesia", "moldova", "mongolia", "montenegro", "mozambik", "myanmar", "namibia", "nauru", "nepal", 
    "niger", "nigeria", "nikaragua", "norwegia", "oman", "pakistan", "palau", "panama", "pantai gading", 
    "papua nugini", "paraguay", "peru", "polandia", "portugal", "qatar", "republik afrika tengah", 
    "republik demokratik kongo", "republik dominika", "republik rumania", "republik serbia", "republik sudan", 
    "republik tanzania", "republik timor-leste", "republik uganda", "republik zambia", "republik zimbabwe", 
    "rusia", "rwanda", "saint kitts dan nevis", "saint lucia", "saint vincent dan grenadine", "samoa", 
  "san marino", "sao tome dan principe", "selandia baru", "senegal", "seychelles", "sierra leone", 
  "singapura", "siprus", "slovenia", "slowakia", "somalia", "spanyol", "sri lanka", "sudan selatan", 
  "suriah", "suriname", "swedia", "swiss", "tajikistan", "tanjung verde", "thailand", "togo", "tonga", 
  "trinidad dan tobago", "tunisia", "turki", "turkmenistan", "tuvalu", "ukraina", "uni emirat arab", 
  "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yaman", "yordania", "yunani"
]

# Bank Dunia (almost same as IMF)
bank_dunia = imf_members[:] # Copy IMF

# INTERPOL (196 members)
# Interpol usually includes everything except maybe a few very small Pacific states or special territories
# But it includes Cuba, North Korea, Palestine
interpol = imf_members[:]
potential_interpol = ["korea utara", "kuba", "palestina", "monako", "vatikan"]
for p in potential_interpol:
    if p in db_names and p not in interpol:
        interpol.append(p)

# WHO (194 members)
who = imf_members[:]
potential_who = ["korea utara", "kuba", "monako"]
for p in potential_who:
    if p in db_names and p not in who:
        who.append(p)

# Output results
def write_members(org_name, member_list):
    member_list.sort()
    print(f"{org_name}: {len(member_list)} members")
    # Here I would actually write to file in a real step
    return member_list

bank_dunia = write_members("Bank Dunia", bank_dunia)
interpol = write_members("Interpol", interpol)
who = write_members("WHO", who)
