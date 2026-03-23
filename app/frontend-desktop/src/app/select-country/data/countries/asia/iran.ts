import { CountryData } from "../../types";

export const iran: CountryData = {
  "name_en": "Iran",
  "capital": "Tehran",
  "name_id": "Iran",
  "lon": 53,
  "lat": 32,
  "flag": "🇮🇷",
  "pop": "10M",
  "budget": 647000000000,
  "income": "404.000.000 / 404 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 22,
    "hydro_plant": 14,
    "solar_plant": 36,
    "thermal_plant": 30,
    "gas_plant": 22,
    "wind_plant": 7,
    "power_grid": 80,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 8,
    "subway": 27,
    "railway": 20,
    "highway": 35,
    "road_quality": 67,
    "sea_port": 22,
    "airport": 30,
    "bus_terminal": 21,
    "helipad": 33,
    "internet_coverage": 83,
    "tech_stack": 68,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 37,
    "uranium": 16,
    "coal": 31,
    "oil": 15,
    "gas": 18,
    "salt": 2,
    "nickel": 26,
    "lithium": 7,
    "aluminum": 27,
    "copper": 14,
    "rare_earth": 27,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 20,
    "motorcycle": 9,
    "smelter": 17,
    "concrete_cement": 11,
    "wood": 4,
    "mineral_water": 13,
    "sugar": 28,
    "bread": 30,
    "pharmacy": 27,
    "fertilizer": 30,
    "meat_processing": 7,
    "instant_noodle": 39,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 23,
    "poultry": 36,
    "dairy_cow": 20,
    "beef_cow": 9,
    "sheep_goat": 10,
    "shrimp": 21,
    "fish": 29,
    "shellfish": 14,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 21,
    "wheat": 1,
    "corn": 18,
    "tubers": 31,
    "soy": 7,
    "palm_oil": 16,
    "tea": 4,
    "coffee": 39,
    "cocoa": 40,
    "sugarcane": 1,
    "vegetables": 8,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 26,
    "armory": 17,
    "tank_hangar": 4,
    "military_academy": 5,
    "budget": 18,
    "personnel": 23614,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 12,
        "apc": 16,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 1,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 13,
        "helikopter_serang": 35,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 16,
    "military_naval_base": 5,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 13,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 28,
      "spy_mission": 19,
      "sabotage_mission": 6,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 39,
      "radar_network": 26,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 33,
      "elementary_school": 2,
      "middle_school": 13,
      "high_school": 25,
      "university": 5,
      "education_institute": 16,
      "laboratory": 17,
      "observatory": 6,
      "research_center": 12,
      "development_center": 35,
      "literacy": 71,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 1,
      "diagnostic_center": 30,
      "hospital_beds": 8403,
      "life_expectancy": 11,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 34,
      "stadium": 33,
      "international_stadium": 36,
      "olympic_score": 23,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 16,
      "prosecution_office": 35,
      "police_station": 3,
      "police_car_fleet": 9271,
      "police_academy": 17,
      "corruption_index": 74,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 5,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 29,
          "kamera_surveillance": 12,
          "pusat_forensik": 1
        },
        "response_time": 39,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 31,
    "tanks": 29,
    "aircraft": 23,
    "naval": 9,
    "air_base": 8,
    "naval_base": 35,
    "military_base": 8,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 14,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 30,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52
    },
    "income": {
      "rate": 7,
      "satisfaction": 61
    },
    "customs": {
      "rate": 11,
      "satisfaction": 86
    },
    "environment": {
      "rate": 13,
      "satisfaction": 88
    },
    "other": {
      "rate": 18,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 7,
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
      "soft_power": 14,
      "hard_power": 38,
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
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 5,
    "education": 16,
    "security": 24,
    "finance": 4,
    "environment": 60
  }
};
