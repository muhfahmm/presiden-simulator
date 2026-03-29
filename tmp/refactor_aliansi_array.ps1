$files = Get-ChildItem -Path "app/frontend/src/app/database/data/countries/region" -Filter "*.ts" -Recurse
foreach ($file in $files) {
    if ($file.Name -eq "index.ts") { continue }
    $content = Get-Content $file.FullName -Raw
    
    if ($file.Name -eq "indonesia.ts" ) {
        Write-Host "Updating Indonesia aliansi_aktif to array"
        # Since I previously set it to 4, I'll replace it with the array
        $newContent = $content -replace '"aliansi_aktif":\s*4', '"aliansi_aktif": ["Amerika Serikat", "Jepang", "Australia", "India"]'
    } else {
        # Replace any number with empty array
        $newContent = $content -replace '"aliansi_aktif":\s*\d+', '"aliansi_aktif": []'
    }
    Set-Content $file.FullName $newContent
}
