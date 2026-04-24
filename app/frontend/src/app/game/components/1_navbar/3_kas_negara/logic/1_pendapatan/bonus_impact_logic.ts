"use client"

import { religionStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/religionStorage";
import { ideologyStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/ideologyStorage";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";

// Bonus/Penalty constants
import { PROTESTAN_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/2_protestan/1_plus/plus";
import { ORTODOKS_RAW_PRODUCTION_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/4_ortodoks/1_plus/plus";
import { HINDU_AGRICULTURE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/5_hindu/1_plus/plus";
import { HINDU_LIVESTOCK_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/5_hindu/2_minus/minus";
import { ATEISME_MANUFACTURING_BONUS, ATEISME_AGRICULTURE_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/7_ateisme/1_plus/plus";
import { KONGHUCU_TAX_EFFICIENCY_BONUS, KONGHUCU_MANUFACTURING_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/9_konghucu/1_plus/plus";
import { TAOISME_HEAVY_INDUSTRY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/logic/10_taoisme/2_minus/minus";
import { KAPITALISME_TREASURY_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/3_kapitalisme/1_plus/plus";
import { SOSIALISME_TREASURY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/4_sosialisme/2_minus/minus";
import { LIBERALISME_COMMERCIAL_GROWTH_BONUS } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/5_liberalisme/1_plus/plus";
import { NASIONALISME_IMPORT_COST_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/7_nasionalisme/2_minus/minus";

export interface RevenueInput {
    domestic: Record<string, number>;
    trade: Record<string, number>;
    resources: Record<string, number>;
    other: Record<string, number>;
}

/**
 * Logika perhitungan bonus dan penalti dari Agama dan Ideologi
 */
export const calculateSocioCulturalImpacts = (
    countryData: CountryData, 
    revenues: RevenueInput
) => {
    const impacts: Record<string, number> = {};
    const currentReligion = religionStorage.getCurrentReligion(countryData.religion);
    const currentIdeology = ideologyStorage.getCurrentIdeology(countryData.ideology);

    const domestic = revenues.domestic || {};
    const trade = revenues.trade || {};
    const resources = revenues.resources || {};
    const other = revenues.other || {};

    const taxRevenueAnnual = Object.values(domestic).reduce((a: number, b: number) => a + (Number(b) || 0), 0) +
                           Object.values(trade).reduce((a: number, b: number) => a + (Number(b) || 0), 0);

    // Religion Impacts
    if (currentReligion === "Protestan") {
        impacts["pertumbuhan_ekonomi"] = taxRevenueAnnual * PROTESTAN_GROWTH_BONUS;
    }
    if (currentReligion === "Kristen Ortodoks") {
        const rawRevenue: number = Object.values(resources).reduce((a: number, b: number) => a + (Number(b) || 0), 0);
        impacts["bonus_produksi_ortodoks"] = rawRevenue * ORTODOKS_RAW_PRODUCTION_BONUS;
    }
    if (currentReligion === "Hindu") {
        const agrikultur = (domestic["pajak_agrikultur"] || domestic["agrikultur"] || 0) as number;
        const peternakan = (domestic["pajak_peternakan"] || domestic["peternakan"] || 0) as number;
        if (agrikultur > 0) impacts["bonus_pertanian_hindu"] = agrikultur * HINDU_AGRICULTURE_BONUS;
        if (peternakan > 0) impacts["penalti_peternakan_hindu"] = peternakan * HINDU_LIVESTOCK_PENALTY;
    }
    if (currentReligion === "Atheisme") {
        const manufaktur = (domestic["pajak_manufaktur"] || domestic["manufaktur"] || 0) as number;
        const agrikultur = (domestic["pajak_agrikultur"] || domestic["agrikultur"] || 0) as number;
        if (manufaktur > 0) impacts["bonus_manufaktur_ateisme"] = manufaktur * ATEISME_MANUFACTURING_BONUS;
        if (agrikultur > 0) impacts["bonus_pertanian_ateisme"] = agrikultur * ATEISME_AGRICULTURE_BONUS;
    }
    if (currentReligion === "Konghucu") {
        impacts["efisiensi_pajak_konghucu"] = taxRevenueAnnual * KONGHUCU_TAX_EFFICIENCY_BONUS;
        const manufaktur = (domestic["pajak_manufaktur"] || domestic["manufaktur"] || 0) as number;
        if (manufaktur > 0) impacts["bonus_manufaktur_konghucu"] = manufaktur * KONGHUCU_MANUFACTURING_BONUS;
    }
    if (currentReligion === "Taoisme") {
        const heavyIndustry = (domestic["pajak_manufaktur"] || domestic["manufaktur"] || 0) as number +
                              (domestic["pajak_ekstraksi"] || domestic["ekstraksi"] || 0) as number;
        impacts["penalti_industri_taoisme"] = heavyIndustry * TAOISME_HEAVY_INDUSTRY_PENALTY;
    }

    // Ideology Impacts
    if (currentIdeology === "Kapitalisme") {
        impacts["efisiensi_pasar_kapitalisme"] = taxRevenueAnnual * KAPITALISME_TREASURY_GROWTH_BONUS;
    }
    if (currentIdeology === "Sosialisme") {
        impacts["penalti_kas_sosialisme"] = taxRevenueAnnual * SOSIALISME_TREASURY_PENALTY;
    }
    if (currentIdeology === "Liberalisme") {
        const serviceRevenue = (other["sektor_jasa"] || 0) as number;
        impacts["pertumbuhan_komersial_liberalisme"] = serviceRevenue * LIBERALISME_COMMERCIAL_GROWTH_BONUS;
    }
    if (currentIdeology === "Nasionalisme") {
        const importTariff = (trade["tarif_impor"] || 0) as number;
        impacts["penalti_impor_nasionalisme"] = -(importTariff * NASIONALISME_IMPORT_COST_PENALTY);
    }

    return impacts;
};
