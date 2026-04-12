import { DashboardInternalNPC } from "../antarmuka_data_internal/DashboardInternalNPC";

/**
 * EvaluasiSentimenPublik - Pusat Pemrosesan Kognitif
 * Melakukan evaluasi terhadap data yang diterima dari dashboard internal 
 * untuk menentukan "mood" publik secara keseluruhan.
 */
export class EvaluasiSentimenPublik {
  private dashboard: DashboardInternalNPC;

  constructor(dashboard: DashboardInternalNPC) {
    this.dashboard = dashboard;
  }

  async evaluasi(countryName: string) {
    const scan = this.dashboard.pindaiKondisiTerbaru(countryName);
    if (!scan) return "Data tidak tersedia";

    const { visual_state } = scan;

    // Panggil Otak Python untuk mendapatkan analisis sentimen yang lebih mendalam
    const response = await fetch("/game/components/AI_logic/1_AI_Kepuasan/routes/1_statistik_kepuasan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visual_state)
    });

    const aiAnalysis = await response.json();
    return aiAnalysis;
  }
}
