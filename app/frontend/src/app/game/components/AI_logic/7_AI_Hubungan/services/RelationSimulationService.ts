"use client"

/**
 * RelationSimulationService.ts
 * Simulasi AI untuk hubungan antar negara yang berjalan setiap minggu.
 * Update terjadi pada tanggal 7, 14, 21, dan 28 setiap bulannya.
 * Hubungan naik +0.1 per minggu jika ada kedutaan, turun -0.1 per minggu jika tidak ada kedutaan.
 */

import { getGlobalRelationMatrix, saveGlobalRelationMatrix, normalizeId, RelationMatrix, RelationEntry } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

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
};

class RelationSimulationService {
  private lastProcessedDate: string | null = null;

  /**
   * Main entry point - called daily by SimulationManager
   * Only processes on weekly dates: 7, 14, 21, 28
   */
  public processDailyRelations(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    const dayOfMonth = currentDate.getDate();
    
    // Only process on specific weekly dates (7, 14, 21, 28)
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
