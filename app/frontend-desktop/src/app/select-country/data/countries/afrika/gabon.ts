import { CountryData } from "../../types";

export const gabon: CountryData = {
  "name_en": "Gabon",
  "capital": "Libreville",
  "name_id": "Gabon",
  "lon": 11.75,
  "lat": -1,
  "flag": "🇬🇦",
  "pop": 2119275,
  "budget": 194,
  "income": "556",
  "religion": "Katolik",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 1,
    "hydro_plant": 11,
    "nuclear_plant": 24,
    "power_grid": 73,
    "solar_plant": 12,
    "thermal_plant": 3,
    "wind_plant": 30,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 21,
    "bicycle_path": 15,
    "bus_terminal": 19,
    "helipad": 38,
    "highway": 11,
    "internet_coverage": 54,
    "railway": 7,
    "road_quality": 64,
    "sea_port": 31,
    "subway": 16,
    "tech_stack": 81,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 11,
    "coal": 9,
    "copper": 39,
    "gas": 17,
    "gold": 16,
    "iron_ore": 8,
    "lithium": 39,
    "nickel": 12,
    "oil": 21,
    "rare_earth": 14,
    "salt": 17,
    "strength": 29.660809349923973,
    "uranium": 38,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 31,
    "car": 16,
    "concrete_cement": 23,
    "fertilizer": 27,
    "instant_noodle": 12,
    "meat_processing": 25,
    "mineral_water": 15,
    "motorcycle": 4,
    "pharmacy": 9,
    "semiconductor": 10,
    "smelter": 1,
    "strength": 3.076011687404966,
    "sugar": 10,
    "wood": 31,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 1,
    "chicken": 26,
    "dairy_cow": 32,
    "fish": 31,
    "poultry": 37,
    "sheep_goat": 7,
    "shellfish": 35,
    "shrimp": 29,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 24,
    "coffee": 22,
    "corn": 12,
    "palm_oil": 29,
    "rice": 5,
    "soy": 15,
    "strength": 20.660809349923973,
    "sugarcane": 6,
    "tea": 26,
    "tubers": 16,
    "vegetables": 4,
    "wheat": 38,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 37,
    "armory": 30,
    "tank_hangar": 11,
    "military_academy": 27,
    "budget": 55,
    "personnel": 16086,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 30,
        "apc": 30,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 29,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 20,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2,
      },
      "total_unit": 9,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 6,
    "military_air_base": 30,
    "military_naval_base": 5,
    "arms_factory": 5,
    "nuclear_status": false,
    "space_program": 10,
    "cyber_defense": 5,
    "intelligence": 17,
    "strategic_operations": {
      "attack_mission": 22,
      "spy_mission": 2,
      "sabotage_mission": 37,
      "territory_management": 3,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 13,
      "radar_network": 10,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 28,
      "middle_school": 15,
      "high_school": 40,
      "university": 15,
      "education_institute": 14,
      "laboratory": 12,
      "observatory": 26,
      "research_center": 40,
      "development_center": 12,
      "literacy": 50,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 3,
      "diagnostic_center": 3,
      "hospital_beds": 4436,
      "life_expectancy": 35,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 27,
      "stadium": 25,
      "international_stadium": 32,
      "olympic_score": 31,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 12,
      "court": 18,
      "prosecution_office": 38,
      "police_station": 36,
      "police_car_fleet": 1827,
      "police_academy": 2,
      "corruption_index": 86,
      "security_index": 89,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 33,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 1,
          "kamera_surveillance": 35,
          "pusat_forensik": 1,
        },
        "response_time": 33,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 28,
    "aircraft": 18,
    "naval": 2,
    "air_base": 22,
    "naval_base": 14,
    "military_base": 9,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 28,
      "satisfaction": 67,
      "revenue": 16
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 19
    },
    "income": {
      "rate": 25,
      "satisfaction": 61,
      "revenue": 12
    },
    "customs": {
      "rate": 39,
      "satisfaction": 86,
      "revenue": 14
    },
    "environment": {
      "rate": 23,
      "satisfaction": 88,
      "revenue": 8
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 25,
      "satisfaction": 93,
      "revenue": 5
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 30,
    "salaryGuru": 50,
    "salaryMedis": 40,
    "salaryMiliter": 50
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
    "priceRice": 22400,
    "priceBeef": 104100,
    "priceChicken": 57400,
    "priceOil": 15400,
    "priceSugar": 20160,
    "priceEgg": 24880,
    "priceFuel": 14980,
    "priceElectric": 800,
    "priceWater": 10400,
    "priceMedicine": 78950,
    "priceEducation": 677460
  },

  "demand": {
    "satisfaction": 87,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 9,
    "commercial": 21,
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
      "soft_power": 20,
      "hard_power": 13,
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
    "health": 27,
    "education": 26,
    "security": 11,
    "finance": 13,
    "environment": 60,
  }
};
