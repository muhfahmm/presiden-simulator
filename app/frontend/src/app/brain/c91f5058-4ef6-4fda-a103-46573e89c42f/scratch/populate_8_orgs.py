import os

# IMF Members (187) - The source of truth
imf = {
    'afganistan', 'afrika selatan', 'albania', 'aljazair', 'amerika serikat', 'andorra', 'angola', 'antigua dan barbuda', 
    'arab saudi', 'argentina', 'armenia', 'australia', 'austria', 'azerbaijan', 'bahama', 'bahrain', 'bangladesh', 
    'barbados', 'belanda', 'belarus', 'belgia', 'belize', 'benin', 'bhutan', 'bolivia', 'bosnia dan hercegovina', 
    'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'ceko', 'chad', 'chile', 'china', 
    'costa rica', 'denmark', 'djibouti', 'dominika', 'ekuador', 'el salvador', 'eritrea', 'estonia', 'eswatini', 
    'ethiopia', 'fiji', 'filipina', 'finlandia', 'gabon', 'gambia', 'georgia', 'ghana', 'grenada', 'guatemala', 
    'guinea', 'guinea-bissau', 'guyana', 'haiti', 'honduras', 'hungaria', 'india', 'indonesia', 'inggris', 
    'irak', 'iran', 'irlandia', 'islandia', 'israel', 'italia', 'jamaika', 'jepang', 'jerman', 'kamboja', 
    'kamerun', 'kanada', 'kazakhstan', 'kenya', 'kirgizstan', 'kiribati', 'kolombia', 'komoro', 'kongo', 
    'korea selatan', 'kosovo', 'kuwait', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 
    'liechtenstein', 'lithuania', 'luksemburg', 'madagaskar', 'makedonia utara', 'malawi', 'malaysia', 
    'maldives', 'mali', 'malta', 'maroko', 'marshall', 'mauritania', 'mauritius', 'meksiko', 'mesir', 
    'mikronesia', 'moldova', 'mongolia', 'montenegro', 'mozambik', 'myanmar', 'namibia', 'nauru', 'nepal', 
    'niger', 'nigeria', 'nikaragua', 'norwegia', 'oman', 'pakistan', 'palau', 'panama', 'pantai gading', 
    'papua nugini', 'paraguay', 'peru', 'polandia', 'portugal', 'qatar', 'republik afrika tengah', 
    'republik demokratik kongo', 'republik dominika', 'republik rumania', 'republik serbia', 'republik sudan', 
    'republik tanzania', 'republik timor-leste', 'republik uganda', 'republik zambia', 'republik zimbabwe', 
    'rusia', 'rwanda', 'saint kitts dan nevis', 'saint lucia', 'saint vincent dan grenadine', 'samoa', 
    'san marino', 'sao tome dan principe', 'selandia baru', 'senegal', 'seychelles', 'sierra leone', 
    'singapura', 'siprus', 'slovenia', 'slowakia', 'somalia', 'spanyol', 'sri lanka', 'sudan selatan', 
    'suriah', 'suriname', 'swedia', 'swiss', 'tajikistan', 'tanjung verde', 'thailand', 'togo', 'tonga', 
    'trinidad dan tobago', 'tunisia', 'turki', 'turkmenistan', 'tuvalu', 'ukraina', 'uni emirat arab', 
    'uruguay', 'uzbekistan', 'vanuatu', 'venezuela', 'vietnam', 'yaman', 'yordania', 'yunani'
}

db_path = r'c:\fhm\em\daftar-menu\database_negara.txt'
db = set()
with open(db_path, 'r', encoding='utf-8') as f:
    for line in f:
        if ']' in line:
            name = line.split(']')[1].strip().lower()
            if name: db.add(name)

def write_members_file(path, member_set):
    members_list = sorted(list(member_set))
    content = "export const members = [\n"
    for i, m in enumerate(members_list):
        comma = "," if i < len(members_list) - 1 else ""
        content += f'  "{m}"{comma}\n'
    content += "];\n"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written {path} with {len(members_list)} members")

root = r"c:\fhm\em\app\frontend\src\app\database\data\database_organisasi_internasional\1_organisasi_PBB"

# UNESCO
unesco_extra = {'palestina', 'korea utara', 'kuba', 'monako'}
unesco_exclude = {'israel', 'amerika serikat', 'liechtenstein'}
write_members_file(os.path.join(root, "5_UNESCO", "memberUNESCO.ts"), (imf - unesco_exclude) | {e for e in unesco_extra if e in db})

# WTO
wto_exclude = {'irak', 'iran', 'lebanon', 'libya', 'suriah', 'republik sudan', 'ethiopia', 'uzbekistan', 'turkmenistan', 'azerbaijan', 'aljazair', 'andorra', 'bhutan', 'bosnia dan hercegovina', 'komoro', 'eritrea', 'eswatini', 'kosovo', 'marshall', 'mikronesia', 'nauru', 'palau', 'sao tome dan principe', 'somalia', 'sudan selatan', 'tuvalu'}
write_members_file(os.path.join(root, "6_Organisasi_Perdagangan_Dunia_(WTO)", "memberWTO.ts"), imf - wto_exclude)

# ILO
ilo_extra = {'korea utara', 'kuba'}
write_members_file(os.path.join(root, "7_Organisasi_Buruh_Internasional_(ILO)", "memberILO.ts"), imf | {e for e in ilo_extra if e in db})

# FAO
fao_extra = {'korea utara', 'kuba', 'monako', 'palestina'}
write_members_file(os.path.join(root, "8_Organisasi_Pangan_dan_Pertanian_(FAO)", "memberFAO.ts"), imf | {e for e in fao_extra if e in db})

# ICAO
icao_extra = {'korea utara', 'kuba', 'monako'}
write_members_file(os.path.join(root, "9_Organisasi_Penerbangan_Sipil_Internasional_(ICAO)", "memberICAO.ts"), imf | {e for e in icao_extra if e in db})

# IMO
imo_exclude = {'afganistan', 'andorra', 'bhutan', 'botswana', 'burundi', 'chad', 'kirgizstan', 'laos', 'lesotho', 'liechtenstein', 'malawi', 'mali', 'mongolia', 'nepal', 'niger', 'rwanda', 'swaziland', 'tajikistan', 'uzbekistan', 'zambia', 'zimbabwe'}
imo_extra = {'korea utara', 'kuba'}
write_members_file(os.path.join(root, "10_Organisasi_Maritim_Internasional_(IMO)", "memberIMO.ts"), (imf - imo_exclude) | {e for e in imo_extra if e in db})

# ITU
itu_extra = {'korea utara', 'kuba', 'monako', 'vatikan'}
write_members_file(os.path.join(root, "11_Organisasi_Telekomunikasi_Internasional_(ITU)", "memberITU.ts"), imf | {e for e in itu_extra if e in db})

# WMO
wmo_extra = {'korea utara', 'kuba', 'monako'}
write_members_file(os.path.join(root, "12_Organisasi_Meteorologi_Dunia_(WMO)", "memberWMO.ts"), imf | {e for e in wmo_extra if e in db})
