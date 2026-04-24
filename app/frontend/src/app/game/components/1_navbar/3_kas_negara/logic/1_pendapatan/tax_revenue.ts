"use client"

import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

/**
 * Logika perhitungan pendapatan dari berbagai jenis pajak
 */
export const calculateTaxRevenue = (countryData: CountryData) => {
    const currentTaxes = taxStorage.getTaxes(countryData.name_en) || countryData.pajak;
    const TRADE_KEYS = new Set(["bea_cukai", "transit_sekutu", "transit_non_sekutu", "tarif_ekspor", "tarif_impor"]);
    const allTaxKeys = Object.keys(currentTaxes as any);

    const breakdown = {
        domestic: {} as Record<string, number>,
        trade: {} as Record<string, number>
    };

    allTaxKeys.forEach(key => {
        const pendapatan = (currentTaxes as any)[key]?.pendapatan || 0;
        if (TRADE_KEYS.has(key)) {
            breakdown.trade[key] = pendapatan;
        } else {
            breakdown.domestic[key] = pendapatan;
        }
    });

    return breakdown;
};
