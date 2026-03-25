import { CountryData } from "../../types";

export const republik_serbia: CountryData = {
  "name_en": "Serbia",
  "capital": "Belgrade",
  "name_id": "Republik serbia",
  "lon": 21,
  "lat": 44,
  "flag": "🇷🇸",
  "pop": 6963764,
  "budget": 661,
  "income": "1889",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 29,
    "hydro_plant": 32,
    "solar_plant": 28,
    "thermal_plant": 22,
    "gas_plant": 19,
    "wind_plant": 5,
    "power_grid": 59,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 23,
    "subway": 25,
    "railway": 17,
    "highway": 6,
    "road_quality": 63,
    "sea_port": 16,
    "airport": 3,
    "bus_terminal": 2,
    "helipad": 26,
    "internet_coverage": 93,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 27,
    "uranium": 22,
    "coal": 34,
    "oil": 8,
    "gas": 11,
    "salt": 36,
    "nickel": 23,
    "lithium": 38,
    "aluminum": 16,
    "copper": 21,
    "rare_earth": 2,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 23,
    "motorcycle": 20,
    "smelter": 15,
    "concrete_cement": 35,
    "wood": 4,
    "mineral_water": 39,
    "sugar": 27,
    "bread": 31,
    "pharmacy": 20,
    "fertilizer": 21,
    "meat_processing": 30,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 25,
    "dairy_cow": 30,
    "beef_cow": 3,
    "sheep_goat": 22,
    "shrimp": 26,
    "fish": 16,
    "shellfish": 30,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 18,
    "corn": 19,
    "tubers": 10,
    "soy": 19,
    "palm_oil": 24,
    "tea": 8,
    "coffee": 21,
    "cocoa": 34,
    "sugarcane": 34,
    "vegetables": 2,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 6,
    "armory": 8,
    "tank_hangar": 14,
    "military_academy": 5,
    "budget": 188,
    "personnel": 11561,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 108,
        "apc": 117,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 188,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 59,
        "helikopter_serang": 149,
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
    "command_center": 30,
    "military_air_base": 39,
    "military_naval_base": 29,
    "arms_factory": 10,
    "nuclear_status": false,
    "space_program": 9,
    "cyber_defense": 2,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 3,
      "sabotage_mission": 2,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 13,
      "middle_school": 18,
      "high_school": 24,
      "university": 39,
      "education_institute": 6,
      "laboratory": 10,
      "observatory": 8,
      "research_center": 29,
      "development_center": 25,
      "literacy": 66,
      "research_index": 0
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 12,
      "diagnostic_center": 23,
      "hospital_beds": 9624,
      "life_expectancy": 13,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 3,
      "stadium": 27,
      "international_stadium": 25,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 19,
      "court": 4,
      "prosecution_office": 8,
      "police_station": 31,
      "police_car_fleet": 7504,
      "police_academy": 37,
      "corruption_index": 94,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 28,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 8,
    "tanks": 18,
    "aircraft": 28,
    "naval": 35,
    "air_base": 34,
    "naval_base": 14,
    "military_base": 20,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 8,
      "satisfaction": 67,
      "revenue": 14
    },
    "corporate": {
      "rate": 16,
      "satisfaction": 52,
      "revenue": 27
    },
    "income": {
      "rate": 10,
      "satisfaction": 61,
      "revenue": 8
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86,
      "revenue": 42
    },
    "environment": {
      "rate": 11,
      "satisfaction": 88,
      "revenue": 20
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 10 },
    "other": {
      "rate": 12,
      "satisfaction": 93,
      "revenue": 10
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 90,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 75
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 12800,
    "priceBeef": 104100,
    "priceChicken": 57400,
    "priceOil": 21560,
    "priceSugar": 14400,
    "priceEgg": 43540,
    "priceFuel": 14980,
    "priceElectric": 2240,
    "priceWater": 10400,
    "priceMedicine": 157900,
    "priceEducation": 241950
  },

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 28,
    "commercial": 40,
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
      "soft_power": 29,
      "hard_power": 30,
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
    "health": 30,
    "education": 3,
    "security": 26,
    "finance": 26,
    "environment": 60
  }
};
