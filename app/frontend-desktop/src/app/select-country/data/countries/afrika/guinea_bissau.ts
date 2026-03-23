import { CountryData } from "../../types";

export const guinea_bissau: CountryData = {
  "name_en": "Guinea-Bissau",
  "capital": "Bissau",
  "name_id": "Guinea-bissau",
  "lon": -15,
  "lat": 12,
  "flag": "🇬🇼",
  "pop": "10M",
  "budget": 520000000000000,
  "income": "241.000.000.000.000 / 241 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 28,
    "hydro_plant": 33,
    "nuclear_plant": 22,
    "power_grid": 56,
    "solar_plant": 21,
    "thermal_plant": 31,
    "wind_plant": 22,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 16,
    "bicycle_path": 38,
    "bus_terminal": 15,
    "helipad": 15,
    "highway": 26,
    "internet_coverage": 68,
    "railway": 22,
    "road_quality": 93,
    "sea_port": 25,
    "subway": 1,
    "tech_stack": 66,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 15,
    "coal": 38,
    "copper": 3,
    "gas": 3,
    "gold": 19,
    "iron_ore": 22,
    "lithium": 15,
    "nickel": 35,
    "oil": 21,
    "rare_earth": 29,
    "salt": 6,
    "strength": 29.660809349923973,
    "uranium": 34,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 29,
    "car": 29,
    "concrete_cement": 3,
    "fertilizer": 24,
    "instant_noodle": 9,
    "meat_processing": 36,
    "mineral_water": 22,
    "motorcycle": 18,
    "pharmacy": 19,
    "semiconductor": 30,
    "smelter": 40,
    "strength": 3.076011687404966,
    "sugar": 1,
    "wood": 27,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 39,
    "chicken": 2,
    "dairy_cow": 37,
    "fish": 9,
    "poultry": 27,
    "sheep_goat": 1,
    "shellfish": 16,
    "shrimp": 5,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 11,
    "coffee": 40,
    "corn": 25,
    "palm_oil": 23,
    "rice": 6,
    "soy": 1,
    "strength": 20.660809349923973,
    "sugarcane": 15,
    "tea": 27,
    "tubers": 16,
    "vegetables": 15,
    "wheat": 32,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 33,
    "armory": 9,
    "tank_hangar": 11,
    "military_academy": 11,
    "budget": 24,
    "personnel": 28830,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 28,
        "apc": 28,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 11,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 17,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
      },
      "total_unit": 16,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 31,
    "military_air_base": 18,
    "military_naval_base": 40,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 24,
    "cyber_defense": 19,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 31,
      "spy_mission": 5,
      "sabotage_mission": 28,
      "territory_management": 32,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 22,
      "radar_network": 19,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 39,
      "elementary_school": 3,
      "middle_school": 15,
      "high_school": 19,
      "university": 40,
      "education_institute": 20,
      "laboratory": 35,
      "observatory": 38,
      "research_center": 6,
      "development_center": 33,
      "literacy": 80,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 26,
      "diagnostic_center": 8,
      "hospital_beds": 1466,
      "life_expectancy": 26,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 4,
      "stadium": 37,
      "international_stadium": 16,
      "olympic_score": 14,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 2,
      "court": 36,
      "prosecution_office": 10,
      "police_station": 28,
      "police_car_fleet": 6154,
      "police_academy": 14,
      "corruption_index": 95,
      "security_index": 92,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 27,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 35,
          "pusat_forensik": 1,
        },
        "response_time": 20,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 35,
    "aircraft": 12,
    "naval": 22,
    "air_base": 30,
    "naval_base": 21,
    "military_base": 32,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
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
      "rate": 21,
      "satisfaction": 52,
    },
    "income": {
      "rate": 12,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
    },
    "other": {
      "rate": 7,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 75,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 26,
    "commercial": 21,
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
      "soft_power": 28,
      "hard_power": 30,
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
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 21,
    "education": 25,
    "security": 25,
    "finance": 32,
    "environment": 60,
  }
};
