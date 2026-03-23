import { CountryData } from "../../types";

export const afrika_selatan: CountryData = {
  "name_en": "South Africa",
  "capital": "Pretoria",
  "name_id": "Afrika Selatan",
  "lon": 24,
  "lat": -29,
  "flag": "🇿🇦",
  "pop": "64M",
  "budget": "Rp 1280 T",
  "income": "Rp 6400 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 3,
    "bicycle_path": 6,
    "bus_terminal": 6,
    "gas_plant": 28,
    "helipad": 4,
    "highway": 12,
    "hydro_plant": 21,
    "internet_coverage": 93,
    "nuclear_plant": 10,
    "power_grid": 56,
    "railway": 18,
    "road_quality": 81,
    "sea_port": 35,
    "solar_plant": 40,
    "subway": 15,
    "tech_stack": 57,
    "thermal_plant": 1,
    "water_access": 74,
    "wind_plant": 6,
  
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 36,
    "coal": 80,
    "copper": 19,
    "gas": 29,
    "gold": 75,
    "iron_ore": 7,
    "lithium": 20,
    "nickel": 31,
    "oil": 5,
    "rare_earth": 60,
    "salt": 3,
    "strength": 29.660809349923973,
    "uranium": 40,
  
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 26,
    "car": 6,
    "concrete_cement": 40,
    "fertilizer": 24,
    "instant_noodle": 10,
    "meat_processing": 12,
    "mineral_water": 19,
    "motorcycle": 39,
    "pharmacy": 38,
    "semiconductor": 37,
    "smelter": 4,
    "strength": 3.076011687404966,
    "sugar": 23,
    "wood": 9,
  
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 36,
    "chicken": 21,
    "dairy_cow": 35,
    "fish": 39,
    "poultry": 22,
    "sheep_goat": 37,
    "shellfish": 23,
    "shrimp": 33,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 3,
    "coffee": 30,
    "corn": 36,
    "palm_oil": 18,
    "rice": 5,
    "soy": 8,
    "strength": 20.660809349923973,
    "sugarcane": 4,
    "tea": 2,
    "tubers": 30,
    "vegetables": 2,
    "wheat": 20,
  
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 25,
    "armory": 16,
    "tank_hangar": 17,
    "military_academy": 22,
    "budget": 39,
    "personnel": 11064,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 21,
        "apc": 26,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 4,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 26,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2,
      },
      "total_unit": 39,
      "readiness": 98,
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 38,
    "military_naval_base": 9,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 23,
    "intelligence": 23,
    "strategic_operations": {
      "attack_mission": 15,
      "spy_mission": 11,
      "sabotage_mission": 26,
      "territory_management": 10,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 37,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 32,
      "elementary_school": 3,
      "middle_school": 34,
      "high_school": 15,
      "university": 2,
      "education_institute": 20,
      "laboratory": 28,
      "observatory": 20,
      "research_center": 40,
      "development_center": 10,
      "literacy": 85,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 22,
      "diagnostic_center": 36,
      "hospital_beds": 2925,
      "life_expectancy": 15,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 21,
      "stadium": 18,
      "international_stadium": 32,
      "olympic_score": 11,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 21,
      "court": 20,
      "prosecution_office": 20,
      "police_station": 6,
      "police_car_fleet": 2079,
      "police_academy": 26,
      "corruption_index": 58,
      "security_index": 52,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 15,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 40,
          "kamera_surveillance": 21,
          "pusat_forensik": 1,
        },
        "response_time": 36,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 31,
    "tanks": 6,
    "aircraft": 29,
    "naval": 21,
    "air_base": 9,
    "naval_base": 19,
    "military_base": 7,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 21,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 1,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52,
    },
    "income": {
      "rate": 39,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 6,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 12,
      "satisfaction": 88,
    },
    "other": {
      "rate": 13,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 53,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
    "commercial": 13,
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
      "soft_power": 34,
      "hard_power": 7,
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
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 13,
    "education": 24,
    "security": 40,
    "finance": 37,
    "environment": 60,
  }
};
