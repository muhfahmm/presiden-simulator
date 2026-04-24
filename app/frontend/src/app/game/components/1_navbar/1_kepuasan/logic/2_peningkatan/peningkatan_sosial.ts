"use client"

import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { gameStorage } from "@/app/game/gamestorage";

/**
 * Logic untuk menghitung faktor-faktor yang meningkatkan kepuasan rakyat
 */
export const PeningkatanLogic = {
    /**
     * Hitung bonus kepuasan dari infrastruktur yang dibangun
     */
    getInfrastructureBonus: () => {
        const sessionS = gameStorage.getSession() as any;
        const countryNameS = sessionS?.country || "Indonesia";
        const countryS = countries.find(c => 
            c.name_id === countryNameS || 
            c.name_en === countryNameS || 
            (c as any).id === countryNameS ||
            (c as any).id === Number(countryNameS)
        ) || countries[0];

        const deltas = buildingStorage.getData().buildingDeltas || {};
        
        const breakdown = {
            darat: { label: "Infrastruktur Darat & Logistik", value: 0, items: ["1_jalur_sepeda", "2_jalan_tol", "3_terminal_bus"] },
            kereta: { label: "Sistem Perkeretaapian Nasional", value: 0, items: ["4_jalur_kereta", "5_kereta_bawah_tanah"] },
            maritim_udara: { label: "Hub Maritim & Dirgantara", value: 0, items: ["6_pelabuhan_laut", "7_bandara", "8_helipad"] }
        };

        const factors: Record<string, { factor: number, baseKey: string }> = {
            "1_jalur_sepeda": { factor: 0.0005, baseKey: "jalur_sepeda" },
            "2_jalan_tol": { factor: 0.0008, baseKey: "jalan_raya" },
            "3_terminal_bus": { factor: 0.001, baseKey: "terminal_bus" },
            "4_jalur_kereta": { factor: 0.0012, baseKey: "stasiun_kereta_api" },
            "5_kereta_bawah_tanah": { factor: 0.0015, baseKey: "kereta_bawah_tanah" },
            "6_pelabuhan_laut": { factor: 0.0018, baseKey: "pelabuhan" },
            "7_bandara": { factor: 0.002, baseKey: "bandara" },
            "8_helipad": { factor: 0.0005, baseKey: "helipad" }
        };

        Object.entries(breakdown).forEach(([sector, config]) => {
            config.items.forEach(key => {
                const factorConfig = factors[key];
                const baseCount = (countryS.infrastruktur as any)?.[factorConfig.baseKey] || 0;
                const deltaCount = (deltas[key] || 0) as number;
                breakdown[sector as keyof typeof breakdown].value += (baseCount + deltaCount) * factorConfig.factor;
            });
        });

        return breakdown;
    },

    /**
     * Mendapatkan total bonus harian dari semua infrastruktur
     */
    getTotalInfraBonus: () => {
        const breakdown = PeningkatanLogic.getInfrastructureBonus();
        return breakdown.darat.value + breakdown.kereta.value + breakdown.maritim_udara.value;
    }
};
