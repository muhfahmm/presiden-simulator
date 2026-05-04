"use client";

/**
 * GlobalAiDiplomaticGiftService.ts (NPC to NPC)
 * Sistem hadiah diplomatik antar NPC (AI ke AI)
 */

import { newsStorage } from "../../newsStorage";
import { 
  getGlobalRelationMatrix, 
  normalizeId, 
  RelationMatrix, 
  RelationEntry,
  addRelationScoreFromAid 
} from "../../../../modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
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
  { minScore: 80, maxScore: 100, name: 'Sahabat Strategis', emoji: '🤝', minPercent: 2, maxPercent: 5, description: 'Hadiah persahabatan', frequency: 'monthly' },
  { minScore: 60, maxScore: 79, name: 'Mitra Baik', emoji: '🎁', minPercent: 5, maxPercent: 10, description: 'Dukungan bilateral', frequency: 'biweekly' },
  { minScore: 40, maxScore: 59, name: 'Hubungan Netral', emoji: '📊', minPercent: 8, maxPercent: 15, description: 'Stabilitas', frequency: 'weekly' },
  { minScore: 20, maxScore: 39, name: 'Hubungan Tegang', emoji: '🔧', minPercent: 15, maxPercent: 25, description: 'Redakan ketegangan', frequency: 'weekly' },
  { minScore: 0, maxScore: 19, name: 'Hubungan Krisis', emoji: '🚨', minPercent: 25, maxPercent: 40, description: 'Bantuan darurat', frequency: 'daily' }
];

interface GiftHistory {
  lastGiftDate: string;
}

class GlobalAiDiplomaticGiftService {
  private giftHistory: Map<string, GiftHistory> = new Map();
  private readonly STORAGE_KEY = 'ai_diplomatic_gifts_global_history';

  constructor() { this.loadHistory(); }

  private loadHistory(): void {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.giftHistory = new Map(Object.entries(parsed));
      } catch (e) {}
    }
  }

  private saveHistory(): void {
    if (typeof window === 'undefined') return;
    const obj = Object.fromEntries(this.giftHistory);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
  }

  private getTierByScore(score: number): GiftTier | null {
    return GIFT_TIERS.find(t => score >= t.minScore && score <= t.maxScore) || null;
  }

  private canGiveGift(giftKey: string, tier: GiftTier, currentDate: Date): boolean {
    const history = this.giftHistory.get(giftKey);
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

  private calculateGiftAmount(aiCountry: string, tier: GiftTier): number {
    const countryData = centersData.find(c => normalizeId(c.name_id) === normalizeId(aiCountry) || normalizeId(c.name_en) === normalizeId(aiCountry));
    const dailyIncome = countryData ? aiBudgetStorage.calculateDailyIncome(countryData) : 10000;
    const aiKas = countryData ? aiBudgetStorage.getBudget(countryData.name_en) : 0;
    const daysOfIncome = tier.minScore >= 80 ? 0.5 : tier.minScore >= 60 ? 1 : tier.minScore >= 40 ? 2 : tier.minScore >= 20 ? 3 : 5;
    const baseAmount = dailyIncome * daysOfIncome;
    const maxFromKas = aiKas * 0.05;
    const finalAmount = Math.min(baseAmount, maxFromKas);
    return Math.round(finalAmount / 1000) * 1000;
  }

  public processDailyGifts(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    Object.entries(matrix as RelationMatrix).forEach(([sourceId, targets]) => {
      Object.entries(targets).forEach(([targetId, entry]) => {
        // HANYA PROSES ANTAR NPC
        if (targetId === normalizedUser || sourceId === normalizedUser) return;

        const score = (entry as RelationEntry).s;
        const tier = this.getTierByScore(score);
        if (!tier) return;

        const giftKey = `${sourceId}-${targetId}`;
        if (!this.canGiveGift(giftKey, tier, currentDate)) return;
        if (!this.hasSufficientFunds(sourceId)) return;

        const amount = this.calculateGiftAmount(sourceId, tier);
        if (amount <= 0) return;

        this.giftHistory.set(giftKey, { lastGiftDate: dateStr });

        // NPC specific logic
        aiBudgetStorage.updateBudgetManual(targetId, amount);
        const newScore = addRelationScoreFromAid(sourceId, targetId, amount);

        // Berita Internasional (AI ke AI) - Tampilkan untuk semua level hubungan (Persahabatan Global)
        const sourceName = this.formatCountryName(sourceId);
        const targetName = this.formatCountryName(targetId);
        const formattedAmount = Math.round(amount).toLocaleString('id-ID');
        const pointsGain = newScore - score;

        newsStorage.addNews({
          source: sourceId,
          subject: `${tier.emoji} ${sourceName} Kirim Hadiah ke ${targetName}`,
          content: `${sourceName} mengirimkan token persahabatan kepada ${targetName}.\n💰 ${formattedAmount} disalurkan.\n📈 Hubungan bertambah +${pointsGain.toFixed(2)} poin (${score.toFixed(1)} → ${newScore.toFixed(1)}).`,
          category: 'diplomacy',
          priority: 'low',
          time: dateStr
        });
      });
    });

    this.saveHistory();
  }

  private hasSufficientFunds(aiCountry: string): boolean {
    const countryData = centersData.find(c => normalizeId(c.name_id) === normalizeId(aiCountry) || normalizeId(c.name_en) === normalizeId(aiCountry));
    if (!countryData) return false;
    const aiKas = aiBudgetStorage.getBudget(countryData.name_en);
    return aiKas >= 100000;
  }

  private formatCountryName(countryId: string): string {
    const country = centersData.find(c => c.name_id.toLowerCase().trim() === countryId.toLowerCase().trim() || c.name_en.toLowerCase().trim() === countryId.toLowerCase().trim());
    if (country) return country.name_id;
    return countryId.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
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
}

export const globalAiDiplomaticGiftService = new GlobalAiDiplomaticGiftService();
