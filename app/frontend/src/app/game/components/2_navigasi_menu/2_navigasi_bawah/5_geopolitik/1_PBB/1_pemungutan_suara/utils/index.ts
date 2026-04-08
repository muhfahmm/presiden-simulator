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

// Trade Partner Color System
export {
  getTradePartnerColor,
  isCountryEmbargoed,
  isCountrySanctioned,
  getAllTradePartnersWithColors,
  getTradePartnerColorClass,
  getTradePartnerStatusBadge,
  getTradePartnerStatusDescription,
  canTrade,
  getTradePenalty,
  updateMapCountryColor,
} from './tradePartnerColorSystem';
export type {
  TradePartnerColorStatus,
  TradePartnerColorInfo,
} from './tradePartnerColorSystem';

// Proposal Permissions System
export {
  checkProposalPermission,
  isPrivilegedCountry,
  getPrivilegedCountries,
  addPrivilegedCountry,
  removePrivilegedCountry,
  canProposeType,
  getProposalErrorMessage,
  validateProposal,
} from './proposalPermissions';
export type { ProposalPermissions } from './proposalPermissions';

export { useProposalPermissions } from './useProposalPermissions';
export type { UseProposalPermissionsReturn } from './useProposalPermissions';
