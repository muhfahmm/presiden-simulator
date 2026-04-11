import re

# Database 207
db_text = """
1. afganistan
2. afrika selatan
3. albania
4. aljazair
5. amerika serikat
6. andorra
7. angola
8. antigua dan barbuda
9. arab saudi
10. argentina
11. armenia
12. australia
13. austria
14. azerbaijan
15. bahama
16. bahrain
17. bangladesh
18. barbados
19. belanda
20. belarus
21. belgia
22. belize
23. benin
24. bermuda
25. bhutan
26. bolivia
27. bosnia dan hercegovina
28. botswana
29. brazil
30. brunei
31. bulgaria
32. burkina faso
33. burundi
34. ceko
35. chad
36. chile
37. china
38. costa rica
39. curacao
40. denmark
41. djibouti
42. dominika
43. ekuador
44. el salvador
45. eritrea
46. estonia
47. eswatini
48. ethiopia
49. fiji
50. filipina
51. finlandia
52. gabon
53. gambia
54. georgia
55. ghana
56. gibraltar
57. greenland
58. grenada
59. guam
60. guatemala
61. guiana prancis
62. guinea
63. guinea bissau
64. guyana
65. haiti
66. honduras
67. hong kong
68. hungaria
69. india
70. indonesia
71. inggris
72. irak
73. iran
74. irlandia
75. islandia
76. israel
77. italia
78. jamaika
79. jepang
80. jerman
81. kamboja
82. kamerun
83. kanada
84. kazakhstan
85. kenya
86. kepulauan faroe
87. kirgizstan
88. kiribati
89. kolombia
90. komoro
91. kongo
92. korea selatan
93. korea utara
94. kosovo
95. kroasia
96. kuba
97. kuwait
98. laos
99. latvia
100. lebanon
101. lesotho
102. liberia
103. libya
104. liechtenstein
105. lithuania
106. luksemburg
107. madagaskar
108. makau
109. makedonia utara
110. malawi
111. malaysia
112. maldives
113. mali
114. malta
115. maroko
116. marshall
117. mauritania
118. mauritius
119. meksiko
120. mesir
121. mikronesia
122. moldova
123. monako
124. mongolia
125. montenegro
126. mozambik
127. myanmar
128. namibia
129. nauru
130. nepal
131. niger
132. nigeria
133. nikaragua
134. norwegia
135. oman
136. pakistan
137. palau
138. palestina
139. panama
140. pantai gading
141. papua nugini
142. paraguay
143. peru
144. polandia
145. portugal
146. prancis
147. puerto rico
148. qatar
149. republik afrika tengah
150. republik demokratik kongo
151. republik dominika
152. republik rumania
153. republik serbia
154. republik sudan
155. republik tanzania
156. republik timor leste
157. republik uganda
158. republik zambia
159. republik zimbabwe
160. rusia
161. rwanda
162. saint kitts dan nevis
163. saint lucia
164. saint vincent dan grenadine
165. samoa
166. samoa amerika
167. san marino
168. sao tome dan principe
169. selandia baru
170. senegal
171. seychelles
172. sierra leone
173. singapura
174. siprus
175. slovenia
176. slowakia
177. somalia
178. spanyol
179. sri lanka
180. sudan selatan
181. suriah
182. suriname
183. swedia
184. swiss
185. tahiti
186. taiwan
187. tajikistan
188. tanjung verde
189. thailand
190. togo
191. tonga
192. trinidad dan tobago
193. tunisia
194. turki
195. turkmenistan
196. tuvalu
197. ukraina
198. uni emirat arab
199. uruguay
200. uzbekistan
201. vanuatu
202. vatikan
203. venezuela
204. vietnam
205. yaman
206. yordania
207. yunani
"""

# Parsing DB names
db_names = set()
for line in db_text.strip().split('\n'):
    name = re.sub(r'^\d+\.\s*', '', line).strip()
    db_names.add(name)

