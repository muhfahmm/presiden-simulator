import { CountryData } from "../../types";

export const israel: CountryData = {
  "name_en": "Israel",
  "capital": "Jerusalem",
  "name_id": "Israel",
  "lon": 35.13,
  "lat": 31.47,
  "flag": "🇮🇱",
  "pop": "10M",
  "budget": "Rp 270 T",
  "income": "Rp 704 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 40,
    "hydro_plant": 33,
    "solar_plant": 39,
    "thermal_plant": 31,
    "gas_plant": 35,
    "wind_plant": 26,
    "power_grid": 74,
    "bicycle_path": 40,
    "subway": 29,
    "railway": 10,
    "highway": 32,
    "road_quality": 69,
    "sea_port": 7,
    "airport": 3,
    "bus_terminal": 31,
    "helipad": 11,
    "internet_coverage": 72,
    "tech_stack": 64,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 16,
    "uranium": 39,
    "coal": 18,
    "oil": 27,
    "gas": 26,
    "salt": 11,
    "nickel": 34,
    "lithium": 12,
    "aluminum": 10,
    "copper": 31,
    "rare_earth": 17,
    "iron_ore": 20,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 8,
    "car": 37,
    "motorcycle": 32,
    "smelter": 21,
    "concrete_cement": 39,
    "wood": 12,
    "mineral_water": 14,
    "sugar": 27,
    "bread": 10,
    "pharmacy": 16,
    "fertilizer": 13,
    "meat_processing": 18,
    "instant_noodle": 29,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 39,
    "dairy_cow": 8,
    "beef_cow": 12,
    "sheep_goat": 15,
    "shrimp": 11,
    "fish": 16,
    "shellfish": 20,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 21,
    "wheat": 32,
    "corn": 12,
    "tubers": 15,
    "soy": 38,
    "palm_oil": 28,
    "tea": 9,
    "coffee": 24,
    "cocoa": 30,
    "sugarcane": 28,
    "vegetables": 13,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 5,
    "barracks": 35,
    "armory": 5,
    "tank_hangar": 36,
    "military_academy": 38,
    "budget": 39,
    "personnel": 19082,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 14,
        "apc": 39,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 16,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 36,
    "military_air_base": 14,
    "military_naval_base": 21,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 17,
    "cyber_defense": 18,
    "intelligence": 27,
    "strategic_operations": {
      "attack_mission": 3,
      "spy_mission": 14,
      "sabotage_mission": 27,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 23,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 37,
      "elementary_school": 7,
      "middle_school": 7,
      "high_school": 2,
      "university": 28,
      "education_institute": 15,
      "laboratory": 11,
      "observatory": 5,
      "research_center": 31,
      "development_center": 33,
      "literacy": 76,
      "research_index": 0
    },
    "health": {
      "large_hospital": 27,
      "small_hospital": 22,
      "diagnostic_center": 4,
      "hospital_beds": 2454,
      "life_expectancy": 18,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 37,
      "stadium": 8,
      "international_stadium": 33,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 36,
      "court": 22,
      "prosecution_office": 11,
      "police_station": 31,
      "police_car_fleet": 5678,
      "police_academy": 28,
      "corruption_index": 79,
      "security_index": 61,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 24,
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
    "infantry": 31,
    "tanks": 28,
    "aircraft": 8,
    "naval": 17,
    "air_base": 37,
    "naval_base": 4,
    "military_base": 7,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 6,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 14,
      "satisfaction": 52
    },
    "income": {
      "rate": 17,
      "satisfaction": 61
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86
    },
    "environment": {
      "rate": 17,
      "satisfaction": 88
    },
    "other": {
      "rate": 37,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 85,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 1,
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
      "soft_power": 37,
      "hard_power": 17,
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
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 16,
    "security": 39,
    "finance": 31,
    "environment": 60
  }
};
