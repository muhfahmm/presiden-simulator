"use client";

/**
 * AiMoneyOfferService.ts
 * Logika AI untuk memberikan uang kepada user sebagai aksi diplomatik
 * untuk memperbaiki hubungan yang memburuk.
 * 
 * Persentase pemberian uang berdasarkan skor hubungan:
 * - Score 50: 10%
 * - Score 45: 15%
 * - Score 40: 20%
 * - Score 35: 25%
 * - Score 30: 30%
 * - Score <=25: 35% (dan seterusnya, bertambah 5% setiap turun 5 poin)
 * 
 * Formula: percentage = 10 + (50 - score)
 * Dengan minimum score 0 (maksimum 60%)
 */

import { inboxStorage } from "../../inboxStorage";
import { getGlobalRelationMatrix, normalizeId, addRelationScoreFromAid } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";

interface MoneyOfferConfig {
  BASE_PERCENTAGE: number;      // 10% at score 50
  PERCENTAGE_INCREMENT: number; // +5% per 5 points decrease
  MIN_SCORE_FOR_OFFER: number;  // Only offer when score < 50
  MAX_PERCENTAGE: number;       // Cap at 60% to prevent excessive giving
}

const OFFER_CONFIG: MoneyOfferConfig = {
  BASE_PERCENTAGE: 10,
  PERCENTAGE_INCREMENT: 5,
  MIN_SCORE_FOR_OFFER: 50,  // Only give money when below 50
  MAX_PERCENTAGE: 60,
};

class AiMoneyOfferService {
  private notifiedOffers: Set<string> = new Set(); // Track offers to prevent duplicates

  /**
   * Calculate the percentage of money AI should give based on relationship score
   * Formula: Only gives when score < 50
   * - Score 45: 10%
   * - Score 40: 15%
   * - Score 35: 20%
   * - Score 30: 25%
   * - Score 25: 30%
   * - Score 0: 55%
   * Formula: percentage = (50 - score) / 5 * 5 + 10, but capped at 60%
   */
  public calculateOfferPercentage(score: number): number {
    // Only give money when relationship is strictly below 50
    if (score >= 50) return 0;
    
    // Calculate how many 5-point steps below 50
    const stepsBelow = Math.floor((50 - score) / 5);
    
    // Base 10% + 5% for each 5-point step below 50
    const percentage = OFFER_CONFIG.BASE_PERCENTAGE + (stepsBelow * OFFER_CONFIG.PERCENTAGE_INCREMENT);
    
    return Math.min(percentage, OFFER_CONFIG.MAX_PERCENTAGE);
  }

  /**
   * Calculate the actual money amount based on AI's economy
   * Menggunakan pendapatan harian AI yang realistis dari aiBudgetStorage
   */
  private calculateOfferAmount(aiCountry: string, percentage: number): number {
    // Get AI country data
    const countryData = centersData.find(c => 
      normalizeId(c.name_id) === normalizeId(aiCountry) ||
      normalizeId(c.name_en) === normalizeId(aiCountry)
    );

    if (!countryData) {
      // Fallback: random amount antara 10k - 50k (skala realistis)
      return Math.floor(Math.random() * 40000) + 10000;
    }

    // Dapatkan kas AI yang sebenarnya
    const aiKas = aiBudgetStorage.getBudget(aiCountry);
    
    // Dapatkan pendapatan harian AI yang realistis
    const dailyIncome = aiBudgetStorage.calculateDailyIncome(countryData);
    
    // AI memberikan bantuan berdasarkan pendapatan harian × hari (sesuai persentase)
    // Semakin buruk hubungan, semakin banyak "hari" yang diberikan
    const daysMultiplier = percentage / 10; // 10% = 1 hari, 20% = 2 hari, dst
    const baseAmount = dailyIncome * daysMultiplier;
    
    // Cap at max 5% dari kas AI (agar tidak kehabisan uang)
    const maxFromKas = aiKas * 0.05;
    
    const finalAmount = Math.min(baseAmount, maxFromKas);
    
    // Round ke ribuan terdekat
    return Math.round(finalAmount / 1000) * 1000;
  }

  /**
   * Format currency sesuai dengan sistem kas negara game
   * Menggunakan toLocaleString('id-ID') tanpa prefix/suffix
   */
  private formatCurrency(amount: number): string {
    return Math.round(amount).toLocaleString('id-ID');
  }