# IMF List (191 - English names)
imf_english = """
Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Brazil, Brunei Darussalam, Bulgaria, Burkina Faso, Burundi, Cabo Verde, Cambodia, Cameroon, Canada, Central African Republic, Chad, Chile, China, Colombia, Comoros, Congo (Democratic Republic of the), Congo (Republic of), Costa Rica, Côte d'Ivoire, Croatia, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Eswatini, Ethiopia, Fiji, Finland, France, Gabon, Gambia, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Korea (Republic of), Kosovo, Kuwait, Kyrgyz Republic, Lao P.D.R., Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Moldova, Mongolia, Montenegro, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, North Macedonia, Norway, Oman, Pakistan, Palau, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russian Federation, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Samoa, San Marino, São Tomé and Príncipe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovak Republic, Slovenia, Solomon Islands, Somalia, South Africa, South Sudan, Spain, Sri Lanka, Sudan, Suriname, Sweden, Switzerland, Syria, Tajikistan, Tanzania, Thailand, Timor-Leste, Togo, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States, Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe
"""

# Manual Mapping
mapping = {
    "Afghanistan": "afganistan",
    "South Africa": "afrika selatan",
    "Algeria": "aljazair",
    "United States": "amerika serikat",
    "Antigua and Barbuda": "antigua dan barbuda",
    "Saudi Arabia": "arab saudi",
    "Bahamas": "bahama",
    "Netherlands": "belanda",
    "Belgium": "belgia",
    "Bosnia and Herzegovina": "bosnia dan hercegovina",
    "Brunei Darussalam": "brunei",
    "Burkina Faso": "burkina faso",
    "Czech Republic": "ceko",
    "Congo (Republic of)": "kongo",
    "Korea (Republic of)": "korea selatan",
    "Congo (Democratic Republic of the)": "republik demokratik kongo",
    "Côte d'Ivoire": "pantai gading",
    "Egypt": "mesir",
    "Finland": "finlandia",
    "Gambia": "gambia",
    "Hungary": "hungaria",
    "United Kingdom": "inggris",
    "Iraq": "irak",
    "Ireland": "irlandia",
    "Iceland": "islandia",
    "Italy": "italia",
    "Japan": "jepang",
    "Germany": "jerman",
    "Cambodia": "kamboja",
    "Cameroon": "kamerun",
    "Canada": "kanada",
    "Kyrgyz Republic": "kirgizstan",
    "Colombia": "kolombia",
    "Comoros": "komoro",
    "North Macedonia": "makedonia utara",
    "Maldives": "maldives",
    "Morocco": "maroko",
    "Marshall Islands": "marshall",
    "Mexico": "meksiko",
    "Micronesia": "mikronesia",
    "Norway": "norwegia",
    "Poland": "polandia",
    "France": "prancis",
    "Central African Republic": "republik afrika tengah",
    "Dominican Republic": "republik dominika",
    "Romania": "republik rumania",
    "Serbia": "republik serbia",
    "Sudan": "republik sudan",
    "Tanzania": "republik tanzania",
    "Timor-Leste": "republik timor leste",
    "Uganda": "republik uganda",
    "Zambia": "republik zambia",
    "Zimbabwe": "republik zimbabwe",
    "Russian Federation": "rusia",
    "Saint Kitts and Nevis": "saint kitts dan nevis",
    "Saint Lucia": "saint lucia",
    "Saint Vincent and the Grenadines": "saint vincent dan grenadine",
    "New Zealand": "selandia baru",
    "Slovak Republic": "slowakia",
    "Spain": "spanyol",
    "Sri Lanka": "sri lanka",
    "Syria": "suriah",
    "Switzerland": "swiss",
    "Cabo Verde": "tanjung verde",
    "United Arab Emirates": "uni emirat arab",
    "Greece": "yunani",
    "Lao P.D.R.": "laos",
}

final_members = set()
missing = []

for eng in [x.strip() for x in imf_english.split(',')]:
    if eng in mapping:
        ind = mapping[eng]
        if ind in db_names:
            final_members.add(ind)
        else:
            missing.append(f"{eng} -> {ind} (NOT IN DB)")
    else:
        low = eng.lower()
        if low in db_names:
            final_members.add(low)
        else:
            missing.append(f"{eng} (NOT MAPPED)")

print("FINAL COUNT:", len(final_members))
print("MISSING:", missing)
print("LIST:", sorted(list(final_members)))
