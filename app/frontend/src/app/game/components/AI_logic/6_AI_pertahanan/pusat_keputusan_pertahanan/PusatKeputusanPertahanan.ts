"use client"

import { countries } from "@/app/database/data/negara/benua/index";
import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiPopulationStorage } from "@/app/game/components/modals/1_info_strategis/2_Populasi/AIPopulationStorage";
import { aiDefenseStorage } from "../antarmuka_data_pertahanan/AIDefenseStorage";
import { EksekutorPertahananAI } from "../sistem_tindakan_respon/EksekutorPertahananAI";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

// Database imports for baseline assets
import { komandoPertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan";
import { intelijenRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen";
import { armadaMiliterRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer";
import { armadaPolisiRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi";
import { pertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan";

// All defense building options for metadata lookup
const ALL_DEFENSE_KEYS = [
  ...Object.keys(komandoPertahananRate),
  ...Object.keys(intelijenRate),
  ...Object.keys(armadaMiliterRate),
  ...Object.keys(armadaPolisiRate),
  ...Object.keys(pertahananRate),
];

// Route paths for each sector
const SECTOR_ROUTES = {
  komando: "/game/components/AI_logic/6_AI_pertahanan/routes/1_komando_pertahanan",
  intelijen: "/game/components/AI_logic/6_AI_pertahanan/routes/2_intelijen",
  armada_militer: "/game/components/AI_logic/6_AI_pertahanan/routes/3_armada_militer",
  armada_polisi: "/game/components/AI_logic/6_AI_pertahanan/routes/4_armada_polisi",
  manajemen: "/game/components/AI_logic/6_AI_pertahanan/routes/5_manajamen_pertahanan",
};

/**
 * PusatKeputusanPertahanan (Defense Decision Center)
 *
 * Master orchestrator for AI defense decisions:
 * 1. Gathers economic + military snapshot for an NPC
 * 2. Determines which sector needs attention (weighted rotation)
 * 3. Calls the appropriate Python worker via route handler
 * 4. Executes the decision via EksekutorPertahananAI
 */
export class PusatKeputusanPertahanan {
  private static lastDecisionMap: Map<string, string> = new Map();
  private static sectorRotation: Map<string, number> = new Map();

  /**
   * Gather all defense assets (baseline + AI deltas) for a country.
   */
  static gatherDefenseAssets(country: any): Record<string, number> {
    const assets: Record<string, number> = {};

    // 1. Collect baseline from country database
    const defenseSectors = [
      "komando_pertahanan",
      "intelijen",
      "armada_militer",
      "armada_polisi",
      "manajemen_pertahanan",
      // Also check nested objects
      "intel_radar",
      "operasi_strategis",
    ];

    const baselineData: Record<string, number> = {};
    defenseSectors.forEach((sectorKey) => {
      const sectorObj = (country as any)[sectorKey];
      if (sectorObj && typeof sectorObj === "object") {
        Object.entries(sectorObj).forEach(([dataKey, val]) => {
          baselineData[dataKey] = Number(val || 0);
        });
      }
    });

    // Also check nested armada_militer sub-objects (darat, laut, udara)
    const armadaMiliter = (country as any).armada_militer;
    if (armadaMiliter && typeof armadaMiliter === "object") {
      for (const branch of ["darat", "laut", "udara"]) {
        const branchObj = armadaMiliter[branch];
        if (branchObj && typeof branchObj === "object") {
          Object.entries(branchObj).forEach(([dataKey, val]) => {
            baselineData[dataKey] = Number(val || 0);
          });
        }
      }
      // Top-level armada_militer fields
      if (typeof armadaMiliter.barak === "number") {
        baselineData["barak"] = armadaMiliter.barak;
      }
    }

    // Also check nested armada_polisi sub-object
    const armadaPolisi = (country as any).armada_polisi;
    if (armadaPolisi && typeof armadaPolisi === "object") {
      Object.entries(armadaPolisi).forEach(([dataKey, val]) => {
        baselineData[dataKey] = Number(val || 0);
      });
    }

    // 2. Map baseline to metadata keys using dataKey
    const allRates = {
      ...komandoPertahananRate,
      ...intelijenRate,
      ...armadaMiliterRate,
      ...armadaPolisiRate,
      ...pertahananRate,
    };

    Object.entries(allRates).forEach(([metaKey, metadata]: [string, any]) => {
      const dataKey = metadata.dataKey || metaKey;
      const baseline = baselineData[dataKey] || baselineData[metaKey] || 0;
      if (baseline > 0) {
        assets[metaKey] = baseline;
      }
    });

    // 3. Add AI deltas
    const deltas = aiDefenseStorage.getAllDefenseDeltas(country.name_en);
    Object.entries(deltas).forEach(([key, val]) => {
      assets[key] = (assets[key] || 0) + val;
    });

    return assets;
  }

  /**
   * Calculate threat level based on regional context.
   * Uses a simple heuristic based on country location and stability.
   */
  static calculateThreatLevel(country: any): number {
    let threat = 40; // Base threat

    // Countries in volatile regions
    const highThreatRegions = [
      "middle_east",
      "south_asia",
      "east_africa",
      "central_asia",
    ];
    const regionKey = ((country as any).region || "").toLowerCase();
    if (highThreatRegions.some((r) => regionKey.includes(r))) {
      threat += 20;
    }

    // Countries with low stability have higher perceived threat
    const stability = (country as any).stabilitas || 70;
    if (stability < 50) threat += 25;
    else if (stability < 70) threat += 10;

    // Nuclear-capable or military-focused countries
    if ((country as any).status_nuklir) threat += 15;

    // Add randomness for variety
    threat += Math.floor(Math.random() * 15) - 5;

    return Math.max(20, Math.min(95, threat));
  }

  /**
   * Determine economic tier (1-3) from GDP/budget.
   */
  static getEconomicTier(budget: number): number {
    if (budget > 10_000_000_000) return 3; // Developed
    if (budget > 1_000_000_000) return 2; // Emerging
    return 1; // Developing
  }

  /**
   * Main entry: Think and decide defense actions for an NPC country.
   * Called periodically (e.g., every 3-5 game days).
   */
  static async pikirkan(countryNameEn: string) {
    const session = timeStorage.getState();
    const gameDate = session.gameDate;
    const dateStr = gameDate.toISOString().split("T")[0];

    // Throttle: One defense decision per country per 3 game days
    const lastKey = `${countryNameEn}_defense`;
    const lastDateStr = this.lastDecisionMap.get(lastKey);
    if (lastDateStr) {
      const lastDate = new Date(lastDateStr);
      const daysDiff = Math.floor(
        (gameDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysDiff < 3) return;
    }
    this.lastDecisionMap.set(lastKey, dateStr);

    const country = countries.find((c) => c.name_en === countryNameEn);
    if (!country) return;

    // 1. Gather economic snapshot
    const budget = aiBudgetStorage.getBudget(countryNameEn);
    const rawPop = country.jumlah_penduduk ?? (country as any).populasi ?? 0;
    const basePop =
      typeof rawPop === "string"
        ? parseInt(rawPop.replace(/\./g, ""))
        : typeof rawPop === "number"
          ? rawPop
          : 0;
    const population =
      aiPopulationStorage.getPopulation(country.name_en) || basePop;

    // 2. Gather current defense assets
    const defenseAssets = PusatKeputusanPertahanan.gatherDefenseAssets(country);
    const queue = aiDefenseStorage.getQueue(countryNameEn);

    // 3. Calculate contextual factors
    const threatLevel = PusatKeputusanPertahanan.calculateThreatLevel(country);
    const economicTier = PusatKeputusanPertahanan.getEconomicTier(budget);
    const stability = (country as any).stabilitas || 70;
    const happiness = (country as any).kebahagiaan || 60;

    // 4. Military asset counts for capacity analysis
    const tankCount =
      (defenseAssets["2_tank"] || 0) +
      (defenseAssets["3_apc"] || 0) +
      (defenseAssets["7_kendaraan_taktis"] || 0);
    const aircraftCount =
      (defenseAssets["15_jet_tempur_siluman"] || 0) +
      (defenseAssets["16_jet_pencegat"] || 0) +
      (defenseAssets["17_pesawat_pembom"] || 0) +
      (defenseAssets["18_helikopter_serbu"] || 0) +
      (defenseAssets["19_pesawat_intai"] || 0) +
      (defenseAssets["20_drone_intai"] || 0) +
      (defenseAssets["22_transport_udara"] || 0);
    const shipCount =
      (defenseAssets["8_kapal_induk"] || 0) +
      (defenseAssets["9_kapal_perusak"] || 0) +
      (defenseAssets["10_kapal_korvet"] || 0) +
      (defenseAssets["11_kapal_selam_nuklir"] || 0) +
      (defenseAssets["12_kapal_selam_reguler"] || 0) +
      (defenseAssets["13_penyapu_ranjau"] || 0) +
      (defenseAssets["14_kapal_logistik"] || 0);
    const totalMilitary =
      tankCount +
      aircraftCount +
      shipCount +
      (defenseAssets["1_barak"] || 0);

    // 5. Determine which sector to prioritize (weighted rotation)
    const currentRotation =
      (this.sectorRotation.get(countryNameEn) || 0) % 5;
    this.sectorRotation.set(
      countryNameEn,
      currentRotation + 1
    );

    // Each rotation index maps to a sector
    const sectorOrder = [
      "armada_militer",
      "armada_polisi",
      "manajemen",
      "intelijen",
      "komando",
    ];
    const selectedSector = sectorOrder[currentRotation];

    // 6. Build the payload for the selected sector
    let payload: any = {};
    let routePath = "";
    let sectorHint = "";

    switch (selectedSector) {
      case "komando":
        routePath = SECTOR_ROUTES.komando;
        sectorHint = "komando";
        payload = {
          budget,
          population,
          threat_level: threatLevel,
          stability,
          pusat_komando_strategis:
            defenseAssets["pusat_komando_strategis"] || 0,
          bunker_komando: defenseAssets["bunker_komando"] || 0,
          pusat_komando_wilayah:
            defenseAssets["pusat_komando_wilayah"] || 0,
          queue_count: queue.filter(
            (q) => q.sector === "komando"
          ).length,
          defense_budget_ratio: 0.05,
        };
        break;

      case "intelijen":
        routePath = SECTOR_ROUTES.intelijen;
        sectorHint = "intelijen";
        payload = {
          budget,
          population,
          threat_level: threatLevel,
          tech_level: economicTier,
          sistem_satelit: defenseAssets["sistem_satelit"] || 0,
          jaringan_radar: defenseAssets["jaringan_radar"] || 0,
          operasi_siber: defenseAssets["operasi_siber"] || 0,
          queue_count: queue.filter(
            (q) => q.sector === "intelijen"
          ).length,
          defense_budget_ratio: 0.10,
        };
        break;

      case "armada_militer":
        routePath = SECTOR_ROUTES.armada_militer;
        sectorHint = "militer";
        payload = {
          budget,
          population,
          threat_level: threatLevel,
          economic_tier: economicTier,
          military_assets: defenseAssets,
          queue_count: queue.filter(
            (q) =>
              q.sector === "darat" ||
              q.sector === "laut" ||
              q.sector === "udara" ||
              q.sector === "militer"
          ).length,
          defense_budget_ratio: 0.55,
        };
        break;

      case "armada_polisi":
        routePath = SECTOR_ROUTES.armada_polisi;
        sectorHint = "polisi";
        payload = {
          budget,
          population,
          threat_level: threatLevel,
          stability,
          happiness,
          economic_tier: economicTier,
          police_assets: defenseAssets,
          queue_count: queue.filter(
            (q) => q.sector === "polisi"
          ).length,
          defense_budget_ratio: 0.15,
        };
        break;

      case "manajemen":
        routePath = SECTOR_ROUTES.manajemen;
        sectorHint = "pertahanan";
        payload = {
          budget,
          population,
          economic_tier: economicTier,
          threat_level: threatLevel,
          defense_infra: defenseAssets,
          tank_count: tankCount,
          aircraft_count: aircraftCount,
          ship_count: shipCount,
          total_military_units: totalMilitary,
          queue_count: queue.filter(
            (q) => q.sector === "pertahanan"
          ).length,
          defense_budget_ratio: 0.15,
        };
        break;
    }

    // 7. Call the route handler
    try {
      const response = await fetch(routePath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!result || result.decision !== "EXECUTE") {
        if (result?.reason) {
          console.log(
            `[AI Pertahanan] ${countryNameEn} [${selectedSector}]: ${result.reason}`
          );
        }
        return;
      }

      // 8. Execute the decision
      console.log(
        `[AI Pertahanan] ${countryNameEn} [${selectedSector}]: ${result.reason} | Qty: ${result.quantity}`
      );

      if (result.building_key) {
        await EksekutorPertahananAI.laksanakan(
          countryNameEn,
          result.building_key,
          gameDate,
          result.quantity || 1,
          result.branch || sectorHint
        );
      }
    } catch (err) {
      console.error(
        `[AI Pertahanan] Error for ${countryNameEn} [${selectedSector}]:`,
        err
      );
    }
  }
}

