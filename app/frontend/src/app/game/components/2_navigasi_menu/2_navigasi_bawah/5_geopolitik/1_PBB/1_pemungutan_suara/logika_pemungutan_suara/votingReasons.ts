
import { getRelation, areInSameOrg } from "./votingLogic";
import { sanksiReasons } from "../2_sanksi/logic/sanksiReasons";
import { embargoReasons } from "../3_embargo/logic/embargoReasons";
import { generalReasons, AlasanVote } from "./generalReasons";

export interface VotingReasonParams {
  voter: string;
  proposer: string;
  target: string;
  type: 'supporters' | 'opponents' | 'abstainers';
  category?: string;
}

export const getVotingReason = ({ voter, proposer, target, type, category = "Umum" }: VotingReasonParams): string => {
  const relWithProposer = getRelation(voter, proposer);
  const relWithTarget = getRelation(voter, target);
  const sameOrgWithProposer = areInSameOrg(voter, proposer);
  const sameOrgWithTarget = areInSameOrg(voter, target);

  const voteType = type === 'supporters' ? 'SETUJU' : type === 'opponents' ? 'TOLAK' : 'ABSTAIN';
  
  const selectedReason = getVotingReasonObject({
    category,
    voteType,
    voterRelationWithTarget: relWithTarget,
    voterRelationWithProposer: relWithProposer,
    isSameOrgWithTarget: sameOrgWithTarget,
    isSameOrgWithProposer: sameOrgWithProposer,
    isVoterProposer: voter === proposer,
    isVoterTarget: voter === target
  });


  return `${selectedReason.alasan} | ${selectedReason.detail}`;
};

export const getVotingReasonObject = (params: {
    category: string;
    voteType: 'SETUJU' | 'TOLAK' | 'ABSTAIN';
    voterRelationWithTarget: number;
    voterRelationWithProposer: number;
    isSameOrgWithTarget: boolean;
    isSameOrgWithProposer: boolean;
    isVoterProposer?: boolean;
    isVoterTarget?: boolean;
}): AlasanVote => {
  const { category, voteType, voterRelationWithTarget, voterRelationWithProposer, isSameOrgWithTarget, isSameOrgWithProposer, isVoterProposer, isVoterTarget } = params;
  
  // --- SPECIAL CASE: PROPOSER ---
  if (isVoterProposer) {
    return { 
      alasan: "Inisiatif Kedaulatan", 
      detail: `Kami mengajukan resolusi ini sebagai langkah strategis untuk melindungi kepentingan nasional dan stabilitas global.` 
    };
  }

  // --- SPECIAL CASE: TARGET ---
  if (isVoterTarget) {
    return { 
      alasan: "Pembelaan Diri", 
      detail: `Kami menolak keras resolusi ini yang kami nilai sebagai serangan politik tidak berdasar yang melanggar kedaulatan kami.` 
    };
  }

  let pool: AlasanVote[] = [];

  const categoryLower = category.toLowerCase();

  if (categoryLower.includes("sanksi")) {
    pool = sanksiReasons[voteType];
  } else if (categoryLower.includes("embargo")) {
    pool = embargoReasons[voteType];
  } else {
    pool = generalReasons[voteType];
  }

  // Logic to pick the most appropriate reason
  if (voteType === 'SETUJU') {
    if (isSameOrgWithProposer) return pool.find(r => r.alasan.includes("Aliansi") || r.alasan.includes("Solidaritas")) || pool[0];
    if (voterRelationWithTarget < 30) return pool.find(r => r.alasan.includes("Agresi") || r.alasan.includes("Ancaman") || r.alasan.includes("Rivalitas") || r.alasan.includes("Keamanan Regional")) || pool[0];
  }

  if (voteType === 'TOLAK') {
    if (isSameOrgWithTarget) return pool.find(r => r.alasan.includes("Aliansi") || r.alasan.includes("Blok") || r.alasan.includes("Kemitraan")) || pool[0];
    if (voterRelationWithTarget > 70) return pool.find(r => r.alasan.includes("Ekonomi") || r.alasan.includes("Hubungan") || r.alasan.includes("Energi")) || pool[0];
  }

  if (voteType === 'ABSTAIN') {
    if (voterRelationWithProposer > 60 && voterRelationWithTarget > 60) return pool.find(r => r.alasan.includes("Netralitas") || r.alasan.includes("Kepentingan Ganda")) || pool[0];
  }

  // Fallback to random from pool
  return pool[Math.floor(Math.random() * pool.length)];
};

// Also export the strict version for use in simulation if needed
export const getVotingReasonStrict = (params: any) => {
    return getVotingReasonObject({
        ...params,
        isVoterProposer: params.voter === params.proposer,
        isVoterTarget: params.voter === params.target
    });
};


