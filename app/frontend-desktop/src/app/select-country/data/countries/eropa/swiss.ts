import { CountryData } from "../../types";

export const swiss: CountryData = {
  "name_en": "Switzerland",
  "capital": "Bern",
  "name_id": "Swiss",
  "lon": 8,
  "lat": 47,
  "flag": "🇨🇭",
  "pop": 8513227,
  "budget": 8848,
  "income": "25280",
  "religion": "Katolik",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 34,
    "hydro_plant": 2,
    "solar_plant": 2,
    "thermal_plant": 2,
    "gas_plant": 22,
    "wind_plant": 22,
    "power_grid": 89,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 4,
    "subway": 1,
    "railway": 5,
    "highway": 40,
    "road_quality": 68,
    "sea_port": 28,
    "airport": 13,
    "bus_terminal": 14,
    "helipad": 24,
    "internet_coverage": 71,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 8,
    "coal": 10,
    "oil": 20,
    "gas": 18,
    "salt": 12,
    "nickel": 22,
    "lithium": 35,
    "aluminum": 40,
    "copper": 19,
    "rare_earth": 29,
    "iron_ore": 35,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 20,
    "car": 14,
    "motorcycle": 4,
    "smelter": 40,
    "concrete_cement": 4,
    "wood": 4,
    "mineral_water": 22,
    "sugar": 20,
    "bread": 27,
    "pharmacy": 6,
    "fertilizer": 12,
    "meat_processing": 12,
    "instant_noodle": 18,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 25,
    "poultry": 35,
    "dairy_cow": 14,
    "beef_cow": 11,
    "sheep_goat": 32,
    "shrimp": 26,
    "fish": 8,
    "shellfish": 8,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 40,
    "wheat": 1,
    "corn": 30,
    "tubers": 21,
    "soy": 6,
    "palm_oil": 26,
    "tea": 17,
    "coffee": 24,
    "cocoa": 7,
    "sugarcane": 27,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 21,
    "armory": 5,
    "tank_hangar": 26,
    "military_academy": 29,
    "budget": 2528,
    "personnel": 28391,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 120,
        "apc": 163,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 164,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 50,
        "helikopter_serang": 123,
        "pesawat_pengintai": 2
      },
      "total_unit": 19,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 26,
    "military_naval_base": 30,
    "arms_factory": 32,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 29,
    "intelligence": 1,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 11,
      "sabotage_mission": 16,
      "territory_management": 38,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 30,
      "elementary_school": 1,
      "middle_school": 26,
      "high_school": 36,
      "university": 33,
      "education_institute": 12,
      "laboratory": 16,
      "observatory": 10,
      "research_center": 4,
      "development_center": 13,
      "literacy": 64,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 11,
      "diagnostic_center": 4,
      "hospital_beds": 6811,
      "life_expectancy": 7,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 34,
      "stadium": 24,
      "international_stadium": 13,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 24,
      "court": 5,
      "prosecution_office": 16,
      "police_station": 18,
      "police_car_fleet": 2129,
      "police_academy": 5,
      "corruption_index": 84,
      "security_index": 57,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 28,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 37,
    "tanks": 8,
    "aircraft": 39,
    "naval": 23,
    "air_base": 32,
    "naval_base": 21,
    "military_base": 1,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
      "revenue": 540
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 672
    },
    "income": {
      "rate": 39,
      "satisfaction": 61,
      "revenue": 446
    },
    "customs": {
      "rate": 10,
      "satisfaction": 86,
      "revenue": 90
    },
    "environment": {
      "rate": 32,
      "satisfaction": 88,
      "revenue": 786
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 45 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 133 },
    "other": {
      "rate": 34,
      "satisfaction": 93,
      "revenue": 502
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
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
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
    "priceBeef": 83280,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 14400,
    "priceEgg": 31100,
    "priceFuel": 14980,
    "priceElectric": 1600,
    "priceWater": 10400,
    "priceMedicine": 78950,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 75,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 30,
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
    "health": 34,
    "education": 3,
    "security": 40,
    "finance": 36,
    "environment": 60
  }
};
