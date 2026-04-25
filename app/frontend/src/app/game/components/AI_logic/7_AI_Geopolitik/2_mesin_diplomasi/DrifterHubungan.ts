import { relationStorage } from "../../../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/pemungutan_suara/RelationStorage";

/**
 * AI GEOPOLITICAL DRIFTER ENGINE
 * Logika untuk mensimulasikan dinamika hubungan dunia nyata antar negara NPC.
 */

interface Rivalry {
    n1: string;
    n2: string;
    drift: number; // Negatif = Memanas, Positif = Membaik
}

const REAL_WORLD_HOTSPOTS: Rivalry[] = [
    { n1: "Rusia", n2: "Ukraina", drift: -0.5 },
    { n1: "Korea Utara", n2: "Korea Selatan", drift: -0.4 },
    { n1: "Amerika Serikat", n2: "China", drift: -0.1 },
    { n1: "Israel", n2: "Iran", drift: -0.4 },
    { n1: "China", n2: "Taiwan", drift: -0.3 }
];

const GLOBAL_ALLIANCES = {
    "NATO": ["Amerika Serikat", "Inggris", "Perancis", "Jerman", "Italia", "Kanada"],
    "BRICS": ["Rusia", "China", "India", "Brazil", "Afrika Selatan", "Iran"]
};

export const runGeopoliticalDrift = () => {
    console.log("Simulating Geopolitical Drift...");
    
    // 1. Jalankan Rivalitas Dunia Nyata
    REAL_WORLD_HOTSPOTS.forEach(rivalry => {
        const currentScore = relationStorage.getRelation(rivalry.n1, rivalry.n2);
        // Hubungan antar AI memburuk secara otomatis sesuai hotspots
        relationStorage.updateRelation(rivalry.n1, rivalry.n2, rivalry.drift);
    });

    // 2. Jalankan Stabilitas Aliansi
    Object.entries(GLOBAL_ALLIANCES).forEach(([allianceName, members]) => {
        for (let i = 0; i < members.length; i++) {
            for (let j = i + 1; j < members.length; j++) {
                // Sesama anggota aliansi hubungan cenderung stabil/membaik (+0.05)
                relationStorage.updateRelation(members[i], members[j], 0.05);
            }
        }
    });

    // 3. Efek Domino (Jika ada konflik besar, negara sekutu ikut bereaksi)
    // TODO: Implementasi logika reaksi blok
};
