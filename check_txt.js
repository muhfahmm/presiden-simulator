const fs = require('fs');

const txtParams = fs.readFileSync('c:/fhm/EM4/daftar-menu/7.DAFTAR NEGARA.txt', 'utf8')
    .split('\n')
    .map(line => line.replace(/^\d+\.\s*\[\s*[x ]*\s*\]\s*/, '').trim())
    .filter(Boolean);

// Unique values from TXT
const uniqueTxt = [...new Set(txtParams)];

// Get existing from allRelations mapping
const relObj = fs.readFileSync('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/relations/index.ts', 'utf8');
const relMatch = relObj.match(/export const allRelations: \{.*?\} = \{\s*([\s\S]*?)\s*\};/);
let mappedNames = [];
if (relMatch) {
    const lines = relMatch[1].split('\n');
    for (const l of lines) {
        const m = l.match(/"([^"]+)":/);
        if (m) mappedNames.push(m[1].trim());
    }
}

const missingInGame = uniqueTxt.filter(c => !mappedNames.includes(c));
const extraInGame = mappedNames.filter(c => !uniqueTxt.includes(c));

fs.writeFileSync('missing_txt.json', JSON.stringify({ missingInGame, extraInGame }, null, 2));
