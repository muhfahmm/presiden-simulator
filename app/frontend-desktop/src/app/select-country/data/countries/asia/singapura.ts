import { CountryData } from "../../types";

export const singapura: CountryData = {
  "name_en": "Singapore",
  "capital": "Singapore",
  "name_id": "Singapura",
  "lon": 103.8,
  "lat": 1.36666666,
  "flag": "🇸🇬",
  "pop": "10M",
  "budget": 453000000000000,
  "income": "321.000.000.000.000 / 321 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 16,
    "hydro_plant": 33,
    "solar_plant": 23,
    "thermal_plant": 36,
    "gas_plant": 26,
    "wind_plant": 27,
    "power_grid": 53,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 5,
    "railway": 6,
    "highway": 15,
    "road_quality": 64,
    "sea_port": 40,
    "airport": 18,
    "bus_terminal": 30,
    "helipad": 37,
    "internet_coverage": 56,
    "tech_stack": 53,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 6,
    "uranium": 16,
    "coal": 33,
    "oil": 16,
    "gas": 12,
    "salt": 35,
    "nickel": 22,
    "lithium": 16,
    "aluminum": 23,
    "copper": 8,
    "rare_earth": 17,
    "iron_ore": 13,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 26,
    "motorcycle": 10,
    "smelter": 22,
    "concrete_cement": 10,
    "wood": 38,
    "mineral_water": 4,
    "sugar": 18,
    "bread": 23,
    "pharmacy": 12,
    "fertilizer": 39,
    "meat_processing": 34,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 2,
    "poultry": 10,
    "dairy_cow": 35,
    "beef_cow": 3,
    "sheep_goat": 37,
    "shrimp": 5,
    "fish": 29,
    "shellfish": 40,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 8,
    "wheat": 15,
    "corn": 36,
    "tubers": 23,
    "soy": 25,
    "palm_oil": 29,
    "tea": 4,
    "coffee": 30,
    "cocoa": 38,
    "sugarcane": 37,
    "vegetables": 23,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 13,
    "armory": 31,
    "tank_hangar": 37,
    "military_academy": 26,
    "budget": 23,
    "personnel": 25079,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 139,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 8,
        "kapal_destroyer": 91,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 20,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
      },
      "total_unit": 21,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 35,
    "military_air_base": 36,
    "military_naval_base": 20,
    "arms_factory": 34,
    "nuclear_status": false,
    "space_program": 23,
    "cyber_defense": 20,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 21,
      "spy_mission": 19,
      "sabotage_mission": 38,
      "territory_management": 27,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 40,
      "middle_school": 11,
      "high_school": 4,
      "university": 15,
      "education_institute": 18,
      "laboratory": 35,
      "observatory": 8,
      "research_center": 12,
      "development_center": 33,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 23,
      "diagnostic_center": 23,
      "hospital_beds": 4771,
      "life_expectancy": 25,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 38,
      "stadium": 11,
      "international_stadium": 25,
      "olympic_score": 20,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 2,
      "court": 16,
      "prosecution_office": 37,
      "police_station": 6,
      "police_car_fleet": 2865,
      "police_academy": 33,
      "corruption_index": 64,
      "security_index": 92,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 13,
          "pusat_forensik": 1
        },
        "response_time": 23,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 34,
    "aircraft": 17,
    "naval": 30,
    "air_base": 37,
    "naval_base": 32,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 35,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 10,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 36,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86
    },
    "environment": {
      "rate": 39,
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
    "satisfaction": 54,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 23,
    "commercial": 5,
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
      "soft_power": 12,
      "hard_power": 26,
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
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 6,
    "education": 18,
    "security": 31,
    "finance": 19,
    "environment": 60
  }
};
