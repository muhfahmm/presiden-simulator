import { CountryData } from "@/app/select-country/data/types";

export const BASE_CHANCE = 40;
export const SAME_IDEOLOGY_BONUS = 30;
export const SAME_RELIGION_BONUS = 30;

export interface ProposalCalculation {
  baseChance: number;
  ideologyBonus: number;
  religionBonus: number;
  totalChance: number;
  isSameIdeology: boolean;
  isSameReligion: boolean;
  waitTimeDays: number;
}

export const calculateTradeProposal = (
  playerCountry: CountryData,
  targetCountry: CountryData
): ProposalCalculation => {
  const isSameIdeology = playerCountry.ideology === targetCountry.ideology;
  const isSameReligion = playerCountry.religion === targetCountry.religion;

  const ideologyBonus = isSameIdeology ? SAME_IDEOLOGY_BONUS : 0;
  const religionBonus = isSameReligion ? SAME_RELIGION_BONUS : 0;

  const totalChance = Math.min(100, BASE_CHANCE + ideologyBonus + religionBonus);

  // Random wait time between 5 and 7 days
  const waitTimeDays = Math.floor(Math.random() * 3) + 5; // 5, 6, or 7

  return {
    baseChance: BASE_CHANCE,
    ideologyBonus,
    religionBonus,
    totalChance,
    isSameIdeology,
    isSameReligion,
    waitTimeDays
  };
};

export const rollProposalResult = (chance: number): boolean => {
  const roll = Math.random() * 100;
  return roll <= chance;
};
