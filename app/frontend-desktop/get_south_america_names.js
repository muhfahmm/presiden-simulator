const fs = require('fs');

const countriesPath = 'c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries.ts';
const countriesContent = fs.readFileSync(countriesPath, 'utf-8');

const code = countriesContent.replace(/import\s+.*?;/g, '').replace('export const countries: CountryData[] =', 'const countries =');
const countries = eval(code + '; countries;');

let log = "--- South American Match ---\n";
countries.forEach(c => {
   if (c.lon > -85 && c.lon < -30 && c.lat > -55 && c.lat < 15) {
       log += `Match: ${c.name_en} / ${c.name_id} (${c.lon}, ${c.lat})\n`;
   }
});

fs.writeFileSync('south_america_list.txt', log);
console.log("Written log to south_america_list.txt");
LinePlaceholder: true
