import { CountryData } from "../../types";

export const mozambik: CountryData = {
  "name_en": "Mozambique",
  "capital": "Maputo",
  "name_id": "Mozambik",
  "lon": 35,
  "lat": -18.25,
  "flag": "🇲🇿",
  "pop": "10M",
  "budget": 804,
  "income": "804 / 804 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 34,
    "hydro_plant": 34,
    "nuclear_plant": 9,
    "power_grid": 91,
    "solar_plant": 4,
    "thermal_plant": 7,
    "wind_plant": 17,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 37,
    "bicycle_path": 37,
    "bus_terminal": 13,
    "helipad": 11,
    "highway": 5,
    "internet_coverage": 89,
    "railway": 8,
    "road_quality": 51,
    "sea_port": 14,
    "subway": 18,
    "tech_stack": 83,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 36,
    "coal": 12,
    "copper": 10,
    "gas": 9,
    "gold": 6,
    "iron_ore": 31,
    "lithium": 5,
    "nickel": 9,
    "oil": 35,
    "rare_earth": 27,
    "salt": 8,
    "strength": 29.660809349923973,
    "uranium": 18,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 22,
    "car": 31,
    "concrete_cement": 11,
    "fertilizer": 36,
    "instant_noodle": 33,
    "meat_processing": 5,
    "mineral_water": 25,
    "motorcycle": 5,
    "pharmacy": 12,
    "semiconductor": 13,
    "smelter": 29,
    "strength": 3.076011687404966,
    "sugar": 27,
    "wood": 28,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 11,
    "chicken": 1,
    "dairy_cow": 2,
    "fish": 9,
    "poultry": 35,
    "sheep_goat": 7,
    "shellfish": 7,
    "shrimp": 17,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 35,
    "coffee": 4,
    "corn": 29,
    "palm_oil": 27,
    "rice": 2,
    "soy": 16,
    "strength": 20.660809349923973,
    "sugarcane": 31,
    "tea": 1,
    "tubers": 7,
    "vegetables": 1,
    "wheat": 24,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 12,
    "armory": 16,
    "tank_hangar": 25,
    "military_academy": 27,
    "budget": 804,
    "personnel": 17347,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 164,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 37,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 77,
        "helikopter_serang": 63,
        "pesawat_pengintai": 2,
      },
      "total_unit": 15,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 12,
    "military_air_base": 11,
    "military_naval_base": 27,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 40,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 3,
      "sabotage_mission": 30,
      "territory_management": 5,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 3,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 38,
      "elementary_school": 12,
      "middle_school": 22,
      "high_school": 16,
      "university": 17,
      "education_institute": 12,
      "laboratory": 17,
      "observatory": 33,
      "research_center": 25,
      "development_center": 4,
      "literacy": 83,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 34,
      "small_hospital": 7,
      "diagnostic_center": 40,
      "hospital_beds": 9983,
      "life_expectancy": 23,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 26,
      "stadium": 9,
      "international_stadium": 3,
      "olympic_score": 27,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 34,
      "court": 38,
      "prosecution_office": 7,
      "police_station": 9,
      "police_car_fleet": 4434,
      "police_academy": 35,
      "corruption_index": 78,
      "security_index": 84,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 23,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 2,
          "pusat_forensik": 1,
        },
        "response_time": 12,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 3,
    "aircraft": 20,
    "naval": 17,
    "air_base": 37,
    "naval_base": 1,
    "military_base": 23,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 35,
      "satisfaction": 67,
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52,
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
    },
    "customs": {
      "rate": 8,
      "satisfaction": 86,
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
    },
    "other": {
      "rate": 6,
      "satisfaction": 93,
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 77,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 24,
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
      "soft_power": 12,
      "hard_power": 28,
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
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 6,
    "education": 25,
    "security": 1,
    "finance": 35,
    "environment": 60,
  }
};
