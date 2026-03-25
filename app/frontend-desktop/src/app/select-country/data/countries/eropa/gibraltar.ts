import { CountryData } from "../../types";

export const gibraltar: CountryData = {
  "name_en": "Gibraltar",
  "capital": "Gibraltar",
  "name_id": "Gibraltar",
  "lon": -5.35,
  "lat": 36.13333333,
  "flag": "🇬🇮",
  "pop": 33718,
  "budget": 97,
  "income": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 5,
    "hydro_plant": 18,
    "solar_plant": 5,
    "thermal_plant": 25,
    "gas_plant": 35,
    "wind_plant": 32,
    "power_grid": 77,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 28,
    "subway": 31,
    "railway": 17,
    "highway": 18,
    "road_quality": 84,
    "sea_port": 21,
    "airport": 27,
    "bus_terminal": 13,
    "helipad": 1,
    "internet_coverage": 87,
    "tech_stack": 59,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 25,
    "uranium": 2,
    "coal": 35,
    "oil": 33,
    "gas": 27,
    "salt": 22,
    "nickel": 5,
    "lithium": 25,
    "aluminum": 10,
    "copper": 10,
    "rare_earth": 28,
    "iron_ore": 10,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 22,
    "car": 6,
    "motorcycle": 29,
    "smelter": 37,
    "concrete_cement": 14,
    "wood": 16,
    "mineral_water": 5,
    "sugar": 2,
    "bread": 40,
    "pharmacy": 36,
    "fertilizer": 4,
    "meat_processing": 24,
    "instant_noodle": 29,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 12,
    "poultry": 2,
    "dairy_cow": 31,
    "beef_cow": 30,
    "sheep_goat": 17,
    "shrimp": 32,
    "fish": 27,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 15,
    "wheat": 3,
    "corn": 3,
    "tubers": 9,
    "soy": 6,
    "palm_oil": 9,
    "tea": 20,
    "coffee": 36,
    "cocoa": 21,
    "sugarcane": 12,
    "vegetables": 28,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 8,
    "barracks": 18,
    "armory": 16,
    "tank_hangar": 21,
    "military_academy": 24,
    "budget": 27,
    "personnel": 14652,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 197,
        "apc": 84,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 61,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 33,
        "helikopter_serang": 106,
        "pesawat_pengintai": 2
      },
      "total_unit": 17,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 28,
    "military_air_base": 7,
    "military_naval_base": 15,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 30,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 27,
      "sabotage_mission": 15,
      "territory_management": 39,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 21,
      "elementary_school": 37,
      "middle_school": 9,
      "high_school": 33,
      "university": 12,
      "education_institute": 32,
      "laboratory": 14,
      "observatory": 40,
      "research_center": 33,
      "development_center": 11,
      "literacy": 86,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 38,
      "diagnostic_center": 26,
      "hospital_beds": 6283,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 18,
      "racing_circuit": 37,
      "stadium": 39,
      "international_stadium": 19,
      "olympic_score": 26,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 33,
      "prosecution_office": 19,
      "police_station": 37,
      "police_car_fleet": 6715,
      "police_academy": 31,
      "corruption_index": 74,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 22,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 5,
          "kamera_surveillance": 39,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 27,
    "aircraft": 13,
    "naval": 2,
    "air_base": 38,
    "naval_base": 17,
    "military_base": 18,
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
      "rate": 20,
      "satisfaction": 67,
      "revenue": 2
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52,
      "revenue": 6
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 3
    },
    "customs": {
      "rate": 23,
      "satisfaction": 86,
      "revenue": 4
    },
    "environment": {
      "rate": 5,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 17,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 100,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 25,
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
    "priceRice": 12800,
    "priceBeef": 145740,
    "priceChicken": 41000,
    "priceOil": 15400,
    "priceSugar": 7200,
    "priceEgg": 24880,
    "priceFuel": 14980,
    "priceElectric": 1280,
    "priceWater": 10400,
    "priceMedicine": 78950,
    "priceEducation": 483900
  },

  "demand": {
    "satisfaction": 66,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 4,
    "commercial": 16,
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
      "hard_power": 16,
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
    "health": 36,
    "education": 18,
    "security": 35,
    "finance": 39,
    "environment": 60
  }
};
