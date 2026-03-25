const fs = require('fs');
const path = require('path');

const dir = 'src/app/select-country/data/countries';

const pricesBlock = `"prices": {
    "priceRice": 15000,
    "priceBeef": 120000,
    "priceChicken": 40000,
    "priceOil": 18000,
    "priceSugar": 16000,
    "priceEgg": 30000,
    "priceFuel": 12500,
    "priceElectric": 1500,
    "priceWater": 5000,
    "priceMedicine": 150000,
    "priceEducation": 500000
  }`;

let count = 0;

function processDir(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') && !fullPath.includes('index.ts') && !fullPath.includes('_index.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We will replace the existing "prices": { ... } block
      const regex = /"prices"\s*:\s*\{[^}]+\}/;
      if (regex.test(content)) {
        content = content.replace(regex, pricesBlock);
        fs.writeFileSync(fullPath, content);
        count++;
      } else {
        console.log('Failed to find prices block in', fullPath);
      }
    }
  }
}

processDir(dir);
console.log(`Successfully updated prices in ${count} countries to nominal integers.`);
