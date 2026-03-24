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

function processDirectory(dir) {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.ts') && f !== '_index.ts');
  let count = 0;
  
  files.forEach(file => {
    let ideology = "Demokrasi"; // Default
    let religion = "Protestan"; // Default
    const name = file.replace('.ts', '');
    
    // ----------- ASIA -----------
    if (dir === 'asia') {
      const islamCountries = ["afganistan", "arab_saudi", "bahrain", "bangladesh", "brunei", "indonesia", "irak", "iran", "katar", "kazakhstan", "kirgizstan", "kuwait", "lebanon", "maladewa", "malaysia", "oman", "pakistan", "palestina", "qatar", "suriah", "tajikistan", "turkmenistan", "uea", "uni_emirat_arab", "uzbekistan", "yaman", "yordania"];
      const buddhaCountries = ["bhutan", "kamboja", "laos", "mongolia", "myanmar", "singapura", "sri_lanka", "tahiland", "thailand"];
      const hinduCountries = ["india", "nepal"];
      const katolikCountries = ["filipina", "timor_leste"];
      
      if (islamCountries.includes(name)) religion = "Islam";
      else if (buddhaCountries.includes(name)) religion = "Buddha";
      else if (hinduCountries.includes(name)) religion = "Hindu";
      else if (katolikCountries.includes(name)) religion = "Katolik";
      else if (name === "jepang") religion = "Shinto";
      else if (name === "israel") religion = "Yahudi";
      else if (name === "tiongkok" || name === "korea_utara" || name === "vietnam") religion = "Ateisme";
      else religion = "Buddha"; // Default fallback for Asia
      
      if (name === "tiongkok" || name === "korea_utara" || name === "vietnam" || name === "laos") ideology = "Komunisme";
      else if (name === "arab_saudi" || name === "brunei" || name === "oman" || name === "qatar" || name === "uni_emirat_arab" || name === "bahrain" || name === "kuwait") ideology = "Monarki";
      else if (name === "iran" || name === "afganistan" || name === "suriah") ideology = "Nasionalisme";
    }
    
    // ----------- EROPA -----------
    if (dir === 'eropa') {
      const ortodoks = ["rusia", "ukraina", "belarus", "serbia", "yunani", "bulgaria", "rumania", "makedonia_utara", "montenegro", "moldova", "georgia", "armenia"];
      const islam = ["turki", "albania", "bosnia", "bosnia_dan_herzegovina", "kosovo", "azerbaijan"];
      const protestan = ["inggris", "jerman", "swedia", "norwegia", "finlandia", "denmark", "islandia", "belanda", "estonia", "latvia"];
      
      if (ortodoks.includes(name)) religion = "Kristen Ortodoks";
      else if (islam.includes(name)) religion = "Islam";
      else if (protestan.includes(name)) religion = "Protestan";
      else religion = "Katolik"; // Poland, France, Spain, Italy, etc.
      
      if (name === "rusia" || name === "belarus" || name === "turki") ideology = "Nasionalisme";
      else if (name === "vatikan" || name === "monako" || name === "liechtenstein") ideology = "Monarki";
    }
    
    // ----------- NORTH AMERICA -----------
    if (dir === 'na') {
      const protestan = ["amerika_serikat", "kanada", "jamaika", "bahama", "barbados"];
      if (protestan.includes(name)) religion = "Protestan";
      else religion = "Katolik"; // Mexico, Central America, Cuba, etc.
      
      if (name === "kuba") ideology = "Komunisme";
    }
    
    // ----------- SOUTH AMERICA -----------
    if (dir === 'sa') {
      religion = "Katolik"; // Predominantly Catholic
      if (name === "guyana" || name === "suriname") religion = "Protestan"; // Simplification
      
      if (name === "venezuela" || name === "bolivia") ideology = "Sosialisme";
    }
    
    // ----------- OCEANIA -----------
    if (dir === 'oceania') {
      religion = "Protestan"; // Australia, NZ, PNG, Fiji, etc.
      if (name === "tonga" || name === "samoa") ideology = "Monarki";
    }
    
    updateFile(path.join(fullPath, file), ideology, religion);
    count++;
  });
  
  console.log(`Updated ${count} files in ${dir}`);
}

continents.forEach(processDirectory);
