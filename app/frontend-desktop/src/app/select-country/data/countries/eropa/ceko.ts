import { CountryData } from "../../types";

export const ceko: CountryData = {
  "name_en": "Czechia",
  "capital": "Prague",
  "name_id": "Ceko",
  "lon": 15.5,
  "lat": 49.75,
  "flag": "🇨🇿",
  "pop": "10M",
  "budget": 12146,
  "income": "12.146 / 12146 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 39,
    "solar_plant": 30,
    "thermal_plant": 34,
    "gas_plant": 35,
    "wind_plant": 13,
    "power_grid": 84,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 5,
    "railway": 36,
    "highway": 40,
    "road_quality": 87,
    "sea_port": 38,
    "airport": 38,
    "bus_terminal": 25,
    "helipad": 28,
    "internet_coverage": 59,
    "tech_stack": 65,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 18,
    "uranium": 5,
    "coal": 29,
    "oil": 36,
    "gas": 37,
    "salt": 6,
    "nickel": 15,
    "lithium": 11,
    "aluminum": 24,
    "copper": 30,
    "rare_earth": 33,
    "iron_ore": 33,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 31,
    "car": 32,
    "motorcycle": 20,
    "smelter": 23,
    "concrete_cement": 16,
    "wood": 26,
    "mineral_water": 1,
    "sugar": 24,
    "bread": 3,
    "pharmacy": 11,
    "fertilizer": 16,
    "meat_processing": 5,
    "instant_noodle": 1,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 37,
    "poultry": 33,
    "dairy_cow": 4,
    "beef_cow": 15,
    "sheep_goat": 12,
    "shrimp": 3,
    "fish": 30,
    "shellfish": 6,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 5,
    "wheat": 23,
    "corn": 18,
    "tubers": 39,
    "soy": 25,
    "palm_oil": 36,
    "tea": 33,
    "coffee": 13,
    "cocoa": 37,
    "sugarcane": 6,
    "vegetables": 5,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 9,
    "armory": 2,
    "tank_hangar": 6,
    "military_academy": 6,
    "budget": 12146,
    "personnel": 16863,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 33,
        "apc": 15,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 4,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 10,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 14,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 23,
    "military_air_base": 1,
    "military_naval_base": 34,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 15,
    "cyber_defense": 29,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 24,
      "sabotage_mission": 29,
      "territory_management": 5,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 18,
      "radar_network": 14,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 30,
      "middle_school": 6,
      "high_school": 26,
      "university": 12,
      "education_institute": 24,
      "laboratory": 9,
      "observatory": 13,
      "research_center": 27,
      "development_center": 37,
      "literacy": 87,
      "research_index": 0
    },
    "health": {
      "large_hospital": 21,
      "small_hospital": 9,
      "diagnostic_center": 31,
      "hospital_beds": 1217,
      "life_expectancy": 19,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 14,
      "stadium": 29,
      "international_stadium": 10,
      "olympic_score": 17,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 34,
      "court": 29,
      "prosecution_office": 29,
      "police_station": 28,
      "police_car_fleet": 1808,
      "police_academy": 7,
      "corruption_index": 66,
      "security_index": 92,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 18,
          "pusat_forensik": 1
        },
        "response_time": 21,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 30,
    "aircraft": 19,
    "naval": 19,
    "air_base": 14,
    "naval_base": 5,
    "military_base": 22,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 22,
      "satisfaction": 52
    },
    "income": {
      "rate": 25,
      "satisfaction": 61
    },
    "customs": {
      "rate": 9,
      "satisfaction": 86
    },
    "environment": {
      "rate": 13,
      "satisfaction": 88
    },
    "other": {
      "rate": 25,
      "satisfaction": 93
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
    "residential": 16,
    "commercial": 8,
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
      "soft_power": 2,
      "hard_power": 26,
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
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 15,
    "education": 8,
    "security": 39,
    "finance": 23,
    "environment": 60
  }
};
