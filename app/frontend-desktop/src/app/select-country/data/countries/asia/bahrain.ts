import { CountryData } from "../../types";

export const bahrain: CountryData = {
  "name_en": "Bahrain",
  "capital": "Manama",
  "name_id": "Bahrain",
  "lon": 50.55,
  "lat": 26,
  "flag": "🇧🇭",
  "pop": 1569439,
  "budget": 428,
  "income": "1222",
  "religion": "Islam",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 20,
    "solar_plant": 25,
    "thermal_plant": 21,
    "gas_plant": 18,
    "wind_plant": 26,
    "power_grid": 84,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 24,
    "subway": 10,
    "railway": 28,
    "highway": 34,
    "road_quality": 64,
    "sea_port": 20,
    "airport": 11,
    "bus_terminal": 30,
    "helipad": 16,
    "internet_coverage": 56,
    "tech_stack": 69,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 12,
    "uranium": 11,
    "coal": 19,
    "oil": 19,
    "gas": 31,
    "salt": 14,
    "nickel": 25,
    "lithium": 27,
    "aluminum": 18,
    "copper": 35,
    "rare_earth": 26,
    "iron_ore": 36,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 35,
    "motorcycle": 33,
    "smelter": 21,
    "concrete_cement": 14,
    "wood": 26,
    "mineral_water": 25,
    "sugar": 12,
    "bread": 40,
    "pharmacy": 5,
    "fertilizer": 24,
    "meat_processing": 8,
    "instant_noodle": 34,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 27,
    "poultry": 36,
    "dairy_cow": 7,
    "beef_cow": 5,
    "sheep_goat": 33,
    "shrimp": 25,
    "fish": 10,
    "shellfish": 39,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 23,
    "wheat": 10,
    "corn": 22,
    "tubers": 40,
    "soy": 40,
    "palm_oil": 2,
    "tea": 13,
    "coffee": 29,
    "cocoa": 24,
    "sugarcane": 24,
    "vegetables": 15,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 6,
    "armory": 20,
    "tank_hangar": 38,
    "military_academy": 9,
    "budget": 122,
    "personnel": 9786,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 29,
        "apc": 7,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 39,
        "helikopter_serang": 32,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 25,
    "military_air_base": 33,
    "military_naval_base": 25,
    "nuclear_status": false,
    "space_program": 1,
    "cyber_defense": 17,
    "intelligence": 37,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 34,
      "sabotage_mission": 9,
      "territory_management": 33,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 14,
      "radar_network": 9,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 35,
      "middle_school": 39,
      "high_school": 12,
      "university": 24,
      "education_institute": 3,
      "laboratory": 12,
      "observatory": 4,
      "research_center": 18,
      "development_center": 24,
      "literacy": 61,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 12,
      "diagnostic_center": 7,
      "hospital_beds": 5560,
      "life_expectancy": 11,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 5,
      "racing_circuit": 13,
      "stadium": 4,
      "international_stadium": 27,
      "olympic_score": 24,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 35,
      "court": 20,
      "prosecution_office": 22,
      "police_station": 24,
      "police_car_fleet": 9975,
      "police_academy": 8,
      "corruption_index": 92,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 19,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 35,
          "kamera_surveillance": 9,
          "pusat_forensik": 1
        },
        "response_time": 36,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 28,
    "tanks": 14,
    "aircraft": 3,
    "naval": 23,
    "air_base": 6,
    "naval_base": 25,
    "military_base": 39,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 5,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67,
      "revenue": 6
    },
    "corporate": {
      "rate": 27,
      "satisfaction": 52,
      "revenue": 27
    },
    "income": {
      "rate": 20,
      "satisfaction": 61,
      "revenue": 11
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86,
      "revenue": 2
    },
    "environment": {
      "rate": 37,
      "satisfaction": 88,
      "revenue": 22
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 7 },
    "other": {
      "rate": 26,
      "satisfaction": 93,
      "revenue": 31
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 60,
    "salaryGuru": 60,
    "salaryMedis": 80,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
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
    "priceRice": 22400,
    "priceBeef": 104100,
    "priceChicken": 20500,
    "priceOil": 30800,
    "priceSugar": 20160,
    "priceEgg": 31100,
    "priceFuel": 5350,
    "priceElectric": 3200,
    "priceWater": 10400,
    "priceMedicine": 157900,
    "priceEducation": 677460
  },

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 35,
    "industrial": 53
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
      "soft_power": 27,
      "hard_power": 14,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 32,
    "education": 35,
    "security": 22,
    "finance": 13,
    "environment": 60
  }
};
