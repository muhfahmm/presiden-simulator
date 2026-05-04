"use client"

/**
 * RelationSimulationService.ts
 * Simulasi AI untuk hubungan antar negara yang berjalan setiap minggu.
 * Update terjadi pada tanggal 7, 14, 21, dan 28 setiap bulannya.
 * Hubungan naik +0.1 per minggu jika ada kedutaan, turun -0.1 per minggu jika tidak ada kedutaan.
 */

import { getGlobalRelationMatrix, saveGlobalRelationMatrix, normalizeId, RelationMatrix, RelationEntry } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { aiFinancialAidService } from "@/app/game/components/sidemenu/2_kotak_masuk/7_hubungan/services/AiFinancialAidService";
import { aiMoneyOfferService } from "@/app/game/components/sidemenu/2_kotak_masuk/7_hubungan/services/AiMoneyOfferService";
import { aiDiplomaticGiftService } from "@/app/game/components/sidemenu/2_kotak_masuk/7_hubungan/services/AiDiplomaticGiftService";
import { globalAiFinancialAidService } from "@/app/game/components/sidemenu/1_berita/9_hubungan/services/AiFinancialAidService";
import { globalAiMoneyOfferService } from "@/app/game/components/sidemenu/1_berita/9_hubungan/services/AiMoneyOfferService";
import { globalAiDiplomaticGiftService } from "@/app/game/components/sidemenu/1_berita/9_hubungan/services/AiDiplomaticGiftService";

// Configuration constants - Embassy-based weekly change
const WEEKLY_CHANGE_CONFIG = {
  WITH_EMBASSY: 0.1,     // +0.1 per week if embassy exists
  WITHOUT_EMBASSY: -0.1, // -0.1 per week if no embassy
};

// Weekly update dates: 7, 14, 21, 28
const WEEKLY_DATES = [7, 14, 21, 28];

const BOUNDS = {
  MIN: 0,
  MAX: 100,
  NEUTRAL: 50,
  CRITICAL_LOW: 25,  // Threshold for critical relationship (0-25) - Sangat Buruk
  BAD: 50,           // Threshold for bad relationship (26-49) - Buruk
};

const LAST_PROCESSED_KEY = 'relation_sim_last_processed';
const NOTIFIED_COUNTRIES_KEY = 'relation_sim_notified';
const COOLDOWN_KEY = 'relation_sim_cooldown';

class RelationSimulationService {
  private lastProcessedDate: string | null = null;
  private notifiedCountries: Set<string> = new Set();
  private notifiedCountriesWithTime: Map<string, Date> = new Map();

  private readonly MAX_NOTIFICATIONS_PER_WEEK = 5;
  private readonly COOLDOWN_DAYS = 28;

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    
    this.lastProcessedDate = localStorage.getItem(LAST_PROCESSED_KEY);
    
    const notifiedRaw = localStorage.getItem(NOTIFIED_COUNTRIES_KEY);
    if (notifiedRaw) {
      try {
        const arr = JSON.parse(notifiedRaw);
        this.notifiedCountries = new Set(arr);
      } catch (e) {}
    }
    
    const cooldownRaw = localStorage.getItem(COOLDOWN_KEY);
    if (cooldownRaw) {
      try {
        const obj = JSON.parse(cooldownRaw);
        Object.entries(obj).forEach(([key, dateStr]) => {
          this.notifiedCountriesWithTime.set(key, new Date(dateStr as string));
        });
      } catch (e) {}
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    if (this.lastProcessedDate) {
      localStorage.setItem(LAST_PROCESSED_KEY, this.lastProcessedDate);
    }
    
    localStorage.setItem(NOTIFIED_COUNTRIES_KEY, JSON.stringify([...this.notifiedCountries]));
    
    const cooldownObj: Record<string, string> = {};
    this.notifiedCountriesWithTime.forEach((date, key) => {
      cooldownObj[key] = date.toISOString();
    });
    localStorage.setItem(COOLDOWN_KEY, JSON.stringify(cooldownObj));
  }

  /**
   * Main entry point - called daily by SimulationManager
   * Only processes on weekly dates: 7, 14, 21, 28
   */
  public processDailyRelations(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const dayOfMonth = currentDate.getDate();
    
    // === DAILY: Process diplomatic gifts (runs every day) ===
    // User-specific gifts
    aiDiplomaticGiftService.processDailyGifts(currentDate);
    // Global NPC-to-NPC gifts
    globalAiDiplomaticGiftService.processDailyGifts(currentDate);

    // === DAILY: Process financial aid and money offers (runs every day) ===
    // User-specific aid
    aiMoneyOfferService.processMoneyOffers(currentDate);
    aiFinancialAidService.processFinancialAid(currentDate);
    // Global NPC-to-NPC aid
    globalAiMoneyOfferService.processMoneyOffers(currentDate);
    globalAiFinancialAidService.processFinancialAid(currentDate);
    
    // === WEEKLY: Only process on specific dates (7, 14, 21, 28) ===
    if (!WEEKLY_DATES.includes(dayOfMonth)) {
      return;
    }
    
    // Prevent double-processing on same day
    if (this.lastProcessedDate === dateStr) {
      return;
    }
    this.lastProcessedDate = dateStr;
    this.saveToStorage();

    const matrix = getGlobalRelationMatrix();
    const updatedMatrix = this.simulateRelations(matrix);
    
    // === IMPORTANT: Save simulation changes FIRST ===
    // This prevents state loss if aid services update the matrix immediately after.
    saveGlobalRelationMatrix(updatedMatrix);

    // Check for critical low relationships and send notifications
    this.checkCriticalRelations(updatedMatrix, dateStr);

    console.log(`[RELATION-SIMULATION] Weekly update completed for ${dateStr}`);
  }

