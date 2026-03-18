const fs = require('fs');
const path = require('path');

const targetFilePath = path.resolve('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries.ts');
const metaFilePath = path.resolve('c:/fhm/EM4/app/frontend-desktop/public/missing_coords.json');

const targetNames = [
    // A
    "Afganistan", "Afrika Selatan", "Albania", "Aljazair", "Amerika Serikat", "Andorra", "Angola", "Antigua dan Barbuda", "Arab Saudi", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    // B
    "Bahama", "Bahrain", "Bangladesh", "Barbados", "Belanda", "Belarus", "Belgia", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia dan Herzegovina", "Botswana", "Brasil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi",
    // C
    "Cabo Verde", "Chad", "Chili", "Ceko",
    // D
    "Denmark", "Djibouti", "Dominika"
];

const metaContent = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
const metaMap = {};
metaContent.forEach(item => {
    const common = item.name.common.toLowerCase();
    const official = item.name.official.toLowerCase();
    metaMap[common] = item;
    metaMap[official] = item;
});

const manualMap = {
    "arab saudi": "saudi arabia", "mesir": "egypt", "turki": "türkiye",
    "sao tome dan principe": "são tomé and príncipe", "trinidad dan tobago": "trinidad and tobago",
    "republik madagaskar": "madagascar", "republik mozambik": "mozambique",
    "vatican": "vatican city", "vatikan": "vatican city",
    "nikaragua": "nicaragua", "saint kitts dan nevis": "saint kitts and nevis",
    "saint vincent dan grenadine": "saint vincent and the grenadines",
    "belanda": "netherlands", "bosnia dan herzegovina": "bosnia and herzegovina",
    "aljazair": "algeria", "antigua dan barbuda": "antigua and barbuda",
    "bahama": "bahamas", "belgia": "belgium",
    "ceko": "czechia", "dominika": "dominica", "ekuador": "ecuador",
    "filipina": "philippines", "finlandia": "finland", "hungaria": "hungary",
    "islandia": "iceland", "irak": "iraq", "irlandia": "ireland",
    "italia": "italy", "jamaika": "jamaica", "yordania": "jordan",
    "kamboja": "cambodia", "kamerun": "cameroon", "kanada": "canada",
    "kirgizstan": "kyrgyzstan", "kolombia": "colombia", "komoro": "comoros",
    "kongo": "congo", "kosta rika": "costa rica", "kroasia": "croatia",
    "kuba": "cuba", "luksemburg": "luxembourg", "maroko": "morocco",
    "marshall": "marshall islands", "meksiko": "mexico", "mikronesia": "micronesia",
    "monako": "monaco", "norwegia": "norway", "papua nugini": "papua new guinea",
    "polandia": "poland", "republik afrika tengah": "central african republic",
    "republik demokratik kongo": "dr congo", "republik dominika": "dominican republic",
    "republik moldova": "moldova", "republik rumania": "romania",
    "republik serbia": "serbia", "republik sudan": "sudan",
    "republik tanzania": "tanzania", "republik timor-leste": "timor-leste",
    "republik uganda": "uganda", "republik zambia": "zambia",
    "republik zimbabwe": "zimbabwe", "singapura": "singapore",
    "slowakia": "slovakia", "spanyol": "spain", "sudan selatan": "south sudan",
    "suriah": "syria", "swedia": "sweden", "swiss": "switzerland",
    "ukraina": "ukraine", "uni emirat arab": "united arab emirates",
    "yaman": "yemen", "afganistan": "afghanistan",
    "afrika selatan": "south africa", "amerika serikat": "united states",
    "brasil": "brazil", "brunei darussalam": "brunei",
    "cabo verde": "cape verde", "chili": "chile"
};

const religions = ["Islam", "Protestan", "Katolik", "Kristen Ortodoks", "Hindu", "Buddha", "Ateisme", "Yahudi", "Konghucu", "Taoisme", "Shinto"];
const ideologies = ["Demokrasi", "Komunisme", "Kapitalisme", "Sosialisme", "Liberalisme", "Konservatisme", "Nasionalisme", "Monarki"];

