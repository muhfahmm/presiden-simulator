const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const destDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\tab-menu\\Hubungan';
const listPath = 'c:\\fhm\\EM4\\daftar-menu\\7.DAFTAR NEGARA.txt';

// 1. Parse List of 214 Countries
const listContent = fs.readFileSync(listPath, 'utf-8');
const countryList = [];
listContent.split(/\r?\n/).forEach(line => {
    const trimmedLine = line.trim();
    const match = trimmedLine.match(/^\d+\.\s+\[\s*\]\s+(.+)$/);
    if (match) {
        countryList.push(match[1].trim());
    }
});

console.log(`Parsing list found ${countryList.length} items`);

// 2. Map original to continents using name_id lookup
const continentMap = {}; 
const countriesFolders = fs.readdirSync(srcDir);

countriesFolders.forEach(folder => {
    const folderPath = path.join(srcDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) return;
    
    fs.readdirSync(folderPath).forEach(file => {
        if (!file.endsWith('.ts') || file.startsWith('_')) return;
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Robust regex for name_id (supports double, single, or no quotes)
        const nameIdMatch = content.match(/name_id["']?\s*:\s*["']([^"']+)["']/i);
        if (nameIdMatch) {
            const nameId = nameIdMatch[1];
            continentMap[nameId.toLowerCase().trim()] = folder;
        }
    });
});

console.log(`Continent map populated with ${Object.keys(continentMap).length} entries`);

// 3. Loop through 214 list and create static state files
let count = 0;
countryList.forEach(itemNameIndo => {
    const cleanName = itemNameIndo.toLowerCase().trim();
    let folder = continentMap[cleanName];
    
    if (!folder) {
        for (const key in continentMap) {
            if (key.replace(/_/g, ' ') === cleanName || cleanName.replace(/_/g, ' ') === key) {
                folder = continentMap[key];
                break;
            }
        }
    }
    
    if (!folder) {
        console.log(`Skipping Missing Continent: ${itemNameIndo}`);
        return;
    }

    const otherCountries = countryList.filter(n => n.toLowerCase().trim() !== cleanName);
    const arrayStr = otherCountries.map(name => {
         return `  { name: "${name}", relation: ${Math.floor(Math.random() * 80) + 10} }`;
    }).join(',\n');

    const variableName = cleanName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '_') + '_relations';
    const fileContent = `export const ${variableName} = [\n${arrayStr}\n];\n`;
    const targetFile = path.join(destDir, folder, `${cleanName.replace(/\s+/g, '_')}.ts`);
    
    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, fileContent);
    count++;
});

console.log(`Successfully generated ${count} relation items inside Hubungan continental subpaths.`);
