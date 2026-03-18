import { Religion } from "./religions";
import { Ideology } from "./ideologies";

export interface CountryData {
  name_en: string;
  name_id: string;
  lon: number;
  lat: number;
  flag: string;
  pop: string;
  budget: string;
  religion: Religion;
  ideology: Ideology;
  
  // --- SECTORS ---
  
  // 1. Infrastruktur Kelistrikan (Expanded Infrastructure)
  infrastructure: {
    // Power
    nuclear_plant: number;
    hydro_plant: number;
    solar_plant: number;
    thermal_plant: number;
    gas_plant: number;
    wind_plant: number;
    power_grid: number; // 0-100% coverage
    
    // Transport & Logistik (Detailed)
    bicycle_path: number;
    subway: number;
    railway: number;
    highway: number;
    road_quality: number; // 0-100%
    sea_port: number;
    airport: number;
    
    // Communication
    internet_coverage: number; // 0-100%
    tech_stack: number; // 0-100%
    
    // Basic Services
    water_access: number; // 0-100%
  };

  // 2. Sektor Ekstraksi & Energi (Detailed)
  sector_extraction: {
    gold: number;
    uranium: number;
    coal: number;
    oil: number;
    gas: number;
    salt: number;
    nickel: number;
    copper: number;
    rare_earth: number;
    iron_ore: number;
    strength: number; // 0-100
  };

  // 3. Sektor Pengolahan & Manufaktur (Detailed)
  sector_manufacturing: {
    semiconductor: number;
    car: number;
    motorcycle: number;
    smelter: number;
    concrete_cement: number;
    wood: number;
    mineral_water: number;
    sugar: number;
    bread: number;
    pharmacy: number;
    fertilizer: number;
    meat_processing: number;
    instant_noodle: number;
    strength: number; // 0-100
  };

  // 4. Sektor Peternakan (Detailed)
  sector_livestock: {
    chicken: number;
    poultry: number;
    dairy_cow: number;
    beef_cow: number;
    sheep_goat: number;
    shrimp: number;
    fish: number;
    shellfish: number;
    strength: number; // 0-100
  };

  // 5. Sektor Pertanian (Detailed)
  sector_agriculture: {
    rice: number;
    wheat: number;
    corn: number;
    tubers: number;
    soy: number;
    palm_oil: number;
    tea: number;
    coffee: number;
    cocoa: number;
    sugarcane: number;
    vegetables: number;
    strength: number; // 0-100
  };

  // 6. Sektor Pertahanan (Detailed)
  sector_defense: {
    prison: number;
    barracks: number;
    armory: number;
    tank_hangar: number;
    military_academy: number;
    budget: number; // in T
    personnel: number;
    strength: number; // 0-100
    military_fleet: {
      darat: {
        main_battle_tank: number;
        apc: number;
        artileri_berat: number;
      };
      laut: {
        kapal_induk: number;
        kapal_destroyer: number;
        kapal_selam_nuklir: number;
      };
      udara: {
        jet_tempur_stealth: number;
        helikopter_serang: number;
        pesawat_pengintai: number;
      };
      total_unit: number;
      readiness: number; // 0-100%
    };
  };

  // 7. Sektor Militer Strategis (Detailed)
  sector_military_strategic: {
    command_center: number;
    military_air_base: number;
    military_naval_base: number;
    arms_factory: number;
    nuclear_status: boolean;
    space_program: number; // 0-100
    cyber_defense: number;
    intelligence: number;
    strategic_operations: {
      attack_mission: number;
      spy_mission: number;
      sabotage_mission: number;
      territory_management: number;
      nuclear_program: number;
    };
    intel_radar: {
      satellite_system: number;
      radar_network: number;
      cyber_ops: number;
    };
  };

  // 8. Transportasi & Logistik (Moved to infrastructure but keeping ref)
  
  // 9-12. Sektor Sosial (Detailed)
  sector_social: {
    education: {
      kindergarten: number;
      elementary_school: number;
      middle_school: number;
      high_school: number;
      university: number;
      education_institute: number;
      laboratory: number;
      observatory: number;
      research_center: number;
      development_center: number;
      literacy: number;
      research_index: number;
    };
    health: {
      large_hospital: number;
      small_hospital: number;
      diagnostic_center: number;
      hospital_beds: number;
      life_expectancy: number;
      healthcare_index: number;
    };
    sports: {
      swimming_pool: number;
      racing_circuit: number;
      stadium: number;
      international_stadium: number;
      olympic_score: number;
      popularity: number;
    };
    law: {
      legal_aid_center: number;
      court: number;
      prosecution_office: number;
      police_station: number;
      police_car_fleet: number;
      police_academy: number;
      corruption_index: number;
      security_index: number;
      police_fleet: {
        patroli_lantas: {
          mobil_patroli: number;
          sepeda_motor: number;
          unit_k9: number;
        };
        taktis_khusus: {
          swat: number;
          helikopter_polisi: number;
          anti_huru_hara: number;
        };
        pusat_komando: {
          stasiun_polisi: number;
          kamera_surveillance: number;
          pusat_forensik: number;
        };
        response_time: number; // minutes
        public_trust: number; // 0-100%
      };
    };
  };

  // --- REPLACED/LEGACY ---
  military: {
    infantry: number;
    tanks: number;
    aircraft: number;
    naval: number;
    air_base: number;
    naval_base: number;
    military_base: number;
    nuclear: boolean;
    strength: number; // 0-100 score
  };
  un_vote: "Pro" | "Neutral" | "Contra";
  income: string; // GDP or National Income
  trade: {
    buy_commodity: number; // Value in T
    sell_commodity: number; // Value in T
  };
  taxes: {
    vat: { rate: number; satisfaction: number }; // PPN
    corporate: { rate: number; satisfaction: number }; // Pajak Korporasi
    income: { rate: number; satisfaction: number }; // Pajak Penghasilan Pribadi
    customs: { rate: number; satisfaction: number }; // Bea Cukai
    environment: { rate: number; satisfaction: number }; // Pajak Lingkungan
    other: { rate: number; satisfaction: number }; // Pajak yang lain
  };
  demand: {
    satisfaction: number; // 0-100
    top_demands: string[];
    residential: number; // 0-100% capacity/need
    commercial: number;
    industrial: number;
  };
  geopolitics: {
    allies: string[];
    enemies: string[];
    stance: "Globalist" | "Isolationist" | "Neutral";
    international_influence: {
      soft_power: number; // 0-100
      hard_power: number; // 0-100
      diplomatic_prestige: number; // 0-100
    };
    international_orgs: {
      name: string;
      role: "Member" | "Leader" | "Observer";
    }[];
    agreements: {
      partner: string;
      type: "Trade" | "Military" | "Research" | "Political";
      status: "Active" | "Pending" | "Cooling";
    }[];
  };
  ministries: {
    health: number; // 0-100
    education: number;
    security: number;
    finance: number;
    environment: number;
  };
}
