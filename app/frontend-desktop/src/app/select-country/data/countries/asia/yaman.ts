import { CountryData } from "../../types";

export const yaman: CountryData = {
  "name_en": "Yemen",
  "capital": "Sana'a",
  "name_id": "Yaman",
  "lon": 48,
  "lat": 15,
  "flag": "🇾🇪",
  "pop": "10M",
  "budget": 199000000000000,
  "income": "522.000.000.000.000 / 522 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 7,
    "hydro_plant": 9,
    "solar_plant": 4,
    "thermal_plant": 5,
    "gas_plant": 5,
    "wind_plant": 31,
    "power_grid": 62,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 20,
    "subway": 29,
    "railway": 35,
    "highway": 10,
    "road_quality": 89,
    "sea_port": 6,
    "airport": 19,
    "bus_terminal": 17,
    "helipad": 35,
    "internet_coverage": 56,
    "tech_stack": 83,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 10,
    "uranium": 6,
    "coal": 14,
    "oil": 13,
    "gas": 15,
    "salt": 34,
    "nickel": 13,
    "lithium": 7,
    "aluminum": 36,
    "copper": 5,
    "rare_earth": 5,
    "iron_ore": 28,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 1,
    "car": 32,
    "motorcycle": 9,
    "smelter": 27,
    "concrete_cement": 10,
    "wood": 1,
    "mineral_water": 33,
    "sugar": 35,
    "bread": 9,
    "pharmacy": 33,
    "fertilizer": 33,
    "meat_processing": 12,
    "instant_noodle": 32,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 2,
    "poultry": 39,
    "dairy_cow": 5,
    "beef_cow": 1,
    "sheep_goat": 20,
    "shrimp": 26,
    "fish": 24,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 21,
    "wheat": 22,
    "corn": 39,
    "tubers": 27,
    "soy": 15,
    "palm_oil": 38,
    "tea": 37,
    "coffee": 23,
    "cocoa": 38,
    "sugarcane": 4,
    "vegetables": 23,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 24,
    "armory": 23,
    "tank_hangar": 27,
    "military_academy": 23,
    "budget": 31,
    "personnel": 13273,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 156,
        "apc": 178,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 78,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 144,
        "helikopter_serang": 105,
        "pesawat_pengintai": 2
      },
      "total_unit": 24,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 5,
    "military_air_base": 32,
    "military_naval_base": 36,
    "arms_factory": 8,
    "nuclear_status": false,
    "space_program": 16,
    "cyber_defense": 19,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 40,
      "sabotage_mission": 28,
      "territory_management": 7,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 15,
      "elementary_school": 24,
      "middle_school": 7,
      "high_school": 38,
      "university": 18,
      "education_institute": 11,
      "laboratory": 18,
      "observatory": 38,
      "research_center": 38,
      "development_center": 9,
      "literacy": 88,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 20,
      "diagnostic_center": 8,
      "hospital_beds": 4339,
      "life_expectancy": 26,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 31,
      "racing_circuit": 12,
      "stadium": 16,
      "international_stadium": 10,
      "olympic_score": 34,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 7,
      "court": 6,
      "prosecution_office": 23,
      "police_station": 12,
      "police_car_fleet": 3048,
      "police_academy": 32,
      "corruption_index": 77,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 32,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 30,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 33,
    "aircraft": 9,
    "naval": 21,
    "air_base": 9,
    "naval_base": 8,
    "military_base": 3,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 19,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 5,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52
    },
    "income": {
      "rate": 25,
      "satisfaction": 61
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88
    },
    "other": {
      "rate": 10,
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
    "residential": 27,
    "commercial": 33,
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
      "soft_power": 30,
      "hard_power": 8,
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
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 10,
    "security": 34,
    "finance": 22,
    "environment": 60
  }
};
