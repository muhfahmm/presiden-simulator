"use client";

/**
 * GlobalAiMoneyOfferService.ts (NPC to NPC)
 * Logika AI untuk memberikan uang antar NPC (AI ke AI) sebagai aksi diplomatik global.
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

interface MoneyOfferConfig {
  BASE_PERCENTAGE: number;
  PERCENTAGE_INCREMENT: number;
  MIN_SCORE_FOR_OFFER: number;
  MAX_PERCENTAGE: number;
}

const OFFER_CONFIG: MoneyOfferConfig = {
  BASE_PERCENTAGE: 10,
  PERCENTAGE_INCREMENT: 5,
  MIN_SCORE_FOR_OFFER: 50,
  MAX_PERCENTAGE: 60,
};

interface OfferHistory {
  lastOfferDate: string;
}

class GlobalAiMoneyOfferService {
  private notifiedOffers: Set<string> = new Set();
  private offerHistory: Map<string, OfferHistory> = new Map();
  private readonly STORAGE_KEY = 'ai_money_offers_global_history';

  constructor() {
    this.loadHistory();
  }

  private loadHistory(): void {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.offerHistory = new Map(Object.entries(parsed));
      } catch (e) {}
    }
  }

  private saveHistory(): void {
    if (typeof window === 'undefined') return;
    const obj = Object.fromEntries(this.offerHistory);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
  }

  private canSendOffer(offerKey: string, score: number, currentDate: Date): boolean {
    const history = this.offerHistory.get(offerKey);
    if (!history) return true;

    const lastDate = new Date(history.lastOfferDate);
    const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    if (score < 40) return diffDays >= 1;
    return diffDays >= 7;
  }

  public calculateOfferPercentage(score: number): number {
    if (score >= 50) return 0;
    const stepsBelow = Math.floor((50 - score) / 5);
    const percentage = OFFER_CONFIG.BASE_PERCENTAGE + (stepsBelow * OFFER_CONFIG.PERCENTAGE_INCREMENT);
    return Math.min(percentage, OFFER_CONFIG.MAX_PERCENTAGE);
  }

  private calculateOfferAmount(aiCountry: string, percentage: number, countryData: any): number {
    if (!countryData) return Math.floor(Math.random() * 40000) + 10000;
    const aiKas = aiBudgetStorage.getBudget(countryData.name_en);
    const dailyIncome = aiBudgetStorage.calculateDailyIncome(countryData);
    const daysMultiplier = percentage / 10;
    const baseAmount = dailyIncome * daysMultiplier;
    const maxFromKas = aiKas * 0.05;
    const finalAmount = Math.min(baseAmount, maxFromKas);
    return Math.round(finalAmount / 1000) * 1000;
  }

  public processMoneyOffers(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    Object.entries(matrix as RelationMatrix).forEach(([sourceId, targets]) => {
      Object.entries(targets).forEach(([targetId, entry]) => {
        // HANYA PROSES ANTAR NPC
        if (targetId === normalizedUser || sourceId === normalizedUser) return;

        const score = (entry as RelationEntry).s;
        if (score >= OFFER_CONFIG.MIN_SCORE_FOR_OFFER) return;

        const percentage = this.calculateOfferPercentage(score);
        if (percentage <= 0) return;

        const offerKey = `${sourceId}-${targetId}`;
        const dayOfferKey = `${offerKey}-${dateStr}-money`;
        
        if (this.notifiedOffers.has(dayOfferKey)) return;
        if (!this.canSendOffer(offerKey, score, currentDate)) return;
        if (!this.hasSufficientFunds(sourceId)) return;

        const sourceData = centersData.find(c => 
          normalizeId(c.name_id) === sourceId ||
          normalizeId(c.name_en) === sourceId
        );

        const offerAmount = this.calculateOfferAmount(sourceId, percentage, sourceData);
        if (offerAmount <= 0) return;

        this.notifiedOffers.add(dayOfferKey);
        this.offerHistory.set(offerKey, { lastOfferDate: dateStr });

        // NPC to NPC logic
        aiBudgetStorage.updateBudgetManual(targetId, offerAmount);
        const newScore = addRelationScoreFromAid(sourceId, targetId, offerAmount);

        // Berita Internasional (AI ke AI)
        const sourceName = this.formatCountryName(sourceId);
        const targetName = this.formatCountryName(targetId);
        const formattedAmount = Math.round(offerAmount).toLocaleString('id-ID');
        const pointsGain = newScore - score;

        newsStorage.addNews({
          source: sourceId,
          subject: `Transfer Diplomatik: ${sourceName} ke ${targetName}`,
          content: `${sourceName} secara resmi menyalurkan bantuan ekonomi kepada ${targetName} guna meredakan ketegangan diplomatik.\n💰 ${formattedAmount} disalurkan.\n📈 Hubungan bertambah +${pointsGain.toFixed(2)} poin (${score.toFixed(1)} → ${newScore.toFixed(1)}).`,
          category: 'diplomacy',
          priority: 'low',
          time: dateStr
        });
      });
    });

    this.saveHistory();
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

  private formatCountryName(countryId: string): string {
    const country = centersData.find(c => 
      c.name_id.toLowerCase().trim() === countryId.toLowerCase().trim() ||
      c.name_en.toLowerCase().trim() === countryId.toLowerCase().trim()
    );
    if (country) return country.name_id;
    return countryId.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  private hasSufficientFunds(aiCountry: string): boolean {
    const countryData = centersData.find(c => 
      normalizeId(c.name_id) === normalizeId(aiCountry) ||
      normalizeId(c.name_en) === normalizeId(aiCountry)
    );
    if (!countryData) return false;
    const aiKas = aiBudgetStorage.getBudget(countryData.name_en);
    return aiKas >= 100000;
  }
}

export const globalAiMoneyOfferService = new GlobalAiMoneyOfferService();
