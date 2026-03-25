import { CountryData } from "../../types";

export const guinea: CountryData = {
  "name_en": "Guinea",
  "capital": "Conakry",
  "name_id": "Guinea",
  "lon": -10,
  "lat": 11,
  "flag": "🇬🇳",
  "pop": 12414318,
  "budget": 175,
  "income": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 33,
    "hydro_plant": 9,
    "nuclear_plant": 20,
    "power_grid": 59,
    "solar_plant": 7,
    "thermal_plant": 15,
    "wind_plant": 37,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 2,
    "bicycle_path": 19,
    "bus_terminal": 8,
    "helipad": 27,
    "highway": 9,
    "internet_coverage": 81,
    "railway": 33,
    "road_quality": 92,
    "sea_port": 24,
    "subway": 9,
    "tech_stack": 63,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 25,
    "coal": 2,
    "copper": 20,
    "gas": 35,
    "gold": 30,
    "iron_ore": 34,
    "lithium": 16,
    "nickel": 25,
    "oil": 19,
    "rare_earth": 13,
    "salt": 12,
    "strength": 29.660809349923973,
    "uranium": 18,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 1,
    "car": 13,
    "concrete_cement": 40,
    "fertilizer": 12,
    "instant_noodle": 3,
    "meat_processing": 18,
    "mineral_water": 17,
    "motorcycle": 33,
    "pharmacy": 18,
    "semiconductor": 21,
    "smelter": 34,
    "strength": 3.076011687404966,
    "sugar": 15,
    "wood": 27,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 5,
    "chicken": 18,
    "dairy_cow": 29,
    "fish": 1,
    "poultry": 29,
    "sheep_goat": 30,
    "shellfish": 35,
    "shrimp": 8,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 34,
    "coffee": 14,
    "corn": 22,
    "palm_oil": 33,
    "rice": 17,
    "soy": 22,
    "strength": 20.660809349923973,
    "sugarcane": 38,
    "tea": 40,
    "tubers": 30,
    "vegetables": 1,
    "wheat": 9,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 20,
    "armory": 13,
    "tank_hangar": 9,
    "military_academy": 28,
    "budget": 50,
    "personnel": 25018,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 4,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 12,
        "helikopter_serang": 3,
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
    "command_center": 27,
    "military_air_base": 26,
    "military_naval_base": 10,
    "arms_factory": 34,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 29,
    "intelligence": 19,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 21,
      "sabotage_mission": 35,
      "territory_management": 10,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 22,
      "radar_network": 34,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 10,
      "elementary_school": 33,
      "middle_school": 17,
      "high_school": 10,
      "university": 11,
      "education_institute": 10,
      "laboratory": 1,
      "observatory": 26,
      "research_center": 26,
      "development_center": 9,
      "literacy": 80,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 2,
      "diagnostic_center": 39,
      "hospital_beds": 5525,
      "life_expectancy": 37,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 1,
      "racing_circuit": 8,
      "stadium": 33,
      "international_stadium": 20,
      "olympic_score": 8,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 27,
      "court": 40,
      "prosecution_office": 17,
      "police_station": 38,
      "police_car_fleet": 5895,
      "police_academy": 2,
      "corruption_index": 85,
      "security_index": 71,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 18,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 17,
          "kamera_surveillance": 25,
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
    "infantry": 11,
    "tanks": 7,
    "aircraft": 35,
    "naval": 22,
    "air_base": 39,
    "naval_base": 36,
    "military_base": 15,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 24,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 33,
      "satisfaction": 67,
      "revenue": 15
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52,
      "revenue": 8
    },
    "income": {
      "rate": 3,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 20,
      "satisfaction": 86,
      "revenue": 9
    },
    "environment": {
      "rate": 25,
      "satisfaction": 88,
      "revenue": 5
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 21,
      "satisfaction": 93,
      "revenue": 8
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
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 25,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 57400,
    "priceOil": 15400,
    "priceSugar": 11520,
    "priceEgg": 43540,
    "priceFuel": 14980,
    "priceElectric": 1280,
    "priceWater": 5200,
    "priceMedicine": 126320,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 60,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 14,
    "commercial": 14,
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
      "soft_power": 18,
      "hard_power": 5,
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
    "health": 4,
    "education": 16,
    "security": 12,
    "finance": 31,
    "environment": 60,
  }
};
