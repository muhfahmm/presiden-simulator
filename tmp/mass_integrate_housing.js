const fs = require('fs');
const path = require('path');

const infraBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur';
const housingBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman';
const mainBase = 'c:/fhm/em/app/frontend/src/app/database/data/negara/benua/global';

const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

continents.forEach(continent => {
  const sourceDir = path.join(infraBase, continent);
  const housingDir = path.join(housingBase, continent);
  const mainDir = path.join(mainBase, continent);

  if (!fs.existsSync(sourceDir)) return;

  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  files.forEach(file => {
    const fileName = file.replace('.ts', '');
    const countryName = fileName.replace(/^\d+_/, '');
    const varName = `${countryName}_hunian`;

    // --- PART 1: Populate Housing Data ---
    let rs = getRandom(500, 5000);
    let ap = getRandom(50, 500);
    let ms = getRandom(1, 25);

    // Keep Indonesia's 1110 if it's indonesia
    if (countryName === 'indonesia') {
      rs = 1110;
      ap = 0;
      ms = 0;
    }

    const housingContent = `import { HunianData } from "..";

export const ${varName}: HunianData = {
  rumah_subsidi: ${rs},
  apartemen: ${ap},
  mansion: ${ms},
};
`;

    fs.writeFileSync(path.join(housingDir, file), housingContent);
    console.log(`Updated Housing: ${continent}/${file} (${rs}, ${ap}, ${ms})`);

    // --- PART 2: Integrate into Main Country File ---
    const mainFilePath = path.join(mainDir, file);
    if (fs.existsSync(mainFilePath)) {
      let mainContent = fs.readFileSync(mainFilePath, 'utf8');

      // 1. Add Import (if not present)
      const importLine = `import { ${varName} } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/${continent}/${fileName}";`;
      if (!mainContent.includes(varName)) {
        // Insert after existing imports
        const lastImportIndex = mainContent.lastIndexOf('import {');
        const nextLineIndex = mainContent.indexOf('\n', lastImportIndex);
        mainContent = mainContent.slice(0, nextLineIndex + 1) + importLine + '\n' + mainContent.slice(nextLineIndex + 1);
      }

      // 2. Add Property (if not present)
      const propertyItem = `  "hunian": ${varName},`;
      if (!mainContent.includes(`"hunian":`)) {
        // Find existing sektor properties (e.g. "sektor_hiburan")
        const searchPattern = '"sektor_hiburan":';
        if (mainContent.includes(searchPattern)) {
            mainContent = mainContent.replace(searchPattern, `${searchPattern}\n${propertyItem}`);
        } else {
            // Fallback: look for other sektor
            const fallbackPattern = '"sektor_listrik":';
            mainContent = mainContent.replace(fallbackPattern, `${fallbackPattern}\n${propertyItem}`);
        }
      }

      fs.writeFileSync(mainFilePath, mainContent);
      console.log(`Integrated: ${continent}/${file}`);
    }
  });
});

console.log('Global Mass Data Integration Complete.');
