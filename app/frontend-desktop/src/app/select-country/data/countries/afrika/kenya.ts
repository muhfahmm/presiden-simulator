import { CountryData } from "../../types";

export const kenya: CountryData = {
  "name_en": "Kenya",
  "capital": "Nairobi",
  "name_id": "Kenya",
  "lon": 38,
  "lat": 1,
  "flag": "🇰🇪",
  "pop": 51393010,
  "budget": 1070,
  "income": "3056",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 26,
    "hydro_plant": 13,
    "nuclear_plant": 8,
    "power_grid": 85,
    "solar_plant": 18,
    "thermal_plant": 7,
    "wind_plant": 9,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 6,
    "bicycle_path": 36,
    "bus_terminal": 9,
    "helipad": 3,
    "highway": 17,
    "internet_coverage": 85,
    "railway": 39,
    "road_quality": 65,
    "sea_port": 1,
    "subway": 13,
    "tech_stack": 52,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 10,
    "coal": 7,
    "copper": 5,
    "gas": 8,
    "gold": 7,
    "iron_ore": 8,
    "lithium": 4,
    "nickel": 14,
    "oil": 23,
    "rare_earth": 28,
    "salt": 20,
    "strength": 29.660809349923973,
    "uranium": 10,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 25,
    "car": 30,
    "concrete_cement": 9,
    "fertilizer": 7,
    "instant_noodle": 15,
    "meat_processing": 34,
    "mineral_water": 36,
    "motorcycle": 17,
    "pharmacy": 12,
    "semiconductor": 14,
    "smelter": 29,
    "strength": 3.076011687404966,
    "sugar": 2,
    "wood": 40,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 16,
    "chicken": 10,
    "dairy_cow": 33,
    "fish": 7,
    "poultry": 31,
    "sheep_goat": 36,
    "shellfish": 38,
    "shrimp": 19,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 3,
    "coffee": 70,
    "corn": 10,
    "palm_oil": 4,
    "rice": 26,
    "soy": 35,
    "strength": 20.660809349923973,
    "sugarcane": 40,
    "tea": 85,
    "tubers": 14,
    "vegetables": 32,
    "wheat": 11,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 33,
    "barracks": 15,
    "armory": 7,
    "tank_hangar": 13,
    "military_academy": 33,
    "budget": 305,
    "personnel": 22851,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 15,
        "apc": 26,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 34,
        "helikopter_serang": 18,
        "pesawat_pengintai": 2,
      },
      "total_unit": 31,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 9,
    "military_air_base": 17,
    "military_naval_base": 10,
    "arms_factory": 6,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 19,
    "intelligence": 32,
    "strategic_operations": {
      "attack_mission": 39,
      "spy_mission": 34,
      "sabotage_mission": 39,
      "territory_management": 24,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 20,
      "radar_network": 2,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 17,
      "middle_school": 16,
      "high_school": 12,
      "university": 40,
      "education_institute": 35,
      "laboratory": 27,
      "observatory": 20,
      "research_center": 34,
      "development_center": 18,
      "literacy": 57,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 6,
      "diagnostic_center": 20,
      "hospital_beds": 1083,
      "life_expectancy": 37,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 4,
      "racing_circuit": 35,
      "stadium": 26,
      "international_stadium": 5,
      "olympic_score": 30,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 9,
      "court": 14,
      "prosecution_office": 40,
      "police_station": 31,
      "police_car_fleet": 7884,
      "police_academy": 8,
      "corruption_index": 69,
      "security_index": 93,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 24,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 27,
          "kamera_surveillance": 9,
          "pusat_forensik": 1,
        },
        "response_time": 16,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 15,
    "aircraft": 10,
    "naval": 34,
    "air_base": 11,
    "naval_base": 33,
    "military_base": 21,
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
      "rate": 31,
      "satisfaction": 67,
      "revenue": 55
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 95
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 49
    },
    "customs": {
      "rate": 35,
      "satisfaction": 86,
      "revenue": 78
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
      "revenue": 15
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 6 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 17 },
    "other": {
      "rate": 3,
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
    "salaryAsn": 50,
    "salaryGuru": 50,
    "salaryMedis": 40,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 25,
    "subsidyUmkm": 25,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 52050,
    "priceChicken": 57400,
    "priceOil": 30800,
    "priceSugar": 28800,
    "priceEgg": 43540,
    "priceFuel": 14980,
    "priceElectric": 1600,
    "priceWater": 4160,
    "priceMedicine": 221060,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 53,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 12,
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
      "soft_power": 31,
      "hard_power": 18,
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
    "health": 27,
    "education": 5,
    "security": 40,
    "finance": 23,
    "environment": 60,
  }
};
