export { estimateVotes } from './voteEstimation';
export type { VoteEstimation } from './voteEstimation';
export { durations, techItems, resourceItems } from './configData';
export { Gavel } from './icons';

// Global Voting System
export {
  createProposal,
  addVote,
  updateProposalStatus,
  isProposalFinished,
  getActiveProposals,
  getCompletedProposals,
  moveFinishedProposals,
  updateAllProposals,
  getProposalById,
  getProposalsForCountry,
  getProposalsByProposer,
  formatProposalForDisplay,
  initializeVotingState,
} from './votingSystem';
export type {
  ProposalType,
  ProposalStatus,
  VoteCount,
  ProposalVote,
  GlobalProposal,
  GlobalVotingState,
} from './votingSystem';

export { useGlobalVoting } from './useGlobalVoting';
