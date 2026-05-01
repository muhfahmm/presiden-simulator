import { gameStorage } from "@/app/game/gamestorage";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { countries } from "@/app/database/data/negara/index";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";

const IDEAL_RATIO = {
  HEALTH_FACILITY: 0.000002, // 1 unit per 500k population
};

export const getNationalHealthImpact = () => {
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

  // Weighted health infrastructure (matches PopulationDeltaLogic.ts)
  const totalHealthInfra = 
    (Number(deltas["11_rumah_sakit_besar"]) || 0) * 1.0 +
    Number((country.kesehatan as any)?.rumah_sakit_besar || 0) +
    (Number(deltas["12_rumah_sakit_kecil"]) || 0) * 0.4 +
    Number((country.kesehatan as any)?.rumah_sakit_kecil || 0) * 0.4 +
    (Number(deltas["13_pusat_diagnostik"]) || 0) * 0.1 +
    Number((country.kesehatan as any)?.pusat_diagnostik || 0) * 0.1;

  // Calculate coverage ratio (0.0 to 1.0+)
  const healthCoverage = (totalHealthInfra / population) / IDEAL_RATIO.HEALTH_FACILITY;
  
  // Max bonus contribution to life expectancy is +15 years
  const lifeExpectancyBonus = Math.min(1.2, healthCoverage) * 15;

  return {
    lifeExpectancyBonus: lifeExpectancyBonus,
    formattedYears: lifeExpectancyBonus.toFixed(1) + " THN",
    coveragePercent: Math.min(100, (healthCoverage * 100))
  };
};