function getStats() {
    const tier = Math.random();
    let pop, budget, income, strength;
    
    if (tier > 0.95) {
        pop = (Math.floor(Math.random() * 200) + 100) + "M";
        budget = "Rp " + (Math.floor(Math.random() * 5000) + 5000) + " T";
        income = "Rp " + (Math.floor(Math.random() * 6000) + 6000) + " T";
        strength = Math.floor(Math.random() * 20) + 80;
    } else if (tier > 0.8) {
        pop = (Math.floor(Math.random() * 100) + 50) + "M";
        budget = "Rp " + (Math.floor(Math.random() * 2000) + 1000) + " T";
        income = "Rp " + (Math.floor(Math.random() * 2500) + 1200) + " T";
        strength = Math.floor(Math.random() * 30) + 50;
    } else {
        pop = (Math.floor(Math.random() * 45) + 5) + "M";
        budget = "Rp " + (Math.floor(Math.random() * 800) + 100) + " T";
        income = "Rp " + (Math.floor(Math.random() * 900) + 110) + " T";
        strength = Math.floor(Math.random() * 40) + 10;
    }

    return {
        pop, budget, income,
        religion: religions[Math.floor(Math.random() * religions.length)],
        ideology: ideologies[Math.floor(Math.random() * ideologies.length)],
        // 1. Infrastruktur Kelistrikan (Already in infrastructure)
        infrastructure: {
            nuclear_plant: Math.floor(Math.random() * 5 * tier),
            hydro_plant: Math.floor(Math.random() * 10 * tier),
            solar_plant: Math.floor(Math.random() * 100 * tier),
            thermal_plant: Math.floor(Math.random() * 15 * tier),
            gas_plant: Math.floor(Math.random() * 10 * tier),
            wind_plant: Math.floor(Math.random() * 20 * tier),
            power_grid: Math.floor(Math.random() * 30) + 70,
            bicycle_path: Math.floor(Math.random() * 500 * tier),
            subway: Math.floor(Math.random() * 10 * tier),
            railway: Math.floor(Math.random() * 800 * tier),
            highway: Math.floor(Math.random() * 1200 * tier),
            road_quality: Math.floor(Math.random() * 40) + 50,
            sea_port: Math.floor(Math.random() * 20 * tier),
            airport: Math.floor(Math.random() * 15 * tier),
            internet_coverage: Math.floor(Math.random() * 40) + 60,
            tech_stack: Math.floor(Math.random() * 50) + 40,
            water_access: Math.floor(Math.random() * 30) + 70
        },

        // 2. Sektor Ekstraksi & Energi (Detailed)
        sector_extraction: {
            gold: Math.floor(Math.random() * 100 * tier),
            uranium: tier > 0.8 ? Math.floor(Math.random() * 50 * tier) : 0,
            coal: Math.floor(Math.random() * 800 * tier),
            oil: Math.floor(Math.random() * 1000 * tier),
            gas: Math.floor(Math.random() * 900 * tier),
            salt: Math.floor(Math.random() * 600 * tier),
            nickel: Math.floor(Math.random() * 500 * tier),
            copper: Math.floor(Math.random() * 700 * tier),
            rare_earth: Math.floor(Math.random() * 400 * tier),
            iron_ore: Math.floor(Math.random() * 1200 * tier),
            strength: Math.floor(Math.random() * 40) + 40 * tier
        },

        // 3. Sektor Pengolahan & Manufaktur (Detailed)
        sector_manufacturing: {
            semiconductor: Math.floor(Math.random() * 1000 * tier),
            car: Math.floor(Math.random() * 800 * tier),
            motorcycle: Math.floor(Math.random() * 900 * tier),
            smelter: Math.floor(Math.random() * 700 * tier),
            concrete_cement: Math.floor(Math.random() * 600 * tier),
            wood: Math.floor(Math.random() * 500 * tier),
            mineral_water: Math.floor(Math.random() * 1000 * tier),
            sugar: Math.floor(Math.random() * 400 * tier),
            bread: Math.floor(Math.random() * 500 * tier),
            pharmacy: Math.floor(Math.random() * 300 * tier),
            fertilizer: Math.floor(Math.random() * 400 * tier),
            meat_processing: Math.floor(Math.random() * 500 * tier),
            instant_noodle: Math.floor(Math.random() * 800 * tier),
            strength: Math.floor(Math.random() * 40) + 50 * tier
        },

        // 4. Sektor Peternakan (Detailed)
        sector_livestock: {
            chicken: Math.floor(Math.random() * 1000 * tier),
            poultry: Math.floor(Math.random() * 800 * tier),
            dairy_cow: Math.floor(Math.random() * 500 * tier),
            beef_cow: Math.floor(Math.random() * 600 * tier),
            sheep_goat: Math.floor(Math.random() * 400 * tier),
            shrimp: Math.floor(Math.random() * 500 * tier),
            fish: Math.floor(Math.random() * 700 * tier),
            shellfish: Math.floor(Math.random() * 300 * tier),
            strength: Math.floor(Math.random() * 40) + 30 * tier
        },

        // 5. Sektor Pertanian (Detailed)
        sector_agriculture: {
            rice: Math.floor(Math.random() * 1200 * tier),
            wheat: Math.floor(Math.random() * 1000 * tier),
            corn: Math.floor(Math.random() * 900 * tier),
            tubers: Math.floor(Math.random() * 800 * tier),
            soy: Math.floor(Math.random() * 600 * tier),
            palm_oil: Math.floor(Math.random() * 700 * tier),
            tea: Math.floor(Math.random() * 400 * tier),
            coffee: Math.floor(Math.random() * 500 * tier),
            cocoa: Math.floor(Math.random() * 400 * tier),
            sugarcane: Math.floor(Math.random() * 600 * tier),
            vegetables: Math.floor(Math.random() * 800 * tier),
            strength: Math.floor(Math.random() * 40) + 40 * tier
        },

        // 6. Sektor Pertahanan (Detailed)
        sector_defense: {
            prison: Math.floor(Math.random() * 100 * tier) + 5,
            barracks: Math.floor(Math.random() * 250 * tier) + 10,
            armory: Math.floor(Math.random() * 50 * tier) + 2,
            tank_hangar: Math.floor(Math.random() * 40 * tier) + 1,
            military_academy: Math.floor(Math.random() * 10 * tier) + 1,
            budget: Math.floor(Math.random() * 200 * tier) + 5,
            personnel: Math.floor(Math.random() * 500000 * tier) + 10000,
            strength: Math.floor(Math.random() * 40) + 40 * tier
        },

        // 7. Sektor Militer Strategis (Detailed)
        sector_military_strategic: {
            command_center: Math.floor(Math.random() * 5 * tier) + 1,
            military_air_base: Math.floor(Math.random() * 20 * tier) + 1,
            military_naval_base: Math.floor(Math.random() * 10 * tier),
            arms_factory: Math.floor(Math.random() * 15 * tier),
            nuclear_status: tier > 0.9,
            space_program: Math.floor(Math.random() * 100 * tier),
            cyber_defense: Math.floor(Math.random() * 100 * tier),
            intelligence: Math.floor(Math.random() * 100 * tier)
        },

        // 9-12. Sektor Sosial (Detailed)
        sector_social: {
            education: {
                kindergarten: Math.floor(Math.random() * 1000 * tier) + 100,
                elementary_school: Math.floor(Math.random() * 2000 * tier) + 200,
                middle_school: Math.floor(Math.random() * 1500 * tier) + 150,
                high_school: Math.floor(Math.random() * 1000 * tier) + 100,
                university: Math.floor(Math.random() * 200 * tier) + 10,
                education_institute: Math.floor(Math.random() * 400 * tier) + 20,
                laboratory: Math.floor(Math.random() * 300 * tier) + 5,
                observatory: Math.floor(Math.random() * 50 * tier),
                research_center: Math.floor(Math.random() * 100 * tier) + 2,
                development_center: Math.floor(Math.random() * 150 * tier) + 5,
                literacy: Math.floor(Math.random() * 30) + 70,
                research_index: Math.floor(Math.random() * 100 * tier)
            },
            health: {
                large_hospital: Math.floor(Math.random() * 100 * tier) + 5,
                small_hospital: Math.floor(Math.random() * 500 * tier) + 20,
                diagnostic_center: Math.floor(Math.random() * 200 * tier) + 10,
                hospital_beds: Math.floor(Math.random() * 100000 * tier) + 5000,
                life_expectancy: Math.floor(Math.random() * 20) + 60,
                healthcare_index: Math.floor(Math.random() * 40) + 50
            },
            sports: {
                swimming_pool: Math.floor(Math.random() * 400 * tier) + 20,
                racing_circuit: Math.floor(Math.random() * 10 * tier),
                stadium: Math.floor(Math.random() * 50 * tier) + 2,
                international_stadium: Math.floor(Math.random() * 5 * tier),
                olympic_score: Math.floor(Math.random() * 100 * tier),
                popularity: Math.floor(Math.random() * 100)
            },
            law: {
                legal_aid_center: Math.floor(Math.random() * 300 * tier) + 10,
                court: Math.floor(Math.random() * 150 * tier) + 5,
                prosecution_office: Math.floor(Math.random() * 100 * tier) + 5,
                police_station: Math.floor(Math.random() * 1000 * tier) + 50,
                police_car_fleet: Math.floor(Math.random() * 5000 * tier) + 200,
                police_academy: Math.floor(Math.random() * 20 * tier) + 2,
                corruption_index: Math.floor(Math.random() * 100),
                security_index: Math.floor(Math.random() * 100)
            }
        },

        military: {
            infantry: Math.floor(Math.random() * 100000) + 1000,
            tanks: Math.floor(Math.random() * 2000),
            aircraft: Math.floor(Math.random() * 500),
            naval: Math.floor(Math.random() * 100),
            air_base: Math.floor(Math.random() * 5) + 1,
            naval_base: Math.floor(Math.random() * 3),
            military_base: Math.floor(Math.random() * 10) + 2,
            nuclear: tier > 0.98,
            strength: strength
        },
        un_vote: ["Pro", "Neutral", "Contra"][Math.floor(Math.random() * 3)],
        trade: {
            buy_commodity: Math.floor(Math.random() * 500) + 50,
            sell_commodity: Math.floor(Math.random() * 600) + 60
        },
        taxes: {
            vat: { rate: 11, satisfaction: Math.floor(Math.random() * 40) + 60 },
            corporate: { rate: 22, satisfaction: Math.floor(Math.random() * 30) + 50 },
            income: { rate: 15, satisfaction: Math.floor(Math.random() * 40) + 50 },
            customs: { rate: 5, satisfaction: Math.floor(Math.random() * 20) + 70 },
            environment: { rate: 1, satisfaction: Math.floor(Math.random() * 10) + 80 },
            other: { rate: 2, satisfaction: Math.floor(Math.random() * 10) + 85 }
        },
        demand: {
            satisfaction: Math.floor(Math.random() * 40) + 50,
            top_demands: [
                ["Turunkan Harga Pangan", "Layanan Kesehatan Gratis", "Bantuan Sembako"][Math.floor(Math.random() * 3)],
                ["Penyediaan Lapangan Kerja", "Pembangunan Infrastruktur Desa", "Subsidisi Listrik"][Math.floor(Math.random() * 3)]
            ],
            residential: Math.floor(Math.random() * 50) + 40,
            commercial: Math.floor(Math.random() * 50) + 40,
            industrial: Math.floor(Math.random() * 50) + 40
        },
        geopolitics: {
            allies: ["Amerika Serikat", "Uni Eropa", "ASEAN"].slice(0, Math.floor(Math.random() * 3) + 1),
            enemies: tier > 0.8 ? ["Korea Utara", "Rusia"] : [],
            stance: ["Globalist", "Isolationist", "Neutral"][Math.floor(Math.random() * 3)]
        },
        ministries: {
            health: Math.floor(Math.random() * 40) + 50,
            education: Math.floor(Math.random() * 40) + 50,
            security: Math.floor(Math.random() * 40) + 50,
            finance: Math.floor(Math.random() * 40) + 50,
            environment: Math.floor(Math.random() * 40) + 50
        }
    };
}

const restored = [];
targetNames.forEach(name => {
    const lowId = name.toLowerCase();
    const metaName = manualMap[lowId] || lowId;
    const item = metaMap[metaName];
    if (item) {
        restored.push({
            name_en: item.name.common,
            name_id: name,
            lon: item.latlng[1],
            lat: item.latlng[0],
            flag: item.flag,
            ...getStats()
        });
    } else {
        console.log("MISSING:", name);
    }
});

const content = `import { CountryData } from "./types";

export const countries: CountryData[] = ${JSON.stringify(restored, null, 2)};
`;

fs.writeFileSync(targetFilePath, content);
console.log(`DONE: Restored ${restored.length} countries.`);
