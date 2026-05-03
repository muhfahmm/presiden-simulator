"use client";

/**
 * AiDiplomaticGiftService.ts
 * Sistem hadiah diplomatik dari AI ke User di semua level hubungan
 * 
 * Logika:
 * - Excellent (80-100): Hadiah kecil 2-5% sebagai tanda persahabatan
 * - Good (60-79): Hadiah sedang 5-10% untuk memperkuat hubungan
 * - Neutral (40-59): Bantuan standar 10-15% untuk stabilitas
 * - Strained (20-39): Bantuan besar 15-30% untuk perbaikan
 * - Poor (0-19): Bantuan sangat besar 30-50% untuk krisis diplomatik
 * 
 * Semua level hubungan bisa mendapatkan uang, dengan persentase berbeda-beda
 */

import { inboxStorage } from "../../inboxStorage";
import { getGlobalRelationMatrix, normalizeId, addRelationScoreFromAid } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";

interface GiftTier {
  minScore: number;
  maxScore: number;
  name: string;
  emoji: string;
  minPercent: number;
  maxPercent: number;
  description: string;
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
}

const GIFT_TIERS: GiftTier[] = [
  {
    minScore: 80,
    maxScore: 100,
    name: 'Sahabat Strategis',
    emoji: '🤝',
    minPercent: 2,
    maxPercent: 5,
    description: 'Hadiah persahabatan sebagai apresiasi hubungan yang sangat baik',
    frequency: 'monthly' // Jarang, sebagai tanda hormat
  },
  {
    minScore: 60,
    maxScore: 79,
    name: 'Mitra Baik',
    emoji: '🎁',
    minPercent: 5,
    maxPercent: 10,
    description: 'Dukungan untuk memperkuat kerja sama bilateral',
    frequency: 'biweekly'
  },
  {
    minScore: 40,
    maxScore: 59,
    name: 'Hubungan Netral',
    emoji: '📊',
    minPercent: 8,
    maxPercent: 15,
    description: 'Investasi diplomatik untuk menjaga stabilitas hubungan',
    frequency: 'weekly'
  },
  {
    minScore: 20,
    maxScore: 39,
    name: 'Hubungan Tegang',
    emoji: '🔧',
    minPercent: 15,
    maxPercent: 25,
    description: 'Bantuan khusus untuk meredakan ketegangan diplomatik',
    frequency: 'weekly'
  },
  {
    minScore: 0,
    maxScore: 19,
    name: 'Hubungan Krisis',
    emoji: '🚨',
    minPercent: 25,
    maxPercent: 40,
    description: 'Paket bantuan darurat untuk mengatasi krisis diplomatik serius',
    frequency: 'daily'
  }
];

interface GiftHistory {
  lastGiftDate: string;
  giftCount: number;
  totalGiven: number;
}

interface FinancialThresholds {
  MIN_AI_BUDGET: number;
  MAX_GIVE_PERCENTAGE: number;
  EM_VALUE_PER_POINT: number;
}

const THRESHOLDS: FinancialThresholds = {
  MIN_AI_BUDGET: 100000,      // 100k minimum (realistis untuk kas AI)
  MAX_GIVE_PERCENTAGE: 5,     // Maksimal 5% dari kas AI (sangat kecil agar realistis)
  EM_VALUE_PER_POINT: 1000,   // 1000 uang per 0.1 poin
};

// Konversi: 1000 uang = +0.1 poin hubungan
// Formula: setiap 1000 yang diberikan AI = potensi +0.1 ke hubungan

class AiDiplomaticGiftService {
  private giftHistory: Map<string, GiftHistory> = new Map();
  private readonly STORAGE_KEY = 'ai_diplomatic_gifts_v2';

  constructor() {
    this.loadHistory();
  }

