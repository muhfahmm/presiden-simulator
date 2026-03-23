import { CountryData } from "../../types";

export const andorra: CountryData = {
  "name_en": "Andorra",
  "capital": "Andorra la Vella",
  "name_id": "Andorra",
  "lon": 1.52,
  "lat": 42.5,
  "flag": "🇦🇩",
  "pop": "19M",
  "budget": "Rp 759 T",
  "income": "Rp 639 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 38,
    "hydro_plant": 10,
    "solar_plant": 30,
    "thermal_plant": 8,
    "gas_plant": 19,
    "wind_plant": 36,
    "power_grid": 69,
    "bicycle_path": 33,
    "subway": 29,
    "railway": 9,
    "highway": 38,
    "road_quality": 84,
    "sea_port": 8,
    "airport": 18,
    "bus_terminal": 29,
    "helipad": 27,
    "internet_coverage": 75,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 26,
    "uranium": 33,
    "coal": 40,
    "oil": 12,
    "gas": 6,
    "salt": 12,
    "nickel": 28,
    "lithium": 6,
    "aluminum": 32,
    "copper": 32,
    "rare_earth": 28,
    "iron_ore": 34,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 1,
    "motorcycle": 6,
    "smelter": 10,
    "concrete_cement": 9,
    "wood": 11,
    "mineral_water": 28,
    "sugar": 18,
    "bread": 36,
    "pharmacy": 23,
    "fertilizer": 35,
    "meat_processing": 7,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 5,
    "poultry": 20,
    "dairy_cow": 30,
    "beef_cow": 32,
    "sheep_goat": 4,
    "shrimp": 11,
    "fish": 23,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 13,
    "wheat": 38,
    "corn": 37,
    "tubers": 19,
    "soy": 38,
    "palm_oil": 30,
    "tea": 22,
    "coffee": 15,
    "cocoa": 16,
    "sugarcane": 31,
    "vegetables": 29,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 30,
    "barracks": 9,
    "armory": 18,
    "tank_hangar": 31,
    "military_academy": 3,
    "budget": 25,
    "personnel": 5837,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 39,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 6,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 32,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
      },
      "total_unit": 32,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 12,
    "military_air_base": 25,
    "military_naval_base": 4,
    "arms_factory": 15,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 31,
    "intelligence": 31,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 11,
      "sabotage_mission": 6,
      "territory_management": 5,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 17,
      "radar_network": 14,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 30,
      "middle_school": 14,
      "high_school": 15,
      "university": 17,
      "education_institute": 22,
      "laboratory": 38,
      "observatory": 40,
      "research_center": 16,
      "development_center": 4,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 10,
      "diagnostic_center": 3,
      "hospital_beds": 6283,
      "life_expectancy": 10,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 32,
      "racing_circuit": 24,
      "stadium": 1,
      "international_stadium": 22,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 35,
      "court": 37,
      "prosecution_office": 21,
      "police_station": 2,
      "police_car_fleet": 6456,
      "police_academy": 26,
      "corruption_index": 69,
      "security_index": 61,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 12,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 39,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 6,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 27,
    "tanks": 29,
    "aircraft": 31,
    "naval": 14,
    "air_base": 1,
    "naval_base": 30,
    "military_base": 18,
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
      "satisfaction": 67
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52
    },
    "income": {
      "rate": 22,
      "satisfaction": 61
    },
    "customs": {
      "rate": 9,
      "satisfaction": 86
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88
    },
    "other": {
      "rate": 10,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 62,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 16,
    "industrial": 53
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 4,
      "hard_power": 12,
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
    "agreements": [
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 4,
    "education": 20,
    "security": 33,
    "finance": 6,
    "environment": 60
  }
};
