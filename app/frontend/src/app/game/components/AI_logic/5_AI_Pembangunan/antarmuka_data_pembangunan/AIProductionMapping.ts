/**
 * AI Production to Trade Commodity Mapping
 * Maps physical building production keys to abstract trade commodity keys.
 */

export const BuildingToTradeKeyMap: Record<string, string[]> = {
    // Mineral & Ekstraksi
    "1_tambang_emas": ["emas"],
    "2_tambang_uranium": ["uranium"],
    "3_tambang_batu_bara": ["batu_bara"],
    "4_sumur_minyak": ["minyak_bumi"],
    "5_sumur_gas": ["gas_alam"],
    "6_tambang_garam": ["garam"],
    "7_tambang_nikel": ["nikel"],
    "8_tambang_litium": ["litium"],
    "9_tambang_tembaga": ["tembaga"],
    "10_tambang_aluminium": ["aluminium"],
    "11_tambang_ltj": ["logam_tanah_jarang"],
    "12_tambang_bijih_besi": ["bijih_besi"],

    // Manufaktur
    "1_pabrik_elektronik": ["semikonduktor"],
    "2_pabrik_mobil": ["mobil"],
    "3_pabrik_motor": ["sepeda_motor"],
    "4_smelter": ["smelter"], 
    "5_pabrik_semen": ["semen_beton"],
    "6_penggergajian_kayu": ["kayu"],

    // Agrikultur
    "1_sawah_padi": ["padi"],
    "2_ladang_gandum": ["gandum_jagung"],
    "3_ladang_jagung": ["gandum_jagung"],
    "4_ladang_umbi": ["sayur_umbi"],
    "5_ladang_kedelai": ["kedelai"],
    "6_perkebunan_sawit": ["kelapa_sawit"],
    "7_perkebunan_teh": ["kopi_teh_kakao"],
    "8_perkebunan_kopi": ["kopi_teh_kakao"],
    "9_perkebunan_kakao": ["kopi_teh_kakao"],
    "11_kebun_sayur": ["sayur_umbi"],

    // Peternakan
    "1_peternakan_unggas": ["ayam_unggas"],
    "2_peternakan_sapi_perah": ["sapi_perah"],
    "3_peternakan_sapi_potong": ["sapi_potong"],
    "4_peternakan_domba_kambing": ["domba_kambing"],

    // Perikanan
    "1_tambak_udang": ["udang_kerang"],
    "2_budidaya_ikan_tawar": ["ikan"],
    "3_budidaya_mutiara": ["udang_kerang"],

    // Olahan Pangan
    "1_pabrik_air_mineral": ["air_mineral"],
    "2_pabrik_gula": ["gula"],
    "3_pabrik_roti": ["roti"],
    "4_pabrik_pengolahan_daging": ["pengolahan_daging"],
    "5_pabrik_mie_instan": ["mie_instan"],

    // Farmasi
    "1_pabrik_farmasi": ["farmasi"],

    // Militer
    "1_pabrik_militer": ["pabrik_amunisi"],
};

export const TradeToBuildingKeyMap: Record<string, string[]> = {};
for (const [buildingKey, tradeKeys] of Object.entries(BuildingToTradeKeyMap)) {
    for (const tradeKey of tradeKeys) {
        if (!TradeToBuildingKeyMap[tradeKey]) {
            TradeToBuildingKeyMap[tradeKey] = [];
        }
        TradeToBuildingKeyMap[tradeKey].push(buildingKey);
    }
}

export function aggregateStocksForTrade(rawStocks: Record<string, number>): Record<string, number> {
    const tradeStocks: Record<string, number> = {};
    for (const [buildingKey, amount] of Object.entries(rawStocks)) {
        const tradeKeys = BuildingToTradeKeyMap[buildingKey];
        if (tradeKeys) {
            for (const tk of tradeKeys) {
                tradeStocks[tk] = (tradeStocks[tk] || 0) + amount;
            }
        }
    }
    return tradeStocks;
}
