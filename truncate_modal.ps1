$f = "c:\fhm\EM\app\frontend\src\app\game\components\2_navigasi_menu\2_navigasi_bawah\3_pembangunan\2-produksi-militer\ProduksiMiliterModal.tsx"
$lines = Get-Content $f
$lines[0..657] | Set-Content $f -Encoding UTF8
Write-Host "Done. Total lines written: 658"
