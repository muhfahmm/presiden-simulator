import { CountryData } from "../../types";

export const prancis: CountryData = {
  "name_en": "France",
  "capital": "Paris",
  "name_id": "Prancis",
  "lon": 2,
  "lat": 46,
  "flag": "🇫🇷",
  "pop": "10M",
  "budget": 109565,
  "income": "109.565 / 109565 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 18,
    "hydro_plant": 1,
    "solar_plant": 24,
    "thermal_plant": 27,
    "gas_plant": 3,
    "wind_plant": 16,
    "power_grid": 54,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 5,
    "subway": 2,
    "railway": 27,
    "highway": 27,
    "road_quality": 64,
    "sea_port": 8,
    "airport": 34,
    "bus_terminal": 21,
    "helipad": 12,
    "internet_coverage": 52,
    "tech_stack": 86,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 27,
    "uranium": 24,
    "coal": 31,
    "oil": 37,
    "gas": 8,
    "salt": 19,
    "nickel": 5,
    "lithium": 40,
    "aluminum": 20,
    "copper": 32,
    "rare_earth": 32,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 36,
    "motorcycle": 1,
    "smelter": 36,
    "concrete_cement": 30,
    "wood": 2,
    "mineral_water": 28,
    "sugar": 32,
    "bread": 26,
    "pharmacy": 4,
    "fertilizer": 2,
    "meat_processing": 11,
    "instant_noodle": 38,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 30,
    "poultry": 2,
    "dairy_cow": 29,
    "beef_cow": 19,
    "sheep_goat": 9,
    "shrimp": 24,
    "fish": 36,
    "shellfish": 30,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 7,
    "wheat": 15,
    "corn": 9,
    "tubers": 3,
    "soy": 15,
    "palm_oil": 21,
    "tea": 4,
    "coffee": 9,
    "cocoa": 17,
    "sugarcane": 21,
    "vegetables": 6,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 3,
    "barracks": 31,
    "armory": 33,
    "tank_hangar": 8,
    "military_academy": 2,
    "budget": 109565,
    "personnel": 5623,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 41,
        "apc": 14,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 106,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 43,
        "helikopter_serang": 84,
        "pesawat_pengintai": 2
      },
      "total_unit": 15,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 5,
    "military_naval_base": 35,
    "arms_factory": 22,
    "nuclear_status": false,
    "space_program": 37,
    "cyber_defense": 25,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 18,
      "sabotage_mission": 22,
      "territory_management": 7,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 7,
      "middle_school": 11,
      "high_school": 8,
      "university": 10,
      "education_institute": 6,
      "laboratory": 23,
      "observatory": 36,
      "research_center": 36,
      "development_center": 24,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 19,
      "small_hospital": 21,
      "diagnostic_center": 24,
      "hospital_beds": 5454,
      "life_expectancy": 5,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 33,
      "racing_circuit": 14,
      "stadium": 9,
      "international_stadium": 32,
      "olympic_score": 10,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 28,
      "court": 13,
      "prosecution_office": 10,
      "police_station": 35,
      "police_car_fleet": 2844,
      "police_academy": 3,
      "corruption_index": 60,
      "security_index": 77,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 37,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 22,
    "aircraft": 20,
    "naval": 33,
    "air_base": 3,
    "naval_base": 28,
    "military_base": 39,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 30,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 30,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52
    },
    "income": {
      "rate": 2,
      "satisfaction": 61
    },
    "customs": {
      "rate": 19,
      "satisfaction": 86
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88
    },
    "other": {
      "rate": 10,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 70,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
    "commercial": 4,
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
      "soft_power": 14,
      "hard_power": 37,
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
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 10,
    "education": 4,
    "security": 18,
    "finance": 25,
    "environment": 60
  }
};
