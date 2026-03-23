import { CountryData } from "../../types";

export const kuwait: CountryData = {
  "name_en": "Kuwait",
  "capital": "Kuwait City",
  "name_id": "Kuwait",
  "lon": 45.75,
  "lat": 29.5,
  "flag": "🇰🇼",
  "pop": "10M",
  "budget": 474000000000000,
  "income": "597.000.000.000.000 / 597 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 25,
    "hydro_plant": 8,
    "solar_plant": 40,
    "thermal_plant": 21,
    "gas_plant": 7,
    "wind_plant": 24,
    "power_grid": 85,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 38,
    "subway": 35,
    "railway": 12,
    "highway": 37,
    "road_quality": 79,
    "sea_port": 27,
    "airport": 17,
    "bus_terminal": 18,
    "helipad": 5,
    "internet_coverage": 58,
    "tech_stack": 83,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 10,
    "uranium": 13,
    "coal": 39,
    "oil": 15,
    "gas": 24,
    "salt": 14,
    "nickel": 9,
    "lithium": 31,
    "aluminum": 16,
    "copper": 33,
    "rare_earth": 29,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 14,
    "car": 9,
    "motorcycle": 27,
    "smelter": 28,
    "concrete_cement": 18,
    "wood": 27,
    "mineral_water": 28,
    "sugar": 11,
    "bread": 6,
    "pharmacy": 6,
    "fertilizer": 25,
    "meat_processing": 34,
    "instant_noodle": 22,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 7,
    "poultry": 22,
    "dairy_cow": 32,
    "beef_cow": 18,
    "sheep_goat": 7,
    "shrimp": 20,
    "fish": 18,
    "shellfish": 36,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 37,
    "wheat": 37,
    "corn": 6,
    "tubers": 33,
    "soy": 27,
    "palm_oil": 30,
    "tea": 37,
    "coffee": 40,
    "cocoa": 14,
    "sugarcane": 39,
    "vegetables": 38,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 38,
    "armory": 18,
    "tank_hangar": 32,
    "military_academy": 22,
    "budget": 11,
    "personnel": 20884,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 25,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 8,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 24,
    "military_air_base": 3,
    "military_naval_base": 4,
    "arms_factory": 10,
    "nuclear_status": false,
    "space_program": 12,
    "cyber_defense": 34,
    "intelligence": 27,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 31,
      "sabotage_mission": 32,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 34,
      "radar_network": 13,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 20,
      "elementary_school": 14,
      "middle_school": 25,
      "high_school": 22,
      "university": 36,
      "education_institute": 37,
      "laboratory": 36,
      "observatory": 19,
      "research_center": 22,
      "development_center": 27,
      "literacy": 55,
      "research_index": 0
    },
    "health": {
      "large_hospital": 15,
      "small_hospital": 23,
      "diagnostic_center": 21,
      "hospital_beds": 4289,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 17,
      "racing_circuit": 19,
      "stadium": 28,
      "international_stadium": 9,
      "olympic_score": 14,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 19,
      "prosecution_office": 18,
      "police_station": 32,
      "police_car_fleet": 8824,
      "police_academy": 32,
      "corruption_index": 72,
      "security_index": 68,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 37,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 18,
    "tanks": 24,
    "aircraft": 37,
    "naval": 29,
    "air_base": 5,
    "naval_base": 34,
    "military_base": 1,
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
      "rate": 19,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 23,
      "satisfaction": 52
    },
    "income": {
      "rate": 21,
      "satisfaction": 61
    },
    "customs": {
      "rate": 13,
      "satisfaction": 86
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88
    },
    "other": {
      "rate": 6,
      "satisfaction": 93
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
    "residential": 32,
    "commercial": 10,
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
      "soft_power": 36,
      "hard_power": 6,
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
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 21,
    "education": 17,
    "security": 24,
    "finance": 25,
    "environment": 60
  }
};
