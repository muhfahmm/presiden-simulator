import { CountryData } from "../../types";

export const india: CountryData = {
  "name_en": "India",
  "capital": "New Delhi",
  "name_id": "India",
  "lon": 77,
  "lat": 20,
  "flag": "🇮🇳",
  "pop": 1352617328,
  "budget": 38309,
  "income": "109453",
  "religion": "Hindu",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 28,
    "solar_plant": 22,
    "thermal_plant": 8,
    "gas_plant": 21,
    "wind_plant": 6,
    "power_grid": 84,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 22,
    "subway": 25,
    "railway": 29,
    "highway": 15,
    "road_quality": 50,
    "sea_port": 6,
    "airport": 20,
    "bus_terminal": 14,
    "helipad": 40,
    "internet_coverage": 90,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 19,
    "uranium": 31,
    "coal": 7,
    "oil": 36,
    "gas": 12,
    "salt": 17,
    "nickel": 10,
    "lithium": 22,
    "aluminum": 13,
    "copper": 1,
    "rare_earth": 34,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 31,
    "car": 23,
    "motorcycle": 5,
    "smelter": 3,
    "concrete_cement": 38,
    "wood": 8,
    "mineral_water": 35,
    "sugar": 4,
    "bread": 17,
    "pharmacy": 26,
    "fertilizer": 28,
    "meat_processing": 37,
    "instant_noodle": 37,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 22,
    "poultry": 37,
    "dairy_cow": 31,
    "beef_cow": 29,
    "sheep_goat": 4,
    "shrimp": 37,
    "fish": 9,
    "shellfish": 26,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 6,
    "wheat": 10,
    "corn": 34,
    "tubers": 14,
    "soy": 32,
    "palm_oil": 9,
    "tea": 32,
    "coffee": 19,
    "cocoa": 8,
    "sugarcane": 4,
    "vegetables": 15,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 31,
    "barracks": 37,
    "armory": 32,
    "tank_hangar": 16,
    "military_academy": 26,
    "budget": 10945,
    "personnel": 26363,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 7,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 7,
        "helikopter_serang": 15,
        "pesawat_pengintai": 2
      },
      "total_unit": 12,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 39,
    "military_naval_base": 14,
    "nuclear_status": false,
    "space_program": 15,
    "cyber_defense": 40,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 17,
      "spy_mission": 19,
      "sabotage_mission": 4,
      "territory_management": 3,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 34,
      "radar_network": 21,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 3,
      "middle_school": 31,
      "high_school": 23,
      "university": 26,
      "education_institute": 19,
      "laboratory": 25,
      "observatory": 16,
      "research_center": 23,
      "development_center": 5,
      "literacy": 63,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 18,
      "diagnostic_center": 40,
      "hospital_beds": 7754,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 19,
      "stadium": 13,
      "international_stadium": 40,
      "olympic_score": 32,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 16,
      "prosecution_office": 40,
      "police_station": 12,
      "police_car_fleet": 7944,
      "police_academy": 18,
      "corruption_index": 68,
      "security_index": 54,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 10,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 8,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 29,
          "kamera_surveillance": 35,
          "pusat_forensik": 1
        },
        "response_time": 11,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 3,
    "tanks": 3,
    "aircraft": 19,
    "naval": 9,
    "air_base": 14,
    "naval_base": 21,
    "military_base": 33,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 12,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 20,
      "satisfaction": 67,
      "revenue": 1262
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 1658
    },
    "income": {
      "rate": 36,
      "satisfaction": 61,
      "revenue": 2793
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86,
      "revenue": 1109
    },
    "environment": {
      "rate": 4,
      "satisfaction": 88,
      "revenue": 332
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 192 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 575 },
    "other": {
      "rate": 20,
      "satisfaction": 93,
      "revenue": 2111
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
    "salaryGuru": 70,
    "salaryMedis": 70,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 8000,
    "priceBeef": 145740,
    "priceChicken": 57400,
    "priceOil": 21560,
    "priceSugar": 20160,
    "priceEgg": 31100,
    "priceFuel": 8560,
    "priceElectric": 2240,
    "priceWater": 4160,
    "priceMedicine": 126320,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 73,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 9,
    "commercial": 13,
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
      "soft_power": 15,
      "hard_power": 33,
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
    "health": 22,
    "education": 29,
    "security": 19,
    "finance": 39,
    "environment": 60
  }
};
