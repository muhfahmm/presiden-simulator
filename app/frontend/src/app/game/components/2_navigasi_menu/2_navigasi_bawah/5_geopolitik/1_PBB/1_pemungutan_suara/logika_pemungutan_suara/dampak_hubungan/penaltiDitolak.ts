
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

/**
 * Logika penalti hubungan ketika resolusi PBB ditolak (gagal)
 * Penurunan sebesar 25 poin karena upaya pengajuan resolusi tetap merusak kepercayaan.
 */
export const terapkanPenaltiDitolak = (targetCountry: string, userCountry: string) => {
  if (!targetCountry) return;
  
  console.log(`[PBB] Resolusi DITOLAK terhadap ${targetCountry}. Menjalankan penalti hubungan -25.`);
  
  // Update skor hubungan: delta -25
  relationStorage.updateRelationScore(targetCountry, -25, 50, userCountry);
};
