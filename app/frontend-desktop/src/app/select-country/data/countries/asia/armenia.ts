import { CountryData } from "../../types";

export const armenia: CountryData = {
  "name_en": "Armenia",
  "capital": "Yerevan",
  "name_id": "Armenia",
  "lon": 44.51,
  "lat": 40.19,
  "flag": "🇦🇲",
  "pop": "81M",
  "budget": 214,
  "income": "611",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 10,
    "hydro_plant": 13,
    "solar_plant": 17,
    "thermal_plant": 39,
    "gas_plant": 2,
    "wind_plant": 21,
    "power_grid": 85,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 21,
    "subway": 32,
    "railway": 36,
    "highway": 20,
    "road_quality": 86,
    "sea_port": 17,
    "airport": 24,
    "bus_terminal": 19,
    "helipad": 39,
    "internet_coverage": 58,
    "tech_stack": 94,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 13,
    "uranium": 34,
    "coal": 5,
    "oil": 35,
    "gas": 27,
    "salt": 28,
    "nickel": 12,
    "lithium": 19,
    "aluminum": 25,
    "copper": 33,
    "rare_earth": 36,
    "iron_ore": 40,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 24,
    "motorcycle": 38,
    "smelter": 19,
    "concrete_cement": 26,
    "wood": 34,
    "mineral_water": 16,
    "sugar": 20,
    "bread": 40,
    "pharmacy": 12,
    "fertilizer": 21,
    "meat_processing": 15,
    "instant_noodle": 8,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 31,
    "poultry": 39,
    "dairy_cow": 29,
    "beef_cow": 32,
    "sheep_goat": 38,
    "shrimp": 4,
    "fish": 6,
    "shellfish": 12,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 16,
    "corn": 7,
    "tubers": 37,
    "soy": 8,
    "palm_oil": 18,
    "tea": 18,
    "coffee": 1,
    "cocoa": 36,
    "sugarcane": 15,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 40,
    "armory": 11,
    "tank_hangar": 27,
    "military_academy": 38,
    "budget": 908,
    "personnel": 13691,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 18,
        "apc": 29,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 23,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 40,
        "helikopter_serang": 2,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 37,
    "military_air_base": 37,
    "military_naval_base": 17,
    "arms_factory": 28,
    "nuclear_status": false,
    "space_program": 36,
    "cyber_defense": 11,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 14,
      "sabotage_mission": 19,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 37,
      "radar_network": 16,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 40,
      "elementary_school": 40,
      "middle_school": 33,
      "high_school": 24,
      "university": 17,
      "education_institute": 23,
      "laboratory": 12,
      "observatory": 3,
      "research_center": 4,
      "development_center": 27,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 15,
      "small_hospital": 2,
      "diagnostic_center": 18,
      "hospital_beds": 3658,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 32,
      "racing_circuit": 18,
      "stadium": 18,
      "international_stadium": 13,
      "olympic_score": 7,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 31,
      "prosecution_office": 12,
      "police_station": 5,
      "police_car_fleet": 8740,
      "police_academy": 39,
      "corruption_index": 58,
      "security_index": 55,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 10,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 35,
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
    "infantry": 16,
    "tanks": 12,
    "aircraft": 11,
    "naval": 11,
    "air_base": 15,
    "naval_base": 36,
    "military_base": 40,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 4,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 9,
      "satisfaction": 52
    },
    "income": {
      "rate": 40,
      "satisfaction": 61
    },
    "customs": {
      "rate": 14,
      "satisfaction": 86
    },
    "environment": {
      "rate": 24,
      "satisfaction": 88
    },
    "other": {
      "rate": 14,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 81,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 12,
    "commercial": 26,
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
      "soft_power": 30,
      "hard_power": 11,
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
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 40,
    "education": 20,
    "security": 10,
    "finance": 5,
    "environment": 60
  }
};
