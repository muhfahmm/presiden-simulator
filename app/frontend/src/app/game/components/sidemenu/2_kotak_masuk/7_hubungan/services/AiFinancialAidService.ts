"use client";

/**
 * AiFinancialAidService.ts
 * Sistem bantuan keuangan otomatis dari AI ke User
 * Berdasarkan kemampuan finansial AI dan kebutuhan hubungan
 * 
 * Logika:
 * - AI hanya memberikan bantuan jika keuangannya memungkinkan
 * - Jumlah bantuan = kemampuan AI × persentase berdasarkan skor hubungan
 * - Tidak perlu konfirmasi user, langsung masuk ke kas
 * - Notifikasi langsung tanpa tombol accept/reject
 */

import { inboxStorage } from "../../inboxStorage";
import { getGlobalRelationMatrix, normalizeId, addRelationScoreFromAid } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";

interface FinancialThresholds {
  MIN_AI_BUDGET: number;        // Minimum budget AI untuk memberi bantuan
  MAX_GIVE_PERCENTAGE: number;  // Maksimum persen dari budget AI
  EM_VALUE_PER_POINT: number; // Nilai EM per 0.1 poin hubungan
}

const THRESHOLDS: FinancialThresholds = {
  MIN_AI_BUDGET: 100000,      // 100k minimum (realistis)
  MAX_GIVE_PERCENTAGE: 5,     // Maksimal 5% dari kas AI
  EM_VALUE_PER_POINT: 1000,   // 1000 EM per 0.1 poin
};

class AiFinancialAidService {
  private processedAids: Set<string> = new Set();

  /**
   * Hitung jumlah bantuan berdasarkan:
   * 1. Skor hubungan (semakin rendah = semakin besar bantuan)
   * 2. Kas negara AI yang sebenarnya (dari aiBudgetStorage)
   * 3. Pendapatan harian AI (agar realistis)
   * 
   * Formula: aid = pendapatan_harian × hari_tergantung_skor
   */
  public calculateAidAmount(aiCountry: string, relationshipScore: number): { amount: number; formatted: string } {
    // Dapatkan kas AI yang sebenarnya
    const aiKas = aiBudgetStorage.getBudget(aiCountry);
    
    // Dapatkan pendapatan harian AI
    const countryData = centersData.find(c => 
      normalizeId(c.name_id) === normalizeId(aiCountry) ||
      normalizeId(c.name_en) === normalizeId(aiCountry)
    );
    const dailyIncome = countryData ? aiBudgetStorage.calculateDailyIncome(countryData) : 10000;
    
    // Semakin buruk hubungan, semakin banyak "hari pendapatan" yang diberikan AI
    const daysOfIncome = relationshipScore >= 40 ? 1 :  // Netral: 1 hari
                         relationshipScore >= 30 ? 2 :  // Buruk: 2 hari
                         relationshipScore >= 20 ? 3 :  // Sangat buruk: 3 hari
                         relationshipScore >= 10 ? 5 :  // Kritis: 5 hari
                         7;                              // Sangat kritis: 7 hari
    
    const baseAid = dailyIncome * daysOfIncome;
    
    // Cap at max 5% dari kas AI (agar tidak kehabisan uang)
    const maxAidFromKas = aiKas * (THRESHOLDS.MAX_GIVE_PERCENTAGE / 100);
    
    const finalAid = Math.min(baseAid, maxAidFromKas);
    
    // Round to nearest 1000
    const roundedAid = Math.round(finalAid / 1000) * 1000;
    
    return {
      amount: roundedAid,
      formatted: this.formatCurrency(roundedAid)
    };
  }

