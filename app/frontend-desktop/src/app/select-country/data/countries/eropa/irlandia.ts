import { CountryData } from "../../types";

export const irlandia: CountryData = {
  "name_en": "Ireland",
  "capital": "Dublin",
  "name_id": "Irlandia",
  "lon": -8,
  "lat": 53,
  "flag": "🇮🇪",
  "pop": "10M",
  "budget": "Rp 382 T",
  "income": "Rp 201 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 27,
    "hydro_plant": 30,
    "solar_plant": 30,
    "thermal_plant": 3,
    "gas_plant": 16,
    "wind_plant": 32,
    "power_grid": 64,
    "bicycle_path": 33,
    "subway": 32,
    "railway": 20,
    "highway": 28,
    "road_quality": 91,
    "sea_port": 11,
    "airport": 23,
    "bus_terminal": 10,
    "helipad": 1,
    "internet_coverage": 86,
    "tech_stack": 57,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 39,
    "uranium": 20,
    "coal": 9,
    "oil": 17,
    "gas": 3,
    "salt": 4,
    "nickel": 14,
    "lithium": 20,
    "aluminum": 1,
    "copper": 37,
    "rare_earth": 19,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 38,
    "motorcycle": 24,
    "smelter": 12,
    "concrete_cement": 34,
    "wood": 35,
    "mineral_water": 27,
    "sugar": 39,
    "bread": 15,
    "pharmacy": 12,
    "fertilizer": 24,
    "meat_processing": 23,
    "instant_noodle": 29,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 17,
    "dairy_cow": 2,
    "beef_cow": 22,
    "sheep_goat": 21,
    "shrimp": 32,
    "fish": 31,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 37,
    "wheat": 31,
    "corn": 8,
    "tubers": 29,
    "soy": 16,
    "palm_oil": 4,
    "tea": 3,
    "coffee": 10,
    "cocoa": 17,
    "sugarcane": 19,
    "vegetables": 16,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 16,
    "armory": 15,
    "tank_hangar": 3,
    "military_academy": 28,
    "budget": 33,
    "personnel": 17072,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 34,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 32,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2
      },
      "total_unit": 31,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 6,
    "military_air_base": 19,
    "military_naval_base": 26,
    "arms_factory": 21,
    "nuclear_status": false,
    "space_program": 17,
    "cyber_defense": 13,
    "intelligence": 27,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 19,
      "sabotage_mission": 35,
      "territory_management": 19,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 7,
      "radar_network": 17,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 23,
      "elementary_school": 22,
      "middle_school": 37,
      "high_school": 24,
      "university": 35,
      "education_institute": 1,
      "laboratory": 10,
      "observatory": 37,
      "research_center": 10,
      "development_center": 25,
      "literacy": 92,
      "research_index": 0
    },
    "health": {
      "large_hospital": 34,
      "small_hospital": 1,
      "diagnostic_center": 12,
      "hospital_beds": 3299,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 17,
      "racing_circuit": 3,
      "stadium": 3,
      "international_stadium": 17,
      "olympic_score": 15,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 37,
      "court": 24,
      "prosecution_office": 29,
      "police_station": 13,
      "police_car_fleet": 4069,
      "police_academy": 11,
      "corruption_index": 93,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 12,
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
    "infantry": 35,
    "tanks": 36,
    "aircraft": 16,
    "naval": 8,
    "air_base": 30,
    "naval_base": 21,
    "military_base": 6,
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
      "rate": 2,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52
    },
    "income": {
      "rate": 3,
      "satisfaction": 61
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86
    },
    "environment": {
      "rate": 39,
      "satisfaction": 88
    },
    "other": {
      "rate": 40,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 66,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 39,
    "commercial": 21,
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
      "soft_power": 29,
      "hard_power": 5,
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
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 27,
    "education": 10,
    "security": 18,
    "finance": 4,
    "environment": 60
  }
};
