import { CountryData } from "../../types";

export const namibia: CountryData = {
  "name_en": "Namibia",
  "capital": "Windhoek",
  "name_id": "Namibia",
  "lon": 17,
  "lat": -22,
  "flag": "🇳🇦",
  "pop": "10M",
  "budget": 126,
  "income": "361",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 26,
    "hydro_plant": 19,
    "nuclear_plant": 40,
    "power_grid": 85,
    "solar_plant": 7,
    "thermal_plant": 1,
    "wind_plant": 25,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 16,
    "bicycle_path": 24,
    "bus_terminal": 2,
    "helipad": 15,
    "highway": 4,
    "internet_coverage": 53,
    "railway": 16,
    "road_quality": 80,
    "sea_port": 34,
    "subway": 1,
    "tech_stack": 84,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 37,
    "coal": 17,
    "copper": 18,
    "gas": 15,
    "gold": 21,
    "iron_ore": 10,
    "lithium": 38,
    "nickel": 30,
    "oil": 29,
    "rare_earth": 7,
    "salt": 12,
    "strength": 29.660809349923973,
    "uranium": 22,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 31,
    "car": 13,
    "concrete_cement": 27,
    "fertilizer": 18,
    "instant_noodle": 3,
    "meat_processing": 39,
    "mineral_water": 26,
    "motorcycle": 36,
    "pharmacy": 20,
    "semiconductor": 38,
    "smelter": 7,
    "strength": 3.076011687404966,
    "sugar": 11,
    "wood": 10,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 9,
    "chicken": 39,
    "dairy_cow": 35,
    "fish": 28,
    "poultry": 37,
    "sheep_goat": 3,
    "shellfish": 38,
    "shrimp": 8,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 2,
    "coffee": 4,
    "corn": 40,
    "palm_oil": 22,
    "rice": 30,
    "soy": 36,
    "strength": 20.660809349923973,
    "sugarcane": 24,
    "tea": 23,
    "tubers": 1,
    "vegetables": 24,
    "wheat": 11,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 1,
    "armory": 22,
    "tank_hangar": 4,
    "military_academy": 30,
    "budget": 485,
    "personnel": 9679,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 176,
        "apc": 186,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 43,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 153,
        "helikopter_serang": 150,
        "pesawat_pengintai": 2,
      },
      "total_unit": 29,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 40,
    "military_naval_base": 12,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 4,
    "intelligence": 11,
    "strategic_operations": {
      "attack_mission": 31,
      "spy_mission": 31,
      "sabotage_mission": 29,
      "territory_management": 31,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 1,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 15,
      "elementary_school": 29,
      "middle_school": 36,
      "high_school": 39,
      "university": 40,
      "education_institute": 29,
      "laboratory": 28,
      "observatory": 10,
      "research_center": 28,
      "development_center": 27,
      "literacy": 69,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 19,
      "diagnostic_center": 19,
      "hospital_beds": 9743,
      "life_expectancy": 15,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 6,
      "racing_circuit": 4,
      "stadium": 34,
      "international_stadium": 31,
      "olympic_score": 15,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 22,
      "court": 28,
      "prosecution_office": 4,
      "police_station": 6,
      "police_car_fleet": 4201,
      "police_academy": 29,
      "corruption_index": 51,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 13,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 13,
          "pusat_forensik": 1,
        },
        "response_time": 25,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 38,
    "aircraft": 20,
    "naval": 15,
    "air_base": 39,
    "naval_base": 34,
    "military_base": 34,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 38,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52,
    },
    "income": {
      "rate": 6,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 2,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
    },
    "other": {
      "rate": 22,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 1,
    "commercial": 3,
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
      "hard_power": 25,
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
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 1,
    "education": 22,
    "security": 39,
    "finance": 24,
    "environment": 60,
  }
};
