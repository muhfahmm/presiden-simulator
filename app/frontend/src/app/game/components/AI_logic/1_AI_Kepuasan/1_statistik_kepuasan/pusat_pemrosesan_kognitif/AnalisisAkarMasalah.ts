/**
 * AnalisisAkarMasalah - Pusat Pemrosesan Kognitif
 * Mendalami penyebab utama ketidakpuasan rakyat (Deep Root Analysis).
 */
export class AnalisisAkarMasalah {
    static diagnosa(aiMetadata: any) {
        if (!aiMetadata) return "Diagnosa gagal";

        const { primary_concern, satisfaction_level } = aiMetadata;

        if (satisfaction_level < 40) {
            if (primary_concern === "tax") {
                return "Akar masalah utama adalah Kebijakan Fiskal yang mencekik (Pajak Terlalu Tinggi).";
            } else {
                return "Akar masalah utama adalah Instabilitas Harga Pasar (Inflasi Kebutuhan Pokok).";
            }
        }

        return "Tidak ada masalah mendasar yang ditemukan.";
    }
}
