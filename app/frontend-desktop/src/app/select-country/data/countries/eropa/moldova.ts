import { CountryData } from "../../types";

export const moldova: CountryData = {
  "name_en": "Moldova",
  "capital": "Chișinău",
  "name_id": "Moldova",
  "lon": 29,
  "lat": 47,
  "flag": "🇲🇩",
  "pop": "10M",
  "budget": 366000000000,
  "income": "415.000.000 / 415 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 22,
    "hydro_plant": 31,
    "solar_plant": 32,
    "thermal_plant": 17,
    "gas_plant": 15,
    "wind_plant": 14,
    "power_grid": 87,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 40,
    "subway": 37,
    "railway": 28,
    "highway": 6,
    "road_quality": 68,
    "sea_port": 24,
    "airport": 20,
    "bus_terminal": 13,
    "helipad": 29,
    "internet_coverage": 90,
    "tech_stack": 54,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 32,
    "coal": 8,
    "oil": 28,
    "gas": 24,
    "salt": 8,
    "nickel": 9,
    "lithium": 29,
    "aluminum": 2,
    "copper": 6,
    "rare_earth": 5,
    "iron_ore": 33,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 26,
    "car": 4,
    "motorcycle": 15,
    "smelter": 7,
    "concrete_cement": 38,
    "wood": 15,
    "mineral_water": 5,
    "sugar": 20,
    "bread": 23,
    "pharmacy": 40,
    "fertilizer": 37,
    "meat_processing": 40,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 22,
    "poultry": 30,
    "dairy_cow": 31,
    "beef_cow": 2,
    "sheep_goat": 3,
    "shrimp": 40,
    "fish": 30,
    "shellfish": 9,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 40,
    "wheat": 35,
    "corn": 32,
    "tubers": 4,
    "soy": 16,
    "palm_oil": 20,
    "tea": 1,
    "coffee": 30,
    "cocoa": 6,
    "sugarcane": 1,
    "vegetables": 36,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 9,
    "barracks": 36,
    "armory": 29,
    "tank_hangar": 16,
    "military_academy": 5,
    "budget": 35,
    "personnel": 12846,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 136,
        "apc": 49,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 94,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 66,
        "helikopter_serang": 93,
        "pesawat_pengintai": 2
      },
      "total_unit": 26,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 9,
    "military_naval_base": 31,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 7,
    "cyber_defense": 6,
    "intelligence": 12,
    "strategic_operations": {
      "attack_mission": 26,
      "spy_mission": 21,
      "sabotage_mission": 35,
      "territory_management": 2,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 32,
      "middle_school": 34,
      "high_school": 25,
      "university": 40,
      "education_institute": 31,
      "laboratory": 9,
      "observatory": 20,
      "research_center": 3,
      "development_center": 6,
      "literacy": 59,
      "research_index": 0
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 14,
      "diagnostic_center": 38,
      "hospital_beds": 3715,
      "life_expectancy": 2,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 29,
      "racing_circuit": 7,
      "stadium": 28,
      "international_stadium": 38,
      "olympic_score": 22,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 39,
      "court": 40,
      "prosecution_office": 40,
      "police_station": 3,
      "police_car_fleet": 9602,
      "police_academy": 13,
      "corruption_index": 57,
      "security_index": 65,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 39,
          "pusat_forensik": 1
        },
        "response_time": 40,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 34,
    "tanks": 22,
    "aircraft": 34,
    "naval": 17,
    "air_base": 13,
    "naval_base": 7,
    "military_base": 37,
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
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 17,
      "satisfaction": 61
    },
    "customs": {
      "rate": 36,
      "satisfaction": 86
    },
    "environment": {
      "rate": 21,
      "satisfaction": 88
    },
    "other": {
      "rate": 33,
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
    "residential": 33,
    "commercial": 1,
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
      "soft_power": 15,
      "hard_power": 7,
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
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 27,
    "security": 22,
    "finance": 9,
    "environment": 60
  }
};
