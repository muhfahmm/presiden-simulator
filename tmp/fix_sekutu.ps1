$dir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\region\"
$files = Get-ChildItem -Path $dir -Filter "*.ts" -Recurse
Write-Host "Found $($files.Count) files."

foreach ($file in $files) {
    if ($file.Name -eq "index.ts") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Check if geopolitik exists and sekutu is missing in that specific block
    if ($content -match '"geopolitik": \{' -and $content -notmatch '"geopolitik": \{\s*"sekutu":') {
        # Replace "geopolitik": { [whitespace] "reputasi_diplomatik"
        # with "geopolitik": { [whitespace] "sekutu": [], [whitespace] "reputasi_diplomatik"
        $newContent = $content -replace '("geopolitik": \{)(\s*)("reputasi_diplomatik")', '$1$2"sekutu": [],$2$3'
        
        if ($newContent -ne $content) {
            [System.IO.File]::WriteAllText($file.FullName, $newContent)
            # Write-Host "Updated $($file.Name)"
        }
    }
}
Write-Host "Done."
