import { CountryData } from "../../types";

export const swedia: CountryData = {
  "name_en": "Sweden",
  "capital": "Stockholm",
  "name_id": "Swedia",
  "lon": 15,
  "lat": 62,
  "flag": "🇸🇪",
  "pop": "10M",
  "budget": 464000000000000,
  "income": "109.000.000.000.000 / 109 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 27,
    "hydro_plant": 28,
    "solar_plant": 34,
    "thermal_plant": 34,
    "gas_plant": 40,
    "wind_plant": 33,
    "power_grid": 83,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 18,
    "subway": 15,
    "railway": 21,
    "highway": 13,
    "road_quality": 80,
    "sea_port": 2,
    "airport": 19,
    "bus_terminal": 10,
    "helipad": 11,
    "internet_coverage": 88,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 21,
    "uranium": 5,
    "coal": 22,
    "oil": 1,
    "gas": 32,
    "salt": 5,
    "nickel": 23,
    "lithium": 15,
    "aluminum": 31,
    "copper": 36,
    "rare_earth": 32,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 20,
    "car": 36,
    "motorcycle": 31,
    "smelter": 2,
    "concrete_cement": 28,
    "wood": 4,
    "mineral_water": 27,
    "sugar": 38,
    "bread": 30,
    "pharmacy": 35,
    "fertilizer": 2,
    "meat_processing": 10,
    "instant_noodle": 16,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 37,
    "dairy_cow": 19,
    "beef_cow": 4,
    "sheep_goat": 30,
    "shrimp": 27,
    "fish": 33,
    "shellfish": 31,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 37,
    "wheat": 27,
    "corn": 19,
    "tubers": 12,
    "soy": 33,
    "palm_oil": 23,
    "tea": 4,
    "coffee": 36,
    "cocoa": 37,
    "sugarcane": 25,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 35,
    "armory": 25,
    "tank_hangar": 37,
    "military_academy": 1,
    "budget": 22,
    "personnel": 6340,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 22,
        "apc": 53,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 84,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 64,
        "helikopter_serang": 59,
        "pesawat_pengintai": 2
      },
      "total_unit": 10,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 15,
    "military_naval_base": 26,
    "arms_factory": 16,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 30,
    "intelligence": 9,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 2,
      "sabotage_mission": 33,
      "territory_management": 13,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 5,
      "elementary_school": 30,
      "middle_school": 4,
      "high_school": 32,
      "university": 38,
      "education_institute": 6,
      "laboratory": 20,
      "observatory": 30,
      "research_center": 27,
      "development_center": 35,
      "literacy": 84,
      "research_index": 0
    },
    "health": {
      "large_hospital": 10,
      "small_hospital": 4,
      "diagnostic_center": 6,
      "hospital_beds": 642,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 29,
      "racing_circuit": 6,
      "stadium": 31,
      "international_stadium": 4,
      "olympic_score": 36,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 2,
      "court": 19,
      "prosecution_office": 22,
      "police_station": 22,
      "police_car_fleet": 5014,
      "police_academy": 1,
      "corruption_index": 79,
      "security_index": 76,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 6,
          "pusat_forensik": 1
        },
        "response_time": 40,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 20,
    "aircraft": 24,
    "naval": 23,
    "air_base": 34,
    "naval_base": 19,
    "military_base": 16,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 4,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 8,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 38,
      "satisfaction": 52
    },
    "income": {
      "rate": 1,
      "satisfaction": 61
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86
    },
    "environment": {
      "rate": 39,
      "satisfaction": 88
    },
    "other": {
      "rate": 24,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 80,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 25,
    "commercial": 32,
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
      "soft_power": 3,
      "hard_power": 2,
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
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 13,
    "education": 8,
    "security": 34,
    "finance": 8,
    "environment": 60
  }
};
