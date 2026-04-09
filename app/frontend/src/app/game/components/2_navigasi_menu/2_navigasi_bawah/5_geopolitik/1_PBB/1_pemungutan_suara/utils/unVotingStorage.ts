import { GlobalVotingState, initializeVotingState, updateProposalStatus, moveFinishedProposals, GlobalProposal } from "./votingSystem";
import { unCountries } from "./unCountries";

const STORAGE_KEY = 'un_voting_state';

export const unVotingStorage = {
  save: (state: GlobalVotingState) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Failed to save UN voting state:', err);
    }
  },

  load: (): GlobalVotingState => {
    if (typeof window === 'undefined') return initializeVotingState();
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Convert date strings back to Date objects
        return {
          ...parsed,
          activeProposals: parsed.activeProposals.map((p: any) => ({
            ...p,
            startDate: new Date(p.startDate),
            endDate: new Date(p.endDate),
            votedCountries: p.votedCountries.map((v: any) => ({
              ...v,
              timestamp: new Date(v.timestamp)
            })),
            plannedAIVotes: p.plannedAIVotes?.map((v: any) => ({
              ...v,
              timestamp: new Date(v.timestamp)
            }))
          })),
          completedProposals: parsed.completedProposals.map((p: any) => ({
            ...p,
            startDate: new Date(p.startDate),
            endDate: new Date(p.endDate),
            votedCountries: p.votedCountries.map((v: any) => ({
              ...v,
              timestamp: new Date(v.timestamp)
            })),
            plannedAIVotes: p.plannedAIVotes?.map((v: any) => ({
              ...v,
              timestamp: new Date(v.timestamp)
            }))
          })),
          implementedProposals: (parsed.implementedProposals || []).map((p: any) => ({
            ...p,
            startDate: new Date(p.startDate),
            endDate: new Date(p.endDate)
          }))
        };
      }
    } catch (err) {
      console.error('Failed to load UN voting state:', err);
    }
    return initializeVotingState();
  },

  clear: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  },

  /**
   * Heal a proposal if it's missing plannedAIVotes
   */
  healProposal: (proposal: GlobalProposal): GlobalProposal => {
    if (proposal.plannedAIVotes && proposal.plannedAIVotes.length > 0) return proposal;

    console.log(`Healing proposal ${proposal.id}: Generating 207 AI votes...`);
    
    // Generate simple votes for all 207 countries
    const plannedVotes = unCountries.map(country => {
      const name = country.name_id || country.name_en;
      
      // Simple random distribution for now
      // In a real scenario, this would use a more complex logic
      const rand = Math.random();
      let vote: 'agree' | 'disagree' | 'abstain' = 'abstain';
      
      if (rand < 0.45) vote = 'agree';
      else if (rand < 0.8) vote = 'disagree';
      
      return {
        countryName: name,
        vote,
        timestamp: new Date(proposal.startDate)
      };
    });

    return {
      ...proposal,
      plannedAIVotes: plannedVotes,
      aiVotesProcessed: 0
    };
  },

  updateDailyProgress: (currentDate: Date) => {
    const state = unVotingStorage.load();
    if (state.activeProposals.length === 0 && (state.implementedProposals || []).length === 0) return;

    const updatedProposals = state.activeProposals.map(proposal => {
      // Heal if necessary
      let updated = unVotingStorage.healProposal(proposal);
      
      // Calculate remaining days based on current game date
      const timeDiff = updated.endDate.getTime() - currentDate.getTime();
      const daysRemaining = Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
      
      updated = { ...updated, daysRemaining };
      
      // Update status (checks for expiration and processes incremental AI votes)
      // Note: we use the functional approach from votingSystem.ts
      return updateProposalStatus(updated, currentDate);
    });

    // 2. Update Implemented Proposals (Active Effects)
    // Decrement implementationDaysRemaining each game day
    const updatedImplemented = (state.implementedProposals || []).map(proposal => {
      if (proposal.implementationDaysRemaining !== undefined && proposal.implementationDaysRemaining > 0) {
        return {
          ...proposal,
          implementationDaysRemaining: proposal.implementationDaysRemaining - 1
        };
      }
      return proposal;
    });

    if (JSON.stringify(updatedProposals) !== JSON.stringify(state.activeProposals) || 
        JSON.stringify(updatedImplemented) !== JSON.stringify(state.implementedProposals)) {
      const newState = moveFinishedProposals({
        ...state,
        activeProposals: updatedProposals,
        implementedProposals: updatedImplemented
      });
      unVotingStorage.save(newState);
      
      // Trigger update for listeners (dispatch storage event for local updates)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('un_voting_updated'));
      }
    }
  }
};
