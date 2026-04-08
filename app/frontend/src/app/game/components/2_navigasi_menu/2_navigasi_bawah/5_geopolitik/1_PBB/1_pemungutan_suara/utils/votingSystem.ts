/**
 * Global Voting System untuk Resolusi, Sanksi, dan Embargo
 * Setiap proposal harus berjalan selama 30 hari sebelum disetujui atau ditolak
 */

export type ProposalType = 'resolution' | 'sanction' | 'embargo';
export type ProposalStatus = 'pending' | 'voting' | 'approved' | 'rejected' | 'expired';

export interface VoteCount {
  agree: number;
  abstain: number;
  disagree: number;
}

export interface ProposalVote {
  countryName: string;
  vote: 'agree' | 'abstain' | 'disagree';
  timestamp: Date;
}

export interface GlobalProposal {
  id: string;
  type: ProposalType;
  proposerCountry: string;
  targetCountry: string;
  proposalName: string;
  description: string;
  duration: string;
  subItem?: string; // Untuk embargo teknologi/sumber daya
  
  // Voting info
  status: ProposalStatus;
  startDate: Date;
  endDate: Date;
  daysRemaining: number;
  
  // Vote counts
  votes: VoteCount;
  votedCountries: ProposalVote[];
  
  // Result
  approvalPercentage: number;
  rejectionPercentage: number;
  abstainPercentage: number;
  result?: 'approved' | 'rejected' | 'pending';
}

export interface GlobalVotingState {
  activeProposals: GlobalProposal[];
  completedProposals: GlobalProposal[];
  currentGameDay: number;
}

/**
 * Buat proposal baru
 */
export function createProposal(
  type: ProposalType,
  proposerCountry: string,
  targetCountry: string,
  proposalName: string,
  description: string,
  duration: string,
  subItem?: string,
  currentGameDay: number = 0
): GlobalProposal {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 hari

  return {
    id: generateProposalId(),
    type,
    proposerCountry,
    targetCountry,
    proposalName,
    description,
    duration,
    subItem,
    status: 'voting',
    startDate,
    endDate,
    daysRemaining: 30,
    votes: {
      agree: 0,
      abstain: 0,
      disagree: 0,
    },
    votedCountries: [],
    approvalPercentage: 0,
    rejectionPercentage: 0,
    abstainPercentage: 0,
    result: 'pending',
  };
}

/**
 * Tambahkan vote dari negara
 */
export function addVote(
  proposal: GlobalProposal,
  countryName: string,
  vote: 'agree' | 'abstain' | 'disagree'
): GlobalProposal {
  // Cek apakah negara sudah voting
  const alreadyVoted = proposal.votedCountries.some(v => v.countryName === countryName);
  if (alreadyVoted) {
    return proposal;
  }

  const updatedProposal = { ...proposal };

  // Tambahkan vote
  updatedProposal.votes[vote]++;
  updatedProposal.votedCountries.push({
    countryName,
    vote,
    timestamp: new Date(),
  });

  // Update persentase
  updateVotePercentages(updatedProposal);

  return updatedProposal;
}

/**
 * Update persentase vote
 */
function updateVotePercentages(proposal: GlobalProposal): void {
  const total = proposal.votes.agree + proposal.votes.abstain + proposal.votes.disagree;
  
  if (total === 0) {
    proposal.approvalPercentage = 0;
    proposal.rejectionPercentage = 0;
    proposal.abstainPercentage = 0;
    return;
  }

  proposal.approvalPercentage = (proposal.votes.agree / total) * 100;
  proposal.rejectionPercentage = (proposal.votes.disagree / total) * 100;
  proposal.abstainPercentage = (proposal.votes.abstain / total) * 100;
}

/**
 * Update status proposal berdasarkan waktu
 */
export function updateProposalStatus(
  proposal: GlobalProposal,
  currentDate: Date = new Date()
): GlobalProposal {
  const updatedProposal = { ...proposal };
  
  // Hitung hari yang tersisa
  const timeDiff = updatedProposal.endDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
  updatedProposal.daysRemaining = Math.max(0, daysRemaining);

  // Jika waktu habis, tentukan hasil
  if (daysRemaining <= 0) {
    updatedProposal.status = 'expired';
    determineProposalResult(updatedProposal);
  }

  return updatedProposal;
}

/**
 * Tentukan hasil proposal
 */
