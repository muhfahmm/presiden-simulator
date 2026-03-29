function Rename-RegionFiles($dir, $startNum, $countries) {
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

$baseDir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\region\"

# EROPA (103 - 151)
$eropaDir = Join-Path $baseDir "eropa\"
$eropaCountries = @("albania", "andorra", "austria", "belanda", "belarus", "belgia", "bosnia_dan_hercegovina", "bulgaria", "ceko", "denmark", "estonia", "finlandia", "gibraltar", "hungaria", "inggris", "irlandia", "islandia", "italia", "jerman", "kepulauan_faroe", "kosovo", "kroasia", "latvia", "liechtenstein", "lithuania", "luksemburg", "makedonia_utara", "malta", "moldova", "monako", "montenegro", "norwegia", "polandia", "portugal", "prancis", "republik_rumania", "republik_serbia", "rusia", "san_marino", "siprus", "slovenia", "slowakia", "spanyol", "swedia", "swiss", "turki", "ukraina", "vatikan", "yunani")
Rename-RegionFiles $eropaDir 103 $eropaCountries

# NA (152 - 178)
$naDir = Join-Path $baseDir "na\"
$naCountries = @("amerika_serikat", "antigua_dan_barbuda", "bahama", "barbados", "belize", "bermuda", "costa_rica", "curacao", "dominika", "el_salvador", "greenland", "grenada", "guatemala", "haiti", "honduras", "jamaika", "kanada", "kuba", "meksiko", "nikaragua", "panama", "puerto_rico", "republik_dominika", "saint_kitts_dan_nevis", "saint_lucia", "saint_vincent_dan_grenadine", "trinidad_dan_tobago")
Rename-RegionFiles $naDir 152 $naCountries

# OCEANIA (179 - 194)
$oceaniaDir = Join-Path $baseDir "oceania\"
$oceaniaCountries = @("australia", "fiji", "guam", "kiribati", "marshall", "mikronesia", "nauru", "palau", "papua_nugini", "samoa", "samoa_amerika", "selandia_baru", "tahiti", "tonga", "tuvalu", "vanuatu")
Rename-RegionFiles $oceaniaDir 179 $oceaniaCountries

# SA (195 - 207)
$saDir = Join-Path $baseDir "sa\"
$saCountries = @("argentina", "bolivia", "brazil", "chile", "ekuador", "guiana_prancis", "guyana", "kolombia", "paraguay", "peru", "suriname", "uruguay", "venezuela")
Rename-RegionFiles $saDir 195 $saCountries
