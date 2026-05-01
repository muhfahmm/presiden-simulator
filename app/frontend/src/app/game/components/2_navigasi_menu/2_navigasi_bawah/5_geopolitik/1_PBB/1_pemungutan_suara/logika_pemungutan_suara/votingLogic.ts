
import { countries as countriesData } from "@/app/pilih_negara/data/semua_fitur_negara/0_profiles/index";
import { embassyStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage";
import { unVotingStorage } from "./unVotingStorage";
import geoDataRaw from "./geopolitical_data.json";

const geoData = geoDataRaw as {
  countries: Record<string, { id: number; continent: string }>;
  relations: number[];
  organizations: Record<string, string[]>;
  num_countries: number;
};

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

// Utility for randomness in voting order
const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const getRelation = (voterName: string, otherName: string): number => {
  const voter = geoData.countries[voterName];
  const other = geoData.countries[otherName];
  if (!voter || !other) return 50;

  const index = voter.id * geoData.num_countries + other.id;
  // Safety check for matrix bounds if IDs are shifted
  const countriesArray = Object.values(geoData.countries);
  const voterIdx = countriesArray.findIndex(c => c.id === voter.id);
  const otherIdx = countriesArray.findIndex(c => c.id === other.id);
  
  if (voterIdx === -1 || otherIdx === -1) return 50;
  return geoData.relations[voterIdx * geoData.num_countries + otherIdx] || 50;
};

export const areInSameOrg = (countryA: string, countryB: string): boolean => {
  for (const members of Object.values(geoData.organizations)) {
    if (members.includes(countryA.toLowerCase()) && members.includes(countryB.toLowerCase())) {
      return true;
    }
  }
  return false;
};

/**
 * Logika untuk mensimulasikan pemungutan suara PBB secara rasional
 */
export const simulateUNVote = (
  targetCountry: string | undefined, 
  userCountry: string,
  category: string,
  proposer: string = "Anggota PBB",
  resolutionName: string = ""
): VoteResult => {
  const allCountries = (countriesData || []).filter(c => c.name_id !== userCountry);
  
  const supporters: string[] = [];
  const opponents: string[] = [];
  const abstainers: string[] = [];
  
  let weightedYes = 0;
  let weightedNo = 0;
  let weightedAbstain = 0;

  allCountries.forEach(country => {
    const countryName = country.name_id;
    const voteWeight = country.geopolitik?.un_vote || 1;

    // 1. Negara Target otomatis menolak usulan sanksi/embargo terhadap dirinya
    if (targetCountry && countryName === targetCountry && (category.includes("Sanksi") || category.includes("Embargo"))) {
      opponents.push(countryName);
      weightedNo += voteWeight;
      return;
    }

    // 2. Logika Rasional (AI-to-AI)
    let score = 0;
    
    // --- KHUSUS LARANGAN PERANG ---
    if (resolutionName.toUpperCase() === "LARANGAN PERANG") {
      const rel = getRelation(countryName, proposer);
      
      // Cek apakah negara ini ikut aliansi major manapun
      const majorOrgs = ["nato", "brics", "eu", "asean", "arab_league", "au", "g7", "quad"];
      let isInAnyMajorAlliance = false;
      const countryLower = countryName.toLowerCase();
      
      for (const org of majorOrgs) {
        if (geoData.organizations[org]?.includes(countryName) || 
            geoData.organizations[org]?.includes(countryLower)) {
          isInAnyMajorAlliance = true;
          break;
        }
      }

      // Jika relasi netral (45-55) dan tidak ikut aliansi manapun
      if (rel >= 45 && rel <= 55 && !isInAnyMajorAlliance) {
        const rand = Math.random();
        if (rand < 0.35) {
          supporters.push(countryName);
          weightedYes += voteWeight;
        } else if (rand < 0.70) {
          opponents.push(countryName);
          weightedNo += voteWeight;
        } else {
          abstainers.push(countryName);
          weightedAbstain += voteWeight;
        }
        return;
      }
    }

    // --- KHUSUS IZIN INTERVENSI MILITER ---
    if (resolutionName.toUpperCase().includes("INTERVENSI MILITER")) {
        const relWithTarget = targetCountry ? getRelation(countryName, targetCountry) : 50;
        const relWithProposer = getRelation(countryName, proposer);
        
        // PBB sangat enggan mengizinkan perang. Skor dasar adalah negatif besar.
        let interventionScore = -40; 
        
        // Bonus jika target sangat dibenci (Rogue State)
        if (relWithTarget < 30) interventionScore += 30;
        if (relWithTarget < 20) interventionScore += 20;
        
        // Bonus jika pengusul adalah teman dekat
        if (relWithProposer > 70) interventionScore += 20;
        
        // Penalti jika target adalah teman
        if (relWithTarget > 60) interventionScore -= 50;

        // Randomness
        interventionScore += (Math.random() * 20 - 10);

        if (interventionScore > 10) {
            supporters.push(countryName);
            weightedYes += voteWeight;
        } else if (interventionScore < -10) {
            opponents.push(countryName);
            weightedNo += voteWeight;
        } else {
            abstainers.push(countryName);
            weightedAbstain += voteWeight;
        }
        return;
    }
    
    // Hubungan dengan Pengusul (Jika suka pengusul -> cenderung setuju)
    const relWithProposer = getRelation(countryName, proposer);
    score += (relWithProposer - 50) * 1.5;

    // Hubungan dengan Target (Jika benci target -> cenderung setuju sanksi)
    if (targetCountry) {
      const relWithTarget = getRelation(countryName, targetCountry);
      score -= (relWithTarget - 50) * 2.0; 
    }

    // Bonus Aliansi/Organisasi
    if (areInSameOrg(countryName, proposer)) score += 40;
    if (targetCountry && areInSameOrg(countryName, targetCountry)) score -= 60;

    // Tambahan untuk Player Embassy (Jika pemain yang mengusulkan)
    if (proposer === userCountry) {
        const embassyStatus = embassyStorage.getEmbassyStatus(countryName);
        if (embassyStatus === 'completed') score += 30;
    }

    // Bonus Solidaritas Negara Kecil (Jika Negara Kecil berani melawan Superpower)
    const proposerData = countriesData.find(c => c.name_id === proposer);
    const targetData = targetCountry ? countriesData.find(c => c.name_id === targetCountry) : null;
    const isSmallProposer = proposerData && (proposerData.geopolitik?.un_vote || 0) < 50;
    const isSuperpowerTarget = targetData && (targetData.geopolitik?.un_vote || 0) >= 150;
    
    if (isSmallProposer && isSuperpowerTarget && voteWeight < 50) {
        score += 25; // Bonus solidaritas tinggi
    }

    // Tambahan Noise agar hasil tidak kaku
    // Negara kecil (un_vote rendah) memiliki noise lebih tinggi (lebih tidak terduga)
    const noiseFactor = voteWeight < 10 ? 50 : 30;
    score += (Math.random() * noiseFactor - (noiseFactor / 2));

    // --- LOGIKA MENGHINDARI ADU DOMBA (Abstain 40%) ---
    // Jika negara berteman dengan keduanya (Skor Hubungan > 60), ada peluang 40% untuk Abstain
    if (relWithProposer > 60 && targetCountry) {
        const relWithTarget = getRelation(countryName, targetCountry);
        if (relWithTarget > 60) {
            if (Math.random() < 0.40) {
                abstainers.push(countryName);
                weightedAbstain += voteWeight;
                return;
            }
        }
    }

    // Penentuan Suara berdasarkan Score
    if (score > 15) {
      supporters.push(countryName);
      weightedYes += voteWeight;
    } else if (score < -15) {
      opponents.push(countryName);
      weightedNo += voteWeight;
    } else {
      // Peluang Abstain jika netral
      abstainers.push(countryName);
      weightedAbstain += voteWeight;
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
      supporters: shuffleArray(supporters),
      opponents: shuffleArray(opponents),
      abstainers: shuffleArray(abstainers)
    }
  };
};

