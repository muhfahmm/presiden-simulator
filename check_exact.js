const fs = require('fs');

const content = fs.readFileSync('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries/index.ts', 'utf8');

// Find the export const countries array
const match = content.match(/export const countries: CountryData\[\] = \[\s*([\s\S]*?)\s*\];/);
if (match) {
    const list = match[1].split(',').map(s => s.trim()).filter(Boolean);
    console.log(`Expected countries count: ${list.length}`);
    
    // Read the allRelations
    const relObj = fs.readFileSync('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/relations/index.ts', 'utf8');
    const relMatch = relObj.match(/export const allRelations: \{.*?\} = \{\s*([\s\S]*?)\s*\};/);
    if (relMatch) {
       const mappedNames = [];
       const lines = relMatch[1].split('\n');
       for (const l of lines) {
           const m = l.match(/"([^"]+)":/);
           if (m) mappedNames.push(m[1].replace(/ /g, '_'));
       }
       console.log(`Mapped relations count: ${mappedNames.length}`);
       
       const missing = list.filter(c => !mappedNames.includes(c));
       console.log(`Missing in relations:`, missing);
       
       const extra = mappedNames.filter(c => !list.includes(c));
       console.log(`Extra in relations:`, extra);
    }
}
