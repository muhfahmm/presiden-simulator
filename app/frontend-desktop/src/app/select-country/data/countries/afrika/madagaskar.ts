import { CountryData } from "../../types";

export const madagaskar: CountryData = {
  "name_en": "Madagascar",
  "capital": "Antananarivo",
  "name_id": "Madagaskar",
  "lon": 47.31,
  "lat": -18.55,
  "flag": "🇲🇬",
  "pop": 26262368,
  "budget": 146,
  "income": "417",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 20,
    "hydro_plant": 10,
    "nuclear_plant": 24,
    "power_grid": 79,
    "solar_plant": 7,
    "thermal_plant": 6,
    "wind_plant": 17,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 40,
    "bicycle_path": 33,
    "bus_terminal": 24,
    "helipad": 38,
    "highway": 12,
    "internet_coverage": 53,
    "railway": 39,
    "road_quality": 69,
    "sea_port": 1,
    "subway": 32,
    "tech_stack": 65,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 22,
    "coal": 23,
    "copper": 34,
    "gas": 5,
    "gold": 24,
    "iron_ore": 35,
    "lithium": 12,
    "nickel": 21,
    "oil": 31,
    "rare_earth": 7,
    "salt": 35,
    "strength": 29.660809349923973,
    "uranium": 12,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 22,
    "car": 30,
    "concrete_cement": 25,
    "fertilizer": 33,
    "instant_noodle": 3,
    "meat_processing": 19,
    "mineral_water": 27,
    "motorcycle": 39,
    "pharmacy": 9,
    "semiconductor": 13,
    "smelter": 39,
    "strength": 3.076011687404966,
    "sugar": 40,
    "wood": 28,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 32,
    "chicken": 14,
    "dairy_cow": 13,
    "fish": 26,
    "poultry": 7,
    "sheep_goat": 2,
    "shellfish": 15,
    "shrimp": 8,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 23,
    "coffee": 22,
    "corn": 1,
    "palm_oil": 23,
    "rice": 37,
    "soy": 32,
    "strength": 20.660809349923973,
    "sugarcane": 19,
    "tea": 11,
    "tubers": 2,
    "vegetables": 27,
    "wheat": 34,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 39,
    "armory": 5,
    "tank_hangar": 16,
    "military_academy": 5,
    "budget": 41,
    "personnel": 13106,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 38,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 3,
        "helikopter_serang": 7,
        "pesawat_pengintai": 2,
      },
      "total_unit": 37,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 3,
    "military_air_base": 26,
    "military_naval_base": 17,
    "arms_factory": 16,
    "nuclear_status": false,
    "space_program": 8,
    "cyber_defense": 31,
    "intelligence": 34,
    "strategic_operations": {
      "attack_mission": 33,
      "spy_mission": 9,
      "sabotage_mission": 1,
      "territory_management": 1,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 7,
      "radar_network": 29,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 21,
      "middle_school": 35,
      "high_school": 27,
      "university": 8,
      "education_institute": 7,
      "laboratory": 21,
      "observatory": 28,
      "research_center": 38,
      "development_center": 18,
      "literacy": 68,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 5,
      "diagnostic_center": 4,
      "hospital_beds": 7328,
      "life_expectancy": 1,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 12,
      "stadium": 36,
      "international_stadium": 17,
      "olympic_score": 35,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 29,
      "court": 28,
      "prosecution_office": 14,
      "police_station": 23,
      "police_car_fleet": 5100,
      "police_academy": 38,
      "corruption_index": 77,
      "security_index": 50,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 21,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 20,
          "pusat_forensik": 1,
        },
        "response_time": 15,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 34,
    "tanks": 35,
    "aircraft": 37,
    "naval": 31,
    "air_base": 17,
    "naval_base": 12,
    "military_base": 10,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 15,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 15,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 7
    },
    "income": {
      "rate": 6,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 6,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 14,
      "satisfaction": 93,
      "revenue": 4
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 50,
    "salaryGuru": 40,
    "salaryMedis": 40,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 25,
    "subsidyUmkm": 25,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 22400,
    "priceBeef": 208200,
    "priceChicken": 57400,
    "priceOil": 21560,
    "priceSugar": 20160,
    "priceEgg": 31100,
    "priceFuel": 10700,
    "priceElectric": 800,
    "priceWater": 5200,
    "priceMedicine": 221060,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 60,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
    "commercial": 24,
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
      "soft_power": 29,
      "hard_power": 3,
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
    "health": 18,
    "education": 23,
    "security": 22,
    "finance": 30,
    "environment": 60,
  }
};
