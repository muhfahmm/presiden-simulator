$files = Get-ChildItem -Path "app/frontend/src/app/database/data/countries/region" -Filter "*.ts" -Recurse
foreach ($file in $files) {
    if ($file.Name -eq "index.ts") { continue }
    $content = Get-Content $file.FullName -Raw
    
    if ($content -match '"Uni Eropa"') {
        Write-Host "Removing 'Uni Eropa' from $($file.Name)"
        # Case 1: "Uni Eropa", (with trailing comma)
        $newContent = $content -replace '"Uni Eropa",\s*', ''
        # Case 2: , "Uni Eropa" (with leading comma)
        $newContent = $newContent -replace ',\s*"Uni Eropa"', ''
        # Case 3: "Uni Eropa" (last or only item)
        $newContent = $newContent -replace '"Uni Eropa"', ''
        
        Set-Content $file.FullName $newContent
    }
}
