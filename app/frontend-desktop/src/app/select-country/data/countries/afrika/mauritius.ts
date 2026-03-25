import { CountryData } from "../../types";

export const mauritius: CountryData = {
  "name_en": "Mauritius",
  "capital": "Port Louis",
  "name_id": "Mauritius",
  "lon": 57.55,
  "lat": -20.28333333,
  "flag": "🇲🇺",
  "pop": 1265303,
  "budget": 136,
  "income": "389",
  "religion": "Hindu",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 13,
    "hydro_plant": 22,
    "nuclear_plant": 28,
    "power_grid": 86,
    "solar_plant": 3,
    "thermal_plant": 13,
    "wind_plant": 11,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 32,
    "bicycle_path": 21,
    "bus_terminal": 24,
    "helipad": 32,
    "highway": 4,
    "internet_coverage": 75,
    "railway": 2,
    "road_quality": 68,
    "sea_port": 36,
    "subway": 11,
    "tech_stack": 74,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 23,
    "coal": 5,
    "copper": 4,
    "gas": 7,
    "gold": 27,
    "iron_ore": 18,
    "lithium": 37,
    "nickel": 36,
    "oil": 26,
    "rare_earth": 15,
    "salt": 5,
    "strength": 29.660809349923973,
    "uranium": 35,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 22,
    "car": 40,
    "concrete_cement": 26,
    "fertilizer": 40,
    "instant_noodle": 1,
    "meat_processing": 16,
    "mineral_water": 5,
    "motorcycle": 26,
    "pharmacy": 33,
    "semiconductor": 39,
    "smelter": 38,
    "strength": 3.076011687404966,
    "sugar": 24,
    "wood": 14,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 30,
    "chicken": 22,
    "dairy_cow": 16,
    "fish": 10,
    "poultry": 11,
    "sheep_goat": 15,
    "shellfish": 25,
    "shrimp": 39,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 5,
    "coffee": 17,
    "corn": 17,
    "palm_oil": 15,
    "rice": 8,
    "soy": 35,
    "strength": 20.660809349923973,
    "sugarcane": 24,
    "tea": 25,
    "tubers": 3,
    "vegetables": 2,
    "wheat": 5,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 29,
    "barracks": 2,
    "armory": 6,
    "tank_hangar": 10,
    "military_academy": 5,
    "budget": 38,
    "personnel": 23297,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 164,
        "apc": 69,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 116,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 172,
        "helikopter_serang": 181,
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
    "command_center": 17,
    "military_air_base": 28,
    "military_naval_base": 15,
    "nuclear_status": false,
    "space_program": 5,
    "cyber_defense": 40,
    "intelligence": 21,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 17,
      "sabotage_mission": 6,
      "territory_management": 39,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 1,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 14,
      "middle_school": 17,
      "high_school": 38,
      "university": 2,
      "education_institute": 13,
      "laboratory": 1,
      "observatory": 25,
      "research_center": 16,
      "development_center": 36,
      "literacy": 95,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 17,
      "diagnostic_center": 10,
      "hospital_beds": 4769,
      "life_expectancy": 11,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 3,
      "stadium": 33,
      "international_stadium": 15,
      "olympic_score": 8,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 35,
      "court": 27,
      "prosecution_office": 23,
      "police_station": 22,
      "police_car_fleet": 1046,
      "police_academy": 37,
      "corruption_index": 72,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 1,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 36,
          "kamera_surveillance": 20,
          "pusat_forensik": 1,
        },
        "response_time": 39,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 34,
    "tanks": 24,
    "aircraft": 17,
    "naval": 40,
    "air_base": 32,
    "naval_base": 3,
    "military_base": 37,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 22,
      "satisfaction": 67,
      "revenue": 5
    },
    "corporate": {
      "rate": 8,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 22,
      "satisfaction": 61,
      "revenue": 3
    },
    "customs": {
      "rate": 14,
      "satisfaction": 86,
      "revenue": 2
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
      "revenue": 10
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 22,
      "satisfaction": 93,
      "revenue": 7
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 30,
    "salaryGuru": 50,
    "salaryMedis": 40,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 32000,
    "priceBeef": 208200,
    "priceChicken": 32800,
    "priceOil": 30800,
    "priceSugar": 28800,
    "priceEgg": 62200,
    "priceFuel": 14980,
    "priceElectric": 1600,
    "priceWater": 5200,
    "priceMedicine": 315800,
    "priceEducation": 241950
  },

  "demand": {
    "satisfaction": 79,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
    "commercial": 16,
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
      "soft_power": 13,
      "hard_power": 33,
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
    "health": 14,
    "education": 39,
    "security": 11,
    "finance": 37,
    "environment": 60,
  }
};
