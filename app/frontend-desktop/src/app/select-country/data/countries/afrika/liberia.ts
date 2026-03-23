import { CountryData } from "../../types";

export const liberia: CountryData = {
  "name_en": "Liberia",
  "capital": "Monrovia",
  "name_id": "Liberia",
  "lon": -9.5,
  "lat": 6.5,
  "flag": "🇱🇷",
  "pop": "10M",
  "budget": 39,
  "income": "111",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 23,
    "hydro_plant": 35,
    "nuclear_plant": 33,
    "power_grid": 85,
    "solar_plant": 15,
    "thermal_plant": 37,
    "wind_plant": 1,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 7,
    "bicycle_path": 35,
    "bus_terminal": 8,
    "helipad": 31,
    "highway": 1,
    "internet_coverage": 89,
    "railway": 20,
    "road_quality": 89,
    "sea_port": 3,
    "subway": 12,
    "tech_stack": 58,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 34,
    "coal": 8,
    "copper": 25,
    "gas": 10,
    "gold": 1,
    "iron_ore": 10,
    "lithium": 27,
    "nickel": 25,
    "oil": 12,
    "rare_earth": 33,
    "salt": 15,
    "strength": 29.660809349923973,
    "uranium": 39,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 22,
    "car": 19,
    "concrete_cement": 38,
    "fertilizer": 14,
    "instant_noodle": 10,
    "meat_processing": 4,
    "mineral_water": 31,
    "motorcycle": 10,
    "pharmacy": 25,
    "semiconductor": 31,
    "smelter": 36,
    "strength": 3.076011687404966,
    "sugar": 25,
    "wood": 8,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 29,
    "chicken": 33,
    "dairy_cow": 2,
    "fish": 15,
    "poultry": 39,
    "sheep_goat": 24,
    "shellfish": 13,
    "shrimp": 14,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 35,
    "coffee": 19,
    "corn": 37,
    "palm_oil": 30,
    "rice": 28,
    "soy": 29,
    "strength": 20.660809349923973,
    "sugarcane": 4,
    "tea": 21,
    "tubers": 29,
    "vegetables": 36,
    "wheat": 18,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 30,
    "barracks": 18,
    "armory": 16,
    "tank_hangar": 34,
    "military_academy": 2,
    "budget": 29,
    "personnel": 29860,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 12,
        "apc": 33,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 2,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 35,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2,
      },
      "total_unit": 15,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 10,
    "military_air_base": 33,
    "military_naval_base": 1,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 34,
    "intelligence": 20,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 1,
      "sabotage_mission": 5,
      "territory_management": 36,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 16,
      "radar_network": 24,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 16,
      "elementary_school": 7,
      "middle_school": 31,
      "high_school": 18,
      "university": 7,
      "education_institute": 32,
      "laboratory": 34,
      "observatory": 3,
      "research_center": 24,
      "development_center": 36,
      "literacy": 50,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 16,
      "diagnostic_center": 9,
      "hospital_beds": 8832,
      "life_expectancy": 6,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 21,
      "stadium": 4,
      "international_stadium": 30,
      "olympic_score": 29,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 39,
      "court": 31,
      "prosecution_office": 29,
      "police_station": 20,
      "police_car_fleet": 8717,
      "police_academy": 26,
      "corruption_index": 58,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 31,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 27,
          "kamera_surveillance": 23,
          "pusat_forensik": 1,
        },
        "response_time": 13,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 8,
    "tanks": 6,
    "aircraft": 40,
    "naval": 34,
    "air_base": 15,
    "naval_base": 7,
    "military_base": 2,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 15,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 37,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 24,
      "satisfaction": 52,
    },
    "income": {
      "rate": 39,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 17,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
    },
    "other": {
      "rate": 39,
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
    "residential": 26,
    "commercial": 12,
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
      "soft_power": 39,
      "hard_power": 8,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 7,
    "education": 21,
    "security": 36,
    "finance": 3,
    "environment": 60,
  }
};
