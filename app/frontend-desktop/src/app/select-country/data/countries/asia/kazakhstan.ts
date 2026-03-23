import { CountryData } from "../../types";

export const kazakhstan: CountryData = {
  "name_en": "Kazakhstan",
  "capital": "Astana",
  "name_id": "Kazakhstan",
  "lon": 68,
  "lat": 48,
  "flag": "🇰🇿",
  "pop": "10M",
  "budget": "Rp 455 T",
  "income": "Rp 421 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 23,
    "hydro_plant": 13,
    "solar_plant": 10,
    "thermal_plant": 36,
    "gas_plant": 5,
    "wind_plant": 16,
    "power_grid": 55,
    "bicycle_path": 14,
    "subway": 27,
    "railway": 14,
    "highway": 16,
    "road_quality": 94,
    "sea_port": 33,
    "airport": 20,
    "bus_terminal": 25,
    "helipad": 16,
    "internet_coverage": 82,
    "tech_stack": 94,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 19,
    "uranium": 32,
    "coal": 33,
    "oil": 2,
    "gas": 15,
    "salt": 26,
    "nickel": 14,
    "lithium": 19,
    "aluminum": 33,
    "copper": 32,
    "rare_earth": 28,
    "iron_ore": 12,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 37,
    "car": 40,
    "motorcycle": 24,
    "smelter": 8,
    "concrete_cement": 21,
    "wood": 12,
    "mineral_water": 12,
    "sugar": 10,
    "bread": 15,
    "pharmacy": 16,
    "fertilizer": 6,
    "meat_processing": 29,
    "instant_noodle": 21,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 39,
    "poultry": 8,
    "dairy_cow": 25,
    "beef_cow": 29,
    "sheep_goat": 2,
    "shrimp": 28,
    "fish": 4,
    "shellfish": 22,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 33,
    "wheat": 10,
    "corn": 27,
    "tubers": 14,
    "soy": 25,
    "palm_oil": 13,
    "tea": 13,
    "coffee": 14,
    "cocoa": 2,
    "sugarcane": 33,
    "vegetables": 35,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 7,
    "barracks": 24,
    "armory": 32,
    "tank_hangar": 18,
    "military_academy": 32,
    "budget": 11,
    "personnel": 7149,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 13,
        "apc": 39,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 34,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 20,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 38,
    "military_air_base": 1,
    "military_naval_base": 23,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 20,
    "cyber_defense": 6,
    "intelligence": 30,
    "strategic_operations": {
      "attack_mission": 14,
      "spy_mission": 2,
      "sabotage_mission": 40,
      "territory_management": 37,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 33,
      "radar_network": 7,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 19,
      "elementary_school": 38,
      "middle_school": 1,
      "high_school": 39,
      "university": 15,
      "education_institute": 19,
      "laboratory": 22,
      "observatory": 40,
      "research_center": 8,
      "development_center": 36,
      "literacy": 85,
      "research_index": 0
    },
    "health": {
      "large_hospital": 7,
      "small_hospital": 17,
      "diagnostic_center": 13,
      "hospital_beds": 9427,
      "life_expectancy": 7,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 11,
      "racing_circuit": 4,
      "stadium": 23,
      "international_stadium": 9,
      "olympic_score": 24,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 9,
      "court": 37,
      "prosecution_office": 8,
      "police_station": 4,
      "police_car_fleet": 4297,
      "police_academy": 22,
      "corruption_index": 71,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 10,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 30,
          "pusat_forensik": 1
        },
        "response_time": 5,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 1,
    "tanks": 36,
    "aircraft": 3,
    "naval": 9,
    "air_base": 9,
    "naval_base": 17,
    "military_base": 13,
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
      "rate": 32,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52
    },
    "income": {
      "rate": 13,
      "satisfaction": 61
    },
    "customs": {
      "rate": 22,
      "satisfaction": 86
    },
    "environment": {
      "rate": 13,
      "satisfaction": 88
    },
    "other": {
      "rate": 17,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 76,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 10,
    "commercial": 35,
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
      "soft_power": 38,
      "hard_power": 20,
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
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 26,
    "security": 11,
    "finance": 32,
    "environment": 60
  }
};
