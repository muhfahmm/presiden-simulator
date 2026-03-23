import { CountryData } from "../../types";

export const republik_sudan: CountryData = {
  "name_en": "Sudan",
  "capital": "Khartoum",
  "name_id": "Republik sudan",
  "lon": 30,
  "lat": 15,
  "flag": "🇸🇩",
  "pop": "10M",
  "budget": 243,
  "income": "694",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 37,
    "hydro_plant": 17,
    "nuclear_plant": 26,
    "power_grid": 61,
    "solar_plant": 39,
    "thermal_plant": 37,
    "wind_plant": 27,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 32,
    "bicycle_path": 8,
    "bus_terminal": 9,
    "helipad": 30,
    "highway": 38,
    "internet_coverage": 80,
    "railway": 16,
    "road_quality": 58,
    "sea_port": 11,
    "subway": 12,
    "tech_stack": 82,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 4,
    "coal": 3,
    "copper": 35,
    "gas": 35,
    "gold": 26,
    "iron_ore": 17,
    "lithium": 21,
    "nickel": 6,
    "oil": 34,
    "rare_earth": 3,
    "salt": 36,
    "strength": 29.660809349923973,
    "uranium": 37,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 38,
    "car": 27,
    "concrete_cement": 16,
    "fertilizer": 16,
    "instant_noodle": 35,
    "meat_processing": 17,
    "mineral_water": 20,
    "motorcycle": 21,
    "pharmacy": 12,
    "semiconductor": 20,
    "smelter": 37,
    "strength": 3.076011687404966,
    "sugar": 35,
    "wood": 30,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 21,
    "chicken": 6,
    "dairy_cow": 19,
    "fish": 22,
    "poultry": 38,
    "sheep_goat": 22,
    "shellfish": 16,
    "shrimp": 6,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 35,
    "coffee": 36,
    "corn": 30,
    "palm_oil": 40,
    "rice": 18,
    "soy": 34,
    "strength": 20.660809349923973,
    "sugarcane": 2,
    "tea": 32,
    "tubers": 13,
    "vegetables": 35,
    "wheat": 40,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 31,
    "barracks": 18,
    "armory": 26,
    "tank_hangar": 27,
    "military_academy": 24,
    "budget": 34,
    "personnel": 29459,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 145,
        "apc": 122,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 115,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 160,
        "helikopter_serang": 161,
        "pesawat_pengintai": 2,
      },
      "total_unit": 33,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 16,
    "military_air_base": 17,
    "military_naval_base": 17,
    "arms_factory": 33,
    "nuclear_status": false,
    "space_program": 12,
    "cyber_defense": 7,
    "intelligence": 6,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 16,
      "sabotage_mission": 22,
      "territory_management": 21,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 33,
      "middle_school": 12,
      "high_school": 27,
      "university": 25,
      "education_institute": 1,
      "laboratory": 14,
      "observatory": 4,
      "research_center": 25,
      "development_center": 32,
      "literacy": 90,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 11,
      "diagnostic_center": 21,
      "hospital_beds": 6277,
      "life_expectancy": 8,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 2,
      "racing_circuit": 15,
      "stadium": 26,
      "international_stadium": 39,
      "olympic_score": 9,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 14,
      "court": 22,
      "prosecution_office": 34,
      "police_station": 14,
      "police_car_fleet": 5216,
      "police_academy": 31,
      "corruption_index": 92,
      "security_index": 68,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 9,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 30,
          "pusat_forensik": 1,
        },
        "response_time": 27,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 32,
    "tanks": 8,
    "aircraft": 28,
    "naval": 25,
    "air_base": 2,
    "naval_base": 12,
    "military_base": 8,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 5,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 21,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 13,
      "satisfaction": 52,
    },
    "income": {
      "rate": 5,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
    },
    "other": {
      "rate": 29,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 88,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 35,
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
      "soft_power": 7,
      "hard_power": 34,
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
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 30,
    "education": 4,
    "security": 9,
    "finance": 20,
    "environment": 60,
  }
};
