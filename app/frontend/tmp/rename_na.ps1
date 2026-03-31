$basePath = "src/app/database/data/database_mitra_perdagangan/na"
$mapping = @{
    "amerika_serikat" = "152_amerika_serikat.ts"
    "antigua_dan_barbuda" = "153_antigua_dan_barbuda.ts"
    "bahama" = "154_bahama.ts"
    "barbados" = "155_barbados.ts"
    "belize" = "156_belize.ts"
    "bermuda" = "157_bermuda.ts"
    "costa_rica" = "158_costa_rica.ts"
    "curacao" = "159_curacao.ts"
    "dominika" = "160_dominika.ts"
    "el_salvador" = "161_el_salvador.ts"
    "greenland" = "162_greenland.ts"
    "grenada" = "163_grenada.ts"
    "guatemala" = "164_guatemala.ts"
    "haiti" = "165_haiti.ts"
    "honduras" = "166_honduras.ts"
    "jamaika" = "167_jamaika.ts"
    "kanada" = "168_kanada.ts"
    "kuba" = "169_kuba.ts"
    "meksiko" = "170_meksiko.ts"
    "nikaragua" = "171_nikaragua.ts"
    "panama" = "172_panama.ts"
    "puerto_rico" = "173_puerto_rico.ts"
    "republik_dominika" = "174_republik_dominika.ts"
    "saint_kitts_dan_nevis" = "175_saint_kitts_dan_nevis.ts"
    "saint_lucia" = "176_saint_lucia.ts"
    "saint_vincent_dan_grenadine" = "177_saint_vincent_dan_grenadine.ts"
    "trinidad_dan_tobago" = "178_trinidad_dan_tobago.ts"
}

foreach ($oldName in $mapping.Keys) {
    $oldFile = Join-Path $basePath ($oldName + ".ts")
    $newFile = $mapping[$oldName]
    if (Test-Path $oldFile) {
        Rename-Item -Path $oldFile -NewName $newFile -Force
    }
}
