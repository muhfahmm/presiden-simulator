import { CountryData } from "../../types";

export const guiana_prancis: CountryData = {
  "name_en": "French Guiana",
  "capital": "Cayenne",
  "name_id": "Guiana prancis",
  "lon": -53,
  "lat": 4,
  "flag": "🇬🇫",
  "pop": "10M",
  "budget": "Rp 439 T",
  "income": "Rp 147 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 38,
    "hydro_plant": 2,
    "solar_plant": 10,
    "thermal_plant": 36,
    "gas_plant": 37,
    "wind_plant": 6,
    "power_grid": 78,
    "bicycle_path": 29,
    "subway": 4,
    "railway": 17,
    "highway": 20,
    "road_quality": 68,
    "sea_port": 24,
    "airport": 22,
    "bus_terminal": 39,
    "helipad": 19,
    "internet_coverage": 92,
    "tech_stack": 84,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 29,
    "uranium": 24,
    "coal": 8,
    "oil": 32,
    "gas": 20,
    "salt": 9,
    "nickel": 34,
    "lithium": 18,
    "aluminum": 19,
    "copper": 12,
    "rare_earth": 30,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 12,
    "car": 15,
    "motorcycle": 12,
    "smelter": 40,
    "concrete_cement": 13,
    "wood": 30,
    "mineral_water": 20,
    "sugar": 30,
    "bread": 27,
    "pharmacy": 13,
    "fertilizer": 40,
    "meat_processing": 9,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 16,
    "dairy_cow": 12,
    "beef_cow": 20,
    "sheep_goat": 23,
    "shrimp": 33,
    "fish": 8,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 31,
    "wheat": 32,
    "corn": 9,
    "tubers": 15,
    "soy": 38,
    "palm_oil": 37,
    "tea": 20,
    "coffee": 3,
    "cocoa": 11,
    "sugarcane": 16,
    "vegetables": 6,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 17,
    "armory": 27,
    "tank_hangar": 20,
    "military_academy": 30,
    "budget": 26,
    "personnel": 25948,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 15,
        "apc": 136,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 48,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 27,
    "military_naval_base": 15,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 29,
    "cyber_defense": 16,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 15,
      "sabotage_mission": 10,
      "territory_management": 17,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 35,
      "elementary_school": 18,
      "middle_school": 20,
      "high_school": 31,
      "university": 31,
      "education_institute": 29,
      "laboratory": 10,
      "observatory": 31,
      "research_center": 22,
      "development_center": 23,
      "literacy": 86,
      "research_index": 0
    },
    "health": {
      "large_hospital": 21,
      "small_hospital": 18,
      "diagnostic_center": 21,
      "hospital_beds": 4806,
      "life_expectancy": 10,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 28,
      "racing_circuit": 30,
      "stadium": 31,
      "international_stadium": 28,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 7,
      "court": 4,
      "prosecution_office": 22,
      "police_station": 27,
      "police_car_fleet": 7285,
      "police_academy": 11,
      "corruption_index": 94,
      "security_index": 69,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 23,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 14,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 17,
          "kamera_surveillance": 18,
          "pusat_forensik": 1
        },
        "response_time": 4,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 11,
    "aircraft": 2,
    "naval": 12,
    "air_base": 9,
    "naval_base": 6,
    "military_base": 1,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52
    },
    "income": {
      "rate": 20,
      "satisfaction": 61
    },
    "customs": {
      "rate": 28,
      "satisfaction": 86
    },
    "environment": {
      "rate": 1,
      "satisfaction": 88
    },
    "other": {
      "rate": 14,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 95,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 33,
    "commercial": 31,
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
      "soft_power": 3,
      "hard_power": 35,
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
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Brazil", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Kolombia", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Venezuela", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Peru", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Chile", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 25,
    "education": 14,
    "security": 13,
    "finance": 27,
    "environment": 60
  }
};
