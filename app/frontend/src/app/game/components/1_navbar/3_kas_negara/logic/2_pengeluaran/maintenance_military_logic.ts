"use client"

import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { expenseStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";

/**
 * Logika perhitungan biaya pemeliharaan infrastruktur dan militer
 */
export const calculateFixedExpenses = (countryData: CountryData) => {
    const expData = expenseStorage.getData(countryData.name_en, countryData);
    
    // Untuk saat ini, pemeliharaan dan militer dihitung sebagai 0 jika belum diimplementasikan detailnya
    // Namun kita tetap mengambil data Bunga Utang yang sudah ada
    const annualDebtInterest = expData.debtInterestPaid || 0;

    return {
        annualMaintenance: 0,
        annualMilitary: 0,
        annualDebtInterest
    };
};
