"use client"

/**
 * RelationSimulationService.ts
 * Simulasi AI untuk hubungan antar negara yang berjalan setiap pergantian hari.
 * Mengupdate semua hubungan dengan random fluctuation dan drift ke neutral.
 */

import { getGlobalRelationMatrix, saveGlobalRelationMatrix, normalizeId, RelationMatrix, RelationEntry } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { countries as centersData } from "@/app/database/data/semua_fitur_negara/0_profiles/index";

// Configuration constants
const FLUCTUATION_CONFIG = {
  SMALL_CHANGE: { delta: 1, probability: 0.70 },    // ±1 point, 70% chance
  MEDIUM_CHANGE: { delta: 2, probability: 0.20 },  // ±2 points, 20% chance
  LARGE_CHANGE: { delta: 3, probability: 0.10 },   // ±3 points, 10% chance
};

const DRIFT_CONFIG = {
  ENABLED: true,
  ABOVE_NEUTRAL_DRIFT: -0.3,  // Slight drift down if above 50
  BELOW_NEUTRAL_DRIFT: 0.3,   // Slight drift up if below 50
  DRIFT_PROBABILITY: 0.3,     // 30% chance to apply drift
};

const BOUNDS = {
  MIN: 0,
  MAX: 100,
  NEUTRAL: 50,
};

class RelationSimulationService {
  private lastProcessedDate: string | null = null;

  /**
   * Main entry point - called daily by SimulationManager
   */
  public processDailyRelations(currentDate: Date): void {
    const dateStr = currentDate.toISOString().split('T')[0];
    
    // Prevent double-processing on same day
    if (this.lastProcessedDate === dateStr) {
      return;
    }
    this.lastProcessedDate = dateStr;

    const matrix = getGlobalRelationMatrix();
    const updatedMatrix = this.simulateRelations(matrix);
    
    // Batch save - only one write to localStorage
    saveGlobalRelationMatrix(updatedMatrix);

    console.log(`[RELATION-SIMULATION] Daily update completed for ${dateStr}`);
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
   */
  private simulateRelationEntry(entry: RelationEntry, sourceId: string, targetId: string): RelationEntry {
    let newScore = entry.s;

    // Apply random fluctuation
    const fluctuation = this.calculateFluctuation();
    newScore += fluctuation;

    // Apply drift to neutral
    if (DRIFT_CONFIG.ENABLED && Math.random() < DRIFT_CONFIG.DRIFT_PROBABILITY) {
      if (newScore > BOUNDS.NEUTRAL) {
        newScore += DRIFT_CONFIG.ABOVE_NEUTRAL_DRIFT;
      } else if (newScore < BOUNDS.NEUTRAL) {
        newScore += DRIFT_CONFIG.BELOW_NEUTRAL_DRIFT;
      }
    }

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
   * Calculate random fluctuation based on probability distribution
   */
  private calculateFluctuation(): number {
    const rand = Math.random();
    let delta = 0;
    let cumulativeProbability = 0;

    // Determine magnitude
    const magnitude = 
      rand < (cumulativeProbability += FLUCTUATION_CONFIG.SMALL_CHANGE.probability) 
        ? FLUCTUATION_CONFIG.SMALL_CHANGE.delta :
      rand < (cumulativeProbability += FLUCTUATION_CONFIG.MEDIUM_CHANGE.probability)
        ? FLUCTUATION_CONFIG.MEDIUM_CHANGE.delta :
      FLUCTUATION_CONFIG.LARGE_CHANGE.delta;

    // Random direction (positive or negative)
    const direction = Math.random() < 0.5 ? 1 : -1;

    return magnitude * direction;
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
