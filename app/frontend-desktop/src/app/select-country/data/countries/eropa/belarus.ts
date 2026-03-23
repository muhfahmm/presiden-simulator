import { CountryData } from "../../types";

export const belarus: CountryData = {
  "name_en": "Belarus",
  "capital": "Minsk",
  "name_id": "Belarus",
  "lon": 28,
  "lat": 53,
  "flag": "🇧🇾",
  "pop": "10M",
  "budget": 23252,
  "income": "23.252 / 23252 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 1,
    "solar_plant": 22,
    "thermal_plant": 28,
    "gas_plant": 34,
    "wind_plant": 38,
    "power_grid": 73,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 1,
    "subway": 21,
    "railway": 1,
    "highway": 22,
    "road_quality": 76,
    "sea_port": 13,
    "airport": 22,
    "bus_terminal": 10,
    "helipad": 31,
    "internet_coverage": 92,
    "tech_stack": 72,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 7,
    "uranium": 37,
    "coal": 12,
    "oil": 3,
    "gas": 14,
    "salt": 32,
    "nickel": 18,
    "lithium": 13,
    "aluminum": 33,
    "copper": 28,
    "rare_earth": 28,
    "iron_ore": 36,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 26,
    "car": 31,
    "motorcycle": 18,
    "smelter": 35,
    "concrete_cement": 18,
    "wood": 3,
    "mineral_water": 29,
    "sugar": 21,
    "bread": 37,
    "pharmacy": 35,
    "fertilizer": 36,
    "meat_processing": 20,
    "instant_noodle": 20,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 13,
    "dairy_cow": 38,
    "beef_cow": 35,
    "sheep_goat": 37,
    "shrimp": 15,
    "fish": 14,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 5,
    "wheat": 37,
    "corn": 7,
    "tubers": 12,
    "soy": 2,
    "palm_oil": 33,
    "tea": 17,
    "coffee": 2,
    "cocoa": 32,
    "sugarcane": 1,
    "vegetables": 5,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 17,
    "armory": 36,
    "tank_hangar": 1,
    "military_academy": 38,
    "budget": 23252,
    "personnel": 5950,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 23,
        "helikopter_serang": 12,
        "pesawat_pengintai": 2
      },
      "total_unit": 7,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 17,
    "military_air_base": 6,
    "military_naval_base": 36,
    "arms_factory": 38,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 10,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 31,
      "sabotage_mission": 15,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 25,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 16,
      "middle_school": 11,
      "high_school": 6,
      "university": 16,
      "education_institute": 13,
      "laboratory": 23,
      "observatory": 33,
      "research_center": 12,
      "development_center": 13,
      "literacy": 90,
      "research_index": 0
    },
    "health": {
      "large_hospital": 29,
      "small_hospital": 10,
      "diagnostic_center": 33,
      "hospital_beds": 4629,
      "life_expectancy": 11,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 37,
      "stadium": 30,
      "international_stadium": 11,
      "olympic_score": 36,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 1,
      "prosecution_office": 17,
      "police_station": 22,
      "police_car_fleet": 1365,
      "police_academy": 37,
      "corruption_index": 62,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 34,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 10,
          "pusat_forensik": 1
        },
        "response_time": 1,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 39,
    "aircraft": 2,
    "naval": 16,
    "air_base": 5,
    "naval_base": 23,
    "military_base": 30,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 33,
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
      "rate": 35,
      "satisfaction": 52
    },
    "income": {
      "rate": 36,
      "satisfaction": 61
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88
    },
    "other": {
      "rate": 11,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 5,
    "commercial": 11,
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
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 21,
    "education": 1,
    "security": 15,
    "finance": 39,
    "environment": 60
  }
};
