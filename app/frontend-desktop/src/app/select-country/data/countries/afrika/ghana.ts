import { CountryData } from "../../types";

export const ghana: CountryData = {
  "name_en": "Ghana",
  "capital": "Accra",
  "name_id": "Ghana",
  "lon": -2,
  "lat": 8,
  "flag": "🇬🇭",
  "pop": "35M",
  "budget": 739,
  "income": "2111",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 35,
    "hydro_plant": 25,
    "nuclear_plant": 7,
    "power_grid": 77,
    "solar_plant": 2,
    "thermal_plant": 17,
    "wind_plant": 36,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 12,
    "bicycle_path": 27,
    "bus_terminal": 4,
    "helipad": 5,
    "highway": 9,
    "internet_coverage": 65,
    "railway": 16,
    "road_quality": 58,
    "sea_port": 26,
    "subway": 14,
    "tech_stack": 60,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 32,
    "coal": 30,
    "copper": 3,
    "gas": 26,
    "gold": 65,
    "iron_ore": 28,
    "lithium": 26,
    "nickel": 2,
    "oil": 40,
    "rare_earth": 8,
    "salt": 8,
    "strength": 29.660809349923973,
    "uranium": 21,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 29,
    "car": 36,
    "concrete_cement": 13,
    "fertilizer": 38,
    "instant_noodle": 21,
    "meat_processing": 24,
    "mineral_water": 38,
    "motorcycle": 7,
    "pharmacy": 6,
    "semiconductor": 8,
    "smelter": 38,
    "strength": 3.076011687404966,
    "sugar": 13,
    "wood": 40,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 15,
    "chicken": 16,
    "dairy_cow": 33,
    "fish": 35,
    "poultry": 19,
    "sheep_goat": 4,
    "shellfish": 16,
    "shrimp": 37,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 80,
    "coffee": 39,
    "corn": 24,
    "palm_oil": 22,
    "rice": 39,
    "soy": 11,
    "strength": 20.660809349923973,
    "sugarcane": 9,
    "tea": 37,
    "tubers": 29,
    "vegetables": 27,
    "wheat": 3,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 27,
    "armory": 14,
    "tank_hangar": 20,
    "military_academy": 18,
    "budget": 2635,
    "personnel": 15287,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 7,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 31,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
      },
      "total_unit": 30,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 19,
    "military_air_base": 3,
    "military_naval_base": 19,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 33,
    "cyber_defense": 18,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 1,
      "sabotage_mission": 28,
      "territory_management": 12,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 36,
      "radar_network": 25,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 16,
      "middle_school": 24,
      "high_school": 3,
      "university": 37,
      "education_institute": 39,
      "laboratory": 6,
      "observatory": 18,
      "research_center": 23,
      "development_center": 18,
      "literacy": 56,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 9,
      "diagnostic_center": 29,
      "hospital_beds": 5430,
      "life_expectancy": 18,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 9,
      "stadium": 13,
      "international_stadium": 24,
      "olympic_score": 6,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 33,
      "court": 25,
      "prosecution_office": 20,
      "police_station": 9,
      "police_car_fleet": 5653,
      "police_academy": 19,
      "corruption_index": 65,
      "security_index": 60,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 9,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 36,
          "kamera_surveillance": 39,
          "pusat_forensik": 1,
        },
        "response_time": 7,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 5,
    "aircraft": 37,
    "naval": 17,
    "air_base": 13,
    "naval_base": 36,
    "military_base": 9,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 3,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 21,
      "satisfaction": 52,
    },
    "income": {
      "rate": 29,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 14,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88,
    },
    "other": {
      "rate": 17,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 63,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 5,
    "commercial": 5,
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
      "soft_power": 17,
      "hard_power": 21,
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
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 6,
    "security": 22,
    "finance": 17,
    "environment": 60,
  }
};
