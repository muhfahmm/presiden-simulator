import { CountryData } from "../../types";

export const palestina: CountryData = {
  "name_en": "Palestine",
  "capital": "Ramallah",
  "name_id": "Palestina",
  "lon": 35.2,
  "lat": 31.9,
  "flag": "🇵🇸",
  "pop": "10M",
  "budget": 194,
  "income": "556",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 28,
    "hydro_plant": 38,
    "solar_plant": 4,
    "thermal_plant": 20,
    "gas_plant": 22,
    "wind_plant": 9,
    "power_grid": 72,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 6,
    "subway": 3,
    "railway": 30,
    "highway": 36,
    "road_quality": 62,
    "sea_port": 30,
    "airport": 7,
    "bus_terminal": 11,
    "helipad": 26,
    "internet_coverage": 91,
    "tech_stack": 78,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 28,
    "uranium": 22,
    "coal": 37,
    "oil": 7,
    "gas": 10,
    "salt": 6,
    "nickel": 11,
    "lithium": 2,
    "aluminum": 12,
    "copper": 8,
    "rare_earth": 6,
    "iron_ore": 18,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 40,
    "motorcycle": 30,
    "smelter": 12,
    "concrete_cement": 35,
    "wood": 21,
    "mineral_water": 5,
    "sugar": 37,
    "bread": 34,
    "pharmacy": 29,
    "fertilizer": 16,
    "meat_processing": 9,
    "instant_noodle": 2,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 32,
    "poultry": 11,
    "dairy_cow": 4,
    "beef_cow": 10,
    "sheep_goat": 35,
    "shrimp": 6,
    "fish": 14,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 21,
    "wheat": 5,
    "corn": 13,
    "tubers": 7,
    "soy": 15,
    "palm_oil": 25,
    "tea": 8,
    "coffee": 10,
    "cocoa": 27,
    "sugarcane": 27,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 25,
    "barracks": 1,
    "armory": 32,
    "tank_hangar": 35,
    "military_academy": 5,
    "budget": 55,
    "personnel": 10762,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 81,
        "apc": 119,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 186,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 177,
        "helikopter_serang": 148,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 36,
    "military_air_base": 19,
    "military_naval_base": 15,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 23,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 5,
      "sabotage_mission": 25,
      "territory_management": 38,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 21,
      "middle_school": 33,
      "high_school": 28,
      "university": 5,
      "education_institute": 33,
      "laboratory": 36,
      "observatory": 1,
      "research_center": 26,
      "development_center": 28,
      "literacy": 64,
      "research_index": 0
    },
    "health": {
      "large_hospital": 9,
      "small_hospital": 39,
      "diagnostic_center": 38,
      "hospital_beds": 9919,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 20,
      "stadium": 29,
      "international_stadium": 9,
      "olympic_score": 15,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 39,
      "court": 34,
      "prosecution_office": 35,
      "police_station": 19,
      "police_car_fleet": 1999,
      "police_academy": 6,
      "corruption_index": 72,
      "security_index": 90,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 21,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 25,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 7,
          "pusat_forensik": 1
        },
        "response_time": 26,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 25,
    "aircraft": 31,
    "naval": 32,
    "air_base": 2,
    "naval_base": 14,
    "military_base": 27,
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
      "revenue": 9
    },
    "corporate": {
      "rate": 27,
      "satisfaction": 52,
      "revenue": 11
    },
    "income": {
      "rate": 22,
      "satisfaction": 61,
      "revenue": 11
    },
    "customs": {
      "rate": 33,
      "satisfaction": 86,
      "revenue": 11
    },
    "environment": {
      "rate": 35,
      "satisfaction": 88,
      "revenue": 17
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 10,
      "satisfaction": 93,
      "revenue": 2
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
    "salaryMedis": 80,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 69,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 23,
    "commercial": 25,
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
      "soft_power": 22,
      "hard_power": 9,
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
    "education": 15,
    "security": 33,
    "finance": 7,
    "environment": 60
  }
};
