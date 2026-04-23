
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

/**
 * Logika penalti hubungan ketika resolusi PBB diterima (disetujui)
 * Penurunan sebesar 50 poin karena sanksi resmi diterapkan.
 */
export const terapkanPenaltiDiterima = (targetCountry: string, userCountry: string) => {
  if (!targetCountry) return;
  
  console.log(`[PBB] Resolusi DITERIMA terhadap ${targetCountry}. Menjalankan penalti hubungan -50.`);
  
  // Update skor hubungan: delta -50
  relationStorage.updateRelationScore(targetCountry, -50, 50, userCountry);
};
