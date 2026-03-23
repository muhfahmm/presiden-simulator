import { CountryData } from "../../types";

export const hungaria: CountryData = {
  "name_en": "Hungary",
  "capital": "Budapest",
  "name_id": "Hungaria",
  "lon": 20,
  "lat": 47,
  "flag": "🇭🇺",
  "pop": "10M",
  "budget": 2042,
  "income": "5834",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 1,
    "hydro_plant": 18,
    "solar_plant": 15,
    "thermal_plant": 33,
    "gas_plant": 33,
    "wind_plant": 19,
    "power_grid": 93,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 5,
    "subway": 12,
    "railway": 7,
    "highway": 32,
    "road_quality": 53,
    "sea_port": 31,
    "airport": 37,
    "bus_terminal": 4,
    "helipad": 26,
    "internet_coverage": 72,
    "tech_stack": 67,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 2,
    "uranium": 5,
    "coal": 40,
    "oil": 16,
    "gas": 32,
    "salt": 3,
    "nickel": 33,
    "lithium": 27,
    "aluminum": 12,
    "copper": 14,
    "rare_earth": 1,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 5,
    "car": 32,
    "motorcycle": 25,
    "smelter": 31,
    "concrete_cement": 15,
    "wood": 26,
    "mineral_water": 12,
    "sugar": 12,
    "bread": 23,
    "pharmacy": 9,
    "fertilizer": 4,
    "meat_processing": 19,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 27,
    "poultry": 28,
    "dairy_cow": 40,
    "beef_cow": 24,
    "sheep_goat": 18,
    "shrimp": 40,
    "fish": 18,
    "shellfish": 2,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 9,
    "corn": 22,
    "tubers": 19,
    "soy": 33,
    "palm_oil": 30,
    "tea": 7,
    "coffee": 16,
    "cocoa": 6,
    "sugarcane": 35,
    "vegetables": 27,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 21,
    "armory": 12,
    "tank_hangar": 12,
    "military_academy": 37,
    "budget": 7819,
    "personnel": 7893,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 2,
        "apc": 1,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 5,
        "helikopter_serang": 39,
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
    "command_center": 13,
    "military_air_base": 37,
    "military_naval_base": 38,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 34,
    "cyber_defense": 9,
    "intelligence": 20,
    "strategic_operations": {
      "attack_mission": 27,
      "spy_mission": 22,
      "sabotage_mission": 2,
      "territory_management": 33,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 10,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 2,
      "elementary_school": 17,
      "middle_school": 34,
      "high_school": 37,
      "university": 27,
      "education_institute": 9,
      "laboratory": 27,
      "observatory": 36,
      "research_center": 15,
      "development_center": 1,
      "literacy": 74,
      "research_index": 0
    },
    "health": {
      "large_hospital": 38,
      "small_hospital": 27,
      "diagnostic_center": 6,
      "hospital_beds": 5851,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 27,
      "racing_circuit": 6,
      "stadium": 25,
      "international_stadium": 30,
      "olympic_score": 20,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 24,
      "prosecution_office": 8,
      "police_station": 40,
      "police_car_fleet": 5808,
      "police_academy": 19,
      "corruption_index": 72,
      "security_index": 69,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 13,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 10,
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
    "infantry": 12,
    "tanks": 23,
    "aircraft": 40,
    "naval": 38,
    "air_base": 17,
    "naval_base": 17,
    "military_base": 17,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 1,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 2,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52
    },
    "income": {
      "rate": 12,
      "satisfaction": 61
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86
    },
    "environment": {
      "rate": 29,
      "satisfaction": 88
    },
    "other": {
      "rate": 1,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 50,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 12,
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
      "hard_power": 16,
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
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 18,
    "education": 24,
    "security": 9,
    "finance": 26,
    "environment": 60
  }
};
