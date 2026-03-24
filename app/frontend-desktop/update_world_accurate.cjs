const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const continents = ['asia', 'eropa', 'na', 'sa', 'oceania'];

function updateFile(filePath, ideology, religion) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/"?ideology"?:\s*["'][^"']+["']/g, `"ideology": "${ideology}"`);
  content = content.replace(/"?religion"?:\s*["'][^"']+["']/g, `"religion": "${religion}"`);
  fs.writeFileSync(filePath, content, 'utf8');
}

const detailedIdeology = {
  // ASIA
  "tiongkok": "Komunisme", "korea_utara": "Komunisme", "vietnam": "Komunisme", "laos": "Komunisme",
  "arab_saudi": "Monarki", "brunei": "Monarki", "oman": "Monarki", "qatar": "Monarki", "uni_emirat_arab": "Monarki", "bahrain": "Monarki", "kuwait": "Monarki", "yordania": "Monarki", "bhutan": "Monarki",
  "iran": "Konservatisme", "afganistan": "Konservatisme", "suriah": "Nasionalisme", "yaman": "Nasionalisme", "myanmar": "Nasionalisme",
  "israel": "Kapitalisme", "jepang": "Kapitalisme", "korea_selatan": "Kapitalisme", "singapura": "Kapitalisme", "taiwan": "Kapitalisme", "hong_kong": "Kapitalisme", "makau": "Kapitalisme",
  "kamboja": "Demokrasi", "indonesia": "Demokrasi", "india": "Nasionalisme", "pakistan": "Konservatisme", "turkmenistan": "Nasionalisme", "tajikistan": "Nasionalisme", "uzbekistan": "Nasionalisme", "kazakhstan": "Nasionalisme", "kirgizstan": "Demokrasi",

  // EROPA
  "rusia": "Nasionalisme", "belarus": "Nasionalisme", "turki": "Konservatisme", "hungaria": "Nasionalisme", "serbia": "Nasionalisme",
  "vatikan": "Monarki", "monako": "Monarki", "liechtenstein": "Monarki",
  "inggris": "Kapitalisme", "jerman": "Kapitalisme", "prancis": "Sosialisme", "swedia": "Sosialisme", "norwegia": "Sosialisme", "finlandia": "Sosialisme", "denmark": "Sosialisme", "swiss": "Kapitalisme", "belanda": "Kapitalisme", "belgia": "Sosialisme", "austria": "Kapitalisme", "irlandia": "Kapitalisme", "luksemburg": "Kapitalisme",

  // NORTH AMERICA
  "amerika_serikat": "Kapitalisme", "kanada": "Liberalisme",
  "kuba": "Komunisme", "meksiko": "Sosialisme", "nikaragua": "Sosialisme", "el_salvador": "Nasionalisme",

  // SOUTH AMERICA
  "venezuela": "Sosialisme", "bolivia": "Sosialisme", "kolombia": "Sosialisme", "peru": "Sosialisme", "brasil": "Demokrasi", "chile": "Liberalisme", "argentina": "Kapitalisme", "uruguay": "Demokrasi", "paraguay": "Konservatisme",

  // OCEANIA
  "australia": "Kapitalisme", "selandia_baru": "Liberalisme",
  "tonga": "Monarki", "samoa": "Demokrasi"
};

const detailedReligion = {
  // ASIA
  "afganistan": "Islam", "arab_saudi": "Islam", "bahrain": "Islam", "bangladesh": "Islam", "brunei": "Islam", "indonesia": "Islam", "irak": "Islam", "iran": "Islam", "katar": "Islam", "kazakhstan": "Islam", "kirgizstan": "Islam", "kuwait": "Islam", "lebanon": "Islam", "maladewa": "Islam", "malaysia": "Islam", "oman": "Islam", "pakistan": "Islam", "palestina": "Islam", "qatar": "Islam", "suriah": "Islam", "tajikistan": "Islam", "turkmenistan": "Islam", "uea": "Islam", "uni_emirat_arab": "Islam", "uzbekistan": "Islam", "yaman": "Islam", "yordania": "Islam",
  "bhutan": "Buddha", "kamboja": "Buddha", "laos": "Buddha", "mongolia": "Buddha", "myanmar": "Buddha", "singapura": "Buddha", "sri_lanka": "Buddha", "tahiland": "Buddha", "thailand": "Buddha", "taiwan": "Buddha", "hong_kong": "Buddha", "makau": "Buddha",
  "india": "Hindu", "nepal": "Hindu",
  "filipina": "Katolik", "timor_leste": "Katolik",
  "jepang": "Shinto",
  "israel": "Yahudi",
  "tiongkok": "Ateisme", "korea_utara": "Ateisme", "korea_selatan": "Ateisme", "vietnam": "Ateisme", // For secular states / states where non-religious is the vast majority.

  // EROPA
  "rusia": "Kristen Ortodoks", "ukraina": "Kristen Ortodoks", "belarus": "Kristen Ortodoks", "serbia": "Kristen Ortodoks", "yunani": "Kristen Ortodoks", "bulgaria": "Kristen Ortodoks", "rumania": "Kristen Ortodoks", "makedonia_utara": "Kristen Ortodoks", "montenegro": "Kristen Ortodoks", "moldova": "Kristen Ortodoks", "georgia": "Kristen Ortodoks", "armenia": "Kristen Ortodoks", "siprus": "Kristen Ortodoks",
  "turki": "Islam", "albania": "Islam", "bosnia": "Islam", "bosnia_dan_hercegovina": "Islam", "kosovo": "Islam", "azerbaijan": "Islam",
  "inggris": "Protestan", "jerman": "Protestan", "swedia": "Protestan", "norwegia": "Protestan", "finlandia": "Protestan", "denmark": "Protestan", "islandia": "Protestan", "belanda": "Protestan", "estonia": "Protestan", "latvia": "Protestan",
  "italia": "Katolik", "vatikan": "Katolik", "polandia": "Katolik", "spanyol": "Katolik", "portugal": "Katolik", "prancis": "Katolik", "irlandia": "Katolik", "kroasia": "Katolik", "lithuania": "Katolik", "austria": "Katolik", "belgia": "Katolik", "swiss": "Katolik", "luksemburg": "Katolik", "slovenia": "Katolik", "slowakia": "Katolik", "ceko": "Ateisme", "hungaria": "Katolik"
};

function processDirectory(dir) {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.ts') && f !== '_index.ts');
  let count = 0;
  
  files.forEach(file => {
    let name = file.replace('.ts', '');
    
    // Default fallsbacks
    let ideology = "Demokrasi"; 
    let religion = "Katolik"; 

    // LATAM is mostly Katolik, NA is mixed Protestan/Katolik, Oceania is Protestan, Europe is mixed Katolik/Protestan/Ortodoks
    if (dir === 'na') religion = ["amerika_serikat", "kanada", "jamaika", "bahama", "barbados", "bermuda", "greenland"].includes(name) ? "Protestan" : "Katolik";
    if (dir === 'sa') religion = ["guyana", "suriname"].includes(name) ? "Protestan" : "Katolik";
    if (dir === 'oceania') religion = "Protestan"; // High protestant majority across the pacific

    // Apply specific detail mapping
    if (detailedIdeology[name]) ideology = detailedIdeology[name];
    if (detailedReligion[name]) religion = detailedReligion[name];
    
    updateFile(path.join(fullPath, file), ideology, religion);
    count++;
  });
  
  console.log(`Updated ${count} files in ${dir}`);
}

continents.forEach(processDirectory);
