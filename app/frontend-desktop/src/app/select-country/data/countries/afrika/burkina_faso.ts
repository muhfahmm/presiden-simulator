import { CountryData } from "../../types";

export const burkina_faso: CountryData = {
  "name_en": "Burkina Faso",
  "capital": "Ouagadougou",
  "name_id": "Burkina faso",
  "lon": -2,
  "lat": 13,
  "flag": "🇧🇫",
  "pop": "10M",
  "budget": 655000000000000,
  "income": "758.000.000.000.000 / 758 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 21,
    "hydro_plant": 5,
    "nuclear_plant": 27,
    "power_grid": 58,
    "solar_plant": 29,
    "thermal_plant": 19,
    "wind_plant": 22,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 23,
    "bicycle_path": 27,
    "bus_terminal": 5,
    "helipad": 37,
    "highway": 25,
    "internet_coverage": 52,
    "railway": 4,
    "road_quality": 74,
    "sea_port": 18,
    "subway": 15,
    "tech_stack": 61,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 30,
    "coal": 13,
    "copper": 7,
    "gas": 37,
    "gold": 4,
    "iron_ore": 29,
    "lithium": 40,
    "nickel": 37,
    "oil": 8,
    "rare_earth": 22,
    "salt": 8,
    "strength": 29.660809349923973,
    "uranium": 33,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 33,
    "car": 33,
    "concrete_cement": 12,
    "fertilizer": 20,
    "instant_noodle": 20,
    "meat_processing": 32,
    "mineral_water": 16,
    "motorcycle": 32,
    "pharmacy": 28,
    "semiconductor": 34,
    "smelter": 17,
    "strength": 3.076011687404966,
    "sugar": 40,
    "wood": 39,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 2,
    "chicken": 5,
    "dairy_cow": 9,
    "fish": 17,
    "poultry": 4,
    "sheep_goat": 39,
    "shellfish": 29,
    "shrimp": 9,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 29,
    "coffee": 27,
    "corn": 22,
    "palm_oil": 39,
    "rice": 38,
    "soy": 28,
    "strength": 20.660809349923973,
    "sugarcane": 1,
    "tea": 4,
    "tubers": 6,
    "vegetables": 22,
    "wheat": 37,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 20,
    "armory": 5,
    "tank_hangar": 15,
    "military_academy": 37,
    "budget": 16,
    "personnel": 20867,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 40,
        "apc": 20,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 18,
        "helikopter_serang": 35,
        "pesawat_pengintai": 2,
      },
      "total_unit": 24,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 27,
    "military_air_base": 34,
    "military_naval_base": 19,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 18,
    "cyber_defense": 21,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 27,
      "sabotage_mission": 10,
      "territory_management": 8,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 16,
      "radar_network": 37,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 21,
      "elementary_school": 26,
      "middle_school": 12,
      "high_school": 23,
      "university": 40,
      "education_institute": 35,
      "laboratory": 9,
      "observatory": 18,
      "research_center": 38,
      "development_center": 2,
      "literacy": 50,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 28,
      "diagnostic_center": 26,
      "hospital_beds": 9571,
      "life_expectancy": 38,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 9,
      "racing_circuit": 6,
      "stadium": 29,
      "international_stadium": 40,
      "olympic_score": 36,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 22,
      "court": 13,
      "prosecution_office": 10,
      "police_station": 8,
      "police_car_fleet": 5057,
      "police_academy": 13,
      "corruption_index": 88,
      "security_index": 54,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 8,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 9,
          "kamera_surveillance": 38,
          "pusat_forensik": 1,
        },
        "response_time": 11,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 10,
    "tanks": 14,
    "aircraft": 1,
    "naval": 31,
    "air_base": 24,
    "naval_base": 8,
    "military_base": 19,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 29,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 29,
      "satisfaction": 52,
    },
    "income": {
      "rate": 16,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 30,
      "satisfaction": 88,
    },
    "other": {
      "rate": 7,
      "satisfaction": 93,
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
    "residential": 20,
    "commercial": 30,
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
      "soft_power": 15,
      "hard_power": 7,
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
      { "partner": "Nigeria", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 29,
    "education": 20,
    "security": 1,
    "finance": 21,
    "environment": 60,
  }
};
