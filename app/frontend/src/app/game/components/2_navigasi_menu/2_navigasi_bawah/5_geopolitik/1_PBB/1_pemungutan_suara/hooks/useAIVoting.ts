/**
 * Custom Hook untuk AI Voting Integration
 */

import { useState, useCallback } from 'react';
import { aiVotingService, Resolution, CountryProfile, VotingResponse } from '../services/aiVotingService';
import { mapCountryToProfile, calculatePlayerReputation, calculateGlobalTension } from '../services/countryProfileMapper';
import { GlobalProposal, addVote } from '../utils/votingSystem';

export interface AIVotingResult {
  countryName: string;
  vote: 'agree' | 'abstain' | 'disagree';
  reasoning: string;
  confidence: number;
}

export function useAIVoting() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<AIVotingResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * Simulasi voting untuk semua negara menggunakan AI
   */
  const simulateVoting = useCallback(async (
    proposal: GlobalProposal,
    allCountries: any[],
    playerCountry: string,
    gameState: any
  ): Promise<GlobalProposal> => {
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setResults([]);

    try {
      // 1. Konversi proposal ke format Resolution
      const resolution: Resolution = {
        type: proposal.type,
        name: proposal.proposalName,
        description: proposal.description,
        proposer_country: proposal.proposerCountry,
        target_country: proposal.targetCountry,
        duration: proposal.duration,
        sub_item: proposal.subItem,
        global_tension: calculateGlobalTension(gameState),
      };

      // 2. Konversi countries ke CountryProfile
      const countryProfiles: CountryProfile[] = allCountries.map(country => 
        mapCountryToProfile(
          country,
          gameState.diplomaticRelations?.[country.name],
          gameState.tradeData?.[country.name]
        )
      );

      // 3. Hitung player reputation
      const playerReputation = calculatePlayerReputation(gameState.playerData || {});

      // 4. Call AI service untuk batch voting
      setProgress(20);
      const batchResult = await aiVotingService.calculateBatchVotes(
        resolution,
        countryProfiles,
        playerCountry,
        playerReputation
      );

      setProgress(60);

      // 5. Create vote list
      const votingResults: AIVotingResult[] = [];
      const plannedVotes: any[] = [];

      Object.entries(batchResult.votes).forEach(([countryName, voteData]) => {
        votingResults.push({
          countryName,
          vote: voteData.vote,
          reasoning: voteData.reasoning,
          confidence: voteData.confidence,
        });
        
        plannedVotes.push({
          countryName,
          vote: voteData.vote,
          timestamp: new Date()
        });
      });

      setProgress(100);
      setResults(votingResults);
      setIsProcessing(false);

      // Return the planned votes so the caller can store them in plannedAIVotes
      return { ...proposal, plannedAIVotes: plannedVotes, aiVotesProcessed: 0 };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      setIsProcessing(false);
      throw err;
    }
  }, []);

  /**
   * Simulasi voting untuk satu negara saja
   */
  const simulateSingleCountryVote = useCallback(async (
    proposal: GlobalProposal,
    country: any,
    allCountries: any[],
    gameState: any
  ): Promise<VotingResponse> => {
    try {
      const resolution: Resolution = {
        type: proposal.type,
        name: proposal.proposalName,
        description: proposal.description,
        proposer_country: proposal.proposerCountry,
        target_country: proposal.targetCountry,
        duration: proposal.duration,
        sub_item: proposal.subItem,
        global_tension: calculateGlobalTension(gameState),
      };

      const countryProfile = mapCountryToProfile(
        country,
        gameState.diplomaticRelations?.[country.name],
        gameState.tradeData?.[country.name]
      );

      const allProfiles = allCountries.map(c => 
        mapCountryToProfile(
          c,
          gameState.diplomaticRelations?.[c.name],
          gameState.tradeData?.[c.name]
        )
      );

      const playerReputation = calculatePlayerReputation(gameState.playerData || {});

      return await aiVotingService.calculateSingleVote(
        resolution,
        countryProfile,
        allProfiles,
        playerReputation
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    }
  }, []);

  /**
   * Reset state
   */
  const reset = useCallback(() => {
    setIsProcessing(false);
    setProgress(0);
    setResults([]);
    setError(null);
  }, []);

  /**
   * Check if AI service is available
   */
  const checkServiceStatus = useCallback(async () => {
    return await aiVotingService.refreshServiceStatus();
  }, []);

  return {
    simulateVoting,
    simulateSingleCountryVote,
    isProcessing,
    progress,
    results,
    error,
    reset,
    checkServiceStatus,
    isServiceAvailable: aiVotingService.isAvailable(),
  };
}