  /**
   * Main entry point: Process money offers for all low relationships
   * Called during weekly relation updates
   */
  public processMoneyOffers(dateStr: string): void {
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    if (!matrix[normalizedUser]) return;

    Object.entries(matrix[normalizedUser]).forEach(([targetId, entry]) => {
      const score = entry.s;
      
      // Only offer money when relationship is below 50
      if (score >= OFFER_CONFIG.MIN_SCORE_FOR_OFFER) return;

      const percentage = this.calculateOfferPercentage(score);
      if (percentage <= 0) return;

      const offerKey = `${normalizedUser}-${targetId}-${dateStr}-money`;
      
      // Prevent duplicate offers for same country on same day
      if (this.notifiedOffers.has(offerKey)) return;
      this.notifiedOffers.add(offerKey);

      // Calculate offer amount
      const offerAmount = this.calculateOfferAmount(targetId, percentage);
      const formattedAmount = this.formatCurrency(offerAmount);
      const countryName = this.formatCountryName(targetId);

      // Add money to user's budget
      this.addMoneyToBudget(offerAmount);

      // Update skor hubungan berdasarkan bantuan uang
      const newScore = addRelationScoreFromAid(targetId, normalizedUser, offerAmount);

      // Hitung kenaikan aktual
      const pointsGain = newScore - score;

      // Create inbox notification dengan skor baru
      inboxStorage.addMessage({
        source: `Dinas Luar Negeri ${countryName}`,
        subject: `Bantuan Keuangan Diplomatik dari ${countryName}`,
        content: `${countryName} mengirim bantuan ${formattedAmount} (${percentage}%) untuk memperbaiki hubungan bilateral.\n\n📈 Perubahan Hubungan:\n• Skor Sebelumnya: ${score.toFixed(1)}/100\n• Skor Setelahnya: ${newScore.toFixed(1)}/100\n• Kenaikan: +${pointsGain.toFixed(2)} poin\n\n💡 Penjelasan:\n• Setiap 1.000 yang diterima = +0.1 poin hubungan\n• Bantuan ${formattedAmount} meningkatkan hubungan sebesar +${pointsGain.toFixed(2)} poin\n\n✅ Dana telah masuk ke kas negara.\n\n💡 Rekomendasi: Bangun kedutaan untuk mewujudkan kenaikan hubungan (+0.1/minggu).`,
        time: dateStr,
        priority: newScore <= 25 ? 'high' : 'medium',
        category: 'relationship',
        isProposal: true,
        proposalLabel: 'BANTUAN',
        metadata: {
          type: 'money_offer',
          amount: offerAmount,
          percentage: percentage,
          country: targetId,
          score: newScore,
          autoAccepted: true,
        }
      });

      console.log(`[AI-MONEY-OFFER] ${countryName} gave ${formattedAmount} (${percentage}%) to improve relationship: ${score.toFixed(2)} → ${newScore.toFixed(2)}`);
    });

    // Cleanup old offers (older than 30 days)
    this.cleanupOldOffers();
  }

  /**
   * Add money to user's budget
   */
  private addMoneyToBudget(amount: number): void {
    try {
      const currentBudget = budgetStorage.getBudget ? budgetStorage.getBudget() : 0;
      if (typeof currentBudget === 'number') {
        budgetStorage.updateBudget(currentBudget + amount);
      }
    } catch (e) {
      console.warn('[AI-MONEY-OFFER] Could not update budget:', e);
    }
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
   * Format country ID to readable name
   */
  private formatCountryName(countryId: string): string {
    const country = centersData.find(c => 
      c.name_id.toLowerCase().trim() === countryId.toLowerCase().trim() ||
      c.name_en.toLowerCase().trim() === countryId.toLowerCase().trim()
    );
    
    if (country) {
      return country.name_id;
    }
    
    return countryId.split('_').map(w => 
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ');
  }

  /**
   * Cleanup old offers older than 30 days
   */
  private cleanupOldOffers(): void {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    this.notifiedOffers.forEach(key => {
      const keyDate = key.split('-').slice(-3, -2)[0];
      if (keyDate && new Date(keyDate) < thirtyDaysAgo) {
        this.notifiedOffers.delete(key);
      }
    });
  }

  /**
   * Debug: Get offer statistics
   */
  public getStats(): {
    activeOffers: number;
    percentageFormula: string;
    exampleCalculations: { score: number; percentage: number }[];
  } {
    const examples = [50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0].map(score => ({
      score,
      percentage: this.calculateOfferPercentage(score)
    }));

    return {
      activeOffers: this.notifiedOffers.size,
      percentageFormula: 'percentage = 10 + (50 - score), capped at 60%',
      exampleCalculations: examples
    };
  }
}

export const aiMoneyOfferService = new AiMoneyOfferService();
