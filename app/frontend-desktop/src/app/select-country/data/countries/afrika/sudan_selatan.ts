import { CountryData } from "../../types";

export const sudan_selatan: CountryData = {
  "name_en": "South Sudan",
  "capital": "Juba",
  "name_id": "Sudan selatan",
  "lon": 30,
  "lat": 7,
  "flag": "🇸🇸",
  "pop": "10M",
  "budget": 49,
  "income": "139",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 12,
    "hydro_plant": 36,
    "nuclear_plant": 28,
    "power_grid": 61,
    "solar_plant": 30,
    "thermal_plant": 20,
    "wind_plant": 14,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 36,
    "bicycle_path": 40,
    "bus_terminal": 37,
    "helipad": 15,
    "highway": 3,
    "internet_coverage": 63,
    "railway": 19,
    "road_quality": 80,
    "sea_port": 31,
    "subway": 10,
    "tech_stack": 78,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 16,
    "coal": 20,
    "copper": 34,
    "gas": 40,
    "gold": 30,
    "iron_ore": 5,
    "lithium": 29,
    "nickel": 38,
    "oil": 25,
    "rare_earth": 38,
    "salt": 10,
    "strength": 29.660809349923973,
    "uranium": 14,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 35,
    "car": 3,
    "concrete_cement": 36,
    "fertilizer": 29,
    "instant_noodle": 14,
    "meat_processing": 38,
    "mineral_water": 32,
    "motorcycle": 34,
    "pharmacy": 29,
    "semiconductor": 38,
    "smelter": 36,
    "strength": 3.076011687404966,
    "sugar": 38,
    "wood": 1,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 26,
    "chicken": 11,
    "dairy_cow": 6,
    "fish": 9,
    "poultry": 12,
    "sheep_goat": 34,
    "shellfish": 39,
    "shrimp": 4,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 34,
    "coffee": 6,
    "corn": 25,
    "palm_oil": 2,
    "rice": 8,
    "soy": 8,
    "strength": 20.660809349923973,
    "sugarcane": 17,
    "tea": 26,
    "tubers": 1,
    "vegetables": 4,
    "wheat": 29,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 6,
    "armory": 17,
    "tank_hangar": 1,
    "military_academy": 31,
    "budget": 33,
    "personnel": 27759,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 177,
        "apc": 106,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 115,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 161,
        "helikopter_serang": 103,
        "pesawat_pengintai": 2,
      },
      "total_unit": 18,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 28,
    "military_air_base": 22,
    "military_naval_base": 15,
    "arms_factory": 2,
    "nuclear_status": false,
    "space_program": 34,
    "cyber_defense": 11,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 39,
      "spy_mission": 9,
      "sabotage_mission": 30,
      "territory_management": 23,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 0,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 32,
      "middle_school": 39,
      "high_school": 12,
      "university": 20,
      "education_institute": 38,
      "laboratory": 39,
      "observatory": 27,
      "research_center": 17,
      "development_center": 14,
      "literacy": 86,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 38,
      "diagnostic_center": 34,
      "hospital_beds": 3392,
      "life_expectancy": 15,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 12,
      "racing_circuit": 21,
      "stadium": 32,
      "international_stadium": 15,
      "olympic_score": 27,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 26,
      "court": 22,
      "prosecution_office": 22,
      "police_station": 19,
      "police_car_fleet": 4342,
      "police_academy": 34,
      "corruption_index": 85,
      "security_index": 84,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 19,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 23,
          "pusat_forensik": 1,
        },
        "response_time": 29,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 35,
    "tanks": 31,
    "aircraft": 40,
    "naval": 31,
    "air_base": 17,
    "naval_base": 1,
    "military_base": 9,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 3,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 19,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 1
    },
    "income": {
      "rate": 8,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 21,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 73,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
    "commercial": 25,
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
      "soft_power": 24,
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
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Ghana", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Kenya", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 33,
    "education": 12,
    "security": 20,
    "finance": 26,
    "environment": 60,
  }
};
