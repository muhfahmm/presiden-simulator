import { CountryData } from "../../types";

export const mikronesia: CountryData = {
  "name_en": "Micronesia",
  "capital": "Palikir",
  "name_id": "Mikronesia",
  "lon": 158.25,
  "lat": 6.91666666,
  "flag": "🇫🇲",
  "pop": "10M",
  "budget": 10,
  "income": "15",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 35,
    "hydro_plant": 17,
    "solar_plant": 8,
    "thermal_plant": 15,
    "gas_plant": 36,
    "wind_plant": 5,
    "power_grid": 62,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 27,
    "railway": 29,
    "highway": 18,
    "road_quality": 72,
    "sea_port": 40,
    "airport": 4,
    "bus_terminal": 2,
    "helipad": 12,
    "internet_coverage": 81,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 16,
    "uranium": 36,
    "coal": 20,
    "oil": 26,
    "gas": 39,
    "salt": 30,
    "nickel": 3,
    "lithium": 37,
    "aluminum": 9,
    "copper": 39,
    "rare_earth": 7,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 27,
    "car": 34,
    "motorcycle": 4,
    "smelter": 3,
    "concrete_cement": 33,
    "wood": 36,
    "mineral_water": 3,
    "sugar": 37,
    "bread": 32,
    "pharmacy": 22,
    "fertilizer": 28,
    "meat_processing": 29,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 11,
    "poultry": 3,
    "dairy_cow": 32,
    "beef_cow": 31,
    "sheep_goat": 14,
    "shrimp": 40,
    "fish": 34,
    "shellfish": 40,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 3,
    "wheat": 16,
    "corn": 40,
    "tubers": 30,
    "soy": 21,
    "palm_oil": 7,
    "tea": 11,
    "coffee": 27,
    "cocoa": 39,
    "sugarcane": 19,
    "vegetables": 25,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 30,
    "armory": 17,
    "tank_hangar": 3,
    "military_academy": 2,
    "budget": 24,
    "personnel": 15904,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 82,
        "apc": 60,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 27,
        "helikopter_serang": 163,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 25,
    "military_naval_base": 27,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 22,
    "intelligence": 27,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 36,
      "sabotage_mission": 9,
      "territory_management": 8,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 16,
      "middle_school": 1,
      "high_school": 2,
      "university": 1,
      "education_institute": 8,
      "laboratory": 33,
      "observatory": 40,
      "research_center": 15,
      "development_center": 28,
      "literacy": 86,
      "research_index": 0
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 21,
      "diagnostic_center": 28,
      "hospital_beds": 6619,
      "life_expectancy": 29,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 2,
      "racing_circuit": 28,
      "stadium": 26,
      "international_stadium": 34,
      "olympic_score": 10,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 20,
      "court": 11,
      "prosecution_office": 38,
      "police_station": 40,
      "police_car_fleet": 8682,
      "police_academy": 35,
      "corruption_index": 65,
      "security_index": 93,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 17,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 37,
          "pusat_forensik": 1
        },
        "response_time": 25,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 14,
    "tanks": 19,
    "aircraft": 28,
    "naval": 21,
    "air_base": 24,
    "naval_base": 28,
    "military_base": 34,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 34,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 19,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 12,
      "satisfaction": 52
    },
    "income": {
      "rate": 7,
      "satisfaction": 61
    },
    "customs": {
      "rate": 6,
      "satisfaction": 86
    },
    "environment": {
      "rate": 15,
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
    "satisfaction": 74,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 34,
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
      "soft_power": 9,
      "hard_power": 29,
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
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 5,
    "education": 4,
    "security": 24,
    "finance": 19,
    "environment": 60
  }
};
