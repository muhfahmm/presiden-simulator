import { CountryData } from "../../types";

export const eritrea: CountryData = {
  "name_en": "Eritrea",
  "capital": "Asmara",
  "name_id": "Eritrea",
  "lon": 39,
  "lat": 15,
  "flag": "🇪🇷",
  "pop": "10M",
  "budget": 496000000000000,
  "income": "393.000.000.000.000 / 393 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 20,
    "bicycle_path": 8,
    "bus_terminal": 28,
    "gas_plant": 35,
    "helipad": 37,
    "highway": 13,
    "hydro_plant": 36,
    "internet_coverage": 70,
    "nuclear_plant": 11,
    "power_grid": 67,
    "railway": 3,
    "road_quality": 75,
    "sea_port": 9,
    "solar_plant": 31,
    "subway": 25,
    "tech_stack": 71,
    "thermal_plant": 8,
    "water_access": 74,
    "wind_plant": 37,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 34,
    "coal": 23,
    "copper": 36,
    "gas": 39,
    "gold": 35,
    "iron_ore": 1,
    "lithium": 2,
    "nickel": 13,
    "oil": 40,
    "rare_earth": 33,
    "salt": 3,
    "strength": 29.660809349923973,
    "uranium": 22,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 39,
    "car": 11,
    "concrete_cement": 7,
    "fertilizer": 1,
    "instant_noodle": 23,
    "meat_processing": 18,
    "mineral_water": 30,
    "motorcycle": 11,
    "pharmacy": 9,
    "semiconductor": 16,
    "smelter": 32,
    "strength": 3.076011687404966,
    "sugar": 9,
    "wood": 1,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 35,
    "chicken": 17,
    "dairy_cow": 3,
    "fish": 24,
    "poultry": 39,
    "sheep_goat": 28,
    "shellfish": 7,
    "shrimp": 27,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 16,
    "coffee": 4,
    "corn": 32,
    "palm_oil": 24,
    "rice": 11,
    "soy": 28,
    "strength": 20.660809349923973,
    "sugarcane": 29,
    "tea": 21,
    "tubers": 17,
    "vegetables": 25,
    "wheat": 35,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 35,
    "armory": 13,
    "tank_hangar": 14,
    "military_academy": 4,
    "budget": 8,
    "personnel": 16818,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 17,
        "apc": 26,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 4,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
      },
      "total_unit": 26,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 25,
    "military_air_base": 6,
    "military_naval_base": 16,
    "arms_factory": 5,
    "nuclear_status": false,
    "space_program": 22,
    "cyber_defense": 40,
    "intelligence": 36,
    "strategic_operations": {
      "attack_mission": 13,
      "spy_mission": 34,
      "sabotage_mission": 33,
      "territory_management": 30,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 19,
      "radar_network": 18,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 35,
      "middle_school": 38,
      "high_school": 22,
      "university": 26,
      "education_institute": 37,
      "laboratory": 14,
      "observatory": 35,
      "research_center": 18,
      "development_center": 11,
      "literacy": 90,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 27,
      "diagnostic_center": 37,
      "hospital_beds": 2855,
      "life_expectancy": 27,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 37,
      "stadium": 33,
      "international_stadium": 5,
      "olympic_score": 40,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 27,
      "court": 5,
      "prosecution_office": 1,
      "police_station": 36,
      "police_car_fleet": 2156,
      "police_academy": 4,
      "corruption_index": 57,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 33,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 5,
          "pusat_forensik": 1,
        },
        "response_time": 31,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 12,
    "tanks": 6,
    "aircraft": 24,
    "naval": 24,
    "air_base": 18,
    "naval_base": 16,
    "military_base": 23,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 31,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 38,
      "satisfaction": 52,
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 15,
      "satisfaction": 88,
    },
    "other": {
      "rate": 32,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 85,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 40,
    "commercial": 27,
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
      "soft_power": 27,
      "hard_power": 6,
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
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 31,
    "education": 24,
    "security": 11,
    "finance": 18,
    "environment": 60,
  }
};