  private loadHistory(): void {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      this.giftHistory = new Map(Object.entries(parsed));
    }
  }

  private saveHistory(): void {
    if (typeof window === 'undefined') return;
    const obj = Object.fromEntries(this.giftHistory);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
  }

  /**
   * Dapatkan tier berdasarkan skor hubungan
   */
  private getTierByScore(score: number): GiftTier | null {
    return GIFT_TIERS.find(t => score >= t.minScore && score <= t.maxScore) || null;
  }

  /**
   * Cek apakah sudah waktunya memberi hadiah berdasarkan frequency
   */
  private canGiveGift(aiCountry: string, tier: GiftTier, currentDate: Date): boolean {
    const history = this.giftHistory.get(aiCountry);
    if (!history) return true;

    const lastDate = new Date(history.lastGiftDate);
    const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    switch (tier.frequency) {
      case 'daily': return diffDays >= 1;
      case 'weekly': return diffDays >= 7;
      case 'biweekly': return diffDays >= 14;
      case 'monthly': return diffDays >= 30;
      default: return false;
    }
  }

  /**
   * Hitung jumlah hadiah berdasarkan pendapatan harian AI (realistis)
   */
  private calculateGiftAmount(aiCountry: string, tier: GiftTier): number {
    // Dapatkan kas AI yang sebenarnya dari storage
    const aiKas = aiBudgetStorage.getBudget(aiCountry);
    
    // Dapatkan pendapatan harian AI
    const countryData = centersData.find(c => 
      normalizeId(c.name_id) === normalizeId(aiCountry) ||
      normalizeId(c.name_en) === normalizeId(aiCountry)
    );
    const dailyIncome = countryData ? aiBudgetStorage.calculateDailyIncome(countryData) : 10000;
    
    // Gunakan pendapatan harian sebagai basis (lebih realistis)
    // AI memberikan bantuan berdasarkan kemampuan harian mereka
    const daysOfIncome = tier.minScore >= 80 ? 0.5 : // Sahabat: 0.5 hari pendapatan
                         tier.minScore >= 60 ? 1 :    // Mitra: 1 hari pendapatan
                         tier.minScore >= 40 ? 2 :    // Netral: 2 hari pendapatan
                         tier.minScore >= 20 ? 3 :    // Tegang: 3 hari pendapatan
                         5;                            // Krisis: 5 hari pendapatan
    
    const baseAmount = dailyIncome * daysOfIncome;
    
    // Cap at max 5% dari kas AI yang tersedia (agar tidak kehabisan uang)
    const maxFromKas = aiKas * (THRESHOLDS.MAX_GIVE_PERCENTAGE / 100);
    
    const finalAmount = Math.min(baseAmount, maxFromKas);
    
    // Round ke ribuan terdekat
    return Math.round(finalAmount / 1000) * 1000;
  }

  /**
   * Proses semua hadiah diplomatik untuk tanggal ini
   */
  public processDailyGifts(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    if (!matrix[normalizedUser]) return;

    Object.entries(matrix[normalizedUser]).forEach(([targetId, entry]) => {
      const score = entry.s;
      const tier = this.getTierByScore(score);
      
      if (!tier) return;

      // Cek jadwal hadiah
      if (!this.canGiveGift(targetId, tier, currentDate)) {
        return;
      }

      // Cek kemampuan finansial AI
      if (!this.hasSufficientFunds(targetId)) {
        return;
      }

      // Hitung dan kirim hadiah
      const amount = this.calculateGiftAmount(targetId, tier);
      if (amount <= 0) return;

      // Langsung masukkan ke kas
      this.addMoneyToBudget(amount);

      // Update skor hubungan berdasarkan bantuan uang
      const normalizedUser = this.getCurrentUserCountry();
      const newScore = addRelationScoreFromAid(targetId, normalizedUser, amount);

      // Update history
      const history = this.giftHistory.get(targetId);
      this.giftHistory.set(targetId, {
        lastGiftDate: dateStr,
        giftCount: (history?.giftCount || 0) + 1,
        totalGiven: (history?.totalGiven || 0) + amount
      });

      // Kirim notifikasi dengan skor baru
      this.sendGiftNotification(targetId, score, newScore, amount, tier, dateStr);

      console.log(`[AI-GIFT] ${targetId} sent ${this.formatCurrency(amount)} (${tier.name}), hubungan: ${score.toFixed(2)} → ${newScore.toFixed(2)}`);
    });

    this.saveHistory();
  }

  /**
   * Kirim notifikasi hadiah dengan narasi berbeda per tier
   */
  private sendGiftNotification(
    aiCountry: string,
    oldScore: number,
    newScore: number,
    amount: number,
    tier: GiftTier,
    dateStr: string
  ): void {
    const countryName = this.formatCountryName(aiCountry);
    const formattedAmount = this.formatCurrency(amount);

    // Generate narasi berbeda berdasarkan tier
    const narratives: Record<string, string> = {
      'Sahabat Strategis': `${countryName} mengirimkan token apresiasi persahabatan strategis.`,
      'Mitra Baik': `${countryName} memberikan dukungan untuk memperkuat kerja sama bilateral.`,
      'Hubungan Netral': `${countryName} berinvestasi dalam stabilitas hubungan diplomatik.`,
      'Hubungan Tegang': `${countryName} berupaya meredakan ketegangan melalui bantuan diplomatik.`,
      'Hubungan Krisis': `${countryName} mendesak perbaikan hubungan melalui bantuan darurat.`
    };

    const subjects: Record<string, string> = {
      'Sahabat Strategis': `${tier.emoji} ${countryName} Kirim Token Persahabatan`,
      'Mitra Baik': `${tier.emoji} Dukungan ${countryName}: ${formattedAmount}`,
      'Hubungan Netral': `${tier.emoji} Investasi Diplomatik ${countryName}`,
      'Hubungan Tegang': `${tier.emoji} Bantuan Stabilisasi dari ${countryName}`,
      'Hubungan Krisis': `${tier.emoji} Bantuan Darurat ${countryName}: ${formattedAmount}`
    };

    // Hitung kenaikan hubungan aktual
    const pointsGain = newScore - oldScore;

    inboxStorage.addMessage({
      source: `Departemen Luar Negeri ${countryName}`,
      subject: subjects[tier.name],
      content: `\n${narratives[tier.name]}\n\n💰 Detail Transfer:\n• Jumlah: ${formattedAmount}\n• Status: ✅ BERHASIL MASUK KE KAS\n• Tanggal: ${dateStr}\n\n📈 Perubahan Hubungan:\n• Skor Sebelumnya: ${oldScore.toFixed(1)}/100\n• Skor Setelahnya: ${newScore.toFixed(1)}/100 (${tier.name})\n• Kenaikan: +${pointsGain.toFixed(2)} poin\n\n💡 Penjelasan:\n• Setiap 1.000 yang diterima = +0.1 poin hubungan\n• Bantuan ${formattedAmount} meningkatkan hubungan sebesar +${pointsGain.toFixed(2)} poin\n\n📋 Konteks:\n${tier.description}\n\n💡 Rekomendasi:\n${this.getRecommendation(newScore, tier)}`,
      time: dateStr,
      priority: newScore < 40 ? 'high' : newScore < 60 ? 'medium' : 'low',
      category: 'relationship',
      isProposal: false
    });
  }

  private getRecommendation(score: number, tier: GiftTier): string {
    if (score >= 80) {
      return '• Pertahankan hubungan yang sangat baik\n• Pertimbangkan aliansi strategis\n• Tingkatkan kerja sama perdagangan';
    } else if (score >= 60) {
      return '• Manfaatkan momentum positif\n• Bangun kedutaan untuk memperkuat hubungan\n• Tawarkan proyek kolaboratif';
    } else if (score >= 40) {
      return '• Monitor perkembangan hubungan\n• Respon positif terhadap gestur AI\n• Pertimbangkan kunjungan diplomatik';
    } else if (score >= 20) {
      return '• Prioritaskan perbaikan hubungan\n• Bangun kedutaan segera (+0.1/minggu)\n• Hindari konflik bilateral';
    } else {
      return '• KRISIS: Bangun kedutaan SEGERA\n• Tunjukkan komitmen perbaikan\n• Pertimbangkan negosiasi resmi';
    }
  }

  /**
   * Cek apakah AI memiliki kas yang cukup untuk memberi bantuan
   */
  private hasSufficientFunds(aiCountry: string): boolean {
    const aiKas = aiBudgetStorage.getBudget(aiCountry);
    return aiKas >= THRESHOLDS.MIN_AI_BUDGET;
  }

  private addMoneyToBudget(amount: number): void {
    try {
      const currentBudget = budgetStorage.getBudget ? budgetStorage.getBudget() : 0;
      if (typeof currentBudget === 'number') {
        budgetStorage.updateBudget(currentBudget + amount);
      }
    } catch (e) {
      console.warn('[AI-GIFT] Could not update budget:', e);
    }
  }

  /**
   * Format currency sesuai dengan sistem kas negara game
   * Menggunakan toLocaleString('id-ID') tanpa prefix/suffix
   */
  private formatCurrency(amount: number): string {
    return Math.round(amount).toLocaleString('id-ID');
  }

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
   * Get gift statistics for debugging
   */
  public getStatistics(): { country: string; count: number; total: string; lastDate: string }[] {
    return Array.from(this.giftHistory.entries()).map(([country, data]) => ({
      country,
      count: data.giftCount,
      total: this.formatCurrency(data.totalGiven),
      lastDate: data.lastGiftDate
    }));
  }
}

export const aiDiplomaticGiftService = new AiDiplomaticGiftService();
