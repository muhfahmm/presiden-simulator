const fs = require('fs');

const listPath = 'c:\\fhm\\EM4\\daftar-menu\\7.DAFTAR NEGARA.txt';
const listContent = fs.readFileSync(listPath, 'utf-8');
const indonesianList = [];
listContent.split(/\r?\n/).forEach(line => {
    const match = line.match(/^\d+\.\s+\[\s*\]\s+(.+)$/);
    if (match) indonesianList.push(match[1].trim().toLowerCase());
});

const fails = [
  "The Bahamas", "Democratic Republic of the Congo", "Northern Cyprus", 
  "Czech Republic", "Guinea Bissau", "Equatorial Guinea", "Macedonia", 
  "Republic of Serbia", "Swaziland", "East Timor", "Turkey", 
  "United Republic of Tanzania", "United States of America", "West Bank",
  "Western Sahara", "Somaliland", "New Caledonia", "Solomon Islands", "Falkland Islands"
];

let output = 'Mapping GeoJSON names into Indonesian List:\n\n';

fails.forEach(name => {
    const lower = name.toLowerCase();
    
    // Find matching logic
    let bestMatch = '';
    if (lower.includes('united states')) bestMatch = indonesianList.find(n => n.includes('amerika')) || '';
    else if (lower.includes('tanzania')) bestMatch = indonesianList.find(n => n.includes('tanzania')) || '';
    else if (lower.includes('congo')) bestMatch = indonesianList.find(n => n.includes('kongo')) || '';
    else if (lower.includes('czech')) bestMatch = indonesianList.find(n => n.includes('ceko')) || '';
    else if (lower.includes('bahamas')) bestMatch = indonesianList.find(n => n.includes('bahama')) || '';
    else if (lower.includes('guinea')) bestMatch = indonesianList.find(n => n.includes('guinea')) || '';
    else if (lower.includes('macedonia')) bestMatch = indonesianList.find(n => n.includes('makedonia')) || '';
    else if (lower.includes('serbia')) bestMatch = indonesianList.find(n => n.includes('serbia')) || '';
    else if (lower.includes('swaziland')) bestMatch = indonesianList.find(n => n.includes('eswatini')) || '';
    else if (lower.includes('turkey')) bestMatch = indonesianList.find(n => n.includes('turki')) || '';
    else if (lower.includes('timor')) bestMatch = indonesianList.find(n => n.includes('timor')) || '';
    else if (lower.includes('west bank')) bestMatch = indonesianList.find(n => n.includes('palestina')) || '';
    else if (lower.includes('solomon')) bestMatch = indonesianList.find(n => n.includes('marshall')) || ''; // or search
    
    // Fallbacks - Just list ANY that shares a word!
    if (!bestMatch) {
         const words = lower.split(' ');
         for (const word of words) {
              if (word.length <= 3) continue;
              const match = indonesianList.find(n => n.includes(word));
              if (match) {
                   bestMatch = match;
                   break;
              }
         }
    }

    output += `"${name}" => "${bestMatch}"\n`;
});

fs.writeFileSync('c:\\fhm\\EM4\\failing_aliases.txt', output);
console.log("Done mapped aliases.");
IndonesianListAll = indonesianList.join(', ');
fs.appendFileSync('c:\\fhm\\EM4\\failing_aliases.txt', `\nTotal Indonesian List List:\n${IndonesianListAll}`);
