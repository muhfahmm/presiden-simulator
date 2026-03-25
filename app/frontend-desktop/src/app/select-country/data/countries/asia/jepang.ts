import { CountryData } from "../../types";

export const jepang: CountryData = {
  "name_en": "Japan",
  "capital": "Tokyo",
  "name_id": "Jepang",
  "lon": 138,
  "lat": 36,
  "flag": "🇯🇵",
  "pop": 126529100,
  "budget": 39962,
  "income": "114176",
  "religion": "Shinto",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 10,
    "hydro_plant": 35,
    "solar_plant": 9,
    "thermal_plant": 2,
    "gas_plant": 35,
    "wind_plant": 28,
    "power_grid": 66,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 38,
    "subway": 19,
    "railway": 19,
    "highway": 14,
    "road_quality": 91,
    "sea_port": 1,
    "airport": 36,
    "bus_terminal": 9,
    "helipad": 7,
    "internet_coverage": 93,
    "tech_stack": 80,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 31,
    "uranium": 29,
    "coal": 39,
    "oil": 16,
    "gas": 24,
    "salt": 6,
    "nickel": 5,
    "lithium": 11,
    "aluminum": 17,
    "copper": 27,
    "rare_earth": 9,
    "iron_ore": 39,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 13,
    "motorcycle": 31,
    "smelter": 28,
    "concrete_cement": 39,
    "wood": 17,
    "mineral_water": 27,
    "sugar": 16,
    "bread": 16,
    "pharmacy": 13,
    "fertilizer": 1,
    "meat_processing": 1,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 10,
    "dairy_cow": 24,
    "beef_cow": 13,
    "sheep_goat": 10,
    "shrimp": 32,
    "fish": 38,
    "shellfish": 19,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 17,
    "wheat": 4,
    "corn": 18,
    "tubers": 12,
    "soy": 23,
    "palm_oil": 29,
    "tea": 25,
    "coffee": 35,
    "cocoa": 40,
    "sugarcane": 18,
    "vegetables": 19,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 32,
    "armory": 36,
    "tank_hangar": 13,
    "military_academy": 12,
    "budget": 11417,
    "personnel": 24201,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 1,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 3,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 15,
    "military_naval_base": 31,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 19,
    "intelligence": 3,
    "strategic_operations": {
      "attack_mission": 33,
      "spy_mission": 19,
      "sabotage_mission": 17,
      "territory_management": 40,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 31,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 28,
      "elementary_school": 7,
      "middle_school": 22,
      "high_school": 10,
      "university": 23,
      "education_institute": 17,
      "laboratory": 17,
      "observatory": 9,
      "research_center": 13,
      "development_center": 5,
      "literacy": 86,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 35,
      "diagnostic_center": 9,
      "hospital_beds": 6548,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 13,
      "racing_circuit": 39,
      "stadium": 39,
      "international_stadium": 12,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 23,
      "court": 13,
      "prosecution_office": 14,
      "police_station": 28,
      "police_car_fleet": 6450,
      "police_academy": 33,
      "corruption_index": 90,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 31,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 36,
          "kamera_surveillance": 28,
          "pusat_forensik": 1
        },
        "response_time": 15,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 12,
    "tanks": 40,
    "aircraft": 31,
    "naval": 24,
    "air_base": 2,
    "naval_base": 13,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 3,
      "satisfaction": 67,
      "revenue": 209
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 245
    },
    "income": {
      "rate": 23,
      "satisfaction": 61,
      "revenue": 1899
    },
    "customs": {
      "rate": 12,
      "satisfaction": 86,
      "revenue": 568
    },
    "environment": {
      "rate": 5,
      "satisfaction": 88,
      "revenue": 433
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 200 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 600 },
    "other": {
      "rate": 16,
      "satisfaction": 93,
      "revenue": 1182
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 70,
    "salaryGuru": 70,
    "salaryMedis": 70,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 82000,
    "priceOil": 21560,
    "priceSugar": 7200,
    "priceEgg": 31100,
    "priceFuel": 10700,
    "priceElectric": 1600,
    "priceWater": 2600,
    "priceMedicine": 157900,
    "priceEducation": 677460
  },

  "demand": {
    "satisfaction": 70,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 5,
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
      "soft_power": 39,
      "hard_power": 19,
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
    "health": 20,
    "education": 40,
    "security": 10,
    "finance": 22,
    "environment": 60
  }
};
