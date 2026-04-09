/**
 * AI Proposal Scheduler
 * Mengelola jadwal proposal dari negara AI
 * Memastikan proposal dihasilkan secara berkala dan realistis
 */

import { GlobalProposal, GlobalVotingState, createProposal } from '../utils/votingSystem';
import { aiProposalGenerator, GeneratedProposal, AIProposalGeneratorConfig } from './aiProposalGenerator';
import { CountryProfile } from './aiVotingService';

export interface ProposalScheduleEntry {
  countryName: string;
  lastProposalDate: Date;
  nextProposalDate: Date;
  proposalCount: number; // Jumlah proposal yang sudah dibuat
}

export interface AIProposalSchedulerState {
  schedules: Map<string, ProposalScheduleEntry>;
  generatedProposals: GeneratedProposal[];
  lastUpdateDate: Date;
}

class AIProposalScheduler {
  private state: AIProposalSchedulerState;
  private generatorConfig: AIProposalGeneratorConfig;
  private readonly STORAGE_KEY = 'ai_proposal_scheduler_state';

  constructor(generatorConfig?: Partial<AIProposalGeneratorConfig>) {
    this.generatorConfig = {
      proposalFrequency: generatorConfig?.proposalFrequency || 7,
      minConfidence: generatorConfig?.minConfidence || 0.6,
      maxActiveProposalsPerCountry: generatorConfig?.maxActiveProposalsPerCountry || 2,
    };

    this.state = this._loadState();
  }

  /**
   * Update scheduler dan generate proposal jika diperlukan
   */
  updateAndGenerateProposals(
    allCountries: CountryProfile[],
    votingState: GlobalVotingState,
    currentDate: Date,
    globalTension: number
  ): GeneratedProposal[] {
    const newProposals: GeneratedProposal[] = [];

    // Iterasi setiap negara AI
    for (const country of allCountries) {
      // Skip jika negara adalah player
      if (country.name === 'Player') continue;

      // Cek apakah sudah waktunya untuk generate proposal
      const schedule = this._getOrCreateSchedule(country.name);

      if (currentDate >= schedule.nextProposalDate) {
        // Hitung jumlah proposal aktif dari negara ini
        const activeProposalsCount = votingState.activeProposals.filter(
          p => p.proposerCountry === country.name
        ).length;

        // Generate proposal
        const proposal = aiProposalGenerator.generateProposal(
          country,
          allCountries,
          globalTension,
          activeProposalsCount
        );

        if (proposal && proposal.confidence >= this.generatorConfig.minConfidence) {
          newProposals.push(proposal);

          // Update schedule
          schedule.lastProposalDate = currentDate;
          schedule.nextProposalDate = this._calculateNextProposalDate(
            currentDate,
            this.generatorConfig.proposalFrequency
          );
          schedule.proposalCount++;
        }
      }
    }

    // Update state
    this.state.generatedProposals = newProposals;
    this.state.lastUpdateDate = currentDate;
    this._saveState();

    return newProposals;
  }

  /**
   * Convert generated proposal ke GlobalProposal dan add ke voting state
   */
  submitGeneratedProposals(
    generatedProposals: GeneratedProposal[],
    votingState: GlobalVotingState,
    currentDate: Date
  ): GlobalVotingState {
    let updatedState = { ...votingState };

    for (const generated of generatedProposals) {
      // Create GlobalProposal
      const proposal = createProposal(
        generated.type,
        generated.proposerCountry,
        generated.targetCountry || '',
        generated.proposalName,
        generated.description,
        generated.duration,
        generated.subItem,
        0,
        currentDate
      );

      // Add metadata
      (proposal as any).aiGenerated = true;
      (proposal as any).aiReasoning = generated.reasoning;
      (proposal as any).aiConfidence = generated.confidence;
      (proposal as any).aiPriority = generated.priority;

      // Add ke active proposals
      updatedState = {
        ...updatedState,
        activeProposals: [...updatedState.activeProposals, proposal],
      };
    }

    return updatedState;
  }

  /**
   * Get schedule untuk negara
   */
  private _getOrCreateSchedule(countryName: string): ProposalScheduleEntry {
    if (!this.state.schedules.has(countryName)) {
      const now = new Date();
      this.state.schedules.set(countryName, {
        countryName,
        lastProposalDate: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 hari lalu
        nextProposalDate: new Date(now.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000), // Random 0-7 hari
        proposalCount: 0,
      });
    }

    return this.state.schedules.get(countryName)!;
  }

  /**
   * Hitung tanggal proposal berikutnya
   */
  private _calculateNextProposalDate(currentDate: Date, frequency: number): Date {
    // Add frequency days + random variance (±2 hari)
    const variance = (Math.random() - 0.5) * 4 * 24 * 60 * 60 * 1000; // ±2 hari
    const nextDate = new Date(
      currentDate.getTime() + frequency * 24 * 60 * 60 * 1000 + variance
    );
    return nextDate;
  }

  /**
   * Load state dari localStorage
   */
  private _loadState(): AIProposalSchedulerState {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          schedules: new Map(parsed.schedules),
          generatedProposals: parsed.generatedProposals || [],
          lastUpdateDate: new Date(parsed.lastUpdateDate),
        };
      }
    } catch (error) {
      console.warn('Failed to load AI proposal scheduler state:', error);
    }

    return {
      schedules: new Map(),
      generatedProposals: [],
      lastUpdateDate: new Date(),
    };
  }

  /**
   * Save state ke localStorage
   */
  private _saveState(): void {
    try {
      const toStore = {
        schedules: Array.from(this.state.schedules.entries()),
        generatedProposals: this.state.generatedProposals,
        lastUpdateDate: this.state.lastUpdateDate.toISOString(),
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toStore));
    } catch (error) {
      console.warn('Failed to save AI proposal scheduler state:', error);
    }
  }

  /**
   * Get current state (untuk debugging)
   */
  getState(): AIProposalSchedulerState {
    return this.state;
  }

  /**
   * Reset scheduler
   */
  reset(): void {
    this.state = {
      schedules: new Map(),
      generatedProposals: [],
      lastUpdateDate: new Date(),
    };
    this._saveState();
  }
}

export const aiProposalScheduler = new AIProposalScheduler();
