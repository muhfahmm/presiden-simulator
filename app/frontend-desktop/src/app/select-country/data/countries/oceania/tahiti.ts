import { CountryData } from "../../types";

export const tahiti: CountryData = {
  "name_en": "French Polynesia",
  "capital": "Papeetē",
  "name_id": "Tahiti",
  "lon": -140,
  "lat": -15,
  "flag": "🇵🇫",
  "pop": "10M",
  "budget": 379000000000000,
  "income": "220.000.000.000.000 / 220 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 25,
    "hydro_plant": 18,
    "solar_plant": 5,
    "thermal_plant": 35,
    "gas_plant": 8,
    "wind_plant": 24,
    "power_grid": 68,
    "bicycle_path": 17,
    "subway": 30,
    "railway": 25,
    "highway": 36,
    "road_quality": 53,
    "sea_port": 13,
    "airport": 31,
    "bus_terminal": 24,
    "helipad": 16,
    "internet_coverage": 57,
    "tech_stack": 88,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 13,
    "uranium": 29,
    "coal": 39,
    "oil": 23,
    "gas": 12,
    "salt": 9,
    "nickel": 12,
    "lithium": 13,
    "aluminum": 2,
    "copper": 16,
    "rare_earth": 7,
    "iron_ore": 11,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 2,
    "car": 37,
    "motorcycle": 17,
    "smelter": 37,
    "concrete_cement": 28,
    "wood": 33,
    "mineral_water": 33,
    "sugar": 3,
    "bread": 2,
    "pharmacy": 24,
    "fertilizer": 12,
    "meat_processing": 2,
    "instant_noodle": 34,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 27,
    "poultry": 4,
    "dairy_cow": 37,
    "beef_cow": 19,
    "sheep_goat": 18,
    "shrimp": 4,
    "fish": 14,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 6,
    "corn": 3,
    "tubers": 16,
    "soy": 34,
    "palm_oil": 24,
    "tea": 5,
    "coffee": 9,
    "cocoa": 29,
    "sugarcane": 20,
    "vegetables": 10,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 37,
    "barracks": 17,
    "armory": 33,
    "tank_hangar": 18,
    "military_academy": 21,
    "budget": 14,
    "personnel": 15019,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 137,
        "apc": 49,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 166,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 52,
        "helikopter_serang": 191,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 5,
    "military_air_base": 31,
    "military_naval_base": 11,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 2,
    "intelligence": 34,
    "strategic_operations": {
      "attack_mission": 36,
      "spy_mission": 2,
      "sabotage_mission": 1,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 40,
      "elementary_school": 12,
      "middle_school": 17,
      "high_school": 40,
      "university": 33,
      "education_institute": 20,
      "laboratory": 29,
      "observatory": 37,
      "research_center": 9,
      "development_center": 37,
      "literacy": 56,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 13,
      "diagnostic_center": 12,
      "hospital_beds": 3480,
      "life_expectancy": 40,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 1,
      "stadium": 22,
      "international_stadium": 1,
      "olympic_score": 39,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 32,
      "court": 11,
      "prosecution_office": 18,
      "police_station": 39,
      "police_car_fleet": 8885,
      "police_academy": 27,
      "corruption_index": 82,
      "security_index": 94,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 20,
          "kamera_surveillance": 5,
          "pusat_forensik": 1
        },
        "response_time": 14,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 5,
    "aircraft": 30,
    "naval": 26,
    "air_base": 7,
    "naval_base": 40,
    "military_base": 31,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 38,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52
    },
    "income": {
      "rate": 26,
      "satisfaction": 61
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86
    },
    "environment": {
      "rate": 22,
      "satisfaction": 88
    },
    "other": {
      "rate": 2,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 66,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 2,
    "commercial": 27,
    "industrial": 53
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
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 38,
    "education": 10,
    "security": 18,
    "finance": 37,
    "environment": 60
  }
};
