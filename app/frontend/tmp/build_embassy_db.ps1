$sourcePath = "src/app/database/data/database_mitra_perdagangan"
$destPath = "src/app/database/data/database_kedutaan_besar"

# Create directories
$continents = @("afrika", "asia", "eropa", "na", "oceania", "sa")
foreach ($continent in $continents) {
    $dir = Join-Path $destPath $continent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

$globalIndexContent = @()

foreach ($continent in $continents) {
    $continentSrc = Join-Path $sourcePath $continent
    $continentDest = Join-Path $destPath $continent
    
    $files = Get-ChildItem -Path $continentSrc -Filter "*.ts" | Where-Object { $_.Name -ne "index.ts" }
    
    $indexContent = @()
    
    foreach ($file in $files) {
        $baseName = $file.BaseName
        $parts = $baseName -split '_', 2
        $countryName = $parts[1]
        
        $exportName = $countryName + "EmbassyConfig"
        
        $fileContent = @"
export const $exportName = {
  level: 1, // 1: Konsulat, 2: Kedubes Utama, 3: Hub Regional
  staffSlots: [
    { id: 1, type: "Atase Militer", active: false },
    { id: 2, type: "Atase Ekonomi", active: false },
    { id: 3, type: "Atase Budaya", active: false }
  ],
  facilities: [
    { name: "Sistem Komunikasi", level: 1 },
    { name: "Ruang Intelijen", level: 0 },
    { name: "Sektor Ekonomi", level: 0 }
  ],
  maintenanceCost: 50,
  relationshipBonus: 0.1
};
"@
        
        $destFile = Join-Path $continentDest ($baseName + ".ts")
        Set-Content -Path $destFile -Value $fileContent -Encoding UTF8
        
        $indexContent += "export { $exportName } from './$baseName';"
    }
    
    $indexFile = Join-Path $continentDest "index.ts"
    Set-Content -Path $indexFile -Value ($indexContent -join "`r`n") -Encoding UTF8
    
    $globalIndexContent += "export * from `"./$continent/index`";"
}

$globalIndexFile = Join-Path $destPath "index.ts"
Set-Content -Path $globalIndexFile -Value ($globalIndexContent -join "`r`n") -Encoding UTF8
