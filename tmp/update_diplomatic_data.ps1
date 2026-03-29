$files = Get-ChildItem -Path "app/frontend/src/app/database/data/countries/region" -Filter "*.ts" -Recurse
foreach ($file in $files) {
    if ($file.Name -eq "index.ts") { continue }
    $content = Get-Content $file.FullName -Raw
    
    # Check if any of the new fields already exist to avoid duplicate injection
    if ($content -match '"reputasi_diplomatik":') {
        Write-Host "Skipping $($file.Name) - already has diplomatic fields"
        continue
    }

    if ($content -match '"geopolitik":\s*\{') {
        Write-Host "Updating $($file.Name)"
        $fields = "`n    `"reputasi_diplomatik`": `"Netral`",`n    `"aliansi_aktif`": 0,`n    `"pengaruh_global`": 0,`n    `"peringkat_diplomasi`": 100,"
        
        if ($file.Name -eq "indonesia.ts") {
             $fields = "`n    `"reputasi_diplomatik`": `"Unggul`",`n    `"aliansi_aktif`": 4,`n    `"pengaruh_global`": 78.2,`n    `"peringkat_diplomasi`": 12,"
        }

        $newContent = $content -replace '("geopolitik":\s*\{)', "`$1$fields"
        Set-Content $file.FullName $newContent
    }
}
