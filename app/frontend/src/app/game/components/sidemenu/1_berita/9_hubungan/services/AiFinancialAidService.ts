"use client";

/**
 * GlobalAiFinancialAidService.ts (NPC to NPC)
 * Sistem bantuan keuangan otomatis antar NPC (AI ke AI)
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

interface FinancialThresholds {
  MIN_AI_BUDGET: number;
  MAX_GIVE_PERCENTAGE: number;
  EM_VALUE_PER_POINT: number;
}

const THRESHOLDS: FinancialThresholds = {
  MIN_AI_BUDGET: 100000,
  MAX_GIVE_PERCENTAGE: 5,
  EM_VALUE_PER_POINT: 1000,
};

interface AidHistory {
  lastAidDate: string;
}

class GlobalAiFinancialAidService {
  private processedAids: Set<string> = new Set();
  private aidHistory: Map<string, AidHistory> = new Map();
  private readonly STORAGE_KEY = 'ai_financial_aid_global_history';

  constructor() {
    this.loadHistory();
  }

  private loadHistory(): void {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.aidHistory = new Map(Object.entries(parsed));
      } catch (e) {}
    }
  }

  private saveHistory(): void {
    if (typeof window === 'undefined') return;
    const obj = Object.fromEntries(this.aidHistory);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(obj));
  }

  private canSendAid(aidKey: string, score: number, currentDate: Date): boolean {
    const history = this.aidHistory.get(aidKey);
    if (!history) return true;
    const lastDate = new Date(history.lastAidDate);
    const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    if (score < 40) return diffDays >= 1;
    return diffDays >= 7;
  }

  public calculateAidAmount(aiCountry: string, relationshipScore: number): { amount: number; formatted: string } {
    const countryData = centersData.find(c => normalizeId(c.name_id) === normalizeId(aiCountry) || normalizeId(c.name_en) === normalizeId(aiCountry));
    const dailyIncome = countryData ? aiBudgetStorage.calculateDailyIncome(countryData) : 10000;
    const aiKas = countryData ? aiBudgetStorage.getBudget(countryData.name_en) : 0;
    const daysOfIncome = relationshipScore >= 40 ? 1 :
                         relationshipScore >= 30 ? 2 :
                         relationshipScore >= 20 ? 3 :
                         relationshipScore >= 10 ? 5 : 7;
    const baseAid = dailyIncome * daysOfIncome;
    const maxAidFromKas = aiKas * (THRESHOLDS.MAX_GIVE_PERCENTAGE / 100);
    const finalAid = Math.min(baseAid, maxAidFromKas);
    const roundedAid = Math.round(finalAid / 1000) * 1000;
    return {
      amount: roundedAid,
      formatted: Math.round(roundedAid).toLocaleString('id-ID')
    };
  }

  public processFinancialAid(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const normalizedUser = this.getCurrentUserCountry();
    const matrix = getGlobalRelationMatrix();
    
    Object.entries(matrix as RelationMatrix).forEach(([sourceId, targets]) => {
      Object.entries(targets).forEach(([targetId, entry]) => {
        // HANYA PROSES ANTAR NPC
        if (targetId === normalizedUser || sourceId === normalizedUser) return;

        const score = (entry as RelationEntry).s;
        if (score >= 50) return;

        const aidKey = `${sourceId}-${targetId}`;
        const dayAidKey = `${aidKey}-${dateStr}-aid`;

        if (this.processedAids.has(dayAidKey)) return;
        if (!this.canSendAid(aidKey, score, currentDate)) return;
        if (!this.hasSufficientFunds(sourceId)) return;

        const { amount, formatted } = this.calculateAidAmount(sourceId, score);
        if (amount <= 0) return;

        this.processedAids.add(dayAidKey);
        this.aidHistory.set(aidKey, { lastAidDate: dateStr });

        // NPC specific logic
        aiBudgetStorage.updateBudgetManual(targetId, amount);
        const newScore = addRelationScoreFromAid(sourceId, targetId, amount);

        // Berita Internasional (AI ke AI)
        const sourceName = this.formatCountryName(sourceId);
        const targetName = this.formatCountryName(targetId);
        const pointsGain = newScore - score;

        newsStorage.addNews({
          source: sourceId,
          subject: `Bantuan Finansial: ${sourceName} ke ${targetName}`,
          content: `${sourceName} menyalurkan bantuan finansial strategis kepada ${targetName} guna menjaga stabilitas bilateral.\n💰 ${formatted} disalurkan.\n📈 Hubungan bertambah +${pointsGain.toFixed(2)} poin (${score.toFixed(1)} → ${newScore.toFixed(1)}).`,
          category: 'diplomacy',
          priority: 'medium',
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
    return aiKas >= THRESHOLDS.MIN_AI_BUDGET;
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

export const globalAiFinancialAidService = new GlobalAiFinancialAidService();
