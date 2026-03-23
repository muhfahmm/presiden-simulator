import { CountryData } from "../../types";

export const irak: CountryData = {
  "name_en": "Iraq",
  "capital": "Baghdad",
  "name_id": "Irak",
  "lon": 44,
  "lat": 33,
  "flag": "🇮🇶",
  "pop": "10M",
  "budget": 744000000000000,
  "income": "458.000.000.000.000 / 458 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 26,
    "solar_plant": 13,
    "thermal_plant": 21,
    "gas_plant": 2,
    "wind_plant": 14,
    "power_grid": 58,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 38,
    "subway": 32,
    "railway": 39,
    "highway": 38,
    "road_quality": 82,
    "sea_port": 22,
    "airport": 30,
    "bus_terminal": 30,
    "helipad": 24,
    "internet_coverage": 75,
    "tech_stack": 81,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 4,
    "uranium": 23,
    "coal": 17,
    "oil": 40,
    "gas": 40,
    "salt": 34,
    "nickel": 33,
    "lithium": 33,
    "aluminum": 29,
    "copper": 29,
    "rare_earth": 7,
    "iron_ore": 6,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 26,
    "car": 5,
    "motorcycle": 5,
    "smelter": 10,
    "concrete_cement": 17,
    "wood": 33,
    "mineral_water": 12,
    "sugar": 37,
    "bread": 26,
    "pharmacy": 40,
    "fertilizer": 32,
    "meat_processing": 5,
    "instant_noodle": 30,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 24,
    "poultry": 20,
    "dairy_cow": 8,
    "beef_cow": 15,
    "sheep_goat": 30,
    "shrimp": 38,
    "fish": 7,
    "shellfish": 8,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 29,
    "wheat": 1,
    "corn": 3,
    "tubers": 26,
    "soy": 10,
    "palm_oil": 27,
    "tea": 1,
    "coffee": 7,
    "cocoa": 28,
    "sugarcane": 7,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 30,
    "armory": 9,
    "tank_hangar": 18,
    "military_academy": 12,
    "budget": 8,
    "personnel": 28713,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 13,
        "apc": 37,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 38,
        "helikopter_serang": 38,
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
    "command_center": 35,
    "military_air_base": 18,
    "military_naval_base": 8,
    "arms_factory": 16,
    "nuclear_status": false,
    "space_program": 29,
    "cyber_defense": 18,
    "intelligence": 23,
    "strategic_operations": {
      "attack_mission": 26,
      "spy_mission": 33,
      "sabotage_mission": 16,
      "territory_management": 13,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 38,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 5,
      "middle_school": 10,
      "high_school": 29,
      "university": 1,
      "education_institute": 7,
      "laboratory": 38,
      "observatory": 12,
      "research_center": 24,
      "development_center": 38,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 14,
      "diagnostic_center": 35,
      "hospital_beds": 2970,
      "life_expectancy": 29,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 21,
      "stadium": 23,
      "international_stadium": 23,
      "olympic_score": 7,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 38,
      "court": 10,
      "prosecution_office": 15,
      "police_station": 8,
      "police_car_fleet": 7592,
      "police_academy": 14,
      "corruption_index": 87,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 25,
          "kamera_surveillance": 27,
          "pusat_forensik": 1
        },
        "response_time": 12,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 9,
    "aircraft": 9,
    "naval": 40,
    "air_base": 6,
    "naval_base": 8,
    "military_base": 39,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 13,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52
    },
    "income": {
      "rate": 39,
      "satisfaction": 61
    },
    "customs": {
      "rate": 3,
      "satisfaction": 86
    },
    "environment": {
      "rate": 32,
      "satisfaction": 88
    },
    "other": {
      "rate": 28,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 58,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 19,
    "commercial": 35,
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
      "soft_power": 22,
      "hard_power": 7,
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
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 29,
    "security": 9,
    "finance": 5,
    "environment": 60
  }
};
