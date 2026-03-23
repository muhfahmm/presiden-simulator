import { CountryData } from "../../types";

export const guam: CountryData = {
  "name_en": "Guam",
  "capital": "Hagåtña",
  "name_id": "Guam",
  "lon": 144.78333333,
  "lat": 13.46666666,
  "flag": "🇬🇺",
  "pop": "10M",
  "budget": 154000000000,
  "income": "215.000.000 / 215 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 20,
    "hydro_plant": 4,
    "solar_plant": 26,
    "thermal_plant": 19,
    "gas_plant": 32,
    "wind_plant": 22,
    "power_grid": 69,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 9,
    "subway": 16,
    "railway": 24,
    "highway": 35,
    "road_quality": 62,
    "sea_port": 7,
    "airport": 5,
    "bus_terminal": 27,
    "helipad": 13,
    "internet_coverage": 88,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 32,
    "uranium": 16,
    "coal": 22,
    "oil": 20,
    "gas": 35,
    "salt": 29,
    "nickel": 12,
    "lithium": 30,
    "aluminum": 35,
    "copper": 2,
    "rare_earth": 26,
    "iron_ore": 19,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 35,
    "car": 4,
    "motorcycle": 16,
    "smelter": 32,
    "concrete_cement": 8,
    "wood": 19,
    "mineral_water": 28,
    "sugar": 27,
    "bread": 9,
    "pharmacy": 7,
    "fertilizer": 33,
    "meat_processing": 20,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 14,
    "poultry": 33,
    "dairy_cow": 13,
    "beef_cow": 17,
    "sheep_goat": 5,
    "shrimp": 40,
    "fish": 1,
    "shellfish": 31,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 33,
    "corn": 5,
    "tubers": 6,
    "soy": 27,
    "palm_oil": 4,
    "tea": 20,
    "coffee": 9,
    "cocoa": 15,
    "sugarcane": 31,
    "vegetables": 25,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 39,
    "armory": 24,
    "tank_hangar": 2,
    "military_academy": 11,
    "budget": 5,
    "personnel": 17421,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 117,
        "apc": 191,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 75,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 170,
        "helikopter_serang": 187,
        "pesawat_pengintai": 2
      },
      "total_unit": 11,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 26,
    "military_air_base": 32,
    "military_naval_base": 17,
    "arms_factory": 3,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 12,
    "intelligence": 26,
    "strategic_operations": {
      "attack_mission": 12,
      "spy_mission": 22,
      "sabotage_mission": 5,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 23,
      "elementary_school": 20,
      "middle_school": 15,
      "high_school": 38,
      "university": 25,
      "education_institute": 32,
      "laboratory": 29,
      "observatory": 5,
      "research_center": 37,
      "development_center": 39,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 10,
      "small_hospital": 20,
      "diagnostic_center": 11,
      "hospital_beds": 7481,
      "life_expectancy": 30,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 12,
      "stadium": 11,
      "international_stadium": 4,
      "olympic_score": 18,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 37,
      "court": 36,
      "prosecution_office": 15,
      "police_station": 33,
      "police_car_fleet": 5805,
      "police_academy": 37,
      "corruption_index": 60,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 7,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 3,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 36,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 39,
    "tanks": 19,
    "aircraft": 30,
    "naval": 15,
    "air_base": 16,
    "naval_base": 23,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 22,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 14,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52
    },
    "income": {
      "rate": 26,
      "satisfaction": 61
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86
    },
    "environment": {
      "rate": 12,
      "satisfaction": 88
    },
    "other": {
      "rate": 1,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 83,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
    "commercial": 21,
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
      "soft_power": 32,
      "hard_power": 33,
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
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 27,
    "education": 29,
    "security": 38,
    "finance": 32,
    "environment": 60
  }
};
