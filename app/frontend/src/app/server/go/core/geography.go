package core

import (
	"strings"
)

// Landmass groups for geographic connectivity
// 0: Isolated / Island
// 1: Afro-Eurasia (Mainland)
// 2: North America (Mainland)
// 3: South America (Mainland)
// 4: Australia & Oceania (Mostly Isolated)
var countryLandmass = map[string]int{
	// Isolated / Islands (ID 0)
	"Indonesia":            0,
	"Jepang":               0,
	"Filipina":             0,
	"Inggris":              0,
	"Australia":            0,
	"Selandia Baru":        0,
	"Islandia":             0,
	"Irlandia":             0,
	"Madagaskar":           0,
	"Sri Lanka":            0,
	"Siprus":               0,
	"Malta":                0,
	"Singapura":            0, // Treated as island for rail logic
	"Bahrain":              0,
	"Maldives":             0,
	"Taiwan":               0,
	"Papua Nugini":         0,
	"Fiji":                 0,
	"Mauritius":            0,
	"Tanjung Verde":        0,
	"Kepulauan Faroe":      0,
	"Greenland":            0,
	"Kuba":                 0,
	"Jamaika":              0,
	"Bahama":               0,

	// Afro-Eurasia (ID 1)
	"Afganistan":           1,
	"Albania":              1,
	"Aljazair":             1,
	"Andorra":              1,
	"Angola":               1,
	"Arab Saudi":           1,
	"Armenia":              1,
	"Austria":              1,
	"Azerbaijan":           1,
	"Bangladesh":           1,
	"Belanda":              1,
	"Belarus":              1,
	"Belgia":               1,
	"Benin":                1,
	"Bhutan":               1,
	"Bosnia Dan Hercegovina": 1,
	"Botswana":             1,
	"Bulgaria":             1,
	"Burkina Faso":         1,
	"Burundi":              1,
	"Ceko":                 1,
	"Chad":                 1,
	"China":                1,
	"Denmark":              1,
	"Djibouti":             1,
	"Eritrea":              1,
	"Estonia":              1,
	"Eswatini":             1,
	"Ethiopia":             1,
	"Finlandia":            1,
	"Gabon":                1,
	"Gambia":               1,
	"Georgia":              1,
	"Ghana":                1,
	"Guinea":               1,
	"Guinea Bissau":        1,
	"Hungaria":             1,
	"India":                1,
	"Irak":                 1,
	"Iran":                 1,
	"Israel":               1,
	"Italia":               1,
	"Jerman":               1,
	"Kamboja":              1,
	"Kamerun":              1,
	"Kazakhstan":           1,
	"Kenya":                1,
	"Kirgizstan":           1,
	"Kongo":                1,
	"Korea Selatan":        1,
	"Korea Utara":          1,
	"Kosovo":               1,
	"Kroasia":              1,
	"Kuwait":               1,
	"Laos":                 1,
	"Latvia":               1,
	"Lebanon":              1,
	"Lesotho":              1,
	"Liberia":              1,
	"Libya":                1,
	"Liechtenstein":        1,
	"Lithuania":            1,
	"Luksemburg":           1,
	"Makedonia Utara":      1,
	"Malawi":               1,
	"Malaysia":             1,
	"Mali":                 1,
	"Maroko":               1,
	"Mauritania":           1,
	"Mesir":                1,
	"Moldova":              1,
	"Monako":               1,
	"Mongolia":             1,
	"Montenegro":           1,
	"Mozambik":             1,
	"Myanmar":              1,
	"Namibia":              1,
	"Nepal":                1,
	"Niger":                1,
	"Nigeria":              1,
	"Norwegia":             1,
	"Oman":                 1,
	"Pakistan":             1,
	"Palestina":            1,
	"Pantai Gading":        1,
	"Polandia":             1,
	"Portugal":             1,
	"Prancis":              1,
	"Qatar":                1,
	"Republik Afrika Tengah": 1,
	"Republik Demokratik Kongo": 1,
	"Republik Rumania":     1,
	"Republik Serbia":      1,
	"Republik Sudan":       1,
	"Republik Tanzania":    1,
	"Republik Uganda":      1,
	"Republik Zambia":      1,
	"Republik Zimbabwe":    1,
	"Rusia":                1,
	"Rwanda":               1,
	"San Marino":           1,
	"Senegal":              1,
	"Sierra Leone":         1,
	"Slovenia":             1,
	"Slowakia":             1,
	"Somalia":              1,
	"Spanyol":              1,
	"Sudan Selatan":        1,
	"Suriah":               1,
	"Swedia":               1,
	"Swiss":                1,
	"Tajikistan":           1,
	"Thailand":             1,
	"Togo":                 1,
	"Tunisia":              1,
	"Turki":                1,
	"Turkmenistan":         1,
	"Ukraina":              1,
	"Uni Emirat Arab":      1,
	"Uzbekistan":           1,
	"Vatikan":              1,
	"Vietnam":              1,
	"Yaman":                1,
	"Yordania":             1,
	"Yunani":               1,

	// North America (ID 2)
	"Amerika Serikat":      2,
	"Kanada":               2,
	"Meksiko":              2,
	"Belize":               2,
	"Costa Rica":           2,
	"El Salvador":          2,
	"Guatemala":            2,
	"Honduras":             2,
	"Nikaragua":            2,
	"Panama":               2,

	// South America (ID 3)
	"Argentina":            3,
	"Bolivia":              3,
	"Brazil":               3,
	"Chile":                3,
	"Ekuador":              3,
	"Guyana":               3,
	"Kolombia":             3,
	"Paraguay":             3,
	"Peru":                 3,
	"Suriname":             3,
	"Uruguay":              3,
	"Venezuela":            3,
}

// IsLandConnected checks if two countries are on the same mainland group
func IsLandConnected(countryA, countryB string) bool {
	// Simple normalize
	a := strings.TrimSpace(countryA)
	b := strings.TrimSpace(countryB)

	groupA, okA := countryLandmass[a]
	groupB, okB := countryLandmass[b]

	// If country not found in map, assume isolated (0) for safety
	if !okA || !okB {
		return false
	}

	// 0 is isolated, shouldn't connect via rail even to itself (internationally)
	if groupA == 0 || groupB == 0 {
		return false
	}

	// Connected if same landmass ID
	return groupA == groupB
}
