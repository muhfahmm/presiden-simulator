import { CountryData } from "../../types";

export const lebanon: CountryData = {
  "name_en": "Lebanon",
  "capital": "Beirut",
  "name_id": "Lebanon",
  "lon": 35.83333333,
  "lat": 33.83333333,
  "flag": "🇱🇧",
  "pop": "10M",
  "budget": 218000000000000,
  "income": "298.000.000.000.000 / 298 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 26,
    "hydro_plant": 16,
    "solar_plant": 20,
    "thermal_plant": 28,
    "gas_plant": 25,
    "wind_plant": 23,
    "power_grid": 67,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 10,
    "subway": 29,
    "railway": 19,
    "highway": 22,
    "road_quality": 67,
    "sea_port": 17,
    "airport": 37,
    "bus_terminal": 14,
    "helipad": 7,
    "internet_coverage": 52,
    "tech_stack": 50,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 19,
    "uranium": 18,
    "coal": 17,
    "oil": 29,
    "gas": 40,
    "salt": 9,
    "nickel": 23,
    "lithium": 32,
    "aluminum": 29,
    "copper": 27,
    "rare_earth": 30,
    "iron_ore": 40,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 12,
    "motorcycle": 34,
    "smelter": 7,
    "concrete_cement": 27,
    "wood": 18,
    "mineral_water": 4,
    "sugar": 2,
    "bread": 14,
    "pharmacy": 5,
    "fertilizer": 5,
    "meat_processing": 3,
    "instant_noodle": 40,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 18,
    "dairy_cow": 4,
    "beef_cow": 34,
    "sheep_goat": 32,
    "shrimp": 8,
    "fish": 33,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 8,
    "wheat": 32,
    "corn": 25,
    "tubers": 26,
    "soy": 3,
    "palm_oil": 19,
    "tea": 15,
    "coffee": 32,
    "cocoa": 26,
    "sugarcane": 38,
    "vegetables": 28,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 12,
    "armory": 8,
    "tank_hangar": 2,
    "military_academy": 26,
    "budget": 39,
    "personnel": 24392,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 33,
        "apc": 11,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 3,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 34,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 18,
    "military_air_base": 8,
    "military_naval_base": 31,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 17,
    "cyber_defense": 16,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 27,
      "spy_mission": 16,
      "sabotage_mission": 36,
      "territory_management": 15,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 37,
      "radar_network": 35,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 8,
      "elementary_school": 2,
      "middle_school": 1,
      "high_school": 40,
      "university": 22,
      "education_institute": 9,
      "laboratory": 12,
      "observatory": 3,
      "research_center": 22,
      "development_center": 2,
      "literacy": 81,
      "research_index": 0
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 14,
      "diagnostic_center": 34,
      "hospital_beds": 8116,
      "life_expectancy": 10,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 6,
      "racing_circuit": 8,
      "stadium": 27,
      "international_stadium": 22,
      "olympic_score": 6,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 12,
      "court": 5,
      "prosecution_office": 39,
      "police_station": 24,
      "police_car_fleet": 1509,
      "police_academy": 30,
      "corruption_index": 54,
      "security_index": 57,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 9,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 9,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 25,
          "kamera_surveillance": 8,
          "pusat_forensik": 1
        },
        "response_time": 16,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 31,
    "aircraft": 2,
    "naval": 31,
    "air_base": 35,
    "naval_base": 12,
    "military_base": 12,
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
      "rate": 12,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 5,
      "satisfaction": 52
    },
    "income": {
      "rate": 28,
      "satisfaction": 61
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88
    },
    "other": {
      "rate": 15,
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
    "residential": 5,
    "commercial": 35,
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
      "soft_power": 38,
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
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 8,
    "security": 6,
    "finance": 13,
    "environment": 60
  }
};
