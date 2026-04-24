/**
 * ProtokolDaruratAI - Sistem Tindakan Respon (KRITIS)
 * Menangani tindakan darurat ketika kepuasan rakyat berada di bawah 25%.
 */
export class ProtokolDaruratAI {
    static eksekusi(protocol: string, actions: string[], countryName: string) {
        if (protocol === "NONE") return;

        console.warn(`[AI EMERGENCY] ${countryName} memasuki status: ${protocol}`);
        
        actions.forEach(action => {
            switch (action) {
                case "MARTIAL_LAW_DECLARATION":
                    console.log(`[AI ACTION] ${countryName} mendeklarasikan DARURAT MILITER untuk menjaga stabilitas.`);
                    break;
                case "TAX_HOLIDAY_30D":
                    console.log(`[AI ACTION] ${countryName} menerapkan TAX HOLIDAY selama 30 hari untuk meredam protes.`);
                    break;
                case "REQUEST_IMF_BAILOUT":
                    console.log(`[AI ACTION] ${countryName} mengajukan pinjaman darurat internasional (IMF).`);
                    break;
                case "EMERGENCY_ELECTIONS":
                    console.log(`[AI ACTION] ${countryName} mengumumkan PEMILU DARURAT karena risiko kejatuhan pemerintah.`);
                    break;
                default:
                    console.log(`[AI ACTION] ${countryName} mengambil tindakan: ${action}`);
            }
        });

        return {
            status: protocol,
            actions_executed: actions,
            timestamp: new Date().toISOString()
        };
    }
}
