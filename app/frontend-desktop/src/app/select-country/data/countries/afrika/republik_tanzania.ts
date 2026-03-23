import { CountryData } from "../../types";

export const republik_tanzania: CountryData = {
  "name_en": "Tanzania",
  "capital": "Dodoma",
  "name_id": "Republik tanzania",
  "lon": 35,
  "lat": -6,
  "flag": "🇹🇿",
  "pop": "10M",
  "budget": 238000000000,
  "income": "148.000.000 / 148 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 35,
    "hydro_plant": 9,
    "nuclear_plant": 30,
    "power_grid": 79,
    "solar_plant": 25,
    "thermal_plant": 36,
    "wind_plant": 19,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 14,
    "bicycle_path": 30,
    "bus_terminal": 40,
    "helipad": 1,
    "highway": 14,
    "internet_coverage": 58,
    "railway": 33,
    "road_quality": 56,
    "sea_port": 31,
    "subway": 24,
    "tech_stack": 51,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 17,
    "coal": 12,
    "copper": 8,
    "gas": 1,
    "gold": 9,
    "iron_ore": 16,
    "lithium": 14,
    "nickel": 2,
    "oil": 18,
    "rare_earth": 36,
    "salt": 16,
    "strength": 29.660809349923973,
    "uranium": 35,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 33,
    "car": 30,
    "concrete_cement": 15,
    "fertilizer": 9,
    "instant_noodle": 4,
    "meat_processing": 36,
    "mineral_water": 1,
    "motorcycle": 11,
    "pharmacy": 8,
    "semiconductor": 34,
    "smelter": 10,
    "strength": 3.076011687404966,
    "sugar": 8,
    "wood": 13,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 21,
    "chicken": 6,
    "dairy_cow": 26,
    "fish": 30,
    "poultry": 31,
    "sheep_goat": 38,
    "shellfish": 31,
    "shrimp": 20,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 23,
    "coffee": 7,
    "corn": 21,
    "palm_oil": 6,
    "rice": 19,
    "soy": 11,
    "strength": 20.660809349923973,
    "sugarcane": 40,
    "tea": 4,
    "tubers": 3,
    "vegetables": 19,
    "wheat": 12,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 12,
    "barracks": 31,
    "armory": 2,
    "tank_hangar": 4,
    "military_academy": 27,
    "budget": 39,
    "personnel": 9790,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 53,
        "apc": 45,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 127,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 189,
        "helikopter_serang": 58,
        "pesawat_pengintai": 2,
      },
      "total_unit": 32,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 9,
    "military_air_base": 22,
    "military_naval_base": 19,
    "arms_factory": 15,
    "nuclear_status": false,
    "space_program": 11,
    "cyber_defense": 14,
    "intelligence": 14,
    "strategic_operations": {
      "attack_mission": 3,
      "spy_mission": 34,
      "sabotage_mission": 10,
      "territory_management": 30,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 3,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 2,
      "middle_school": 8,
      "high_school": 17,
      "university": 1,
      "education_institute": 40,
      "laboratory": 6,
      "observatory": 21,
      "research_center": 11,
      "development_center": 26,
      "literacy": 83,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 5,
      "small_hospital": 7,
      "diagnostic_center": 4,
      "hospital_beds": 8507,
      "life_expectancy": 7,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 1,
      "racing_circuit": 3,
      "stadium": 34,
      "international_stadium": 40,
      "olympic_score": 12,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 32,
      "court": 13,
      "prosecution_office": 8,
      "police_station": 27,
      "police_car_fleet": 1318,
      "police_academy": 7,
      "corruption_index": 70,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 36,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 32,
          "kamera_surveillance": 22,
          "pusat_forensik": 1,
        },
        "response_time": 31,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 38,
    "aircraft": 10,
    "naval": 10,
    "air_base": 31,
    "naval_base": 20,
    "military_base": 35,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 31,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 38,
      "satisfaction": 52,
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 33,
      "satisfaction": 88,
    },
    "other": {
      "rate": 24,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 90,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 32,
    "commercial": 6,
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
      "soft_power": 40,
      "hard_power": 11,
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
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 17,
    "education": 34,
    "security": 40,
    "finance": 40,
    "environment": 60,
  }
};
