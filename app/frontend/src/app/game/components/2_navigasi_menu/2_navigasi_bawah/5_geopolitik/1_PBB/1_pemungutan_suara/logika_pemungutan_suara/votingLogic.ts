
import { countries } from "@/app/database/data/negara/benua/index";
import { embassyStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { unVotingStorage } from "./unVotingStorage";

export interface VoteResult {
  yes: number;
  no: number;
  abstain: number;
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

  allCountries.forEach(country => {
    const countryName = country.name_id;

    // 1. Negara Target otomatis menolak
    if (targetCountry && countryName === targetCountry) {
      opponents.push(countryName);
      return;
    }

    // 2. Negara yang sedang disanksi/diembargo juga menolak (solidaritas)
    if (sanctionedCountries.includes(countryName)) {
      opponents.push(countryName);
      return;
    }

    // 3. Negara dengan hubungan diplomatik (kedutaan) mendukung
    const embassyStatus = embassyStorage.getEmbassyStatus(countryName);
    if (embassyStatus === 'completed') {
      supporters.push(countryName);
      return;
    }

    // 4. Negara tanpa kedutaan bisa Menolak atau Abstain
    const rand = Math.random();
    if (rand < 0.88) {
      opponents.push(countryName);
    } else {
      abstainers.push(countryName);
    }
  });

  return {
    yes: supporters.length,
    no: opponents.length,
    abstain: abstainers.length,
    details: {
      supporters,
      opponents,
      abstainers
    }
  };
};
