$basePath = "src/app/database/data/database_mitra_perdagangan/oceania"
$mapping = @{
    "australia" = "179_australia.ts"
    "fiji" = "180_fiji.ts"
    "guam" = "181_guam.ts"
    "kiribati" = "182_kiribati.ts"
    "marshall" = "183_marshall.ts"
    "mikronesia" = "184_mikronesia.ts"
    "nauru" = "185_nauru.ts"
    "palau" = "186_palau.ts"
    "papua_nugini" = "187_papua_nugini.ts"
    "samoa" = "188_samoa.ts"
    "samoa_amerika" = "189_samoa_amerika.ts"
    "selandia_baru" = "190_selandia_baru.ts"
    "tahiti" = "191_tahiti.ts"
    "tonga" = "192_tonga.ts"
    "tuvalu" = "193_tuvalu.ts"
    "vanuatu" = "194_vanuatu.ts"
}

foreach ($oldName in $mapping.Keys) {
    $oldFile = Join-Path $basePath ($oldName + ".ts")
    $newFile = $mapping[$oldName]
    if (Test-Path $oldFile) {
        Rename-Item -Path $oldFile -NewName $newFile -Force
    }
}
