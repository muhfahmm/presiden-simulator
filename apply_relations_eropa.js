const fs = require('fs');
const path = require('path');

// Kelompok Regional (Default)
const groups = {
  EU: ['jerman', 'prancis', 'italia', 'spanyol', 'belanda', 'belgia', 'portugal', 'swedia', 'finlandia', 'polandia', 'austria', 'ceko', 'slowakia', 'hungaria', 'republik rumania', 'bulgaria', 'yunani', 'siprus', 'estonia', 'latvia', 'lithuania', 'luksemburg', 'malta', 'slovenia', 'kroasia', 'irlandia', 'denmark'],
  NATO_EXTRAS: ['inggris', 'turki', 'norwegia', 'islandia', 'albania', 'makedonia utara', 'montenegro']
};

const relationsMap = {
  rusia: { 
    'belarus': 85, 
    'republik serbia': 70, 'hungaria': 70, 'turki': 70,
    'ukraina': 10, 
    'inggris': 20, 'amerika serikat': 20, 'polandia': 20, 'estonia': 20, 'latvia': 20, 'lithuania': 20, 'finlandia': 20
  },
  ukraina: { 
    'polandia': 85, 'lithuania': 85, 'inggris': 85, 'amerika serikat': 85,
    'kanada': 70,
    'rusia': 10, 'belarus': 10
  },
  inggris: { 
    'amerika serikat': 85, 'australia': 85, 'kanada': 85, 'ukraina': 85,
    'jepang': 70,
    'rusia': 20, 'iran': 20
  },
  jerman: { 
    'prancis': 85, 'belanda': 85, 'austria': 85,
    'israel': 80,
    'rusia': 35
  },
  prancis: { 
    'jerman': 85, 'italia': 85, 'spanyol': 85,
    'rusia': 35
  },
  turki: { 
    'azerbaijan': 85, 'qatar': 85, 'libia': 85,
    'rusia': 70, 'ukraina': 70, 'pakistan': 70,
    'suriah': 20,
    'yunani': 35, 'siprus': 35
  },
  republik_serbia: { 
    'rusia': 85, 'china': 85,
    'hungaria': 70, 'republik rumania': 70, 'bulgaria': 70,
    'kosovo': 20, 'albania': 20,
    'amerika serikat': 35
  },
  kosovo: { 
    'albania': 85, 'amerika serikat': 85, 'inggris': 85,
    'republik serbia': 20
  }
};

const dir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations', 'eropa');

function getGroupRelations(subjectCountry) {
    const overrides = {};
    const isEU = groups.EU.includes(subjectCountry);
    const isNATOExtra = groups.NATO_EXTRAS.includes(subjectCountry);

    if (isEU) {
        // EU with other EU
        groups.EU.forEach(m => { if (m !== subjectCountry) overrides[m] = 80; });
        // EU with NATO Extras (Close NATO allies)
        groups.NATO_EXTRAS.forEach(m => overrides[m] = 80);
    }

    if (isNATOExtra) {
        // NATO Extras with all EU countries
        groups.EU.forEach(m => overrides[m] = 80);
        // NATO Extras with each other
        groups.NATO_EXTRAS.forEach(m => { if (m !== subjectCountry) overrides[m] = 80; });
    }

    return overrides;
}

function getRelationValue(name, countryData) {
    const lowerName = name.toLowerCase().trim();
    if (countryData[lowerName] !== undefined) return countryData[lowerName];
    for (const key of Object.keys(countryData)) {
        if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
            return countryData[key];
        }
    }
    return 50;
}

const files = fs.readdirSync(dir);
let updatedCount = 0;

files.forEach(filename => {
    if (!filename.endsWith('.ts')) return;
    const countryKey = filename.replace('.ts', '').replace(/_/g, ' ');
    const filePath = path.join(dir, filename);

    const groupOverrides = getGroupRelations(countryKey);
    const localOverrides = relationsMap[filename.replace('.ts', '')] || {}; 
    const countryData = { ...groupOverrides, ...localOverrides };

    let content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/\{\s*name:\s*"([^"]+)",\s*relation:\s*\d+\s*\}/g, (match, name) => {
        const rel = getRelationValue(name, countryData);
        return `{ name: "${name}", relation: ${rel} }`;
    });

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${filename}`);
    updatedCount++;
});

console.log(`Total files updated: ${updatedCount}`);
