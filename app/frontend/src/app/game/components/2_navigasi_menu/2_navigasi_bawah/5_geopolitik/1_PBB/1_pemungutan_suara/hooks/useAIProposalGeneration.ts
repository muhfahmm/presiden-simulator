/**
 * Hook untuk AI Proposal Generation
 * Mengintegrasikan AI proposal generation dengan voting system
 */

import { useCallback, useEffect, useState } from 'react';
import { GlobalVotingState } from '../utils/votingSystem';
import { aiProposalScheduler } from '../services/aiProposalScheduler';
import { aiVotingService } from '../services/aiVotingService';
import { GeneratedProposal } from '../services/aiProposalGenerator';
import { CountryProfile } from '../services/aiVotingService';

interface UseAIProposalGenerationOptions {
  enabled?: boolean;
  checkInterval?: number; // Milidetik antara check (default: 60000 = 1 menit)
}

export function useAIProposalGeneration(
  votingState: GlobalVotingState,
  allCountries: any[],
  gameState: any,
  options: UseAIProposalGenerationOptions = {}
) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedProposals, setGeneratedProposals] = useState<GeneratedProposal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastCheckTime, setLastCheckTime] = useState<Date>(new Date());

  const enabled = options.enabled !== false;
  const checkInterval = options.checkInterval || 60000; // 1 menit default

  /**
   * Generate dan submit AI proposals
   */
  const generateAndSubmitProposals = useCallback(async (
    currentDate: Date,
    globalTension: number
  ): Promise<GlobalVotingState | null> => {
    if (!enabled || isProcessing) return null;

    setIsProcessing(true);
    setError(null);

    try {
      // Convert countries ke CountryProfile format
      const countryProfiles: CountryProfile[] = allCountries.map(country => ({
        name: country.name,
        continent: country.continent,
        gdp: country.gdp || 0,
        military_power: country.military_power || 0.5,
        diplomatic_standing: country.diplomatic_standing || 0,
        alliance_bloc: country.alliance_bloc,
        economic_dependency: country.economic_dependency || {},
        political_ideology: country.political_ideology || 'neutral',
        stability: country.stability || 0.7,
      }));

      // Generate proposals
      const generated = aiProposalScheduler.updateAndGenerateProposals(
        countryProfiles,
        votingState,
        currentDate,
        globalTension
      );

      setGeneratedProposals(generated);

      if (generated.length === 0) {
        setIsProcessing(false);
        return null;
      }

      // Submit proposals dan trigger AI voting
      let updatedState = aiProposalScheduler.submitGeneratedProposals(
        generated,
        votingState,
        currentDate
      );

      // Trigger AI voting untuk setiap proposal
      for (const proposal of updatedState.activeProposals.slice(-generated.length)) {
        try {
          const result = await aiVotingService.calculateBatchVotes(
            {
              type: proposal.type,
              name: proposal.proposalName,
              description: proposal.description,
              proposer_country: proposal.proposerCountry,
              target_country: proposal.targetCountry,
              duration: proposal.duration,
              sub_item: proposal.subItem,
              global_tension: globalTension,
            },
            countryProfiles,
            proposal.proposerCountry,
            0.5 // Default reputation untuk AI
          );

          // Update proposal dengan AI votes
          proposal.plannedAIVotes = Object.entries(result.votes).map(([countryName, voteData]) => ({
            countryName,
            vote: voteData.vote,
            timestamp: currentDate,
          }));

          proposal.votes = {
            agree: result.summary.agree || 0,
            abstain: result.summary.abstain || 0,
            disagree: result.summary.disagree || 0,
          };
        } catch (votingError) {
          console.warn(`Failed to calculate votes for proposal ${proposal.id}:`, votingError);
        }
      }

      setIsProcessing(false);
      return updatedState;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMsg);
      setIsProcessing(false);
      return null;
    }
  }, [enabled, isProcessing, allCountries, votingState]);

  /**
   * Check dan generate proposals secara berkala
   */
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(async () => {
      const now = new Date();
      const timeSinceLastCheck = now.getTime() - lastCheckTime.getTime();

      // Hanya check jika sudah cukup waktu berlalu
      if (timeSinceLastCheck >= checkInterval) {
        const globalTension = gameState?.globalTension || 0.5;
        await generateAndSubmitProposals(now, globalTension);
        setLastCheckTime(now);
      }
    }, checkInterval);

    return () => clearInterval(interval);
  }, [enabled, checkInterval, lastCheckTime, gameState, generateAndSubmitProposals]);

  return {
    isProcessing,
    generatedProposals,
    error,
    generateAndSubmitProposals,
  };
}
