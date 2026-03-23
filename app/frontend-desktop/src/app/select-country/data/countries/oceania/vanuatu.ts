import { CountryData } from "../../types";

export const vanuatu: CountryData = {
  "name_en": "Vanuatu",
  "capital": "Port Vila",
  "name_id": "Vanuatu",
  "lon": 167,
  "lat": -16,
  "flag": "🇻🇺",
  "pop": "10M",
  "budget": 10,
  "income": "28",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 8,
    "hydro_plant": 35,
    "solar_plant": 16,
    "thermal_plant": 5,
    "gas_plant": 11,
    "wind_plant": 7,
    "power_grid": 50,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 4,
    "subway": 20,
    "railway": 38,
    "highway": 1,
    "road_quality": 76,
    "sea_port": 38,
    "airport": 9,
    "bus_terminal": 20,
    "helipad": 14,
    "internet_coverage": 62,
    "tech_stack": 83,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 28,
    "uranium": 5,
    "coal": 16,
    "oil": 15,
    "gas": 31,
    "salt": 38,
    "nickel": 28,
    "lithium": 30,
    "aluminum": 9,
    "copper": 12,
    "rare_earth": 19,
    "iron_ore": 37,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 40,
    "car": 13,
    "motorcycle": 2,
    "smelter": 35,
    "concrete_cement": 7,
    "wood": 23,
    "mineral_water": 4,
    "sugar": 4,
    "bread": 23,
    "pharmacy": 22,
    "fertilizer": 3,
    "meat_processing": 27,
    "instant_noodle": 35,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 13,
    "poultry": 9,
    "dairy_cow": 21,
    "beef_cow": 9,
    "sheep_goat": 4,
    "shrimp": 6,
    "fish": 25,
    "shellfish": 36,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 29,
    "corn": 35,
    "tubers": 33,
    "soy": 8,
    "palm_oil": 26,
    "tea": 19,
    "coffee": 12,
    "cocoa": 38,
    "sugarcane": 4,
    "vegetables": 19,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 8,
    "armory": 36,
    "tank_hangar": 36,
    "military_academy": 12,
    "budget": 11,
    "personnel": 27037,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 141,
        "apc": 46,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 116,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 147,
        "helikopter_serang": 133,
        "pesawat_pengintai": 2
      },
      "total_unit": 16,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 20,
    "military_naval_base": 19,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 28,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 39,
      "sabotage_mission": 6,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 40,
      "elementary_school": 26,
      "middle_school": 25,
      "high_school": 31,
      "university": 23,
      "education_institute": 31,
      "laboratory": 30,
      "observatory": 36,
      "research_center": 18,
      "development_center": 39,
      "literacy": 87,
      "research_index": 0
    },
    "health": {
      "large_hospital": 24,
      "small_hospital": 6,
      "diagnostic_center": 27,
      "hospital_beds": 5109,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 29,
      "stadium": 39,
      "international_stadium": 6,
      "olympic_score": 22,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 4,
      "prosecution_office": 33,
      "police_station": 14,
      "police_car_fleet": 7080,
      "police_academy": 35,
      "corruption_index": 50,
      "security_index": 69,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 25,
          "pusat_forensik": 1
        },
        "response_time": 12,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 29,
    "tanks": 33,
    "aircraft": 12,
    "naval": 8,
    "air_base": 15,
    "naval_base": 17,
    "military_base": 26,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 28,
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
      "rate": 10,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86
    },
    "environment": {
      "rate": 10,
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
    "satisfaction": 87,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 2,
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
      "soft_power": 4,
      "hard_power": 10,
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
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 1,
    "education": 10,
    "security": 39,
    "finance": 34,
    "environment": 60
  }
};
