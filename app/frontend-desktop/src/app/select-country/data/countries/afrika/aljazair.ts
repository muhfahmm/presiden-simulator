import { CountryData } from "../../types";

export const aljazair: CountryData = {
  "name_en": "Algeria",
  "capital": "Algiers",
  "name_id": "Aljazair",
  "lon": 3.08,
  "lat": 36.73,
  "flag": "🇩🇿",
  "pop": "47M",
  "budget": 640000000000000,
  "income": "3.200.000.000.000.000 / 3200 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 12,
    "bicycle_path": 32,
    "bus_terminal": 17,
    "gas_plant": 7,
    "helipad": 2,
    "highway": 30,
    "hydro_plant": 3,
    "internet_coverage": 78,
    "nuclear_plant": 35,
    "power_grid": 95,
    "railway": 12,
    "road_quality": 90,
    "sea_port": 15,
    "solar_plant": 21,
    "subway": 34,
    "tech_stack": 69,
    "thermal_plant": 8,
    "water_access": 74,
    "wind_plant": 22,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 15,
    "coal": 39,
    "copper": 3,
    "gas": 80,
    "gold": 27,
    "iron_ore": 21,
    "lithium": 38,
    "nickel": 3,
    "oil": 75,
    "rare_earth": 12,
    "salt": 12,
    "strength": 29.660809349923973,
    "uranium": 15,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 3,
    "car": 2,
    "concrete_cement": 21,
    "fertilizer": 11,
    "instant_noodle": 21,
    "meat_processing": 36,
    "mineral_water": 19,
    "motorcycle": 2,
    "pharmacy": 36,
    "semiconductor": 29,
    "smelter": 12,
    "strength": 3.076011687404966,
    "sugar": 2,
    "wood": 13,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 16,
    "chicken": 38,
    "dairy_cow": 2,
    "fish": 36,
    "poultry": 2,
    "sheep_goat": 26,
    "shellfish": 15,
    "shrimp": 16,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 8,
    "coffee": 38,
    "corn": 8,
    "palm_oil": 18,
    "rice": 2,
    "soy": 28,
    "strength": 20.660809349923973,
    "sugarcane": 33,
    "tea": 37,
    "tubers": 24,
    "vegetables": 34,
    "wheat": 10,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 3,
    "barracks": 32,
    "armory": 16,
    "tank_hangar": 20,
    "military_academy": 14,
    "budget": 33,
    "personnel": 29427,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 25,
        "apc": 29,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 39,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 40,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2,
      },
      "total_unit": 25,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 31,
    "military_air_base": 23,
    "military_naval_base": 18,
    "arms_factory": 34,
    "nuclear_status": false,
    "space_program": 21,
    "cyber_defense": 11,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 8,
      "sabotage_mission": 14,
      "territory_management": 9,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 30,
      "radar_network": 38,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 23,
      "elementary_school": 35,
      "middle_school": 5,
      "high_school": 7,
      "university": 5,
      "education_institute": 16,
      "laboratory": 6,
      "observatory": 2,
      "research_center": 24,
      "development_center": 19,
      "literacy": 60,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 4,
      "diagnostic_center": 33,
      "hospital_beds": 8595,
      "life_expectancy": 39,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 20,
      "racing_circuit": 36,
      "stadium": 12,
      "international_stadium": 26,
      "olympic_score": 36,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 10,
      "court": 2,
      "prosecution_office": 31,
      "police_station": 24,
      "police_car_fleet": 1704,
      "police_academy": 34,
      "corruption_index": 58,
      "security_index": 61,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 33,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 1,
          "kamera_surveillance": 25,
          "pusat_forensik": 1,
        },
        "response_time": 15,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 13,
    "aircraft": 3,
    "naval": 30,
    "air_base": 30,
    "naval_base": 22,
    "military_base": 8,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 35,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 13,
      "satisfaction": 52,
    },
    "income": {
      "rate": 33,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88,
    },
    "other": {
      "rate": 21,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 72,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 3,
    "commercial": 36,
    "industrial": 53,
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 5,
      "hard_power": 14,
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
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 21,
    "education": 5,
    "security": 10,
    "finance": 12,
    "environment": 60,
  }
};
