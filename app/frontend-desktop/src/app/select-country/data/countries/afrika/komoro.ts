import { CountryData } from "../../types";

export const komoro: CountryData = {
  "name_en": "Comoros",
  "capital": "Moroni",
  "name_id": "Komoro",
  "lon": 44.25,
  "lat": -12.16666666,
  "flag": "🇰🇲",
  "pop": 832322,
  "budget": 13,
  "income": "36",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 4,
    "hydro_plant": 26,
    "nuclear_plant": 1,
    "power_grid": 59,
    "solar_plant": 24,
    "thermal_plant": 30,
    "wind_plant": 29,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 23,
    "bicycle_path": 36,
    "bus_terminal": 4,
    "helipad": 19,
    "highway": 27,
    "internet_coverage": 93,
    "railway": 8,
    "road_quality": 68,
    "sea_port": 5,
    "subway": 39,
    "tech_stack": 72,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 18,
    "coal": 15,
    "copper": 1,
    "gas": 29,
    "gold": 19,
    "iron_ore": 3,
    "lithium": 15,
    "nickel": 4,
    "oil": 17,
    "rare_earth": 38,
    "salt": 6,
    "strength": 29.660809349923973,
    "uranium": 6,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 14,
    "car": 3,
    "concrete_cement": 2,
    "fertilizer": 2,
    "instant_noodle": 17,
    "meat_processing": 29,
    "mineral_water": 30,
    "motorcycle": 20,
    "pharmacy": 36,
    "semiconductor": 17,
    "smelter": 3,
    "strength": 3.076011687404966,
    "sugar": 9,
    "wood": 19,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 10,
    "chicken": 30,
    "dairy_cow": 21,
    "fish": 32,
    "poultry": 26,
    "sheep_goat": 12,
    "shellfish": 2,
    "shrimp": 20,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 35,
    "coffee": 27,
    "corn": 9,
    "palm_oil": 20,
    "rice": 17,
    "soy": 35,
    "strength": 20.660809349923973,
    "sugarcane": 10,
    "tea": 19,
    "tubers": 23,
    "vegetables": 13,
    "wheat": 12,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 14,
    "barracks": 15,
    "armory": 39,
    "tank_hangar": 27,
    "military_academy": 9,
    "budget": 3,
    "personnel": 27240,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 14,
        "apc": 31,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 21,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 16,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2,
      },
      "total_unit": 30,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 38,
    "military_air_base": 32,
    "military_naval_base": 6,
    "nuclear_status": false,
    "space_program": 25,
    "cyber_defense": 25,
    "intelligence": 9,
    "strategic_operations": {
      "attack_mission": 4,
      "spy_mission": 16,
      "sabotage_mission": 30,
      "territory_management": 4,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 37,
      "radar_network": 40,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 14,
      "elementary_school": 36,
      "middle_school": 35,
      "high_school": 30,
      "university": 4,
      "education_institute": 2,
      "laboratory": 23,
      "observatory": 10,
      "research_center": 6,
      "development_center": 13,
      "literacy": 56,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 38,
      "diagnostic_center": 33,
      "hospital_beds": 7311,
      "life_expectancy": 35,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 35,
      "stadium": 20,
      "international_stadium": 1,
      "olympic_score": 24,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 11,
      "court": 5,
      "prosecution_office": 25,
      "police_station": 4,
      "police_car_fleet": 3539,
      "police_academy": 1,
      "corruption_index": 71,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 9,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 38,
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
    "infantry": 12,
    "tanks": 32,
    "aircraft": 36,
    "naval": 27,
    "air_base": 13,
    "naval_base": 16,
    "military_base": 9,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 31,
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
      "rate": 16,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 29,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 7,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 6,
      "satisfaction": 93,
      "revenue": 0
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
    "salaryGuru": 60,
    "salaryMedis": 40,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 25,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 25,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 0
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 145740,
    "priceChicken": 82000,
    "priceOil": 15400,
    "priceSugar": 7200,
    "priceEgg": 31100,
    "priceFuel": 21400,
    "priceElectric": 1600,
    "priceWater": 5200,
    "priceMedicine": 126320,
    "priceEducation": 967800
  },

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 12,
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
      "hard_power": 27,
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
    "health": 7,
    "education": 6,
    "security": 31,
    "finance": 37,
    "environment": 60,
  }
};
