import { DashboardInternalNPC } from "../antarmuka_data_internal/DashboardInternalNPC";
import { ProtokolDaruratAI } from "../sistem_tindakan_respon/ProtokolDaruratAI";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { aiRootCauseStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/socialDiagnosisStorage";

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

    if (!response.ok) throw new Error("Gagal menghubungi mesin analisis AI");

    const aiAnalysis = await response.json();

    // Persist hasil ke storage
    if (aiAnalysis.new_value !== undefined) {
      aiHappinessStorage.updateSatisfaction(countryName, aiAnalysis.new_value);
      
      // Save detailed diagnosis
      aiRootCauseStorage.saveDiagnosis(
        countryName, 
        aiAnalysis.status || "STABLE", 
        aiAnalysis.emergency_protocol || "NONE",
        aiAnalysis.breakdown
      );
    }

    // Jika masuk status KRITIS, picu protokol darurat
    if (aiAnalysis.emergency_protocol && aiAnalysis.emergency_protocol !== "NONE") {
      ProtokolDaruratAI.eksekusi(
        aiAnalysis.emergency_protocol, 
        aiAnalysis.emergency_actions || [], 
        countryName
      );
    }

    return aiAnalysis;
  }
}
