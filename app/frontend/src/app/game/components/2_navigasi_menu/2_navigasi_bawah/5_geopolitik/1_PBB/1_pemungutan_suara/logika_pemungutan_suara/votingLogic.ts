
import { countries } from "@/app/database/data/negara/benua/index";
import { embassyStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { unVotingStorage } from "./unVotingStorage";

export interface VoteResult {
  yes: number;
  no: number;
  abstain: number;
  weightedYes: number;
  weightedNo: number;
  weightedAbstain: number;
  details: {
    supporters: string[];
    opponents: string[];
    abstainers: string[];
  };
}

/**
 * Logika untuk mensimulasikan pemungutan suara PBB
 */
export const simulateUNVote = (
  targetCountry: string | undefined, 
  userCountry: string,
  category: string
): VoteResult => {
  const allCountries = (countries || []).filter(c => c.name_id !== userCountry);
  const votingData = unVotingStorage.getData();
  
  // Ambil history secara aman, pastikan selalu array
  const history = Array.isArray(votingData?.votingHistory) ? votingData.votingHistory : [];
  
  // Dapatkan daftar negara yang saat ini sedang disanksi/diembargo (Hanya yang DITERIMA)
  const sanctionedCountries = history
    .filter(res => {
      if (!res || !res.category) return false;
      return (res.category.includes("Sanksi") || res.category.includes("Embargo")) && res.status === 'DITERIMA';
    })
    .map(res => {
      const match = res.name?.match(/\(([^)]+)\)/);
      return match ? match[1] : "";
    })
    .filter(name => name !== "");

  const supporters: string[] = [];
  const opponents: string[] = [];
  const abstainers: string[] = [];
  
  let weightedYes = 0;
  let weightedNo = 0;
  let weightedAbstain = 0;

  allCountries.forEach(country => {
    const countryName = country.name_id;
    const voteWeight = country.geopolitik?.un_vote || 1;

    // 1. Negara Target otomatis menolak
    if (targetCountry && countryName === targetCountry) {
      opponents.push(countryName);
      weightedNo += voteWeight;
      return;
    }

    // 2. Tentukan Abstain (5-10%)
    const randAbstain = Math.random();
    if (randAbstain < 0.07) { // 7% chance abstain
      abstainers.push(countryName);
      weightedAbstain += voteWeight;
      return;
    }

    // 3. Logika Hubungan Diplomatik (Kedubes)
    const embassyStatus = embassyStorage.getEmbassyStatus(countryName);
    if (embassyStatus === 'completed') {
      supporters.push(countryName);
      weightedYes += voteWeight;
    } else {
      opponents.push(countryName);
      weightedNo += voteWeight;
    }
  });

  return {
    yes: supporters.length,
    no: opponents.length,
    abstain: abstainers.length,
    weightedYes,
    weightedNo,
    weightedAbstain,
    details: {
      supporters,
      opponents,
      abstainers
    }
  };
};
