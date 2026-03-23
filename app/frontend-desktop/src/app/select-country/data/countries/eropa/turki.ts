import { CountryData } from "../../types";

export const turki: CountryData = {
  "name_en": "Turkiye",
  "capital": "Ankara",
  "name_id": "Turki",
  "lon": 35,
  "lat": 39,
  "flag": "🇹🇷",
  "pop": "10M",
  "budget": 38974,
  "income": "38.974 / 38974 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 40,
    "hydro_plant": 13,
    "solar_plant": 33,
    "thermal_plant": 37,
    "gas_plant": 16,
    "wind_plant": 11,
    "power_grid": 77,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 13,
    "subway": 11,
    "railway": 20,
    "highway": 37,
    "road_quality": 73,
    "sea_port": 3,
    "airport": 24,
    "bus_terminal": 16,
    "helipad": 6,
    "internet_coverage": 80,
    "tech_stack": 75,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 26,
    "uranium": 16,
    "coal": 19,
    "oil": 4,
    "gas": 12,
    "salt": 36,
    "nickel": 7,
    "lithium": 4,
    "aluminum": 1,
    "copper": 12,
    "rare_earth": 32,
    "iron_ore": 30,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 24,
    "car": 27,
    "motorcycle": 21,
    "smelter": 23,
    "concrete_cement": 20,
    "wood": 11,
    "mineral_water": 36,
    "sugar": 32,
    "bread": 16,
    "pharmacy": 40,
    "fertilizer": 27,
    "meat_processing": 5,
    "instant_noodle": 27,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 20,
    "poultry": 3,
    "dairy_cow": 33,
    "beef_cow": 38,
    "sheep_goat": 2,
    "shrimp": 23,
    "fish": 18,
    "shellfish": 24,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 32,
    "corn": 12,
    "tubers": 2,
    "soy": 32,
    "palm_oil": 35,
    "tea": 3,
    "coffee": 39,
    "cocoa": 23,
    "sugarcane": 23,
    "vegetables": 10,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 38,
    "barracks": 37,
    "armory": 5,
    "tank_hangar": 4,
    "military_academy": 25,
    "budget": 38974,
    "personnel": 5849,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 40,
        "apc": 146,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 199,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 189,
        "helikopter_serang": 175,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 19,
    "military_air_base": 16,
    "military_naval_base": 12,
    "arms_factory": 2,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 36,
    "intelligence": 7,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 35,
      "sabotage_mission": 40,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 31,
      "elementary_school": 11,
      "middle_school": 38,
      "high_school": 38,
      "university": 1,
      "education_institute": 23,
      "laboratory": 30,
      "observatory": 19,
      "research_center": 33,
      "development_center": 15,
      "literacy": 93,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 4,
      "diagnostic_center": 23,
      "hospital_beds": 7569,
      "life_expectancy": 36,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 39,
      "stadium": 37,
      "international_stadium": 38,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 23,
      "court": 13,
      "prosecution_office": 32,
      "police_station": 26,
      "police_car_fleet": 8169,
      "police_academy": 31,
      "corruption_index": 72,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 17,
          "kamera_surveillance": 11,
          "pusat_forensik": 1
        },
        "response_time": 33,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 11,
    "aircraft": 5,
    "naval": 17,
    "air_base": 22,
    "naval_base": 25,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 28,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 22,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 26,
      "satisfaction": 52
    },
    "income": {
      "rate": 33,
      "satisfaction": 61
    },
    "customs": {
      "rate": 29,
      "satisfaction": 86
    },
    "environment": {
      "rate": 25,
      "satisfaction": 88
    },
    "other": {
      "rate": 38,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 80,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
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
      "soft_power": 35,
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
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 27,
    "education": 22,
    "security": 26,
    "finance": 28,
    "environment": 60
  }
};
