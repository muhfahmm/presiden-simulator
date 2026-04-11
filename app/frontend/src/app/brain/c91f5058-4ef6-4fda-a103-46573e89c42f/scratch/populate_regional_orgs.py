import os

# 207 Database check to ensure valid names
db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
db = []
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db.append(name)
db_set = set(db)

def get_members(match_list):
    # Match provided names with confirmed DB names
    found = []
    for m in match_list:
        m_low = m.lower()
        if m_low in db_set:
            found.append(m_low)
        else:
            # Try some common fuzzy matching/variants
            if m_low == "usa": m_low = "amerika serikat"
            elif m_low == "uk": m_low = "inggris"
            elif m_low == "uae": m_low = "uni emirat arab"
            elif m_low == "timor leste": m_low = "republik timor-leste"
            elif m_low == "gaza": m_low = "palestina"
            
            if m_low in db_set:
                found.append(m_low)
    return sorted(list(set(found)))

def write_ts(path, members):
    content = "export const members = [\n"
    for i, m in enumerate(members):
        comma = "," if i < len(members) - 1 else ""
        content += f'  "{m}"{comma}\n'
    content += "];\n"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written {path} with {len(members)} members")

root = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\2_organisasi_regional"

# 1. ASEAN (11)
asean = ["indonesia", "malaysia", "singapura", "thailand", "filipina", "vietnam", "laos", "kamboja", "myanmar", "brunei", "republik timor-leste"]
write_ts(os.path.join(root, "1_ASEAN", "memberASEAN.ts"), get_members(asean))

# 2. EU (27)
eu = ["jerman", "perancis", "italia", "spanyol", "belanda", "belgia", "swedia", "polandia", "austria", "yunani", "portugal", "ceko", "republik rumania", "hungaria", "finlandia", "denmark", "slowakia", "irlandia", "kroasia", "lithuania", "slovenia", "latvia", "estonia", "siprus", "luksemburg", "malta", "bulgaria"]
write_ts(os.path.join(root, "2_Uni_Eropa_(EU)", "memberEU.ts"), get_members(eu))

# 3. Liga Arab (22)
arab = ["mesir", "irak", "yordania", "lebanon", "suriah", "arab saudi", "yaman", "libya", "republik sudan", "maroko", "tunisia", "kuwait", "aljazair", "uni emirat arab", "bahrain", "qatar", "oman", "mauritania", "somalia", "palestina", "djibouti", "komoro"]
write_ts(os.path.join(root, "3_Liga_Arab", "memberLigaArab.ts"), get_members(arab))

# 4. AU (55)
au = ["afrika selatan", "mesir", "aljazair", "nigeria", "ethiopia", "maroko", "kenya", "angola", "ghana", "tanzania", "pantai gading", "republik demokratik kongo", "senegal", "kamerun", "tunisia", "uganda", "zambia", "zimbabwe", "botswana", "namibia", "mauritius", "rwanda", "gabon", "equatorial guinea", "mali", "burkina faso", "niger", "chad", "mauritania", "madagaskar", "malawi", "mozambik", "sudan selatan", "republik sudan", "eritrea", "djibouti", "somalia", "liberia", "sierra leone", "gambia", "guinea", "guinea-bissau", "tanjung verde", "togo", "benin", "republik afrika tengah", "kongo", "lesotho", "eswatini", "seychelles", "komoro", "sao tome dan principe", "burundi", "libya"]
write_ts(os.path.join(root, "4_Uni_Afrika_(AU)", "memberAU.ts"), get_members(au))

# 5. OKI (57)
oki = ["arab saudi", "pakistan", "turki", "indonesia", "iran", "mesir", "maroko", "aljazair", "irak", "yordania", "malaysia", "bangladesh", "nigeria", "kazakhstan", "uzbekistan", "azerbaijan", "afganistan", "palestina", "libya", "republik sudan", "suriah", "yaman", "oman", "kuwait", "qatar", "bahrain", "uni emirat arab", "lebanon", "tunisia", "mauritania", "mali", "senegal", "guinea", "gambia", "guinea-bissau", "burkina faso", "sierra leone", "togo", "benin", "niger", "chad", "kamerun", "gabon", "uganda", "somalia", "djibouti", "komoro", "maladewa", "brunei", "suriname", "guyana", "pantai gading", "mozambik", "kirgizstan", "tajikistan", "turkmenistan"]
write_ts(os.path.join(root, "5_Organisasi_Kerja_Sama_Islam_(OKI)", "memberOKI.ts"), get_members(oki))