  /**
   * Simulate all relations in the matrix
   */
  private simulateRelations(matrix: RelationMatrix): RelationMatrix {
    const newMatrix: RelationMatrix = { ...matrix };
    const allCountryIds = this.getAllCountryIds();

    // Ensure all countries have entries
    allCountryIds.forEach(sourceId => {
      if (!newMatrix[sourceId]) {
        newMatrix[sourceId] = {};
      }

      allCountryIds.forEach(targetId => {
        if (sourceId === targetId) return; // Skip self-relations

        // Get or create entry
        const entry = newMatrix[sourceId][targetId] || this.createDefaultEntry();
        
        // Apply simulation
        newMatrix[sourceId][targetId] = this.simulateRelationEntry(entry, sourceId, targetId);
      });
    });

    return newMatrix;
  }

  /**
   * Simulate a single relation entry
   * Embassy-based logic: +0.1 with embassy, -0.1 without embassy (weekly)
   */
  private simulateRelationEntry(entry: RelationEntry, sourceId: string, targetId: string): RelationEntry {
    let newScore = entry.s;

    // Apply embassy-based weekly change
    const weeklyChange = entry.e === 1 
      ? WEEKLY_CHANGE_CONFIG.WITH_EMBASSY 
      : WEEKLY_CHANGE_CONFIG.WITHOUT_EMBASSY;
    newScore += weeklyChange;

    // Clamp to bounds
    newScore = Math.max(BOUNDS.MIN, Math.min(BOUNDS.MAX, newScore));

    return {
      s: Number(newScore.toFixed(2)),
      e: entry.e,
      p: entry.p,
      a: entry.a,
      t: entry.t,
    };
  }


