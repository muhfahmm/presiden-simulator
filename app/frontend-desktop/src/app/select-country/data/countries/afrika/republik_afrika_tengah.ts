import { CountryData } from "../../types";

export const republik_afrika_tengah: CountryData = {
  "name_en": "Central African Republic",
  "capital": "Bangui",
  "name_id": "Republik afrika tengah",
  "lon": 21,
  "lat": 7,
  "flag": "🇨🇫",
  "pop": "10M",
  "budget": 554000000000000,
  "income": "125.000.000.000.000 / 125 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 11,
    "hydro_plant": 20,
    "nuclear_plant": 5,
    "power_grid": 93,
    "solar_plant": 24,
    "thermal_plant": 29,
    "wind_plant": 6,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 30,
    "bicycle_path": 34,
    "bus_terminal": 39,
    "helipad": 24,
    "highway": 21,
    "internet_coverage": 51,
    "railway": 40,
    "road_quality": 87,
    "sea_port": 22,
    "subway": 39,
    "tech_stack": 64,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 16,
    "coal": 32,
    "copper": 36,
    "gas": 25,
    "gold": 27,
    "iron_ore": 22,
    "lithium": 7,
    "nickel": 8,
    "oil": 7,
    "rare_earth": 26,
    "salt": 21,
    "strength": 29.660809349923973,
    "uranium": 22,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 23,
    "car": 19,
    "concrete_cement": 31,
    "fertilizer": 37,
    "instant_noodle": 13,
    "meat_processing": 8,
    "mineral_water": 23,
    "motorcycle": 34,
    "pharmacy": 16,
    "semiconductor": 40,
    "smelter": 5,
    "strength": 3.076011687404966,
    "sugar": 8,
    "wood": 13,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 38,
    "chicken": 6,
    "dairy_cow": 18,
    "fish": 28,
    "poultry": 17,
    "sheep_goat": 23,
    "shellfish": 26,
    "shrimp": 36,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 28,
    "coffee": 25,
    "corn": 19,
    "palm_oil": 1,
    "rice": 12,
    "soy": 10,
    "strength": 20.660809349923973,
    "sugarcane": 6,
    "tea": 38,
    "tubers": 40,
    "vegetables": 29,
    "wheat": 22,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 24,
    "armory": 6,
    "tank_hangar": 17,
    "military_academy": 5,
    "budget": 15,
    "personnel": 12392,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 38,
        "apc": 121,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 133,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 75,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2,
      },
      "total_unit": 23,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 39,
    "military_air_base": 3,
    "military_naval_base": 18,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 24,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 17,
      "sabotage_mission": 32,
      "territory_management": 36,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 8,
      "elementary_school": 36,
      "middle_school": 26,
      "high_school": 35,
      "university": 22,
      "education_institute": 29,
      "laboratory": 38,
      "observatory": 18,
      "research_center": 39,
      "development_center": 32,
      "literacy": 65,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 33,
      "small_hospital": 4,
      "diagnostic_center": 11,
      "hospital_beds": 6319,
      "life_expectancy": 33,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 38,
      "stadium": 4,
      "international_stadium": 29,
      "olympic_score": 30,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 25,
      "court": 30,
      "prosecution_office": 37,
      "police_station": 20,
      "police_car_fleet": 684,
      "police_academy": 17,
      "corruption_index": 72,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 39,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 20,
          "pusat_forensik": 1,
        },
        "response_time": 2,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 36,
    "tanks": 19,
    "aircraft": 37,
    "naval": 33,
    "air_base": 6,
    "naval_base": 30,
    "military_base": 34,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 22,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 30,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 24,
      "satisfaction": 52,
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 25,
      "satisfaction": 88,
    },
    "other": {
      "rate": 25,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 76,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 30,
    "commercial": 33,
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
      "soft_power": 23,
      "hard_power": 20,
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
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 9,
    "education": 38,
    "security": 22,
    "finance": 32,
    "environment": 60,
  }
};