function determineProposalResult(proposal: GlobalProposal): void {
  const total = proposal.votes.agree + proposal.votes.abstain + proposal.votes.disagree;
  
  if (total === 0) {
    proposal.result = 'rejected';
    proposal.status = 'rejected';
    return;
  }

  // Proposal disetujui jika lebih dari 50% setuju
  const approvalRate = proposal.votes.agree / total;
  
  if (approvalRate > 0.5) {
    proposal.result = 'approved';
    proposal.status = 'approved';
  } else {
    proposal.result = 'rejected';
    proposal.status = 'rejected';
  }
}

/**
 * Cek apakah proposal sudah selesai voting
 */
export function isProposalFinished(proposal: GlobalProposal): boolean {
  return proposal.status === 'approved' || proposal.status === 'rejected' || proposal.status === 'expired';
}

/**
 * Dapatkan proposal yang sedang aktif
 */
export function getActiveProposals(state: GlobalVotingState): GlobalProposal[] {
  return state.activeProposals.filter(p => !isProposalFinished(p));
}

/**
 * Dapatkan proposal yang sudah selesai
 */
export function getCompletedProposals(state: GlobalVotingState): GlobalProposal[] {
  return state.completedProposals;
}

/**
 * Pindahkan proposal yang selesai ke completed
 */
export function moveFinishedProposals(state: GlobalVotingState): GlobalVotingState {
  const updatedState = { ...state };
  
  const finished = updatedState.activeProposals.filter(p => isProposalFinished(p));
  const active = updatedState.activeProposals.filter(p => !isProposalFinished(p));
  
  updatedState.activeProposals = active;
  updatedState.completedProposals = [...updatedState.completedProposals, ...finished];
  
  return updatedState;
}

/**
 * Update semua proposal berdasarkan game day
 */
export function updateAllProposals(
  state: GlobalVotingState,
  currentGameDay: number
): GlobalVotingState {
  const updatedState = { ...state };
  updatedState.currentGameDay = currentGameDay;
  
  // Update status setiap proposal
  updatedState.activeProposals = updatedState.activeProposals.map(p => 
    updateProposalStatus(p)
  );
  
  // Pindahkan proposal yang selesai
  return moveFinishedProposals(updatedState);
}

/**
 * Dapatkan proposal berdasarkan ID
 */
export function getProposalById(state: GlobalVotingState, proposalId: string): GlobalProposal | undefined {
  return [
    ...state.activeProposals,
    ...state.completedProposals,
  ].find(p => p.id === proposalId);
}

/**
 * Dapatkan proposal untuk negara tertentu
 */
export function getProposalsForCountry(
  state: GlobalVotingState,
  countryName: string
): GlobalProposal[] {
  return [
    ...state.activeProposals,
    ...state.completedProposals,
  ].filter(p => p.targetCountry === countryName);
}

/**
 * Dapatkan proposal yang diajukan oleh negara tertentu
 */
export function getProposalsByProposer(
  state: GlobalVotingState,
  countryName: string
): GlobalProposal[] {
  return [
    ...state.activeProposals,
    ...state.completedProposals,
  ].filter(p => p.proposerCountry === countryName);
}

/**
 * Generate unique proposal ID
 */
function generateProposalId(): string {
  return `proposal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format proposal untuk display
 */
export function formatProposalForDisplay(proposal: GlobalProposal): {
  title: string;
  status: string;
  daysRemaining: string;
  votes: string;
  result: string;
} {
  const statusMap: Record<ProposalStatus, string> = {
    pending: 'Menunggu',
    voting: 'Voting',
    approved: 'Disetujui',
    rejected: 'Ditolak',
    expired: 'Berakhir',
  };

  const total = proposal.votes.agree + proposal.votes.abstain + proposal.votes.disagree;
  const votesText = total === 0 
    ? 'Belum ada vote'
    : `${proposal.votes.agree} Setuju, ${proposal.votes.abstain} Abstain, ${proposal.votes.disagree} Tolak`;

  return {
    title: `${proposal.proposalName} (${proposal.type})`,
    status: statusMap[proposal.status],
    daysRemaining: `${proposal.daysRemaining} hari tersisa`,
    votes: votesText,
    result: proposal.result === 'pending' ? 'Menunggu hasil' : proposal.result === 'approved' ? 'Disetujui' : 'Ditolak',
  };
}

/**
 * Initialize voting state
 */
export function initializeVotingState(): GlobalVotingState {
  return {
    activeProposals: [],
    completedProposals: [],
    currentGameDay: 0,
  };
}
