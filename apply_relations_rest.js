const fs = require('fs');
const path = require('path');

// Kelompok Regional (Default)
const groups = {
  NATO_EU: [
    'amerika serikat', 'inggris', 'prancis', 'jerman', 'kanada', 'italia', 'spanyol', 'belanda', 
    'polandia', 'turki', 'yunani', 'belgia', 'portugal', 'norwegia', 'denmark', 'swedia', 'finlandia', 
    'republik rumania', 'bulgaria', 'hungaria', 'kroasia', 'slowakia', 'slovenia', 'ceko', 'estonia', 
    'latvia', 'lithuania', 'islandia', 'albania', 'montenegro', 'makedonia utara', 'luxemburg', 
    'irlandia', 'austria', 'swiss' // Swiss & Ireland neutral but highly aligned
  ],
  FiveEyes: ['amerika serikat', 'inggris', 'kanada', 'australia', 'selandia baru'],
  CSTO: ['rusia', 'belarus', 'armenia', 'kazakhstan', 'kirgizstan', 'tajikistan'],
  Mercosur: ['brazil', 'argentina', 'uruguay', 'paraguay', 'chile', 'kolombia', 'peru', 'bolivia', 'ekuador', 'venezuela'],
  BRICS: ['brazil', 'rusia', 'india', 'china', 'afrika selatan']
};

const relationsMap = {
  amerika_serikat: { 
    'inggris': 85, 'kanada': 85, 'prancis': 85, 'jerman': 85, 'australia': 85, 'selandia baru': 85, 'israel': 85, 'jepang': 85, 'korea selatan': 85, 'filipina': 85, 'polandia': 85,
    'india': 70, 'arab saudi': 70, 'kolombia': 70, 'brazil': 70, 'meksiko': 70, 'arab saudi': 70, 'uni emirat arab': 70,
    'rusia': 20, 'china': 20, 'iran': 20, 'korea utara': 20, 'suriah': 20, 'kuba': 20, 'venezuela': 20
  },
  rusia: { 
    'belarus': 85, 'china': 85, 'iran': 85, 'korea utara': 85, 'suriah': 85, 'armenia': 85, 'kazakhstan': 85,
    'india': 70, 'brazil': 70, 'afrika selatan': 70, 'kuba': 70, 'venezuela': 70, 'serbia': 70,
    'ukraina': 20, 'amerika serikat': 20, 'inggris': 20, 'prancis': 20, 'jerman': 20, 'jepang': 20, 'polandia': 20
  },
  ukraina: { 
    'amerika serikat': 85, 'inggris': 85, 'polandia': 85, 'latvia': 85, 'lithuania': 85, 'estonia': 85, 'kanada': 85,
    'prancis': 70, 'jerman': 70, 'jepang': 70,
    'rusia': 20, 'belarus': 20, 'iran': 20, 'korea utara': 20
  },
  inggris: { 
    'amerika serikat': 85, 'kanada': 85, 'australia': 85, 'selandia baru': 85, 'prancis': 85, 'jerman': 85, 'jepang': 85,
    'rusia': 20, 'iran': 20, 'korea utara': 20
  },
  prancis: { 
    'jerman': 85, 'inggris': 85, 'amerika serikat': 85, 'italia': 85, 'spanyol': 85,
    'rusia': 20, 'iran': 20, 'korea utara': 20
  },
  jerman: { 
    'prancis': 85, 'amerika serikat': 85, 'inggris': 85, 'italia': 85, 'belanda': 85, 'polandia': 85,
    'rusia': 20
  },
  brazil: { 
    'argentina': 85, 'paraguay': 85, 'uruguay': 85,
    'rusia': 70, 'india': 70, 'china': 70, 'afrika selatan': 70, 'amerika serikat': 70, 'prancis': 70
  },
  australia: { 
    'Amerika serikat': 85, 'inggris': 85, 'selandia baru': 85, 'jepang': 85, 'kanada': 85,
    'indonesia': 70, 'india': 70, 'singapura': 70,
    'china': 20, 'rusia': 20
  },
  selandia_baru: { 
    'australia': 85, 'amerika serikat': 85, 'inggris': 85, 'kanada': 85,
    'cina': 35, 'rusia': 20
  },
  serbia: {
    'rusia': 85, 'china': 85,
    'amerika serikat': 35, 'kosovo': 20, 'albania': 20
  },
  turki: {
    'azerbaijan': 85, 'qatar': 85, 'libya': 85, 'somalia': 85,
    'inggris': 70, 'amerika serikat': 70, 'jerman': 70, 'pakistan': 70,
    'yunani': 35, 'siprus': 35, 'armenia': 35, 'suriah': 20
  },
  kuba: {
    'venezuela': 85, 'rusia': 85, 'china': 85, 'iran': 85, 'nikaragua': 85,
    'amerika serikat': 20
  },
  venezuela: {
    'kuba': 85, 'rusia': 85, 'china': 85, 'iran': 85, 'nikaragua': 85,
    'amerika serikat': 20, 'kolombia': 35
  }
};

const baseDir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations');
const TARGET_REGIONS = ['eropa', 'na', 'oceania', 'sa'];

function getGroupRelations(subjectCountry) {
    const overrides = {};
    for (const [groupName, members] of Object.entries(groups)) {
        if (members.includes(subjectCountry)) {
            members.forEach(m => {
                if (m !== subjectCountry) {
                    if (groupName === 'NATO_EU' || groupName === 'FiveEyes' || groupName === 'CSTO') {
                        overrides[m] = 85;
                    } else if (groupName === 'BRICS') {
                        overrides[m] = 75;
                    } else {
                        overrides[m] = 70; // Mercosur
                    }
                }
            });
        }
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

let updatedCount = 0;

TARGET_REGIONS.forEach(region => {
    const dir = path.join(baseDir, region);
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    files.forEach(filename => {
        if (!filename.endsWith('.ts')) return;
        
        const countryKey = filename.replace('.ts', '').replace(/_/g, ' ');
        const filePath = path.join(dir, filename);

        const groupOverrides = getGroupRelations(countryKey);
        const localOverrides = relationsMap[filename.replace('.ts', '')] || {}; 
        
        // Merge - explicit overrides beat group defaults
        const countryData = { ...groupOverrides, ...localOverrides };

        let content = fs.readFileSync(filePath, 'utf8');
        const updatedContent = content.replace(/\{\s*name:\s*"([^"]+)",\s*relation:\s*\d+\s*\}/g, (match, name) => {
            const rel = getRelationValue(name, countryData);
            return `{ name: "${name}", relation: ${rel} }`;
        });

        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`[${region}] Updated ${filename}`);
        updatedCount++;
    });
});

console.log(`Total files updated across all regions: ${updatedCount}`);
