import { CountryData } from "../../types";

export const republik_zambia: CountryData = {
  "name_en": "Zambia",
  "capital": "Lusaka",
  "name_id": "Republik zambia",
  "lon": 30,
  "lat": -15,
  "flag": "🇿🇲",
  "pop": "10M",
  "budget": 144000000000,
  "income": "525.000.000 / 525 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 1,
    "hydro_plant": 28,
    "nuclear_plant": 25,
    "power_grid": 69,
    "solar_plant": 27,
    "thermal_plant": 37,
    "wind_plant": 32,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 15,
    "bicycle_path": 5,
    "bus_terminal": 4,
    "helipad": 5,
    "highway": 40,
    "internet_coverage": 76,
    "railway": 24,
    "road_quality": 63,
    "sea_port": 7,
    "subway": 37,
    "tech_stack": 71,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 3,
    "coal": 39,
    "copper": 32,
    "gas": 18,
    "gold": 3,
    "iron_ore": 5,
    "lithium": 21,
    "nickel": 6,
    "oil": 12,
    "rare_earth": 14,
    "salt": 24,
    "strength": 29.660809349923973,
    "uranium": 16,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 38,
    "car": 32,
    "concrete_cement": 37,
    "fertilizer": 36,
    "instant_noodle": 3,
    "meat_processing": 5,
    "mineral_water": 27,
    "motorcycle": 8,
    "pharmacy": 25,
    "semiconductor": 28,
    "smelter": 35,
    "strength": 3.076011687404966,
    "sugar": 21,
    "wood": 39,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 11,
    "chicken": 4,
    "dairy_cow": 31,
    "fish": 9,
    "poultry": 31,
    "sheep_goat": 2,
    "shellfish": 12,
    "shrimp": 17,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 17,
    "coffee": 29,
    "corn": 19,
    "palm_oil": 2,
    "rice": 11,
    "soy": 34,
    "strength": 20.660809349923973,
    "sugarcane": 31,
    "tea": 26,
    "tubers": 11,
    "vegetables": 10,
    "wheat": 24,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 1,
    "barracks": 17,
    "armory": 28,
    "tank_hangar": 35,
    "military_academy": 15,
    "budget": 27,
    "personnel": 13255,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 189,
        "apc": 10,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 60,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
      },
      "total_unit": 1,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 3,
    "military_air_base": 21,
    "military_naval_base": 31,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 10,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 34,
      "sabotage_mission": 6,
      "territory_management": 28,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 2,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 23,
      "elementary_school": 18,
      "middle_school": 17,
      "high_school": 3,
      "university": 23,
      "education_institute": 1,
      "laboratory": 18,
      "observatory": 24,
      "research_center": 38,
      "development_center": 36,
      "literacy": 69,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 9,
      "diagnostic_center": 18,
      "hospital_beds": 736,
      "life_expectancy": 24,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 12,
      "racing_circuit": 15,
      "stadium": 23,
      "international_stadium": 24,
      "olympic_score": 20,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 40,
      "court": 17,
      "prosecution_office": 33,
      "police_station": 12,
      "police_car_fleet": 6474,
      "police_academy": 31,
      "corruption_index": 70,
      "security_index": 88,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 21,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 9,
          "kamera_surveillance": 18,
          "pusat_forensik": 1,
        },
        "response_time": 16,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 37,
    "tanks": 15,
    "aircraft": 28,
    "naval": 10,
    "air_base": 25,
    "naval_base": 29,
    "military_base": 15,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 36,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 20,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 24,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 22,
      "satisfaction": 88,
    },
    "other": {
      "rate": 19,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 51,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 39,
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
      "soft_power": 1,
      "hard_power": 13,
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
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 38,
    "education": 14,
    "security": 32,
    "finance": 31,
    "environment": 60,
  }
};
