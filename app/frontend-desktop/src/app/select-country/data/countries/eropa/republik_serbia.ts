import { CountryData } from "../../types";

export const republik_serbia: CountryData = {
  "name_en": "Serbia",
  "capital": "Belgrade",
  "name_id": "Republik serbia",
  "lon": 21,
  "lat": 44,
  "flag": "🇷🇸",
  "pop": "10M",
  "budget": "Rp 391 T",
  "income": "Rp 456 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 29,
    "hydro_plant": 32,
    "solar_plant": 28,
    "thermal_plant": 22,
    "gas_plant": 19,
    "wind_plant": 5,
    "power_grid": 59,
    "bicycle_path": 23,
    "subway": 25,
    "railway": 17,
    "highway": 6,
    "road_quality": 63,
    "sea_port": 16,
    "airport": 3,
    "bus_terminal": 2,
    "helipad": 26,
    "internet_coverage": 93,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 27,
    "uranium": 22,
    "coal": 34,
    "oil": 8,
    "gas": 11,
    "salt": 36,
    "nickel": 23,
    "lithium": 38,
    "aluminum": 16,
    "copper": 21,
    "rare_earth": 2,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 23,
    "motorcycle": 20,
    "smelter": 15,
    "concrete_cement": 35,
    "wood": 4,
    "mineral_water": 39,
    "sugar": 27,
    "bread": 31,
    "pharmacy": 20,
    "fertilizer": 21,
    "meat_processing": 30,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 25,
    "dairy_cow": 30,
    "beef_cow": 3,
    "sheep_goat": 22,
    "shrimp": 26,
    "fish": 16,
    "shellfish": 30,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 18,
    "corn": 19,
    "tubers": 10,
    "soy": 19,
    "palm_oil": 24,
    "tea": 8,
    "coffee": 21,
    "cocoa": 34,
    "sugarcane": 34,
    "vegetables": 2,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 6,
    "armory": 8,
    "tank_hangar": 14,
    "military_academy": 5,
    "budget": 15,
    "personnel": 11561,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 108,
        "apc": 117,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 188,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 59,
        "helikopter_serang": 149,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 30,
    "military_air_base": 39,
    "military_naval_base": 29,
    "arms_factory": 10,
    "nuclear_status": false,
    "space_program": 9,
    "cyber_defense": 2,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 3,
      "sabotage_mission": 2,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 13,
      "middle_school": 18,
      "high_school": 24,
      "university": 39,
      "education_institute": 6,
      "laboratory": 10,
      "observatory": 8,
      "research_center": 29,
      "development_center": 25,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 12,
      "diagnostic_center": 23,
      "hospital_beds": 9624,
      "life_expectancy": 13,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 3,
      "stadium": 27,
      "international_stadium": 25,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 19,
      "court": 4,
      "prosecution_office": 8,
      "police_station": 31,
      "police_car_fleet": 7504,
      "police_academy": 37,
      "corruption_index": 94,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 28,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 8,
    "tanks": 18,
    "aircraft": 28,
    "naval": 35,
    "air_base": 34,
    "naval_base": 14,
    "military_base": 20,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 8,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 16,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86
    },
    "environment": {
      "rate": 11,
      "satisfaction": 88
    },
    "other": {
      "rate": 12,
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
    "residential": 28,
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
      "soft_power": 29,
      "hard_power": 30,
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
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 30,
    "education": 3,
    "security": 26,
    "finance": 26,
    "environment": 60
  }
};
