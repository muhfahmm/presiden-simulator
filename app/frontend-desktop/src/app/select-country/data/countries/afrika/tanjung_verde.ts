import { CountryData } from "../../types";

export const tanjung_verde: CountryData = {
  "name_en": "Cape Verde",
  "capital": "Praia",
  "name_id": "Tanjung verde",
  "lon": -24,
  "lat": 16,
  "flag": "🇨🇻",
  "pop": "10M",
  "budget": 193000000000,
  "income": "321.000.000 / 321 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 16,
    "hydro_plant": 5,
    "nuclear_plant": 36,
    "power_grid": 76,
    "solar_plant": 4,
    "thermal_plant": 10,
    "wind_plant": 36,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 12,
    "bicycle_path": 36,
    "bus_terminal": 10,
    "helipad": 18,
    "highway": 5,
    "internet_coverage": 83,
    "railway": 23,
    "road_quality": 84,
    "sea_port": 5,
    "subway": 20,
    "tech_stack": 62,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 22,
    "coal": 3,
    "copper": 13,
    "gas": 12,
    "gold": 29,
    "iron_ore": 20,
    "lithium": 33,
    "nickel": 22,
    "oil": 36,
    "rare_earth": 20,
    "salt": 10,
    "strength": 29.660809349923973,
    "uranium": 30,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 16,
    "car": 33,
    "concrete_cement": 12,
    "fertilizer": 27,
    "instant_noodle": 30,
    "meat_processing": 26,
    "mineral_water": 9,
    "motorcycle": 20,
    "pharmacy": 5,
    "semiconductor": 17,
    "smelter": 15,
    "strength": 3.076011687404966,
    "sugar": 29,
    "wood": 15,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 18,
    "chicken": 26,
    "dairy_cow": 37,
    "fish": 27,
    "poultry": 9,
    "sheep_goat": 33,
    "shellfish": 17,
    "shrimp": 38,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 37,
    "coffee": 6,
    "corn": 14,
    "palm_oil": 9,
    "rice": 19,
    "soy": 11,
    "strength": 20.660809349923973,
    "sugarcane": 31,
    "tea": 14,
    "tubers": 22,
    "vegetables": 40,
    "wheat": 35,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 24,
    "armory": 21,
    "tank_hangar": 15,
    "military_academy": 31,
    "budget": 1,
    "personnel": 29185,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 188,
        "apc": 23,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 54,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 10,
        "helikopter_serang": 81,
        "pesawat_pengintai": 2,
      },
      "total_unit": 6,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 2,
    "military_air_base": 2,
    "military_naval_base": 30,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 4,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 25,
      "sabotage_mission": 18,
      "territory_management": 20,
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
      "kindergarten": 1,
      "elementary_school": 8,
      "middle_school": 15,
      "high_school": 3,
      "university": 7,
      "education_institute": 13,
      "laboratory": 31,
      "observatory": 12,
      "research_center": 36,
      "development_center": 11,
      "literacy": 95,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 16,
      "diagnostic_center": 20,
      "hospital_beds": 4031,
      "life_expectancy": 37,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 12,
      "racing_circuit": 5,
      "stadium": 24,
      "international_stadium": 39,
      "olympic_score": 19,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 39,
      "court": 19,
      "prosecution_office": 23,
      "police_station": 18,
      "police_car_fleet": 5017,
      "police_academy": 37,
      "corruption_index": 79,
      "security_index": 51,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 24,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 31,
          "kamera_surveillance": 12,
          "pusat_forensik": 1,
        },
        "response_time": 23,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 8,
    "aircraft": 16,
    "naval": 34,
    "air_base": 35,
    "naval_base": 27,
    "military_base": 2,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 31,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 31,
      "satisfaction": 52,
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 18,
      "satisfaction": 88,
    },
    "other": {
      "rate": 20,
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
    "residential": 16,
    "commercial": 23,
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
      "soft_power": 38,
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
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 17,
    "education": 4,
    "security": 39,
    "finance": 13,
    "environment": 60,
  }
};
