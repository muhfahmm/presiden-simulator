import { CountryData } from "../../types";

export const thailand: CountryData = {
  "name_en": "Thailand",
  "capital": "Bangkok",
  "name_id": "Thailand",
  "lon": 100,
  "lat": 15,
  "flag": "🇹🇭",
  "pop": 69428524,
  "budget": 4959,
  "income": "14168",
  "religion": "Buddha",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 5,
    "hydro_plant": 2,
    "solar_plant": 3,
    "thermal_plant": 17,
    "gas_plant": 10,
    "wind_plant": 31,
    "power_grid": 58,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 4,
    "subway": 40,
    "railway": 26,
    "highway": 15,
    "road_quality": 76,
    "sea_port": 2,
    "airport": 30,
    "bus_terminal": 21,
    "helipad": 34,
    "internet_coverage": 93,
    "tech_stack": 58,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 32,
    "uranium": 39,
    "coal": 16,
    "oil": 30,
    "gas": 34,
    "salt": 35,
    "nickel": 9,
    "lithium": 29,
    "aluminum": 14,
    "copper": 22,
    "rare_earth": 25,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 11,
    "car": 31,
    "motorcycle": 27,
    "smelter": 37,
    "concrete_cement": 6,
    "wood": 23,
    "mineral_water": 11,
    "sugar": 1,
    "bread": 37,
    "pharmacy": 27,
    "fertilizer": 4,
    "meat_processing": 2,
    "instant_noodle": 4,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 12,
    "poultry": 28,
    "dairy_cow": 30,
    "beef_cow": 33,
    "sheep_goat": 23,
    "shrimp": 36,
    "fish": 24,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 26,
    "wheat": 27,
    "corn": 18,
    "tubers": 2,
    "soy": 3,
    "palm_oil": 32,
    "tea": 18,
    "coffee": 12,
    "cocoa": 26,
    "sugarcane": 5,
    "vegetables": 35,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 10,
    "barracks": 15,
    "armory": 5,
    "tank_hangar": 36,
    "military_academy": 7,
    "budget": 1416,
    "personnel": 10734,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 58,
        "apc": 193,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 154,
        "helikopter_serang": 189,
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
    "command_center": 26,
    "military_air_base": 22,
    "military_naval_base": 19,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 10,
    "cyber_defense": 14,
    "intelligence": 8,
    "strategic_operations": {
      "attack_mission": 14,
      "spy_mission": 27,
      "sabotage_mission": 2,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 16,
      "elementary_school": 8,
      "middle_school": 8,
      "high_school": 23,
      "university": 22,
      "education_institute": 11,
      "laboratory": 34,
      "observatory": 22,
      "research_center": 16,
      "development_center": 21,
      "literacy": 80,
      "research_index": 0
    },
    "health": {
      "large_hospital": 2,
      "small_hospital": 38,
      "diagnostic_center": 17,
      "hospital_beds": 1052,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 2,
      "racing_circuit": 32,
      "stadium": 27,
      "international_stadium": 19,
      "olympic_score": 19,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 28,
      "prosecution_office": 15,
      "police_station": 9,
      "police_car_fleet": 1226,
      "police_academy": 13,
      "corruption_index": 71,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 32,
          "kamera_surveillance": 13,
          "pusat_forensik": 1
        },
        "response_time": 24,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 17,
    "aircraft": 10,
    "naval": 13,
    "air_base": 16,
    "naval_base": 34,
    "military_base": 2,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 28,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 25,
      "satisfaction": 67,
      "revenue": 307
    },
    "corporate": {
      "rate": 39,
      "satisfaction": 52,
      "revenue": 520
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 152
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
      "revenue": 451
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 43
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 25 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 75 },
    "other": {
      "rate": 22,
      "satisfaction": 93,
      "revenue": 135
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
    "salaryMedis": 60,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 12800,
    "priceBeef": 104100,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 14400,
    "priceEgg": 15550,
    "priceFuel": 8560,
    "priceElectric": 3200,
    "priceWater": 10400,
    "priceMedicine": 126320,
    "priceEducation": 967800
  },

  "demand": {
    "satisfaction": 59,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 2,
    "commercial": 18,
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
      "hard_power": 2,
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
    "health": 8,
    "education": 20,
    "security": 9,
    "finance": 24,
    "environment": 60
  }
};
