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
import { aiDiplomaticGiftService } from "@/app/game/components/sidemenu/2_kotak_masuk/7_hubungan/services/AiDiplomaticGiftService";

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

class RelationSimulationService {
  private lastProcessedDate: string | null = null;
  private notifiedCountries: Set<string> = new Set(); // Track countries already notified

  /**
   * Main entry point - called daily by SimulationManager
   * Only processes on weekly dates: 7, 14, 21, 28
   */
  public processDailyRelations(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const dayOfMonth = currentDate.getDate();
    
    // === DAILY: Process diplomatic gifts (runs every day) ===
    // AI gives money at ALL relationship levels with different percentages
    aiDiplomaticGiftService.processDailyGifts(currentDate);
    
    // === WEEKLY: Only process on specific dates (7, 14, 21, 28) ===
    if (!WEEKLY_DATES.includes(dayOfMonth)) {
      return;
    }
    
    // Prevent double-processing on same day
    if (this.lastProcessedDate === dateStr) {
      return;
    }
    this.lastProcessedDate = dateStr;

    const matrix = getGlobalRelationMatrix();
    const updatedMatrix = this.simulateRelations(matrix);
    
    // Check for critical low relationships and send notifications
    this.checkCriticalRelations(updatedMatrix, dateStr);
    
    // === WEEKLY: Process financial aid for struggling relationships ===
    // This is emergency aid only for relationships below 50
    aiFinancialAidService.processWeeklyFinancialAid(dateStr);
    
    // Batch save - only one write to localStorage
    saveGlobalRelationMatrix(updatedMatrix);

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
    
    Object.entries(matrix).forEach(([sourceId, targets]) => {
      // Only check relations involving the player
      if (sourceId !== normalizedUser) return;
      
      Object.entries(targets).forEach(([targetId, entry]) => {
        const score = entry.s;
        const countryName = this.formatCountryName(targetId);
        
        // Determine notification type based on score
        let notificationType: 'critical' | 'bad' | null = null;
        
        if (score <= BOUNDS.CRITICAL_LOW) {
          // 0-25: Sangat Buruk
          notificationType = 'critical';
        } else if (score < BOUNDS.NEUTRAL) {
          // 26-49: Buruk
          notificationType = 'bad';
        }
        
        if (!notificationType) return;
        
        const notificationKey = `${normalizedUser}-${targetId}-${notificationType}-${dateStr}`;
        
        // Prevent duplicate notifications for the same country on the same day
        if (this.notifiedCountries.has(notificationKey)) return;
        this.notifiedCountries.add(notificationKey);
        
        // Build notification based on type
        if (notificationType === 'critical') {
          // 0-25: Sangat Buruk - High Priority
          inboxStorage.addMessage({
            source: 'Dinas Luar Negeri',
            subject: `PERINGATAN KRITIS: Hubungan dengan ${countryName} sangat memburuk`,
            content: `Yang Terhormat Presiden,\n\nHubungan diplomatik kita dengan ${countryName} telah mencapai level KRITIS (${score.toFixed(1)}).\n\n🔴 Status: SANGAT BURUK (0-25)\n\n⚠️ Dampak yang mungkin terjadi:\n• Risiko konflik militer meningkat drastis\n• Peluang perdagangan menurun drastis\n• Negara lain mungkin ragu untuk bersekutu dengan kita\n• Potensi sanksi internasional\n• Ancaman isolasi diplomatik\n\n📋 Rekomendasi Tindakan Segera:\n1. Segera bangun Kedutaan Besar untuk memperbaiki hubungan (+0.1/minggu)\n2. Kirim delegasi diplomatik untuk negosiasi darurat\n3. Tawarkan bantuan atau kerjasama bilateral\n4. Pertimbangkan pakta non-agresi segera\n5. Tingkatkan pengeluaran untuk diplomasi\n\n⚡ Jika tidak ditangani, hubungan bisa memburuk hingga mencapai titik nol (0) yang dapat memicu konflik terbuka.`,
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
            content: `Yang Terhormat Presiden,\n\nHubungan diplomatik kita dengan ${countryName} sedang mengalami penurunan (${score.toFixed(1)}).\n\n🟡 Status: BURUK (26-49)\n\n⚠️ Dampak yang mungkin terjadi:\n• Perdagangan dengan ${countryName} menurun\n• Potensi ketegangan diplomatik\n• Peluang investasi dari negara tersebut berkurang\n• Reputasi diplomatik kita menurun sedikit\n\n📋 Rekomendasi Tindakan:\n1. Bangun Kedutaan Besar untuk memperbaiki hubungan secara bertahap (+0.1/minggu)\n2. Pertimbangkan kunjungan diplomatik\n3. Tawarkan kerjasama ekonomi\n4. Pantau perkembangan hubungan secara rutin\n\n💡 Jika tidak ditangani, hubungan bisa memburuk ke level KRITIS (0-25) dalam beberapa minggu.`,
            time: dateStr,
            priority: 'medium',
            category: 'relationship',
          });
          
          console.log(`[RELATION-SIMULATION] BAD alert sent for ${countryName} (${score})`);
        }
      });
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
