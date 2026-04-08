export interface VoteEstimation {
  agree: number;
  abstain: number;
  disagree: number;
}

export const estimateVotes = (selectedCountry: any): VoteEstimation => {
  if (!selectedCountry) return { agree: 0, abstain: 0, disagree: 0 };
  
  // Pseudo-random but semi-stable estimation
  const seed = selectedCountry.name_id?.length || 10;
  const total = 207;
  const agree = Math.floor((seed * 1337) % 110) + 40;
  const abstain = Math.floor((seed * 777) % 40) + 10;
  const disagree = Math.max(0, total - agree - abstain);
  
  return { agree, abstain, disagree };
};
