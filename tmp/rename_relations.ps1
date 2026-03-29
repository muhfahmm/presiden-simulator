function Rename-RelationFiles($dir, $startNum, $countries) {
    for ($i = 0; $i -lt $countries.Count; $i++) {
        $oldName = $countries[$i] + ".ts"
        $newName = ($i + $startNum).ToString() + "_" + $countries[$i] + ".ts"
        $oldPath = Join-Path $dir $oldName
        $newPath = Join-Path $dir $newName
        
        if (Test-Path $oldPath) {
            Rename-Item -Path $oldPath -NewName $newName
            Write-Host "Renamed $oldName to $newName"
        } else {
             Write-Warning "File not found: $oldPath"
        }
    }
}

$baseDir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\relations\"

# 1. AFRIKA (1 - 53)
$afrikaCountries = @("afrika_selatan", "aljazair", "angola", "benin", "botswana", "burkina_faso", "burundi", "chad", "djibouti", "eritrea", "eswatini", "ethiopia", "gabon", "gambia", "ghana", "guinea", "guinea_bissau", "kamerun", "kenya", "komoro", "kongo", "lesotho", "liberia", "libya", "madagaskar", "malawi", "mali", "maroko", "mauritania", "mauritius", "mesir", "mozambik", "namibia", "niger", "nigeria", "pantai_gading", "republik_afrika_tengah", "republik_demokratik_kongo", "republik_sudan", "republik_tanzania", "republik_uganda", "republik_zambia", "republik_zimbabwe", "rwanda", "sao_tome_dan_principe", "senegal", "seychelles", "sierra_leone", "somalia", "sudan_selatan", "tanjung_verde", "togo", "tunisia")
Rename-RelationFiles (Join-Path $baseDir "afrika\") 1 $afrikaCountries

# 2. ASIA (54 - 102)
$asiaCountries = @("afganistan", "arab_saudi", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", "china", "filipina", "georgia", "hong_kong", "india", "indonesia", "irak", "iran", "israel", "jepang", "kamboja", "kazakhstan", "kirgizstan", "korea_selatan", "korea_utara", "kuwait", "laos", "lebanon", "makau", "malaysia", "maldives", "mongolia", "myanmar", "nepal", "oman", "pakistan", "palestina", "qatar", "republik_timor_leste", "singapura", "sri_lanka", "suriah", "taiwan", "tajikistan", "thailand", "turkmenistan", "uni_emirat_arab", "uzbekistan", "vietnam", "yaman", "yordania")
Rename-RelationFiles (Join-Path $baseDir "asia\") 54 $asiaCountries

# 3. EROPA (103 - 151)
$eropaCountries = @("albania", "andorra", "austria", "belanda", "belarus", "belgia", "bosnia_dan_hercegovina", "bulgaria", "ceko", "denmark", "estonia", "finlandia", "gibraltar", "hungaria", "inggris", "irlandia", "islandia", "italia", "jerman", "kepulauan_faroe", "kosovo", "kroasia", "latvia", "liechtenstein", "lithuania", "luksemburg", "makedonia_utara", "malta", "moldova", "monako", "montenegro", "norwegia", "polandia", "portugal", "prancis", "republik_rumania", "republik_serbia", "rusia", "san_marino", "siprus", "slovenia", "slowakia", "spanyol", "swedia", "swiss", "turki", "ukraina", "vatikan", "yunani")
Rename-RelationFiles (Join-Path $baseDir "eropa\") 103 $eropaCountries

# 4. NA (152 - 178)
$naCountries = @("amerika_serikat", "antigua_dan_barbuda", "bahama", "barbados", "belize", "bermuda", "costa_rica", "curacao", "dominika", "el_salvador", "greenland", "grenada", "guatemala", "haiti", "honduras", "jamaika", "kanada", "kuba", "meksiko", "nikaragua", "panama", "puerto_rico", "republik_dominika", "saint_kitts_dan_nevis", "saint_lucia", "saint_vincent_dan_grenadine", "trinidad_dan_tobago")
Rename-RelationFiles (Join-Path $baseDir "na\") 152 $naCountries

# 5. OCEANIA (179 - 194)
$oceaniaCountries = @("australia", "fiji", "guam", "kiribati", "marshall", "mikronesia", "nauru", "palau", "papua_nugini", "samoa", "samoa_amerika", "selandia_baru", "tahiti", "tonga", "tuvalu", "vanuatu")
Rename-RelationFiles (Join-Path $baseDir "oceania\") 179 $oceaniaCountries

# 6. SA (195 - 207)
$saCountries = @("argentina", "bolivia", "brazil", "chile", "ekuador", "guiana_prancis", "guyana", "kolombia", "paraguay", "peru", "suriname", "uruguay", "venezuela")
Rename-RelationFiles (Join-Path $baseDir "sa\") 195 $saCountries
