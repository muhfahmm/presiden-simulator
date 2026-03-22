const fs = require('fs');
const path = require('path');

const relationsMap = {
  aljazair: {
    'rusia': 85, 'china': 85, 'afrika selatan': 85, 'tunisia': 85, 'mauritania': 85, 'suriah': 85, 'palestina': 85,
    'mali': 70, 'niger': 70, 'libia': 70, 'mesir': 70, 'angola': 70, 'kuba': 70, 'venezuela': 70,
    'maroko': 20, 'israel': 20, 'prancis': 35, 'spanyol': 35
  },
  angola: {
    'china': 85, 'rusia': 85, 'portugal': 85, 'brasil': 85, 'afrika selatan': 85, 'kuba': 85,
    'namibia': 70, 'zambia': 70, 'republik demokratik kongo': 70, 'kongo': 70, 'mozambik': 70, 'zimbabwe': 70,
    'rwanda': 35
  },
  benin: {
    'nigeria': 85, 'prancis': 85,
    'togo': 70, 'ghana': 70, 'pantai gading': 70, 'senegal': 70, 'china': 70,
    'niger': 35, 'burkina faso': 35
  },
  botswana: {
    'afrika selatan': 85, 'namibia': 85, 'amerika serikat': 85, 'inggris': 85,
    'zambia': 70, 'zimbabwe': 70, 'lesotho': 70, 'eswatini': 70, 'china': 70, 'india': 70
  },
  burkina_faso: {
    'mali': 85, 'niger': 85, 'rusia': 85, 'iran': 85,
    'guinea': 70, 'china': 70, 'korea utara': 70,
    'prancis': 20, 'pantai gading': 35, 'ghana': 35, 'ukraina': 35,
    'guinea-bissau': 50, 'guiana prancis': 50 // Block overlap
  },
  burundi: {
    'republik demokratik kongo': 85, 'rusia': 85, 'china': 85,
    'tanzania': 70, 'uganda': 70, 'afrika selatan': 70,
    'rwanda': 20,
    'kongo': 50 // Block overlap
  },
  chad: {
    'prancis': 85, 'rusia': 85, 'republik afrika tengah': 85,
    'kamerun': 70, 'gabon': 70, 'niger': 70, 'sudan': 70,
    'libya': 30,
    'sudan selatan': 50 // Block overlap
  }
};

const dir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations', 'afrika');

function getRelationValue(name, countryData) {
    const lowerName = name.toLowerCase().trim();
    
    // 1. Exact match
    if (countryData[lowerName] !== undefined) {
        return countryData[lowerName];
    }
    
    // 2. Fuzzy match
    for (const key of Object.keys(countryData)) {
        if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
            return countryData[key];
        }
    }
    
    return 50; // default
}

let updatedCount = 0;

Object.keys(relationsMap).forEach(country => {
    const filePath = path.join(dir, `${country}.ts`);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const countryData = relationsMap[country];

    const updatedContent = content.replace(/\{\s*name:\s*"([^"]+)",\s*relation:\s*\d+\s*\}/g, (match, name) => {
        const rel = getRelationValue(name, countryData);
        return `{ name: "${name}", relation: ${rel} }`;
    });

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated ${country}.ts`);
    updatedCount++;
});

console.log(`Total files updated: ${updatedCount}`);
