import { CountryData } from "../../types";

export const islandia: CountryData = {
  "name_en": "Iceland",
  "capital": "Reykjavik",
  "name_id": "Islandia",
  "lon": -18,
  "lat": 65,
  "flag": "🇮🇸",
  "pop": 352721,
  "budget": 292,
  "income": "833",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 6,
    "hydro_plant": 22,
    "solar_plant": 20,
    "thermal_plant": 17,
    "gas_plant": 30,
    "wind_plant": 8,
    "power_grid": 71,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 12,
    "subway": 8,
    "railway": 21,
    "highway": 18,
    "road_quality": 72,
    "sea_port": 22,
    "airport": 16,
    "bus_terminal": 34,
    "helipad": 23,
    "internet_coverage": 80,
    "tech_stack": 86,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 31,
    "coal": 21,
    "oil": 17,
    "gas": 4,
    "salt": 4,
    "nickel": 5,
    "lithium": 14,
    "aluminum": 15,
    "copper": 12,
    "rare_earth": 23,
    "iron_ore": 7,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 39,
    "motorcycle": 38,
    "smelter": 18,
    "concrete_cement": 32,
    "wood": 5,
    "mineral_water": 2,
    "sugar": 37,
    "bread": 25,
    "pharmacy": 24,
    "fertilizer": 16,
    "meat_processing": 12,
    "instant_noodle": 25,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 36,
    "poultry": 11,
    "dairy_cow": 22,
    "beef_cow": 9,
    "sheep_goat": 16,
    "shrimp": 30,
    "fish": 14,
    "shellfish": 17,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 17,
    "corn": 40,
    "tubers": 26,
    "soy": 23,
    "palm_oil": 14,
    "tea": 33,
    "coffee": 2,
    "cocoa": 40,
    "sugarcane": 10,
    "vegetables": 35,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 35,
    "barracks": 7,
    "armory": 12,
    "tank_hangar": 15,
    "military_academy": 19,
    "budget": 83,
    "personnel": 11762,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 19,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 11,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 10,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 19,
    "military_air_base": 19,
    "military_naval_base": 22,
    "arms_factory": 1,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 6,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 34,
      "sabotage_mission": 31,
      "territory_management": 13,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 40,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 25,
      "middle_school": 3,
      "high_school": 29,
      "university": 37,
      "education_institute": 34,
      "laboratory": 11,
      "observatory": 16,
      "research_center": 13,
      "development_center": 18,
      "literacy": 57,
      "research_index": 0
    },
    "health": {
      "large_hospital": 29,
      "small_hospital": 12,
      "diagnostic_center": 5,
      "hospital_beds": 1340,
      "life_expectancy": 33,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 7,
      "stadium": 3,
      "international_stadium": 27,
      "olympic_score": 19,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 1,
      "court": 9,
      "prosecution_office": 8,
      "police_station": 22,
      "police_car_fleet": 1677,
      "police_academy": 14,
      "corruption_index": 59,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 37,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 37,
    "tanks": 29,
    "aircraft": 30,
    "naval": 27,
    "air_base": 34,
    "naval_base": 2,
    "military_base": 26,
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
      "rate": 14,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 32,
      "satisfaction": 52,
      "revenue": 9
    },
    "income": {
      "rate": 28,
      "satisfaction": 61,
      "revenue": 22
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86,
      "revenue": 8
    },
    "environment": {
      "rate": 9,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 20,
      "satisfaction": 93,
      "revenue": 6
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
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 100,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 75
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 20160,
    "priceEgg": 15550,
    "priceFuel": 8560,
    "priceElectric": 1600,
    "priceWater": 5200,
    "priceMedicine": 157900,
    "priceEducation": 387120
  },

  "demand": {
    "satisfaction": 59,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
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
      "soft_power": 29,
      "hard_power": 18,
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
    "health": 32,
    "education": 28,
    "security": 9,
    "finance": 22,
    "environment": 60
  }
};
