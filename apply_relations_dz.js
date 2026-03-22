const fs = require('fs');
const path = require('path');

// Kelompok Regional (Default)
const groups = {
  AES: ['mali', 'burkina faso', 'niger'],
  EAC: ['kenya', 'uganda', 'tanzania', 'rwanda', 'burundi', 'sudan selatan', 'republik demokratik kongo'],
  SADCC: ['namibia', 'angola', 'botswana', 'mozambik', 'zimbabwe', 'zambia']
};

const relationsMap = {
  // A-C (Existing)
  aljazair: { 'rusia': 85, 'china': 85, 'afrika selatan': 85, 'tunisia': 85, 'mauritania': 85, 'suriah': 85, 'palestina': 85, 'mali': 70, 'niger': 70, 'libia': 70, 'mesir': 70, 'angola': 70, 'kuba': 70, 'venezuela': 70, 'maroko': 20, 'israel': 20, 'prancis': 35, 'spanyol': 35 },
  angola: { 'china': 85, 'rusia': 85, 'portugal': 85, 'brasil': 85, 'afrika selatan': 85, 'kuba': 85, 'namibia': 70, 'zambia': 70, 'republik demokratik kongo': 70, 'kongo': 70, 'mozambik': 70, 'zimbabwe': 70, 'rwanda': 35 },
  benin: { 'nigeria': 85, 'prancis': 85, 'togo': 70, 'ghana': 70, 'pantai gading': 70, 'senegal': 70, 'china': 70, 'niger': 35, 'burkina faso': 35 },
  botswana: { 'afrika selatan': 85, 'namibia': 85, 'amerika serikat': 85, 'inggris': 85, 'zambia': 70, 'zimbabwe': 70, 'lesotho': 70, 'eswatini': 70, 'china': 70, 'india': 70 },
  'burkina faso': { 'mali': 85, 'niger': 85, 'rusia': 85, 'iran': 85, 'guinea': 70, 'china': 70, 'korea utara': 70, 'prancis': 20, 'pantai gading': 35, 'ghana': 35, 'ukraina': 35, 'guinea-bissau': 50, 'guiana prancis': 50 },
  burundi: { 'republik demokratik kongo': 85, 'rusia': 85, 'china': 85, 'tanzania': 70, 'uganda': 70, 'afrika selatan': 70, 'rwanda': 20, 'kongo': 50 },
  chad: { 'prancis': 85, 'rusia': 85, 'republik afrika tengah': 85, 'kamerun': 70, 'gabon': 70, 'niger': 70, 'sudan': 70, 'libya': 30, 'sudan selatan': 50 },

  // D-Z Major Overrides
  mesir: { 
    'sudan': 85, 'uni emirat arab': 85, 'arab saudi': 85, 'kuwait': 85, 'bahrain': 85, 'amerika serikat': 85, 'prancis': 85, 
    'yunani': 70, 'siprus': 70, 'rusia': 70, 'china': 70, 'uganda': 70, 
    'ethiopia': 20, 'turki': 35, 'iran': 35,
    'sudan selatan': 50 // Block overlap
  },
  libya: { 
    'turki': 85, 'qatar': 85, 
    'italia': 70, 'inggris': 70, 'amerika serikat': 70, 'tunisia': 70, 'aljazair': 70, 
    'mesir': 35, 'rusia': 35 
  },
  maroko: { 
    'amerika serikat': 85, 'israel': 85, 'prancis': 85, 'arab saudi': 85, 'uni emirat arab': 85, 
    'spanyol': 70, 'inggris': 70, 
    'aljazair': 20, 'iran': 35 
  },
  nigeria: { 
    'inggris': 85, 'amerika serikat': 85, 'ghana': 85, 'benin': 85, 
    'china': 70, 'pantai gading': 70, 'senegal': 70, 
    'niger': 35, 'mali': 35, 'burkina faso': 35 
  },
  rwanda: { 
    'uganda': 85, 'inggris': 85, 'amerika serikat': 85, 
    'prancis': 70, 'mozambik': 70, 'republik afrika tengah': 70, 
    'republik demokratik kongo': 20, 'burundi': 20 
  },
  kenya: { 
    'amerika serikat': 85, 'inggris': 85, 'uganda': 85, 'tanzania': 85, 'rwanda': 85, 
    'republik demokratik kongo': 70, 'ethiopia': 70, 'china': 70, 
    'somalia': 35 
  },
  somalia: { 
    'turki': 85, 'qatar': 85, 'eritrea': 85, 
    'kenya': 70, 'uganda': 70, 
    'ethiopia': 20 
  },
  ethiopia: { 
    'uni emirat arab': 85, 'china': 85, 'rusia': 85, 
    'djibouti': 70, 'kenya': 70, 'uganda': 70, 'sudan selatan': 70, 
    'mesir': 20, 'somalia': 20 
  },
  'republik sudan': { 
    'mesir': 85, 'arab saudi': 85, 
    'chad': 30, 'uni emirat arab': 30 
  },
  'sudan selatan': { 
    'uganda': 85, 'kenya': 85, 
    'republik sudan': 70, 'ethiopia': 70 
  }
};

const dir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations', 'afrika');

function getGroupRelations(subjectCountry) {
    const overrides = {};
    for (const [groupName, members] of Object.entries(groups)) {
        if (members.includes(subjectCountry)) {
            members.forEach(m => {
                if (m !== subjectCountry) {
                    overrides[m] = groupName === 'AES' ? 85 : 70;
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
    const localOverrides = relationsMap[countryKey] || {};
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
