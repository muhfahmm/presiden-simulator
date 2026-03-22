const fs = require('fs');
const path = require('path');

// Kelompok Regional (Default)
const groups = {
  ASEAN: ['indonesia', 'malaysia', 'singapura', 'thailand', 'filipina', 'vietnam', 'brunei', 'kamboja', 'laos', 'myanmar'],
  GCC: ['arab saudi', 'uni emirat arab', 'kuwait', 'qatar', 'bahrain', 'oman']
};

const relationsMap = {
  china: { 
    'rusia': 85, 'pakistan': 85, 'korea utara': 85, 'iran': 85, 'kamboja': 85, 'laos': 85, 'myanmar': 85,
    'amerika serikat': 20, 'taiwan': 20, 'india': 20, 'jepang': 20,
    'filipina': 35, 'vietnam': 35, 'inggris': 35
  },
  india: { 
    'rusia': 85, 'bhutan': 85, 'bangladesh': 85,
    'amerika serikat': 70, 'jepang': 70, 'israel': 70, 'prancis': 70, 'vietnam': 70,
    'pakistan': 20, 'china': 20
  },
  pakistan: { 
    'china': 85, 'arab saudi': 85, 'turki': 85,
    'qatar': 70, 'malaysia': 70,
    'india': 20,
    'afganistan': 35
  },
  jepang: { 
    'amerika serikat': 85, 'australia': 85, 'inggris': 85,
    'korea selatan': 70, 'india': 70,
    'korea utara': 20, 'china': 20
  },
  korea_utara: { 
    'china': 85, 'rusia': 85, 'iran': 85, 'suriah': 85,
    'korea selatan': 20, 'amerika serikat': 20, 'jepang': 20
  },
  korea_selatan: { 
    'korea utara': 20,
    'amerika serikat': 85,
    'jepang': 70
  },
  iran: { 
    'suriah': 85, 'irak': 85, 'rusia': 85, 'china': 85,
    'israel': 20, 'amerika serikat': 20, 'arab saudi': 20
  },
  arab_saudi: { 
    'bahrain': 85, 'uni emirat arab': 85, 'kuwait': 85, 'mesir': 85, 'amerika serikat': 85,
    'china': 70, 'rusia': 70, 'pakistan': 70,
    'iran': 20
  },
  israel: { 
    'amerika serikat': 85, 'inggris': 85, 'jerman': 85,
    'india': 70, 'maroko': 70, 'uni emirat arab': 70, 'bahrain': 70,
    'iran': 20, 'suriah': 20, 'lebanon': 20, 'yaman': 20, 'palestina': 20
  },
  indonesia: { 
    'arab saudi': 75, 'jepang': 75, 'china': 75,
    'israel': 40
  }
};

const dir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations', 'asia');

function getGroupRelations(subjectCountry) {
    const overrides = {};
    for (const [groupName, members] of Object.entries(groups)) {
        if (members.includes(subjectCountry)) {
            members.forEach(m => {
                if (m !== subjectCountry) {
                    overrides[m] = groupName === 'GCC' ? 85 : 70;
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

const files = fs.readdirSync(dir);
let updatedCount = 0;

files.forEach(filename => {
    if (!filename.endsWith('.ts')) return;
    const countryKey = filename.replace('.ts', '').replace(/_/g, ' ');
    const filePath = path.join(dir, filename);

    const groupOverrides = getGroupRelations(countryKey);
    const localOverrides = relationsMap[filename.replace('.ts', '')] || {}; // exact key as file name (without extension)
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
