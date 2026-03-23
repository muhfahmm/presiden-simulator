import { CountryData } from "../../types";

export const kongo: CountryData = {
  "name_en": "Republic of the Congo",
  "capital": "Brazzaville",
  "name_id": "Kongo",
  "lon": 15,
  "lat": -1,
  "flag": "🇨🇬",
  "pop": "10M",
  "budget": 146,
  "income": "417",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 18,
    "hydro_plant": 26,
    "nuclear_plant": 32,
    "power_grid": 53,
    "solar_plant": 12,
    "thermal_plant": 8,
    "wind_plant": 29,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 3,
    "bicycle_path": 35,
    "bus_terminal": 40,
    "helipad": 18,
    "highway": 21,
    "internet_coverage": 62,
    "railway": 32,
    "road_quality": 52,
    "sea_port": 38,
    "subway": 12,
    "tech_stack": 90,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 20,
    "coal": 31,
    "copper": 36,
    "gas": 9,
    "gold": 16,
    "iron_ore": 16,
    "lithium": 24,
    "nickel": 31,
    "oil": 34,
    "rare_earth": 4,
    "salt": 11,
    "strength": 29.660809349923973,
    "uranium": 32,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 25,
    "car": 24,
    "concrete_cement": 9,
    "fertilizer": 25,
    "instant_noodle": 35,
    "meat_processing": 18,
    "mineral_water": 26,
    "motorcycle": 34,
    "pharmacy": 23,
    "semiconductor": 25,
    "smelter": 10,
    "strength": 3.076011687404966,
    "sugar": 8,
    "wood": 20,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 29,
    "chicken": 38,
    "dairy_cow": 34,
    "fish": 20,
    "poultry": 23,
    "sheep_goat": 18,
    "shellfish": 23,
    "shrimp": 34,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 35,
    "coffee": 40,
    "corn": 19,
    "palm_oil": 16,
    "rice": 13,
    "soy": 28,
    "strength": 20.660809349923973,
    "sugarcane": 20,
    "tea": 36,
    "tubers": 18,
    "vegetables": 23,
    "wheat": 24,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 36,
    "armory": 3,
    "tank_hangar": 19,
    "military_academy": 40,
    "budget": 26,
    "personnel": 7783,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 24,
        "apc": 26,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 9,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 1,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2,
      },
      "total_unit": 16,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 5,
    "military_air_base": 27,
    "military_naval_base": 17,
    "arms_factory": 11,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 1,
    "intelligence": 26,
    "strategic_operations": {
      "attack_mission": 17,
      "spy_mission": 35,
      "sabotage_mission": 21,
      "territory_management": 3,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 14,
      "radar_network": 38,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 12,
      "middle_school": 7,
      "high_school": 19,
      "university": 23,
      "education_institute": 13,
      "laboratory": 26,
      "observatory": 1,
      "research_center": 38,
      "development_center": 33,
      "literacy": 64,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 13,
      "small_hospital": 23,
      "diagnostic_center": 6,
      "hospital_beds": 2277,
      "life_expectancy": 4,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 6,
      "stadium": 19,
      "international_stadium": 4,
      "olympic_score": 32,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 33,
      "court": 11,
      "prosecution_office": 28,
      "police_station": 29,
      "police_car_fleet": 6616,
      "police_academy": 16,
      "corruption_index": 88,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 31,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 31,
          "pusat_forensik": 1,
        },
        "response_time": 19,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 23,
    "tanks": 22,
    "aircraft": 14,
    "naval": 34,
    "air_base": 12,
    "naval_base": 18,
    "military_base": 27,
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
      "rate": 6,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 39,
      "satisfaction": 61,
      "revenue": 12
    },
    "customs": {
      "rate": 26,
      "satisfaction": 86,
      "revenue": 5
    },
    "environment": {
      "rate": 34,
      "satisfaction": 88,
      "revenue": 11
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 10,
      "satisfaction": 93,
      "revenue": 3
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 71,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 10,
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
      "soft_power": 15,
      "hard_power": 11,
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
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Ethiopia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Afrika Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Mesir", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Aljazair", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Maroko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 3,
    "education": 17,
    "security": 3,
    "finance": 37,
    "environment": 60,
  }
};
