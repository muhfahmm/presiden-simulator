import { CountryData } from "../../types";

export const tonga: CountryData = {
  "name_en": "Tonga",
  "capital": "Nuku'alofa",
  "name_id": "Tonga",
  "lon": -175,
  "lat": -20,
  "flag": "🇹🇴",
  "pop": "10M",
  "budget": 20,
  "income": "20 / 20 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 8,
    "hydro_plant": 17,
    "solar_plant": 9,
    "thermal_plant": 2,
    "gas_plant": 16,
    "wind_plant": 23,
    "power_grid": 79,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 38,
    "subway": 14,
    "railway": 8,
    "highway": 19,
    "road_quality": 81,
    "sea_port": 19,
    "airport": 20,
    "bus_terminal": 14,
    "helipad": 24,
    "internet_coverage": 79,
    "tech_stack": 58,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 18,
    "coal": 27,
    "oil": 11,
    "gas": 11,
    "salt": 17,
    "nickel": 38,
    "lithium": 4,
    "aluminum": 36,
    "copper": 35,
    "rare_earth": 30,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 40,
    "car": 22,
    "motorcycle": 2,
    "smelter": 39,
    "concrete_cement": 28,
    "wood": 38,
    "mineral_water": 32,
    "sugar": 36,
    "bread": 14,
    "pharmacy": 16,
    "fertilizer": 37,
    "meat_processing": 15,
    "instant_noodle": 6,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 38,
    "poultry": 11,
    "dairy_cow": 23,
    "beef_cow": 22,
    "sheep_goat": 19,
    "shrimp": 3,
    "fish": 29,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 13,
    "wheat": 22,
    "corn": 6,
    "tubers": 4,
    "soy": 15,
    "palm_oil": 8,
    "tea": 11,
    "coffee": 8,
    "cocoa": 37,
    "sugarcane": 21,
    "vegetables": 14,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 38,
    "armory": 28,
    "tank_hangar": 24,
    "military_academy": 19,
    "budget": 20,
    "personnel": 7153,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 150,
        "apc": 147,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 48,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 174,
        "helikopter_serang": 167,
        "pesawat_pengintai": 2
      },
      "total_unit": 28,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 23,
    "military_air_base": 31,
    "military_naval_base": 31,
    "arms_factory": 6,
    "nuclear_status": false,
    "space_program": 16,
    "cyber_defense": 39,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 19,
      "sabotage_mission": 15,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 10,
      "elementary_school": 17,
      "middle_school": 21,
      "high_school": 40,
      "university": 36,
      "education_institute": 22,
      "laboratory": 28,
      "observatory": 36,
      "research_center": 24,
      "development_center": 23,
      "literacy": 87,
      "research_index": 0
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 11,
      "diagnostic_center": 37,
      "hospital_beds": 597,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 20,
      "racing_circuit": 32,
      "stadium": 31,
      "international_stadium": 14,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 9,
      "court": 17,
      "prosecution_office": 1,
      "police_station": 18,
      "police_car_fleet": 6958,
      "police_academy": 38,
      "corruption_index": 75,
      "security_index": 71,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 40,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 1,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 18,
          "pusat_forensik": 1
        },
        "response_time": 11,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 24,
    "aircraft": 3,
    "naval": 9,
    "air_base": 31,
    "naval_base": 8,
    "military_base": 15,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 11,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88
    },
    "other": {
      "rate": 5,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 75,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 1,
    "commercial": 6,
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
      "soft_power": 5,
      "hard_power": 18,
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
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 19,
    "education": 33,
    "security": 6,
    "finance": 18,
    "environment": 60
  }
};
