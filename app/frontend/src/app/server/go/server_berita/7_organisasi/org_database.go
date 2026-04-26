package organisasi

// ═══════════════════════════════════════════════════════════════════════
// ORGANIZATION MEMBERSHIP DATABASE (Go mirror of TypeScript database)
// Source: database_organisasi_internasional/**
//
// This file is the authoritative Go-side copy of which countries belong
// to which organizations. It MUST stay in sync with the TypeScript DB.
// ═══════════════════════════════════════════════════════════════════════

// --- PBB (UN) ORGANIZATIONS ---
// Most PBB orgs have ~190 members (nearly universal membership).
// For PBB news, we only generate "join/leave" for countries NOT already in the org.
// Since almost all countries are in IMF/WHO/etc., PBB membership changes are very rare.

// PBBOrgMembers maps PBB org key -> list of member countries (lowercase)
var PBBOrgMembers = map[string][]string{
	"IMF": {
		"afganistan", "afrika selatan", "albania", "aljazair", "amerika serikat",
		"andorra", "angola", "antigua dan barbuda", "arab saudi", "argentina",
		"armenia", "australia", "austria", "azerbaijan", "bahama", "bahrain",
		"bangladesh", "barbados", "belanda", "belarus", "belgia", "belize",
		"benin", "bhutan", "bolivia", "bosnia dan hercegovina", "botswana",
		"brazil", "brunei", "bulgaria", "burkina faso", "burundi", "ceko",
		"chad", "chile", "china", "costa rica", "denmark", "djibouti",
		"dominika", "ekuador", "el salvador", "eritrea", "estonia", "eswatini",
		"ethiopia", "fiji", "filipina", "finlandia", "gabon", "gambia",
		"georgia", "ghana", "grenada", "guatemala", "guinea", "guinea-bissau",
		"guyana", "haiti", "honduras", "hungaria", "india", "indonesia",
		"inggris", "irak", "iran", "irlandia", "islandia", "israel", "italia",
		"jamaika", "jepang", "jerman", "kamboja", "kamerun", "kanada",
		"kazakhstan", "kenya", "kirgizstan", "kiribati", "kolombia", "komoro",
		"kongo", "korea selatan", "kosovo", "kuwait", "laos", "latvia",
		"lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania",
		"luksemburg", "madagaskar", "makedonia utara", "malawi", "malaysia",
		"maldives", "mali", "malta", "maroko", "marshall", "mauritania",
		"mauritius", "meksiko", "mesir", "mikronesia", "moldova", "mongolia",
		"montenegro", "mozambik", "myanmar", "namibia", "nauru", "nepal",
		"niger", "nigeria", "nikaragua", "norwegia", "oman", "pakistan",
		"palau", "panama", "pantai gading", "papua nugini", "paraguay", "peru",
		"polandia", "portugal", "qatar", "republik afrika tengah",
		"republik demokratik kongo", "republik dominika", "republik rumania",
		"republik serbia", "republik sudan", "republik tanzania",
		"republik timor-leste", "republik uganda", "republik zambia",
		"republik zimbabwe", "rusia", "rwanda", "saint kitts dan nevis",
		"saint lucia", "saint vincent dan grenadine", "samoa", "san marino",
		"sao tome dan principe", "selandia baru", "senegal", "seychelles",
		"sierra leone", "singapura", "siprus", "slovenia", "slowakia",
		"somalia", "spanyol", "sri lanka", "sudan selatan", "suriah",
		"suriname", "swedia", "swiss", "tajikistan", "tanjung verde",
		"thailand", "togo", "tonga", "trinidad dan tobago", "tunisia",
		"turki", "turkmenistan", "tuvalu", "ukraina", "uni emirat arab",
		"uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yaman",
		"yordania", "yunani",
	},
	// WHO, UNESCO, WTO, ILO, FAO, ICAO, IMO, ITU, WMO, Bank Dunia, Interpol
	// all have near-identical membership to IMF (~190 countries).
	// We use "IMF" as the reference for all PBB orgs.
}

