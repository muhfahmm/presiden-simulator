const fs = require('fs');
const path = require('path');

const profileBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/0_profiles';
const housingBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman';

const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

function calculate(pop) {
  return {
    rs: Math.floor(pop / 50000),
    ap: Math.floor(pop / 250000),
    ms: Math.floor(pop / 2500000)
  };
}

continents.forEach(continent => {
  const profileDir = path.join(profileBase, continent);
  const housingDir = path.join(housingBase, continent);

  if (!fs.existsSync(profileDir)) return;

  const files = fs.readdirSync(profileDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  files.forEach(file => {
    const profilePath = path.join(profileDir, file);
    const housingPath = path.join(housingDir, file);
    const profileContent = fs.readFileSync(profilePath, 'utf8');

    // Extract population (handle number or quoted string)
    const popMatch = profileContent.match(/"jumlah_penduduk":\s*(\d+)/);
    if (popMatch) {
      const population = parseInt(popMatch[1]);
      const data = calculate(population);

      const fileName = file.replace('.ts', '');
      const countryName = fileName.replace(/^\d+_/, '');
      const varName = `${countryName}_hunian`;

      const housingContent = `import { HunianData } from "..";

export const ${varName}: HunianData = {
  rumah_subsidi: ${data.rs},
  apartemen: ${data.ap},
  mansion: ${data.ms},
};
`;

      fs.writeFileSync(housingPath, housingContent);
      console.log(`Updated Proportional Data: ${continent}/${file} (Pop: ${population.toLocaleString()} -> RS: ${data.rs}, AP: ${data.ap}, MS: ${data.ms})`);
    } else {
      console.warn(`Could not find population for: ${continent}/${file}`);
    }
  });
});

console.log('Population-Proportional Housing Update Complete.');
