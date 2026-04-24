"use client"

import { calculateGoldMineRevenue } from "@/app/game/components/1_navbar/3_kas_negara/GoldMineRevenue";
import { calculateTempatUmumRevenue } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/3-tempat-umum/logic/TempatUmumRevenueLogic";
import { incomeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

/**
 * Logika perhitungan pendapatan dari sumber daya alam, jasa, dan investasi
 */
export const calculateOtherRevenues = (countryData: CountryData, buildingDeltas: Record<string, number>) => {
    const incomeData = incomeStorage.getData();
    
    // Resource Income (Gold)
    const goldRevenue = calculateGoldMineRevenue(buildingDeltas, countryData);
    
    // Services Income (Public Places)
    const serviceRevenue = calculateTempatUmumRevenue(buildingDeltas, countryData);

    return {
        resources: {
            emas: goldRevenue * 365
        },
        other: {
            grants: incomeData.grants || 0,
            investments: incomeData.investments || 0,
            sektor_jasa: serviceRevenue * 365
        }
    };
};
