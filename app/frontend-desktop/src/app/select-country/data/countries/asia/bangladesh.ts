import { CountryData } from "../../types";

export const bangladesh: CountryData = {
  "name_en": "Bangladesh",
  "capital": "Dhaka",
  "name_id": "Bangladesh",
  "lon": 90,
  "lat": 24,
  "flag": "🇧🇩",
  "pop": 161356039,
  "budget": 4473,
  "income": "12779",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 13,
    "hydro_plant": 12,
    "solar_plant": 32,
    "thermal_plant": 39,
    "gas_plant": 1,
    "wind_plant": 2,
    "power_grid": 51,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 39,
    "subway": 25,
    "railway": 30,
    "highway": 15,
    "road_quality": 85,
    "sea_port": 31,
    "airport": 34,
    "bus_terminal": 13,
    "helipad": 28,
    "internet_coverage": 66,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 31,
    "uranium": 24,
    "coal": 28,
    "oil": 16,
    "gas": 38,
    "salt": 40,
    "nickel": 32,
    "lithium": 3,
    "aluminum": 30,
    "copper": 24,
    "rare_earth": 20,
    "iron_ore": 23,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 10,
    "car": 40,
    "motorcycle": 30,
    "smelter": 18,
    "concrete_cement": 19,
    "wood": 3,
    "mineral_water": 29,
    "sugar": 26,
    "bread": 22,
    "pharmacy": 28,
    "fertilizer": 1,
    "meat_processing": 4,
    "instant_noodle": 5,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 11,
    "poultry": 4,
    "dairy_cow": 1,
    "beef_cow": 4,
    "sheep_goat": 31,
    "shrimp": 37,
    "fish": 32,
    "shellfish": 10,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 13,
    "corn": 26,
    "tubers": 29,
    "soy": 12,
    "palm_oil": 26,
    "tea": 25,
    "coffee": 13,
    "cocoa": 40,
    "sugarcane": 33,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 35,
    "barracks": 30,
    "armory": 38,
    "tank_hangar": 18,
    "military_academy": 22,
    "budget": 1277,
    "personnel": 8753,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 12,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 12,
        "helikopter_serang": 14,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 12,
    "military_air_base": 23,
    "military_naval_base": 14,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 7,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 14,
      "sabotage_mission": 22,
      "territory_management": 19,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 40,
      "radar_network": 38,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 38,
      "middle_school": 3,
      "high_school": 17,
      "university": 27,
      "education_institute": 28,
      "laboratory": 11,
      "observatory": 39,
      "research_center": 24,
      "development_center": 1,
      "literacy": 55,
      "research_index": 0
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 5,
      "diagnostic_center": 20,
      "hospital_beds": 3222,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 36,
      "stadium": 9,
      "international_stadium": 39,
      "olympic_score": 19,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 13,
      "court": 30,
      "prosecution_office": 39,
      "police_station": 26,
      "police_car_fleet": 5208,
      "police_academy": 23,
      "corruption_index": 79,
      "security_index": 63,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 23,
          "kamera_surveillance": 34,
          "pusat_forensik": 1
        },
        "response_time": 27,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 36,
    "tanks": 26,
    "aircraft": 16,
    "naval": 19,
    "air_base": 29,
    "naval_base": 34,
    "military_base": 6,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 7,
      "satisfaction": 67,
      "revenue": 58
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
      "revenue": 156
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
      "revenue": 55
    },
    "customs": {
      "rate": 5,
      "satisfaction": 86,
      "revenue": 39
    },
    "environment": {
      "rate": 21,
      "satisfaction": 88,
      "revenue": 248
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 23 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 68 },
    "other": {
      "rate": 9,
      "satisfaction": 93,
      "revenue": 96
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
    "salaryGuru": 60,
    "salaryMedis": 80,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 12800,
    "priceBeef": 83280,
    "priceChicken": 82000,
    "priceOil": 15400,
    "priceSugar": 11520,
    "priceEgg": 31100,
    "priceFuel": 5350,
    "priceElectric": 1600,
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
    "residential": 36,
    "commercial": 23,
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
      "soft_power": 7,
      "hard_power": 15,
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
    "health": 36,
    "education": 22,
    "security": 36,
    "finance": 17,
    "environment": 60
  }
};
