$brainPaths = @(
    "c:\fhm\em\app\frontend\src\app\game\components\AI_logic\5_AI_Pembangunan\1_produksi\brain",
    "c:\fhm\em\app\frontend\src\app\game\components\AI_logic\5_AI_Pembangunan\2_produksi_militer\brain",
    "c:\fhm\em\app\frontend\src\app\game\components\AI_logic\5_AI_Pembangunan\3_tempat_umum\brain"
)

foreach ($path in $brainPaths) {
    if (Test-Path $path) {
        $files = Get-ChildItem -Path $path -Filter *.py
        foreach ($file in $files) {
            $content = Get-Content $file.FullName -Raw
            
            # 1. Update Steel Key
            $content = $content -replace '"12_tambang_bijih_besi"', '"4_smelter"'
            
            # 2. Add stocks initialization if missing but used
            if ($content -match 'stocks\.get' -and $content -notmatch 'stocks\s*=\s*(input_data|data)') {
                # Insert after budget line
                $content = $content -replace '(budget\s*=\s*.*get\("budget".*\n)', "`$1        stocks = input_data.get(\"stocks\", {})`n"
            }
            
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "Processed: $($file.Name)"
        }
    }
}