// PBBOrgNames maps display name used in news -> org key
var PBBOrgNames = map[string]string{
	"PBB":        "IMF",
	"IMF":        "IMF",
	"Bank Dunia": "IMF",
	"WHO":        "IMF",
	"UNESCO":     "IMF",
	"WTO":        "IMF",
	"Interpol":   "IMF",
	"ILO":        "IMF",
	"FAO":        "IMF",
	"ICAO":       "IMF",
	"IMO":        "IMF",
	"ITU":        "IMF",
	"WMO":        "IMF",
}

// --- REGIONAL ORGANIZATIONS ---
// RegionalOrgMembers maps org display name -> list of member countries (lowercase)
var RegionalOrgMembers = map[string][]string{
	"ASEAN": {
		"brunei", "filipina", "indonesia", "kamboja", "laos",
		"malaysia", "myanmar", "singapura", "thailand", "vietnam",
	},
	"Uni Eropa": {
		"austria", "belanda", "belgia", "bulgaria", "ceko", "denmark",
		"estonia", "finlandia", "hungaria", "irlandia", "italia", "jerman",
		"kroasia", "latvia", "lithuania", "luksemburg", "malta", "polandia",
		"portugal", "republik rumania", "siprus", "slovenia", "slowakia",
		"spanyol", "swedia", "yunani",
	},
	"Liga Arab": {
		"aljazair", "arab saudi", "bahrain", "djibouti", "irak", "komoro",
		"kuwait", "lebanon", "libya", "maroko", "mauritania", "mesir",
		"oman", "palestina", "qatar", "republik sudan", "somalia", "suriah",
		"tunisia", "uni emirat arab", "yaman", "yordania",
	},
	"Uni Afrika": {
		"afrika selatan", "aljazair", "angola", "benin", "botswana",
		"burkina faso", "burundi", "chad", "djibouti", "eritrea", "eswatini",
		"ethiopia", "gabon", "gambia", "ghana", "guinea", "kamerun", "kenya",
		"komoro", "kongo", "lesotho", "liberia", "libya", "madagaskar",
		"malawi", "mali", "maroko", "mauritania", "mauritius", "mesir",
		"mozambik", "namibia", "niger", "nigeria", "pantai gading",
		"republik afrika tengah", "republik demokratik kongo", "republik sudan",
		"rwanda", "sao tome dan principe", "senegal", "seychelles",
		"sierra leone", "somalia", "sudan selatan", "tanjung verde", "togo",
		"tunisia",
	},
	"OKI": {
		"afganistan", "aljazair", "arab saudi", "azerbaijan", "bahrain",
		"bangladesh", "benin", "brunei", "burkina faso", "chad", "djibouti",
		"gabon", "gambia", "guinea", "guyana", "indonesia", "irak", "iran",
		"kamerun", "kazakhstan", "kirgizstan", "komoro", "kuwait", "lebanon",
		"libya", "malaysia", "mali", "maroko", "mauritania", "mesir",
		"mozambik", "niger", "nigeria", "oman", "pakistan", "palestina",
		"pantai gading", "qatar", "republik sudan", "senegal", "sierra leone",
		"somalia", "suriah", "suriname", "tajikistan", "togo", "tunisia",
		"turki", "turkmenistan", "uni emirat arab", "uzbekistan", "yaman",
		"yordania",
	},
	"BRICS": {
		"afrika selatan", "arab saudi", "brazil", "china", "ethiopia",
		"india", "iran", "mesir", "rusia", "uni emirat arab",
	},
	"NATO": {
		"albania", "amerika serikat", "belanda", "belgia", "bulgaria", "ceko",
		"denmark", "estonia", "finlandia", "hungaria", "inggris", "islandia",
		"italia", "jerman", "kanada", "kroasia", "latvia", "lithuania",
		"luksemburg", "makedonia utara", "montenegro", "norwegia", "polandia",
		"portugal", "republik rumania", "slovenia", "slowakia", "spanyol",
		"swedia", "turki", "yunani",
	},
	"OPEC": {
		"aljazair", "arab saudi", "gabon", "irak", "iran", "kongo",
		"kuwait", "libya", "nigeria", "uni emirat arab", "venezuela",
	},
	"G20": {
		"afrika selatan", "amerika serikat", "arab saudi", "argentina",
		"australia", "brazil", "china", "india", "indonesia", "inggris",
		"italia", "jepang", "jerman", "kanada", "korea selatan", "meksiko",
		"rusia", "turki",
	},
	"APEC": {
		"amerika serikat", "australia", "brunei", "chile", "china", "filipina",
		"indonesia", "jepang", "kanada", "korea selatan", "malaysia", "meksiko",
		"papua nugini", "peru", "rusia", "selandia baru", "singapura",
		"thailand", "vietnam",
	},
	"SCO": {
		"china", "india", "iran", "kazakhstan", "kirgizstan", "pakistan",
		"rusia", "tajikistan", "uzbekistan",
	},
	"OAS": {
		"amerika serikat", "argentina", "bahama", "barbados", "belize",
		"bolivia", "brazil", "chile", "costa rica", "dominika", "ekuador",
		"el salvador", "grenada", "guatemala", "guyana", "haiti", "honduras",
		"jamaika", "kanada", "kolombia", "meksiko", "nikaragua", "panama",
		"paraguay", "peru", "republik dominika", "saint lucia", "suriname",
		"trinidad dan tobago", "uruguay", "venezuela",
	},
	"GCC": {
		"arab saudi", "bahrain", "kuwait", "oman", "qatar", "uni emirat arab",
	},
	"MERCOSUR": {
		"argentina", "bolivia", "brazil", "paraguay", "uruguay",
	},
	"Commonwealth": {
		"afrika selatan", "australia", "bahama", "bangladesh", "barbados",
		"belize", "botswana", "fiji", "ghana", "guyana", "india", "inggris",
		"jamaika", "kamerun", "kanada", "kenya", "malaysia", "malta",
		"mauritius", "mozambik", "namibia", "nigeria", "pakistan",
		"papua nugini", "rwanda", "samoa", "selandia baru", "singapura",
		"sri lanka", "tonga", "trinidad dan tobago", "vanuatu",
	},
	"G7": {
		"amerika serikat", "inggris", "italia", "jepang", "jerman", "kanada",
	},
	"QUAD": {
		"amerika serikat", "australia", "india", "jepang",
	},
	"OECD": {
		"amerika serikat", "australia", "austria", "belanda", "belgia", "ceko",
		"chile", "denmark", "estonia", "finlandia", "hungaria", "inggris",
		"irlandia", "islandia", "israel", "italia", "jepang", "jerman",
		"kanada", "kolombia", "korea selatan", "latvia", "lithuania",
		"luksemburg", "meksiko", "norwegia", "polandia", "portugal",
		"selandia baru", "slovenia", "slowakia", "spanyol", "swedia", "swiss",
		"turki", "yunani",
	},
}

