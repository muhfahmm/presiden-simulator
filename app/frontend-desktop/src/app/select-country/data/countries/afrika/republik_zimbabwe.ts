import { CountryData } from "../../types";

export const republik_zimbabwe: CountryData = {
  "name_en": "Zimbabwe",
  "capital": "Harare",
  "name_id": "Republik zimbabwe",
  "lon": 30,
  "lat": -20,
  "flag": "🇿🇼",
  "pop": 14439018,
  "budget": 194,
  "income": "556",
  "religion": "Protestan",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 23,
    "hydro_plant": 11,
    "nuclear_plant": 30,
    "power_grid": 66,
    "solar_plant": 14,
    "thermal_plant": 1,
    "wind_plant": 1,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 20,
    "bicycle_path": 12,
    "bus_terminal": 22,
    "helipad": 10,
    "highway": 25,
    "internet_coverage": 61,
    "railway": 17,
    "road_quality": 78,
    "sea_port": 23,
    "subway": 11,
    "tech_stack": 73,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 36,
    "coal": 8,
    "copper": 24,
    "gas": 30,
    "gold": 23,
    "iron_ore": 36,
    "lithium": 26,
    "nickel": 21,
    "oil": 6,
    "rare_earth": 40,
    "salt": 17,
    "strength": 29.660809349923973,
    "uranium": 20,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 16,
    "car": 19,
    "concrete_cement": 40,
    "fertilizer": 18,
    "instant_noodle": 37,
    "meat_processing": 25,
    "mineral_water": 25,
    "motorcycle": 16,
    "pharmacy": 16,
    "semiconductor": 11,
    "smelter": 24,
    "strength": 3.076011687404966,
    "sugar": 31,
    "wood": 26,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 40,
    "chicken": 10,
    "dairy_cow": 34,
    "fish": 1,
    "poultry": 9,
    "sheep_goat": 32,
    "shellfish": 21,
    "shrimp": 27,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 22,
    "coffee": 6,
    "corn": 34,
    "palm_oil": 12,
    "rice": 19,
    "soy": 14,
    "strength": 20.660809349923973,
    "sugarcane": 38,
    "tea": 8,
    "tubers": 22,
    "vegetables": 14,
    "wheat": 39,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 35,
    "barracks": 7,
    "armory": 9,
    "tank_hangar": 2,
    "military_academy": 20,
    "budget": 55,
    "personnel": 13156,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 92,
        "apc": 97,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 119,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 120,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
      },
      "total_unit": 11,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 6,
    "military_naval_base": 20,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 1,
    "intelligence": 15,
    "strategic_operations": {
      "attack_mission": 28,
      "spy_mission": 22,
      "sabotage_mission": 39,
      "territory_management": 37,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
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
      "elementary_school": 32,
      "middle_school": 5,
      "high_school": 3,
      "university": 19,
      "education_institute": 15,
      "laboratory": 25,
      "observatory": 14,
      "research_center": 39,
      "development_center": 16,
      "literacy": 62,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 6,
      "small_hospital": 33,
      "diagnostic_center": 35,
      "hospital_beds": 2089,
      "life_expectancy": 38,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 15,
      "racing_circuit": 12,
      "stadium": 9,
      "international_stadium": 28,
      "olympic_score": 16,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 9,
      "court": 8,
      "prosecution_office": 23,
      "police_station": 6,
      "police_car_fleet": 1107,
      "police_academy": 8,
      "corruption_index": 76,
      "security_index": 86,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 35,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 33,
          "pusat_forensik": 1,
        },
        "response_time": 32,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 26,
    "tanks": 32,
    "aircraft": 5,
    "naval": 25,
    "air_base": 24,
    "naval_base": 20,
    "military_base": 4,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 4,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
      "revenue": 15
    },
    "corporate": {
      "rate": 25,
      "satisfaction": 52,
      "revenue": 13
    },
    "income": {
      "rate": 18,
      "satisfaction": 61,
      "revenue": 7
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86,
      "revenue": 7
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 26,
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
    "salaryAsn": 40,
    "salaryGuru": 40,
    "salaryMedis": 50,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 8000,
    "priceBeef": 104100,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 14400,
    "priceEgg": 24880,
    "priceFuel": 8560,
    "priceElectric": 2240,
    "priceWater": 5200,
    "priceMedicine": 157900,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 58,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 27,
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
      "soft_power": 2,
      "hard_power": 24,
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
    "health": 31,
    "education": 17,
    "security": 27,
    "finance": 5,
    "environment": 60,
  }
};
