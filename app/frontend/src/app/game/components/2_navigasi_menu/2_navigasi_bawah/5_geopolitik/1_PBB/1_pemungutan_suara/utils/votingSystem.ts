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
  implementationDaysRemaining?: number; // Days left for the active effect
  
  // Vote counts
  votes: VoteCount;
  votedCountries: ProposalVote[];
  
  // Result
  approvalPercentage: number;
  rejectionPercentage: number;
  abstainPercentage: number;
  result?: 'approved' | 'rejected' | 'pending';

  // Incremental AI Voting
  plannedAIVotes?: ProposalVote[];
  aiVotesProcessed?: number;
}

export interface GlobalVotingState {
  activeProposals: GlobalProposal[];
  implementedProposals: GlobalProposal[];
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
  currentGameDay: number = 0,
  startDate: Date = new Date()
): GlobalProposal {
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
  // UN Rule: Abstentions are NOT counted in the total of those 'present and voting'
  const totalVoting = proposal.votes.agree + proposal.votes.disagree;
  const totalGlobal = proposal.votes.agree + proposal.votes.disagree + proposal.votes.abstain;
  
  if (totalVoting === 0) {
    proposal.approvalPercentage = 0;
    proposal.rejectionPercentage = 0;
    // Abstain percentage is still relative to total countries present
    proposal.abstainPercentage = totalGlobal > 0 ? (proposal.votes.abstain / totalGlobal) * 100 : 0;
    return;
  }

  proposal.approvalPercentage = (proposal.votes.agree / totalVoting) * 100;
  proposal.rejectionPercentage = (proposal.votes.disagree / totalVoting) * 100;
  proposal.abstainPercentage = (proposal.votes.abstain / totalGlobal) * 100;
}

/**
 * Update status proposal berdasarkan waktu
 */
