import { CountryData } from "../../types";

export const chad: CountryData = {
  "name_en": "Chad",
  "capital": "N'Djamena",
  "name_id": "Chad",
  "lon": 19,
  "lat": 15,
  "flag": "🇹🇩",
  "pop": "10M",
  "budget": 670000000000000,
  "income": "307.000.000.000.000 / 307 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 18,
    "hydro_plant": 13,
    "nuclear_plant": 23,
    "power_grid": 89,
    "solar_plant": 37,
    "thermal_plant": 16,
    "wind_plant": 35,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 40,
    "bicycle_path": 26,
    "bus_terminal": 20,
    "helipad": 28,
    "highway": 18,
    "internet_coverage": 94,
    "railway": 12,
    "road_quality": 78,
    "sea_port": 29,
    "subway": 25,
    "tech_stack": 54,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 18,
    "coal": 40,
    "copper": 16,
    "gas": 22,
    "gold": 18,
    "iron_ore": 26,
    "lithium": 32,
    "nickel": 22,
    "oil": 14,
    "rare_earth": 23,
    "salt": 7,
    "strength": 29.660809349923973,
    "uranium": 22,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 27,
    "car": 23,
    "concrete_cement": 20,
    "fertilizer": 40,
    "instant_noodle": 34,
    "meat_processing": 4,
    "mineral_water": 17,
    "motorcycle": 27,
    "pharmacy": 8,
    "semiconductor": 17,
    "smelter": 40,
    "strength": 3.076011687404966,
    "sugar": 9,
    "wood": 13,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 38,
    "chicken": 10,
    "dairy_cow": 6,
    "fish": 2,
    "poultry": 31,
    "sheep_goat": 35,
    "shellfish": 4,
    "shrimp": 21,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 1,
    "coffee": 19,
    "corn": 35,
    "palm_oil": 8,
    "rice": 4,
    "soy": 27,
    "strength": 20.660809349923973,
    "sugarcane": 9,
    "tea": 27,
    "tubers": 34,
    "vegetables": 14,
    "wheat": 33,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 35,
    "armory": 40,
    "tank_hangar": 33,
    "military_academy": 14,
    "budget": 7,
    "personnel": 25495,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 34,
        "apc": 1,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 24,
        "helikopter_serang": 25,
        "pesawat_pengintai": 2,
      },
      "total_unit": 23,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 30,
    "military_naval_base": 22,
    "arms_factory": 25,
    "nuclear_status": false,
    "space_program": 3,
    "cyber_defense": 36,
    "intelligence": 30,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 20,
      "sabotage_mission": 35,
      "territory_management": 9,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 35,
      "radar_network": 31,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 3,
      "middle_school": 24,
      "high_school": 14,
      "university": 4,
      "education_institute": 27,
      "laboratory": 26,
      "observatory": 9,
      "research_center": 36,
      "development_center": 22,
      "literacy": 67,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 32,
      "small_hospital": 14,
      "diagnostic_center": 25,
      "hospital_beds": 720,
      "life_expectancy": 14,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 34,
      "racing_circuit": 31,
      "stadium": 24,
      "international_stadium": 39,
      "olympic_score": 18,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 1,
      "court": 20,
      "prosecution_office": 19,
      "police_station": 16,
      "police_car_fleet": 1832,
      "police_academy": 7,
      "corruption_index": 50,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 2,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 2,
          "kamera_surveillance": 34,
          "pusat_forensik": 1,
        },
        "response_time": 27,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 29,
    "tanks": 35,
    "aircraft": 12,
    "naval": 38,
    "air_base": 2,
    "naval_base": 37,
    "military_base": 5,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 32,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 3,
      "satisfaction": 52,
    },
    "income": {
      "rate": 35,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 13,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 30,
      "satisfaction": 88,
    },
    "other": {
      "rate": 28,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 20,
    "industrial": 53,
  },

  // =============================================================
  // 6. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 7,
      "hard_power": 23,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    "agreements": [
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 34,
    "education": 32,
    "security": 6,
    "finance": 23,
    "environment": 60,
  }
};
