/**
 * AI Voting Service Client
 * Berkomunikasi dengan Python AI microservice untuk simulasi voting PBB
 */

import { aiServiceConfig } from './config';

export interface CountryProfile {
  name: string;
  continent: string;
  gdp: number;
  military_power: number;
  diplomatic_standing: number;
  alliance_bloc?: string;
  economic_dependency: Record<string, number>;
  political_ideology: 'western' | 'eastern' | 'neutral' | 'non_aligned';
  stability: number;
}

export interface Resolution {
  type: 'resolution' | 'sanction' | 'embargo';
  name: string;
  description: string;
  proposer_country: string;
  target_country?: string;
  duration: string;
  sub_item?: string;
  global_tension: number;
}

export interface VotingResponse {
  vote: 'agree' | 'abstain' | 'disagree';
  reasoning: string;
  confidence: number;
  tension_impact: number;
}

export interface BatchVotingResponse {
  votes: Record<string, VotingResponse>;
  summary: {
    agree: number;
    abstain: number;
    disagree: number;
  };
}

class AIVotingService {
  private baseURL: string;
  private isServiceAvailable: boolean = false;

  constructor() {
    // Use config for base URL
    this.baseURL = aiServiceConfig.baseURL;
    this.checkServiceHealth();
  }

  /**
   * Cek apakah AI service sedang running
   */
  private async checkServiceHealth(): Promise<void> {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), aiServiceConfig.timeout);

      const response = await fetch(`${this.baseURL}${aiServiceConfig.endpoints.health}`, {
        method: 'GET',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      this.isServiceAvailable = response.ok;
    } catch (error) {
      this.isServiceAvailable = false;
      console.warn('AI Voting Service tidak tersedia. Menggunakan fallback logic.');
    }
  }

  /**
   * Hitung vote untuk satu negara
   */
  async calculateSingleVote(
    resolution: Resolution,
    votingCountry: CountryProfile,
    allCountries: CountryProfile[],
    playerReputation: number
  ): Promise<VotingResponse> {
    // Jika service tidak tersedia, gunakan fallback
    if (!this.isServiceAvailable) {
      return this.fallbackVote(resolution, votingCountry, playerReputation);
    }

    try {
      const response = await fetch(`${this.baseURL}${aiServiceConfig.endpoints.singleVote}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resolution,
          voting_country: votingCountry,
          all_countries: allCountries,
          player_reputation: playerReputation,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error calling AI service:', error);
      return this.fallbackVote(resolution, votingCountry, playerReputation);
    }
  }

  /**
   * Hitung vote untuk banyak negara sekaligus (lebih efisien)
   */
  async calculateBatchVotes(
    resolution: Resolution,
    votingCountries: CountryProfile[],
    playerCountry: string,
    playerReputation: number
  ): Promise<BatchVotingResponse> {
    // Jika service tidak tersedia, gunakan fallback
    if (!this.isServiceAvailable) {
      return this.fallbackBatchVote(resolution, votingCountries, playerReputation);
    }

    try {
      const response = await fetch(`${this.baseURL}${aiServiceConfig.endpoints.batchVote}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resolution,
          voting_countries: votingCountries,
          player_country: playerCountry,
          player_reputation: playerReputation,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error calling AI service:', error);
      return this.fallbackBatchVote(resolution, votingCountries, playerReputation);
    }
  }

  /**
   * Fallback logic jika AI service tidak tersedia
   * Menggunakan simplified utility function
   */
  private fallbackVote(
    resolution: Resolution,
    country: CountryProfile,
    playerReputation: number
  ): VotingResponse {
    // Simplified decision logic
    const diplomaticScore = (country.diplomatic_standing / 100) * playerReputation;
    const economicScore = resolution.target_country 
      ? -(country.economic_dependency[resolution.target_country] || 0)
      : 0;
    
    const ideologyBonus = this.getIdeologyBonus(country.political_ideology, resolution);
    const stabilityPenalty = country.stability < 0.4 ? -0.3 : 0;
    
    const decisionScore = 
      0.4 * diplomaticScore +
      0.3 * economicScore +
      0.2 * ideologyBonus +
      0.1 * stabilityPenalty;

    let vote: 'agree' | 'abstain' | 'disagree';
    let reasoning: string;

    if (decisionScore > 0.3) {
      vote = 'agree';
      reasoning = `${country.name} mendukung resolusi ini.`;
    } else if (decisionScore < -0.3) {
      vote = 'disagree';
      reasoning = `${country.name} menolak resolusi ini.`;
    } else {
      vote = 'abstain';
      reasoning = `${country.name} memilih abstain.`;
    }

    return {
      vote,
      reasoning,
      confidence: Math.min(Math.abs(decisionScore), 1.0),
      tension_impact: resolution.type === 'resolution' ? -0.05 : 0.1,
    };
  }

  /**
   * Fallback batch voting
   */
  private fallbackBatchVote(
    resolution: Resolution,
    countries: CountryProfile[],
    playerReputation: number
  ): BatchVotingResponse {
    const votes: Record<string, VotingResponse> = {};
    const summary = { agree: 0, abstain: 0, disagree: 0 };

    for (const country of countries) {
      const result = this.fallbackVote(resolution, country, playerReputation);
      votes[country.name] = result;
      summary[result.vote]++;
    }

    return { votes, summary };
  }

  /**
   * Helper: Get ideology bonus
   */
  private getIdeologyBonus(ideology: string, resolution: Resolution): number {
    if (resolution.type === 'resolution' && resolution.name.includes('Larangan Perang')) {
      return ideology === 'neutral' || ideology === 'non_aligned' ? 0.5 : 0.2;
    }
    return 0;
  }

  /**
   * Check if service is available
   */
  isAvailable(): boolean {
    return this.isServiceAvailable;
  }

  /**
   * Manually refresh service health status
   */
  async refreshServiceStatus(): Promise<boolean> {
    await this.checkServiceHealth();
    return this.isServiceAvailable;
  }
}

// Export singleton instance
export const aiVotingService = new AIVotingService();
