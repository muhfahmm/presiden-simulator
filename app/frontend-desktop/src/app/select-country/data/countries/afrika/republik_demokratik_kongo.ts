import { CountryData } from "../../types";

export const republik_demokratik_kongo: CountryData = {
  "name_en": "DR Congo",
  "capital": "Kinshasa",
  "name_id": "Republik demokratik kongo",
  "lon": 25,
  "lat": 0,
  "flag": "🇨🇩",
  "pop": "112M",
  "budget": 603,
  "income": "1722",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 29,
    "hydro_plant": 36,
    "nuclear_plant": 25,
    "power_grid": 81,
    "solar_plant": 16,
    "thermal_plant": 26,
    "wind_plant": 14,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 29,
    "bicycle_path": 20,
    "bus_terminal": 30,
    "helipad": 3,
    "highway": 4,
    "internet_coverage": 50,
    "railway": 29,
    "road_quality": 62,
    "sea_port": 34,
    "subway": 21,
    "tech_stack": 82,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 29,
    "coal": 40,
    "copper": 90,
    "gas": 7,
    "gold": 60,
    "iron_ore": 26,
    "lithium": 38,
    "nickel": 35,
    "oil": 19,
    "rare_earth": 85,
    "salt": 30,
    "strength": 29.660809349923973,
    "uranium": 14,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 38,
    "car": 20,
    "concrete_cement": 25,
    "fertilizer": 34,
    "instant_noodle": 9,
    "meat_processing": 21,
    "mineral_water": 6,
    "motorcycle": 39,
    "pharmacy": 38,
    "semiconductor": 1,
    "smelter": 13,
    "strength": 3.076011687404966,
    "sugar": 38,
    "wood": 37,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 37,
    "chicken": 11,
    "dairy_cow": 13,
    "fish": 34,
    "poultry": 2,
    "sheep_goat": 25,
    "shellfish": 40,
    "shrimp": 31,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 37,
    "coffee": 14,
    "corn": 26,
    "palm_oil": 32,
    "rice": 11,
    "soy": 32,
    "strength": 20.660809349923973,
    "sugarcane": 9,
    "tea": 30,
    "tubers": 32,
    "vegetables": 34,
    "wheat": 26,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 24,
    "armory": 21,
    "tank_hangar": 22,
    "military_academy": 20,
    "budget": 2,
    "personnel": 11536,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 54,
        "apc": 82,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 55,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 64,
        "helikopter_serang": 188,
        "pesawat_pengintai": 2,
      },
      "total_unit": 5,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 11,
    "military_air_base": 2,
    "military_naval_base": 15,
    "arms_factory": 38,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 5,
    "intelligence": 26,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 26,
      "sabotage_mission": 15,
      "territory_management": 17,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 1,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 34,
      "middle_school": 40,
      "high_school": 8,
      "university": 19,
      "education_institute": 38,
      "laboratory": 12,
      "observatory": 27,
      "research_center": 13,
      "development_center": 40,
      "literacy": 84,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 40,
      "diagnostic_center": 22,
      "hospital_beds": 7571,
      "life_expectancy": 30,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 26,
      "stadium": 16,
      "international_stadium": 26,
      "olympic_score": 6,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 8,
      "court": 1,
      "prosecution_office": 40,
      "police_station": 23,
      "police_car_fleet": 7514,
      "police_academy": 31,
      "corruption_index": 76,
      "security_index": 70,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 32,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 37,
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
    "infantry": 32,
    "tanks": 37,
    "aircraft": 40,
    "naval": 9,
    "air_base": 13,
    "naval_base": 20,
    "military_base": 16,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 29,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 4,
      "satisfaction": 88,
    },
    "other": {
      "rate": 9,
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
    "residential": 28,
    "commercial": 37,
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
      "soft_power": 25,
      "hard_power": 19,
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
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 28,
    "education": 24,
    "security": 9,
    "finance": 34,
    "environment": 60,
  }
};
