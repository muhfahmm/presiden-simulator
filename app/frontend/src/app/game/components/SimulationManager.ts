import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { nuclearStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/5_program_nuklir/nuclearStorage";
import { researchStorage } from "@/app/game/components/sidemenu/3_riset_dan_penelitian/researchStorage";
import { unSecurityCouncilStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/2_dewan_keamanan/storageKeamanan/dewan_keamanan/unSecurityCouncilStorage";
import { DebtAiService } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/3-hutang/sistem_hutang_AI/services/DebtAiService";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { unVotingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/1_pemungutan_suara/logika_pemungutan_suara/unVotingStorage";
import { regionalMembershipRouter } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/2_organisasi_regional/logic/router/RegionalMembershipRouter";

/**
 * High-Performance Background Simulation Manager
 * This runs OUTSIDE of React to prevent frame drops during date transitions.
 */
class SimulationManager {
  private lastProcessedDate: string | null = null;
  private isRunning = false;

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    // Subscribe to time storage (Native JS subscription, no React overhead)
    timeStorage.subscribe((date, paused) => {
      if (paused) {
          // Force persist immediately on pause
          this.persistAll();
          return;
      }
      
      // Throttle: Only process if day has changed
      const dateStr = date.toISOString().split('T')[0];
      if (this.lastProcessedDate !== dateStr) {
          this.handleTick(date);
      }
    });
  }

  private persistAll() {
      budgetStorage.persist();
      aiHappinessStorage.persist();
      unVotingStorage.persist();
      regionalMembershipRouter.persist();
  }

  private handleTick(gameDate: Date) {
    const dateStr = gameDate.toISOString().split('T')[0];
    if (this.lastProcessedDate === dateStr) return; // Prevent double-processing
    this.lastProcessedDate = dateStr;

    // Run heavy logic in microtasks to keep the main thread responsive
    queueMicrotask(() => {
      // 1. Storage Updates
      budgetStorage.updateCumulativeProduction({}, gameDate);
      nuclearStorage.updateProgress(gameDate);
      researchStorage.updateProgress(gameDate);
      DebtAiService.checkMonthlyUpdate();

      // Persist to LocalStorage every 30 days (Month end)
      if (gameDate.getDate() === 1) {
          budgetStorage.persist();
          aiHappinessStorage.persist();
          unVotingStorage.persist();
          regionalMembershipRouter.persist();
      }

      // 2. Calendar-based Events (UN Security Council)
      const month = gameDate.getMonth();
      const day = gameDate.getDate();
      const year = gameDate.getFullYear();

      if (month === 0 && day === 1) unSecurityCouncilStorage.performRotation(year);
      if (month === 5 && day === 1) unSecurityCouncilStorage.checkElectionOpening(year);
      if (month === 5 && day === 15) unSecurityCouncilStorage.conductElection(year);
      if (month === 6 && day === 1) unSecurityCouncilStorage.promoteElectedMembers(year);
    });
  }
}

export const simulationManager = new SimulationManager();
