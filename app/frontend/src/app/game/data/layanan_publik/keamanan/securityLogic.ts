import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/benua/index";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";

const IDEAL_RATIO = {
  SECURITY_FORCE: 0.00004, // 1 unit per 25k population
};

export const getNationalSecurityImpact = () => {
  const session = gameStorage.getSession() as any;
  const countryName = session?.country || "Indonesia";
  const country = countries.find(c => 
    c.name_id === countryName || 
    c.name_en === countryName || 
    (c as any).id === countryName ||
    (c as any).id === Number(countryName)
  ) || countries[0];

  const buildingData = buildingStorage.getData();
  const deltas = buildingData.buildingDeltas || {};
  const population = populationStorage.getPopulation();

  // Weighted security infrastructure (matches PopulationDeltaLogic.ts)
  const totalSecurityInfra = 
    (Number(deltas["4_kantor_polisi"]) || 0) * 1.0 +
    Number((country.armada_kepolisian as any)?.armada_polisi?.kantor_polisi || 0) +
    (Number(deltas["14_kejaksaan_court"]) || 0) * 0.3 +
    Number((country.hukum as any)?.kejaksaan || 0) * 0.3 +
    (Number(deltas["15_legal_aid"]) || 0) * 0.1 +
    Number((country.hukum as any)?.pusat_bantuan_hukum || 0) * 0.1;

  // Calculate coverage ratio (0.0 to 1.0+)
  const securityCoverage = (totalSecurityInfra / population) / IDEAL_RATIO.SECURITY_FORCE;
  
  // Security Level is 0-100 based on coverage
  const securityLevel = Math.min(1.0, securityCoverage) * 100;

  return {
    securityLevel: securityLevel,
    formattedLevel: securityLevel.toFixed(1) + "/100",
    coveragePercent: Math.min(100, (securityCoverage * 100))
  };
};
