/**
 * Hook untuk mengelola pengajuan proposal dan integrasi dengan AI voting
 */

import { useState, useCallback } from 'react';
import { GlobalProposal, createProposal, GlobalVotingState, initializeVotingState } from '../utils/votingSystem';
import { useAIVoting } from './useAIVoting';
import { unVotingStorage } from '../utils/unVotingStorage';

interface SubmitProposalParams {
  type: 'resolution' | 'sanction' | 'embargo';
  proposalName: string;
  description: string;
  proposerCountry: string;
  targetCountry?: string;
  duration: string;
  subItem?: string;
  currentGameDay?: number;
  gameDate?: Date;
}

export function useProposalSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedProposal, setSubmittedProposal] = useState<GlobalProposal | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { simulateVoting, isProcessing: isAIProcessing } = useAIVoting();

  /**
   * Submit proposal dan trigger AI voting
   */
  const submitProposal = useCallback(async (
    params: SubmitProposalParams,
    votingState: GlobalVotingState,
    allCountries: any[],
    gameState: any,
    enableAIVoting: boolean = true
  ): Promise<{ proposal: GlobalProposal; updatedState: GlobalVotingState } | null> => {
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Create proposal
      const newProposal = createProposal(
        params.type,
        params.proposerCountry,
        params.targetCountry || '',
        params.proposalName,
        params.description,
        params.duration,
        params.subItem,
        params.currentGameDay,
        params.gameDate || new Date()
      );

      // 2. Add to voting state
      const updatedState: GlobalVotingState = {
        ...votingState,
        activeProposals: [...votingState.activeProposals, newProposal]
      };

      // 3. Save to localStorage
      saveVotingState(updatedState);

      // 4. Trigger AI voting if enabled
      let finalProposal = newProposal;
      if (enableAIVoting && allCountries.length > 0) {
        try {
          finalProposal = await simulateVoting(
            newProposal,
            allCountries,
            params.proposerCountry,
            gameState
          );

          // Update state with AI votes
          const stateWithAIVotes: GlobalVotingState = {
            ...updatedState,
            activeProposals: updatedState.activeProposals.map(p =>
              p.id === finalProposal.id ? finalProposal : p
            )
          };

          saveVotingState(stateWithAIVotes);
          
          setSubmittedProposal(finalProposal);
          setIsSubmitting(false);

          return { proposal: finalProposal, updatedState: stateWithAIVotes };
        } catch (aiError) {
          console.warn('AI voting failed, continuing without AI votes:', aiError);
          // Continue without AI votes
        }
      }

      setSubmittedProposal(finalProposal);
      setIsSubmitting(false);

      return { proposal: finalProposal, updatedState };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit proposal';
      setError(errorMessage);
      setIsSubmitting(false);
      return null;
    }
  }, [simulateVoting]);

  /**
   * Save voting state to localStorage
   */
  const saveVotingState = (state: GlobalVotingState) => {
    unVotingStorage.save(state);
  };

  /**
   * Load voting state from localStorage
   */
  const loadVotingState = useCallback((): GlobalVotingState => {
    return unVotingStorage.load();
  }, []);

  /**
   * Clear submitted proposal
   */
  const clearSubmittedProposal = useCallback(() => {
    setSubmittedProposal(null);
  }, []);

  /**
   * Validate proposal before submission
   */
  const validateProposal = useCallback((params: SubmitProposalParams): string | null => {
    if (!params.proposalName || params.proposalName.trim() === '') {
      return 'Nama proposal tidak boleh kosong';
    }

    if (!params.description || params.description.trim() === '') {
      return 'Deskripsi tidak boleh kosong';
    }

    if (!params.proposerCountry || params.proposerCountry.trim() === '') {
      return 'Negara pengaju tidak valid';
    }

    if ((params.type === 'sanction' || params.type === 'embargo') && (!params.targetCountry || params.targetCountry.trim() === '')) {
      return 'Target negara harus dipilih untuk sanksi/embargo';
    }

    if (!params.duration || params.duration.trim() === '') {
      return 'Durasi harus dipilih';
    }

    if (params.type === 'embargo' && !params.subItem) {
      return 'Item embargo harus dipilih';
    }

    return null;
  }, []);

  return {
    submitProposal,
    isSubmitting: isSubmitting || isAIProcessing,
    submittedProposal,
    error,
    clearSubmittedProposal,
    loadVotingState,
    validateProposal
  };
}
