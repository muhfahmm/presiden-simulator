import { CountryData } from "../../types";

export const georgia: CountryData = {
  "name_en": "Georgia",
  "capital": "Tbilisi",
  "name_id": "Georgia",
  "lon": 43.5,
  "lat": 42,
  "flag": "🇬🇪",
  "pop": "10M",
  "budget": 243,
  "income": "694",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 36,
    "solar_plant": 5,
    "thermal_plant": 12,
    "gas_plant": 12,
    "wind_plant": 15,
    "power_grid": 94,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 13,
    "subway": 11,
    "railway": 18,
    "highway": 21,
    "road_quality": 55,
    "sea_port": 16,
    "airport": 28,
    "bus_terminal": 39,
    "helipad": 25,
    "internet_coverage": 82,
    "tech_stack": 82,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 36,
    "uranium": 31,
    "coal": 35,
    "oil": 6,
    "gas": 23,
    "salt": 36,
    "nickel": 39,
    "lithium": 22,
    "aluminum": 36,
    "copper": 24,
    "rare_earth": 31,
    "iron_ore": 22,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 13,
    "car": 40,
    "motorcycle": 40,
    "smelter": 17,
    "concrete_cement": 22,
    "wood": 38,
    "mineral_water": 22,
    "sugar": 38,
    "bread": 14,
    "pharmacy": 9,
    "fertilizer": 16,
    "meat_processing": 29,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 36,
    "dairy_cow": 39,
    "beef_cow": 11,
    "sheep_goat": 5,
    "shrimp": 21,
    "fish": 1,
    "shellfish": 18,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 34,
    "wheat": 28,
    "corn": 6,
    "tubers": 8,
    "soy": 36,
    "palm_oil": 11,
    "tea": 31,
    "coffee": 40,
    "cocoa": 1,
    "sugarcane": 23,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 30,
    "armory": 10,
    "tank_hangar": 26,
    "military_academy": 13,
    "budget": 1139,
    "personnel": 6649,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 13,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 35,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 13,
    "military_naval_base": 10,
    "arms_factory": 2,
    "nuclear_status": false,
    "space_program": 19,
    "cyber_defense": 24,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 5,
      "sabotage_mission": 2,
      "territory_management": 23,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 10,
      "radar_network": 8,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 15,
      "middle_school": 36,
      "high_school": 16,
      "university": 13,
      "education_institute": 31,
      "laboratory": 19,
      "observatory": 19,
      "research_center": 40,
      "development_center": 28,
      "literacy": 54,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 40,
      "diagnostic_center": 7,
      "hospital_beds": 4461,
      "life_expectancy": 12,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 31,
      "racing_circuit": 18,
      "stadium": 2,
      "international_stadium": 26,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 39,
      "prosecution_office": 23,
      "police_station": 7,
      "police_car_fleet": 2029,
      "police_academy": 14,
      "corruption_index": 78,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 24,
          "pusat_forensik": 1
        },
        "response_time": 35,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 10,
    "tanks": 26,
    "aircraft": 7,
    "naval": 40,
    "air_base": 11,
    "naval_base": 21,
    "military_base": 33,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 40,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 23,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 15,
      "satisfaction": 52
    },
    "income": {
      "rate": 22,
      "satisfaction": 61
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86
    },
    "environment": {
      "rate": 32,
      "satisfaction": 88
    },
    "other": {
      "rate": 17,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 82,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 35,
    "commercial": 39,
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
      "soft_power": 18,
      "hard_power": 32,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 17,
    "education": 8,
    "security": 21,
    "finance": 8,
    "environment": 60
  }
};
