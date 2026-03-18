import { CountryData } from "./types";

export const countries: CountryData[] = [
  {
    "name_en": "Afghanistan",
    "capital": "Kabul",
    "name_id": "Afganistan",
    "lon": 65,
    "lat": 33,
    "flag": "🇦🇫",
    "pop": "34M",
    "budget": "Rp 267 T",
    "income": "Rp 954 T",
    "religion": "Protestan",
    "ideology": "Kapitalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 3,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 91,
      "bicycle_path": 14,
      "subway": 0,
      "railway": 15,
      "highway": 23,
      "road_quality": 78,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 80,
      "tech_stack": 71,
      "water_access": 74
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 10,
      "oil": 23,
      "gas": 34,
      "salt": 7,
      "nickel": 8,
      "lithium": 24,
      "aluminum": 21,
      "copper": 18,
      "rare_earth": 10,
      "iron_ore": 31,
      "strength": 29.660809349923973
    },
    "sector_manufacturing": {
      "semiconductor": 41,
      "car": 26,
      "motorcycle": 19,
      "smelter": 18,
      "concrete_cement": 20,
      "wood": 9,
      "mineral_water": 38,
      "sugar": 3,
      "bread": 7,
      "pharmacy": 4,
      "fertilizer": 8,
      "meat_processing": 10,
      "instant_noodle": 7,
      "strength": 3.076011687404966
    },
    "sector_livestock": {
      "chicken": 7,
      "poultry": 20,
      "dairy_cow": 9,
      "beef_cow": 8,
      "sheep_goat": 2,
      "shrimp": 18,
      "fish": 26,
      "shellfish": 5,
      "strength": 18.24560701244298
    },
    "sector_agriculture": {
      "rice": 32,
      "wheat": 2,
      "corn": 12,
      "tubers": 19,
      "soy": 14,
      "palm_oil": 13,
      "tea": 4,
      "coffee": 10,
      "cocoa": 11,
      "sugarcane": 16,
      "vegetables": 21,
      "strength": 20.660809349923973
    },
    "sector_defense": {
      "prison": 6,
      "barracks": 18,
      "armory": 2,
      "tank_hangar": 2,
      "military_academy": 1,
      "budget": 7,
      "personnel": 17512,
      "strength": 16.660809349923973,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 68,
          "apc": 153,
          "artileri_berat": 26
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 6,
          "helikopter_serang": 14,
          "pesawat_pengintai": 2
        },
        "total_unit": 558,
        "readiness": 98
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 2,
      "cyber_defense": 2,
      "intelligence": 2,
      "strategic_operations": {
        "attack_mission": 5,
        "spy_mission": 9,
        "sabotage_mission": 5,
        "territory_management": 68,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 3,
        "cyber_ops": 2
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 103,
        "elementary_school": 211,
        "middle_school": 178,
        "high_school": 117,
        "university": 17,
        "education_institute": 27,
        "laboratory": 12,
        "observatory": 1,
        "research_center": 4,
        "development_center": 8,
        "literacy": 80,
        "research_index": 0
      },
      "health": {
        "large_hospital": 7,
        "small_hospital": 28,
        "diagnostic_center": 15,
        "hospital_beds": 7822,
        "life_expectancy": 74,
        "healthcare_index": 85
      },
      "sports": {
        "swimming_pool": 23,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 0,
        "popularity": 44
      },
      "law": {
        "legal_aid_center": 15,
        "court": 8,
        "prosecution_office": 8,
        "police_station": 56,
        "police_car_fleet": 403,
        "police_academy": 2,
        "corruption_index": 1,
        "security_index": 32,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 517,
            "sepeda_motor": 206,
            "unit_k9": 23
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 6,
            "anti_huru_hara": 62
          },
          "pusat_komando": {
            "stasiun_polisi": 22,
            "kamera_surveillance": 5888,
            "pusat_forensik": 1
          },
          "response_time": 4,
          "public_trust": 50
        }
      }
    },
    "military": {
      "infantry": 65484,
      "tanks": 181,
      "aircraft": 290,
      "naval": 69,
      "air_base": 4,
      "naval_base": 1,
      "military_base": 3,
      "nuclear": false,
      "strength": 10
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 310,
      "sell_commodity": 409
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 67
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 52
      },
      "income": {
        "rate": 15,
        "satisfaction": 61
      },
      "customs": {
        "rate": 5,
        "satisfaction": 86
      },
      "environment": {
        "rate": 1,
        "satisfaction": 88
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 59,
      "top_demands": [
        "Bantuan Sembako",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 85,
      "commercial": 60,
      "industrial": 53
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 7,
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 50,
      "education": 52,
      "security": 77,
      "finance": 88,
      "environment": 60
    }
  },
  {
    "name_en": "South Africa",
    "capital": "Pretoria",
    "name_id": "Afrika Selatan",
    "lon": 24,
    "lat": -29,
    "flag": "🇿🇦",
    "pop": "12M",
    "budget": "Rp 312 T",
    "income": "Rp 976 T",
    "religion": "Konghucu",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 98,
      "bicycle_path": 2,
      "subway": 0,
      "railway": 12,
      "highway": 8,
      "road_quality": 89,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 66,
      "tech_stack": 82,
      "water_access": 91
    },
    "sector_extraction": {
      "gold": 3,
      "uranium": 0,
      "coal": 27,
      "oil": 23,
      "gas": 31,
      "salt": 7,
      "nickel": 12,
      "lithium": 24,
      "aluminum": 30,
      "copper": 17,
      "rare_earth": 2,
      "iron_ore": 9,
      "strength": 40.41343947578959
    },
    "sector_manufacturing": {
      "semiconductor": 26,
      "car": 25,
      "motorcycle": 8,
      "smelter": 22,
      "concrete_cement": 17,
      "wood": 6,
      "mineral_water": 34,
      "sugar": 12,
      "bread": 7,
      "pharmacy": 9,
      "fertilizer": 3,
      "meat_processing": 15,
      "instant_noodle": 12,
      "strength": 16.76679934473698
    },
    "sector_livestock": {
      "chicken": 9,
      "poultry": 14,
      "dairy_cow": 8,
      "beef_cow": 8,
      "sheep_goat": 1,
      "shrimp": 2,
      "fish": 9,
      "shellfish": 9,
      "strength": 30.060079606842187
    },
    "sector_agriculture": {
      "rice": 34,
      "wheat": 26,
      "corn": 13,
      "tubers": 27,
      "soy": 9,
      "palm_oil": 17,
      "tea": 4,
      "coffee": 5,
      "cocoa": 2,
      "sugarcane": 1,
      "vegetables": 25,
      "strength": 5.413439475789584
    },
    "sector_defense": {
      "prison": 6,
      "barracks": 10,
      "armory": 2,
      "tank_hangar": 2,
      "military_academy": 1,
      "budget": 11,
      "personnel": 27006,
      "strength": 11.413439475789584,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 61,
          "apc": 126,
          "artileri_berat": 24
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 14,
          "pesawat_pengintai": 2
        },
        "total_unit": 587,
        "readiness": 84
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 1,
      "cyber_defense": 0,
      "intelligence": 1,
      "strategic_operations": {
        "attack_mission": 3,
        "spy_mission": 17,
        "sabotage_mission": 3,
        "territory_management": 20,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 2,
        "cyber_ops": 1
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 100,
        "elementary_school": 246,
        "middle_school": 164,
        "high_school": 118,
        "university": 13,
        "education_institute": 33,
        "laboratory": 10,
        "observatory": 1,
        "research_center": 3,
        "development_center": 9,
        "literacy": 95,
        "research_index": 2
      },
      "health": {
        "large_hospital": 6,
        "small_hospital": 24,
        "diagnostic_center": 15,
        "hospital_beds": 7172,
        "life_expectancy": 74,
        "healthcare_index": 67
      },
      "sports": {
        "swimming_pool": 33,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 1,
        "popularity": 13
      },
      "law": {
        "legal_aid_center": 18,
        "court": 6,
        "prosecution_office": 6,
        "police_station": 67,
        "police_car_fleet": 301,
        "police_academy": 2,
        "corruption_index": 64,
        "security_index": 36,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 604,
            "sepeda_motor": 242,
            "unit_k9": 24
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 5,
            "anti_huru_hara": 69
          },
          "pusat_komando": {
            "stasiun_polisi": 23,
            "kamera_surveillance": 5141,
            "pusat_forensik": 1
          },
          "response_time": 2,
          "public_trust": 88
        }
      }
    },
    "military": {
      "infantry": 53185,
      "tanks": 1740,
      "aircraft": 116,
      "naval": 47,
      "air_base": 3,
      "naval_base": 0,
      "military_base": 5,
      "nuclear": false,
      "strength": 27
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 237,
      "sell_commodity": 597
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 80
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 52
      },
      "income": {
        "rate": 15,
        "satisfaction": 72
      },
      "customs": {
        "rate": 5,
        "satisfaction": 73
      },
      "environment": {
        "rate": 1,
        "satisfaction": 82
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 52,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 70,
      "commercial": 81,
      "industrial": 62
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 5,
        "diplomatic_prestige": 53
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 74,
      "education": 88,
      "security": 83,
      "finance": 50,
      "environment": 88
    }
  },
  {
    "name_en": "Albania",
    "capital": "Tirana",
    "name_id": "Albania",
    "lon": 20,
    "lat": 41,
    "flag": "🇦🇱",
    "pop": "33M",
    "budget": "Rp 268 T",
    "income": "Rp 188 T",
    "religion": "Ateisme",
    "ideology": "Nasionalisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 3,
      "solar_plant": 26,
      "thermal_plant": 2,
      "gas_plant": 3,
      "wind_plant": 6,
      "power_grid": 87,
      "bicycle_path": 31,
      "subway": 2,
      "railway": 211,
      "highway": 193,
      "road_quality": 65,
      "sea_port": 10,
      "airport": 5,
      "internet_coverage": 73,
      "tech_stack": 52,
      "water_access": 74
    },
    "sector_extraction": {
      "gold": 30,
      "uranium": 0,
      "coal": 51,
      "oil": 409,
      "gas": 58,
      "salt": 39,
      "nickel": 246,
      "lithium": 20,
      "aluminum": 6,
      "copper": 210,
      "rare_earth": 143,
      "iron_ore": 202,
      "strength": 21.951058606423416
    },
    "sector_manufacturing": {
      "semiconductor": 4,
      "car": 262,
      "motorcycle": 387,
      "smelter": 226,
      "concrete_cement": 33,
      "wood": 2,
      "mineral_water": 413,
      "sugar": 66,
      "bread": 261,
      "pharmacy": 53,
      "fertilizer": 189,
      "meat_processing": 233,
      "instant_noodle": 341,
      "strength": 33.188823258029274
    },
    "sector_livestock": {
      "chicken": 274,
      "poultry": 261,
      "dairy_cow": 89,
      "beef_cow": 159,
      "sheep_goat": 1,
      "shrimp": 153,
      "fish": 142,
      "shellfish": 108,
      "strength": 19.713293954817562
    },
    "sector_agriculture": {
      "rice": 466,
      "wheat": 129,
      "corn": 253,
      "tubers": 328,
      "soy": 221,
      "palm_oil": 235,
      "tea": 121,
      "coffee": 144,
      "cocoa": 208,
      "sugarcane": 162,
      "vegetables": 170,
      "strength": 54.951058606423416
    },
    "sector_defense": {
      "prison": 10,
      "barracks": 58,
      "armory": 25,
      "tank_hangar": 3,
      "military_academy": 4,
      "budget": 29,
      "personnel": 30280,
      "strength": 33.951058606423416,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 212,
          "apc": 616,
          "artileri_berat": 121
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 6,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 12,
          "helikopter_serang": 73,
          "pesawat_pengintai": 7
        },
        "total_unit": 1967,
        "readiness": 85
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 4,
      "military_naval_base": 3,
      "arms_factory": 6,
      "nuclear_status": false,
      "space_program": 16,
      "cyber_defense": 4,
      "intelligence": 28,
      "strategic_operations": {
        "attack_mission": 4,
        "spy_mission": 2,
        "sabotage_mission": 12,
        "territory_management": 67,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 34,
        "cyber_ops": 13
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 439,
        "elementary_school": 260,
        "middle_school": 667,
        "high_school": 124,
        "university": 36,
        "education_institute": 113,
        "laboratory": 21,
        "observatory": 15,
        "research_center": 26,
        "development_center": 34,
        "literacy": 84,
        "research_index": 40
      },
      "health": {
        "large_hospital": 37,
        "small_hospital": 238,
        "diagnostic_center": 100,
        "hospital_beds": 56922,
        "life_expectancy": 62,
        "healthcare_index": 54
      },
      "sports": {
        "swimming_pool": 178,
        "racing_circuit": 1,
        "stadium": 18,
        "international_stadium": 0,
        "olympic_score": 45,
        "popularity": 58
      },
      "law": {
        "legal_aid_center": 36,
        "court": 42,
        "prosecution_office": 37,
        "police_station": 170,
        "police_car_fleet": 2811,
        "police_academy": 2,
        "corruption_index": 32,
        "security_index": 8,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 557,
            "sepeda_motor": 528,
            "unit_k9": 104
          },
          "taktis_khusus": {
            "swat": 61,
            "helikopter_polisi": 6,
            "anti_huru_hara": 246
          },
          "pusat_komando": {
            "stasiun_polisi": 81,
            "kamera_surveillance": 26741,
            "pusat_forensik": 2
          },
          "response_time": 9,
          "public_trust": 86
        }
      }
    },
    "military": {
      "infantry": 76799,
      "tanks": 391,
      "aircraft": 385,
      "naval": 92,
      "air_base": 2,
      "naval_base": 1,
      "military_base": 3,
      "nuclear": false,
      "strength": 19
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 391,
      "sell_commodity": 117
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 61
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 72
      },
      "income": {
        "rate": 15,
        "satisfaction": 51
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 80
      },
      "other": {
        "rate": 2,
        "satisfaction": 88
      }
    },
    "demand": {
      "satisfaction": 65,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 48,
      "commercial": 47,
      "industrial": 50
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 25,
        "diplomatic_prestige": 62
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 64,
      "education": 88,
      "security": 59,
      "finance": 71,
      "environment": 62
    }
  },
  {
    "name_en": "Algeria",
    "capital": "Algiers",
    "name_id": "Aljazair",
    "lon": 3,
    "lat": 28,
    "flag": "🇩🇿",
    "pop": "256M",
    "budget": "Rp 8448 T",
    "income": "Rp 6307 T",
    "religion": "Protestan",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 1,
      "solar_plant": 76,
      "thermal_plant": 3,
      "gas_plant": 4,
      "wind_plant": 18,
      "power_grid": 94,
      "bicycle_path": 165,
      "subway": 7,
      "railway": 104,
      "highway": 829,
      "road_quality": 86,
      "sea_port": 7,
      "airport": 12,
      "internet_coverage": 67,
      "tech_stack": 88,
      "water_access": 82
    },
    "sector_extraction": {
      "gold": 48,
      "uranium": 28,
      "coal": 739,
      "oil": 121,
      "gas": 887,
      "salt": 587,
      "nickel": 335,
      "lithium": 19,
      "aluminum": 18,
      "copper": 613,
      "rare_earth": 348,
      "iron_ore": 357,
      "strength": 45.5073280814772
    },
    "sector_manufacturing": {
      "semiconductor": 381,
      "car": 639,
      "motorcycle": 604,
      "smelter": 177,
      "concrete_cement": 545,
      "wood": 246,
      "mineral_water": 375,
      "sugar": 145,
      "bread": 485,
      "pharmacy": 60,
      "fertilizer": 203,
      "meat_processing": 32,
      "instant_noodle": 219,
      "strength": 54.3841601018465
    },
    "sector_livestock": {
      "chicken": 198,
      "poultry": 728,
      "dairy_cow": 351,
      "beef_cow": 417,
      "sheep_goat": 379,
      "shrimp": 327,
      "fish": 273,
      "shellfish": 174,
      "strength": 61.6304960611079
    },
    "sector_agriculture": {
      "rice": 1017,
      "wheat": 523,
      "corn": 430,
      "tubers": 682,
      "soy": 386,
      "palm_oil": 388,
      "tea": 306,
      "coffee": 334,
      "cocoa": 116,
      "sugarcane": 216,
      "vegetables": 703,
      "strength": 73.5073280814772
    },
    "sector_defense": {
      "prison": 78,
      "barracks": 47,
      "armory": 29,
      "tank_hangar": 23,
      "military_academy": 10,
      "budget": 109,
      "personnel": 445979,
      "strength": 78.5073280814772,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 520,
          "apc": 1569,
          "artileri_berat": 124
        },
        "laut": {
          "kapal_induk": 1,
          "kapal_destroyer": 21,
          "kapal_selam_nuklir": 4
        },
        "udara": {
          "jet_tempur_stealth": 16,
          "helikopter_serang": 114,
          "pesawat_pengintai": 16
        },
        "total_unit": 3361,
        "readiness": 89
      }
    },
    "sector_military_strategic": {
      "command_center": 5,
      "military_air_base": 14,
      "military_naval_base": 4,
      "arms_factory": 1,
      "nuclear_status": true,
      "space_program": 87,
      "cyber_defense": 15,
      "intelligence": 39,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 11,
        "sabotage_mission": 8,
        "territory_management": 64,
        "nuclear_program": 95
      },
      "intel_radar": {
        "satellite_system": 5,
        "radar_network": 57,
        "cyber_ops": 90
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 145,
        "elementary_school": 629,
        "middle_school": 499,
        "high_school": 150,
        "university": 132,
        "education_institute": 138,
        "laboratory": 81,
        "observatory": 40,
        "research_center": 79,
        "development_center": 17,
        "literacy": 77,
        "research_index": 98
      },
      "health": {
        "large_hospital": 85,
        "small_hospital": 176,
        "diagnostic_center": 131,
        "hospital_beds": 79865,
        "life_expectancy": 73,
        "healthcare_index": 89
      },
      "sports": {
        "swimming_pool": 385,
        "racing_circuit": 1,
        "stadium": 16,
        "international_stadium": 3,
        "olympic_score": 85,
        "popularity": 87
      },
      "law": {
        "legal_aid_center": 226,
        "court": 107,
        "prosecution_office": 71,
        "police_station": 439,
        "police_car_fleet": 653,
        "police_academy": 3,
        "corruption_index": 40,
        "security_index": 63,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1448,
            "sepeda_motor": 926,
            "unit_k9": 54
          },
          "taktis_khusus": {
            "swat": 48,
            "helikopter_polisi": 36,
            "anti_huru_hara": 353
          },
          "pusat_komando": {
            "stasiun_polisi": 38,
            "kamera_surveillance": 34651,
            "pusat_forensik": 10
          },
          "response_time": 3,
          "public_trust": 66
        }
      }
    },
    "military": {
      "infantry": 63770,
      "tanks": 1459,
      "aircraft": 347,
      "naval": 29,
      "air_base": 1,
      "naval_base": 0,
      "military_base": 9,
      "nuclear": true,
      "strength": 85
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 306,
      "sell_commodity": 258
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 81
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 68
      },
      "income": {
        "rate": 15,
        "satisfaction": 73
      },
      "customs": {
        "rate": 5,
        "satisfaction": 77
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 89
      }
    },
    "demand": {
      "satisfaction": 76,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 87,
      "commercial": 50,
      "industrial": 63
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [
        "Korea Utara",
        "Rusia"
      ],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 33,
        "hard_power": 10,
        "diplomatic_prestige": 54
      },
      "international_orgs": [
        {
          "name": "PBB (UN)",
          "role": "Leader"
        },
        {
          "name": "WHO",
          "role": "Member"
        },
        {
          "name": "WTO",
          "role": "Member"
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 65,
      "education": 86,
      "security": 73,
      "finance": 63,
      "environment": 61
    }
  },
  {
    "name_en": "United States",
    "capital": "Washington, D.C.",
    "name_id": "Amerika Serikat",
    "lon": -97,
    "lat": 38,
    "flag": "🇺🇸",
    "pop": "36M",
    "budget": "Rp 818 T",
    "income": "Rp 435 T",
    "religion": "Konghucu",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 6,
      "solar_plant": 57,
      "thermal_plant": 0,
      "gas_plant": 5,
      "wind_plant": 13,
      "power_grid": 71,
      "bicycle_path": 365,
      "subway": 3,
      "railway": 146,
      "highway": 481,
      "road_quality": 64,
      "sea_port": 3,
      "airport": 8,
      "internet_coverage": 78,
      "tech_stack": 71,
      "water_access": 90
    },
    "sector_extraction": {
      "gold": 36,
      "uranium": 0,
      "coal": 177,
      "oil": 342,
      "gas": 582,
      "salt": 350,
      "nickel": 149,
      "lithium": 30,
      "aluminum": 10,
      "copper": 300,
      "rare_earth": 161,
      "iron_ore": 753,
      "strength": 53.708627122291134
    },
    "sector_manufacturing": {
      "semiconductor": 641,
      "car": 228,
      "motorcycle": 219,
      "smelter": 90,
      "concrete_cement": 370,
      "wood": 63,
      "mineral_water": 305,
      "sugar": 201,
      "bread": 109,
      "pharmacy": 173,
      "fertilizer": 251,
      "meat_processing": 301,
      "instant_noodle": 112,
      "strength": 61.13578390286392
    },
    "sector_livestock": {
      "chicken": 143,
      "poultry": 313,
      "dairy_cow": 136,
      "beef_cow": 240,
      "sheep_goat": 238,
      "shrimp": 150,
      "fish": 373,
      "shellfish": 165,
      "strength": 33.28147034171835
    },
    "sector_agriculture": {
      "rice": 525,
      "wheat": 673,
      "corn": 187,
      "tubers": 90,
      "soy": 435,
      "palm_oil": 339,
      "tea": 257,
      "coffee": 345,
      "cocoa": 55,
      "sugarcane": 392,
      "vegetables": 469,
      "strength": 60.708627122291134
    },
    "sector_defense": {
      "prison": 32,
      "barracks": 52,
      "armory": 7,
      "tank_hangar": 29,
      "military_academy": 1,
      "budget": 13,
      "personnel": 271807,
      "strength": 34.708627122291134,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 284,
          "apc": 110,
          "artileri_berat": 178
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 10,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 25,
          "helikopter_serang": 66,
          "pesawat_pengintai": 18
        },
        "total_unit": 1949,
        "readiness": 86
      }
    },
    "sector_military_strategic": {
      "command_center": 3,
      "military_air_base": 15,
      "military_naval_base": 4,
      "arms_factory": 10,
      "nuclear_status": false,
      "space_program": 36,
      "cyber_defense": 22,
      "intelligence": 51,
      "strategic_operations": {
        "attack_mission": 9,
        "spy_mission": 9,
        "sabotage_mission": 6,
        "territory_management": 46,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 43,
        "cyber_ops": 4
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 382,
        "elementary_school": 1151,
        "middle_school": 1089,
        "high_school": 781,
        "university": 121,
        "education_institute": 158,
        "laboratory": 124,
        "observatory": 21,
        "research_center": 39,
        "development_center": 8,
        "literacy": 88,
        "research_index": 72
      },
      "health": {
        "large_hospital": 63,
        "small_hospital": 231,
        "diagnostic_center": 33,
        "hospital_beds": 35547,
        "life_expectancy": 70,
        "healthcare_index": 84
      },
      "sports": {
        "swimming_pool": 246,
        "racing_circuit": 0,
        "stadium": 8,
        "international_stadium": 2,
        "olympic_score": 31,
        "popularity": 69
      },
      "law": {
        "legal_aid_center": 169,
        "court": 37,
        "prosecution_office": 39,
        "police_station": 384,
        "police_car_fleet": 1085,
        "police_academy": 12,
        "corruption_index": 19,
        "security_index": 64,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2254,
            "sepeda_motor": 343,
            "unit_k9": 138
          },
          "taktis_khusus": {
            "swat": 81,
            "helikopter_polisi": 34,
            "anti_huru_hara": 314
          },
          "pusat_komando": {
            "stasiun_polisi": 73,
            "kamera_surveillance": 17162,
            "pusat_forensik": 5
          },
          "response_time": 8,
          "public_trust": 69
        }
      }
    },
    "military": {
      "infantry": 8643,
      "tanks": 1611,
      "aircraft": 454,
      "naval": 82,
      "air_base": 2,
      "naval_base": 0,
      "military_base": 8,
      "nuclear": false,
      "strength": 25
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 292,
      "sell_commodity": 474
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 80
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 60
      },
      "income": {
        "rate": 15,
        "satisfaction": 62
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 88
      }
    },
    "demand": {
      "satisfaction": 63,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 66,
      "commercial": 43,
      "industrial": 89
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 28,
        "hard_power": 30,
        "diplomatic_prestige": 40
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 54,
      "education": 82,
      "security": 75,
      "finance": 56,
      "environment": 61
    }
  },
  {
    "name_en": "Andorra",
    "capital": "Andorra la Vella",
    "name_id": "Andorra",
    "lon": 1.5,
    "lat": 42.5,
    "flag": "🇦🇩",
    "pop": "19M",
    "budget": "Rp 220 T",
    "income": "Rp 177 T",
    "religion": "Protestan",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 2,
      "thermal_plant": 1,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 88,
      "bicycle_path": 11,
      "subway": 0,
      "railway": 70,
      "highway": 123,
      "road_quality": 80,
      "sea_port": 1,
      "airport": 0,
      "internet_coverage": 97,
      "tech_stack": 83,
      "water_access": 75
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 2,
      "oil": 3,
      "gas": 25,
      "salt": 17,
      "nickel": 43,
      "lithium": 19,
      "aluminum": 10,
      "copper": 25,
      "rare_earth": 38,
      "iron_ore": 90,
      "strength": 30.507219732492374
    },
    "sector_manufacturing": {
      "semiconductor": 8,
      "car": 86,
      "motorcycle": 13,
      "smelter": 0,
      "concrete_cement": 65,
      "wood": 43,
      "mineral_water": 70,
      "sugar": 20,
      "bread": 46,
      "pharmacy": 20,
      "fertilizer": 23,
      "meat_processing": 30,
      "instant_noodle": 13,
      "strength": 9.634024665615467
    },
    "sector_livestock": {
      "chicken": 94,
      "poultry": 40,
      "dairy_cow": 13,
      "beef_cow": 21,
      "sheep_goat": 38,
      "shrimp": 17,
      "fish": 22,
      "shellfish": 18,
      "strength": 14.38041479936928
    },
    "sector_agriculture": {
      "rice": 129,
      "wheat": 99,
      "corn": 100,
      "tubers": 39,
      "soy": 45,
      "palm_oil": 39,
      "tea": 23,
      "coffee": 48,
      "cocoa": 18,
      "sugarcane": 61,
      "vegetables": 20,
      "strength": 19.507219732492374
    },
    "sector_defense": {
      "prison": 15,
      "barracks": 32,
      "armory": 4,
      "tank_hangar": 1,
      "military_academy": 2,
      "budget": 13,
      "personnel": 55984,
      "strength": 36.50721973249237,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 85,
          "apc": 222,
          "artileri_berat": 62
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 9,
          "helikopter_serang": 20,
          "pesawat_pengintai": 4
        },
        "total_unit": 744,
        "readiness": 92
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 3,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 2,
      "cyber_defense": 0,
      "intelligence": 1,
      "strategic_operations": {
        "attack_mission": 4,
        "spy_mission": 17,
        "sabotage_mission": 5,
        "territory_management": 70,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 5,
        "cyber_ops": 4
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 171,
        "elementary_school": 273,
        "middle_school": 197,
        "high_school": 153,
        "university": 27,
        "education_institute": 30,
        "laboratory": 18,
        "observatory": 1,
        "research_center": 12,
        "development_center": 13,
        "literacy": 89,
        "research_index": 8
      },
      "health": {
        "large_hospital": 10,
        "small_hospital": 58,
        "diagnostic_center": 25,
        "hospital_beds": 11799,
        "life_expectancy": 60,
        "healthcare_index": 84
      },
      "sports": {
        "swimming_pool": 48,
        "racing_circuit": 0,
        "stadium": 5,
        "international_stadium": 0,
        "olympic_score": 9,
        "popularity": 56
      },
      "law": {
        "legal_aid_center": 15,
        "court": 9,
        "prosecution_office": 14,
        "police_station": 141,
        "police_car_fleet": 732,
        "police_academy": 3,
        "corruption_index": 23,
        "security_index": 2,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 532,
            "sepeda_motor": 358,
            "unit_k9": 36
          },
          "taktis_khusus": {
            "swat": 19,
            "helikopter_polisi": 5,
            "anti_huru_hara": 110
          },
          "pusat_komando": {
            "stasiun_polisi": 32,
            "kamera_surveillance": 7854,
            "pusat_forensik": 1
          },
          "response_time": 2,
          "public_trust": 89
        }
      }
    },
    "military": {
      "infantry": 2503,
      "tanks": 444,
      "aircraft": 288,
      "naval": 42,
      "air_base": 1,
      "naval_base": 0,
      "military_base": 2,
      "nuclear": false,
      "strength": 41
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 146,
      "sell_commodity": 153
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 72
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 55
      },
      "income": {
        "rate": 15,
        "satisfaction": 88
      },
      "customs": {
        "rate": 5,
        "satisfaction": 78
      },
      "environment": {
        "rate": 1,
        "satisfaction": 89
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 67,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 84,
      "commercial": 81,
      "industrial": 85
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 13,
        "hard_power": 10,
        "diplomatic_prestige": 40
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 62,
      "education": 83,
      "security": 66,
      "finance": 59,
      "environment": 52
    }
  },
  {
    "name_en": "Angola",
    "capital": "Luanda",
    "name_id": "Angola",
    "lon": 18.5,
    "lat": -12.5,
    "flag": "🇦🇴",
    "pop": "17M",
    "budget": "Rp 161 T",
    "income": "Rp 317 T",
    "religion": "Kristen Ortodoks",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 3,
      "solar_plant": 14,
      "thermal_plant": 4,
      "gas_plant": 2,
      "wind_plant": 6,
      "power_grid": 94,
      "bicycle_path": 20,
      "subway": 1,
      "railway": 115,
      "highway": 162,
      "road_quality": 80,
      "sea_port": 1,
      "airport": 4,
      "internet_coverage": 78,
      "tech_stack": 45,
      "water_access": 79
    },
    "sector_extraction": {
      "gold": 19,
      "uranium": 0,
      "coal": 1,
      "oil": 170,
      "gas": 27,
      "salt": 86,
      "nickel": 73,
      "lithium": 17,
      "aluminum": 2,
      "copper": 95,
      "rare_earth": 134,
      "iron_ore": 132,
      "strength": 16.31507630293933
    },
    "sector_manufacturing": {
      "semiconductor": 134,
      "car": 86,
      "motorcycle": 26,
      "smelter": 240,
      "concrete_cement": 84,
      "wood": 74,
      "mineral_water": 65,
      "sugar": 69,
      "bread": 163,
      "pharmacy": 31,
      "fertilizer": 69,
      "meat_processing": 90,
      "instant_noodle": 69,
      "strength": 36.14384537867416
    },
    "sector_livestock": {
      "chicken": 185,
      "poultry": 78,
      "dairy_cow": 77,
      "beef_cow": 26,
      "sheep_goat": 28,
      "shrimp": 72,
      "fish": 159,
      "shellfish": 35,
      "strength": 42.4863072272045
    },
    "sector_agriculture": {
      "rice": 400,
      "wheat": 333,
      "corn": 243,
      "tubers": 173,
      "soy": 17,
      "palm_oil": 0,
      "tea": 21,
      "coffee": 34,
      "cocoa": 61,
      "sugarcane": 65,
      "vegetables": 149,
      "strength": 32.31507630293933
    },
    "sector_defense": {
      "prison": 38,
      "barracks": 67,
      "armory": 16,
      "tank_hangar": 8,
      "military_academy": 2,
      "budget": 70,
      "personnel": 63382,
      "strength": 52.31507630293933,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 54,
          "apc": 361,
          "artileri_berat": 25
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 47,
          "pesawat_pengintai": 13
        },
        "total_unit": 884,
        "readiness": 91
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 1,
      "arms_factory": 5,
      "nuclear_status": false,
      "space_program": 33,
      "cyber_defense": 11,
      "intelligence": 9,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 15,
        "sabotage_mission": 1,
        "territory_management": 57,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 26,
        "cyber_ops": 37
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 312,
        "elementary_school": 534,
        "middle_school": 317,
        "high_school": 157,
        "university": 46,
        "education_institute": 163,
        "laboratory": 114,
        "observatory": 18,
        "research_center": 4,
        "development_center": 42,
        "literacy": 86,
        "research_index": 22
      },
      "health": {
        "large_hospital": 40,
        "small_hospital": 26,
        "diagnostic_center": 17,
        "hospital_beds": 27382,
        "life_expectancy": 64,
        "healthcare_index": 86
      },
      "sports": {
        "swimming_pool": 24,
        "racing_circuit": 1,
        "stadium": 8,
        "international_stadium": 1,
        "olympic_score": 20,
        "popularity": 67
      },
      "law": {
        "legal_aid_center": 55,
        "court": 53,
        "prosecution_office": 31,
        "police_station": 122,
        "police_car_fleet": 860,
        "police_academy": 7,
        "corruption_index": 63,
        "security_index": 14,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1440,
            "sepeda_motor": 497,
            "unit_k9": 39
          },
          "taktis_khusus": {
            "swat": 20,
            "helikopter_polisi": 11,
            "anti_huru_hara": 169
          },
          "pusat_komando": {
            "stasiun_polisi": 35,
            "kamera_surveillance": 19750,
            "pusat_forensik": 1
          },
          "response_time": 6,
          "public_trust": 64
        }
      }
    },
    "military": {
      "infantry": 77913,
      "tanks": 1471,
      "aircraft": 345,
      "naval": 51,
      "air_base": 3,
      "naval_base": 2,
      "military_base": 2,
      "nuclear": false,
      "strength": 49
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 150,
      "sell_commodity": 83
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 74
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 56
      },
      "income": {
        "rate": 15,
        "satisfaction": 82
      },
      "customs": {
        "rate": 5,
        "satisfaction": 74
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 88
      }
    },
    "demand": {
      "satisfaction": 75,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 79,
      "commercial": 53,
      "industrial": 45
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 16,
        "hard_power": 17,
        "diplomatic_prestige": 61
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 53,
      "education": 59,
      "security": 76,
      "finance": 77,
      "environment": 77
    }
  },
  {
    "name_en": "Antigua and Barbuda",
    "capital": "Saint John's",
    "name_id": "Antigua dan Barbuda",
    "lon": -61.8,
    "lat": 17.05,
    "flag": "🇦🇬",
    "pop": "6M",
    "budget": "Rp 733 T",
    "income": "Rp 415 T",
    "religion": "Taoisme",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 3,
      "hydro_plant": 2,
      "solar_plant": 62,
      "thermal_plant": 9,
      "gas_plant": 0,
      "wind_plant": 8,
      "power_grid": 83,
      "bicycle_path": 367,
      "subway": 5,
      "railway": 116,
      "highway": 620,
      "road_quality": 84,
      "sea_port": 3,
      "airport": 10,
      "internet_coverage": 72,
      "tech_stack": 56,
      "water_access": 79
    },
    "sector_extraction": {
      "gold": 29,
      "uranium": 0,
      "coal": 193,
      "oil": 98,
      "gas": 521,
      "salt": 357,
      "nickel": 363,
      "lithium": 12,
      "aluminum": 6,
      "copper": 238,
      "rare_earth": 109,
      "iron_ore": 224,
      "strength": 44.769738864799685
    },
    "sector_manufacturing": {
      "semiconductor": 229,
      "car": 518,
      "motorcycle": 422,
      "smelter": 44,
      "concrete_cement": 396,
      "wood": 121,
      "mineral_water": 368,
      "sugar": 49,
      "bread": 154,
      "pharmacy": 219,
      "fertilizer": 162,
      "meat_processing": 64,
      "instant_noodle": 341,
      "strength": 66.2121735809996
    },
    "sector_livestock": {
      "chicken": 488,
      "poultry": 133,
      "dairy_cow": 216,
      "beef_cow": 224,
      "sheep_goat": 206,
      "shrimp": 251,
      "fish": 239,
      "shellfish": 115,
      "strength": 51.327304148599765
    },
    "sector_agriculture": {
      "rice": 299,
      "wheat": 167,
      "corn": 32,
      "tubers": 92,
      "soy": 433,
      "palm_oil": 71,
      "tea": 2,
      "coffee": 147,
      "cocoa": 228,
      "sugarcane": 161,
      "vegetables": 64,
      "strength": 37.769738864799685
    },
    "sector_defense": {
      "prison": 75,
      "barracks": 60,
      "armory": 35,
      "tank_hangar": 12,
      "military_academy": 2,
      "budget": 94,
      "personnel": 27673,
      "strength": 35.769738864799685,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 379,
          "apc": 246,
          "artileri_berat": 258
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 9,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 39,
          "helikopter_serang": 28,
          "pesawat_pengintai": 15
        },
        "total_unit": 1803,
        "readiness": 90
      }
    },
    "sector_military_strategic": {
      "command_center": 4,
      "military_air_base": 9,
      "military_naval_base": 1,
      "arms_factory": 9,
      "nuclear_status": false,
      "space_program": 65,
      "cyber_defense": 59,
      "intelligence": 32,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 15,
        "sabotage_mission": 3,
        "territory_management": 63,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 12,
        "cyber_ops": 27
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 592,
        "elementary_school": 840,
        "middle_school": 1000,
        "high_school": 117,
        "university": 145,
        "education_institute": 232,
        "laboratory": 40,
        "observatory": 6,
        "research_center": 20,
        "development_center": 76,
        "literacy": 92,
        "research_index": 52
      },
      "health": {
        "large_hospital": 43,
        "small_hospital": 95,
        "diagnostic_center": 58,
        "hospital_beds": 46891,
        "life_expectancy": 73,
        "healthcare_index": 56
      },
      "sports": {
        "swimming_pool": 62,
        "racing_circuit": 7,
        "stadium": 23,
        "international_stadium": 0,
        "olympic_score": 12,
        "popularity": 17
      },
      "law": {
        "legal_aid_center": 191,
        "court": 22,
        "prosecution_office": 22,
        "police_station": 98,
        "police_car_fleet": 1126,
        "police_academy": 3,
        "corruption_index": 58,
        "security_index": 62,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 861,
            "sepeda_motor": 894,
            "unit_k9": 71
          },
          "taktis_khusus": {
            "swat": 14,
            "helikopter_polisi": 18,
            "anti_huru_hara": 74
          },
          "pusat_komando": {
            "stasiun_polisi": 42,
            "kamera_surveillance": 12797,
            "pusat_forensik": 3
          },
          "response_time": 3,
          "public_trust": 66
        }
      }
    },
    "military": {
      "infantry": 30373,
      "tanks": 1079,
      "aircraft": 243,
      "naval": 36,
      "air_base": 1,
      "naval_base": 0,
      "military_base": 6,
      "nuclear": false,
      "strength": 46
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 489,
      "sell_commodity": 609
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 89
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 69
      },
      "income": {
        "rate": 15,
        "satisfaction": 52
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 72,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 73,
      "commercial": 58,
      "industrial": 73
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 33,
        "hard_power": 37,
        "diplomatic_prestige": 40
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 69,
      "education": 58,
      "security": 52,
      "finance": 66,
      "environment": 68
    }
  },
  {
    "name_en": "Saudi Arabia",
    "capital": "Riyadh",
    "name_id": "Arab Saudi",
    "lon": 45,
    "lat": 25,
    "flag": "🇸🇦",
    "pop": "10M",
    "budget": "Rp 518 T",
    "income": "Rp 761 T",
    "religion": "Hindu",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 6,
      "thermal_plant": 1,
      "gas_plant": 0,
      "wind_plant": 1,
      "power_grid": 74,
      "bicycle_path": 22,
      "subway": 0,
      "railway": 11,
      "highway": 74,
      "road_quality": 65,
      "sea_port": 1,
      "airport": 1,
      "internet_coverage": 92,
      "tech_stack": 69,
      "water_access": 72
    },
    "sector_extraction": {
      "gold": 2,
      "uranium": 0,
      "coal": 49,
      "oil": 13,
      "gas": 73,
      "salt": 35,
      "nickel": 16,
      "lithium": 12,
      "aluminum": 16,
      "copper": 34,
      "rare_earth": 27,
      "iron_ore": 71,
      "strength": 15.391266039513638
    },
    "sector_manufacturing": {
      "semiconductor": 1,
      "car": 44,
      "motorcycle": 76,
      "smelter": 5,
      "concrete_cement": 7,
      "wood": 40,
      "mineral_water": 72,
      "sugar": 9,
      "bread": 37,
      "pharmacy": 21,
      "fertilizer": 0,
      "meat_processing": 33,
      "instant_noodle": 64,
      "strength": 42.23908254939205
    },
    "sector_livestock": {
      "chicken": 49,
      "poultry": 54,
      "dairy_cow": 35,
      "beef_cow": 4,
      "sheep_goat": 14,
      "shrimp": 38,
      "fish": 14,
      "shellfish": 20,
      "strength": 27.54344952963523
    },
    "sector_agriculture": {
      "rice": 85,
      "wheat": 57,
      "corn": 55,
      "tubers": 25,
      "soy": 49,
      "palm_oil": 2,
      "tea": 20,
      "coffee": 8,
      "cocoa": 5,
      "sugarcane": 29,
      "vegetables": 57,
      "strength": 11.391266039513638
    },
    "sector_defense": {
      "prison": 10,
      "barracks": 26,
      "armory": 3,
      "tank_hangar": 2,
      "military_academy": 1,
      "budget": 13,
      "personnel": 23719,
      "strength": 9.391266039513638,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 70,
          "apc": 145,
          "artileri_berat": 40
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 12,
          "pesawat_pengintai": 2
        },
        "total_unit": 505,
        "readiness": 91
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 7,
      "cyber_defense": 7,
      "intelligence": 4,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 14,
        "sabotage_mission": 4,
        "territory_management": 21,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 1,
        "cyber_ops": 4
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 132,
        "elementary_school": 290,
        "middle_school": 169,
        "high_school": 170,
        "university": 25,
        "education_institute": 34,
        "laboratory": 11,
        "observatory": 4,
        "research_center": 8,
        "development_center": 16,
        "literacy": 95,
        "research_index": 2
      },
      "health": {
        "large_hospital": 12,
        "small_hospital": 31,
        "diagnostic_center": 19,
        "hospital_beds": 9678,
        "life_expectancy": 69,
        "healthcare_index": 88
      },
      "sports": {
        "swimming_pool": 32,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 2,
        "popularity": 31
      },
      "law": {
        "legal_aid_center": 23,
        "court": 17,
        "prosecution_office": 10,
        "police_station": 87,
        "police_car_fleet": 263,
        "police_academy": 2,
        "corruption_index": 22,
        "security_index": 0,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 576,
            "sepeda_motor": 267,
            "unit_k9": 27
          },
          "taktis_khusus": {
            "swat": 10,
            "helikopter_polisi": 5,
            "anti_huru_hara": 81
          },
          "pusat_komando": {
            "stasiun_polisi": 29,
            "kamera_surveillance": 9198,
            "pusat_forensik": 1
          },
          "response_time": 9,
          "public_trust": 72
        }
      }
    },
    "military": {
      "infantry": 56953,
      "tanks": 60,
      "aircraft": 184,
      "naval": 48,
      "air_base": 2,
      "naval_base": 0,
      "military_base": 2,
      "nuclear": false,
      "strength": 39
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 289,
      "sell_commodity": 305
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 82
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 73
      },
      "income": {
        "rate": 15,
        "satisfaction": 50
      },
      "customs": {
        "rate": 5,
        "satisfaction": 83
      },
      "environment": {
        "rate": 1,
        "satisfaction": 87
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 62,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Subsidisi Listrik"
      ],
      "residential": 70,
      "commercial": 89,
      "industrial": 64
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 12,
        "hard_power": 6,
        "diplomatic_prestige": 49
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 51,
      "education": 60,
      "security": 79,
      "finance": 87,
      "environment": 85
    }
  },
  {
    "name_en": "Argentina",
    "capital": "Buenos Aires",
    "name_id": "Argentina",
    "lon": -64,
    "lat": -34,
    "flag": "🇦🇷",
    "pop": "123M",
    "budget": "Rp 6869 T",
    "income": "Rp 9559 T",
    "religion": "Katolik",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 8,
      "solar_plant": 67,
      "thermal_plant": 8,
      "gas_plant": 7,
      "wind_plant": 19,
      "power_grid": 94,
      "bicycle_path": 244,
      "subway": 3,
      "railway": 158,
      "highway": 464,
      "road_quality": 89,
      "sea_port": 15,
      "airport": 11,
      "internet_coverage": 94,
      "tech_stack": 48,
      "water_access": 71
    },
    "sector_extraction": {
      "gold": 50,
      "uranium": 22,
      "coal": 197,
      "oil": 277,
      "gas": 752,
      "salt": 451,
      "nickel": 54,
      "lithium": 16,
      "aluminum": 16,
      "copper": 381,
      "rare_earth": 65,
      "iron_ore": 133,
      "strength": 45.40330012270782
    },
    "sector_manufacturing": {
      "semiconductor": 940,
      "car": 448,
      "motorcycle": 291,
      "smelter": 610,
      "concrete_cement": 446,
      "wood": 404,
      "mineral_water": 833,
      "sugar": 276,
      "bread": 108,
      "pharmacy": 133,
      "fertilizer": 73,
      "meat_processing": 155,
      "instant_noodle": 706,
      "strength": 51.25412515338478
    },
    "sector_livestock": {
      "chicken": 30,
      "poultry": 284,
      "dairy_cow": 108,
      "beef_cow": 588,
      "sheep_goat": 15,
      "shrimp": 401,
      "fish": 53,
      "shellfish": 7,
      "strength": 63.55247509203086
    },
    "sector_agriculture": {
      "rice": 128,
      "wheat": 344,
      "corn": 590,
      "tubers": 539,
      "soy": 361,
      "palm_oil": 113,
      "tea": 5,
      "coffee": 489,
      "cocoa": 117,
      "sugarcane": 424,
      "vegetables": 89,
      "strength": 41.40330012270782
    },
    "sector_defense": {
      "prison": 33,
      "barracks": 73,
      "armory": 33,
      "tank_hangar": 32,
      "military_academy": 4,
      "budget": 98,
      "personnel": 472958,
      "strength": 65.40330012270782,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 167,
          "apc": 1543,
          "artileri_berat": 123
        },
        "laut": {
          "kapal_induk": 1,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 3
        },
        "udara": {
          "jet_tempur_stealth": 60,
          "helikopter_serang": 157,
          "pesawat_pengintai": 23
        },
        "total_unit": 2563,
        "readiness": 92
      }
    },
    "sector_military_strategic": {
      "command_center": 4,
      "military_air_base": 8,
      "military_naval_base": 4,
      "arms_factory": 0,
      "nuclear_status": true,
      "space_program": 89,
      "cyber_defense": 80,
      "intelligence": 23,
      "strategic_operations": {
        "attack_mission": 5,
        "spy_mission": 15,
        "sabotage_mission": 3,
        "territory_management": 26,
        "nuclear_program": 33
      },
      "intel_radar": {
        "satellite_system": 7,
        "radar_network": 33,
        "cyber_ops": 76
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 311,
        "elementary_school": 687,
        "middle_school": 182,
        "high_school": 931,
        "university": 51,
        "education_institute": 149,
        "laboratory": 29,
        "observatory": 11,
        "research_center": 15,
        "development_center": 138,
        "literacy": 78,
        "research_index": 52
      },
      "health": {
        "large_hospital": 88,
        "small_hospital": 86,
        "diagnostic_center": 103,
        "hospital_beds": 47960,
        "life_expectancy": 66,
        "healthcare_index": 84
      },
      "sports": {
        "swimming_pool": 317,
        "racing_circuit": 9,
        "stadium": 51,
        "international_stadium": 0,
        "olympic_score": 40,
        "popularity": 4
      },
      "law": {
        "legal_aid_center": 40,
        "court": 149,
        "prosecution_office": 70,
        "police_station": 930,
        "police_car_fleet": 2532,
        "police_academy": 3,
        "corruption_index": 77,
        "security_index": 95,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2784,
            "sepeda_motor": 1184,
            "unit_k9": 104
          },
          "taktis_khusus": {
            "swat": 102,
            "helikopter_polisi": 7,
            "anti_huru_hara": 458
          },
          "pusat_komando": {
            "stasiun_polisi": 59,
            "kamera_surveillance": 33684,
            "pusat_forensik": 5
          },
          "response_time": 3,
          "public_trust": 50
        }
      }
    },
    "military": {
      "infantry": 75530,
      "tanks": 487,
      "aircraft": 230,
      "naval": 49,
      "air_base": 3,
      "naval_base": 2,
      "military_base": 8,
      "nuclear": true,
      "strength": 96
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 391,
      "sell_commodity": 502
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 99
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 68
      },
      "income": {
        "rate": 15,
        "satisfaction": 70
      },
      "customs": {
        "rate": 5,
        "satisfaction": 75
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 90
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 84,
      "commercial": 76,
      "industrial": 71
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [
        "Korea Utara",
        "Rusia"
      ],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 28,
        "hard_power": 26,
        "diplomatic_prestige": 62
      },
      "international_orgs": [
        {
          "name": "PBB (UN)",
          "role": "Leader"
        },
        {
          "name": "WHO",
          "role": "Member"
        },
        {
          "name": "WTO",
          "role": "Member"
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 81,
      "education": 89,
      "security": 66,
      "finance": 62,
      "environment": 69
    }
  },
  {
    "name_en": "Armenia",
    "capital": "Yerevan",
    "name_id": "Armenia",
    "lon": 45,
    "lat": 40,
    "flag": "🇦🇲",
    "pop": "81M",
    "budget": "Rp 1690 T",
    "income": "Rp 3491 T",
    "religion": "Islam",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 3,
      "hydro_plant": 2,
      "solar_plant": 24,
      "thermal_plant": 9,
      "gas_plant": 0,
      "wind_plant": 3,
      "power_grid": 72,
      "bicycle_path": 30,
      "subway": 7,
      "railway": 313,
      "highway": 427,
      "road_quality": 64,
      "sea_port": 16,
      "airport": 8,
      "internet_coverage": 95,
      "tech_stack": 46,
      "water_access": 91
    },
    "sector_extraction": {
      "gold": 1,
      "uranium": 21,
      "coal": 278,
      "oil": 514,
      "gas": 535,
      "salt": 188,
      "nickel": 96,
      "lithium": 3,
      "aluminum": 1,
      "copper": 478,
      "rare_earth": 12,
      "iron_ore": 564,
      "strength": 50.13754070461644
    },
    "sector_manufacturing": {
      "semiconductor": 718,
      "car": 369,
      "motorcycle": 284,
      "smelter": 188,
      "concrete_cement": 303,
      "wood": 259,
      "mineral_water": 326,
      "sugar": 95,
      "bread": 311,
      "pharmacy": 136,
      "fertilizer": 289,
      "meat_processing": 78,
      "instant_noodle": 539,
      "strength": 59.42192588077055
    },
    "sector_livestock": {
      "chicken": 513,
      "poultry": 592,
      "dairy_cow": 292,
      "beef_cow": 378,
      "sheep_goat": 302,
      "shrimp": 157,
      "fish": 512,
      "shellfish": 12,
      "strength": 54.85315552846233
    },
    "sector_agriculture": {
      "rice": 950,
      "wheat": 179,
      "corn": 670,
      "tubers": 138,
      "soy": 199,
      "palm_oil": 21,
      "tea": 191,
      "coffee": 133,
      "cocoa": 33,
      "sugarcane": 407,
      "vegetables": 562,
      "strength": 48.13754070461644
    },
    "sector_defense": {
      "prison": 52,
      "barracks": 203,
      "armory": 15,
      "tank_hangar": 12,
      "military_academy": 2,
      "budget": 119,
      "personnel": 183232,
      "strength": 48.13754070461644,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 304,
          "apc": 447,
          "artileri_berat": 153
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 13,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 10,
          "helikopter_serang": 112,
          "pesawat_pengintai": 6
        },
        "total_unit": 1995,
        "readiness": 88
      }
    },
    "sector_military_strategic": {
      "command_center": 4,
      "military_air_base": 4,
      "military_naval_base": 5,
      "arms_factory": 10,
      "nuclear_status": false,
      "space_program": 12,
      "cyber_defense": 15,
      "intelligence": 81,
      "strategic_operations": {
        "attack_mission": 3,
        "spy_mission": 9,
        "sabotage_mission": 5,
        "territory_management": 0,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 35,
        "cyber_ops": 21
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 652,
        "elementary_school": 845,
        "middle_school": 1047,
        "high_school": 497,
        "university": 14,
        "education_institute": 255,
        "laboratory": 109,
        "observatory": 41,
        "research_center": 82,
        "development_center": 122,
        "literacy": 73,
        "research_index": 41
      },
      "health": {
        "large_hospital": 13,
        "small_hospital": 193,
        "diagnostic_center": 131,
        "hospital_beds": 35507,
        "life_expectancy": 65,
        "healthcare_index": 62
      },
      "sports": {
        "swimming_pool": 57,
        "racing_circuit": 2,
        "stadium": 13,
        "international_stadium": 3,
        "olympic_score": 59,
        "popularity": 33
      },
      "law": {
        "legal_aid_center": 33,
        "court": 21,
        "prosecution_office": 17,
        "police_station": 190,
        "police_car_fleet": 1479,
        "police_academy": 10,
        "corruption_index": 25,
        "security_index": 95,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2836,
            "sepeda_motor": 667,
            "unit_k9": 97
          },
          "taktis_khusus": {
            "swat": 67,
            "helikopter_polisi": 36,
            "anti_huru_hara": 295
          },
          "pusat_komando": {
            "stasiun_polisi": 65,
            "kamera_surveillance": 7844,
            "pusat_forensik": 4
          },
          "response_time": 7,
          "public_trust": 78
        }
      }
    },
    "military": {
      "infantry": 20264,
      "tanks": 1509,
      "aircraft": 14,
      "naval": 85,
      "air_base": 1,
      "naval_base": 1,
      "military_base": 10,
      "nuclear": false,
      "strength": 55
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 264,
      "sell_commodity": 435
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 68
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 67
      },
      "income": {
        "rate": 15,
        "satisfaction": 53
      },
      "customs": {
        "rate": 5,
        "satisfaction": 74
      },
      "environment": {
        "rate": 1,
        "satisfaction": 89
      },
      "other": {
        "rate": 2,
        "satisfaction": 90
      }
    },
    "demand": {
      "satisfaction": 85,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 49,
      "commercial": 70,
      "industrial": 44
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [
        "Korea Utara",
        "Rusia"
      ],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 21,
        "hard_power": 30,
        "diplomatic_prestige": 44
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 73,
      "education": 73,
      "security": 85,
      "finance": 84,
      "environment": 72
    }
  },
  {
    "name_en": "Australia",
    "capital": "Canberra",
    "name_id": "Australia",
    "lon": 133,
    "lat": -27,
    "flag": "🇦🇺",
    "pop": "22M",
    "budget": "Rp 613 T",
    "income": "Rp 937 T",
    "religion": "Shinto",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 1,
      "power_grid": 92,
      "bicycle_path": 14,
      "subway": 0,
      "railway": 36,
      "highway": 88,
      "road_quality": 67,
      "sea_port": 1,
      "airport": 0,
      "internet_coverage": 65,
      "tech_stack": 66,
      "water_access": 71
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 19,
      "oil": 68,
      "gas": 37,
      "salt": 18,
      "nickel": 19,
      "lithium": 21,
      "aluminum": 14,
      "copper": 37,
      "rare_earth": 29,
      "iron_ore": 92,
      "strength": 22.18305665510217
    },
    "sector_manufacturing": {
      "semiconductor": 65,
      "car": 60,
      "motorcycle": 54,
      "smelter": 9,
      "concrete_cement": 13,
      "wood": 8,
      "mineral_water": 58,
      "sugar": 6,
      "bread": 7,
      "pharmacy": 1,
      "fertilizer": 14,
      "meat_processing": 11,
      "instant_noodle": 11,
      "strength": 8.978820818877715
    },
    "sector_livestock": {
      "chicken": 31,
      "poultry": 0,
      "dairy_cow": 39,
      "beef_cow": 10,
      "sheep_goat": 21,
      "shrimp": 29,
      "fish": 14,
      "shellfish": 12,
      "strength": 22.38729249132663
    },
    "sector_agriculture": {
      "rice": 67,
      "wheat": 47,
      "corn": 38,
      "tubers": 58,
      "soy": 35,
      "palm_oil": 34,
      "tea": 5,
      "coffee": 16,
      "cocoa": 29,
      "sugarcane": 31,
      "vegetables": 16,
      "strength": 24.18305665510217
    },
    "sector_defense": {
      "prison": 11,
      "barracks": 11,
      "armory": 2,
      "tank_hangar": 3,
      "military_academy": 1,
      "budget": 19,
      "personnel": 17436,
      "strength": 6.183056655102172,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 70,
          "apc": 209,
          "artileri_berat": 51
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 8,
          "helikopter_serang": 20,
          "pesawat_pengintai": 2
        },
        "total_unit": 515,
        "readiness": 98
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 0,
      "cyber_defense": 5,
      "intelligence": 7,
      "strategic_operations": {
        "attack_mission": 5,
        "spy_mission": 15,
        "sabotage_mission": 8,
        "territory_management": 5,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 4,
        "cyber_ops": 7
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 148,
        "elementary_school": 282,
        "middle_school": 158,
        "high_school": 153,
        "university": 15,
        "education_institute": 22,
        "laboratory": 7,
        "observatory": 3,
        "research_center": 9,
        "development_center": 16,
        "literacy": 83,
        "research_index": 0
      },
      "health": {
        "large_hospital": 5,
        "small_hospital": 40,
        "diagnostic_center": 20,
        "hospital_beds": 11862,
        "life_expectancy": 62,
        "healthcare_index": 70
      },
      "sports": {
        "swimming_pool": 37,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 2,
        "popularity": 60
      },
      "law": {
        "legal_aid_center": 22,
        "court": 16,
        "prosecution_office": 12,
        "police_station": 53,
        "police_car_fleet": 440,
        "police_academy": 3,
        "corruption_index": 18,
        "security_index": 20,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 507,
            "sepeda_motor": 212,
            "unit_k9": 29
          },
          "taktis_khusus": {
            "swat": 17,
            "helikopter_polisi": 8,
            "anti_huru_hara": 58
          },
          "pusat_komando": {
            "stasiun_polisi": 29,
            "kamera_surveillance": 8783,
            "pusat_forensik": 1
          },
          "response_time": 5,
          "public_trust": 68
        }
      }
    },
    "military": {
      "infantry": 64297,
      "tanks": 278,
      "aircraft": 25,
      "naval": 99,
      "air_base": 5,
      "naval_base": 1,
      "military_base": 9,
      "nuclear": false,
      "strength": 11
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 441,
      "sell_commodity": 487
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 92
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 74
      },
      "income": {
        "rate": 15,
        "satisfaction": 54
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 56,
      "top_demands": [
        "Bantuan Sembako",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 45,
      "commercial": 49,
      "industrial": 67
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 5,
        "diplomatic_prestige": 67
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 80,
      "education": 59,
      "security": 87,
      "finance": 77,
      "environment": 83
    }
  },
  {
    "name_en": "Austria",
    "capital": "Vienna",
    "name_id": "Austria",
    "lon": 13.33333333,
    "lat": 47.33333333,
    "flag": "🇦🇹",
    "pop": "42M",
    "budget": "Rp 737 T",
    "income": "Rp 881 T",
    "religion": "Yahudi",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 2,
      "solar_plant": 39,
      "thermal_plant": 8,
      "gas_plant": 4,
      "wind_plant": 11,
      "power_grid": 85,
      "bicycle_path": 266,
      "subway": 2,
      "railway": 275,
      "highway": 689,
      "road_quality": 50,
      "sea_port": 5,
      "airport": 0,
      "internet_coverage": 70,
      "tech_stack": 69,
      "water_access": 91
    },
    "sector_extraction": {
      "gold": 39,
      "uranium": 0,
      "coal": 499,
      "oil": 113,
      "gas": 76,
      "salt": 220,
      "nickel": 73,
      "lithium": 1,
      "aluminum": 0,
      "copper": 303,
      "rare_earth": 122,
      "iron_ore": 749,
      "strength": 46.148348128971605
    },
    "sector_manufacturing": {
      "semiconductor": 243,
      "car": 444,
      "motorcycle": 92,
      "smelter": 84,
      "concrete_cement": 66,
      "wood": 92,
      "mineral_water": 242,
      "sugar": 136,
      "bread": 227,
      "pharmacy": 122,
      "fertilizer": 133,
      "meat_processing": 266,
      "instant_noodle": 156,
      "strength": 49.435435161214514
    },
    "sector_livestock": {
      "chicken": 558,
      "poultry": 83,
      "dairy_cow": 24,
      "beef_cow": 189,
      "sheep_goat": 247,
      "shrimp": 240,
      "fish": 296,
      "shellfish": 136,
      "strength": 54.861261096728704
    },
    "sector_agriculture": {
      "rice": 640,
      "wheat": 294,
      "corn": 279,
      "tubers": 22,
      "soy": 136,
      "palm_oil": 11,
      "tea": 0,
      "coffee": 255,
      "cocoa": 81,
      "sugarcane": 50,
      "vegetables": 82,
      "strength": 59.148348128971605
    },
    "sector_defense": {
      "prison": 47,
      "barracks": 62,
      "armory": 21,
      "tank_hangar": 18,
      "military_academy": 2,
      "budget": 72,
      "personnel": 24767,
      "strength": 33.148348128971605,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 283,
          "apc": 277,
          "artileri_berat": 211
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 5,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 34,
          "helikopter_serang": 83,
          "pesawat_pengintai": 14
        },
        "total_unit": 1832,
        "readiness": 83
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 7,
      "military_naval_base": 5,
      "arms_factory": 3,
      "nuclear_status": false,
      "space_program": 42,
      "cyber_defense": 14,
      "intelligence": 42,
      "strategic_operations": {
        "attack_mission": 7,
        "spy_mission": 16,
        "sabotage_mission": 11,
        "territory_management": 68,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 4,
        "radar_network": 55,
        "cyber_ops": 30
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 260,
        "elementary_school": 328,
        "middle_school": 544,
        "high_school": 325,
        "university": 119,
        "education_institute": 127,
        "laboratory": 90,
        "observatory": 13,
        "research_center": 36,
        "development_center": 73,
        "literacy": 77,
        "research_index": 9
      },
      "health": {
        "large_hospital": 48,
        "small_hospital": 20,
        "diagnostic_center": 24,
        "hospital_beds": 41764,
        "life_expectancy": 66,
        "healthcare_index": 69
      },
      "sports": {
        "swimming_pool": 93,
        "racing_circuit": 2,
        "stadium": 3,
        "international_stadium": 1,
        "olympic_score": 10,
        "popularity": 70
      },
      "law": {
        "legal_aid_center": 82,
        "court": 23,
        "prosecution_office": 54,
        "police_station": 557,
        "police_car_fleet": 1153,
        "police_academy": 2,
        "corruption_index": 40,
        "security_index": 20,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1648,
            "sepeda_motor": 767,
            "unit_k9": 41
          },
          "taktis_khusus": {
            "swat": 50,
            "helikopter_polisi": 18,
            "anti_huru_hara": 404
          },
          "pusat_komando": {
            "stasiun_polisi": 85,
            "kamera_surveillance": 27072,
            "pusat_forensik": 2
          },
          "response_time": 2,
          "public_trust": 66
        }
      }
    },
    "military": {
      "infantry": 90959,
      "tanks": 1775,
      "aircraft": 403,
      "naval": 82,
      "air_base": 4,
      "naval_base": 2,
      "military_base": 11,
      "nuclear": false,
      "strength": 22
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 143,
      "sell_commodity": 318
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 60
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 65
      },
      "income": {
        "rate": 15,
        "satisfaction": 66
      },
      "customs": {
        "rate": 5,
        "satisfaction": 88
      },
      "environment": {
        "rate": 1,
        "satisfaction": 83
      },
      "other": {
        "rate": 2,
        "satisfaction": 90
      }
    },
    "demand": {
      "satisfaction": 83,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Subsidisi Listrik"
      ],
      "residential": 40,
      "commercial": 47,
      "industrial": 55
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 15,
        "hard_power": 32,
        "diplomatic_prestige": 54
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 60,
      "education": 79,
      "security": 82,
      "finance": 64,
      "environment": 79
    }
  },
  {
    "name_en": "Azerbaijan",
    "capital": "Baku",
    "name_id": "Azerbaijan",
    "lon": 47.5,
    "lat": 40.5,
    "flag": "🇦🇿",
    "pop": "48M",
    "budget": "Rp 585 T",
    "income": "Rp 232 T",
    "religion": "Katolik",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 4,
      "solar_plant": 11,
      "thermal_plant": 2,
      "gas_plant": 1,
      "wind_plant": 4,
      "power_grid": 87,
      "bicycle_path": 197,
      "subway": 2,
      "railway": 112,
      "highway": 359,
      "road_quality": 69,
      "sea_port": 1,
      "airport": 3,
      "internet_coverage": 62,
      "tech_stack": 86,
      "water_access": 92
    },
    "sector_extraction": {
      "gold": 16,
      "uranium": 0,
      "coal": 136,
      "oil": 507,
      "gas": 472,
      "salt": 86,
      "nickel": 52,
      "lithium": 3,
      "aluminum": 16,
      "copper": 137,
      "rare_earth": 119,
      "iron_ore": 200,
      "strength": 32.82824080662166
    },
    "sector_manufacturing": {
      "semiconductor": 363,
      "car": 29,
      "motorcycle": 24,
      "smelter": 396,
      "concrete_cement": 157,
      "wood": 220,
      "mineral_water": 587,
      "sugar": 210,
      "bread": 310,
      "pharmacy": 40,
      "fertilizer": 200,
      "meat_processing": 129,
      "instant_noodle": 44,
      "strength": 61.035301008277074
    },
    "sector_livestock": {
      "chicken": 600,
      "poultry": 441,
      "dairy_cow": 22,
      "beef_cow": 231,
      "sheep_goat": 242,
      "shrimp": 114,
      "fish": 358,
      "shellfish": 38,
      "strength": 56.62118060496624
    },
    "sector_agriculture": {
      "rice": 472,
      "wheat": 60,
      "corn": 342,
      "tubers": 172,
      "soy": 135,
      "palm_oil": 273,
      "tea": 195,
      "coffee": 250,
      "cocoa": 230,
      "sugarcane": 55,
      "vegetables": 191,
      "strength": 57.82824080662166
    },
    "sector_defense": {
      "prison": 64,
      "barracks": 104,
      "armory": 16,
      "tank_hangar": 8,
      "military_academy": 6,
      "budget": 127,
      "personnel": 10588,
      "strength": 50.82824080662166,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 171,
          "apc": 745,
          "artileri_berat": 104
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 7,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 12,
          "helikopter_serang": 22,
          "pesawat_pengintai": 6
        },
        "total_unit": 838,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 12,
      "military_naval_base": 2,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 28,
      "cyber_defense": 53,
      "intelligence": 4,
      "strategic_operations": {
        "attack_mission": 4,
        "spy_mission": 4,
        "sabotage_mission": 1,
        "territory_management": 13,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 55,
        "cyber_ops": 53
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 467,
        "elementary_school": 357,
        "middle_school": 995,
        "high_school": 693,
        "university": 123,
        "education_institute": 114,
        "laboratory": 60,
        "observatory": 2,
        "research_center": 26,
        "development_center": 24,
        "literacy": 83,
        "research_index": 2
      },
      "health": {
        "large_hospital": 12,
        "small_hospital": 95,
        "diagnostic_center": 81,
        "hospital_beds": 33985,
        "life_expectancy": 65,
        "healthcare_index": 76
      },
      "sports": {
        "swimming_pool": 248,
        "racing_circuit": 5,
        "stadium": 12,
        "international_stadium": 2,
        "olympic_score": 16,
        "popularity": 55
      },
      "law": {
        "legal_aid_center": 96,
        "court": 52,
        "prosecution_office": 37,
        "police_station": 323,
        "police_car_fleet": 816,
        "police_academy": 11,
        "corruption_index": 42,
        "security_index": 71,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 777,
            "sepeda_motor": 609,
            "unit_k9": 116
          },
          "taktis_khusus": {
            "swat": 21,
            "helikopter_polisi": 26,
            "anti_huru_hara": 322
          },
          "pusat_komando": {
            "stasiun_polisi": 82,
            "kamera_surveillance": 22762,
            "pusat_forensik": 3
          },
          "response_time": 9,
          "public_trust": 83
        }
      }
    },
    "military": {
      "infantry": 86427,
      "tanks": 234,
      "aircraft": 434,
      "naval": 90,
      "air_base": 3,
      "naval_base": 2,
      "military_base": 11,
      "nuclear": false,
      "strength": 16
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 534,
      "sell_commodity": 263
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 95
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 73
      },
      "income": {
        "rate": 15,
        "satisfaction": 75
      },
      "customs": {
        "rate": 5,
        "satisfaction": 78
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 73,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 68,
      "commercial": 56,
      "industrial": 49
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 29,
        "hard_power": 34,
        "diplomatic_prestige": 65
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 69,
      "education": 70,
      "security": 59,
      "finance": 73,
      "environment": 71
    }
  },
  {
    "name_en": "Bahamas",
    "capital": "Nassau",
    "name_id": "Bahama",
    "lon": -76,
    "lat": 24.25,
    "flag": "🇧🇸",
    "pop": "14M",
    "budget": "Rp 575 T",
    "income": "Rp 229 T",
    "religion": "Taoisme",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 1,
      "solar_plant": 23,
      "thermal_plant": 2,
      "gas_plant": 0,
      "wind_plant": 5,
      "power_grid": 71,
      "bicycle_path": 12,
      "subway": 3,
      "railway": 383,
      "highway": 529,
      "road_quality": 80,
      "sea_port": 5,
      "airport": 1,
      "internet_coverage": 97,
      "tech_stack": 68,
      "water_access": 93
    },
    "sector_extraction": {
      "gold": 52,
      "uranium": 0,
      "coal": 294,
      "oil": 89,
      "gas": 126,
      "salt": 76,
      "nickel": 255,
      "lithium": 19,
      "aluminum": 28,
      "copper": 249,
      "rare_earth": 1,
      "iron_ore": 117,
      "strength": 21.765583016002836
    },
    "sector_manufacturing": {
      "semiconductor": 518,
      "car": 135,
      "motorcycle": 308,
      "smelter": 91,
      "concrete_cement": 160,
      "wood": 82,
      "mineral_water": 37,
      "sugar": 196,
      "bread": 252,
      "pharmacy": 15,
      "fertilizer": 157,
      "meat_processing": 218,
      "instant_noodle": 58,
      "strength": 55.206978770003545
    },
    "sector_livestock": {
      "chicken": 331,
      "poultry": 419,
      "dairy_cow": 234,
      "beef_cow": 156,
      "sheep_goat": 142,
      "shrimp": 243,
      "fish": 157,
      "shellfish": 3,
      "strength": 33.32418726200213
    },
    "sector_agriculture": {
      "rice": 543,
      "wheat": 411,
      "corn": 335,
      "tubers": 280,
      "soy": 253,
      "palm_oil": 16,
      "tea": 118,
      "coffee": 55,
      "cocoa": 158,
      "sugarcane": 174,
      "vegetables": 386,
      "strength": 26.765583016002836
    },
    "sector_defense": {
      "prison": 44,
      "barracks": 50,
      "armory": 13,
      "tank_hangar": 4,
      "military_academy": 4,
      "budget": 5,
      "personnel": 58072,
      "strength": 33.765583016002836,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 62,
          "apc": 497,
          "artileri_berat": 105
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 12,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 13,
          "helikopter_serang": 47,
          "pesawat_pengintai": 6
        },
        "total_unit": 1477,
        "readiness": 95
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 3,
      "military_naval_base": 0,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 52,
      "cyber_defense": 10,
      "intelligence": 0,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 5,
        "sabotage_mission": 7,
        "territory_management": 33,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 5,
        "radar_network": 29,
        "cyber_ops": 9
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 157,
        "elementary_school": 1163,
        "middle_school": 286,
        "high_school": 283,
        "university": 114,
        "education_institute": 235,
        "laboratory": 154,
        "observatory": 6,
        "research_center": 33,
        "development_center": 21,
        "literacy": 89,
        "research_index": 50
      },
      "health": {
        "large_hospital": 11,
        "small_hospital": 36,
        "diagnostic_center": 42,
        "hospital_beds": 47223,
        "life_expectancy": 66,
        "healthcare_index": 50
      },
      "sports": {
        "swimming_pool": 82,
        "racing_circuit": 2,
        "stadium": 21,
        "international_stadium": 0,
        "olympic_score": 52,
        "popularity": 53
      },
      "law": {
        "legal_aid_center": 26,
        "court": 31,
        "prosecution_office": 45,
        "police_station": 577,
        "police_car_fleet": 2356,
        "police_academy": 3,
        "corruption_index": 24,
        "security_index": 69,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1198,
            "sepeda_motor": 923,
            "unit_k9": 102
          },
          "taktis_khusus": {
            "swat": 35,
            "helikopter_polisi": 17,
            "anti_huru_hara": 82
          },
          "pusat_komando": {
            "stasiun_polisi": 66,
            "kamera_surveillance": 20723,
            "pusat_forensik": 1
          },
          "response_time": 7,
          "public_trust": 83
        }
      }
    },
    "military": {
      "infantry": 57929,
      "tanks": 1267,
      "aircraft": 19,
      "naval": 7,
      "air_base": 2,
      "naval_base": 2,
      "military_base": 11,
      "nuclear": false,
      "strength": 14
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 481,
      "sell_commodity": 255
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 96
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 64
      },
      "income": {
        "rate": 15,
        "satisfaction": 81
      },
      "customs": {
        "rate": 5,
        "satisfaction": 86
      },
      "environment": {
        "rate": 1,
        "satisfaction": 89
      },
      "other": {
        "rate": 2,
        "satisfaction": 90
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 40,
      "commercial": 67,
      "industrial": 68
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 18,
        "hard_power": 28,
        "diplomatic_prestige": 47
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 66,
      "education": 84,
      "security": 68,
      "finance": 67,
      "environment": 67
    }
  },
  {
    "name_en": "Bahrain",
    "capital": "Manama",
    "name_id": "Bahrain",
    "lon": 50.55,
    "lat": 26,
    "flag": "🇧🇭",
    "pop": "38M",
    "budget": "Rp 630 T",
    "income": "Rp 736 T",
    "religion": "Hindu",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 3,
      "solar_plant": 37,
      "thermal_plant": 3,
      "gas_plant": 3,
      "wind_plant": 6,
      "power_grid": 86,
      "bicycle_path": 198,
      "subway": 2,
      "railway": 233,
      "highway": 111,
      "road_quality": 66,
      "sea_port": 7,
      "airport": 1,
      "internet_coverage": 97,
      "tech_stack": 63,
      "water_access": 99
    },
    "sector_extraction": {
      "gold": 17,
      "uranium": 0,
      "coal": 261,
      "oil": 369,
      "gas": 353,
      "salt": 108,
      "nickel": 95,
      "lithium": 1,
      "aluminum": 13,
      "copper": 33,
      "rare_earth": 13,
      "iron_ore": 229,
      "strength": 45.97759532467648
    },
    "sector_manufacturing": {
      "semiconductor": 351,
      "car": 17,
      "motorcycle": 403,
      "smelter": 113,
      "concrete_cement": 22,
      "wood": 261,
      "mineral_water": 89,
      "sugar": 145,
      "bread": 64,
      "pharmacy": 136,
      "fertilizer": 173,
      "meat_processing": 80,
      "instant_noodle": 74,
      "strength": 59.22199415584559
    },
    "sector_livestock": {
      "chicken": 409,
      "poultry": 115,
      "dairy_cow": 229,
      "beef_cow": 102,
      "sheep_goat": 78,
      "shrimp": 48,
      "fish": 156,
      "shellfish": 25,
      "strength": 20.733196493507357
    },
    "sector_agriculture": {
      "rice": 249,
      "wheat": 368,
      "corn": 220,
      "tubers": 354,
      "soy": 134,
      "palm_oil": 326,
      "tea": 50,
      "coffee": 53,
      "cocoa": 14,
      "sugarcane": 230,
      "vegetables": 225,
      "strength": 43.97759532467648
    },
    "sector_defense": {
      "prison": 54,
      "barracks": 132,
      "armory": 3,
      "tank_hangar": 9,
      "military_academy": 1,
      "budget": 14,
      "personnel": 236341,
      "strength": 31.97759532467648,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 111,
          "apc": 835,
          "artileri_berat": 166
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 9,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 19,
          "helikopter_serang": 26,
          "pesawat_pengintai": 3
        },
        "total_unit": 1106,
        "readiness": 85
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 11,
      "military_naval_base": 3,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 2,
      "cyber_defense": 11,
      "intelligence": 33,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 12,
        "sabotage_mission": 2,
        "territory_management": 18,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 44,
        "cyber_ops": 10
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 232,
        "elementary_school": 508,
        "middle_school": 901,
        "high_school": 466,
        "university": 101,
        "education_institute": 170,
        "laboratory": 42,
        "observatory": 8,
        "research_center": 22,
        "development_center": 80,
        "literacy": 76,
        "research_index": 9
      },
      "health": {
        "large_hospital": 52,
        "small_hospital": 220,
        "diagnostic_center": 28,
        "hospital_beds": 11916,
        "life_expectancy": 66,
        "healthcare_index": 67
      },
      "sports": {
        "swimming_pool": 43,
        "racing_circuit": 4,
        "stadium": 7,
        "international_stadium": 2,
        "olympic_score": 39,
        "popularity": 31
      },
      "law": {
        "legal_aid_center": 110,
        "court": 25,
        "prosecution_office": 12,
        "police_station": 528,
        "police_car_fleet": 2519,
        "police_academy": 10,
        "corruption_index": 29,
        "security_index": 16,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 913,
            "sepeda_motor": 614,
            "unit_k9": 48
          },
          "taktis_khusus": {
            "swat": 19,
            "helikopter_polisi": 21,
            "anti_huru_hara": 113
          },
          "pusat_komando": {
            "stasiun_polisi": 74,
            "kamera_surveillance": 26847,
            "pusat_forensik": 3
          },
          "response_time": 8,
          "public_trust": 72
        }
      }
    },
    "military": {
      "infantry": 65675,
      "tanks": 1546,
      "aircraft": 464,
      "naval": 10,
      "air_base": 2,
      "naval_base": 2,
      "military_base": 9,
      "nuclear": false,
      "strength": 16
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 474,
      "sell_commodity": 651
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 82
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 79
      },
      "income": {
        "rate": 15,
        "satisfaction": 62
      },
      "customs": {
        "rate": 5,
        "satisfaction": 73
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 86
      }
    },
    "demand": {
      "satisfaction": 81,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 60,
      "commercial": 42,
      "industrial": 43
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 30,
        "hard_power": 7,
        "diplomatic_prestige": 42
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 59,
      "education": 60,
      "security": 60,
      "finance": 85,
      "environment": 69
    }
  },
  {
    "name_en": "Bangladesh",
    "capital": "Dhaka",
    "name_id": "Bangladesh",
    "lon": 90,
    "lat": 24,
    "flag": "🇧🇩",
    "pop": "16M",
    "budget": "Rp 776 T",
    "income": "Rp 771 T",
    "religion": "Ateisme",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 2,
      "solar_plant": 49,
      "thermal_plant": 4,
      "gas_plant": 4,
      "wind_plant": 12,
      "power_grid": 90,
      "bicycle_path": 143,
      "subway": 0,
      "railway": 64,
      "highway": 56,
      "road_quality": 62,
      "sea_port": 12,
      "airport": 6,
      "internet_coverage": 90,
      "tech_stack": 68,
      "water_access": 78
    },
    "sector_extraction": {
      "gold": 33,
      "uranium": 0,
      "coal": 467,
      "oil": 530,
      "gas": 324,
      "salt": 94,
      "nickel": 230,
      "lithium": 30,
      "aluminum": 5,
      "copper": 181,
      "rare_earth": 114,
      "iron_ore": 654,
      "strength": 27.020437386505026
    },
    "sector_manufacturing": {
      "semiconductor": 89,
      "car": 288,
      "motorcycle": 144,
      "smelter": 385,
      "concrete_cement": 327,
      "wood": 307,
      "mineral_water": 49,
      "sugar": 5,
      "bread": 100,
      "pharmacy": 187,
      "fertilizer": 32,
      "meat_processing": 17,
      "instant_noodle": 519,
      "strength": 39.525546733131286
    },
    "sector_livestock": {
      "chicken": 78,
      "poultry": 477,
      "dairy_cow": 204,
      "beef_cow": 110,
      "sheep_goat": 64,
      "shrimp": 213,
      "fish": 392,
      "shellfish": 50,
      "strength": 20.51532803987877
    },
    "sector_agriculture": {
      "rice": 382,
      "wheat": 587,
      "corn": 10,
      "tubers": 27,
      "soy": 76,
      "palm_oil": 298,
      "tea": 210,
      "coffee": 167,
      "cocoa": 150,
      "sugarcane": 370,
      "vegetables": 510,
      "strength": 33.02043738650502
    },
    "sector_defense": {
      "prison": 59,
      "barracks": 146,
      "armory": 14,
      "tank_hangar": 10,
      "military_academy": 5,
      "budget": 74,
      "personnel": 51659,
      "strength": 42.02043738650502,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 124,
          "apc": 1019,
          "artileri_berat": 202
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 6,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 18,
          "helikopter_serang": 23,
          "pesawat_pengintai": 13
        },
        "total_unit": 1109,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 3,
      "military_air_base": 9,
      "military_naval_base": 0,
      "arms_factory": 4,
      "nuclear_status": false,
      "space_program": 42,
      "cyber_defense": 42,
      "intelligence": 54,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 15,
        "sabotage_mission": 12,
        "territory_management": 21,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 11,
        "cyber_ops": 0
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 112,
        "elementary_school": 836,
        "middle_school": 1064,
        "high_school": 125,
        "university": 82,
        "education_institute": 156,
        "laboratory": 164,
        "observatory": 24,
        "research_center": 18,
        "development_center": 8,
        "literacy": 78,
        "research_index": 14
      },
      "health": {
        "large_hospital": 23,
        "small_hospital": 295,
        "diagnostic_center": 130,
        "hospital_beds": 62520,
        "life_expectancy": 63,
        "healthcare_index": 81
      },
      "sports": {
        "swimming_pool": 28,
        "racing_circuit": 4,
        "stadium": 33,
        "international_stadium": 0,
        "olympic_score": 28,
        "popularity": 74
      },
      "law": {
        "legal_aid_center": 159,
        "court": 77,
        "prosecution_office": 12,
        "police_station": 493,
        "police_car_fleet": 3065,
        "police_academy": 14,
        "corruption_index": 82,
        "security_index": 54,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1839,
            "sepeda_motor": 955,
            "unit_k9": 56
          },
          "taktis_khusus": {
            "swat": 15,
            "helikopter_polisi": 23,
            "anti_huru_hara": 127
          },
          "pusat_komando": {
            "stasiun_polisi": 55,
            "kamera_surveillance": 28287,
            "pusat_forensik": 1
          },
          "response_time": 7,
          "public_trust": 63
        }
      }
    },
    "military": {
      "infantry": 57011,
      "tanks": 1313,
      "aircraft": 427,
      "naval": 27,
      "air_base": 4,
      "naval_base": 2,
      "military_base": 11,
      "nuclear": false,
      "strength": 32
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 528,
      "sell_commodity": 88
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 78
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 57
      },
      "income": {
        "rate": 15,
        "satisfaction": 74
      },
      "customs": {
        "rate": 5,
        "satisfaction": 89
      },
      "environment": {
        "rate": 1,
        "satisfaction": 88
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 74,
      "top_demands": [
        "Bantuan Sembako",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 83,
      "commercial": 52,
      "industrial": 56
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 25,
        "hard_power": 23,
        "diplomatic_prestige": 64
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 80,
      "education": 51,
      "security": 61,
      "finance": 72,
      "environment": 51
    }
  },
  {
    "name_en": "Barbados",
    "capital": "Bridgetown",
    "name_id": "Barbados",
    "lon": -59.53333333,
    "lat": 13.16666666,
    "flag": "🇧🇧",
    "pop": "11M",
    "budget": "Rp 673 T",
    "income": "Rp 872 T",
    "religion": "Taoisme",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 3,
      "solar_plant": 6,
      "thermal_plant": 5,
      "gas_plant": 3,
      "wind_plant": 1,
      "power_grid": 92,
      "bicycle_path": 25,
      "subway": 0,
      "railway": 121,
      "highway": 229,
      "road_quality": 68,
      "sea_port": 6,
      "airport": 1,
      "internet_coverage": 71,
      "tech_stack": 68,
      "water_access": 70
    },
    "sector_extraction": {
      "gold": 5,
      "uranium": 0,
      "coal": 45,
      "oil": 211,
      "gas": 88,
      "salt": 20,
      "nickel": 156,
      "lithium": 19,
      "aluminum": 9,
      "copper": 256,
      "rare_earth": 8,
      "iron_ore": 352,
      "strength": 44.18953225666627
    },
    "sector_manufacturing": {
      "semiconductor": 329,
      "car": 299,
      "motorcycle": 302,
      "smelter": 90,
      "concrete_cement": 79,
      "wood": 68,
      "mineral_water": 257,
      "sugar": 134,
      "bread": 131,
      "pharmacy": 92,
      "fertilizer": 78,
      "meat_processing": 193,
      "instant_noodle": 32,
      "strength": 42.236915320832836
    },
    "sector_livestock": {
      "chicken": 249,
      "poultry": 184,
      "dairy_cow": 188,
      "beef_cow": 149,
      "sheep_goat": 97,
      "shrimp": 56,
      "fish": 184,
      "shellfish": 7,
      "strength": 23.1421491924997
    },
    "sector_agriculture": {
      "rice": 106,
      "wheat": 181,
      "corn": 344,
      "tubers": 68,
      "soy": 208,
      "palm_oil": 234,
      "tea": 38,
      "coffee": 18,
      "cocoa": 83,
      "sugarcane": 4,
      "vegetables": 256,
      "strength": 17.18953225666627
    },
    "sector_defense": {
      "prison": 22,
      "barracks": 93,
      "armory": 4,
      "tank_hangar": 9,
      "military_academy": 2,
      "budget": 29,
      "personnel": 122338,
      "strength": 44.18953225666627,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 119,
          "apc": 638,
          "artileri_berat": 85
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 4,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 7,
          "helikopter_serang": 46,
          "pesawat_pengintai": 6
        },
        "total_unit": 1319,
        "readiness": 85
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 6,
      "military_naval_base": 2,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 8,
      "cyber_defense": 21,
      "intelligence": 2,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 9,
        "sabotage_mission": 7,
        "territory_management": 71,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 30,
        "cyber_ops": 16
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 410,
        "elementary_school": 486,
        "middle_school": 661,
        "high_school": 120,
        "university": 32,
        "education_institute": 52,
        "laboratory": 117,
        "observatory": 3,
        "research_center": 5,
        "development_center": 18,
        "literacy": 93,
        "research_index": 16
      },
      "health": {
        "large_hospital": 40,
        "small_hospital": 73,
        "diagnostic_center": 47,
        "hospital_beds": 21300,
        "life_expectancy": 69,
        "healthcare_index": 70
      },
      "sports": {
        "swimming_pool": 82,
        "racing_circuit": 0,
        "stadium": 14,
        "international_stadium": 1,
        "olympic_score": 35,
        "popularity": 57
      },
      "law": {
        "legal_aid_center": 16,
        "court": 7,
        "prosecution_office": 23,
        "police_station": 269,
        "police_car_fleet": 729,
        "police_academy": 2,
        "corruption_index": 95,
        "security_index": 76,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1206,
            "sepeda_motor": 413,
            "unit_k9": 24
          },
          "taktis_khusus": {
            "swat": 24,
            "helikopter_polisi": 10,
            "anti_huru_hara": 117
          },
          "pusat_komando": {
            "stasiun_polisi": 30,
            "kamera_surveillance": 19524,
            "pusat_forensik": 3
          },
          "response_time": 4,
          "public_trust": 70
        }
      }
    },
    "military": {
      "infantry": 70616,
      "tanks": 340,
      "aircraft": 106,
      "naval": 87,
      "air_base": 3,
      "naval_base": 0,
      "military_base": 7,
      "nuclear": false,
      "strength": 19
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 93,
      "sell_commodity": 498
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 63
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 55
      },
      "income": {
        "rate": 15,
        "satisfaction": 66
      },
      "customs": {
        "rate": 5,
        "satisfaction": 72
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 92
      }
    },
    "demand": {
      "satisfaction": 56,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 56,
      "commercial": 87,
      "industrial": 72
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 12,
        "hard_power": 9,
        "diplomatic_prestige": 48
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 51,
      "education": 73,
      "security": 69,
      "finance": 85,
      "environment": 64
    }
  },
  {
    "name_en": "Netherlands",
    "capital": "Amsterdam",
    "name_id": "Belanda",
    "lon": 5.75,
    "lat": 52.5,
    "flag": "🇳🇱",
    "pop": "34M",
    "budget": "Rp 546 T",
    "income": "Rp 282 T",
    "religion": "Protestan",
    "ideology": "Komunisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 72,
      "bicycle_path": 4,
      "subway": 0,
      "railway": 7,
      "highway": 8,
      "road_quality": 83,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 80,
      "tech_stack": 76,
      "water_access": 72
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 8,
      "oil": 5,
      "gas": 6,
      "salt": 4,
      "nickel": 0,
      "lithium": 7,
      "aluminum": 6,
      "copper": 7,
      "rare_earth": 1,
      "iron_ore": 7,
      "strength": 35.47711725348612
    },
    "sector_manufacturing": {
      "semiconductor": 0,
      "car": 2,
      "motorcycle": 3,
      "smelter": 7,
      "concrete_cement": 5,
      "wood": 4,
      "mineral_water": 8,
      "sugar": 1,
      "bread": 2,
      "pharmacy": 1,
      "fertilizer": 4,
      "meat_processing": 5,
      "instant_noodle": 7,
      "strength": 15.59639656685765
    },
    "sector_livestock": {
      "chicken": 5,
      "poultry": 0,
      "dairy_cow": 3,
      "beef_cow": 4,
      "sheep_goat": 4,
      "shrimp": 3,
      "fish": 5,
      "shellfish": 2,
      "strength": 28.35783794011459
    },
    "sector_agriculture": {
      "rice": 5,
      "wheat": 3,
      "corn": 3,
      "tubers": 8,
      "soy": 5,
      "palm_oil": 1,
      "tea": 0,
      "coffee": 0,
      "cocoa": 0,
      "sugarcane": 4,
      "vegetables": 6,
      "strength": 39.47711725348612
    },
    "sector_defense": {
      "prison": 5,
      "barracks": 12,
      "armory": 2,
      "tank_hangar": 1,
      "military_academy": 1,
      "budget": 5,
      "personnel": 14642,
      "strength": 36.47711725348612,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 52,
          "apc": 110,
          "artileri_berat": 23
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 11,
          "pesawat_pengintai": 2
        },
        "total_unit": 514,
        "readiness": 82
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 0,
      "cyber_defense": 0,
      "intelligence": 0,
      "strategic_operations": {
        "attack_mission": 5,
        "spy_mission": 19,
        "sabotage_mission": 12,
        "territory_management": 14,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 0,
        "cyber_ops": 0
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 102,
        "elementary_school": 218,
        "middle_school": 158,
        "high_school": 107,
        "university": 11,
        "education_institute": 24,
        "laboratory": 7,
        "observatory": 0,
        "research_center": 2,
        "development_center": 5,
        "literacy": 86,
        "research_index": 0
      },
      "health": {
        "large_hospital": 5,
        "small_hospital": 21,
        "diagnostic_center": 10,
        "hospital_beds": 6067,
        "life_expectancy": 78,
        "healthcare_index": 64
      },
      "sports": {
        "swimming_pool": 24,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 0,
        "popularity": 3
      },
      "law": {
        "legal_aid_center": 13,
        "court": 5,
        "prosecution_office": 5,
        "police_station": 51,
        "police_car_fleet": 247,
        "police_academy": 2,
        "corruption_index": 72,
        "security_index": 37,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 531,
            "sepeda_motor": 214,
            "unit_k9": 21
          },
          "taktis_khusus": {
            "swat": 10,
            "helikopter_polisi": 5,
            "anti_huru_hara": 51
          },
          "pusat_komando": {
            "stasiun_polisi": 21,
            "kamera_surveillance": 5539,
            "pusat_forensik": 1
          },
          "response_time": 2,
          "public_trust": 65
        }
      }
    },
    "military": {
      "infantry": 85363,
      "tanks": 1493,
      "aircraft": 375,
      "naval": 79,
      "air_base": 2,
      "naval_base": 2,
      "military_base": 6,
      "nuclear": false,
      "strength": 31
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 499,
      "sell_commodity": 517
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 89
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 55
      },
      "income": {
        "rate": 15,
        "satisfaction": 52
      },
      "customs": {
        "rate": 5,
        "satisfaction": 72
      },
      "environment": {
        "rate": 1,
        "satisfaction": 89
      },
      "other": {
        "rate": 2,
        "satisfaction": 94
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 58,
      "commercial": 87,
      "industrial": 68
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 5,
        "diplomatic_prestige": 46
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 88,
      "education": 86,
      "security": 63,
      "finance": 63,
      "environment": 61
    }
  },
  {
    "name_en": "Belarus",
    "capital": "Minsk",
    "name_id": "Belarus",
    "lon": 28,
    "lat": 53,
    "flag": "🇧🇾",
    "pop": "35M",
    "budget": "Rp 660 T",
    "income": "Rp 706 T",
    "religion": "Katolik",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 3,
      "solar_plant": 14,
      "thermal_plant": 0,
      "gas_plant": 1,
      "wind_plant": 7,
      "power_grid": 71,
      "bicycle_path": 87,
      "subway": 1,
      "railway": 283,
      "highway": 348,
      "road_quality": 75,
      "sea_port": 2,
      "airport": 0,
      "internet_coverage": 68,
      "tech_stack": 44,
      "water_access": 76
    },
    "sector_extraction": {
      "gold": 16,
      "uranium": 0,
      "coal": 64,
      "oil": 269,
      "gas": 268,
      "salt": 57,
      "nickel": 132,
      "lithium": 23,
      "aluminum": 3,
      "copper": 283,
      "rare_earth": 142,
      "iron_ore": 87,
      "strength": 35.34588249795908
    },
    "sector_manufacturing": {
      "semiconductor": 370,
      "car": 26,
      "motorcycle": 177,
      "smelter": 290,
      "concrete_cement": 103,
      "wood": 24,
      "mineral_water": 6,
      "sugar": 71,
      "bread": 149,
      "pharmacy": 59,
      "fertilizer": 91,
      "meat_processing": 43,
      "instant_noodle": 225,
      "strength": 32.93235312244886
    },
    "sector_livestock": {
      "chicken": 433,
      "poultry": 110,
      "dairy_cow": 114,
      "beef_cow": 83,
      "sheep_goat": 135,
      "shrimp": 12,
      "fish": 159,
      "shellfish": 101,
      "strength": 45.75941187346932
    },
    "sector_agriculture": {
      "rice": 339,
      "wheat": 330,
      "corn": 2,
      "tubers": 345,
      "soy": 254,
      "palm_oil": 226,
      "tea": 135,
      "coffee": 144,
      "cocoa": 10,
      "sugarcane": 181,
      "vegetables": 171,
      "strength": 56.34588249795908
    },
    "sector_defense": {
      "prison": 21,
      "barracks": 54,
      "armory": 7,
      "tank_hangar": 4,
      "military_academy": 1,
      "budget": 21,
      "personnel": 113552,
      "strength": 42.34588249795908,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 73,
          "apc": 481,
          "artileri_berat": 125
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 9,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 23,
          "helikopter_serang": 53,
          "pesawat_pengintai": 8
        },
        "total_unit": 791,
        "readiness": 93
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 7,
      "military_naval_base": 2,
      "arms_factory": 2,
      "nuclear_status": false,
      "space_program": 38,
      "cyber_defense": 44,
      "intelligence": 18,
      "strategic_operations": {
        "attack_mission": 9,
        "spy_mission": 15,
        "sabotage_mission": 11,
        "territory_management": 12,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 3,
        "cyber_ops": 3
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 381,
        "elementary_school": 322,
        "middle_school": 423,
        "high_school": 346,
        "university": 85,
        "education_institute": 32,
        "laboratory": 121,
        "observatory": 13,
        "research_center": 45,
        "development_center": 51,
        "literacy": 70,
        "research_index": 8
      },
      "health": {
        "large_hospital": 35,
        "small_hospital": 79,
        "diagnostic_center": 68,
        "hospital_beds": 40313,
        "life_expectancy": 78,
        "healthcare_index": 60
      },
      "sports": {
        "swimming_pool": 186,
        "racing_circuit": 2,
        "stadium": 19,
        "international_stadium": 0,
        "olympic_score": 42,
        "popularity": 17
      },
      "law": {
        "legal_aid_center": 97,
        "court": 25,
        "prosecution_office": 16,
        "police_station": 485,
        "police_car_fleet": 668,
        "police_academy": 2,
        "corruption_index": 5,
        "security_index": 71,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1299,
            "sepeda_motor": 630,
            "unit_k9": 82
          },
          "taktis_khusus": {
            "swat": 24,
            "helikopter_polisi": 20,
            "anti_huru_hara": 101
          },
          "pusat_komando": {
            "stasiun_polisi": 64,
            "kamera_surveillance": 17294,
            "pusat_forensik": 2
          },
          "response_time": 10,
          "public_trust": 53
        }
      }
    },
    "military": {
      "infantry": 95530,
      "tanks": 677,
      "aircraft": 58,
      "naval": 14,
      "air_base": 3,
      "naval_base": 2,
      "military_base": 8,
      "nuclear": false,
      "strength": 20
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 362,
      "sell_commodity": 195
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 81
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 68
      },
      "income": {
        "rate": 15,
        "satisfaction": 51
      },
      "customs": {
        "rate": 5,
        "satisfaction": 72
      },
      "environment": {
        "rate": 1,
        "satisfaction": 81
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 53,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 47,
      "commercial": 65,
      "industrial": 57
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 17,
        "hard_power": 24,
        "diplomatic_prestige": 42
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 87,
      "education": 76,
      "security": 57,
      "finance": 75,
      "environment": 76
    }
  },
  {
    "name_en": "Belgium",
    "capital": "Brussels",
    "name_id": "Belgia",
    "lon": 4,
    "lat": 50.83333333,
    "flag": "🇧🇪",
    "pop": "6M",
    "budget": "Rp 453 T",
    "income": "Rp 616 T",
    "religion": "Yahudi",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 2,
      "solar_plant": 16,
      "thermal_plant": 2,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 87,
      "bicycle_path": 83,
      "subway": 1,
      "railway": 29,
      "highway": 148,
      "road_quality": 58,
      "sea_port": 0,
      "airport": 2,
      "internet_coverage": 96,
      "tech_stack": 73,
      "water_access": 70
    },
    "sector_extraction": {
      "gold": 18,
      "uranium": 0,
      "coal": 90,
      "oil": 127,
      "gas": 63,
      "salt": 14,
      "nickel": 100,
      "lithium": 3,
      "aluminum": 3,
      "copper": 142,
      "rare_earth": 54,
      "iron_ore": 65,
      "strength": 35.291326746026265
    },
    "sector_manufacturing": {
      "semiconductor": 181,
      "car": 139,
      "motorcycle": 169,
      "smelter": 144,
      "concrete_cement": 61,
      "wood": 7,
      "mineral_water": 12,
      "sugar": 40,
      "bread": 20,
      "pharmacy": 17,
      "fertilizer": 13,
      "meat_processing": 88,
      "instant_noodle": 101,
      "strength": 30.364158432532832
    },
    "sector_livestock": {
      "chicken": 35,
      "poultry": 134,
      "dairy_cow": 59,
      "beef_cow": 43,
      "sheep_goat": 56,
      "shrimp": 67,
      "fish": 26,
      "shellfish": 25,
      "strength": 9.2184950595197
    },
    "sector_agriculture": {
      "rice": 103,
      "wheat": 165,
      "corn": 31,
      "tubers": 22,
      "soy": 71,
      "palm_oil": 45,
      "tea": 27,
      "coffee": 87,
      "cocoa": 4,
      "sugarcane": 44,
      "vegetables": 7,
      "strength": 19.291326746026265
    },
    "sector_defense": {
      "prison": 16,
      "barracks": 25,
      "armory": 6,
      "tank_hangar": 8,
      "military_academy": 1,
      "budget": 28,
      "personnel": 106239,
      "strength": 8.291326746026266,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 50,
          "apc": 272,
          "artileri_berat": 22
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 9,
          "helikopter_serang": 11,
          "pesawat_pengintai": 2
        },
        "total_unit": 869,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 4,
      "military_naval_base": 1,
      "arms_factory": 2,
      "nuclear_status": false,
      "space_program": 12,
      "cyber_defense": 19,
      "intelligence": 16,
      "strategic_operations": {
        "attack_mission": 2,
        "spy_mission": 11,
        "sabotage_mission": 2,
        "territory_management": 74,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 2,
        "radar_network": 14,
        "cyber_ops": 12
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 278,
        "elementary_school": 466,
        "middle_school": 247,
        "high_school": 255,
        "university": 32,
        "education_institute": 66,
        "laboratory": 55,
        "observatory": 2,
        "research_center": 10,
        "development_center": 11,
        "literacy": 88,
        "research_index": 4
      },
      "health": {
        "large_hospital": 5,
        "small_hospital": 96,
        "diagnostic_center": 20,
        "hospital_beds": 10977,
        "life_expectancy": 72,
        "healthcare_index": 54
      },
      "sports": {
        "swimming_pool": 38,
        "racing_circuit": 0,
        "stadium": 5,
        "international_stadium": 0,
        "olympic_score": 20,
        "popularity": 60
      },
      "law": {
        "legal_aid_center": 48,
        "court": 33,
        "prosecution_office": 20,
        "police_station": 73,
        "police_car_fleet": 421,
        "police_academy": 4,
        "corruption_index": 52,
        "security_index": 82,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 776,
            "sepeda_motor": 385,
            "unit_k9": 25
          },
          "taktis_khusus": {
            "swat": 18,
            "helikopter_polisi": 7,
            "anti_huru_hara": 161
          },
          "pusat_komando": {
            "stasiun_polisi": 30,
            "kamera_surveillance": 11197,
            "pusat_forensik": 1
          },
          "response_time": 4,
          "public_trust": 88
        }
      }
    },
    "military": {
      "infantry": 63767,
      "tanks": 1579,
      "aircraft": 483,
      "naval": 0,
      "air_base": 4,
      "naval_base": 2,
      "military_base": 11,
      "nuclear": false,
      "strength": 27
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 129,
      "sell_commodity": 311
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 78
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 53
      },
      "income": {
        "rate": 15,
        "satisfaction": 76
      },
      "customs": {
        "rate": 5,
        "satisfaction": 81
      },
      "environment": {
        "rate": 1,
        "satisfaction": 81
      },
      "other": {
        "rate": 2,
        "satisfaction": 86
      }
    },
    "demand": {
      "satisfaction": 75,
      "top_demands": [
        "Bantuan Sembako",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 45,
      "commercial": 75,
      "industrial": 83
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 11,
        "hard_power": 10,
        "diplomatic_prestige": 53
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 67,
      "education": 51,
      "security": 64,
      "finance": 51,
      "environment": 84
    }
  },
  {
    "name_en": "Belize",
    "capital": "Belmopan",
    "name_id": "Belize",
    "lon": -88.75,
    "lat": 17.25,
    "flag": "🇧🇿",
    "pop": "22M",
    "budget": "Rp 407 T",
    "income": "Rp 193 T",
    "religion": "Islam",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 87,
      "bicycle_path": 2,
      "subway": 0,
      "railway": 8,
      "highway": 3,
      "road_quality": 88,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 64,
      "tech_stack": 58,
      "water_access": 81
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 0,
      "oil": 9,
      "gas": 1,
      "salt": 0,
      "nickel": 5,
      "lithium": 1,
      "aluminum": 2,
      "copper": 8,
      "rare_earth": 3,
      "iron_ore": 3,
      "strength": 35.50267148707385
    },
    "sector_manufacturing": {
      "semiconductor": 1,
      "car": 6,
      "motorcycle": 5,
      "smelter": 1,
      "concrete_cement": 5,
      "wood": 3,
      "mineral_water": 8,
      "sugar": 2,
      "bread": 6,
      "pharmacy": 0,
      "fertilizer": 0,
      "meat_processing": 2,
      "instant_noodle": 3,
      "strength": 16.62833935884231
    },
    "sector_livestock": {
      "chicken": 11,
      "poultry": 9,
      "dairy_cow": 1,
      "beef_cow": 3,
      "sheep_goat": 0,
      "shrimp": 2,
      "fish": 8,
      "shellfish": 3,
      "strength": 39.377003615305384
    },
    "sector_agriculture": {
      "rice": 11,
      "wheat": 2,
      "corn": 2,
      "tubers": 4,
      "soy": 0,
      "palm_oil": 8,
      "tea": 0,
      "coffee": 5,
      "cocoa": 3,
      "sugarcane": 5,
      "vegetables": 0,
      "strength": 13.50267148707385
    },
    "sector_defense": {
      "prison": 6,
      "barracks": 11,
      "armory": 2,
      "tank_hangar": 1,
      "military_academy": 1,
      "budget": 6,
      "personnel": 11030,
      "strength": 15.50267148707385,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 53,
          "apc": 116,
          "artileri_berat": 22
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 10,
          "pesawat_pengintai": 2
        },
        "total_unit": 519,
        "readiness": 80
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 0,
      "cyber_defense": 0,
      "intelligence": 1,
      "strategic_operations": {
        "attack_mission": 7,
        "spy_mission": 19,
        "sabotage_mission": 11,
        "territory_management": 85,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 0,
        "cyber_ops": 1
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 104,
        "elementary_school": 206,
        "middle_school": 155,
        "high_school": 108,
        "university": 10,
        "education_institute": 22,
        "laboratory": 7,
        "observatory": 0,
        "research_center": 2,
        "development_center": 5,
        "literacy": 91,
        "research_index": 0
      },
      "health": {
        "large_hospital": 6,
        "small_hospital": 24,
        "diagnostic_center": 12,
        "hospital_beds": 5323,
        "life_expectancy": 71,
        "healthcare_index": 81
      },
      "sports": {
        "swimming_pool": 20,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 0,
        "popularity": 79
      },
      "law": {
        "legal_aid_center": 13,
        "court": 5,
        "prosecution_office": 6,
        "police_station": 52,
        "police_car_fleet": 259,
        "police_academy": 2,
        "corruption_index": 50,
        "security_index": 64,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 536,
            "sepeda_motor": 205,
            "unit_k9": 22
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 5,
            "anti_huru_hara": 51
          },
          "pusat_komando": {
            "stasiun_polisi": 20,
            "kamera_surveillance": 5124,
            "pusat_forensik": 1
          },
          "response_time": 3,
          "public_trust": 89
        }
      }
    },
    "military": {
      "infantry": 12704,
      "tanks": 1473,
      "aircraft": 428,
      "naval": 23,
      "air_base": 5,
      "naval_base": 1,
      "military_base": 8,
      "nuclear": false,
      "strength": 46
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 84,
      "sell_commodity": 118
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 98
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 78
      },
      "income": {
        "rate": 15,
        "satisfaction": 84
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 89
      }
    },
    "demand": {
      "satisfaction": 61,
      "top_demands": [
        "Bantuan Sembako",
        "Subsidisi Listrik"
      ],
      "residential": 57,
      "commercial": 62,
      "industrial": 49
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 5,
        "diplomatic_prestige": 53
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 87,
      "education": 63,
      "security": 68,
      "finance": 63,
      "environment": 76
    }
  },
  {
    "name_en": "Benin",
    "capital": "Porto-Novo",
    "name_id": "Benin",
    "lon": 2.25,
    "lat": 9.5,
    "flag": "🇧🇯",
    "pop": "9M",
    "budget": "Rp 584 T",
    "income": "Rp 558 T",
    "religion": "Protestan",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 1,
      "solar_plant": 1,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 1,
      "power_grid": 95,
      "bicycle_path": 41,
      "subway": 0,
      "railway": 19,
      "highway": 2,
      "road_quality": 55,
      "sea_port": 1,
      "airport": 1,
      "internet_coverage": 73,
      "tech_stack": 74,
      "water_access": 89
    },
    "sector_extraction": {
      "gold": 7,
      "uranium": 0,
      "coal": 12,
      "oil": 21,
      "gas": 59,
      "salt": 55,
      "nickel": 0,
      "lithium": 7,
      "aluminum": 9,
      "copper": 68,
      "rare_earth": 15,
      "iron_ore": 92,
      "strength": 33.21044659627535
    },
    "sector_manufacturing": {
      "semiconductor": 102,
      "car": 19,
      "motorcycle": 12,
      "smelter": 17,
      "concrete_cement": 60,
      "wood": 11,
      "mineral_water": 40,
      "sugar": 32,
      "bread": 34,
      "pharmacy": 32,
      "fertilizer": 21,
      "meat_processing": 46,
      "instant_noodle": 87,
      "strength": 10.513058245344183
    },
    "sector_livestock": {
      "chicken": 37,
      "poultry": 46,
      "dairy_cow": 15,
      "beef_cow": 28,
      "sheep_goat": 34,
      "shrimp": 50,
      "fish": 24,
      "shellfish": 29,
      "strength": 28.90783494720651
    },
    "sector_agriculture": {
      "rice": 8,
      "wheat": 109,
      "corn": 80,
      "tubers": 73,
      "soy": 37,
      "palm_oil": 23,
      "tea": 51,
      "coffee": 10,
      "cocoa": 3,
      "sugarcane": 76,
      "vegetables": 75,
      "strength": 42.21044659627535
    },
    "sector_defense": {
      "prison": 12,
      "barracks": 12,
      "armory": 4,
      "tank_hangar": 4,
      "military_academy": 1,
      "budget": 24,
      "personnel": 59295,
      "strength": 26.210446596275347,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 91,
          "apc": 275,
          "artileri_berat": 44
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 10,
          "helikopter_serang": 28,
          "pesawat_pengintai": 3
        },
        "total_unit": 697,
        "readiness": 97
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 3,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 2,
      "cyber_defense": 8,
      "intelligence": 9,
      "strategic_operations": {
        "attack_mission": 7,
        "spy_mission": 13,
        "sabotage_mission": 4,
        "territory_management": 95,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 7,
        "cyber_ops": 0
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 223,
        "elementary_school": 336,
        "middle_school": 312,
        "high_school": 217,
        "university": 21,
        "education_institute": 22,
        "laboratory": 14,
        "observatory": 1,
        "research_center": 6,
        "development_center": 15,
        "literacy": 96,
        "research_index": 6
      },
      "health": {
        "large_hospital": 17,
        "small_hospital": 44,
        "diagnostic_center": 30,
        "hospital_beds": 9381,
        "life_expectancy": 68,
        "healthcare_index": 89
      },
      "sports": {
        "swimming_pool": 22,
        "racing_circuit": 0,
        "stadium": 7,
        "international_stadium": 0,
        "olympic_score": 0,
        "popularity": 82
      },
      "law": {
        "legal_aid_center": 40,
        "court": 20,
        "prosecution_office": 12,
        "police_station": 88,
        "police_car_fleet": 688,
        "police_academy": 3,
        "corruption_index": 26,
        "security_index": 20,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 883,
            "sepeda_motor": 363,
            "unit_k9": 25
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 8,
            "anti_huru_hara": 62
          },
          "pusat_komando": {
            "stasiun_polisi": 26,
            "kamera_surveillance": 8700,
            "pusat_forensik": 2
          },
          "response_time": 7,
          "public_trust": 85
        }
      }
    },
    "military": {
      "infantry": 38913,
      "tanks": 1761,
      "aircraft": 189,
      "naval": 50,
      "air_base": 5,
      "naval_base": 0,
      "military_base": 5,
      "nuclear": false,
      "strength": 12
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 215,
      "sell_commodity": 402
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 66
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 64
      },
      "income": {
        "rate": 15,
        "satisfaction": 77
      },
      "customs": {
        "rate": 5,
        "satisfaction": 83
      },
      "environment": {
        "rate": 1,
        "satisfaction": 87
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 76,
      "commercial": 48,
      "industrial": 51
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 6,
        "diplomatic_prestige": 60
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 79,
      "education": 68,
      "security": 86,
      "finance": 76,
      "environment": 59
    }
  },
  {
    "name_en": "Bhutan",
    "capital": "Thimphu",
    "name_id": "Bhutan",
    "lon": 90.5,
    "lat": 27.5,
    "flag": "🇧🇹",
    "pop": "31M",
    "budget": "Rp 630 T",
    "income": "Rp 215 T",
    "religion": "Buddha",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 10,
      "thermal_plant": 1,
      "gas_plant": 1,
      "wind_plant": 1,
      "power_grid": 75,
      "bicycle_path": 45,
      "subway": 0,
      "railway": 71,
      "highway": 17,
      "road_quality": 50,
      "sea_port": 1,
      "airport": 1,
      "internet_coverage": 75,
      "tech_stack": 79,
      "water_access": 76
    },
    "sector_extraction": {
      "gold": 9,
      "uranium": 0,
      "coal": 80,
      "oil": 32,
      "gas": 32,
      "salt": 21,
      "nickel": 17,
      "lithium": 10,
      "aluminum": 0,
      "copper": 67,
      "rare_earth": 1,
      "iron_ore": 56,
      "strength": 38.6147515062163
    },
    "sector_manufacturing": {
      "semiconductor": 113,
      "car": 15,
      "motorcycle": 8,
      "smelter": 48,
      "concrete_cement": 27,
      "wood": 47,
      "mineral_water": 56,
      "sugar": 42,
      "bread": 14,
      "pharmacy": 8,
      "fertilizer": 14,
      "meat_processing": 45,
      "instant_noodle": 66,
      "strength": 27.768439382770374
    },
    "sector_livestock": {
      "chicken": 63,
      "poultry": 43,
      "dairy_cow": 48,
      "beef_cow": 38,
      "sheep_goat": 21,
      "shrimp": 20,
      "fish": 39,
      "shellfish": 24,
      "strength": 33.46106362966223
    },
    "sector_agriculture": {
      "rice": 43,
      "wheat": 9,
      "corn": 28,
      "tubers": 76,
      "soy": 36,
      "palm_oil": 58,
      "tea": 2,
      "coffee": 5,
      "cocoa": 26,
      "sugarcane": 35,
      "vegetables": 9,
      "strength": 24.6147515062163
    },
    "sector_defense": {
      "prison": 6,
      "barracks": 19,
      "armory": 7,
      "tank_hangar": 3,
      "military_academy": 1,
      "budget": 17,
      "personnel": 24026,
      "strength": 32.6147515062163,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 80,
          "apc": 185,
          "artileri_berat": 43
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 6,
          "helikopter_serang": 20,
          "pesawat_pengintai": 2
        },
        "total_unit": 674,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 3,
      "cyber_defense": 3,
      "intelligence": 7,
      "strategic_operations": {
        "attack_mission": 7,
        "spy_mission": 1,
        "sabotage_mission": 1,
        "territory_management": 9,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 3,
        "cyber_ops": 7
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 168,
        "elementary_school": 377,
        "middle_school": 260,
        "high_school": 204,
        "university": 10,
        "education_institute": 34,
        "laboratory": 31,
        "observatory": 0,
        "research_center": 12,
        "development_center": 12,
        "literacy": 86,
        "research_index": 7
      },
      "health": {
        "large_hospital": 8,
        "small_hospital": 38,
        "diagnostic_center": 11,
        "hospital_beds": 6695,
        "life_expectancy": 72,
        "healthcare_index": 58
      },
      "sports": {
        "swimming_pool": 37,
        "racing_circuit": 0,
        "stadium": 5,
        "international_stadium": 0,
        "olympic_score": 3,
        "popularity": 39
      },
      "law": {
        "legal_aid_center": 13,
        "court": 20,
        "prosecution_office": 12,
        "police_station": 123,
        "police_car_fleet": 733,
        "police_academy": 2,
        "corruption_index": 59,
        "security_index": 25,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 820,
            "sepeda_motor": 309,
            "unit_k9": 34
          },
          "taktis_khusus": {
            "swat": 19,
            "helikopter_polisi": 8,
            "anti_huru_hara": 50
          },
          "pusat_komando": {
            "stasiun_polisi": 23,
            "kamera_surveillance": 8264,
            "pusat_forensik": 1
          },
          "response_time": 3,
          "public_trust": 70
        }
      }
    },
    "military": {
      "infantry": 64664,
      "tanks": 1440,
      "aircraft": 314,
      "naval": 80,
      "air_base": 5,
      "naval_base": 2,
      "military_base": 8,
      "nuclear": false,
      "strength": 14
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 403,
      "sell_commodity": 488
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 78
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 63
      },
      "income": {
        "rate": 15,
        "satisfaction": 53
      },
      "customs": {
        "rate": 5,
        "satisfaction": 79
      },
      "environment": {
        "rate": 1,
        "satisfaction": 82
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 85,
      "top_demands": [
        "Bantuan Sembako",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 88,
      "commercial": 58,
      "industrial": 80
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 13,
        "hard_power": 9,
        "diplomatic_prestige": 41
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 89,
      "education": 79,
      "security": 59,
      "finance": 77,
      "environment": 60
    }
  },
  {
    "name_en": "Bolivia",
    "capital": "Sucre",
    "name_id": "Bolivia",
    "lon": -65,
    "lat": -17,
    "flag": "🇧🇴",
    "pop": "77M",
    "budget": "Rp 2089 T",
    "income": "Rp 1802 T",
    "religion": "Taoisme",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 7,
      "solar_plant": 41,
      "thermal_plant": 0,
      "gas_plant": 1,
      "wind_plant": 6,
      "power_grid": 90,
      "bicycle_path": 71,
      "subway": 4,
      "railway": 389,
      "highway": 152,
      "road_quality": 61,
      "sea_port": 5,
      "airport": 6,
      "internet_coverage": 87,
      "tech_stack": 77,
      "water_access": 98
    },
    "sector_extraction": {
      "gold": 37,
      "uranium": 15,
      "coal": 304,
      "oil": 789,
      "gas": 205,
      "salt": 324,
      "nickel": 35,
      "lithium": 28,
      "aluminum": 21,
      "copper": 393,
      "rare_earth": 289,
      "iron_ore": 340,
      "strength": 37.270938099456636
    },
    "sector_manufacturing": {
      "semiconductor": 462,
      "car": 127,
      "motorcycle": 270,
      "smelter": 257,
      "concrete_cement": 351,
      "wood": 112,
      "mineral_water": 354,
      "sugar": 318,
      "bread": 100,
      "pharmacy": 224,
      "fertilizer": 48,
      "meat_processing": 285,
      "instant_noodle": 602,
      "strength": 67.3386726243208
    },
    "sector_livestock": {
      "chicken": 766,
      "poultry": 549,
      "dairy_cow": 395,
      "beef_cow": 22,
      "sheep_goat": 101,
      "shrimp": 47,
      "fish": 422,
      "shellfish": 124,
      "strength": 59.20320357459248
    },
    "sector_agriculture": {
      "rice": 44,
      "wheat": 214,
      "corn": 26,
      "tubers": 356,
      "soy": 415,
      "palm_oil": 423,
      "tea": 56,
      "coffee": 318,
      "cocoa": 284,
      "sugarcane": 340,
      "vegetables": 125,
      "strength": 63.270938099456636
    },
    "sector_defense": {
      "prison": 60,
      "barracks": 131,
      "armory": 27,
      "tank_hangar": 21,
      "military_academy": 5,
      "budget": 151,
      "personnel": 13344,
      "strength": 66.27093809945663,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 96,
          "apc": 942,
          "artileri_berat": 178
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 16,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 48,
          "helikopter_serang": 75,
          "pesawat_pengintai": 20
        },
        "total_unit": 2445,
        "readiness": 86
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 4,
      "military_naval_base": 6,
      "arms_factory": 11,
      "nuclear_status": false,
      "space_program": 11,
      "cyber_defense": 66,
      "intelligence": 40,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 11,
        "sabotage_mission": 7,
        "territory_management": 87,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 6,
        "radar_network": 35,
        "cyber_ops": 33
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 890,
        "elementary_school": 937,
        "middle_school": 669,
        "high_school": 833,
        "university": 160,
        "education_institute": 59,
        "laboratory": 215,
        "observatory": 6,
        "research_center": 48,
        "development_center": 78,
        "literacy": 97,
        "research_index": 31
      },
      "health": {
        "large_hospital": 83,
        "small_hospital": 361,
        "diagnostic_center": 39,
        "hospital_beds": 53176,
        "life_expectancy": 71,
        "healthcare_index": 53
      },
      "sports": {
        "swimming_pool": 96,
        "racing_circuit": 5,
        "stadium": 3,
        "international_stadium": 2,
        "olympic_score": 64,
        "popularity": 11
      },
      "law": {
        "legal_aid_center": 167,
        "court": 115,
        "prosecution_office": 63,
        "police_station": 558,
        "police_car_fleet": 2310,
        "police_academy": 10,
        "corruption_index": 76,
        "security_index": 81,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2891,
            "sepeda_motor": 1265,
            "unit_k9": 37
          },
          "taktis_khusus": {
            "swat": 88,
            "helikopter_polisi": 24,
            "anti_huru_hara": 498
          },
          "pusat_komando": {
            "stasiun_polisi": 76,
            "kamera_surveillance": 25492,
            "pusat_forensik": 3
          },
          "response_time": 5,
          "public_trust": 52
        }
      }
    },
    "military": {
      "infantry": 99628,
      "tanks": 9,
      "aircraft": 212,
      "naval": 90,
      "air_base": 2,
      "naval_base": 1,
      "military_base": 8,
      "nuclear": false,
      "strength": 66
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 310,
      "sell_commodity": 181
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 62
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 72
      },
      "income": {
        "rate": 15,
        "satisfaction": 86
      },
      "customs": {
        "rate": 5,
        "satisfaction": 79
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 91
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 47,
      "commercial": 78,
      "industrial": 75
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [
        "Korea Utara",
        "Rusia"
      ],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 29,
        "hard_power": 19,
        "diplomatic_prestige": 55
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 68,
      "education": 64,
      "security": 86,
      "finance": 85,
      "environment": 64
    }
  },
  {
    "name_en": "Bosnia and Herzegovina",
    "capital": "Sarajevo",
    "name_id": "Bosnia dan Herzegovina",
    "lon": 18,
    "lat": 44,
    "flag": "🇧🇦",
    "pop": "8M",
    "budget": "Rp 458 T",
    "income": "Rp 453 T",
    "religion": "Katolik",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 2,
      "solar_plant": 12,
      "thermal_plant": 0,
      "gas_plant": 6,
      "wind_plant": 7,
      "power_grid": 81,
      "bicycle_path": 294,
      "subway": 0,
      "railway": 240,
      "highway": 808,
      "road_quality": 62,
      "sea_port": 8,
      "airport": 2,
      "internet_coverage": 76,
      "tech_stack": 65,
      "water_access": 76
    },
    "sector_extraction": {
      "gold": 20,
      "uranium": 0,
      "coal": 164,
      "oil": 577,
      "gas": 320,
      "salt": 351,
      "nickel": 375,
      "lithium": 0,
      "aluminum": 18,
      "copper": 23,
      "rare_earth": 20,
      "iron_ore": 416,
      "strength": 41.460264568130654
    },
    "sector_manufacturing": {
      "semiconductor": 304,
      "car": 199,
      "motorcycle": 230,
      "smelter": 497,
      "concrete_cement": 224,
      "wood": 70,
      "mineral_water": 299,
      "sugar": 82,
      "bread": 188,
      "pharmacy": 81,
      "fertilizer": 82,
      "meat_processing": 81,
      "instant_noodle": 244,
      "strength": 66.07533071016331
    },
    "sector_livestock": {
      "chicken": 317,
      "poultry": 32,
      "dairy_cow": 16,
      "beef_cow": 120,
      "sheep_goat": 209,
      "shrimp": 31,
      "fish": 459,
      "shellfish": 212,
      "strength": 39.84519842609799
    },
    "sector_agriculture": {
      "rice": 747,
      "wheat": 357,
      "corn": 303,
      "tubers": 264,
      "soy": 79,
      "palm_oil": 373,
      "tea": 151,
      "coffee": 139,
      "cocoa": 269,
      "sugarcane": 153,
      "vegetables": 480,
      "strength": 68.46026456813065
    },
    "sector_defense": {
      "prison": 81,
      "barracks": 146,
      "armory": 24,
      "tank_hangar": 18,
      "military_academy": 3,
      "budget": 122,
      "personnel": 113459,
      "strength": 38.460264568130654,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 50,
          "apc": 1040,
          "artileri_berat": 54
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 17,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 24,
          "helikopter_serang": 25,
          "pesawat_pengintai": 6
        },
        "total_unit": 2720,
        "readiness": 92
      }
    },
    "sector_military_strategic": {
      "command_center": 3,
      "military_air_base": 7,
      "military_naval_base": 7,
      "arms_factory": 10,
      "nuclear_status": false,
      "space_program": 26,
      "cyber_defense": 12,
      "intelligence": 51,
      "strategic_operations": {
        "attack_mission": 6,
        "spy_mission": 12,
        "sabotage_mission": 13,
        "territory_management": 4,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 52,
        "cyber_ops": 75
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 852,
        "elementary_school": 294,
        "middle_school": 658,
        "high_school": 554,
        "university": 109,
        "education_institute": 251,
        "laboratory": 117,
        "observatory": 27,
        "research_center": 29,
        "development_center": 104,
        "literacy": 76,
        "research_index": 69
      },
      "health": {
        "large_hospital": 18,
        "small_hospital": 256,
        "diagnostic_center": 139,
        "hospital_beds": 9848,
        "life_expectancy": 67,
        "healthcare_index": 73
      },
      "sports": {
        "swimming_pool": 279,
        "racing_circuit": 0,
        "stadium": 7,
        "international_stadium": 2,
        "olympic_score": 7,
        "popularity": 68
      },
      "law": {
        "legal_aid_center": 236,
        "court": 70,
        "prosecution_office": 75,
        "police_station": 609,
        "police_car_fleet": 575,
        "police_academy": 6,
        "corruption_index": 30,
        "security_index": 72,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1476,
            "sepeda_motor": 522,
            "unit_k9": 62
          },
          "taktis_khusus": {
            "swat": 64,
            "helikopter_polisi": 34,
            "anti_huru_hara": 68
          },
          "pusat_komando": {
            "stasiun_polisi": 52,
            "kamera_surveillance": 30243,
            "pusat_forensik": 4
          },
          "response_time": 11,
          "public_trust": 52
        }
      }
    },
    "military": {
      "infantry": 41033,
      "tanks": 416,
      "aircraft": 248,
      "naval": 30,
      "air_base": 1,
      "naval_base": 2,
      "military_base": 7,
      "nuclear": false,
      "strength": 11
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 341,
      "sell_commodity": 180
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 92
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 51
      },
      "income": {
        "rate": 15,
        "satisfaction": 88
      },
      "customs": {
        "rate": 5,
        "satisfaction": 72
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 86
      }
    },
    "demand": {
      "satisfaction": 74,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Subsidisi Listrik"
      ],
      "residential": 40,
      "commercial": 44,
      "industrial": 75
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 21,
        "hard_power": 35,
        "diplomatic_prestige": 63
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 58,
      "education": 82,
      "security": 64,
      "finance": 67,
      "environment": 53
    }
  },
  {
    "name_en": "Botswana",
    "capital": "Gaborone",
    "name_id": "Botswana",
    "lon": 24,
    "lat": -22,
    "flag": "🇧🇼",
    "pop": "22M",
    "budget": "Rp 158 T",
    "income": "Rp 960 T",
    "religion": "Shinto",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 0,
      "solar_plant": 32,
      "thermal_plant": 1,
      "gas_plant": 0,
      "wind_plant": 9,
      "power_grid": 76,
      "bicycle_path": 28,
      "subway": 1,
      "railway": 509,
      "highway": 276,
      "road_quality": 68,
      "sea_port": 11,
      "airport": 3,
      "internet_coverage": 82,
      "tech_stack": 88,
      "water_access": 80
    },
    "sector_extraction": {
      "gold": 4,
      "uranium": 0,
      "coal": 65,
      "oil": 245,
      "gas": 24,
      "salt": 214,
      "nickel": 308,
      "lithium": 20,
      "aluminum": 26,
      "copper": 118,
      "rare_earth": 1,
      "iron_ore": 267,
      "strength": 40.86582479281725
    },
    "sector_manufacturing": {
      "semiconductor": 311,
      "car": 529,
      "motorcycle": 272,
      "smelter": 289,
      "concrete_cement": 182,
      "wood": 246,
      "mineral_water": 138,
      "sugar": 27,
      "bread": 196,
      "pharmacy": 175,
      "fertilizer": 33,
      "meat_processing": 275,
      "instant_noodle": 125,
      "strength": 34.58228099102156
    },
    "sector_livestock": {
      "chicken": 250,
      "poultry": 331,
      "dairy_cow": 249,
      "beef_cow": 135,
      "sheep_goat": 88,
      "shrimp": 87,
      "fish": 385,
      "shellfish": 50,
      "strength": 56.14936859461294
    },
    "sector_agriculture": {
      "rice": 273,
      "wheat": 350,
      "corn": 90,
      "tubers": 252,
      "soy": 402,
      "palm_oil": 230,
      "tea": 5,
      "coffee": 323,
      "cocoa": 24,
      "sugarcane": 292,
      "vegetables": 410,
      "strength": 61.86582479281725
    },
    "sector_defense": {
      "prison": 12,
      "barracks": 105,
      "armory": 10,
      "tank_hangar": 17,
      "military_academy": 5,
      "budget": 87,
      "personnel": 69961,
      "strength": 45.86582479281725,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 267,
          "apc": 1037,
          "artileri_berat": 43
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 5,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 19,
          "helikopter_serang": 13,
          "pesawat_pengintai": 3
        },
        "total_unit": 859,
        "readiness": 92
      }
    },
    "sector_military_strategic": {
      "command_center": 3,
      "military_air_base": 7,
      "military_naval_base": 5,
      "arms_factory": 2,
      "nuclear_status": false,
      "space_program": 46,
      "cyber_defense": 55,
      "intelligence": 60,
      "strategic_operations": {
        "attack_mission": 3,
        "spy_mission": 1,
        "sabotage_mission": 13,
        "territory_management": 80,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 49,
        "cyber_ops": 31
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 622,
        "elementary_school": 452,
        "middle_school": 361,
        "high_school": 706,
        "university": 50,
        "education_institute": 131,
        "laboratory": 115,
        "observatory": 23,
        "research_center": 49,
        "development_center": 97,
        "literacy": 97,
        "research_index": 25
      },
      "health": {
        "large_hospital": 17,
        "small_hospital": 250,
        "diagnostic_center": 45,
        "hospital_beds": 14706,
        "life_expectancy": 65,
        "healthcare_index": 64
      },
      "sports": {
        "swimming_pool": 244,
        "racing_circuit": 4,
        "stadium": 6,
        "international_stadium": 1,
        "olympic_score": 47,
        "popularity": 58
      },
      "law": {
        "legal_aid_center": 33,
        "court": 104,
        "prosecution_office": 29,
        "police_station": 179,
        "police_car_fleet": 1110,
        "police_academy": 3,
        "corruption_index": 43,
        "security_index": 48,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1717,
            "sepeda_motor": 841,
            "unit_k9": 20
          },
          "taktis_khusus": {
            "swat": 72,
            "helikopter_polisi": 31,
            "anti_huru_hara": 411
          },
          "pusat_komando": {
            "stasiun_polisi": 103,
            "kamera_surveillance": 16680,
            "pusat_forensik": 7
          },
          "response_time": 4,
          "public_trust": 77
        }
      }
    },
    "military": {
      "infantry": 85126,
      "tanks": 1978,
      "aircraft": 485,
      "naval": 39,
      "air_base": 2,
      "naval_base": 0,
      "military_base": 2,
      "nuclear": false,
      "strength": 25
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 489,
      "sell_commodity": 118
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 69
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 70
      },
      "income": {
        "rate": 15,
        "satisfaction": 55
      },
      "customs": {
        "rate": 5,
        "satisfaction": 78
      },
      "environment": {
        "rate": 1,
        "satisfaction": 87
      },
      "other": {
        "rate": 2,
        "satisfaction": 92
      }
    },
    "demand": {
      "satisfaction": 53,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 89,
      "commercial": 65,
      "industrial": 75
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 36,
        "hard_power": 12,
        "diplomatic_prestige": 55
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 63,
      "education": 63,
      "security": 60,
      "finance": 89,
      "environment": 50
    }
  },
  {
    "name_en": "Brazil",
    "capital": "Brasilia",
    "name_id": "Brasil",
    "lon": -55,
    "lat": -10,
    "flag": "🇧🇷",
    "pop": "27M",
    "budget": "Rp 240 T",
    "income": "Rp 424 T",
    "religion": "Hindu",
    "ideology": "Komunisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 11,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 96,
      "bicycle_path": 10,
      "subway": 0,
      "railway": 59,
      "highway": 141,
      "road_quality": 84,
      "sea_port": 1,
      "airport": 0,
      "internet_coverage": 66,
      "tech_stack": 53,
      "water_access": 70
    },
    "sector_extraction": {
      "gold": 3,
      "uranium": 0,
      "coal": 61,
      "oil": 138,
      "gas": 24,
      "salt": 45,
      "nickel": 36,
      "lithium": 7,
      "aluminum": 21,
      "copper": 6,
      "rare_earth": 24,
      "iron_ore": 6,
      "strength": 7.691683911457247
    },
    "sector_manufacturing": {
      "semiconductor": 98,
      "car": 91,
      "motorcycle": 72,
      "smelter": 67,
      "concrete_cement": 42,
      "wood": 65,
      "mineral_water": 112,
      "sugar": 15,
      "bread": 25,
      "pharmacy": 10,
      "fertilizer": 51,
      "meat_processing": 51,
      "instant_noodle": 87,
      "strength": 30.36460488932156
    },
    "sector_livestock": {
      "chicken": 40,
      "poultry": 62,
      "dairy_cow": 28,
      "beef_cow": 54,
      "sheep_goat": 53,
      "shrimp": 3,
      "fish": 27,
      "shellfish": 10,
      "strength": 17.018762933592935
    },
    "sector_agriculture": {
      "rice": 197,
      "wheat": 33,
      "corn": 146,
      "tubers": 56,
      "soy": 2,
      "palm_oil": 2,
      "tea": 16,
      "coffee": 60,
      "cocoa": 27,
      "sugarcane": 61,
      "vegetables": 120,
      "strength": 45.69168391145725
    },
    "sector_defense": {
      "prison": 18,
      "barracks": 17,
      "armory": 4,
      "tank_hangar": 5,
      "military_academy": 1,
      "budget": 6,
      "personnel": 50374,
      "strength": 43.69168391145725,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 83,
          "apc": 116,
          "artileri_berat": 49
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 4,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 11,
          "helikopter_serang": 14,
          "pesawat_pengintai": 3
        },
        "total_unit": 995,
        "readiness": 93
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 0,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 8,
      "cyber_defense": 8,
      "intelligence": 10,
      "strategic_operations": {
        "attack_mission": 5,
        "spy_mission": 10,
        "sabotage_mission": 5,
        "territory_management": 27,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 4,
        "cyber_ops": 5
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 140,
        "elementary_school": 330,
        "middle_school": 258,
        "high_school": 115,
        "university": 17,
        "education_institute": 81,
        "laboratory": 39,
        "observatory": 5,
        "research_center": 2,
        "development_center": 7,
        "literacy": 97,
        "research_index": 5
      },
      "health": {
        "large_hospital": 13,
        "small_hospital": 57,
        "diagnostic_center": 25,
        "hospital_beds": 18346,
        "life_expectancy": 62,
        "healthcare_index": 77
      },
      "sports": {
        "swimming_pool": 39,
        "racing_circuit": 0,
        "stadium": 7,
        "international_stadium": 0,
        "olympic_score": 9,
        "popularity": 91
      },
      "law": {
        "legal_aid_center": 41,
        "court": 14,
        "prosecution_office": 7,
        "police_station": 176,
        "police_car_fleet": 874,
        "police_academy": 3,
        "corruption_index": 44,
        "security_index": 43,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 882,
            "sepeda_motor": 378,
            "unit_k9": 24
          },
          "taktis_khusus": {
            "swat": 14,
            "helikopter_polisi": 6,
            "anti_huru_hara": 58
          },
          "pusat_komando": {
            "stasiun_polisi": 39,
            "kamera_surveillance": 6600,
            "pusat_forensik": 2
          },
          "response_time": 7,
          "public_trust": 59
        }
      }
    },
    "military": {
      "infantry": 28245,
      "tanks": 1097,
      "aircraft": 170,
      "naval": 1,
      "air_base": 1,
      "naval_base": 2,
      "military_base": 5,
      "nuclear": false,
      "strength": 15
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 395,
      "sell_commodity": 345
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 86
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 68
      },
      "income": {
        "rate": 15,
        "satisfaction": 61
      },
      "customs": {
        "rate": 5,
        "satisfaction": 83
      },
      "environment": {
        "rate": 1,
        "satisfaction": 80
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 77,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 72,
      "commercial": 88,
      "industrial": 66
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 14,
        "hard_power": 9,
        "diplomatic_prestige": 43
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 66,
      "education": 50,
      "security": 73,
      "finance": 56,
      "environment": 72
    }
  },
  {
    "name_en": "Brunei",
    "capital": "Bandar Seri Begawan",
    "name_id": "Brunei Darussalam",
    "lon": 114.66666666,
    "lat": 4.5,
    "flag": "🇧🇳",
    "pop": "10M",
    "budget": "Rp 484 T",
    "income": "Rp 300 T",
    "religion": "Hindu",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 2,
      "solar_plant": 32,
      "thermal_plant": 5,
      "gas_plant": 3,
      "wind_plant": 8,
      "power_grid": 72,
      "bicycle_path": 39,
      "subway": 0,
      "railway": 280,
      "highway": 312,
      "road_quality": 51,
      "sea_port": 2,
      "airport": 7,
      "internet_coverage": 69,
      "tech_stack": 58,
      "water_access": 72
    },
    "sector_extraction": {
      "gold": 5,
      "uranium": 0,
      "coal": 267,
      "oil": 167,
      "gas": 345,
      "salt": 179,
      "nickel": 133,
      "lithium": 13,
      "aluminum": 11,
      "copper": 265,
      "rare_earth": 205,
      "iron_ore": 391,
      "strength": 33.193324066351884
    },
    "sector_manufacturing": {
      "semiconductor": 130,
      "car": 297,
      "motorcycle": 174,
      "smelter": 64,
      "concrete_cement": 98,
      "wood": 69,
      "mineral_water": 179,
      "sugar": 11,
      "bread": 170,
      "pharmacy": 69,
      "fertilizer": 141,
      "meat_processing": 24,
      "instant_noodle": 300,
      "strength": 37.49165508293986
    },
    "sector_livestock": {
      "chicken": 133,
      "poultry": 397,
      "dairy_cow": 58,
      "beef_cow": 176,
      "sheep_goat": 74,
      "shrimp": 105,
      "fish": 109,
      "shellfish": 148,
      "strength": 20.894993049763915
    },
    "sector_agriculture": {
      "rice": 556,
      "wheat": 167,
      "corn": 65,
      "tubers": 99,
      "soy": 306,
      "palm_oil": 70,
      "tea": 96,
      "coffee": 197,
      "cocoa": 66,
      "sugarcane": 75,
      "vegetables": 86,
      "strength": 57.193324066351884
    },
    "sector_defense": {
      "prison": 52,
      "barracks": 118,
      "armory": 10,
      "tank_hangar": 7,
      "military_academy": 5,
      "budget": 109,
      "personnel": 219747,
      "strength": 30.193324066351884,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 164,
          "apc": 174,
          "artileri_berat": 184
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 12,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 10,
          "helikopter_serang": 29,
          "pesawat_pengintai": 3
        },
        "total_unit": 2041,
        "readiness": 88
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 8,
      "military_naval_base": 4,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 33,
      "cyber_defense": 4,
      "intelligence": 43,
      "strategic_operations": {
        "attack_mission": 6,
        "spy_mission": 14,
        "sabotage_mission": 12,
        "territory_management": 48,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 49,
        "cyber_ops": 22
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 245,
        "elementary_school": 1171,
        "middle_school": 474,
        "high_school": 606,
        "university": 104,
        "education_institute": 81,
        "laboratory": 128,
        "observatory": 6,
        "research_center": 40,
        "development_center": 8,
        "literacy": 99,
        "research_index": 11
      },
      "health": {
        "large_hospital": 7,
        "small_hospital": 104,
        "diagnostic_center": 49,
        "hospital_beds": 13516,
        "life_expectancy": 74,
        "healthcare_index": 75
      },
      "sports": {
        "swimming_pool": 105,
        "racing_circuit": 2,
        "stadium": 8,
        "international_stadium": 0,
        "olympic_score": 40,
        "popularity": 82
      },
      "law": {
        "legal_aid_center": 34,
        "court": 70,
        "prosecution_office": 40,
        "police_station": 116,
        "police_car_fleet": 763,
        "police_academy": 7,
        "corruption_index": 15,
        "security_index": 46,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2025,
            "sepeda_motor": 460,
            "unit_k9": 33
          },
          "taktis_khusus": {
            "swat": 52,
            "helikopter_polisi": 8,
            "anti_huru_hara": 308
          },
          "pusat_komando": {
            "stasiun_polisi": 34,
            "kamera_surveillance": 23477,
            "pusat_forensik": 1
          },
          "response_time": 10,
          "public_trust": 75
        }
      }
    },
    "military": {
      "infantry": 15000,
      "tanks": 675,
      "aircraft": 139,
      "naval": 63,
      "air_base": 3,
      "naval_base": 1,
      "military_base": 11,
      "nuclear": false,
      "strength": 26
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 132,
      "sell_commodity": 64
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 64
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 78
      },
      "income": {
        "rate": 15,
        "satisfaction": 55
      },
      "customs": {
        "rate": 5,
        "satisfaction": 83
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 65,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 68,
      "commercial": 59,
      "industrial": 61
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 21,
        "hard_power": 27,
        "diplomatic_prestige": 66
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 55,
      "education": 70,
      "security": 56,
      "finance": 76,
      "environment": 53
    }
  },
  {
    "name_en": "Bulgaria",
    "capital": "Sofia",
    "name_id": "Bulgaria",
    "lon": 25,
    "lat": 43,
    "flag": "🇧🇬",
    "pop": "30M",
    "budget": "Rp 282 T",
    "income": "Rp 737 T",
    "religion": "Protestan",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 12,
      "thermal_plant": 3,
      "gas_plant": 3,
      "wind_plant": 7,
      "power_grid": 75,
      "bicycle_path": 113,
      "subway": 0,
      "railway": 41,
      "highway": 231,
      "road_quality": 75,
      "sea_port": 2,
      "airport": 0,
      "internet_coverage": 77,
      "tech_stack": 69,
      "water_access": 92
    },
    "sector_extraction": {
      "gold": 12,
      "uranium": 0,
      "coal": 122,
      "oil": 192,
      "gas": 89,
      "salt": 103,
      "nickel": 146,
      "lithium": 15,
      "aluminum": 29,
      "copper": 188,
      "rare_earth": 78,
      "iron_ore": 352,
      "strength": 32.33350870405502
    },
    "sector_manufacturing": {
      "semiconductor": 178,
      "car": 49,
      "motorcycle": 309,
      "smelter": 106,
      "concrete_cement": 79,
      "wood": 84,
      "mineral_water": 150,
      "sugar": 64,
      "bread": 123,
      "pharmacy": 29,
      "fertilizer": 105,
      "meat_processing": 50,
      "instant_noodle": 254,
      "strength": 49.166885880068776
    },
    "sector_livestock": {
      "chicken": 84,
      "poultry": 110,
      "dairy_cow": 153,
      "beef_cow": 223,
      "sheep_goat": 58,
      "shrimp": 55,
      "fish": 98,
      "shellfish": 71,
      "strength": 13.500131528041264
    },
    "sector_agriculture": {
      "rice": 299,
      "wheat": 348,
      "corn": 84,
      "tubers": 243,
      "soy": 184,
      "palm_oil": 202,
      "tea": 76,
      "coffee": 86,
      "cocoa": 22,
      "sugarcane": 139,
      "vegetables": 231,
      "strength": 27.33350870405502
    },
    "sector_defense": {
      "prison": 12,
      "barracks": 91,
      "armory": 3,
      "tank_hangar": 2,
      "military_academy": 3,
      "budget": 64,
      "personnel": 191206,
      "strength": 34.33350870405502,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 234,
          "apc": 442,
          "artileri_berat": 69
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 6,
          "helikopter_serang": 12,
          "pesawat_pengintai": 4
        },
        "total_unit": 1080,
        "readiness": 80
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 3,
      "arms_factory": 3,
      "nuclear_status": false,
      "space_program": 33,
      "cyber_defense": 17,
      "intelligence": 7,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 1,
        "sabotage_mission": 13,
        "territory_management": 83,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 2,
        "radar_network": 20,
        "cyber_ops": 7
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 467,
        "elementary_school": 730,
        "middle_school": 179,
        "high_school": 433,
        "university": 85,
        "education_institute": 139,
        "laboratory": 74,
        "observatory": 2,
        "research_center": 24,
        "development_center": 61,
        "literacy": 85,
        "research_index": 9
      },
      "health": {
        "large_hospital": 19,
        "small_hospital": 28,
        "diagnostic_center": 86,
        "hospital_beds": 23895,
        "life_expectancy": 63,
        "healthcare_index": 65
      },
      "sports": {
        "swimming_pool": 96,
        "racing_circuit": 1,
        "stadium": 7,
        "international_stadium": 0,
        "olympic_score": 2,
        "popularity": 63
      },
      "law": {
        "legal_aid_center": 110,
        "court": 56,
        "prosecution_office": 9,
        "police_station": 283,
        "police_car_fleet": 1921,
        "police_academy": 8,
        "corruption_index": 21,
        "security_index": 22,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1511,
            "sepeda_motor": 202,
            "unit_k9": 64
          },
          "taktis_khusus": {
            "swat": 47,
            "helikopter_polisi": 13,
            "anti_huru_hara": 103
          },
          "pusat_komando": {
            "stasiun_polisi": 48,
            "kamera_surveillance": 8817,
            "pusat_forensik": 4
          },
          "response_time": 8,
          "public_trust": 58
        }
      }
    },
    "military": {
      "infantry": 21364,
      "tanks": 797,
      "aircraft": 304,
      "naval": 98,
      "air_base": 3,
      "naval_base": 1,
      "military_base": 9,
      "nuclear": false,
      "strength": 39
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 444,
      "sell_commodity": 238
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 84
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 62
      },
      "income": {
        "rate": 15,
        "satisfaction": 60
      },
      "customs": {
        "rate": 5,
        "satisfaction": 80
      },
      "environment": {
        "rate": 1,
        "satisfaction": 89
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 54,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 85,
      "commercial": 61,
      "industrial": 57
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 18,
        "hard_power": 6,
        "diplomatic_prestige": 58
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 64,
      "education": 87,
      "security": 85,
      "finance": 71,
      "environment": 85
    }
  },
  {
    "name_en": "Burkina Faso",
    "capital": "Ouagadougou",
    "name_id": "Burkina Faso",
    "lon": -2,
    "lat": 13,
    "flag": "🇧🇫",
    "pop": "46M",
    "budget": "Rp 340 T",
    "income": "Rp 848 T",
    "religion": "Islam",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 6,
      "solar_plant": 8,
      "thermal_plant": 0,
      "gas_plant": 6,
      "wind_plant": 8,
      "power_grid": 87,
      "bicycle_path": 262,
      "subway": 4,
      "railway": 313,
      "highway": 13,
      "road_quality": 84,
      "sea_port": 12,
      "airport": 2,
      "internet_coverage": 91,
      "tech_stack": 59,
      "water_access": 88
    },
    "sector_extraction": {
      "gold": 28,
      "uranium": 0,
      "coal": 424,
      "oil": 697,
      "gas": 12,
      "salt": 328,
      "nickel": 87,
      "lithium": 16,
      "aluminum": 2,
      "copper": 212,
      "rare_earth": 18,
      "iron_ore": 336,
      "strength": 60.29679904605159
    },
    "sector_manufacturing": {
      "semiconductor": 609,
      "car": 149,
      "motorcycle": 298,
      "smelter": 88,
      "concrete_cement": 138,
      "wood": 155,
      "mineral_water": 613,
      "sugar": 20,
      "bread": 165,
      "pharmacy": 12,
      "fertilizer": 54,
      "meat_processing": 98,
      "instant_noodle": 513,
      "strength": 56.37099880756449
    },
    "sector_livestock": {
      "chicken": 666,
      "poultry": 312,
      "dairy_cow": 245,
      "beef_cow": 397,
      "sheep_goat": 85,
      "shrimp": 219,
      "fish": 392,
      "shellfish": 41,
      "strength": 47.222599284538695
    },
    "sector_agriculture": {
      "rice": 40,
      "wheat": 413,
      "corn": 226,
      "tubers": 329,
      "soy": 299,
      "palm_oil": 341,
      "tea": 85,
      "coffee": 81,
      "cocoa": 214,
      "sugarcane": 248,
      "vegetables": 437,
      "strength": 32.29679904605159
    },
    "sector_defense": {
      "prison": 9,
      "barracks": 86,
      "armory": 5,
      "tank_hangar": 6,
      "military_academy": 5,
      "budget": 14,
      "personnel": 248318,
      "strength": 51.29679904605159,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 402,
          "apc": 181,
          "artileri_berat": 190
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 8,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 39,
          "helikopter_serang": 95,
          "pesawat_pengintai": 18
        },
        "total_unit": 2421,
        "readiness": 93
      }
    },
    "sector_military_strategic": {
      "command_center": 4,
      "military_air_base": 3,
      "military_naval_base": 6,
      "arms_factory": 8,
      "nuclear_status": false,
      "space_program": 36,
      "cyber_defense": 59,
      "intelligence": 53,
      "strategic_operations": {
        "attack_mission": 6,
        "spy_mission": 16,
        "sabotage_mission": 6,
        "territory_management": 33,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 4,
        "radar_network": 28,
        "cyber_ops": 7
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 636,
        "elementary_school": 871,
        "middle_school": 1039,
        "high_school": 155,
        "university": 74,
        "education_institute": 158,
        "laboratory": 110,
        "observatory": 23,
        "research_center": 29,
        "development_center": 34,
        "literacy": 76,
        "research_index": 37
      },
      "health": {
        "large_hospital": 11,
        "small_hospital": 210,
        "diagnostic_center": 81,
        "hospital_beds": 33728,
        "life_expectancy": 63,
        "healthcare_index": 80
      },
      "sports": {
        "swimming_pool": 61,
        "racing_circuit": 4,
        "stadium": 25,
        "international_stadium": 2,
        "olympic_score": 20,
        "popularity": 70
      },
      "law": {
        "legal_aid_center": 99,
        "court": 108,
        "prosecution_office": 30,
        "police_station": 592,
        "police_car_fleet": 1421,
        "police_academy": 8,
        "corruption_index": 41,
        "security_index": 36,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 831,
            "sepeda_motor": 750,
            "unit_k9": 47
          },
          "taktis_khusus": {
            "swat": 17,
            "helikopter_polisi": 22,
            "anti_huru_hara": 208
          },
          "pusat_komando": {
            "stasiun_polisi": 113,
            "kamera_surveillance": 34738,
            "pusat_forensik": 1
          },
          "response_time": 2,
          "public_trust": 86
        }
      }
    },
    "military": {
      "infantry": 79406,
      "tanks": 318,
      "aircraft": 125,
      "naval": 78,
      "air_base": 5,
      "naval_base": 0,
      "military_base": 7,
      "nuclear": false,
      "strength": 49
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 105,
      "sell_commodity": 624
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 87
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 61
      },
      "income": {
        "rate": 15,
        "satisfaction": 69
      },
      "customs": {
        "rate": 5,
        "satisfaction": 70
      },
      "environment": {
        "rate": 1,
        "satisfaction": 82
      },
      "other": {
        "rate": 2,
        "satisfaction": 89
      }
    },
    "demand": {
      "satisfaction": 55,
      "top_demands": [
        "Bantuan Sembako",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 57,
      "commercial": 75,
      "industrial": 53
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 38,
        "hard_power": 13,
        "diplomatic_prestige": 65
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 62,
      "education": 68,
      "security": 58,
      "finance": 71,
      "environment": 54
    }
  },
  {
    "name_en": "Burundi",
    "capital": "Gitega",
    "name_id": "Burundi",
    "lon": 30,
    "lat": -3.5,
    "flag": "🇧🇮",
    "pop": "5M",
    "budget": "Rp 451 T",
    "income": "Rp 421 T",
    "religion": "Taoisme",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 2,
      "gas_plant": 0,
      "wind_plant": 2,
      "power_grid": 92,
      "bicycle_path": 69,
      "subway": 1,
      "railway": 16,
      "highway": 85,
      "road_quality": 76,
      "sea_port": 2,
      "airport": 1,
      "internet_coverage": 72,
      "tech_stack": 58,
      "water_access": 96
    },
    "sector_extraction": {
      "gold": 12,
      "uranium": 0,
      "coal": 40,
      "oil": 31,
      "gas": 88,
      "salt": 55,
      "nickel": 62,
      "lithium": 22,
      "aluminum": 18,
      "copper": 90,
      "rare_earth": 23,
      "iron_ore": 80,
      "strength": 15.21715330223204
    },
    "sector_manufacturing": {
      "semiconductor": 110,
      "car": 62,
      "motorcycle": 10,
      "smelter": 67,
      "concrete_cement": 13,
      "wood": 73,
      "mineral_water": 122,
      "sugar": 21,
      "bread": 75,
      "pharmacy": 37,
      "fertilizer": 29,
      "meat_processing": 31,
      "instant_noodle": 51,
      "strength": 13.02144162779005
    },
    "sector_livestock": {
      "chicken": 99,
      "poultry": 41,
      "dairy_cow": 26,
      "beef_cow": 4,
      "sheep_goat": 45,
      "shrimp": 34,
      "fish": 37,
      "shellfish": 21,
      "strength": 44.41286497667403
    },
    "sector_agriculture": {
      "rice": 46,
      "wheat": 90,
      "corn": 119,
      "tubers": 82,
      "soy": 19,
      "palm_oil": 54,
      "tea": 0,
      "coffee": 88,
      "cocoa": 61,
      "sugarcane": 9,
      "vegetables": 6,
      "strength": 43.21715330223204
    },
    "sector_defense": {
      "prison": 22,
      "barracks": 12,
      "armory": 8,
      "tank_hangar": 3,
      "military_academy": 2,
      "budget": 10,
      "personnel": 33361,
      "strength": 23.21715330223204,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 121,
          "apc": 151,
          "artileri_berat": 27
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 4,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 8,
          "helikopter_serang": 36,
          "pesawat_pengintai": 4
        },
        "total_unit": 825,
        "readiness": 88
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 4,
      "military_naval_base": 1,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 13,
      "cyber_defense": 12,
      "intelligence": 7,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 5,
        "sabotage_mission": 3,
        "territory_management": 74,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 12,
        "cyber_ops": 5
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 230,
        "elementary_school": 298,
        "middle_school": 405,
        "high_school": 251,
        "university": 37,
        "education_institute": 35,
        "laboratory": 17,
        "observatory": 4,
        "research_center": 9,
        "development_center": 26,
        "literacy": 79,
        "research_index": 9
      },
      "health": {
        "large_hospital": 10,
        "small_hospital": 48,
        "diagnostic_center": 38,
        "hospital_beds": 10179,
        "life_expectancy": 78,
        "healthcare_index": 70
      },
      "sports": {
        "swimming_pool": 71,
        "racing_circuit": 1,
        "stadium": 3,
        "international_stadium": 0,
        "olympic_score": 11,
        "popularity": 38
      },
      "law": {
        "legal_aid_center": 63,
        "court": 12,
        "prosecution_office": 21,
        "police_station": 213,
        "police_car_fleet": 771,
        "police_academy": 5,
        "corruption_index": 42,
        "security_index": 7,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 655,
            "sepeda_motor": 211,
            "unit_k9": 36
          },
          "taktis_khusus": {
            "swat": 22,
            "helikopter_polisi": 5,
            "anti_huru_hara": 88
          },
          "pusat_komando": {
            "stasiun_polisi": 46,
            "kamera_surveillance": 9244,
            "pusat_forensik": 1
          },
          "response_time": 2,
          "public_trust": 61
        }
      }
    },
    "military": {
      "infantry": 51965,
      "tanks": 132,
      "aircraft": 186,
      "naval": 18,
      "air_base": 3,
      "naval_base": 1,
      "military_base": 2,
      "nuclear": false,
      "strength": 42
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 491,
      "sell_commodity": 119
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 73
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 59
      },
      "income": {
        "rate": 15,
        "satisfaction": 55
      },
      "customs": {
        "rate": 5,
        "satisfaction": 81
      },
      "environment": {
        "rate": 1,
        "satisfaction": 88
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 52,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 72,
      "commercial": 70,
      "industrial": 63
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 12,
        "hard_power": 6,
        "diplomatic_prestige": 44
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 70,
      "education": 67,
      "security": 63,
      "finance": 84,
      "environment": 59
    }
  },
  {
    "name_en": "Cape Verde",
    "capital": "Unknown",
    "name_id": "Cabo Verde",
    "lon": -24,
    "lat": 16,
    "flag": "🇨🇻",
    "pop": "45M",
    "budget": "Rp 497 T",
    "income": "Rp 888 T",
    "religion": "Katolik",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 1,
      "solar_plant": 39,
      "thermal_plant": 1,
      "gas_plant": 3,
      "wind_plant": 9,
      "power_grid": 85,
      "bicycle_path": 90,
      "subway": 2,
      "railway": 301,
      "highway": 544,
      "road_quality": 83,
      "sea_port": 6,
      "airport": 6,
      "internet_coverage": 66,
      "tech_stack": 76,
      "water_access": 98
    },
    "sector_extraction": {
      "gold": 27,
      "uranium": 0,
      "coal": 319,
      "oil": 394,
      "gas": 278,
      "salt": 13,
      "nickel": 164,
      "lithium": 9,
      "aluminum": 12,
      "copper": 180,
      "rare_earth": 134,
      "iron_ore": 451,
      "strength": 39.11808960898845
    },
    "sector_manufacturing": {
      "semiconductor": 501,
      "car": 400,
      "motorcycle": 245,
      "smelter": 40,
      "concrete_cement": 135,
      "wood": 194,
      "mineral_water": 291,
      "sugar": 90,
      "bread": 130,
      "pharmacy": 127,
      "fertilizer": 40,
      "meat_processing": 69,
      "instant_noodle": 392,
      "strength": 62.39761201123556
    },
    "sector_livestock": {
      "chicken": 445,
      "poultry": 232,
      "dairy_cow": 66,
      "beef_cow": 47,
      "sheep_goat": 31,
      "shrimp": 205,
      "fish": 336,
      "shellfish": 33,
      "strength": 20.838567206741338
    },
    "sector_agriculture": {
      "rice": 456,
      "wheat": 420,
      "corn": 4,
      "tubers": 167,
      "soy": 32,
      "palm_oil": 264,
      "tea": 100,
      "coffee": 38,
      "cocoa": 107,
      "sugarcane": 189,
      "vegetables": 97,
      "strength": 60.11808960898845
    },
    "sector_defense": {
      "prison": 34,
      "barracks": 118,
      "armory": 2,
      "tank_hangar": 11,
      "military_academy": 2,
      "budget": 60,
      "personnel": 78881,
      "strength": 59.11808960898845,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 164,
          "apc": 221,
          "artileri_berat": 49
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 34,
          "helikopter_serang": 24,
          "pesawat_pengintai": 7
        },
        "total_unit": 1068,
        "readiness": 88
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 10,
      "military_naval_base": 1,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 30,
      "cyber_defense": 11,
      "intelligence": 44,
      "strategic_operations": {
        "attack_mission": 8,
        "spy_mission": 17,
        "sabotage_mission": 4,
        "territory_management": 17,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 1,
        "cyber_ops": 31
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 371,
        "elementary_school": 616,
        "middle_school": 177,
        "high_school": 574,
        "university": 68,
        "education_institute": 116,
        "laboratory": 126,
        "observatory": 20,
        "research_center": 47,
        "development_center": 11,
        "literacy": 91,
        "research_index": 9
      },
      "health": {
        "large_hospital": 10,
        "small_hospital": 29,
        "diagnostic_center": 10,
        "hospital_beds": 52060,
        "life_expectancy": 77,
        "healthcare_index": 73
      },
      "sports": {
        "swimming_pool": 38,
        "racing_circuit": 1,
        "stadium": 11,
        "international_stadium": 2,
        "olympic_score": 16,
        "popularity": 27
      },
      "law": {
        "legal_aid_center": 34,
        "court": 37,
        "prosecution_office": 54,
        "police_station": 324,
        "police_car_fleet": 2728,
        "police_academy": 2,
        "corruption_index": 7,
        "security_index": 45,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 744,
            "sepeda_motor": 264,
            "unit_k9": 34
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 17,
            "anti_huru_hara": 292
          },
          "pusat_komando": {
            "stasiun_polisi": 71,
            "kamera_surveillance": 18187,
            "pusat_forensik": 1
          },
          "response_time": 8,
          "public_trust": 83
        }
      }
    },
    "military": {
      "infantry": 64376,
      "tanks": 231,
      "aircraft": 244,
      "naval": 43,
      "air_base": 5,
      "naval_base": 2,
      "military_base": 5,
      "nuclear": false,
      "strength": 31
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 139,
      "sell_commodity": 204
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 78
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 65
      },
      "income": {
        "rate": 15,
        "satisfaction": 84
      },
      "customs": {
        "rate": 5,
        "satisfaction": 83
      },
      "environment": {
        "rate": 1,
        "satisfaction": 80
      },
      "other": {
        "rate": 2,
        "satisfaction": 94
      }
    },
    "demand": {
      "satisfaction": 55,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 76,
      "commercial": 42,
      "industrial": 71
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 16,
        "hard_power": 20,
        "diplomatic_prestige": 43
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 77,
      "education": 61,
      "security": 63,
      "finance": 55,
      "environment": 76
    }
  },
  {
    "name_en": "Chad",
    "capital": "N'Djamena",
    "name_id": "Chad",
    "lon": 19,
    "lat": 15,
    "flag": "🇹🇩",
    "pop": "18M",
    "budget": "Rp 593 T",
    "income": "Rp 703 T",
    "religion": "Konghucu",
    "ideology": "Komunisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 5,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 81,
      "bicycle_path": 21,
      "subway": 0,
      "railway": 63,
      "highway": 54,
      "road_quality": 61,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 79,
      "tech_stack": 47,
      "water_access": 93
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 23,
      "oil": 1,
      "gas": 18,
      "salt": 0,
      "nickel": 26,
      "lithium": 21,
      "aluminum": 3,
      "copper": 7,
      "rare_earth": 5,
      "iron_ore": 15,
      "strength": 25.19599442800289
    },
    "sector_manufacturing": {
      "semiconductor": 19,
      "car": 52,
      "motorcycle": 27,
      "smelter": 44,
      "concrete_cement": 46,
      "wood": 6,
      "mineral_water": 67,
      "sugar": 25,
      "bread": 18,
      "pharmacy": 22,
      "fertilizer": 18,
      "meat_processing": 28,
      "instant_noodle": 17,
      "strength": 9.994993035003613
    },
    "sector_livestock": {
      "chicken": 0,
      "poultry": 4,
      "dairy_cow": 24,
      "beef_cow": 24,
      "sheep_goat": 7,
      "shrimp": 17,
      "fish": 14,
      "shellfish": 23,
      "strength": 39.396995821002164
    },
    "sector_agriculture": {
      "rice": 22,
      "wheat": 21,
      "corn": 14,
      "tubers": 22,
      "soy": 29,
      "palm_oil": 32,
      "tea": 24,
      "coffee": 23,
      "cocoa": 26,
      "sugarcane": 33,
      "vegetables": 52,
      "strength": 3.1959944280028907
    },
    "sector_defense": {
      "prison": 9,
      "barracks": 24,
      "armory": 2,
      "tank_hangar": 1,
      "military_academy": 1,
      "budget": 10,
      "personnel": 41449,
      "strength": 25.19599442800289,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 66,
          "apc": 100,
          "artileri_berat": 48
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 7,
          "helikopter_serang": 12,
          "pesawat_pengintai": 3
        },
        "total_unit": 718,
        "readiness": 86
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 2,
      "cyber_defense": 2,
      "intelligence": 6,
      "strategic_operations": {
        "attack_mission": 2,
        "spy_mission": 17,
        "sabotage_mission": 7,
        "territory_management": 95,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 5,
        "cyber_ops": 5
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 103,
        "elementary_school": 234,
        "middle_school": 229,
        "high_school": 115,
        "university": 18,
        "education_institute": 34,
        "laboratory": 25,
        "observatory": 0,
        "research_center": 2,
        "development_center": 15,
        "literacy": 80,
        "research_index": 1
      },
      "health": {
        "large_hospital": 7,
        "small_hospital": 23,
        "diagnostic_center": 11,
        "hospital_beds": 9843,
        "life_expectancy": 69,
        "healthcare_index": 89
      },
      "sports": {
        "swimming_pool": 27,
        "racing_circuit": 0,
        "stadium": 3,
        "international_stadium": 0,
        "olympic_score": 4,
        "popularity": 47
      },
      "law": {
        "legal_aid_center": 32,
        "court": 8,
        "prosecution_office": 12,
        "police_station": 114,
        "police_car_fleet": 308,
        "police_academy": 2,
        "corruption_index": 5,
        "security_index": 20,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 534,
            "sepeda_motor": 202,
            "unit_k9": 20
          },
          "taktis_khusus": {
            "swat": 14,
            "helikopter_polisi": 7,
            "anti_huru_hara": 65
          },
          "pusat_komando": {
            "stasiun_polisi": 25,
            "kamera_surveillance": 8617,
            "pusat_forensik": 1
          },
          "response_time": 4,
          "public_trust": 82
        }
      }
    },
    "military": {
      "infantry": 72898,
      "tanks": 1808,
      "aircraft": 495,
      "naval": 78,
      "air_base": 5,
      "naval_base": 1,
      "military_base": 9,
      "nuclear": false,
      "strength": 17
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 542,
      "sell_commodity": 650
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 63
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 72
      },
      "income": {
        "rate": 15,
        "satisfaction": 65
      },
      "customs": {
        "rate": 5,
        "satisfaction": 85
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 87
      }
    },
    "demand": {
      "satisfaction": 77,
      "top_demands": [
        "Bantuan Sembako",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 68,
      "commercial": 86,
      "industrial": 57
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 11,
        "hard_power": 7,
        "diplomatic_prestige": 67
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 81,
      "education": 75,
      "security": 73,
      "finance": 52,
      "environment": 61
    }
  },
  {
    "name_en": "Chile",
    "capital": "Santiago",
    "name_id": "Chili",
    "lon": -71,
    "lat": -30,
    "flag": "🇨🇱",
    "pop": "46M",
    "budget": "Rp 693 T",
    "income": "Rp 112 T",
    "religion": "Hindu",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 19,
      "thermal_plant": 1,
      "gas_plant": 0,
      "wind_plant": 3,
      "power_grid": 78,
      "bicycle_path": 111,
      "subway": 1,
      "railway": 106,
      "highway": 41,
      "road_quality": 87,
      "sea_port": 1,
      "airport": 0,
      "internet_coverage": 98,
      "tech_stack": 44,
      "water_access": 75
    },
    "sector_extraction": {
      "gold": 24,
      "uranium": 0,
      "coal": 99,
      "oil": 189,
      "gas": 174,
      "salt": 45,
      "nickel": 118,
      "lithium": 19,
      "aluminum": 23,
      "copper": 71,
      "rare_earth": 87,
      "iron_ore": 42,
      "strength": 17.9412291765354
    },
    "sector_manufacturing": {
      "semiconductor": 240,
      "car": 118,
      "motorcycle": 41,
      "smelter": 88,
      "concrete_cement": 68,
      "wood": 110,
      "mineral_water": 147,
      "sugar": 6,
      "bread": 126,
      "pharmacy": 48,
      "fertilizer": 42,
      "meat_processing": 34,
      "instant_noodle": 93,
      "strength": 21.676536470669255
    },
    "sector_livestock": {
      "chicken": 103,
      "poultry": 117,
      "dairy_cow": 132,
      "beef_cow": 106,
      "sheep_goat": 10,
      "shrimp": 114,
      "fish": 5,
      "shellfish": 38,
      "strength": 42.205921882401555
    },
    "sector_agriculture": {
      "rice": 195,
      "wheat": 180,
      "corn": 132,
      "tubers": 7,
      "soy": 36,
      "palm_oil": 21,
      "tea": 9,
      "coffee": 102,
      "cocoa": 2,
      "sugarcane": 120,
      "vegetables": 205,
      "strength": 44.9412291765354
    },
    "sector_defense": {
      "prison": 25,
      "barracks": 18,
      "armory": 8,
      "tank_hangar": 6,
      "military_academy": 1,
      "budget": 49,
      "personnel": 99038,
      "strength": 24.9412291765354,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 145,
          "apc": 395,
          "artileri_berat": 48
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 5,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 12,
          "helikopter_serang": 26,
          "pesawat_pengintai": 2
        },
        "total_unit": 793,
        "readiness": 93
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 6,
      "military_naval_base": 1,
      "arms_factory": 3,
      "nuclear_status": false,
      "space_program": 8,
      "cyber_defense": 21,
      "intelligence": 8,
      "strategic_operations": {
        "attack_mission": 2,
        "spy_mission": 18,
        "sabotage_mission": 9,
        "territory_management": 76,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 2,
        "radar_network": 14,
        "cyber_ops": 9
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 261,
        "elementary_school": 338,
        "middle_school": 156,
        "high_school": 373,
        "university": 58,
        "education_institute": 24,
        "laboratory": 67,
        "observatory": 13,
        "research_center": 7,
        "development_center": 32,
        "literacy": 73,
        "research_index": 13
      },
      "health": {
        "large_hospital": 17,
        "small_hospital": 133,
        "diagnostic_center": 47,
        "hospital_beds": 6104,
        "life_expectancy": 67,
        "healthcare_index": 60
      },
      "sports": {
        "swimming_pool": 112,
        "racing_circuit": 0,
        "stadium": 5,
        "international_stadium": 1,
        "olympic_score": 25,
        "popularity": 46
      },
      "law": {
        "legal_aid_center": 66,
        "court": 38,
        "prosecution_office": 24,
        "police_station": 309,
        "police_car_fleet": 487,
        "police_academy": 3,
        "corruption_index": 41,
        "security_index": 4,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 707,
            "sepeda_motor": 439,
            "unit_k9": 24
          },
          "taktis_khusus": {
            "swat": 14,
            "helikopter_polisi": 7,
            "anti_huru_hara": 202
          },
          "pusat_komando": {
            "stasiun_polisi": 25,
            "kamera_surveillance": 15071,
            "pusat_forensik": 1
          },
          "response_time": 4,
          "public_trust": 83
        }
      }
    },
    "military": {
      "infantry": 77928,
      "tanks": 242,
      "aircraft": 14,
      "naval": 43,
      "air_base": 1,
      "naval_base": 2,
      "military_base": 9,
      "nuclear": false,
      "strength": 19
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 203,
      "sell_commodity": 467
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 62
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 54
      },
      "income": {
        "rate": 15,
        "satisfaction": 71
      },
      "customs": {
        "rate": 5,
        "satisfaction": 75
      },
      "environment": {
        "rate": 1,
        "satisfaction": 85
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 55,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 79,
      "commercial": 69,
      "industrial": 76
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 17,
        "hard_power": 8,
        "diplomatic_prestige": 59
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 86,
      "education": 73,
      "security": 56,
      "finance": 52,
      "environment": 55
    }
  },
  {
    "name_en": "Czechia",
    "capital": "Prague",
    "name_id": "Ceko",
    "lon": 15.5,
    "lat": 49.75,
    "flag": "🇨🇿",
    "pop": "7M",
    "budget": "Rp 238 T",
    "income": "Rp 684 T",
    "religion": "Islam",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 3,
      "thermal_plant": 1,
      "gas_plant": 0,
      "wind_plant": 2,
      "power_grid": 70,
      "bicycle_path": 160,
      "subway": 0,
      "railway": 191,
      "highway": 94,
      "road_quality": 79,
      "sea_port": 3,
      "airport": 4,
      "internet_coverage": 64,
      "tech_stack": 89,
      "water_access": 87
    },
    "sector_extraction": {
      "gold": 30,
      "uranium": 0,
      "coal": 166,
      "oil": 312,
      "gas": 41,
      "salt": 158,
      "nickel": 34,
      "lithium": 14,
      "aluminum": 9,
      "copper": 14,
      "rare_earth": 72,
      "iron_ore": 67,
      "strength": 33.41684090981847
    },
    "sector_manufacturing": {
      "semiconductor": 48,
      "car": 231,
      "motorcycle": 190,
      "smelter": 168,
      "concrete_cement": 13,
      "wood": 87,
      "mineral_water": 278,
      "sugar": 8,
      "bread": 81,
      "pharmacy": 12,
      "fertilizer": 122,
      "meat_processing": 66,
      "instant_noodle": 17,
      "strength": 52.77105113727308
    },
    "sector_livestock": {
      "chicken": 20,
      "poultry": 29,
      "dairy_cow": 13,
      "beef_cow": 38,
      "sheep_goat": 17,
      "shrimp": 25,
      "fish": 101,
      "shellfish": 68,
      "strength": 21.062630682363853
    },
    "sector_agriculture": {
      "rice": 42,
      "wheat": 65,
      "corn": 157,
      "tubers": 161,
      "soy": 77,
      "palm_oil": 9,
      "tea": 116,
      "coffee": 96,
      "cocoa": 4,
      "sugarcane": 71,
      "vegetables": 115,
      "strength": 33.41684090981847
    },
    "sector_defense": {
      "prison": 24,
      "barracks": 60,
      "armory": 6,
      "tank_hangar": 8,
      "military_academy": 1,
      "budget": 49,
      "personnel": 64310,
      "strength": 21.416840909818468,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 151,
          "apc": 331,
          "artileri_berat": 31
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 7,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 6,
          "helikopter_serang": 59,
          "pesawat_pengintai": 10
        },
        "total_unit": 1053,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 5,
      "military_naval_base": 2,
      "arms_factory": 4,
      "nuclear_status": false,
      "space_program": 20,
      "cyber_defense": 4,
      "intelligence": 25,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 1,
        "sabotage_mission": 8,
        "territory_management": 0,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 19,
        "cyber_ops": 23
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 194,
        "elementary_school": 626,
        "middle_school": 645,
        "high_school": 243,
        "university": 17,
        "education_institute": 146,
        "laboratory": 87,
        "observatory": 3,
        "research_center": 33,
        "development_center": 19,
        "literacy": 76,
        "research_index": 21
      },
      "health": {
        "large_hospital": 31,
        "small_hospital": 154,
        "diagnostic_center": 24,
        "hospital_beds": 31001,
        "life_expectancy": 64,
        "healthcare_index": 65
      },
      "sports": {
        "swimming_pool": 110,
        "racing_circuit": 2,
        "stadium": 8,
        "international_stadium": 0,
        "olympic_score": 6,
        "popularity": 99
      },
      "law": {
        "legal_aid_center": 23,
        "court": 6,
        "prosecution_office": 7,
        "police_station": 357,
        "police_car_fleet": 343,
        "police_academy": 3,
        "corruption_index": 53,
        "security_index": 58,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 811,
            "sepeda_motor": 240,
            "unit_k9": 56
          },
          "taktis_khusus": {
            "swat": 21,
            "helikopter_polisi": 12,
            "anti_huru_hara": 61
          },
          "pusat_komando": {
            "stasiun_polisi": 64,
            "kamera_surveillance": 16636,
            "pusat_forensik": 1
          },
          "response_time": 5,
          "public_trust": 52
        }
      }
    },
    "military": {
      "infantry": 84400,
      "tanks": 803,
      "aircraft": 208,
      "naval": 92,
      "air_base": 4,
      "naval_base": 2,
      "military_base": 8,
      "nuclear": false,
      "strength": 10
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 255,
      "sell_commodity": 251
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 85
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 74
      },
      "income": {
        "rate": 15,
        "satisfaction": 81
      },
      "customs": {
        "rate": 5,
        "satisfaction": 85
      },
      "environment": {
        "rate": 1,
        "satisfaction": 87
      },
      "other": {
        "rate": 2,
        "satisfaction": 91
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Subsidisi Listrik"
      ],
      "residential": 84,
      "commercial": 77,
      "industrial": 85
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 17,
        "hard_power": 14,
        "diplomatic_prestige": 58
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 58,
      "education": 60,
      "security": 77,
      "finance": 70,
      "environment": 79
    }
  },
  {
    "name_en": "Denmark",
    "capital": "Copenhagen",
    "name_id": "Denmark",
    "lon": 10,
    "lat": 56,
    "flag": "🇩🇰",
    "pop": "27M",
    "budget": "Rp 623 T",
    "income": "Rp 337 T",
    "religion": "Taoisme",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 25,
      "thermal_plant": 4,
      "gas_plant": 0,
      "wind_plant": 3,
      "power_grid": 88,
      "bicycle_path": 73,
      "subway": 0,
      "railway": 220,
      "highway": 178,
      "road_quality": 59,
      "sea_port": 2,
      "airport": 5,
      "internet_coverage": 81,
      "tech_stack": 59,
      "water_access": 96
    },
    "sector_extraction": {
      "gold": 13,
      "uranium": 0,
      "coal": 30,
      "oil": 118,
      "gas": 63,
      "salt": 130,
      "nickel": 162,
      "lithium": 19,
      "aluminum": 9,
      "copper": 26,
      "rare_earth": 35,
      "iron_ore": 43,
      "strength": 32.2400453980364
    },
    "sector_manufacturing": {
      "semiconductor": 68,
      "car": 146,
      "motorcycle": 96,
      "smelter": 188,
      "concrete_cement": 232,
      "wood": 49,
      "mineral_water": 301,
      "sugar": 147,
      "bread": 128,
      "pharmacy": 105,
      "fertilizer": 133,
      "meat_processing": 92,
      "instant_noodle": 304,
      "strength": 47.300056747545504
    },
    "sector_livestock": {
      "chicken": 337,
      "poultry": 251,
      "dairy_cow": 191,
      "beef_cow": 24,
      "sheep_goat": 28,
      "shrimp": 128,
      "fish": 178,
      "shellfish": 64,
      "strength": 31.180034048527304
    },
    "sector_agriculture": {
      "rice": 325,
      "wheat": 289,
      "corn": 335,
      "tubers": 268,
      "soy": 7,
      "palm_oil": 132,
      "tea": 79,
      "coffee": 147,
      "cocoa": 132,
      "sugarcane": 55,
      "vegetables": 97,
      "strength": 50.2400453980364
    },
    "sector_defense": {
      "prison": 7,
      "barracks": 100,
      "armory": 2,
      "tank_hangar": 14,
      "military_academy": 3,
      "budget": 28,
      "personnel": 191155,
      "strength": 22.2400453980364,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 121,
          "apc": 431,
          "artileri_berat": 142
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 25,
          "helikopter_serang": 45,
          "pesawat_pengintai": 14
        },
        "total_unit": 1066,
        "readiness": 91
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 1,
      "military_naval_base": 1,
      "arms_factory": 2,
      "nuclear_status": false,
      "space_program": 19,
      "cyber_defense": 28,
      "intelligence": 32,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 12,
        "sabotage_mission": 2,
        "territory_management": 42,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 3,
        "radar_network": 2,
        "cyber_ops": 11
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 187,
        "elementary_school": 486,
        "middle_school": 307,
        "high_school": 257,
        "university": 28,
        "education_institute": 111,
        "laboratory": 113,
        "observatory": 9,
        "research_center": 16,
        "development_center": 47,
        "literacy": 82,
        "research_index": 28
      },
      "health": {
        "large_hospital": 33,
        "small_hospital": 110,
        "diagnostic_center": 84,
        "hospital_beds": 36697,
        "life_expectancy": 68,
        "healthcare_index": 67
      },
      "sports": {
        "swimming_pool": 174,
        "racing_circuit": 2,
        "stadium": 6,
        "international_stadium": 1,
        "olympic_score": 23,
        "popularity": 4
      },
      "law": {
        "legal_aid_center": 72,
        "court": 42,
        "prosecution_office": 24,
        "police_station": 138,
        "police_car_fleet": 824,
        "police_academy": 8,
        "corruption_index": 12,
        "security_index": 90,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1681,
            "sepeda_motor": 274,
            "unit_k9": 69
          },
          "taktis_khusus": {
            "swat": 48,
            "helikopter_polisi": 5,
            "anti_huru_hara": 108
          },
          "pusat_komando": {
            "stasiun_polisi": 76,
            "kamera_surveillance": 18941,
            "pusat_forensik": 4
          },
          "response_time": 9,
          "public_trust": 80
        }
      }
    },
    "military": {
      "infantry": 88283,
      "tanks": 1496,
      "aircraft": 10,
      "naval": 12,
      "air_base": 5,
      "naval_base": 2,
      "military_base": 5,
      "nuclear": false,
      "strength": 26
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 97,
      "sell_commodity": 500
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 87
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 57
      },
      "income": {
        "rate": 15,
        "satisfaction": 57
      },
      "customs": {
        "rate": 5,
        "satisfaction": 81
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 94
      }
    },
    "demand": {
      "satisfaction": 61,
      "top_demands": [
        "Bantuan Sembako",
        "Subsidisi Listrik"
      ],
      "residential": 42,
      "commercial": 43,
      "industrial": 48
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 18,
        "hard_power": 15,
        "diplomatic_prestige": 40
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 79,
      "education": 64,
      "security": 51,
      "finance": 78,
      "environment": 56
    }
  },
  {
    "name_en": "Djibouti",
    "capital": "Djibouti City",
    "name_id": "Djibouti",
    "lon": 43,
    "lat": 11.5,
    "flag": "🇩🇯",
    "pop": "27M",
    "budget": "Rp 674 T",
    "income": "Rp 853 T",
    "religion": "Ateisme",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 2,
      "solar_plant": 26,
      "thermal_plant": 2,
      "gas_plant": 1,
      "wind_plant": 3,
      "power_grid": 87,
      "bicycle_path": 71,
      "subway": 0,
      "railway": 79,
      "highway": 63,
      "road_quality": 74,
      "sea_port": 4,
      "airport": 0,
      "internet_coverage": 83,
      "tech_stack": 81,
      "water_access": 80
    },
    "sector_extraction": {
      "gold": 22,
      "uranium": 0,
      "coal": 130,
      "oil": 73,
      "gas": 126,
      "salt": 113,
      "nickel": 45,
      "lithium": 1,
      "aluminum": 11,
      "copper": 48,
      "rare_earth": 76,
      "iron_ore": 60,
      "strength": 24.67896768063081
    },
    "sector_manufacturing": {
      "semiconductor": 118,
      "car": 194,
      "motorcycle": 186,
      "smelter": 165,
      "concrete_cement": 28,
      "wood": 45,
      "mineral_water": 6,
      "sugar": 28,
      "bread": 35,
      "pharmacy": 52,
      "fertilizer": 33,
      "meat_processing": 128,
      "instant_noodle": 130,
      "strength": 27.34870960078851
    },
    "sector_livestock": {
      "chicken": 11,
      "poultry": 187,
      "dairy_cow": 52,
      "beef_cow": 25,
      "sheep_goat": 54,
      "shrimp": 6,
      "fish": 75,
      "shellfish": 36,
      "strength": 15.009225760473107
    },
    "sector_agriculture": {
      "rice": 144,
      "wheat": 105,
      "corn": 56,
      "tubers": 73,
      "soy": 132,
      "palm_oil": 139,
      "tea": 69,
      "coffee": 72,
      "cocoa": 30,
      "sugarcane": 29,
      "vegetables": 180,
      "strength": 12.678967680630809
    },
    "sector_defense": {
      "prison": 29,
      "barracks": 38,
      "armory": 5,
      "tank_hangar": 5,
      "military_academy": 2,
      "budget": 38,
      "personnel": 142672,
      "strength": 24.67896768063081,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 106,
          "apc": 236,
          "artileri_berat": 85
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 12,
          "helikopter_serang": 19,
          "pesawat_pengintai": 2
        },
        "total_unit": 797,
        "readiness": 80
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 4,
      "military_naval_base": 1,
      "arms_factory": 2,
      "nuclear_status": false,
      "space_program": 7,
      "cyber_defense": 19,
      "intelligence": 21,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 12,
        "sabotage_mission": 0,
        "territory_management": 52,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 2,
        "radar_network": 15,
        "cyber_ops": 10
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 168,
        "elementary_school": 412,
        "middle_school": 523,
        "high_school": 134,
        "university": 57,
        "education_institute": 74,
        "laboratory": 50,
        "observatory": 8,
        "research_center": 3,
        "development_center": 12,
        "literacy": 99,
        "research_index": 21
      },
      "health": {
        "large_hospital": 21,
        "small_hospital": 38,
        "diagnostic_center": 33,
        "hospital_beds": 8580,
        "life_expectancy": 63,
        "healthcare_index": 85
      },
      "sports": {
        "swimming_pool": 108,
        "racing_circuit": 1,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 1,
        "popularity": 58
      },
      "law": {
        "legal_aid_center": 50,
        "court": 43,
        "prosecution_office": 10,
        "police_station": 284,
        "police_car_fleet": 1472,
        "police_academy": 5,
        "corruption_index": 68,
        "security_index": 34,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 799,
            "sepeda_motor": 503,
            "unit_k9": 64
          },
          "taktis_khusus": {
            "swat": 15,
            "helikopter_polisi": 15,
            "anti_huru_hara": 100
          },
          "pusat_komando": {
            "stasiun_polisi": 52,
            "kamera_surveillance": 8154,
            "pusat_forensik": 2
          },
          "response_time": 4,
          "public_trust": 72
        }
      }
    },
    "military": {
      "infantry": 29777,
      "tanks": 1934,
      "aircraft": 319,
      "naval": 79,
      "air_base": 3,
      "naval_base": 0,
      "military_base": 4,
      "nuclear": false,
      "strength": 39
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 156,
      "sell_commodity": 418
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 72
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 53
      },
      "income": {
        "rate": 15,
        "satisfaction": 87
      },
      "customs": {
        "rate": 5,
        "satisfaction": 79
      },
      "environment": {
        "rate": 1,
        "satisfaction": 80
      },
      "other": {
        "rate": 2,
        "satisfaction": 94
      }
    },
    "demand": {
      "satisfaction": 63,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 85,
      "commercial": 84,
      "industrial": 75
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 13,
        "hard_power": 10,
        "diplomatic_prestige": 46
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 67,
      "education": 83,
      "security": 52,
      "finance": 88,
      "environment": 63
    }
  },
  {
    "name_en": "Dominica",
    "capital": "Roseau",
    "name_id": "Dominika",
    "lon": -61.33333333,
    "lat": 15.41666666,
    "flag": "🇩🇲",
    "pop": "42M",
    "budget": "Rp 597 T",
    "income": "Rp 703 T",
    "religion": "Islam",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 0,
      "solar_plant": 9,
      "thermal_plant": 2,
      "gas_plant": 0,
      "wind_plant": 3,
      "power_grid": 98,
      "bicycle_path": 39,
      "subway": 0,
      "railway": 226,
      "highway": 64,
      "road_quality": 65,
      "sea_port": 6,
      "airport": 1,
      "internet_coverage": 72,
      "tech_stack": 61,
      "water_access": 83
    },
    "sector_extraction": {
      "gold": 10,
      "uranium": 0,
      "coal": 58,
      "oil": 191,
      "gas": 200,
      "salt": 96,
      "nickel": 171,
      "lithium": 14,
      "aluminum": 26,
      "copper": 146,
      "rare_earth": 110,
      "iron_ore": 221,
      "strength": 29.858947643187697
    },
    "sector_manufacturing": {
      "semiconductor": 139,
      "car": 234,
      "motorcycle": 86,
      "smelter": 208,
      "concrete_cement": 122,
      "wood": 152,
      "mineral_water": 176,
      "sugar": 62,
      "bread": 43,
      "pharmacy": 41,
      "fertilizer": 20,
      "meat_processing": 123,
      "instant_noodle": 142,
      "strength": 54.32368455398462
    },
    "sector_livestock": {
      "chicken": 149,
      "poultry": 224,
      "dairy_cow": 140,
      "beef_cow": 65,
      "sheep_goat": 95,
      "shrimp": 65,
      "fish": 31,
      "shellfish": 20,
      "strength": 16.39421073239077
    },
    "sector_agriculture": {
      "rice": 238,
      "wheat": 196,
      "corn": 214,
      "tubers": 181,
      "soy": 126,
      "palm_oil": 148,
      "tea": 103,
      "coffee": 52,
      "cocoa": 26,
      "sugarcane": 34,
      "vegetables": 252,
      "strength": 15.858947643187696
    },
    "sector_defense": {
      "prison": 34,
      "barracks": 70,
      "armory": 13,
      "tank_hangar": 13,
      "military_academy": 1,
      "budget": 46,
      "personnel": 48910,
      "strength": 30.858947643187697,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 126,
          "apc": 288,
          "artileri_berat": 22
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 7,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 25,
          "helikopter_serang": 53,
          "pesawat_pengintai": 3
        },
        "total_unit": 1291,
        "readiness": 97
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 1,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 3,
      "cyber_defense": 31,
      "intelligence": 10,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 14,
        "sabotage_mission": 8,
        "territory_management": 47,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 30,
        "cyber_ops": 13
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 205,
        "elementary_school": 398,
        "middle_school": 419,
        "high_school": 220,
        "university": 70,
        "education_institute": 67,
        "laboratory": 51,
        "observatory": 13,
        "research_center": 8,
        "development_center": 6,
        "literacy": 95,
        "research_index": 26
      },
      "health": {
        "large_hospital": 15,
        "small_hospital": 51,
        "diagnostic_center": 39,
        "hospital_beds": 25344,
        "life_expectancy": 61,
        "healthcare_index": 79
      },
      "sports": {
        "swimming_pool": 41,
        "racing_circuit": 1,
        "stadium": 4,
        "international_stadium": 0,
        "olympic_score": 13,
        "popularity": 9
      },
      "law": {
        "legal_aid_center": 54,
        "court": 28,
        "prosecution_office": 36,
        "police_station": 304,
        "police_car_fleet": 1247,
        "police_academy": 2,
        "corruption_index": 70,
        "security_index": 5,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1136,
            "sepeda_motor": 222,
            "unit_k9": 64
          },
          "taktis_khusus": {
            "swat": 40,
            "helikopter_polisi": 6,
            "anti_huru_hara": 112
          },
          "pusat_komando": {
            "stasiun_polisi": 42,
            "kamera_surveillance": 21056,
            "pusat_forensik": 2
          },
          "response_time": 2,
          "public_trust": 75
        }
      }
    },
    "military": {
      "infantry": 15373,
      "tanks": 749,
      "aircraft": 205,
      "naval": 21,
      "air_base": 4,
      "naval_base": 1,
      "military_base": 8,
      "nuclear": false,
      "strength": 44
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 500,
      "sell_commodity": 638
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 97
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 51
      },
      "income": {
        "rate": 15,
        "satisfaction": 56
      },
      "customs": {
        "rate": 5,
        "satisfaction": 80
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 87,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Subsidisi Listrik"
      ],
      "residential": 62,
      "commercial": 50,
      "industrial": 84
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 21,
        "hard_power": 10,
        "diplomatic_prestige": 54
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 68,
      "education": 50,
      "security": 78,
      "finance": 59,
      "environment": 59
    }
  },
  {
    "name_en": "Indonesia",
    "capital": "Jakarta",
    "name_id": "Indonesia",
    "lon": 120,
    "lat": -5,
    "flag": "🇮🇩",
    "pop": "48M",
    "budget": "Rp 374 T",
    "income": "Rp 216 T",
    "religion": "Katolik",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 1,
      "solar_plant": 16,
      "thermal_plant": 8,
      "gas_plant": 1,
      "wind_plant": 8,
      "power_grid": 81,
      "bicycle_path": 43,
      "subway": 4,
      "railway": 221,
      "highway": 274,
      "road_quality": 89,
      "sea_port": 3,
      "airport": 9,
      "internet_coverage": 63,
      "tech_stack": 81,
      "water_access": 78
    },
    "sector_extraction": {
      "gold": 68,
      "uranium": 0,
      "coal": 536,
      "oil": 58,
      "gas": 533,
      "salt": 155,
      "nickel": 269,
      "lithium": 8,
      "aluminum": 19,
      "copper": 28,
      "rare_earth": 130,
      "iron_ore": 117,
      "strength": 53.4799548981383
    },
    "sector_manufacturing": {
      "semiconductor": 191,
      "car": 259,
      "motorcycle": 453,
      "smelter": 239,
      "concrete_cement": 78,
      "wood": 115,
      "mineral_water": 235,
      "sugar": 135,
      "bread": 128,
      "pharmacy": 119,
      "fertilizer": 212,
      "meat_processing": 103,
      "instant_noodle": 367,
      "strength": 73.34994362267287
    },
    "sector_livestock": {
      "chicken": 543,
      "poultry": 460,
      "dairy_cow": 308,
      "beef_cow": 88,
      "sheep_goat": 269,
      "shrimp": 52,
      "fish": 462,
      "shellfish": 191,
      "strength": 42.60996617360372
    },
    "sector_agriculture": {
      "rice": 196,
      "wheat": 383,
      "corn": 386,
      "tubers": 425,
      "soy": 354,
      "palm_oil": 141,
      "tea": 162,
      "coffee": 273,
      "cocoa": 172,
      "sugarcane": 366,
      "vegetables": 206,
      "strength": 50.4799548981383
    },
    "sector_defense": {
      "prison": 16,
      "barracks": 155,
      "armory": 35,
      "tank_hangar": 1,
      "military_academy": 6,
      "budget": 109,
      "personnel": 240355,
      "strength": 64.4799548981383,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 287,
          "apc": 852,
          "artileri_berat": 100
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 10,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 39,
          "helikopter_serang": 15,
          "pesawat_pengintai": 7
        },
        "total_unit": 929,
        "readiness": 83
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 2,
      "military_naval_base": 3,
      "arms_factory": 5,
      "nuclear_status": false,
      "space_program": 42,
      "cyber_defense": 52,
      "intelligence": 6,
      "strategic_operations": {
        "attack_mission": 7,
        "spy_mission": 16,
        "sabotage_mission": 8,
        "territory_management": 99,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 1,
        "radar_network": 55,
        "cyber_ops": 61
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 766,
        "elementary_school": 588,
        "middle_school": 775,
        "high_school": 507,
        "university": 32,
        "education_institute": 170,
        "laboratory": 148,
        "observatory": 21,
        "research_center": 62,
        "development_center": 28,
        "literacy": 85,
        "research_index": 35
      },
      "health": {
        "large_hospital": 50,
        "small_hospital": 276,
        "diagnostic_center": 63,
        "hospital_beds": 54002,
        "life_expectancy": 76,
        "healthcare_index": 51
      },
      "sports": {
        "swimming_pool": 29,
        "racing_circuit": 2,
        "stadium": 11,
        "international_stadium": 2,
        "olympic_score": 17,
        "popularity": 31
      },
      "law": {
        "legal_aid_center": 61,
        "court": 80,
        "prosecution_office": 50,
        "police_station": 94,
        "police_car_fleet": 976,
        "police_academy": 7,
        "corruption_index": 96,
        "security_index": 28,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 516,
            "sepeda_motor": 1219,
            "unit_k9": 121
          },
          "taktis_khusus": {
            "swat": 22,
            "helikopter_polisi": 18,
            "anti_huru_hara": 112
          },
          "pusat_komando": {
            "stasiun_polisi": 66,
            "kamera_surveillance": 28983,
            "pusat_forensik": 7
          },
          "response_time": 2,
          "public_trust": 86
        }
      }
    },
    "military": {
      "infantry": 96151,
      "tanks": 1737,
      "aircraft": 102,
      "naval": 27,
      "air_base": 4,
      "naval_base": 1,
      "military_base": 5,
      "nuclear": false,
      "strength": 16
    },
    "un_vote": "Contra",
    "trade": {
      "buy_commodity": 355,
      "sell_commodity": 596
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 91
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 74
      },
      "income": {
        "rate": 15,
        "satisfaction": 50
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 92
      }
    },
    "demand": {
      "satisfaction": 66,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 83,
      "commercial": 77,
      "industrial": 42
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 33,
        "hard_power": 35,
        "diplomatic_prestige": 67
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 56,
      "education": 66,
      "security": 65,
      "finance": 55,
      "environment": 73
    }
  },
  {
    "name_en": "Russia",
    "capital": "Moscow",
    "name_id": "Rusia",
    "lon": 100,
    "lat": 60,
    "flag": "🇷🇺",
    "pop": "33M",
    "budget": "Rp 419 T",
    "income": "Rp 923 T",
    "religion": "Taoisme",
    "ideology": "Konservatisme",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 2,
      "solar_plant": 9,
      "thermal_plant": 2,
      "gas_plant": 2,
      "wind_plant": 6,
      "power_grid": 99,
      "bicycle_path": 121,
      "subway": 1,
      "railway": 76,
      "highway": 211,
      "road_quality": 85,
      "sea_port": 3,
      "airport": 2,
      "internet_coverage": 75,
      "tech_stack": 85,
      "water_access": 78
    },
    "sector_extraction": {
      "gold": 21,
      "uranium": 0,
      "coal": 143,
      "oil": 92,
      "gas": 209,
      "salt": 128,
      "nickel": 127,
      "lithium": 25,
      "aluminum": 13,
      "copper": 102,
      "rare_earth": 97,
      "iron_ore": 200,
      "strength": 36.217618306888376
    },
    "sector_manufacturing": {
      "semiconductor": 141,
      "car": 300,
      "motorcycle": 137,
      "smelter": 251,
      "concrete_cement": 24,
      "wood": 64,
      "mineral_water": 373,
      "sugar": 142,
      "bread": 97,
      "pharmacy": 33,
      "fertilizer": 121,
      "meat_processing": 154,
      "instant_noodle": 296,
      "strength": 37.02202288361047
    },
    "sector_livestock": {
      "chicken": 205,
      "poultry": 38,
      "dairy_cow": 39,
      "beef_cow": 127,
      "sheep_goat": 86,
      "shrimp": 123,
      "fish": 205,
      "shellfish": 67,
      "strength": 19.41321373016628
    },
    "sector_agriculture": {
      "rice": 374,
      "wheat": 286,
      "corn": 80,
      "tubers": 100,
      "soy": 77,
      "palm_oil": 58,
      "tea": 119,
      "coffee": 91,
      "cocoa": 115,
      "sugarcane": 146,
      "vegetables": 47,
      "strength": 17.217618306888376
    },
    "sector_defense": {
      "prison": 20,
      "barracks": 81,
      "armory": 3,
      "tank_hangar": 14,
      "military_academy": 1,
      "budget": 37,
      "personnel": 38974,
      "strength": 22.217618306888376,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 86,
          "apc": 532,
          "artileri_berat": 79
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 20,
          "helikopter_serang": 11,
          "pesawat_pengintai": 10
        },
        "total_unit": 1524,
        "readiness": 89
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 1,
      "arms_factory": 1,
      "nuclear_status": false,
      "space_program": 12,
      "cyber_defense": 32,
      "intelligence": 17,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 2,
        "sabotage_mission": 4,
        "territory_management": 43,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 37,
        "cyber_ops": 4
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 124,
        "elementary_school": 333,
        "middle_school": 614,
        "high_school": 199,
        "university": 67,
        "education_institute": 154,
        "laboratory": 51,
        "observatory": 12,
        "research_center": 27,
        "development_center": 50,
        "literacy": 78,
        "research_index": 32
      },
      "health": {
        "large_hospital": 36,
        "small_hospital": 73,
        "diagnostic_center": 15,
        "hospital_beds": 40560,
        "life_expectancy": 72,
        "healthcare_index": 73
      },
      "sports": {
        "swimming_pool": 127,
        "racing_circuit": 2,
        "stadium": 16,
        "international_stadium": 0,
        "olympic_score": 15,
        "popularity": 1
      },
      "law": {
        "legal_aid_center": 92,
        "court": 10,
        "prosecution_office": 19,
        "police_station": 289,
        "police_car_fleet": 468,
        "police_academy": 6,
        "corruption_index": 47,
        "security_index": 62,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1480,
            "sepeda_motor": 320,
            "unit_k9": 91
          },
          "taktis_khusus": {
            "swat": 28,
            "helikopter_polisi": 11,
            "anti_huru_hara": 253
          },
          "pusat_komando": {
            "stasiun_polisi": 22,
            "kamera_surveillance": 5026,
            "pusat_forensik": 2
          },
          "response_time": 7,
          "public_trust": 61
        }
      }
    },
    "military": {
      "infantry": 88991,
      "tanks": 1628,
      "aircraft": 334,
      "naval": 59,
      "air_base": 5,
      "naval_base": 2,
      "military_base": 6,
      "nuclear": false,
      "strength": 42
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 71,
      "sell_commodity": 436
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 93
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 60
      },
      "income": {
        "rate": 15,
        "satisfaction": 53
      },
      "customs": {
        "rate": 5,
        "satisfaction": 80
      },
      "environment": {
        "rate": 1,
        "satisfaction": 87
      },
      "other": {
        "rate": 2,
        "satisfaction": 93
      }
    },
    "demand": {
      "satisfaction": 60,
      "top_demands": [
        "Layanan Kesehatan Gratis",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 47,
      "commercial": 53,
      "industrial": 53
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Isolationist",
      "international_influence": {
        "soft_power": 19,
        "hard_power": 8,
        "diplomatic_prestige": 52
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Germany",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 83,
      "education": 57,
      "security": 58,
      "finance": 67,
      "environment": 50
    }
  },
  {
    "name_en": "China",
    "capital": "Beijing",
    "name_id": "China",
    "lon": 105,
    "lat": 35,
    "flag": "🇨🇳",
    "pop": "11M",
    "budget": "Rp 560 T",
    "income": "Rp 481 T",
    "religion": "Buddha",
    "ideology": "Monarki",
    "infrastructure": {
      "nuclear_plant": 1,
      "hydro_plant": 0,
      "solar_plant": 31,
      "thermal_plant": 0,
      "gas_plant": 2,
      "wind_plant": 6,
      "power_grid": 75,
      "bicycle_path": 127,
      "subway": 2,
      "railway": 150,
      "highway": 124,
      "road_quality": 70,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 77,
      "tech_stack": 81,
      "water_access": 81
    },
    "sector_extraction": {
      "gold": 36,
      "uranium": 0,
      "coal": 49,
      "oil": 309,
      "gas": 18,
      "salt": 178,
      "nickel": 95,
      "lithium": 30,
      "aluminum": 13,
      "copper": 190,
      "rare_earth": 133,
      "iron_ore": 371,
      "strength": 24.29175298557397
    },
    "sector_manufacturing": {
      "semiconductor": 285,
      "car": 24,
      "motorcycle": 146,
      "smelter": 55,
      "concrete_cement": 110,
      "wood": 58,
      "mineral_water": 19,
      "sugar": 18,
      "bread": 62,
      "pharmacy": 12,
      "fertilizer": 51,
      "meat_processing": 103,
      "instant_noodle": 198,
      "strength": 47.11469123196746
    },
    "sector_livestock": {
      "chicken": 127,
      "poultry": 217,
      "dairy_cow": 44,
      "beef_cow": 115,
      "sheep_goat": 111,
      "shrimp": 155,
      "fish": 26,
      "shellfish": 5,
      "strength": 28.468814739180477
    },
    "sector_agriculture": {
      "rice": 243,
      "wheat": 290,
      "corn": 94,
      "tubers": 216,
      "soy": 62,
      "palm_oil": 228,
      "tea": 65,
      "coffee": 115,
      "cocoa": 85,
      "sugarcane": 167,
      "vegetables": 102,
      "strength": 46.29175298557397
    },
    "sector_defense": {
      "prison": 42,
      "barracks": 73,
      "armory": 3,
      "tank_hangar": 10,
      "military_academy": 4,
      "budget": 5,
      "personnel": 28115,
      "strength": 46.29175298557397,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 99,
          "apc": 445,
          "artileri_berat": 105
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 6,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 13,
          "helikopter_serang": 65,
          "pesawat_pengintai": 6
        },
        "total_unit": 812,
        "readiness": 89
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 6,
      "military_naval_base": 3,
      "arms_factory": 5,
      "nuclear_status": false,
      "space_program": 26,
      "cyber_defense": 37,
      "intelligence": 29,
      "strategic_operations": {
        "attack_mission": 1,
        "spy_mission": 7,
        "sabotage_mission": 8,
        "territory_management": 44,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 2,
        "radar_network": 30,
        "cyber_ops": 35
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 469,
        "elementary_school": 322,
        "middle_school": 438,
        "high_school": 434,
        "university": 24,
        "education_institute": 123,
        "laboratory": 10,
        "observatory": 0,
        "research_center": 31,
        "development_center": 59,
        "literacy": 72,
        "research_index": 1
      },
      "health": {
        "large_hospital": 31,
        "small_hospital": 165,
        "diagnostic_center": 53,
        "hospital_beds": 21373,
        "life_expectancy": 60,
        "healthcare_index": 81
      },
      "sports": {
        "swimming_pool": 136,
        "racing_circuit": 0,
        "stadium": 15,
        "international_stadium": 0,
        "olympic_score": 32,
        "popularity": 66
      },
      "law": {
        "legal_aid_center": 107,
        "court": 59,
        "prosecution_office": 18,
        "police_station": 65,
        "police_car_fleet": 2011,
        "police_academy": 2,
        "corruption_index": 16,
        "security_index": 85,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1344,
            "sepeda_motor": 749,
            "unit_k9": 40
          },
          "taktis_khusus": {
            "swat": 11,
            "helikopter_polisi": 15,
            "anti_huru_hara": 153
          },
          "pusat_komando": {
            "stasiun_polisi": 32,
            "kamera_surveillance": 15322,
            "pusat_forensik": 2
          },
          "response_time": 10,
          "public_trust": 85
        }
      }
    },
    "military": {
      "infantry": 66059,
      "tanks": 675,
      "aircraft": 485,
      "naval": 30,
      "air_base": 3,
      "naval_base": 2,
      "military_base": 6,
      "nuclear": false,
      "strength": 49
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 539,
      "sell_commodity": 77
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 86
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 72
      },
      "income": {
        "rate": 15,
        "satisfaction": 63
      },
      "customs": {
        "rate": 5,
        "satisfaction": 77
      },
      "environment": {
        "rate": 1,
        "satisfaction": 88
      },
      "other": {
        "rate": 2,
        "satisfaction": 89
      }
    },
    "demand": {
      "satisfaction": 56,
      "top_demands": [
        "Bantuan Sembako",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 53,
      "commercial": 76,
      "industrial": 62
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 15,
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
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "France",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 78,
      "education": 81,
      "security": 85,
      "finance": 67,
      "environment": 74
    }
  },
  {
    "name_en": "United Kingdom",
    "capital": "London",
    "name_id": "Inggris",
    "lon": -2,
    "lat": 54,
    "flag": "🇬🇧",
    "pop": "26M",
    "budget": "Rp 855 T",
    "income": "Rp 222 T",
    "religion": "Kristen Ortodoks",
    "ideology": "Demokrasi",
    "infrastructure": {
      "nuclear_plant": 3,
      "hydro_plant": 1,
      "solar_plant": 55,
      "thermal_plant": 4,
      "gas_plant": 1,
      "wind_plant": 0,
      "power_grid": 88,
      "bicycle_path": 332,
      "subway": 2,
      "railway": 597,
      "highway": 219,
      "road_quality": 82,
      "sea_port": 11,
      "airport": 0,
      "internet_coverage": 92,
      "tech_stack": 54,
      "water_access": 79
    },
    "sector_extraction": {
      "gold": 20,
      "uranium": 0,
      "coal": 242,
      "oil": 23,
      "gas": 79,
      "salt": 394,
      "nickel": 196,
      "lithium": 24,
      "aluminum": 26,
      "copper": 64,
      "rare_earth": 296,
      "iron_ore": 638,
      "strength": 58.972583311587506
    },
    "sector_manufacturing": {
      "semiconductor": 361,
      "car": 295,
      "motorcycle": 286,
      "smelter": 355,
      "concrete_cement": 263,
      "wood": 302,
      "mineral_water": 613,
      "sugar": 80,
      "bread": 344,
      "pharmacy": 160,
      "fertilizer": 20,
      "meat_processing": 217,
      "instant_noodle": 375,
      "strength": 65.46572913948438
    },
    "sector_livestock": {
      "chicken": 149,
      "poultry": 432,
      "dairy_cow": 25,
      "beef_cow": 163,
      "sheep_goat": 52,
      "shrimp": 328,
      "fish": 456,
      "shellfish": 26,
      "strength": 48.47943748369063
    },
    "sector_agriculture": {
      "rice": 25,
      "wheat": 523,
      "corn": 580,
      "tubers": 534,
      "soy": 324,
      "palm_oil": 200,
      "tea": 24,
      "coffee": 94,
      "cocoa": 264,
      "sugarcane": 101,
      "vegetables": 477,
      "strength": 45.972583311587506
    },
    "sector_defense": {
      "prison": 48,
      "barracks": 79,
      "armory": 8,
      "tank_hangar": 3,
      "military_academy": 5,
      "budget": 33,
      "personnel": 188267,
      "strength": 50.972583311587506,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 309,
          "apc": 949,
          "artileri_berat": 256
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 12,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 6,
          "helikopter_serang": 47,
          "pesawat_pengintai": 20
        },
        "total_unit": 1085,
        "readiness": 88
      }
    },
    "sector_military_strategic": {
      "command_center": 2,
      "military_air_base": 13,
      "military_naval_base": 2,
      "arms_factory": 3,
      "nuclear_status": false,
      "space_program": 36,
      "cyber_defense": 0,
      "intelligence": 36,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 13,
        "sabotage_mission": 6,
        "territory_management": 85,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 60,
        "cyber_ops": 49
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 502,
        "elementary_school": 223,
        "middle_school": 638,
        "high_school": 359,
        "university": 65,
        "education_institute": 168,
        "laboratory": 124,
        "observatory": 17,
        "research_center": 13,
        "development_center": 17,
        "literacy": 99,
        "research_index": 56
      },
      "health": {
        "large_hospital": 62,
        "small_hospital": 160,
        "diagnostic_center": 65,
        "hospital_beds": 42132,
        "life_expectancy": 77,
        "healthcare_index": 61
      },
      "sports": {
        "swimming_pool": 139,
        "racing_circuit": 6,
        "stadium": 31,
        "international_stadium": 2,
        "olympic_score": 63,
        "popularity": 36
      },
      "law": {
        "legal_aid_center": 20,
        "court": 17,
        "prosecution_office": 11,
        "police_station": 751,
        "police_car_fleet": 2163,
        "police_academy": 13,
        "corruption_index": 58,
        "security_index": 39,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 2502,
            "sepeda_motor": 401,
            "unit_k9": 86
          },
          "taktis_khusus": {
            "swat": 50,
            "helikopter_polisi": 19,
            "anti_huru_hara": 384
          },
          "pusat_komando": {
            "stasiun_polisi": 125,
            "kamera_surveillance": 24434,
            "pusat_forensik": 7
          },
          "response_time": 3,
          "public_trust": 80
        }
      }
    },
    "military": {
      "infantry": 100026,
      "tanks": 306,
      "aircraft": 228,
      "naval": 51,
      "air_base": 5,
      "naval_base": 0,
      "military_base": 3,
      "nuclear": false,
      "strength": 25
    },
    "un_vote": "Neutral",
    "trade": {
      "buy_commodity": 475,
      "sell_commodity": 650
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 81
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 63
      },
      "income": {
        "rate": 15,
        "satisfaction": 72
      },
      "customs": {
        "rate": 5,
        "satisfaction": 87
      },
      "environment": {
        "rate": 1,
        "satisfaction": 84
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 56,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Penyediaan Lapangan Kerja"
      ],
      "residential": 62,
      "commercial": 80,
      "industrial": 57
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat",
        "Uni Eropa",
        "ASEAN"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 14,
        "hard_power": 38,
        "diplomatic_prestige": 68
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
        },
        {
          "name": "G20",
          "role": "Member"
        }
      ],
      "agreements": [
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Australia",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "India",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 78,
      "education": 75,
      "security": 59,
      "finance": 69,
      "environment": 56
    }
  },
  {
    "name_en": "France",
    "capital": "Paris",
    "name_id": "Prancis",
    "lon": 2,
    "lat": 46,
    "flag": "🇫🇷",
    "pop": "31M",
    "budget": "Rp 187 T",
    "income": "Rp 290 T",
    "religion": "Protestan",
    "ideology": "Liberalisme",
    "infrastructure": {
      "nuclear_plant": 0,
      "hydro_plant": 0,
      "solar_plant": 0,
      "thermal_plant": 0,
      "gas_plant": 0,
      "wind_plant": 0,
      "power_grid": 85,
      "bicycle_path": 0,
      "subway": 0,
      "railway": 1,
      "highway": 0,
      "road_quality": 66,
      "sea_port": 0,
      "airport": 0,
      "internet_coverage": 77,
      "tech_stack": 54,
      "water_access": 92
    },
    "sector_extraction": {
      "gold": 0,
      "uranium": 0,
      "coal": 0,
      "oil": 1,
      "gas": 0,
      "salt": 0,
      "nickel": 0,
      "lithium": 6,
      "aluminum": 0,
      "copper": 0,
      "rare_earth": 0,
      "iron_ore": 0,
      "strength": 2.056544943931085
    },
    "sector_manufacturing": {
      "semiconductor": 1,
      "car": 1,
      "motorcycle": 0,
      "smelter": 0,
      "concrete_cement": 0,
      "wood": 0,
      "mineral_water": 0,
      "sugar": 0,
      "bread": 0,
      "pharmacy": 0,
      "fertilizer": 0,
      "meat_processing": 0,
      "instant_noodle": 0,
      "strength": 37.070681179913855
    },
    "sector_livestock": {
      "chicken": 0,
      "poultry": 0,
      "dairy_cow": 0,
      "beef_cow": 0,
      "sheep_goat": 0,
      "shrimp": 0,
      "fish": 0,
      "shellfish": 0,
      "strength": 6.042408707948313
    },
    "sector_agriculture": {
      "rice": 0,
      "wheat": 0,
      "corn": 0,
      "tubers": 0,
      "soy": 0,
      "palm_oil": 0,
      "tea": 0,
      "coffee": 0,
      "cocoa": 0,
      "sugarcane": 0,
      "vegetables": 0,
      "strength": 36.05654494393109
    },
    "sector_defense": {
      "prison": 5,
      "barracks": 10,
      "armory": 2,
      "tank_hangar": 1,
      "military_academy": 1,
      "budget": 5,
      "personnel": 10331,
      "strength": 34.05654494393109,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 50,
          "apc": 100,
          "artileri_berat": 20
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 2,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 5,
          "helikopter_serang": 10,
          "pesawat_pengintai": 2
        },
        "total_unit": 501,
        "readiness": 80
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 1,
      "military_naval_base": 0,
      "arms_factory": 0,
      "nuclear_status": false,
      "space_program": 0,
      "cyber_defense": 0,
      "intelligence": 0,
      "strategic_operations": {
        "attack_mission": 0,
        "spy_mission": 0,
        "sabotage_mission": 0,
        "territory_management": 18,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 0,
        "radar_network": 0,
        "cyber_ops": 0
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 100,
        "elementary_school": 200,
        "middle_school": 150,
        "high_school": 100,
        "university": 10,
        "education_institute": 20,
        "laboratory": 5,
        "observatory": 0,
        "research_center": 2,
        "development_center": 5,
        "literacy": 77,
        "research_index": 0
      },
      "health": {
        "large_hospital": 5,
        "small_hospital": 20,
        "diagnostic_center": 10,
        "hospital_beds": 5091,
        "life_expectancy": 71,
        "healthcare_index": 58
      },
      "sports": {
        "swimming_pool": 20,
        "racing_circuit": 0,
        "stadium": 2,
        "international_stadium": 0,
        "olympic_score": 0,
        "popularity": 56
      },
      "law": {
        "legal_aid_center": 10,
        "court": 5,
        "prosecution_office": 5,
        "police_station": 50,
        "police_car_fleet": 205,
        "police_academy": 2,
        "corruption_index": 20,
        "security_index": 67,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 502,
            "sepeda_motor": 202,
            "unit_k9": 20
          },
          "taktis_khusus": {
            "swat": 10,
            "helikopter_polisi": 5,
            "anti_huru_hara": 50
          },
          "pusat_komando": {
            "stasiun_polisi": 20,
            "kamera_surveillance": 5016,
            "pusat_forensik": 1
          },
          "response_time": 7,
          "public_trust": 65
        }
      }
    },
    "military": {
      "infantry": 72932,
      "tanks": 1338,
      "aircraft": 434,
      "naval": 27,
      "air_base": 2,
      "naval_base": 1,
      "military_base": 11,
      "nuclear": false,
      "strength": 11
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 341,
      "sell_commodity": 124
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 87
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 65
      },
      "income": {
        "rate": 15,
        "satisfaction": 77
      },
      "customs": {
        "rate": 5,
        "satisfaction": 82
      },
      "environment": {
        "rate": 1,
        "satisfaction": 83
      },
      "other": {
        "rate": 2,
        "satisfaction": 85
      }
    },
    "demand": {
      "satisfaction": 72,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 62,
      "commercial": 86,
      "industrial": 68
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Neutral",
      "international_influence": {
        "soft_power": 10,
        "hard_power": 5,
        "diplomatic_prestige": 59
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
        {
          "partner": "Amerika Serikat",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "South Africa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United States",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "United Kingdom",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 74,
      "education": 70,
      "security": 89,
      "finance": 58,
      "environment": 62
    }
  },
  {
    "name_en": "Germany",
    "capital": "Berlin",
    "name_id": "Jerman",
    "lon": 9,
    "lat": 51,
    "flag": "🇩🇪",
    "pop": "32M",
    "budget": "Rp 633 T",
    "income": "Rp 174 T",
    "religion": "Katolik",
    "ideology": "Sosialisme",
    "infrastructure": {
      "nuclear_plant": 2,
      "hydro_plant": 4,
      "solar_plant": 47,
      "thermal_plant": 7,
      "gas_plant": 1,
      "wind_plant": 9,
      "power_grid": 90,
      "bicycle_path": 66,
      "subway": 4,
      "railway": 156,
      "highway": 554,
      "road_quality": 52,
      "sea_port": 0,
      "airport": 6,
      "internet_coverage": 93,
      "tech_stack": 68,
      "water_access": 84
    },
    "sector_extraction": {
      "gold": 50,
      "uranium": 0,
      "coal": 433,
      "oil": 591,
      "gas": 483,
      "salt": 188,
      "nickel": 38,
      "lithium": 20,
      "aluminum": 12,
      "copper": 310,
      "rare_earth": 129,
      "iron_ore": 10,
      "strength": 31.34507673172066
    },
    "sector_manufacturing": {
      "semiconductor": 270,
      "car": 273,
      "motorcycle": 549,
      "smelter": 67,
      "concrete_cement": 174,
      "wood": 176,
      "mineral_water": 529,
      "sugar": 46,
      "bread": 252,
      "pharmacy": 74,
      "fertilizer": 212,
      "meat_processing": 223,
      "instant_noodle": 163,
      "strength": 39.68134591465083
    },
    "sector_livestock": {
      "chicken": 227,
      "poultry": 228,
      "dairy_cow": 223,
      "beef_cow": 235,
      "sheep_goat": 59,
      "shrimp": 31,
      "fish": 302,
      "shellfish": 102,
      "strength": 26.008807548790497
    },
    "sector_agriculture": {
      "rice": 443,
      "wheat": 212,
      "corn": 195,
      "tubers": 181,
      "soy": 168,
      "palm_oil": 371,
      "tea": 32,
      "coffee": 223,
      "cocoa": 8,
      "sugarcane": 348,
      "vegetables": 166,
      "strength": 29.34507673172066
    },
    "sector_defense": {
      "prison": 61,
      "barracks": 43,
      "armory": 3,
      "tank_hangar": 18,
      "military_academy": 1,
      "budget": 64,
      "personnel": 164258,
      "strength": 35.34507673172066,
      "military_fleet": {
        "darat": {
          "main_battle_tank": 142,
          "apc": 1019,
          "artileri_berat": 173
        },
        "laut": {
          "kapal_induk": 0,
          "kapal_destroyer": 3,
          "kapal_selam_nuklir": 0
        },
        "udara": {
          "jet_tempur_stealth": 22,
          "helikopter_serang": 86,
          "pesawat_pengintai": 4
        },
        "total_unit": 1835,
        "readiness": 94
      }
    },
    "sector_military_strategic": {
      "command_center": 1,
      "military_air_base": 10,
      "military_naval_base": 3,
      "arms_factory": 7,
      "nuclear_status": false,
      "space_program": 30,
      "cyber_defense": 1,
      "intelligence": 22,
      "strategic_operations": {
        "attack_mission": 9,
        "spy_mission": 17,
        "sabotage_mission": 9,
        "territory_management": 87,
        "nuclear_program": 0
      },
      "intel_radar": {
        "satellite_system": 4,
        "radar_network": 62,
        "cyber_ops": 63
      }
    },
    "sector_social": {
      "education": {
        "kindergarten": 535,
        "elementary_school": 800,
        "middle_school": 586,
        "high_school": 264,
        "university": 99,
        "education_institute": 77,
        "laboratory": 68,
        "observatory": 24,
        "research_center": 7,
        "development_center": 11,
        "literacy": 95,
        "research_index": 12
      },
      "health": {
        "large_hospital": 26,
        "small_hospital": 74,
        "diagnostic_center": 123,
        "hospital_beds": 23748,
        "life_expectancy": 62,
        "healthcare_index": 63
      },
      "sports": {
        "swimming_pool": 49,
        "racing_circuit": 2,
        "stadium": 5,
        "international_stadium": 1,
        "olympic_score": 54,
        "popularity": 0
      },
      "law": {
        "legal_aid_center": 167,
        "court": 77,
        "prosecution_office": 60,
        "police_station": 389,
        "police_car_fleet": 1613,
        "police_academy": 9,
        "corruption_index": 7,
        "security_index": 18,
        "police_fleet": {
          "patroli_lantas": {
            "mobil_patroli": 1008,
            "sepeda_motor": 689,
            "unit_k9": 55
          },
          "taktis_khusus": {
            "swat": 40,
            "helikopter_polisi": 11,
            "anti_huru_hara": 272
          },
          "pusat_komando": {
            "stasiun_polisi": 56,
            "kamera_surveillance": 14287,
            "pusat_forensik": 2
          },
          "response_time": 10,
          "public_trust": 58
        }
      }
    },
    "military": {
      "infantry": 11669,
      "tanks": 1152,
      "aircraft": 278,
      "naval": 54,
      "air_base": 3,
      "naval_base": 0,
      "military_base": 7,
      "nuclear": false,
      "strength": 49
    },
    "un_vote": "Pro",
    "trade": {
      "buy_commodity": 112,
      "sell_commodity": 616
    },
    "taxes": {
      "vat": {
        "rate": 11,
        "satisfaction": 71
      },
      "corporate": {
        "rate": 22,
        "satisfaction": 55
      },
      "income": {
        "rate": 15,
        "satisfaction": 61
      },
      "customs": {
        "rate": 5,
        "satisfaction": 84
      },
      "environment": {
        "rate": 1,
        "satisfaction": 86
      },
      "other": {
        "rate": 2,
        "satisfaction": 91
      }
    },
    "demand": {
      "satisfaction": 68,
      "top_demands": [
        "Turunkan Harga Pangan",
        "Pembangunan Infrastruktur Desa"
      ],
      "residential": 40,
      "commercial": 87,
      "industrial": 53
    },
    "geopolitics": {
      "allies": [
        "Amerika Serikat"
      ],
      "enemies": [],
      "stance": "Globalist",
      "international_influence": {
        "soft_power": 34,
        "hard_power": 33,
        "diplomatic_prestige": 48
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
        {
          "partner": "Amerika Serikat",
          "type": "Military",
          "status": "Active"
        },
        {
          "partner": "Uni Eropa",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Brazil",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "Japan",
          "type": "Trade",
          "status": "Active"
        },
        {
          "partner": "China",
          "type": "Trade",
          "status": "Active"
        }
      ]
    },
    "ministries": {
      "health": 65,
      "education": 88,
      "security": 86,
      "finance": 51,
      "environment": 65
    }
  }
];
