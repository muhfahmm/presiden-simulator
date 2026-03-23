import { CountryData } from "../../types";

export const vietnam: CountryData = {
  "name_en": "Vietnam",
  "capital": "Hanoi",
  "name_id": "Vietnam",
  "lon": 107.83333333,
  "lat": 16.16666666,
  "flag": "🇻🇳",
  "pop": "10M",
  "budget": 4181,
  "income": "11945",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 37,
    "solar_plant": 13,
    "thermal_plant": 4,
    "gas_plant": 40,
    "wind_plant": 23,
    "power_grid": 92,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 16,
    "railway": 15,
    "highway": 7,
    "road_quality": 85,
    "sea_port": 22,
    "airport": 32,
    "bus_terminal": 11,
    "helipad": 9,
    "internet_coverage": 74,
    "tech_stack": 77,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 38,
    "uranium": 9,
    "coal": 8,
    "oil": 10,
    "gas": 3,
    "salt": 26,
    "nickel": 6,
    "lithium": 31,
    "aluminum": 2,
    "copper": 26,
    "rare_earth": 37,
    "iron_ore": 26,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 7,
    "motorcycle": 21,
    "smelter": 7,
    "concrete_cement": 4,
    "wood": 1,
    "mineral_water": 17,
    "sugar": 35,
    "bread": 28,
    "pharmacy": 27,
    "fertilizer": 39,
    "meat_processing": 23,
    "instant_noodle": 5,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 30,
    "poultry": 39,
    "dairy_cow": 4,
    "beef_cow": 38,
    "sheep_goat": 5,
    "shrimp": 16,
    "fish": 9,
    "shellfish": 25,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 11,
    "corn": 3,
    "tubers": 35,
    "soy": 5,
    "palm_oil": 35,
    "tea": 37,
    "coffee": 25,
    "cocoa": 7,
    "sugarcane": 7,
    "vegetables": 13,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 29,
    "barracks": 10,
    "armory": 33,
    "tank_hangar": 13,
    "military_academy": 24,
    "budget": 16439,
    "personnel": 9297,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 58,
        "apc": 12,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 169,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 159,
        "helikopter_serang": 112,
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
    "command_center": 18,
    "military_air_base": 19,
    "military_naval_base": 34,
    "arms_factory": 38,
    "nuclear_status": false,
    "space_program": 20,
    "cyber_defense": 5,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 40,
      "spy_mission": 16,
      "sabotage_mission": 9,
      "territory_management": 27,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 29,
      "middle_school": 36,
      "high_school": 5,
      "university": 18,
      "education_institute": 20,
      "laboratory": 13,
      "observatory": 23,
      "research_center": 25,
      "development_center": 15,
      "literacy": 74,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 2,
      "diagnostic_center": 4,
      "hospital_beds": 7588,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 32,
      "racing_circuit": 13,
      "stadium": 29,
      "international_stadium": 28,
      "olympic_score": 40,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 28,
      "prosecution_office": 29,
      "police_station": 8,
      "police_car_fleet": 6043,
      "police_academy": 8,
      "corruption_index": 68,
      "security_index": 68,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 19,
          "sepeda_motor": 1,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 16,
          "pusat_forensik": 1
        },
        "response_time": 8,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 8,
    "tanks": 10,
    "aircraft": 39,
    "naval": 15,
    "air_base": 10,
    "naval_base": 8,
    "military_base": 8,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 37,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 13,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 20,
      "satisfaction": 52
    },
    "income": {
      "rate": 24,
      "satisfaction": 61
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88
    },
    "other": {
      "rate": 1,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 93,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 26,
    "commercial": 39,
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
      "soft_power": 10,
      "hard_power": 3,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 28,
    "education": 31,
    "security": 4,
    "finance": 5,
    "environment": 60
  }
};
