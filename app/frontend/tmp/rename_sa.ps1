$basePath = "src/app/database/data/database_mitra_perdagangan/sa"
$mapping = @{
    "argentina" = "195_argentina.ts"
    "bolivia" = "196_bolivia.ts"
    "brazil" = "197_brazil.ts"
    "chile" = "198_chile.ts"
    "ekuador" = "199_ekuador.ts"
    "guiana_prancis" = "200_guiana_prancis.ts"
    "guyana" = "201_guyana.ts"
    "kolombia" = "202_kolombia.ts"
    "paraguay" = "203_paraguay.ts"
    "peru" = "204_peru.ts"
    "suriname" = "205_suriname.ts"
    "uruguay" = "206_uruguay.ts"
    "venezuela" = "207_venezuela.ts"
}

foreach ($oldName in $mapping.Keys) {
    $oldFile = Join-Path $basePath ($oldName + ".ts")
    $newFile = $mapping[$oldName]
    if (Test-Path $oldFile) {
        Rename-Item -Path $oldFile -NewName $newFile -Force
    }
}
