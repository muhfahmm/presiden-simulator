import { CountryData } from "../../types";

export const samoa: CountryData = {
  "name_en": "Samoa",
  "capital": "Apia",
  "name_id": "Samoa",
  "lon": -172.33333333,
  "lat": -13.58333333,
  "flag": "🇼🇸",
  "pop": "10M",
  "budget": 461000000000000,
  "income": "541.000.000.000.000 / 541 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 14,
    "hydro_plant": 28,
    "solar_plant": 37,
    "thermal_plant": 18,
    "gas_plant": 40,
    "wind_plant": 7,
    "power_grid": 72,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 7,
    "subway": 24,
    "railway": 11,
    "highway": 22,
    "road_quality": 82,
    "sea_port": 37,
    "airport": 34,
    "bus_terminal": 12,
    "helipad": 1,
    "internet_coverage": 80,
    "tech_stack": 87,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 26,
    "uranium": 3,
    "coal": 13,
    "oil": 11,
    "gas": 34,
    "salt": 26,
    "nickel": 15,
    "lithium": 16,
    "aluminum": 22,
    "copper": 2,
    "rare_earth": 3,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 10,
    "car": 16,
    "motorcycle": 17,
    "smelter": 28,
    "concrete_cement": 28,
    "wood": 29,
    "mineral_water": 31,
    "sugar": 6,
    "bread": 22,
    "pharmacy": 21,
    "fertilizer": 30,
    "meat_processing": 39,
    "instant_noodle": 13,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 8,
    "poultry": 32,
    "dairy_cow": 14,
    "beef_cow": 1,
    "sheep_goat": 33,
    "shrimp": 40,
    "fish": 12,
    "shellfish": 19,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 6,
    "corn": 26,
    "tubers": 22,
    "soy": 24,
    "palm_oil": 12,
    "tea": 3,
    "coffee": 21,
    "cocoa": 32,
    "sugarcane": 26,
    "vegetables": 15,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 37,
    "barracks": 1,
    "armory": 2,
    "tank_hangar": 31,
    "military_academy": 13,
    "budget": 14,
    "personnel": 6753,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 170,
        "apc": 162,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 57,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 39,
        "helikopter_serang": 30,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 17,
    "military_air_base": 38,
    "military_naval_base": 40,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 37,
    "cyber_defense": 14,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 10,
      "spy_mission": 38,
      "sabotage_mission": 2,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 12,
      "middle_school": 2,
      "high_school": 34,
      "university": 31,
      "education_institute": 7,
      "laboratory": 6,
      "observatory": 18,
      "research_center": 5,
      "development_center": 40,
      "literacy": 75,
      "research_index": 0
    },
    "health": {
      "large_hospital": 32,
      "small_hospital": 25,
      "diagnostic_center": 36,
      "hospital_beds": 5146,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 14,
      "stadium": 29,
      "international_stadium": 14,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 2,
      "prosecution_office": 9,
      "police_station": 36,
      "police_car_fleet": 5070,
      "police_academy": 20,
      "corruption_index": 83,
      "security_index": 71,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 31,
          "kamera_surveillance": 40,
          "pusat_forensik": 1
        },
        "response_time": 27,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 20,
    "tanks": 7,
    "aircraft": 28,
    "naval": 14,
    "air_base": 12,
    "naval_base": 17,
    "military_base": 31,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 23,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 3,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 29,
      "satisfaction": 52
    },
    "income": {
      "rate": 1,
      "satisfaction": 61
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86
    },
    "environment": {
      "rate": 24,
      "satisfaction": 88
    },
    "other": {
      "rate": 19,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 89,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 38,
    "commercial": 32,
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
      "soft_power": 2,
      "hard_power": 35,
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
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Australia", "type": "Trade", "status": "Active" },
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 14,
    "education": 27,
    "security": 33,
    "finance": 8,
    "environment": 60
  }
};
