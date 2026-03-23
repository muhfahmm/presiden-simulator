import { CountryData } from "../../types";

export const sri_lanka: CountryData = {
  "name_en": "Sri Lanka",
  "capital": "Colombo",
  "name_id": "Sri lanka",
  "lon": 81,
  "lat": 7,
  "flag": "🇱🇰",
  "pop": "10M",
  "budget": 236000000000000,
  "income": "173.000.000.000.000 / 173 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 15,
    "hydro_plant": 8,
    "solar_plant": 7,
    "thermal_plant": 3,
    "gas_plant": 3,
    "wind_plant": 2,
    "power_grid": 67,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 1,
    "subway": 29,
    "railway": 37,
    "highway": 1,
    "road_quality": 55,
    "sea_port": 35,
    "airport": 31,
    "bus_terminal": 15,
    "helipad": 24,
    "internet_coverage": 57,
    "tech_stack": 92,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 25,
    "coal": 23,
    "oil": 10,
    "gas": 32,
    "salt": 20,
    "nickel": 32,
    "lithium": 17,
    "aluminum": 2,
    "copper": 37,
    "rare_earth": 17,
    "iron_ore": 2,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 22,
    "car": 4,
    "motorcycle": 19,
    "smelter": 20,
    "concrete_cement": 24,
    "wood": 13,
    "mineral_water": 34,
    "sugar": 17,
    "bread": 17,
    "pharmacy": 7,
    "fertilizer": 29,
    "meat_processing": 29,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 36,
    "poultry": 31,
    "dairy_cow": 7,
    "beef_cow": 6,
    "sheep_goat": 39,
    "shrimp": 39,
    "fish": 38,
    "shellfish": 18,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 8,
    "corn": 37,
    "tubers": 39,
    "soy": 2,
    "palm_oil": 30,
    "tea": 36,
    "coffee": 37,
    "cocoa": 16,
    "sugarcane": 13,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 37,
    "armory": 4,
    "tank_hangar": 37,
    "military_academy": 3,
    "budget": 3,
    "personnel": 23226,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 21,
        "apc": 161,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 167,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 58,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 35,
    "military_air_base": 28,
    "military_naval_base": 9,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 35,
    "cyber_defense": 13,
    "intelligence": 20,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 24,
      "sabotage_mission": 15,
      "territory_management": 29,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 26,
      "middle_school": 34,
      "high_school": 27,
      "university": 34,
      "education_institute": 38,
      "laboratory": 34,
      "observatory": 38,
      "research_center": 25,
      "development_center": 8,
      "literacy": 80,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 1,
      "diagnostic_center": 35,
      "hospital_beds": 2367,
      "life_expectancy": 18,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 30,
      "stadium": 39,
      "international_stadium": 30,
      "olympic_score": 18,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 10,
      "court": 19,
      "prosecution_office": 36,
      "police_station": 33,
      "police_car_fleet": 7907,
      "police_academy": 38,
      "corruption_index": 89,
      "security_index": 67,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 22,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 1,
          "kamera_surveillance": 18,
          "pusat_forensik": 1
        },
        "response_time": 19,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 1,
    "aircraft": 11,
    "naval": 9,
    "air_base": 19,
    "naval_base": 36,
    "military_base": 2,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 6,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 33,
      "satisfaction": 52
    },
    "income": {
      "rate": 27,
      "satisfaction": 61
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86
    },
    "environment": {
      "rate": 10,
      "satisfaction": 88
    },
    "other": {
      "rate": 13,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 83,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 33,
    "commercial": 4,
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
      "soft_power": 15,
      "hard_power": 36,
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
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 7,
    "education": 13,
    "security": 31,
    "finance": 33,
    "environment": 60
  }
};
