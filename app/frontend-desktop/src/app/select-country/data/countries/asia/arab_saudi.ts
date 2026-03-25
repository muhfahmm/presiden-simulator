import { CountryData } from "../../types";

export const arab_saudi: CountryData = {
  "name_en": "Saudi Arabia",
  "capital": "Riyadh",
  "name_id": "Arab Saudi",
  "lon": 46.74,
  "lat": 24.77,
  "flag": "🇸🇦",
  "pop": 33699947,
  "budget": 10793,
  "income": "30836",
  "religion": "Islam",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 40,
    "solar_plant": 19,
    "thermal_plant": 35,
    "gas_plant": 25,
    "wind_plant": 25,
    "power_grid": 79,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 28,
    "subway": 28,
    "railway": 33,
    "highway": 37,
    "road_quality": 93,
    "sea_port": 20,
    "airport": 2,
    "bus_terminal": 16,
    "helipad": 23,
    "internet_coverage": 85,
    "tech_stack": 82,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 2,
    "uranium": 9,
    "coal": 21,
    "oil": 19,
    "gas": 5,
    "salt": 4,
    "nickel": 36,
    "lithium": 17,
    "aluminum": 8,
    "copper": 10,
    "rare_earth": 35,
    "iron_ore": 19,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 2,
    "motorcycle": 31,
    "smelter": 15,
    "concrete_cement": 24,
    "wood": 6,
    "mineral_water": 31,
    "sugar": 33,
    "bread": 38,
    "pharmacy": 9,
    "fertilizer": 14,
    "meat_processing": 19,
    "instant_noodle": 18,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 1,
    "dairy_cow": 32,
    "beef_cow": 38,
    "sheep_goat": 17,
    "shrimp": 33,
    "fish": 23,
    "shellfish": 27,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 3,
    "wheat": 2,
    "corn": 38,
    "tubers": 21,
    "soy": 39,
    "palm_oil": 32,
    "tea": 11,
    "coffee": 1,
    "cocoa": 33,
    "sugarcane": 5,
    "vegetables": 31,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 13,
    "armory": 27,
    "tank_hangar": 15,
    "military_academy": 27,
    "budget": 3083,
    "personnel": 9491,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 2,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 3,
        "helikopter_serang": 13,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 10,
    "military_naval_base": 14,
    "arms_factory": 34,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 21,
    "intelligence": 15,
    "strategic_operations": {
      "attack_mission": 6,
      "spy_mission": 30,
      "sabotage_mission": 7,
      "territory_management": 27,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 9,
      "radar_network": 11,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 28,
      "elementary_school": 40,
      "middle_school": 32,
      "high_school": 6,
      "university": 16,
      "education_institute": 2,
      "laboratory": 2,
      "observatory": 11,
      "research_center": 5,
      "development_center": 28,
      "literacy": 78,
      "research_index": 0
    },
    "health": {
      "large_hospital": 27,
      "small_hospital": 17,
      "diagnostic_center": 27,
      "hospital_beds": 9174,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 3,
      "stadium": 1,
      "international_stadium": 12,
      "olympic_score": 15,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 27,
      "court": 36,
      "prosecution_office": 18,
      "police_station": 26,
      "police_car_fleet": 1693,
      "police_academy": 38,
      "corruption_index": 94,
      "security_index": 84,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 24,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 27,
          "kamera_surveillance": 16,
          "pusat_forensik": 1
        },
        "response_time": 31,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 13,
    "aircraft": 7,
    "naval": 37,
    "air_base": 5,
    "naval_base": 18,
    "military_base": 25,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 27,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 832
    },
    "corporate": {
      "rate": 2,
      "satisfaction": 52,
      "revenue": 44
    },
    "income": {
      "rate": 35,
      "satisfaction": 61,
      "revenue": 982
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86,
      "revenue": 335
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
      "revenue": 265
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 54 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 162 },
    "other": {
      "rate": 4,
      "satisfaction": 93,
      "revenue": 127
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
    "salaryMedis": 60,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 50,
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
    "priceRice": 32000,
    "priceBeef": 52050,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 20160,
    "priceEgg": 62200,
    "priceFuel": 21400,
    "priceElectric": 2240,
    "priceWater": 10400,
    "priceMedicine": 315800,
    "priceEducation": 241950
  },

  "demand": {
    "satisfaction": 53,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 7,
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
      "soft_power": 13,
      "hard_power": 23,
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
    "health": 33,
    "education": 19,
    "security": 21,
    "finance": 39,
    "environment": 60
  }
};