// RegionalOrgList is the list of regional org names used for news generation
var RegionalOrgList []string

func init() {
	RegionalOrgList = make([]string, 0, len(RegionalOrgMembers))
	for k := range RegionalOrgMembers {
		RegionalOrgList = append(RegionalOrgList, k)
	}
}

// ═══════════════════════════════════════════════════════════════════════
// MEMBERSHIP CHECK HELPERS
// ═══════════════════════════════════════════════════════════════════════

// IsMemberOfRegionalOrg checks if a country is already a member of a regional org
func IsMemberOfRegionalOrg(country string, orgName string) bool {
	members, ok := RegionalOrgMembers[orgName]
	if !ok {
		return false
	}
	for _, m := range members {
		if m == country {
			return true
		}
	}
	return false
}

// IsMemberOfPBBOrg checks if a country is already a member of a PBB/UN org
func IsMemberOfPBBOrg(country string) bool {
	// Use IMF as reference (near-universal)
	for _, m := range PBBOrgMembers["IMF"] {
		if m == country {
			return true
		}
	}
	return false
}

// ═══════════════════════════════════════════════════════════════════════
// ELIGIBILITY CHECK: Can a country realistically join an organization?
// Mirrors the user's frontend registration logic.
// ═══════════════════════════════════════════════════════════════════════

