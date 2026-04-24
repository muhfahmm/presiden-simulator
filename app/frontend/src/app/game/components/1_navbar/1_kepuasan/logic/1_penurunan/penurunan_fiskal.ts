"use client"

import { priceStorage, BASE_PRICES } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";
import { taxStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/TaxStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";
import { AiHunianService } from "@/app/game/components/AI_logic/2_AI_Populasi/2_kebutuhan_hunian/AiHunianService";

/**
 * Logic untuk menghitung faktor-faktor yang menurunkan kepuasan rakyat
 */
export const PenurunanLogic = {
    /**
     * Hitung dampak harga pasar terhadap kepuasan (Daily/Monthly)
     */
    calculatePriceImpact: (country: any) => {
        const priceData = priceStorage.getData(country);
        const keys = Object.keys(BASE_PRICES) as Array<keyof typeof BASE_PRICES>;
        
        const avgPriceMultiplier = keys.reduce((acc, key) => {
            const base = (BASE_PRICES as any)[key] || 1;
            const current = (priceData as any)[key] || base;
            return acc + (current / base);
        }, 0) / keys.length;
        
        // Impact formula: (1.0 - multiplier) * 15
        const impact = Number(((1.0 - avgPriceMultiplier) * 15).toFixed(1));
        
        // Daily Delta for UI
        let dailyDelta = 0;
        if (avgPriceMultiplier <= 0.8) dailyDelta = 0.1;
        else if (avgPriceMultiplier <= 1.2) dailyDelta = 0;
        else if (avgPriceMultiplier <= 1.5) dailyDelta = -0.2;
        else dailyDelta = -0.5;

        return { impact, dailyDelta, avgPriceMultiplier };
    },

    /**
     * Hitung dampak pajak terhadap kepuasan (Daily/Monthly)
     */
    calculateTaxImpact: (country: any) => {
        const taxData = taxStorage.getTaxes(country.name_en) || country.pajak;
        const domesticTaxes = ["ppn", "korporasi", "pendapatan_nasional", "lingkungan", "lainnya"];
        
        let totalTaxSat = 0;
        domesticTaxes.forEach(key => {
            const currentTax = (taxData as any)[key];
            const baseTax = (country.pajak as any)[key];
            totalTaxSat += currentTax?.kepuasan ?? baseTax?.kepuasan ?? 50;
        });
        
        const avgTaxSat = totalTaxSat / domesticTaxes.length;
        
        // Impact formula based on satisfaction score (50 is neutral)
        const impact = Number((avgTaxSat >= 50 
            ? ((avgTaxSat - 50) / 50) * 5 
            : ((avgTaxSat - 50) / 50) * 10).toFixed(1));

        // Daily Delta for UI
        let dailyDelta = 0;
        if (impact > 2.5) dailyDelta = 0.1;
        else if (impact >= 0) dailyDelta = 0;
        else if (impact >= -5) dailyDelta = -0.2;
        else dailyDelta = -0.5;

        return { impact, dailyDelta, avgTaxSat };
    },

    /**
     * Hitung dampak kekurangan hunian (Housing Deficit)
     */
    calculateHousingPenalty: () => {
        const housingStats = AiHunianService.getHousingStats();
        const penalty = housingStats?.penalty || 0;
        const deficit = housingStats?.deficit || 0;
        const homelessPercent = housingStats?.homeless_percent || 0;

        return { penalty, deficit, homelessPercent };
    }
};
