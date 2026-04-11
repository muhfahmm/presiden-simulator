import os

# 207 Database check
db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
db = []
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db.append(name)
db_set = set(db)

def get_members(match_list):
    found = []
    for m in match_list:
        m_low = m.lower()
        if m_low in db_set:
            found.append(m_low)
        else:
            if m_low == "usa": m_low = "amerika serikat"
            elif m_low == "uk": m_low = "inggris"
            elif m_low == "uae": m_low = "uni emirat arab"
            elif m_low == "south korea": m_low = "korea selatan"
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

root = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\2_organisasi_regional"

# QUAD (4)
quad = ["amerika serikat", "jepang", "india", "australia"]
write_ts(os.path.join(root, "17_QUAD", "memberQUAD.ts"), get_members(quad))

# OECD (38, mapping key ones)
oecd = [
    "amerika serikat", "inggris", "perancis", "jerman", "italia", "kanada", "jepang", "korea selatan", 
    "australia", "selandia baru", "turki", "spanyol", "belanda", "belgia", "swedia", "norwegia", 
    "denmark", "finlandia", "irlandia", "austria", "swiss", "ceko", "hungaria", "polandia", 
    "portugal", "yunani", "meksiko", "chile", "kolombia", "israel", "estonia", "latvia", 
    "lithuania", "slovenia", "slowakia", "islandia", "luksemburg"
]
write_ts(os.path.join(root, "18_OECD", "memberOECD.ts"), get_members(oecd))

print("Created QUAD and OECD data.")
