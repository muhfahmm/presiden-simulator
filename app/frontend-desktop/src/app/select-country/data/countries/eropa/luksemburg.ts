import { CountryData } from "../../types";

export const luksemburg: CountryData = {
  "name_en": "Luxembourg",
  "capital": "Luxembourg",
  "name_id": "Luksemburg",
  "lon": 6.07,
  "lat": 49.36,
  "flag": "🇱🇺",
  "pop": "10M",
  "budget": 3099,
  "income": "3.099 / 3099 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 9,
    "hydro_plant": 6,
    "solar_plant": 30,
    "thermal_plant": 28,
    "gas_plant": 23,
    "wind_plant": 15,
    "power_grid": 89,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 17,
    "subway": 10,
    "railway": 4,
    "highway": 19,
    "road_quality": 89,
    "sea_port": 29,
    "airport": 34,
    "bus_terminal": 34,
    "helipad": 37,
    "internet_coverage": 64,
    "tech_stack": 87,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 26,
    "uranium": 27,
    "coal": 26,
    "oil": 36,
    "gas": 16,
    "salt": 27,
    "nickel": 37,
    "lithium": 39,
    "aluminum": 36,
    "copper": 9,
    "rare_earth": 12,
    "iron_ore": 34,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 38,
    "car": 34,
    "motorcycle": 12,
    "smelter": 26,
    "concrete_cement": 39,
    "wood": 2,
    "mineral_water": 19,
    "sugar": 10,
    "bread": 21,
    "pharmacy": 38,
    "fertilizer": 39,
    "meat_processing": 22,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 10,
    "dairy_cow": 34,
    "beef_cow": 39,
    "sheep_goat": 18,
    "shrimp": 19,
    "fish": 1,
    "shellfish": 12,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 3,
    "wheat": 27,
    "corn": 16,
    "tubers": 4,
    "soy": 23,
    "palm_oil": 22,
    "tea": 9,
    "coffee": 27,
    "cocoa": 36,
    "sugarcane": 20,
    "vegetables": 3,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 22,
    "barracks": 31,
    "armory": 20,
    "tank_hangar": 13,
    "military_academy": 34,
    "budget": 3099,
    "personnel": 9876,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 17,
        "apc": 6,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 32,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 9,
    "military_naval_base": 30,
    "arms_factory": 9,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 5,
    "intelligence": 20,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 30,
      "sabotage_mission": 5,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 26,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 39,
      "elementary_school": 32,
      "middle_school": 30,
      "high_school": 6,
      "university": 20,
      "education_institute": 39,
      "laboratory": 17,
      "observatory": 8,
      "research_center": 39,
      "development_center": 38,
      "literacy": 91,
      "research_index": 0
    },
    "health": {
      "large_hospital": 18,
      "small_hospital": 27,
      "diagnostic_center": 14,
      "hospital_beds": 7441,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 23,
      "stadium": 39,
      "international_stadium": 34,
      "olympic_score": 36,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 19,
      "court": 40,
      "prosecution_office": 34,
      "police_station": 18,
      "police_car_fleet": 3747,
      "police_academy": 40,
      "corruption_index": 67,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 40,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 28,
          "pusat_forensik": 1
        },
        "response_time": 17,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 14,
    "tanks": 16,
    "aircraft": 23,
    "naval": 30,
    "air_base": 40,
    "naval_base": 25,
    "military_base": 40,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 38,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 16,
      "satisfaction": 52
    },
    "income": {
      "rate": 22,
      "satisfaction": 61
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86
    },
    "environment": {
      "rate": 29,
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
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 21,
    "commercial": 14,
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
      "soft_power": 20,
      "hard_power": 2,
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
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 16,
    "education": 39,
    "security": 39,
    "finance": 6,
    "environment": 60
  }
};
