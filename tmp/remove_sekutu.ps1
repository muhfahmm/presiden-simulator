$dir = "c:\fhm\EM1\app\frontend\src\app\database\data\countries\region\"
$files = Get-ChildItem -Path $dir -Filter "*.ts" -Recurse
Write-Host "Found $($files.Count) files."

foreach ($file in $files) {
    if ($file.Name -eq "index.ts") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Remove the specified line and any leading/trailing whitespace around it that was added
    if ($content -match '"sekutu": \[\],\r?\n\s*') {
        $newContent = $content -replace '"sekutu": \[\],\r?\n\s*', ''
        
        if ($newContent -ne $content) {
            [System.IO.File]::WriteAllText($file.FullName, $newContent)
            # Write-Host "Fixed $($file.Name)"
        }
    }
}
Write-Host "Done."
