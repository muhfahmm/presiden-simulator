import { CountryData } from "../../types";

export const republik_zimbabwe: CountryData = {
  "name_en": "Zimbabwe",
  "capital": "Harare",
  "name_id": "Republik zimbabwe",
  "lon": 30,
  "lat": -20,
  "flag": "🇿🇼",
  "pop": "10M",
  "budget": 159000000000000,
  "income": "380.000.000.000.000 / 380 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 20,
    "bicycle_path": 12,
    "bus_terminal": 22,
    "gas_plant": 23,
    "helipad": 10,
    "highway": 25,
    "hydro_plant": 11,
    "internet_coverage": 61,
    "nuclear_plant": 30,
    "power_grid": 66,
    "railway": 17,
    "road_quality": 78,
    "sea_port": 23,
    "solar_plant": 14,
    "subway": 11,
    "tech_stack": 73,
    "thermal_plant": 1,
    "water_access": 74,
    "wind_plant": 1,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 36,
    "coal": 8,
    "copper": 24,
    "gas": 30,
    "gold": 23,
    "iron_ore": 36,
    "lithium": 26,
    "nickel": 21,
    "oil": 6,
    "rare_earth": 40,
    "salt": 17,
    "strength": 29.660809349923973,
    "uranium": 20,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 16,
    "car": 19,
    "concrete_cement": 40,
    "fertilizer": 18,
    "instant_noodle": 37,
    "meat_processing": 25,
    "mineral_water": 25,
    "motorcycle": 16,
    "pharmacy": 16,
    "semiconductor": 11,
    "smelter": 24,
    "strength": 3.076011687404966,
    "sugar": 31,
    "wood": 26,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 40,
    "chicken": 10,
    "dairy_cow": 34,
    "fish": 1,
    "poultry": 9,
    "sheep_goat": 32,
    "shellfish": 21,
    "shrimp": 27,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 22,
    "coffee": 6,
    "corn": 34,
    "palm_oil": 12,
    "rice": 19,
    "soy": 14,
    "strength": 20.660809349923973,
    "sugarcane": 38,
    "tea": 8,
    "tubers": 22,
    "vegetables": 14,
    "wheat": 39,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 35,
    "barracks": 7,
    "armory": 9,
    "tank_hangar": 2,
    "military_academy": 20,
    "budget": 33,
    "personnel": 13156,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 92,
        "apc": 97,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 119,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 120,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
      },
      "total_unit": 11,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 6,
    "military_naval_base": 20,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 1,
    "intelligence": 15,
    "strategic_operations": {
      "attack_mission": 28,
      "spy_mission": 22,
      "sabotage_mission": 39,
      "territory_management": 37,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 3,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 38,
      "elementary_school": 32,
      "middle_school": 5,
      "high_school": 3,
      "university": 19,
      "education_institute": 15,
      "laboratory": 25,
      "observatory": 14,
      "research_center": 39,
      "development_center": 16,
      "literacy": 62,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 33,
      "diagnostic_center": 35,
      "hospital_beds": 2089,
      "life_expectancy": 38,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 12,
      "stadium": 9,
      "international_stadium": 28,
      "olympic_score": 16,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 9,
      "court": 8,
      "prosecution_office": 23,
      "police_station": 6,
      "police_car_fleet": 1107,
      "police_academy": 8,
      "corruption_index": 76,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 35,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 33,
          "pusat_forensik": 1,
        },
        "response_time": 32,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 26,
    "tanks": 32,
    "aircraft": 5,
    "naval": 25,
    "air_base": 24,
    "naval_base": 20,
    "military_base": 4,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 4,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 25,
      "satisfaction": 52,
    },
    "income": {
      "rate": 18,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88,
    },
    "other": {
      "rate": 26,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 58,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 27,
    "industrial": 53,
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
      "soft_power": 2,
      "hard_power": 24,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 31,
    "education": 17,
    "security": 27,
    "finance": 5,
    "environment": 60,
  }
};
