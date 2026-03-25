import { CountryData } from "../../types";

export const el_salvador: CountryData = {
  "name_en": "El Salvador",
  "capital": "San Salvador",
  "name_id": "El salvador",
  "lon": -88.91666666,
  "lat": 13.83333333,
  "flag": "🇸🇻",
  "pop": 6420744,
  "budget": 311,
  "income": "889",
  "religion": "Katolik",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 6,
    "hydro_plant": 4,
    "solar_plant": 7,
    "thermal_plant": 13,
    "gas_plant": 4,
    "wind_plant": 15,
    "power_grid": 65,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 38,
    "subway": 1,
    "railway": 12,
    "highway": 19,
    "road_quality": 52,
    "sea_port": 26,
    "airport": 30,
    "bus_terminal": 27,
    "helipad": 39,
    "internet_coverage": 59,
    "tech_stack": 60,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 20,
    "uranium": 16,
    "coal": 1,
    "oil": 30,
    "gas": 27,
    "salt": 32,
    "nickel": 38,
    "lithium": 11,
    "aluminum": 16,
    "copper": 39,
    "rare_earth": 10,
    "iron_ore": 23,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 34,
    "motorcycle": 35,
    "smelter": 3,
    "concrete_cement": 33,
    "wood": 36,
    "mineral_water": 16,
    "sugar": 34,
    "bread": 22,
    "pharmacy": 21,
    "fertilizer": 19,
    "meat_processing": 15,
    "instant_noodle": 20,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 1,
    "poultry": 36,
    "dairy_cow": 33,
    "beef_cow": 7,
    "sheep_goat": 6,
    "shrimp": 31,
    "fish": 28,
    "shellfish": 15,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 25,
    "wheat": 13,
    "corn": 40,
    "tubers": 23,
    "soy": 18,
    "palm_oil": 6,
    "tea": 31,
    "coffee": 19,
    "cocoa": 13,
    "sugarcane": 32,
    "vegetables": 33,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 19,
    "armory": 7,
    "tank_hangar": 3,
    "military_academy": 5,
    "budget": 88,
    "personnel": 19334,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 32,
        "apc": 9,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 23,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 14,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 22,
    "military_naval_base": 11,
    "arms_factory": 11,
    "nuclear_status": false,
    "space_program": 29,
    "cyber_defense": 18,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 22,
      "spy_mission": 32,
      "sabotage_mission": 21,
      "territory_management": 2,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 16,
      "radar_network": 29,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 11,
      "middle_school": 26,
      "high_school": 25,
      "university": 24,
      "education_institute": 24,
      "laboratory": 16,
      "observatory": 17,
      "research_center": 36,
      "development_center": 34,
      "literacy": 68,
      "research_index": 0
    },
    "health": {
      "large_hospital": 31,
      "small_hospital": 19,
      "diagnostic_center": 32,
      "hospital_beds": 9449,
      "life_expectancy": 36,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 27,
      "racing_circuit": 8,
      "stadium": 1,
      "international_stadium": 38,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 27,
      "prosecution_office": 31,
      "police_station": 17,
      "police_car_fleet": 9033,
      "police_academy": 20,
      "corruption_index": 77,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 1,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 13,
          "pusat_forensik": 1
        },
        "response_time": 3,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 5,
    "tanks": 21,
    "aircraft": 25,
    "naval": 32,
    "air_base": 3,
    "naval_base": 3,
    "military_base": 36,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 36,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 11,
      "satisfaction": 67,
      "revenue": 9
    },
    "corporate": {
      "rate": 19,
      "satisfaction": 52,
      "revenue": 15
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
      "revenue": 26
    },
    "customs": {
      "rate": 39,
      "satisfaction": 86,
      "revenue": 20
    },
    "environment": {
      "rate": 5,
      "satisfaction": 88,
      "revenue": 2
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 1,
      "satisfaction": 93,
      "revenue": 0
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
    "salaryMedis": 100,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 25,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 22400,
    "priceBeef": 52050,
    "priceChicken": 82000,
    "priceOil": 15400,
    "priceSugar": 14400,
    "priceEgg": 43540,
    "priceFuel": 14980,
    "priceElectric": 2240,
    "priceWater": 4160,
    "priceMedicine": 126320,
    "priceEducation": 677460
  },

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 37,
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
      "soft_power": 26,
      "hard_power": 5,
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
    "health": 34,
    "education": 24,
    "security": 16,
    "finance": 26,
    "environment": 60
  }
};
