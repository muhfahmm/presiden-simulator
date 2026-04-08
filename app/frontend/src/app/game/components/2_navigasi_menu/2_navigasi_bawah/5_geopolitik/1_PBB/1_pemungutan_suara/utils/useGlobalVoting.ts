import { useState, useCallback, useEffect } from 'react';
import {
  GlobalVotingState,
  GlobalProposal,
  ProposalType,
  createProposal,
  addVote,
  updateAllProposals,
  getActiveProposals,
  getCompletedProposals,
  getProposalById,
  getProposalsForCountry,
  getProposalsByProposer,
  initializeVotingState,
} from './votingSystem';

export function useGlobalVoting(initialGameDay: number = 0) {
  const [votingState, setVotingState] = useState<GlobalVotingState>(
    initializeVotingState()
  );

  /**
   * Submit proposal baru
   */
  const submitProposal = useCallback(
    (
      type: ProposalType,
      proposerCountry: string,
      targetCountry: string,
      proposalName: string,
      description: string,
      duration: string,
      subItem?: string
    ) => {
      const newProposal = createProposal(
        type,
        proposerCountry,
        targetCountry,
        proposalName,
        description,
        duration,
        subItem,
        votingState.currentGameDay
      );

      setVotingState(prev => ({
        ...prev,
        activeProposals: [...prev.activeProposals, newProposal],
      }));

      return newProposal;
    },
    [votingState.currentGameDay]
  );

  /**
   * Vote untuk proposal
   */
  const vote = useCallback(
    (proposalId: string, countryName: string, voteType: 'agree' | 'abstain' | 'disagree') => {
      setVotingState(prev => {
        const proposal = getProposalById(prev, proposalId);
        if (!proposal) return prev;

        const updatedProposal = addVote(proposal, countryName, voteType);

        return {
          ...prev,
          activeProposals: prev.activeProposals.map(p =>
            p.id === proposalId ? updatedProposal : p
          ),
        };
      });
    },
    []
  );

  /**
   * Update game day (dipanggil setiap hari game)
   */
  const updateGameDay = useCallback((newGameDay: number) => {
    setVotingState(prev => updateAllProposals(prev, newGameDay));
  }, []);

  /**
   * Dapatkan proposal yang sedang aktif
   */
  const getActive = useCallback(() => {
    return getActiveProposals(votingState);
  }, [votingState]);

  /**
   * Dapatkan proposal yang sudah selesai
   */
  const getCompleted = useCallback(() => {
    return getCompletedProposals(votingState);
  }, [votingState]);

  /**
   * Dapatkan proposal berdasarkan ID
   */
  const getById = useCallback(
    (proposalId: string) => {
      return getProposalById(votingState, proposalId);
    },
    [votingState]
  );

  /**
   * Dapatkan proposal untuk negara tertentu
   */
  const getForCountry = useCallback(
    (countryName: string) => {
      return getProposalsForCountry(votingState, countryName);
    },
    [votingState]
  );

  /**
   * Dapatkan proposal yang diajukan oleh negara tertentu
   */
  const getByProposer = useCallback(
    (countryName: string) => {
      return getProposalsByProposer(votingState, countryName);
    },
    [votingState]
  );

  /**
   * Dapatkan statistik voting
   */
  const getVotingStats = useCallback(() => {
    const active = getActiveProposals(votingState);
    const completed = getCompletedProposals(votingState);
    const approved = completed.filter(p => p.result === 'approved').length;
    const rejected = completed.filter(p => p.result === 'rejected').length;

    return {
      totalActive: active.length,
      totalCompleted: completed.length,
      totalApproved: approved,
      totalRejected: rejected,
      approvalRate: completed.length > 0 ? (approved / completed.length) * 100 : 0,
    };
  }, [votingState]);

  return {
    votingState,
    submitProposal,
    vote,
    updateGameDay,
    getActive,
    getCompleted,
    getById,
    getForCountry,
    getByProposer,
    getVotingStats,
  };
}
