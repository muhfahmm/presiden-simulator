"use client";

import { warStorage, ActiveInvasion } from "../../WarStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { aiDefenseStorage } from "@/app/game/components/AI_logic/6_AI_pertahanan/antarmuka_data_pertahanan/AIDefenseStorage";
import { calculateTotalMilitaryPower } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/kekuatanmiliter";
import { countries } from "@/app/pilih_negara/data/semua_fitur_negara/0_profiles/index";
import { normalizeId } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";

/**
 * WarBattleService menangani fase pertempuran setelah pasukan tiba.
 * Perang bisa berlangsung lama (atrisi) hingga salah satu pihak menyerah.
 */
class WarBattleService {
  /**
   * Diproses setiap hari untuk semua invasi yang sedang berlangsung.
   */
  public processActiveWars(currentDate: Date) {
    const invasions = warStorage.getInvasions();
    
    invasions.forEach(inv => {
      // Hanya proses jika sudah sampai di lokasi (progress >= 1)
      if (inv.progress >= 1) {
        this.simulateDailyBattle(inv, currentDate);
      }
    });
  }

  private simulateDailyBattle(inv: ActiveInvasion, currentDate: Date) {
    const sourceCountry = countries.find(c => normalizeId(c.name_id) === inv.source);
    const targetCountry = countries.find(c => normalizeId(c.name_id) === inv.target);
    
    if (!sourceCountry || !targetCountry) return;

    // 1. INISIALISASI KEKUATAN (Jika belum ada)
    if (inv.currentAttackerPower === undefined) {
      const initialAttacker = this.calculateInvaderPower(inv.units);
      const targetAiDefense = aiDefenseStorage.getData(targetCountry.name_en);
      const initialDefender = calculateTotalMilitaryPower(targetCountry as any, targetAiDefense.defenseDeltas).total;
      
      warStorage.updateBattleStats(inv.id, initialAttacker, initialDefender, initialAttacker, initialDefender);
      return; // Mulai pengurangan di hari berikutnya
    }

    // 2. SIMULASI KERUSAKAN HARIAN (ATTRITION)
    const attackerPower = inv.currentAttackerPower || 0;
    const defenderPower = inv.currentDefenderPower || 0;

    // Kerusakan harian: 2-5% dari kekuatan lawan
    const dailyLossAttacker = Math.floor(defenderPower * (0.02 + Math.random() * 0.03));
    const dailyLossDefender = Math.floor(attackerPower * (0.02 + Math.random() * 0.03));

    const newAttackerPower = Math.max(0, attackerPower - dailyLossAttacker);
    const newDefenderPower = Math.max(0, defenderPower - dailyLossDefender);

    // Update ke Storage agar UI bisa melihat perubahan
    warStorage.updateBattleStats(inv.id, newAttackerPower, newDefenderPower);

    // 3. CEK KONDISI KEMENANGAN / KEKALAHAN
    // Perang berakhir jika salah satu pihak tersisa < 10% dari kekuatan awal (maxPower)
    const attackerRatio = newAttackerPower / (inv.maxAttackerPower || 1);
    const defenderRatio = newDefenderPower / (inv.maxDefenderPower || 1);

    const warDurationDays = this.getWarDurationDays(inv.startDate, currentDate);
    const finishChance = 0.01 + (warDurationDays * 0.002); // Peluang menyerah bertambah perlahan

    if (attackerRatio <= 0.1 || defenderRatio <= 0.1 || Math.random() < finishChance) {
      this.resolveWar(inv, newAttackerPower, newDefenderPower, currentDate, sourceCountry, targetCountry);
    } else {
      this.notifyWarProgress(inv, currentDate, sourceCountry, targetCountry);
    }
  }

  private calculateInvaderPower(units: any[]): number {
    // Sederhananya, setiap unit memberikan kontribusi power
    return units.length * 500; 
  }

  private getWarDurationDays(startDateStr: string, currentDate: Date): number {
    const start = new Date(startDateStr);
    const diff = currentDate.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  private resolveWar(inv: ActiveInvasion, attackerPower: number, defenderPower: number, currentDate: Date, source: any, target: any) {
    const isAttackerWinner = attackerPower > defenderPower;
    const dateStr = currentDate.toISOString().split('T')[0];

    if (isAttackerWinner) {
      // PENYERANG MENANG
      newsStorage.addNews({
        source: source.name_id,
        subject: `KEMENANGAN TOTAL: ${source.name_id} MENGALAHKAN ${target.name_id}`,
        content: `Setelah pertempuran sengit selama berhari-hari, pasukan ${source.name_id} berhasil menembus pertahanan utama ${target.name_id}. Pemerintah ${target.name_id} terpaksa menandatangani perjanjian damai yang merugikan.`,
        category: "conflict",
        time: dateStr,
        priority: "high"
      });
    } else {
      // BERTAHAN MENANG
      newsStorage.addNews({
        source: target.name_id,
        subject: `INVASI GAGAL: ${target.name_id} BERHASIL BERTAHAN`,
        content: `Pasukan ${source.name_id} terpukul mundur dari wilayah perbatasan ${target.name_id}. Pertahanan kokoh ${target.name_id} membuktikan keunggulannya dalam perang atrisi ini.`,
        category: "conflict",
        time: dateStr,
        priority: "high"
      });
    }

    // Hapus invasi dari storage karena perang sudah berakhir
    warStorage.removeInvasion(inv.id);
  }

  private notifyWarProgress(inv: ActiveInvasion, currentDate: Date, source: any, target: any) {
    // Opsional: Kirim berita berkala jika perang berlangsung sangat lama (setiap 30 hari)
    const duration = this.getWarDurationDays(inv.startDate, currentDate);
    if (duration > 0 && duration % 30 === 0) {
      newsStorage.addNews({
        source: "Koresponden Perang",
        subject: `PERANG BERLANJUT: ${source.name_id} vs ${target.name_id}`,
        content: `Konflik antara ${source.name_id} dan ${target.name_id} memasuki bulan ke-${Math.floor(duration/30)}. Belum ada tanda-tanda gencatan senjata dari kedua belah pihak.`,
        category: "conflict",
        time: currentDate.toISOString().split('T')[0],
        priority: "medium"
      });
    }
  }
}

export const warBattleService = new WarBattleService();
