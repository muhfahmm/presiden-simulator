import { relationStorage } from "../../../modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { GEOPOLITICAL_DATABASE } from "../1_data_geopolitik/world_rivalries";

/**
 * AI GEOPOLITICAL DRIFTER ENGINE
 * Logika untuk mensimulasikan dinamika hubungan dunia nyata antar negara NPC.
 * Menggunakan data dari GEOPOLITICAL_DATABASE.
 */

export const runGeopoliticalDrift = () => {
    console.log("🌍 [AI-GEOPOLITIK] Simulating Daily World Drift...");

    // 1. PROSES RIVALITAS ABADI (ETERNAL RIVALRIES)
    // Menarik hubungan ke bawah secara perlahan (-0.05 per hari)
    const rivalries = GEOPOLITICAL_DATABASE['daftar_rivalitas_abadi__eternal_rivalries_-_natural_drift_down_'];
    rivalries.forEach((line: string) => {
        if (line.includes(" vs ")) {
            const match = line.match(/\d+\.\s+(.+)\s+vs\s+([^:]+)/);
            if (match) {
                const n1 = match[1].trim();
                const n2 = match[2].trim();
                relationStorage.updateRelation(n1, n2, -0.05);
            }
        }
    });

    // 2. PROSES ALIANSI BESI (IRONCLAD ALLIANCES)
    // Menarik hubungan ke atas secara perlahan (+0.02 per hari)
    const alliances = GEOPOLITICAL_DATABASE['daftar_aliansi_besi__ironclad_alliances_-_natural_drift_up_'];
    alliances.forEach((line: string) => {
        if (line.includes(" - ")) {
            const match = line.match(/\d+\.\s+(.+)\s+-\s+([^:]+)/);
            if (match) {
                const n1 = match[1].trim();
                const n2 = match[2].trim();
                relationStorage.updateRelation(n1, n2, 0.02);
            }
        }
    });

    // 3. PROSES HOTSPOTS (TITIK KETEGANAN TINGGI)
    // Penurunan lebih tajam (-0.2 per hari)
    const hotspots = GEOPOLITICAL_DATABASE['titik_keteganan_dunia__hotspots_'];
    hotspots.forEach((line: string) => {
        if (line.includes(" vs ")) {
            const match = line.match(/-\s+(.+)\s+vs\s+([^:]+)/);
            if (match) {
                const n1 = match[1].trim();
                const n2 = match[2].trim();
                relationStorage.updateRelation(n1, n2, -0.2);
            }
        }
    });

    // 4. PROSES BLOK STRATEGIS (NATO, BRICS, etc)
    // Sesama anggota blok hubungan membaik (+0.01)
    const blocs = GEOPOLITICAL_DATABASE['daftar_blok_strategis__strategic___economic_blocs_'];
    blocs.forEach((line: string) => {
        const match = line.match(/\): (.+) \(Solidaritas|Alternatif|Zona|Pasar|Aliansi|Pertahanan|Membendung|Penentu|Solidaritas/);
        if (match) {
            const members = match[1].split(",").map(m => m.trim());
            for (let i = 0; i < members.length; i++) {
                for (let j = i + 1; j < members.length; j++) {
                    relationStorage.updateRelation(members[i], members[j], 0.01);
                }
            }
        }
    });

    console.log("✅ [AI-GEOPOLITIK] Drift Simulation Complete.");
};