# 6. BRICS (10)
brics = ["brazil", "rusia", "india", "china", "afrika selatan", "mesir", "ethiopia", "iran", "arab saudi", "uni emirat arab"]
write_ts(os.path.join(root, "6_BRICS", "memberBRICS.ts"), get_members(brics))

# 7. NATO (32)
nato = ["amerika serikat", "inggris", "perancis", "jerman", "italia", "kanada", "turki", "spanyol", "polandia", "belanda", "belgia", "norwegia", "yunani", "hungaria", "portugal", "ceko", "republik rumania", "denmark", "finlandia", "slowakia", "kroasia", "lithuania", "slovenia", "latvia", "estonia", "albania", "bulgaria", "montenegro", "makedonia utara", "islandia", "luksemburg", "swedia"]
write_ts(os.path.join(root, "7_NATO", "memberNATO.ts"), get_members(nato))

# 8. OPEC (12)
opec = ["aljazair", "kongo", "guinea khatulistiwa", "gabon", "iran", "irak", "kuwait", "libya", "nigeria", "arab saudi", "uni emirat arab", "venezuela"]
write_ts(os.path.join(root, "8_OPEC", "memberOPEC.ts"), get_members(opec))

# 9. G20 (20)
g20 = ["argentina", "australia", "brazil", "kanada", "china", "perancis", "jerman", "india", "indonesia", "italia", "jepang", "meksiko", "rusia", "arab saudi", "afrika selatan", "korea selatan", "turki", "inggris", "amerika serikat"]
write_ts(os.path.join(root, "9_G20", "memberG20.ts"), get_members(g20))

# 10. APEC (21)
apec = ["australia", "brunei", "kanada", "chile", "china", "indonesia", "jepang", "korea selatan", "malaysia", "meksiko", "selandia baru", "papua nugini", "peru", "filipina", "rusia", "singapura", "thailand", "amerika serikat", "vietnam"]
write_ts(os.path.join(root, "10_APEC", "memberAPEC.ts"), get_members(apec))

# 11. SCO (9)
sco = ["china", "rusia", "kazakhstan", "kirgizstan", "tajikistan", "uzbekistan", "india", "pakistan", "iran"]
write_ts(os.path.join(root, "11_SCO", "memberSCO.ts"), get_members(sco))

# 12. OAS (35)
oas = ["amerika serikat", "kanada", "meksiko", "brazil", "argentina", "kolombia", "chile", "peru", "venezuela", "ekuador", "bolivia", "paraguay", "uruguay", "guyana", "suriname", "panama", "costa rica", "nikaragua", "honduras", "el salvador", "guatemala", "belize", "jamaika", "bahama", "barbados", "trinidad dan tobago", "dominika", "saint lucia", "grenada", "haiti", "republik dominika"]
write_ts(os.path.join(root, "12_OAS", "memberOAS.ts"), get_members(oas))

# 13. GCC (6)
gcc = ["arab saudi", "uni emirat arab", "kuwait", "qatar", "bahrain", "oman"]
write_ts(os.path.join(root, "13_GCC", "memberGCC.ts"), get_members(gcc))

# 14. MERCOSUR (5)
mercosur = ["argentina", "brazil", "paraguay", "uruguay", "bolivia"]
write_ts(os.path.join(root, "14_MERCOSUR", "memberMERCOSUR.ts"), get_members(mercosur))

# 15. Commonwealth (56)
common = ["inggris", "kanada", "australia", "selandia baru", "india", "pakistan", "bangladesh", "sri lanka", "malaysia", "singapura", "nigeria", "afrika selatan", "kenya", "uganda", "tanzania", "ghana", "kamerun", "namibia", "botswana", "mauritius", "jamaika", "bahama", "barbados", "trinidad dan tobago", "papua nugini", "fiji", "samoa", "tonga", "vanuatu", "maladewa", "guyana", "belize", "cyprus", "malta", "rwanda", "mozambik"]
write_ts(os.path.join(root, "15_Commonwealth", "memberCommonwealth.ts"), get_members(common))

# 16. G7 (7)
g7 = ["amerika serikat", "inggris", "perancis", "jerman", "italia", "kanada", "jepang"]
write_ts(os.path.join(root, "16_G7", "memberG7.ts"), get_members(g7))
