import { CountryData } from "../../types";

export const dominika: CountryData = {
  "name_en": "Dominica",
  "capital": "Roseau",
  "name_id": "Dominika",
  "lon": -61.33333333,
  "lat": 15.41666666,
  "flag": "🇩🇲",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 32,
    "solar_plant": 34,
    "thermal_plant": 4,
    "gas_plant": 23,
    "wind_plant": 24,
    "power_grid": 94,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 36,
    "subway": 40,
    "railway": 22,
    "highway": 8,
    "road_quality": 80,
    "sea_port": 3,
    "airport": 30,
    "bus_terminal": 17,
    "helipad": 16,
    "internet_coverage": 87,
    "tech_stack": 77,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 33,
    "uranium": 15,
    "coal": 40,
    "oil": 7,
    "gas": 6,
    "salt": 22,
    "nickel": 39,
    "lithium": 19,
    "aluminum": 37,
    "copper": 1,
    "rare_earth": 6,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 34,
    "motorcycle": 10,
    "smelter": 19,
    "concrete_cement": 36,
    "wood": 25,
    "mineral_water": 17,
    "sugar": 25,
    "bread": 18,
    "pharmacy": 12,
    "fertilizer": 33,
    "meat_processing": 24,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 2,
    "poultry": 36,
    "dairy_cow": 34,
    "beef_cow": 19,
    "sheep_goat": 6,
    "shrimp": 36,
    "fish": 2,
    "shellfish": 35,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 1,
    "wheat": 3,
    "corn": 1,
    "tubers": 34,
    "soy": 33,
    "palm_oil": 7,
    "tea": 32,
    "coffee": 34,
    "cocoa": 16,
    "sugarcane": 7,
    "vegetables": 1,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 15,
    "armory": 36,
    "tank_hangar": 27,
    "military_academy": 4,
    "budget": 4497,
    "personnel": 13465,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 27,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 14,
        "helikopter_serang": 9,
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
    "command_center": 22,
    "military_air_base": 40,
    "military_naval_base": 16,
    "arms_factory": 28,
    "nuclear_status": false,
    "space_program": 37,
    "cyber_defense": 21,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 1,
      "sabotage_mission": 1,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 22,
      "radar_network": 40,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 32,
      "elementary_school": 10,
      "middle_school": 18,
      "high_school": 30,
      "university": 28,
      "education_institute": 19,
      "laboratory": 40,
      "observatory": 4,
      "research_center": 5,
      "development_center": 36,
      "literacy": 84,
      "research_index": 0
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 24,
      "diagnostic_center": 33,
      "hospital_beds": 7206,
      "life_expectancy": 35,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 34,
      "racing_circuit": 2,
      "stadium": 31,
      "international_stadium": 4,
      "olympic_score": 18,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 9,
      "court": 2,
      "prosecution_office": 16,
      "police_station": 3,
      "police_car_fleet": 7579,
      "police_academy": 28,
      "corruption_index": 88,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 19,
          "sepeda_motor": 9,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 8,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 19,
    "tanks": 21,
    "aircraft": 23,
    "naval": 21,
    "air_base": 1,
    "naval_base": 15,
    "military_base": 24,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 21,
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
      "rate": 6,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 25,
      "satisfaction": 86
    },
    "environment": {
      "rate": 5,
      "satisfaction": 88
    },
    "other": {
      "rate": 36,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 79,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 38,
    "commercial": 36,
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
      "soft_power": 21,
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
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 39,
    "security": 8,
    "finance": 39,
    "environment": 60
  }
};