export function updateProposalStatus(
  proposal: GlobalProposal,
  currentDate: Date
): GlobalProposal {
  const updatedProposal = { ...proposal };
  
  // Hitung hari yang tersisa
  const timeDiff = updatedProposal.endDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.max(0, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
  
  updatedProposal.daysRemaining = daysRemaining;

  // Jika waktu habis, tentukan hasil
  if (daysRemaining <= 0) {
    updatedProposal.status = 'expired';
    determineProposalResult(updatedProposal);
  } else {
    // Process incremental AI votes if they exist
    processDailyAIVotes(updatedProposal, currentDate);
  }

  return updatedProposal;
}

/**
 * Process AI votes incrementally based on elapsed time
 */
export function processDailyAIVotes(
  proposal: GlobalProposal,
  currentDate: Date = new Date()
): void {
  if (!proposal.plannedAIVotes || proposal.plannedAIVotes.length === 0) {
    return;
  }

  // Initialize processed count if not exists
  if (proposal.aiVotesProcessed === undefined) {
    proposal.aiVotesProcessed = 0;
  }

  // Calculate elapsed days
  const totalDurationMs = proposal.endDate.getTime() - proposal.startDate.getTime();
  const elapsedMs = currentDate.getTime() - proposal.startDate.getTime();
  const totalDays = Math.ceil(totalDurationMs / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.max(0, Math.ceil(elapsedMs / (1000 * 60 * 60 * 24)));

  // Calculate target number of votes to reveal
  // We want to reveal them gradually over the duration
  // Use a slight random factor or just linear for now
  const totalPlanned = proposal.plannedAIVotes.length;
  const targetToProcess = Math.min(
    totalPlanned,
    Math.ceil((elapsedDays / totalDays) * totalPlanned)
  );

  const needed = targetToProcess - proposal.aiVotesProcessed;

  if (needed > 0) {
    // Take the next 'needed' votes from plannedAIVotes
    const nextVotes = proposal.plannedAIVotes.slice(
      proposal.aiVotesProcessed,
      proposal.aiVotesProcessed + needed
    );

    // Apply each vote
    nextVotes.forEach(v => {
      // Avoid duplicate votes if already voted (safety check)
      const alreadyVoted = proposal.votedCountries.some(vc => vc.countryName === v.countryName);
      if (!alreadyVoted) {
        proposal.votes[v.vote]++;
        proposal.votedCountries.push({
          ...v,
          timestamp: currentDate // Update timestamp to when it was actually revealed
        });
      }
    });

    proposal.aiVotesProcessed += needed;
    
    // Recalculate percentages
    const total = proposal.votes.agree + proposal.votes.abstain + proposal.votes.disagree;
    if (total > 0) {
      proposal.approvalPercentage = (proposal.votes.agree / total) * 100;
      proposal.rejectionPercentage = (proposal.votes.disagree / total) * 100;
      proposal.abstainPercentage = (proposal.votes.abstain / total) * 100;
    }
  }
}

/**
 * Tentukan hasil proposal
 */
function determineProposalResult(proposal: GlobalProposal): void {
  const totalVoting = proposal.votes.agree + proposal.votes.disagree;
  
  if (totalVoting === 0) {
    proposal.result = 'rejected';
    proposal.status = 'rejected';
    return;
  }

  // Proposal disetujui jika lebih dari 50% setuju (dari yang voting)
  const approvalRate = proposal.votes.agree / totalVoting;
  
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
 * Converts a duration string to days
 */
export function getDurationInDays(duration: string): number {
  switch (duration) {
    case '1 Bulan': return 30;
    case '3 Bulan': return 90;
    case '6 Bulan': return 180;
    case '9 Bulan': return 270;
    case '1 Tahun': return 365;
    default: return 30;
  }
}

/**
 * Pindahkan proposal yang selesai ke completed
 */
export function moveFinishedProposals(state: GlobalVotingState): GlobalVotingState {
  const updatedState = { ...state };
  
  const newlyFinished = updatedState.activeProposals.filter(p => isProposalFinished(p));
  const stillActive = updatedState.activeProposals.filter(p => !isProposalFinished(p));
  
  // Proposals that were approved move to implemented list
  const approved = newlyFinished.filter(p => p.status === 'approved').map(p => ({
    ...p,
    implementationDaysRemaining: getDurationInDays(p.duration)
  }));
  // Others (rejected/expired) move to historical list
  const historical = newlyFinished.filter(p => p.status !== 'approved');

  updatedState.activeProposals = stillActive;
  updatedState.implementedProposals = [...(updatedState.implementedProposals || []), ...approved];
  updatedState.completedProposals = [...updatedState.completedProposals, ...historical];
  
  return moveExpiredImplementedProposals(updatedState);
}

/**
 * Pindahkan resolusi yang masa berlakunya habis ke history
 */
export function moveExpiredImplementedProposals(state: GlobalVotingState): GlobalVotingState {
  const updatedState = { ...state };
  if (!updatedState.implementedProposals) return updatedState;

  const expired = updatedState.implementedProposals.filter(p => 
    p.implementationDaysRemaining !== undefined && p.implementationDaysRemaining <= 0
  );
  
  const stillActive = updatedState.implementedProposals.filter(p => 
    p.implementationDaysRemaining === undefined || p.implementationDaysRemaining > 0
  );

  updatedState.implementedProposals = stillActive;
  updatedState.completedProposals = [...updatedState.completedProposals, ...expired];

  return updatedState;
}
/**
 * Update semua proposal berdasarkan game day
 */
export function updateAllProposals(
  state: GlobalVotingState,
  currentGameDay: number,
  currentDate: Date
): GlobalVotingState {
  const updatedState = { ...state };
  updatedState.currentGameDay = currentGameDay;
  
  // Update status setiap proposal voting
  updatedState.activeProposals = updatedState.activeProposals.map(p => 
    updateProposalStatus(p, currentDate)
  );

  // Update countdown untuk resolusi yang diimplementasikan (Aktif)
  if (updatedState.implementedProposals) {
    updatedState.implementedProposals = updatedState.implementedProposals.map(p => ({
      ...p,
      implementationDaysRemaining: p.implementationDaysRemaining !== undefined 
        ? Math.max(0, p.implementationDaysRemaining - 1) 
        : p.implementationDaysRemaining
    }));
  }
  
  // Pindahkan proposal yang selesai (voting -> implemented ATAU implemented -> history)
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
    implementedProposals: [],
    completedProposals: [],
    currentGameDay: 0,
  };
}
