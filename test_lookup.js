const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';

// 1. Load centersData
const centersData = [];
const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

continents.forEach(cont => {
    const contPath = path.join(srcDir, cont);
    if (!fs.existsSync(contPath)) return;
    fs.readdirSync(contPath).forEach(file => {
        if (!file.endsWith('.ts')) return;
        const content = fs.readFileSync(path.join(contPath, file), 'utf-8');
        const nameEnMatch = content.match(/"name_en":\s*"([^"]+)"/);
        const nameIdMatch = content.match(/"name_id":\s*"([^"]+)"/);
        if (nameEnMatch && nameIdMatch) {
            centersData.push({ name_en: nameEnMatch[1], name_id: nameIdMatch[1] });
        }
    });
});

// 2. Load world.geojson
const geoJsonPath = 'c:\\fhm\\EM4\\app\\frontend-desktop\\public\\world.geojson';
const geoJson = JSON.parse(fs.readFileSync(geoJsonPath, 'utf-8'));

let output = '';
let matchCount = 0;
let failCount = 0;

geoJson.features.forEach(feat => {
    const name = feat.properties.name;
    const countryEntry = centersData.find(c => c.name_en === name || c.name_id === name);
    
    if (countryEntry) {
        matchCount++;
    } else {
        failCount++;
        output += `FAIL LOOKUP: "${name}"\n`;
    }
});

output += `\nSummary: MATCHED=${matchCount}, FAILED=${failCount}\n`;
fs.writeFileSync('c:\\fhm\\EM4\\lookup_fails.txt', output);

console.log("Done dumping logs.");