  /**
   * Check for low relationships and send inbox notifications
   * - 0-25: Sangat Buruk (Critical - High Priority)
   * - 26-49: Buruk (Bad - Medium Priority)
   */
  private checkCriticalRelations(matrix: RelationMatrix, dateStr: string): void {
    const normalizedUser = this.getCurrentUserCountry();
    
    // Collect all bad relationships for prioritization
    const badRelations: Array<{targetId: string; score: number; countryName: string; type: 'critical' | 'bad'}> = [];
    const processedCountries = new Set<string>(); // Track countries already added
    
    // Check relations where user is source
    if (matrix[normalizedUser]) {
      Object.entries(matrix[normalizedUser]).forEach(([targetId, entry]) => {
        if (processedCountries.has(targetId)) return;
        
        const score = entry.s;
        const countryName = this.formatCountryName(targetId);
        
        if (score <= BOUNDS.CRITICAL_LOW) {
          badRelations.push({targetId, score, countryName, type: 'critical'});
          processedCountries.add(targetId);
        } else if (score < BOUNDS.NEUTRAL) {
          badRelations.push({targetId, score, countryName, type: 'bad'});
          processedCountries.add(targetId);
        }
      });
    }
    
    // Check relations where user is target (symmetric)
    Object.entries(matrix).forEach(([sourceId, targets]) => {
      if (sourceId === normalizedUser) return; // Skip, already checked above
      
      if (targets[normalizedUser]) {
        if (processedCountries.has(sourceId)) return; // Skip if already added
        
        const entry = targets[normalizedUser];
        const score = entry.s;
        const countryName = this.formatCountryName(sourceId);
        
        if (score <= BOUNDS.CRITICAL_LOW) {
          badRelations.push({targetId: sourceId, score, countryName, type: 'critical'});
          processedCountries.add(sourceId);
        } else if (score < BOUNDS.NEUTRAL) {
          badRelations.push({targetId: sourceId, score, countryName, type: 'bad'});
          processedCountries.add(sourceId);
        }
      }
    });
    
    // Sort by score (lowest first), but filter out those on cooldown FIRST
    // This ensures that on dates 14, 21, 28, we notify OTHER bad countries if the worst 5 are on cooldown.
    const availableRelations = badRelations.filter(({targetId}) => {
      const cooldownKey = `${normalizedUser}-${targetId}`;
      if (this.notifiedCountriesWithTime.has(cooldownKey)) {
        const lastNotified = this.notifiedCountriesWithTime.get(cooldownKey);
        if (lastNotified) {
          const daysSince = (new Date(dateStr).getTime() - lastNotified.getTime()) / (1000 * 60 * 60 * 24);
          if (daysSince < this.COOLDOWN_DAYS) return false;
        }
      }
      return true;
    });

    availableRelations.sort((a, b) => a.score - b.score);
    const topRelations = availableRelations.slice(0, this.MAX_NOTIFICATIONS_PER_WEEK);
      
      topRelations.forEach(({targetId, score, countryName, type: notificationType}) => {
        const notificationKey = `${normalizedUser}-${targetId}-${notificationType}-${dateStr}`;
        const cooldownKey = `${normalizedUser}-${targetId}`;
        
        // Prevent duplicate notifications for the same country on the same day
        if (this.notifiedCountries.has(notificationKey)) return;
        
        this.notifiedCountries.add(notificationKey);
        this.notifiedCountriesWithTime.set(cooldownKey, new Date(dateStr));
        this.saveToStorage();
        
        // Build notification based on type
        if (notificationType === 'critical') {
          // 0-25: Sangat Buruk - High Priority
          inboxStorage.addMessage({
            source: 'Dinas Luar Negeri',
            subject: `PERINGATAN KRITIS: Hubungan dengan ${countryName} sangat memburuk`,
            content: `Hubungan dengan ${countryName} mencapai level KRITIS (${score.toFixed(1)}/100).\n\n🔴 Status: SANGAT BURUK (0-25)\n⚠️ Risiko konflik meningkat\n\n💡 Bangun kedutaan untuk memperbaiki hubungan (+0.1/minggu).`,
            time: dateStr,
            priority: 'high',
            category: 'relationship',
          });
          
          console.log(`[RELATION-SIMULATION] CRITICAL alert sent for ${countryName} (${score})`);
        } else {
          // 26-49: Buruk - Medium Priority
          inboxStorage.addMessage({
            source: 'Dinas Luar Negeri',
            subject: `Peringatan: Hubungan dengan ${countryName} memburuk`,
            content: `Hubungan dengan ${countryName} menurun (${score.toFixed(1)}/100).\n\n🟡 Status: BURUK (26-49)\n⚠️ Perdagangan & investasi berkurang\n\n✨ Bangun kedutaan untuk memperbaiki hubungan (+0.1/minggu).`,
            time: dateStr,
            priority: 'medium',
            category: 'relationship',
          });
          
          console.log(`[RELATION-SIMULATION] BAD alert sent for ${countryName} (${score})`);
        }
      });
    
    // Clean up old notifications (keep only last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    this.notifiedCountries.forEach(key => {
      const keyDate = key.split('-').pop();
      if (keyDate && new Date(keyDate) < thirtyDaysAgo) {
        this.notifiedCountries.delete(key);
      }
    });
    
    // Clean up old cooldown entries (older than 28 days)
    this.notifiedCountriesWithTime.forEach((date, key) => {
      if (date < thirtyDaysAgo) {
        this.notifiedCountriesWithTime.delete(key);
      }
    });
  }
  
  /**
   * Get current user country name
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
    
    // Fallback: capitalize each word
    return countryId.split('_').map(w => 
      w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ');
  }

  /**
   * Create default relation entry
   */
  private createDefaultEntry(): RelationEntry {
    return {
      s: BOUNDS.NEUTRAL,  // Start at neutral
      e: 0,               // No embassy
      p: 0,               // No pact
      a: 0,               // No alliance
      t: 0,               // No trade
    };
  }

  /**
   * Get all country IDs from the database
   */
  private getAllCountryIds(): string[] {
    return centersData.map(c => c.name_id.toLowerCase().trim());
  }

  /**
   * Force a simulation run (for testing/debugging)
   */
  public forceSimulation(): void {
    const today = new Date();
    this.lastProcessedDate = null; // Reset to force run
    this.processDailyRelations(today);
  }

  /**
   * Get simulation statistics (for debugging)
   */
  public getStats(): { 
    totalRelations: number; 
    averageScore: number; 
    aboveNeutral: number; 
    belowNeutral: number;
  } {
    const matrix = getGlobalRelationMatrix();
    let totalRelations = 0;
    let totalScore = 0;
    let aboveNeutral = 0;
    let belowNeutral = 0;

    Object.values(matrix).forEach(targets => {
      Object.values(targets).forEach((entry: RelationEntry) => {
        totalRelations++;
        totalScore += entry.s;
        if (entry.s > BOUNDS.NEUTRAL) aboveNeutral++;
        if (entry.s < BOUNDS.NEUTRAL) belowNeutral++;
      });
    });

    return {
      totalRelations,
      averageScore: totalRelations > 0 ? totalScore / totalRelations : 0,
      aboveNeutral,
      belowNeutral,
    };
  }
}

export const relationSimulationService = new RelationSimulationService();
