import { CountryData } from "../../types";

export const lesotho: CountryData = {
  "name_en": "Lesotho",
  "capital": "Maseru",
  "name_id": "Lesotho",
  "lon": 28.5,
  "lat": -29.5,
  "flag": "🇱🇸",
  "pop": 2108132,
  "budget": 24,
  "income": "69",
  "religion": "Katolik",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 17,
    "hydro_plant": 26,
    "nuclear_plant": 15,
    "power_grid": 67,
    "solar_plant": 38,
    "thermal_plant": 37,
    "wind_plant": 6,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 17,
    "bicycle_path": 28,
    "bus_terminal": 15,
    "helipad": 38,
    "highway": 13,
    "internet_coverage": 51,
    "railway": 8,
    "road_quality": 68,
    "sea_port": 22,
    "subway": 7,
    "tech_stack": 76,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 5,
    "coal": 8,
    "copper": 34,
    "gas": 26,
    "gold": 18,
    "iron_ore": 3,
    "lithium": 19,
    "nickel": 39,
    "oil": 6,
    "rare_earth": 22,
    "salt": 37,
    "strength": 29.660809349923973,
    "uranium": 3,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 10,
    "car": 19,
    "concrete_cement": 7,
    "fertilizer": 18,
    "instant_noodle": 2,
    "meat_processing": 17,
    "mineral_water": 36,
    "motorcycle": 21,
    "pharmacy": 33,
    "semiconductor": 36,
    "smelter": 2,
    "strength": 3.076011687404966,
    "sugar": 29,
    "wood": 22,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 8,
    "chicken": 15,
    "dairy_cow": 31,
    "fish": 31,
    "poultry": 27,
    "sheep_goat": 27,
    "shellfish": 33,
    "shrimp": 1,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 2,
    "coffee": 2,
    "corn": 13,
    "palm_oil": 23,
    "rice": 36,
    "soy": 5,
    "strength": 20.660809349923973,
    "sugarcane": 38,
    "tea": 29,
    "tubers": 18,
    "vegetables": 3,
    "wheat": 34,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 26,
    "armory": 28,
    "tank_hangar": 3,
    "military_academy": 35,
    "budget": 6,
    "personnel": 9245,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 19,
        "apc": 2,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 4,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 27,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2,
      },
      "total_unit": 6,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 24,
    "military_naval_base": 23,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 8,
    "intelligence": 21,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 19,
      "sabotage_mission": 21,
      "territory_management": 6,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 6,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 1,
      "elementary_school": 20,
      "middle_school": 22,
      "high_school": 6,
      "university": 1,
      "education_institute": 24,
      "laboratory": 17,
      "observatory": 6,
      "research_center": 14,
      "development_center": 1,
      "literacy": 67,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 32,
      "diagnostic_center": 21,
      "hospital_beds": 2889,
      "life_expectancy": 10,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 26,
      "stadium": 34,
      "international_stadium": 12,
      "olympic_score": 16,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 37,
      "court": 25,
      "prosecution_office": 26,
      "police_station": 17,
      "police_car_fleet": 5078,
      "police_academy": 15,
      "corruption_index": 65,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 19,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 1,
          "pusat_forensik": 1,
        },
        "response_time": 34,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 8,
    "aircraft": 36,
    "naval": 34,
    "air_base": 38,
    "naval_base": 28,
    "military_base": 29,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 12,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 16,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 40,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 17,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
      "revenue": 2
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 22,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 40,
    "salaryGuru": 40,
    "salaryMedis": 50,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 25,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 41000,
    "priceOil": 21560,
    "priceSugar": 28800,
    "priceEgg": 31100,
    "priceFuel": 10700,
    "priceElectric": 2240,
    "priceWater": 7280,
    "priceMedicine": 157900,
    "priceEducation": 387120
  },

  "demand": {
    "satisfaction": 69,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 11,
    "commercial": 1,
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
      "soft_power": 36,
      "hard_power": 23,
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
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 29,
    "education": 9,
    "security": 11,
    "finance": 33,
    "environment": 60,
  }
};
