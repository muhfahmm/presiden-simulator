import { KolektorDataNasional } from "../perangkat_observasi/KolektorDataNasional";

/**
 * DashboardInternalNPC - Antarmuka Data Internal AI
 * Menyediakan representasi visual data (dalam bentuk log/objek) yang bisa "dibaca" oleh 
 * pengambilan keputusan AI.
 */
export class DashboardInternalNPC {
  private logAnalisis: any[] = [];

  /**
   * Mengambil snapshot kondisi negara untuk NPC
   */
  pindaiKondisiTerbaru(countryName: string) {
    const data = KolektorDataNasional.kumpulkanData(countryName);
    if (!data) return null;

    // Tambahkan ke log internal untuk "memori" AI singkat
    this.logAnalisis.push({
      waktu: new Date().toLocaleTimeString(),
      skor: data.statistik.indeks_kepuasan
    });

    // Batasi memori log (misal hanya 10 data terakhir)
    if (this.logAnalisis.length > 10) this.logAnalisis.shift();

    return {
      visual_state: data,
      ringkasan_performa: {
        status: data.statistik.indeks_kepuasan > 60 ? "STABIL" : data.statistik.indeks_kepuasan > 40 ? "WASPADA" : "KRITIS",
        indikator_utama: data.statistik.tren === "up" ? "↑ POSITIF" : data.statistik.tren === "down" ? "↓ NEGATIF" : "→ STABIL"
      }
    };
  }

  getLogMemori() {
    return this.logAnalisis;
  }
}
