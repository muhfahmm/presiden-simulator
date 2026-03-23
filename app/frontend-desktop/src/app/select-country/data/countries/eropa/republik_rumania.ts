import { CountryData } from "../../types";

export const republik_rumania: CountryData = {
  "name_en": "Romania",
  "capital": "Bucharest",
  "name_id": "Republik rumania",
  "lon": 25,
  "lat": 46,
  "flag": "🇷🇴",
  "pop": "10M",
  "budget": 519000000000000,
  "income": "552.000.000.000.000 / 552 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 34,
    "hydro_plant": 4,
    "solar_plant": 19,
    "thermal_plant": 23,
    "gas_plant": 2,
    "wind_plant": 31,
    "power_grid": 91,
    "bicycle_path": 31,
    "subway": 7,
    "railway": 22,
    "highway": 30,
    "road_quality": 81,
    "sea_port": 19,
    "airport": 3,
    "bus_terminal": 1,
    "helipad": 29,
    "internet_coverage": 56,
    "tech_stack": 77,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 18,
    "uranium": 38,
    "coal": 14,
    "oil": 32,
    "gas": 13,
    "salt": 1,
    "nickel": 10,
    "lithium": 16,
    "aluminum": 4,
    "copper": 10,
    "rare_earth": 30,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 3,
    "motorcycle": 9,
    "smelter": 20,
    "concrete_cement": 5,
    "wood": 40,
    "mineral_water": 29,
    "sugar": 1,
    "bread": 19,
    "pharmacy": 36,
    "fertilizer": 3,
    "meat_processing": 40,
    "instant_noodle": 20,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 17,
    "poultry": 24,
    "dairy_cow": 35,
    "beef_cow": 13,
    "sheep_goat": 10,
    "shrimp": 27,
    "fish": 12,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 4,
    "wheat": 10,
    "corn": 34,
    "tubers": 27,
    "soy": 29,
    "palm_oil": 5,
    "tea": 39,
    "coffee": 16,
    "cocoa": 37,
    "sugarcane": 30,
    "vegetables": 40,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 3,
    "barracks": 1,
    "armory": 4,
    "tank_hangar": 31,
    "military_academy": 26,
    "budget": 37,
    "personnel": 12938,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 49,
        "apc": 53,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 159,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 74,
        "helikopter_serang": 192,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 28,
    "military_naval_base": 30,
    "arms_factory": 9,
    "nuclear_status": false,
    "space_program": 33,
    "cyber_defense": 23,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 17,
      "sabotage_mission": 11,
      "territory_management": 10,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 1,
      "elementary_school": 7,
      "middle_school": 29,
      "high_school": 10,
      "university": 1,
      "education_institute": 32,
      "laboratory": 6,
      "observatory": 39,
      "research_center": 6,
      "development_center": 29,
      "literacy": 52,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 13,
      "diagnostic_center": 33,
      "hospital_beds": 4839,
      "life_expectancy": 21,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 39,
      "stadium": 24,
      "international_stadium": 28,
      "olympic_score": 16,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 35,
      "prosecution_office": 4,
      "police_station": 1,
      "police_car_fleet": 7557,
      "police_academy": 32,
      "corruption_index": 62,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 10,
          "pusat_forensik": 1
        },
        "response_time": 30,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 19,
    "tanks": 33,
    "aircraft": 28,
    "naval": 33,
    "air_base": 12,
    "naval_base": 19,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 40,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 13,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 21,
      "satisfaction": 52
    },
    "income": {
      "rate": 28,
      "satisfaction": 61
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86
    },
    "environment": {
      "rate": 9,
      "satisfaction": 88
    },
    "other": {
      "rate": 31,
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
    "residential": 5,
    "commercial": 40,
    "industrial": 53
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 33,
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
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 16,
    "education": 17,
    "security": 19,
    "finance": 26,
    "environment": 60
  }
};
