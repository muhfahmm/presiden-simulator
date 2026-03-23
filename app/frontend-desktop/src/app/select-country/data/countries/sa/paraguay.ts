import { CountryData } from "../../types";

export const paraguay: CountryData = {
  "name_en": "Paraguay",
  "capital": "Asunción",
  "name_id": "Paraguay",
  "lon": -58,
  "lat": -23,
  "flag": "🇵🇾",
  "pop": "10M",
  "budget": "Rp 525 T",
  "income": "Rp 454 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 6,
    "hydro_plant": 33,
    "solar_plant": 34,
    "thermal_plant": 15,
    "gas_plant": 2,
    "wind_plant": 18,
    "power_grid": 95,
    "bicycle_path": 4,
    "subway": 9,
    "railway": 17,
    "highway": 29,
    "road_quality": 74,
    "sea_port": 34,
    "airport": 15,
    "bus_terminal": 15,
    "helipad": 21,
    "internet_coverage": 55,
    "tech_stack": 87,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 33,
    "coal": 33,
    "oil": 4,
    "gas": 35,
    "salt": 39,
    "nickel": 8,
    "lithium": 35,
    "aluminum": 32,
    "copper": 28,
    "rare_earth": 23,
    "iron_ore": 33,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 12,
    "car": 18,
    "motorcycle": 9,
    "smelter": 34,
    "concrete_cement": 11,
    "wood": 4,
    "mineral_water": 6,
    "sugar": 9,
    "bread": 15,
    "pharmacy": 26,
    "fertilizer": 12,
    "meat_processing": 24,
    "instant_noodle": 38,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 8,
    "dairy_cow": 3,
    "beef_cow": 31,
    "sheep_goat": 37,
    "shrimp": 13,
    "fish": 4,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 26,
    "wheat": 15,
    "corn": 26,
    "tubers": 8,
    "soy": 14,
    "palm_oil": 5,
    "tea": 16,
    "coffee": 16,
    "cocoa": 19,
    "sugarcane": 19,
    "vegetables": 15,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 39,
    "armory": 7,
    "tank_hangar": 20,
    "military_academy": 31,
    "budget": 18,
    "personnel": 17776,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 50,
        "apc": 89,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 160,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 177,
        "helikopter_serang": 67,
        "pesawat_pengintai": 2
      },
      "total_unit": 15,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 26,
    "military_air_base": 9,
    "military_naval_base": 14,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 36,
    "cyber_defense": 5,
    "intelligence": 19,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 6,
      "sabotage_mission": 32,
      "territory_management": 1,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 1,
      "elementary_school": 7,
      "middle_school": 15,
      "high_school": 4,
      "university": 26,
      "education_institute": 25,
      "laboratory": 14,
      "observatory": 30,
      "research_center": 11,
      "development_center": 13,
      "literacy": 81,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 14,
      "diagnostic_center": 23,
      "hospital_beds": 1721,
      "life_expectancy": 18,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 33,
      "racing_circuit": 32,
      "stadium": 24,
      "international_stadium": 16,
      "olympic_score": 5,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 6,
      "court": 24,
      "prosecution_office": 27,
      "police_station": 12,
      "police_car_fleet": 8579,
      "police_academy": 39,
      "corruption_index": 82,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 34,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 6,
          "pusat_forensik": 1
        },
        "response_time": 14,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 22,
    "tanks": 23,
    "aircraft": 38,
    "naval": 8,
    "air_base": 7,
    "naval_base": 12,
    "military_base": 32,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 16,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 14,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 20,
      "satisfaction": 52
    },
    "income": {
      "rate": 37,
      "satisfaction": 61
    },
    "customs": {
      "rate": 8,
      "satisfaction": 86
    },
    "environment": {
      "rate": 25,
      "satisfaction": 88
    },
    "other": {
      "rate": 36,
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
    "residential": 12,
    "commercial": 4,
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
      "soft_power": 17,
      "hard_power": 6,
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
      { "partner": "Chile", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Brazil", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Argentina", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 40,
    "education": 7,
    "security": 27,
    "finance": 4,
    "environment": 60
  }
};
