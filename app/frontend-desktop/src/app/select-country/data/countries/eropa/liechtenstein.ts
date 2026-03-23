import { CountryData } from "../../types";

export const liechtenstein: CountryData = {
  "name_en": "Liechtenstein",
  "capital": "Vaduz",
  "name_id": "Liechtenstein",
  "lon": 9.31,
  "lat": 47.08,
  "flag": "🇱🇮",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 24,
    "solar_plant": 16,
    "thermal_plant": 18,
    "gas_plant": 17,
    "wind_plant": 2,
    "power_grid": 50,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 14,
    "subway": 26,
    "railway": 32,
    "highway": 16,
    "road_quality": 89,
    "sea_port": 7,
    "airport": 39,
    "bus_terminal": 28,
    "helipad": 39,
    "internet_coverage": 82,
    "tech_stack": 56,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 30,
    "uranium": 7,
    "coal": 16,
    "oil": 20,
    "gas": 19,
    "salt": 34,
    "nickel": 7,
    "lithium": 8,
    "aluminum": 34,
    "copper": 28,
    "rare_earth": 38,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 37,
    "car": 38,
    "motorcycle": 30,
    "smelter": 13,
    "concrete_cement": 6,
    "wood": 15,
    "mineral_water": 23,
    "sugar": 10,
    "bread": 25,
    "pharmacy": 32,
    "fertilizer": 18,
    "meat_processing": 21,
    "instant_noodle": 32,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 14,
    "poultry": 23,
    "dairy_cow": 15,
    "beef_cow": 22,
    "sheep_goat": 3,
    "shrimp": 1,
    "fish": 2,
    "shellfish": 10,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 7,
    "wheat": 13,
    "corn": 32,
    "tubers": 18,
    "soy": 16,
    "palm_oil": 22,
    "tea": 16,
    "coffee": 27,
    "cocoa": 4,
    "sugarcane": 19,
    "vegetables": 11,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 25,
    "armory": 27,
    "tank_hangar": 7,
    "military_academy": 10,
    "budget": 34,
    "personnel": 21650,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 27,
        "apc": 34,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 17,
        "helikopter_serang": 31,
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
    "command_center": 21,
    "military_air_base": 35,
    "military_naval_base": 10,
    "arms_factory": 12,
    "nuclear_status": false,
    "space_program": 22,
    "cyber_defense": 16,
    "intelligence": 25,
    "strategic_operations": {
      "attack_mission": 21,
      "spy_mission": 24,
      "sabotage_mission": 35,
      "territory_management": 19,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 6,
      "radar_network": 11,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 5,
      "middle_school": 11,
      "high_school": 23,
      "university": 30,
      "education_institute": 21,
      "laboratory": 37,
      "observatory": 1,
      "research_center": 7,
      "development_center": 7,
      "literacy": 51,
      "research_index": 0
    },
    "health": {
      "large_hospital": 34,
      "small_hospital": 11,
      "diagnostic_center": 24,
      "hospital_beds": 4491,
      "life_expectancy": 10,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 26,
      "stadium": 37,
      "international_stadium": 3,
      "olympic_score": 39,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 27,
      "court": 8,
      "prosecution_office": 1,
      "police_station": 26,
      "police_car_fleet": 548,
      "police_academy": 17,
      "corruption_index": 79,
      "security_index": 89,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 4,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 3,
          "pusat_forensik": 1
        },
        "response_time": 8,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 3,
    "tanks": 22,
    "aircraft": 26,
    "naval": 7,
    "air_base": 28,
    "naval_base": 12,
    "military_base": 18,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 26,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 18,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 3,
      "satisfaction": 52
    },
    "income": {
      "rate": 39,
      "satisfaction": 61
    },
    "customs": {
      "rate": 8,
      "satisfaction": 86
    },
    "environment": {
      "rate": 21,
      "satisfaction": 88
    },
    "other": {
      "rate": 13,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 21,
    "commercial": 15,
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
      "soft_power": 1,
      "hard_power": 28,
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
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 24,
    "education": 31,
    "security": 20,
    "finance": 29,
    "environment": 60
  }
};