  /**
   * Proses semua bantuan keuangan untuk minggu ini
   * Dipanggil setiap weekly update (tanggal 7, 14, 21, 28)
   */
  public processWeeklyFinancialAid(dateStr: string): void {
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    if (!matrix[normalizedUser]) return;

    Object.entries(matrix[normalizedUser]).forEach(([targetId, entry]) => {
      const score = entry.s;
      
      // Hanya beri bantuan jika hubungan di bawah 50
      if (score >= 50) return;

      // Check AI's financial capability
      if (!this.hasSufficientFunds(targetId)) {
        console.log(`[AI-AID] ${targetId} too poor to give aid`);
        return;
      }

      // Cek duplikat
      const aidKey = `${normalizedUser}-${targetId}-${dateStr}-aid`;
      if (this.processedAids.has(aidKey)) return;
      this.processedAids.add(aidKey);

      // Hitung jumlah bantuan
      const { amount, formatted } = this.calculateAidAmount(targetId, score);
      
      // Jika amount 0, skip
      if (amount <= 0) {
        console.log(`[AI-AID] ${targetId} calculated aid is 0, skipping`);
        return;
      }

      // Langsung tambahkan ke kas user
      this.addMoneyToBudget(amount);

      // Update skor hubungan berdasarkan bantuan uang
      const newScore = addRelationScoreFromAid(targetId, normalizedUser, amount);

      // Kirim notifikasi langsung (tanpa konfirmasi) dengan skor baru
      this.sendAidNotification(targetId, score, newScore, amount, formatted, dateStr);

      console.log(`[AI-AID] ${targetId} sent ${formatted} to improve relationship: ${score.toFixed(2)} → ${newScore.toFixed(2)}`);
    });

    // Cleanup old records
    this.cleanupOldRecords();
  }

  /**
   * Kirim notifikasi bantuan tanpa tombol konfirmasi
   */
  private sendAidNotification(
    aiCountry: string, 
    oldScore: number,
    newScore: number,
    amount: number, 
    formattedAmount: string,
    dateStr: string
  ): void {
    const countryName = this.formatCountryName(aiCountry);
    
    // Hitung kenaikan hubungan aktual
    const pointsGain = newScore - oldScore;

    inboxStorage.addMessage({
      source: `Departemen Keuangan ${countryName}`,
      subject: `💰 ${countryName} Kirim Bantuan ${formattedAmount}`,
      content: `Negara Anda menerima bantuan diplomatik dari ${countryName}.\n\n� ${formattedAmount} masuk ke kas negara.\n📈 Hubungan bertambah +${pointsGain.toFixed(2)} poin (${oldScore.toFixed(1)} → ${newScore.toFixed(1)}).`,
      time: dateStr,
      priority: newScore <= 25 ? 'high' : 'medium',
      category: 'relationship',
      isProposal: false // Tidak perlu konfirmasi - dana langsung masuk
    });
  }

  /**
   * Cek apakah AI memiliki kas yang cukup
   */
  private hasSufficientFunds(aiCountry: string): boolean {
    const aiKas = aiBudgetStorage.getBudget(aiCountry);
    return aiKas >= THRESHOLDS.MIN_AI_BUDGET;
  }

  /**
   * Tambah uang ke kas user
   */
  private addMoneyToBudget(amount: number): void {
    try {
      const currentBudget = budgetStorage.getBudget ? budgetStorage.getBudget() : 0;
      if (typeof currentBudget === 'number') {
        budgetStorage.updateBudget(currentBudget + amount);
      }
    } catch (e) {
      console.warn('[AI-AID] Could not update budget:', e);
    }
  }

  /**
   * Format currency sesuai dengan sistem kas negara game
   * Menggunakan toLocaleString('id-ID') tanpa prefix/suffix
   */
  private formatCurrency(amount: number): string {
    return Math.round(amount).toLocaleString('id-ID');
  }

  /**
   * Format nama negara
   */
  private formatCountryName(countryId: string): string {
    const country = centersData.find(c => 
      c.name_id.toLowerCase().trim() === countryId.toLowerCase().trim() ||
      c.name_en.toLowerCase().trim() === countryId.toLowerCase().trim()
    );
    
    if (country) return country.name_id;
    
    return countryId.split('_').map(w => 
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ');
  }

  /**
   * Get current user country
   */
  private getCurrentUserCountry(): string {
    if (typeof window === 'undefined') return 'indonesia';
    
    const session = localStorage.getItem('game_session');
    const selected = localStorage.getItem('selectedCountry') || localStorage.getItem('selected_country');
    
    if (session) {
      try {
        const parsed = JSON.parse(session);
        if (parsed.country) return normalizeId(parsed.country);
      } catch (e) {}
    }
    
    if (selected) return normalizeId(selected);
    return 'indonesia';
  }

  /**
   * Cleanup records older than 30 days
   */
  private cleanupOldRecords(): void {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    this.processedAids.forEach(key => {
      const keyDate = key.split('-').slice(-3, -2)[0];
      if (keyDate && new Date(keyDate) < thirtyDaysAgo) {
        this.processedAids.delete(key);
      }
    });
  }
}

export const aiFinancialAidService = new AiFinancialAidService();
