import { CountryData } from "../../types";

export const amerika_serikat: CountryData = {
  "name_en": "United States",
  "capital": "Washington, D.C.",
  "name_id": "Amerika Serikat",
  "lon": -97,
  "lat": 38,
  "flag": "🇺🇸",
  "pop": 326687501,
  "budget": 280022,
  "income": "800064",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 2,
    "hydro_plant": 1,
    "solar_plant": 31,
    "thermal_plant": 10,
    "gas_plant": 29,
    "wind_plant": 3,
    "power_grid": 78,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 19,
    "subway": 39,
    "railway": 39,
    "highway": 28,
    "road_quality": 52,
    "sea_port": 40,
    "airport": 6,
    "bus_terminal": 23,
    "helipad": 24,
    "internet_coverage": 83,
    "tech_stack": 51,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 17,
    "uranium": 25,
    "coal": 32,
    "oil": 19,
    "gas": 24,
    "salt": 23,
    "nickel": 25,
    "lithium": 19,
    "aluminum": 37,
    "copper": 5,
    "rare_earth": 24,
    "iron_ore": 37,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 34,
    "car": 5,
    "motorcycle": 31,
    "smelter": 2,
    "concrete_cement": 18,
    "wood": 40,
    "mineral_water": 29,
    "sugar": 16,
    "bread": 39,
    "pharmacy": 19,
    "fertilizer": 13,
    "meat_processing": 3,
    "instant_noodle": 16,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 12,
    "poultry": 18,
    "dairy_cow": 9,
    "beef_cow": 13,
    "sheep_goat": 38,
    "shrimp": 5,
    "fish": 19,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 35,
    "wheat": 35,
    "corn": 12,
    "tubers": 3,
    "soy": 4,
    "palm_oil": 13,
    "tea": 24,
    "coffee": 4,
    "cocoa": 40,
    "sugarcane": 24,
    "vegetables": 21,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 4,
    "armory": 29,
    "tank_hangar": 37,
    "military_academy": 33,
    "budget": 80006,
    "personnel": 29433,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 21,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 33,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 14,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 39,
    "military_air_base": 28,
    "military_naval_base": 12,
    "nuclear_status": false,
    "space_program": 25,
    "cyber_defense": 9,
    "intelligence": 6,
    "strategic_operations": {
      "attack_mission": 39,
      "spy_mission": 39,
      "sabotage_mission": 21,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 27,
      "radar_network": 13,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 31,
      "elementary_school": 14,
      "middle_school": 34,
      "high_school": 12,
      "university": 27,
      "education_institute": 24,
      "laboratory": 16,
      "observatory": 8,
      "research_center": 17,
      "development_center": 31,
      "literacy": 75,
      "research_index": 0
    },
    "health": {
      "large_hospital": 1,
      "small_hospital": 5,
      "diagnostic_center": 39,
      "hospital_beds": 1578,
      "life_expectancy": 26,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 12,
      "racing_circuit": 10,
      "stadium": 37,
      "international_stadium": 35,
      "olympic_score": 33,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 22,
      "court": 10,
      "prosecution_office": 19,
      "police_station": 29,
      "police_car_fleet": 3884,
      "police_academy": 30,
      "corruption_index": 70,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 17,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 17,
          "kamera_surveillance": 3,
          "pusat_forensik": 1
        },
        "response_time": 16,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 3,
    "aircraft": 4,
    "naval": 13,
    "air_base": 33,
    "naval_base": 20,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 35,
      "satisfaction": 67,
      "revenue": 28175
    },
    "corporate": {
      "rate": 28,
      "satisfaction": 52,
      "revenue": 19391
    },
    "income": {
      "rate": 21,
      "satisfaction": 61,
      "revenue": 5914
    },
    "customs": {
      "rate": 4,
      "satisfaction": 86,
      "revenue": 2690
    },
    "environment": {
      "rate": 18,
      "satisfaction": 88,
      "revenue": 7054
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1401 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 4201 },
    "other": {
      "rate": 13,
      "satisfaction": 93,
      "revenue": 4046
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 80,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 75
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 32000,
    "priceBeef": 52050,
    "priceChicken": 57400,
    "priceOil": 15400,
    "priceSugar": 11520,
    "priceEgg": 31100,
    "priceFuel": 5350,
    "priceElectric": 800,
    "priceWater": 5200,
    "priceMedicine": 157900,
    "priceEducation": 967800
  },

  "demand": {
    "satisfaction": 86,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 19,
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
      "soft_power": 25,
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
    "health": 6,
    "education": 13,
    "security": 35,
    "finance": 32,
    "environment": 60
  }
};
