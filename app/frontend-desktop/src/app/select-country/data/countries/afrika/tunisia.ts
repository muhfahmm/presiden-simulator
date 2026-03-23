import { CountryData } from "../../types";

export const tunisia: CountryData = {
  "name_en": "Tunisia",
  "capital": "Tunis",
  "name_id": "Tunisia",
  "lon": 9,
  "lat": 34,
  "flag": "🇹🇳",
  "pop": "10M",
  "budget": 564000000000000,
  "income": "433.000.000.000.000 / 433 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 29,
    "hydro_plant": 32,
    "nuclear_plant": 21,
    "power_grid": 88,
    "solar_plant": 32,
    "thermal_plant": 14,
    "wind_plant": 8,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 12,
    "bicycle_path": 40,
    "bus_terminal": 1,
    "helipad": 36,
    "highway": 37,
    "internet_coverage": 68,
    "railway": 35,
    "road_quality": 87,
    "sea_port": 3,
    "subway": 39,
    "tech_stack": 60,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 8,
    "coal": 27,
    "copper": 7,
    "gas": 9,
    "gold": 40,
    "iron_ore": 2,
    "lithium": 1,
    "nickel": 22,
    "oil": 29,
    "rare_earth": 24,
    "salt": 31,
    "strength": 29.660809349923973,
    "uranium": 3,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 9,
    "car": 39,
    "concrete_cement": 37,
    "fertilizer": 18,
    "instant_noodle": 11,
    "meat_processing": 37,
    "mineral_water": 35,
    "motorcycle": 23,
    "pharmacy": 11,
    "semiconductor": 14,
    "smelter": 22,
    "strength": 3.076011687404966,
    "sugar": 20,
    "wood": 12,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 8,
    "chicken": 23,
    "dairy_cow": 35,
    "fish": 7,
    "poultry": 13,
    "sheep_goat": 20,
    "shellfish": 2,
    "shrimp": 26,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 34,
    "coffee": 27,
    "corn": 4,
    "palm_oil": 33,
    "rice": 4,
    "soy": 15,
    "strength": 20.660809349923973,
    "sugarcane": 30,
    "tea": 11,
    "tubers": 15,
    "vegetables": 18,
    "wheat": 38,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 12,
    "armory": 2,
    "tank_hangar": 1,
    "military_academy": 22,
    "budget": 24,
    "personnel": 17828,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 94,
        "apc": 116,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 80,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 19,
        "helikopter_serang": 107,
        "pesawat_pengintai": 2,
      },
      "total_unit": 22,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 24,
    "military_air_base": 10,
    "military_naval_base": 36,
    "arms_factory": 12,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 26,
    "intelligence": 32,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 27,
      "sabotage_mission": 15,
      "territory_management": 11,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 0,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 40,
      "middle_school": 36,
      "high_school": 33,
      "university": 33,
      "education_institute": 33,
      "laboratory": 20,
      "observatory": 10,
      "research_center": 10,
      "development_center": 38,
      "literacy": 64,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 13,
      "small_hospital": 5,
      "diagnostic_center": 9,
      "hospital_beds": 1361,
      "life_expectancy": 19,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 4,
      "racing_circuit": 18,
      "stadium": 12,
      "international_stadium": 21,
      "olympic_score": 16,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 36,
      "court": 16,
      "prosecution_office": 16,
      "police_station": 21,
      "police_car_fleet": 2086,
      "police_academy": 19,
      "corruption_index": 87,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 2,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 28,
          "kamera_surveillance": 32,
          "pusat_forensik": 1,
        },
        "response_time": 31,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 39,
    "tanks": 20,
    "aircraft": 8,
    "naval": 18,
    "air_base": 28,
    "naval_base": 10,
    "military_base": 15,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 1,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 24,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 3,
      "satisfaction": 52,
    },
    "income": {
      "rate": 2,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
    },
    "other": {
      "rate": 10,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 5,
    "commercial": 31,
    "industrial": 53,
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
      "hard_power": 26,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    "agreements": [
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 19,
    "education": 39,
    "security": 14,
    "finance": 16,
    "environment": 60,
  }
};
