import { CountryData } from "../../types";

export const trinidad_dan_tobago: CountryData = {
  "name_en": "Trinidad and Tobago",
  "capital": "Port of Spain",
  "name_id": "Trinidad dan tobago",
  "lon": -61,
  "lat": 11,
  "flag": "🇹🇹",
  "pop": "10M",
  "budget": 243,
  "income": "694",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 3,
    "hydro_plant": 27,
    "solar_plant": 16,
    "thermal_plant": 22,
    "gas_plant": 2,
    "wind_plant": 19,
    "power_grid": 91,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 16,
    "subway": 18,
    "railway": 8,
    "highway": 35,
    "road_quality": 85,
    "sea_port": 15,
    "airport": 14,
    "bus_terminal": 33,
    "helipad": 39,
    "internet_coverage": 57,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 20,
    "uranium": 27,
    "coal": 28,
    "oil": 20,
    "gas": 36,
    "salt": 26,
    "nickel": 34,
    "lithium": 11,
    "aluminum": 26,
    "copper": 33,
    "rare_earth": 38,
    "iron_ore": 37,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 40,
    "car": 14,
    "motorcycle": 24,
    "smelter": 24,
    "concrete_cement": 28,
    "wood": 27,
    "mineral_water": 36,
    "sugar": 8,
    "bread": 18,
    "pharmacy": 23,
    "fertilizer": 40,
    "meat_processing": 29,
    "instant_noodle": 28,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 22,
    "poultry": 6,
    "dairy_cow": 20,
    "beef_cow": 15,
    "sheep_goat": 31,
    "shrimp": 11,
    "fish": 28,
    "shellfish": 13,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 12,
    "corn": 26,
    "tubers": 21,
    "soy": 8,
    "palm_oil": 34,
    "tea": 29,
    "coffee": 40,
    "cocoa": 12,
    "sugarcane": 25,
    "vegetables": 29,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 37,
    "barracks": 29,
    "armory": 38,
    "tank_hangar": 34,
    "military_academy": 24,
    "budget": 31,
    "personnel": 22968,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 190,
        "apc": 112,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 188,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 138,
        "helikopter_serang": 96,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 7,
    "military_naval_base": 15,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 14,
    "intelligence": 35,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 19,
      "sabotage_mission": 8,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 5,
      "middle_school": 22,
      "high_school": 32,
      "university": 2,
      "education_institute": 14,
      "laboratory": 39,
      "observatory": 40,
      "research_center": 32,
      "development_center": 3,
      "literacy": 74,
      "research_index": 0
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 33,
      "diagnostic_center": 22,
      "hospital_beds": 3922,
      "life_expectancy": 16,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 8,
      "racing_circuit": 34,
      "stadium": 8,
      "international_stadium": 20,
      "olympic_score": 6,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 40,
      "prosecution_office": 25,
      "police_station": 18,
      "police_car_fleet": 9719,
      "police_academy": 15,
      "corruption_index": 62,
      "security_index": 54,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 39,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 33,
          "pusat_forensik": 1
        },
        "response_time": 9,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 2,
    "tanks": 22,
    "aircraft": 17,
    "naval": 38,
    "air_base": 40,
    "naval_base": 17,
    "military_base": 4,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 23,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 2,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 8,
      "satisfaction": 52
    },
    "income": {
      "rate": 29,
      "satisfaction": 61
    },
    "customs": {
      "rate": 10,
      "satisfaction": 86
    },
    "environment": {
      "rate": 32,
      "satisfaction": 88
    },
    "other": {
      "rate": 27,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 95,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 3,
    "commercial": 17,
    "industrial": 53
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
      "soft_power": 22,
      "hard_power": 28,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    "agreements": [
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 26,
    "security": 14,
    "finance": 24,
    "environment": 60
  }
};