// RegionalEligibility defines which countries CAN potentially join each org.
// If a country is NOT in this list, it CANNOT join that org.
// This prevents absurd news like "Indonesia bergabung dengan NATO".
var RegionalEligibility = map[string]func(country string) bool{
	"ASEAN": func(c string) bool {
		// Only Southeast Asian nations
		aseanEligible := map[string]bool{
			"brunei": true, "filipina": true, "indonesia": true, "kamboja": true,
			"laos": true, "malaysia": true, "myanmar": true, "singapura": true,
			"thailand": true, "vietnam": true, "republik timor-leste": true,
		}
		return aseanEligible[c]
	},
	"Uni Eropa": func(c string) bool {
		// European nations only
		euEligible := map[string]bool{
			"austria": true, "belanda": true, "belgia": true, "bulgaria": true,
			"ceko": true, "denmark": true, "estonia": true, "finlandia": true,
			"hungaria": true, "irlandia": true, "italia": true, "jerman": true,
			"kroasia": true, "latvia": true, "lithuania": true, "luksemburg": true,
			"malta": true, "polandia": true, "portugal": true, "republik rumania": true,
			"siprus": true, "slovenia": true, "slowakia": true, "spanyol": true,
			"swedia": true, "yunani": true,
			// Candidates / potential:
			"albania": true, "bosnia dan hercegovina": true, "makedonia utara": true,
			"montenegro": true, "republik serbia": true, "ukraina": true, "moldova": true,
			"georgia": true, "turki": true, "islandia": true, "norwegia": true, "swiss": true,
		}
		return euEligible[c]
	},
	"Liga Arab": func(c string) bool {
		// Arab nations
		eligible := map[string]bool{
			"aljazair": true, "arab saudi": true, "bahrain": true, "djibouti": true,
			"irak": true, "komoro": true, "kuwait": true, "lebanon": true,
			"libya": true, "maroko": true, "mauritania": true, "mesir": true,
			"oman": true, "palestina": true, "qatar": true, "republik sudan": true,
			"somalia": true, "suriah": true, "tunisia": true, "uni emirat arab": true,
			"yaman": true, "yordania": true,
		}
		return eligible[c]
	},
	"Uni Afrika": func(c string) bool {
		// African nations
		eligible := map[string]bool{
			"afrika selatan": true, "aljazair": true, "angola": true, "benin": true,
			"botswana": true, "burkina faso": true, "burundi": true, "chad": true,
			"djibouti": true, "eritrea": true, "eswatini": true, "ethiopia": true,
			"gabon": true, "gambia": true, "ghana": true, "guinea": true,
			"guinea-bissau": true, "kamerun": true, "kenya": true, "komoro": true,
			"kongo": true, "lesotho": true, "liberia": true, "libya": true,
			"madagaskar": true, "malawi": true, "mali": true, "maroko": true,
			"mauritania": true, "mauritius": true, "mesir": true, "mozambik": true,
			"namibia": true, "niger": true, "nigeria": true, "pantai gading": true,
			"republik afrika tengah": true, "republik demokratik kongo": true,
			"republik sudan": true, "republik tanzania": true, "republik uganda": true,
			"republik zambia": true, "republik zimbabwe": true, "rwanda": true,
			"sao tome dan principe": true, "senegal": true, "seychelles": true,
			"sierra leone": true, "somalia": true, "sudan selatan": true,
			"tanjung verde": true, "togo": true, "tunisia": true,
		}
		return eligible[c]
	},
	"GCC": func(c string) bool {
		// Gulf states only
		eligible := map[string]bool{
			"arab saudi": true, "bahrain": true, "kuwait": true,
			"oman": true, "qatar": true, "uni emirat arab": true,
		}
		return eligible[c]
	},
	"NATO": func(c string) bool {
		// North Atlantic / European / North American nations
		eligible := map[string]bool{
			"albania": true, "amerika serikat": true, "belanda": true, "belgia": true,
			"bulgaria": true, "ceko": true, "denmark": true, "estonia": true,
			"finlandia": true, "hungaria": true, "inggris": true, "islandia": true,
			"italia": true, "jerman": true, "kanada": true, "kroasia": true,
			"latvia": true, "lithuania": true, "luksemburg": true, "makedonia utara": true,
			"montenegro": true, "norwegia": true, "polandia": true, "portugal": true,
			"republik rumania": true, "slovenia": true, "slowakia": true, "spanyol": true,
			"swedia": true, "turki": true, "yunani": true,
			// Potential candidates:
			"bosnia dan hercegovina": true, "georgia": true, "ukraina": true,
			"moldova": true, "republik serbia": true,
		}
		return eligible[c]
	},
	"OAS": func(c string) bool {
		// Americas
		eligible := map[string]bool{
			"amerika serikat": true, "argentina": true, "bahama": true, "barbados": true,
			"belize": true, "bolivia": true, "brazil": true, "chile": true,
			"costa rica": true, "dominika": true, "ekuador": true, "el salvador": true,
			"grenada": true, "guatemala": true, "guyana": true, "haiti": true,
			"honduras": true, "jamaika": true, "kanada": true, "kolombia": true,
			"meksiko": true, "nikaragua": true, "panama": true, "paraguay": true,
			"peru": true, "republik dominika": true, "saint kitts dan nevis": true,
			"saint lucia": true, "saint vincent dan grenadine": true, "suriname": true,
			"trinidad dan tobago": true, "uruguay": true, "venezuela": true,
		}
		return eligible[c]
	},
	"MERCOSUR": func(c string) bool {
		// South America
		eligible := map[string]bool{
			"argentina": true, "bolivia": true, "brazil": true, "chile": true,
			"kolombia": true, "ekuador": true, "guyana": true, "paraguay": true,
			"peru": true, "suriname": true, "uruguay": true, "venezuela": true,
		}
		return eligible[c]
	},
	"OKI": func(c string) bool {
		// Negara dengan mayoritas penduduk beragama Islam
		eligible := map[string]bool{
			"afganistan": true, "aljazair": true, "arab saudi": true, "azerbaijan": true, "bahrain": true,
			"bangladesh": true, "benin": true, "brunei": true, "burkina faso": true, "chad": true, "djibouti": true,
			"gabon": true, "gambia": true, "guinea": true, "guyana": true, "indonesia": true, "irak": true, "iran": true,
			"kamerun": true, "kazakhstan": true, "kirgizstan": true, "komoro": true, "kuwait": true, "lebanon": true,
			"libya": true, "malaysia": true, "mali": true, "maroko": true, "mauritania": true, "mesir": true,
			"mozambik": true, "niger": true, "nigeria": true, "oman": true, "pakistan": true, "palestina": true,
			"pantai gading": true, "qatar": true, "republik sudan": true, "senegal": true, "sierra leone": true,
			"somalia": true, "suriah": true, "suriname": true, "tajikistan": true, "togo": true, "tunisia": true,
			"turki": true, "turkmenistan": true, "uni emirat arab": true, "uzbekistan": true, "yaman": true,
			"yordania": true,
		}
		return eligible[c]
	},
	"Commonwealth": func(c string) bool {
		// Negara Persemakmuran Inggris (Commonwealth)
		eligible := map[string]bool{
			"afrika selatan": true, "australia": true, "bahama": true, "bangladesh": true, "barbados": true,
			"belize": true, "botswana": true, "fiji": true, "ghana": true, "guyana": true, "india": true, "inggris": true,
			"jamaika": true, "kamerun": true, "kanada": true, "kenya": true, "malaysia": true, "malta": true,
			"mauritius": true, "mozambik": true, "namibia": true, "nigeria": true, "pakistan": true,
			"papua nugini": true, "rwanda": true, "samoa": true, "selandia baru": true, "singapura": true,
			"sri lanka": true, "tonga": true, "trinidad dan tobago": true, "vanuatu": true,
		}
		return eligible[c]
	},
	// BRICS, G20, G7, QUAD, APEC, SCO, OPEC, OECD
	// These are invitation-based or have looser geographic rules.
	// We allow any NPC nation for these (they can join/leave by invitation).
}

// IsEligibleForOrg checks if a country can realistically join a regional org.
// Returns true if there's no restriction (open orgs) or if the country is in the eligible set.
func IsEligibleForOrg(country string, orgName string) bool {
	checkFn, hasRestriction := RegionalEligibility[orgName]
	if !hasRestriction {
		// Open organization (BRICS, G20, etc.) - any country can potentially join
		return true
	}
	return checkFn(country)
}
