import { CountryData } from "../../types";

export const inggris: CountryData = {
  "name_en": "United Kingdom",
  "capital": "London",
  "name_id": "Inggris",
  "lon": -2,
  "lat": 54,
  "flag": "🇬🇧",
  "pop": "10M",
  "budget": "Rp 532 T",
  "income": "Rp 431 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 1,
    "hydro_plant": 3,
    "solar_plant": 14,
    "thermal_plant": 5,
    "gas_plant": 22,
    "wind_plant": 28,
    "power_grid": 90,
    "bicycle_path": 6,
    "subway": 29,
    "railway": 11,
    "highway": 6,
    "road_quality": 78,
    "sea_port": 1,
    "airport": 3,
    "bus_terminal": 17,
    "helipad": 34,
    "internet_coverage": 70,
    "tech_stack": 81,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 32,
    "uranium": 10,
    "coal": 10,
    "oil": 12,
    "gas": 25,
    "salt": 4,
    "nickel": 32,
    "lithium": 12,
    "aluminum": 4,
    "copper": 16,
    "rare_earth": 37,
    "iron_ore": 31,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 14,
    "car": 31,
    "motorcycle": 40,
    "smelter": 5,
    "concrete_cement": 12,
    "wood": 20,
    "mineral_water": 11,
    "sugar": 4,
    "bread": 9,
    "pharmacy": 15,
    "fertilizer": 4,
    "meat_processing": 34,
    "instant_noodle": 37,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 35,
    "poultry": 37,
    "dairy_cow": 38,
    "beef_cow": 25,
    "sheep_goat": 12,
    "shrimp": 40,
    "fish": 29,
    "shellfish": 36,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 6,
    "wheat": 13,
    "corn": 23,
    "tubers": 3,
    "soy": 31,
    "palm_oil": 29,
    "tea": 6,
    "coffee": 8,
    "cocoa": 11,
    "sugarcane": 21,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 16,
    "barracks": 6,
    "armory": 9,
    "tank_hangar": 1,
    "military_academy": 26,
    "budget": 1,
    "personnel": 11285,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 12,
        "apc": 115,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 83,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 186,
        "helikopter_serang": 102,
        "pesawat_pengintai": 2
      },
      "total_unit": 14,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 25,
    "military_air_base": 15,
    "military_naval_base": 27,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 28,
    "cyber_defense": 30,
    "intelligence": 37,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 6,
      "sabotage_mission": 25,
      "territory_management": 11,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 10,
      "elementary_school": 17,
      "middle_school": 31,
      "high_school": 5,
      "university": 9,
      "education_institute": 1,
      "laboratory": 24,
      "observatory": 28,
      "research_center": 3,
      "development_center": 30,
      "literacy": 93,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 32,
      "diagnostic_center": 20,
      "hospital_beds": 3243,
      "life_expectancy": 12,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 19,
      "racing_circuit": 40,
      "stadium": 25,
      "international_stadium": 14,
      "olympic_score": 40,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 11,
      "court": 39,
      "prosecution_office": 25,
      "police_station": 2,
      "police_car_fleet": 9587,
      "police_academy": 26,
      "corruption_index": 89,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 16,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 29,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 5,
    "tanks": 10,
    "aircraft": 39,
    "naval": 6,
    "air_base": 27,
    "naval_base": 34,
    "military_base": 22,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 16,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 16,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52
    },
    "income": {
      "rate": 39,
      "satisfaction": 61
    },
    "customs": {
      "rate": 35,
      "satisfaction": 86
    },
    "environment": {
      "rate": 31,
      "satisfaction": 88
    },
    "other": {
      "rate": 7,
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
    "residential": 20,
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
      "soft_power": 3,
      "hard_power": 29,
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
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 32,
    "education": 31,
    "security": 5,
    "finance": 2,
    "environment": 60
  }
};
