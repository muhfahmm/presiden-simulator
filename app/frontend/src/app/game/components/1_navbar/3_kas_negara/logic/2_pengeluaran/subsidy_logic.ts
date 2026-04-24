"use client"

import { priceStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/priceStorage";

/**
 * Logika perhitungan subsidi harga barang pokok
 */
export const calculatePriceSubsidies = () => {
    const priceData = priceStorage.getData();
    
    // Rata-rata pengali harga (Baseline vs Current)
    const avgPriceMultiplier = (
        (priceData.harga_beras / 15000) + (priceData.harga_daging_sapi / 120000) + (priceData.harga_ayam / 40000) +
        (priceData.harga_minyak_goreng / 18000) + (priceData.harga_gula / 16000) + (priceData.harga_telur / 30000) +
        (priceData.harga_bbm / 12500) + (priceData.harga_listrik / 1500) + (priceData.harga_air / 5000) +
        (priceData.harga_obat / 150000) + (priceData.harga_pendidikan / 500000)
    ) / 11;

    // Jika harga di bawah baseline (multiplier < 1.0), negara menanggung subsidi
    const dailySubsidyExpense = Math.max(0, (1.0 - avgPriceMultiplier) * 1500);

    return { 
        dailySubsidyExpense, 
        avgPriceMultiplier 
    };
};
