$dir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\region\asia\"
$countries = @(
    "afganistan", "arab_saudi", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", 
    "china", "filipina", "georgia", "hong_kong", "india", "indonesia", "irak", "iran", "israel", 
    "jepang", "kamboja", "kazakhstan", "kirgizstan", "korea_selatan", "korea_utara", "kuwait", 
    "laos", "lebanon", "makau", "malaysia", "maldives", "mongolia", "myanmar", "nepal", "oman", 
    "pakistan", "palestina", "qatar", "republik_timor_leste", "singapura", "sri_lanka", "suriah", 
    "taiwan", "tajikistan", "thailand", "turkmenistan", "uni_emirat_arab", "uzbekistan", "vietnam", 
    "yaman", "yordania"
)

for ($i = 0; $i -lt $countries.Count; $i++) {
    $oldName = $countries[$i] + ".ts"
    $newName = ($i + 54).ToString() + "_" + $countries[$i] + ".ts"
    $oldPath = Join-Path $dir $oldName
    $newPath = Join-Path $dir $newName
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $newName
        Write-Host "Renamed $oldName to $newName"
    } else {
        Write-Warning "File not found: $oldPath"
    }
}
