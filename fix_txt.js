const fs = require('fs');

const tsContent = fs.readFileSync('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries/index.ts', 'utf8');
const match = tsContent.match(/export const countries: CountryData\[\] = \[\s*([\s\S]*?)\s*\];/);

if (match) {
    const list = match[1]
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => s.replace(/_/g, ' '));
        
    // Ensure duplicates (like yordania) are removed even if they exist in ts array
    const uniqueList = [...new Set(list)].sort((a, b) => a.localeCompare(b));
    
    let txtLines = '';
    uniqueList.forEach((country, index) => {
        txtLines += `${index + 1}. [ ] ${country}\n`;
    });
    
    fs.writeFileSync('c:/fhm/EM4/daftar-menu/7.DAFTAR NEGARA.txt', txtLines, 'utf8');
    console.log(`Generated perfectly cleaned TXT with ${uniqueList.length} unique items.`);
}
