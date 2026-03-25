import { CountryData } from "../../types";

export const nigeria: CountryData = {
  "name_en": "Nigeria",
  "capital": "Abuja",
  "name_id": "Nigeria",
  "lon": 8,
  "lat": 10,
  "flag": "🇳🇬",
  "pop": 195874740,
  "budget": 4618,
  "income": "13196",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 28,
    "hydro_plant": 40,
    "nuclear_plant": 17,
    "power_grid": 85,
    "solar_plant": 6,
    "thermal_plant": 15,
    "wind_plant": 5,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 17,
    "bicycle_path": 19,
    "bus_terminal": 29,
    "helipad": 33,
    "highway": 8,
    "internet_coverage": 56,
    "railway": 32,
    "road_quality": 95,
    "sea_port": 25,
    "subway": 21,
    "tech_stack": 50,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 36,
    "coal": 14,
    "copper": 3,
    "gas": 85,
    "gold": 34,
    "iron_ore": 24,
    "lithium": 35,
    "nickel": 35,
    "oil": 90,
    "rare_earth": 39,
    "salt": 21,
    "strength": 29.660809349923973,
    "uranium": 3,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 6,
    "car": 31,
    "concrete_cement": 31,
    "fertilizer": 29,
    "instant_noodle": 35,
    "meat_processing": 26,
    "mineral_water": 26,
    "motorcycle": 21,
    "pharmacy": 28,
    "semiconductor": 6,
    "smelter": 30,
    "strength": 3.076011687404966,
    "sugar": 15,
    "wood": 39,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 13,
    "chicken": 33,
    "dairy_cow": 13,
    "fish": 24,
    "poultry": 33,
    "sheep_goat": 27,
    "shellfish": 2,
    "shrimp": 36,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 24,
    "coffee": 7,
    "corn": 50,
    "palm_oil": 5,
    "rice": 60,
    "soy": 13,
    "strength": 20.660809349923973,
    "sugarcane": 35,
    "tea": 1,
    "tubers": 14,
    "vegetables": 14,
    "wheat": 27,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 12,
    "armory": 1,
    "tank_hangar": 1,
    "military_academy": 39,
    "budget": 1319,
    "personnel": 21640,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 47,
        "apc": 162,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 80,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 82,
        "helikopter_serang": 128,
        "pesawat_pengintai": 2,
      },
      "total_unit": 21,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 16,
    "military_air_base": 27,
    "military_naval_base": 17,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 15,
    "cyber_defense": 5,
    "intelligence": 12,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 15,
      "sabotage_mission": 35,
      "territory_management": 4,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 34,
      "elementary_school": 11,
      "middle_school": 14,
      "high_school": 3,
      "university": 10,
      "education_institute": 24,
      "laboratory": 33,
      "observatory": 29,
      "research_center": 22,
      "development_center": 16,
      "literacy": 66,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 13,
      "diagnostic_center": 8,
      "hospital_beds": 7705,
      "life_expectancy": 1,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 17,
      "racing_circuit": 8,
      "stadium": 25,
      "international_stadium": 32,
      "olympic_score": 22,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 6,
      "court": 2,
      "prosecution_office": 17,
      "police_station": 34,
      "police_car_fleet": 8695,
      "police_academy": 14,
      "corruption_index": 73,
      "security_index": 56,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 8,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 7,
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
    "infantry": 16,
    "tanks": 3,
    "aircraft": 27,
    "naval": 18,
    "air_base": 18,
    "naval_base": 19,
    "military_base": 10,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 33,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 10,
      "satisfaction": 67,
      "revenue": 99
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 255
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 323
    },
    "customs": {
      "rate": 17,
      "satisfaction": 86,
      "revenue": 131
    },
    "environment": {
      "rate": 10,
      "satisfaction": 88,
      "revenue": 58
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 24 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 70 },
    "other": {
      "rate": 21,
      "satisfaction": 93,
      "revenue": 236
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
    "salaryMedis": 40,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
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
    "priceBeef": 52050,
    "priceChicken": 32800,
    "priceOil": 30800,
    "priceSugar": 7200,
    "priceEgg": 43540,
    "priceFuel": 14980,
    "priceElectric": 2240,
    "priceWater": 10400,
    "priceMedicine": 78950,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 79,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 8,
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
      "soft_power": 37,
      "hard_power": 1,
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
    "health": 34,
    "education": 15,
    "security": 26,
    "finance": 21,
    "environment": 60,
  }
};
