$dir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\region\afrika\"
$countries = @(
    "afrika_selatan", "aljazair", "angola", "benin", "botswana", "burkina_faso", "burundi", "chad", 
    "djibouti", "eritrea", "eswatini", "ethiopia", "gabon", "gambia", "ghana", "guinea", "guinea_bissau", 
    "kamerun", "kenya", "komoro", "kongo", "lesotho", "liberia", "libya", "madagaskar", "malawi", "mali", 
    "maroko", "mauritania", "mauritius", "mesir", "mozambik", "namibia", "niger", "nigeria", "pantai_gading", 
    "republik_afrika_tengah", "republik_demokratik_kongo", "republik_sudan", "republik_tanzania", 
    "republik_uganda", "republik_zambia", "republik_zimbabwe", "rwanda", "sao_tome_dan_principe", 
    "senegal", "seychelles", "sierra_leone", "somalia", "sudan_selatan", "tanjung_verde", "togo", "tunisia"
)

for ($i = 0; $i -lt $countries.Count; $i++) {
    $oldName = $countries[$i] + ".ts"
    $newName = ($i + 1).ToString() + "_" + $countries[$i] + ".ts"
    $oldPath = Join-Path $dir $oldName
    $newPath = Join-Path $dir $newName
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $newName
        Write-Host "Renamed $oldName to $newName"
    } else {
        Write-Warning "File not found: $oldPath"
    }
}
