import re
import os

db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
members_path = r'c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB\1_Dana_Moneter_Internasional_(IMF)\members.ts'

# 1. Read Database Names
db_names = set()
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name:
                db_names.add(name)

print(f"Total in DB: {len(db_names)}")

# 2. Hardcoded List from User's Prompt (which is the goal)
user_list = [
  "afganistan", "afrika selatan", "albania", "aljazair", "amerika serikat", "andorra", "angola", "antigua dan barbuda", "arab saudi", "argentina",
  "armenia", "australia", "austria", "azerbaijan", "bahama", "bahrain", "bangladesh", "barbados", "belanda", "belarus",
  "belgia", "belize", "benin", "bhutan", "bolivia", "bosnia dan hercegovina", "botswana", "brazil", "brunei", "bulgaria",
  "burkina faso", "burundi", "ceko", "chad", "chile", "china", "costa rica", "denmark", "djibouti", "dominika",
  "ekuador", "el salvador", "eritrea", "estonia", "eswatini", "ethiopia", "fiji", "filipina", "finlandia", "gabon",
  "gambia", "georgia", "ghana", "grenada", "guatemala", "guinea", "guinea bissau", "guyana", "haiti", "honduras",
  "hungaria", "india", "indonesia", "inggris", "irak", "iran", "irlandia", "islandia", "israel", "italia",
  "jamaika", "jepang", "jerman", "kamboja", "kamerun", "kanada", "kazakhstan", "kenya", "kirgizstan", "kiribati",
  "kolombia", "komoro", "kongo", "korea selatan", "kosovo", "kuwait", "laos", "latvia", "lebanon", "lesotho",
  "liberia", "libya", "liechtenstein", "lithuania", "luksemburg", "madagaskar", "makedonia utara", "malawi", "malaysia", "maldives",
  "mali", "malta", "maroko", "marshall", "mauritania", "mauritius", "meksiko", "mesir", "mikronesia", "moldova",
  "mongolia", "montenegro", "mozambik", "myanmar", "namibia", "nauru", "nepal", "niger", "nigeria", "nikaragua",
  "norwegia", "oman", "pakistan", "palau", "panama", "pantai gading", "papua nugini", "paraguay", "peru", "polandia",
  "portugal", "qatar", "republik afrika tengah", "republik demokratik kongo", "republik dominika", "republik rumania", "republik serbia", "republik sudan", "republik tanzania", "republik timor leste",
  "republik uganda", "republik zambia", "republik zimbabwe", "rusia", "rwanda", "saint kitts dan nevis", "saint lucia", "saint vincent dan grenadine", "samoa", "san marino",
  "sao tome dan principe", "selandia baru", "senegal", "seychelles", "sierra leone", "singapura", "siprus", "slovenia", "slowakia", "somalia",
  "spanyol", "sri lanka", "sudan selatan", "suriah", "suriname", "swedia", "swiss", "tajikistan", "tanjung verde", "thailand",
  "togo", "tonga", "trinidad dan tobago", "tunisia", "turki", "turkmenistan", "tuvalu", "ukraina", "uni emirat arab", "uruguay",
  "uzbekistan", "vanuatu", "venezuela", "vietnam", "yaman", "yordania", "yunani"
]

# 3. Intersection and Deduplication
final_list = []
seen = set()
for m in user_list:
    low = m.lower().strip()
    if low in db_names and low not in seen:
        final_list.append(low)
        seen.add(low)

final_list.sort()

# 4. Result
print(f"Final Count: {len(final_list)}")
print(f"Duplicates in User List: {len(user_list) - len(set(user_list))}")

# 5. Overwrite members.ts
with open(members_path, 'w', encoding='utf-8') as f:
    f.write("export const members = [\n")
    for i, name in enumerate(final_list):
        comma = "," if i < len(final_list) - 1 else ""
        f.write(f'  "{name}"{comma}\n')
    f.write("];\n")
