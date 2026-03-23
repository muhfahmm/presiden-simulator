import { CountryData } from "../../types";

export const guyana: CountryData = {
  "name_en": "Guyana",
  "capital": "Georgetown",
  "name_id": "Guyana",
  "lon": -59,
  "lat": 5,
  "flag": "🇬🇾",
  "pop": "10M",
  "budget": "Rp 628 T",
  "income": "Rp 972 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 11,
    "hydro_plant": 15,
    "solar_plant": 6,
    "thermal_plant": 1,
    "gas_plant": 14,
    "wind_plant": 24,
    "power_grid": 55,
    "bicycle_path": 27,
    "subway": 11,
    "railway": 10,
    "highway": 14,
    "road_quality": 75,
    "sea_port": 14,
    "airport": 23,
    "bus_terminal": 3,
    "helipad": 16,
    "internet_coverage": 74,
    "tech_stack": 79,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 19,
    "coal": 28,
    "oil": 30,
    "gas": 32,
    "salt": 36,
    "nickel": 31,
    "lithium": 12,
    "aluminum": 36,
    "copper": 27,
    "rare_earth": 29,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 34,
    "car": 5,
    "motorcycle": 4,
    "smelter": 24,
    "concrete_cement": 6,
    "wood": 25,
    "mineral_water": 15,
    "sugar": 3,
    "bread": 4,
    "pharmacy": 13,
    "fertilizer": 29,
    "meat_processing": 17,
    "instant_noodle": 7,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 13,
    "dairy_cow": 35,
    "beef_cow": 15,
    "sheep_goat": 17,
    "shrimp": 5,
    "fish": 22,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 6,
    "wheat": 37,
    "corn": 20,
    "tubers": 24,
    "soy": 23,
    "palm_oil": 34,
    "tea": 16,
    "coffee": 18,
    "cocoa": 18,
    "sugarcane": 8,
    "vegetables": 37,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 1,
    "barracks": 24,
    "armory": 22,
    "tank_hangar": 7,
    "military_academy": 18,
    "budget": 30,
    "personnel": 23186,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 1,
        "apc": 38,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 38,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 11,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 35,
    "military_naval_base": 9,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 19,
    "intelligence": 14,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 3,
      "sabotage_mission": 31,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 32,
      "radar_network": 25,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 14,
      "elementary_school": 24,
      "middle_school": 34,
      "high_school": 14,
      "university": 29,
      "education_institute": 21,
      "laboratory": 36,
      "observatory": 6,
      "research_center": 34,
      "development_center": 16,
      "literacy": 91,
      "research_index": 0
    },
    "health": {
      "large_hospital": 15,
      "small_hospital": 15,
      "diagnostic_center": 19,
      "hospital_beds": 1223,
      "life_expectancy": 14,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 27,
      "stadium": 2,
      "international_stadium": 7,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 31,
      "court": 38,
      "prosecution_office": 5,
      "police_station": 30,
      "police_car_fleet": 1553,
      "police_academy": 32,
      "corruption_index": 66,
      "security_index": 53,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 6,
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
    "aircraft": 27,
    "naval": 37,
    "air_base": 4,
    "naval_base": 13,
    "military_base": 24,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 25,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 11,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52
    },
    "income": {
      "rate": 1,
      "satisfaction": 61
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88
    },
    "other": {
      "rate": 36,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 15,
    "commercial": 30,
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
      "soft_power": 5,
      "hard_power": 39,
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
      { "partner": "Argentina", "type": "Trade", "status": "Active" },
      { "partner": "Kolombia", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Venezuela", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Peru", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 15,
    "education": 26,
    "security": 10,
    "finance": 13,
    "environment": 60
  }
};
