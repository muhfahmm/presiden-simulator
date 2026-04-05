const fs = require('fs');
const path = require('path');

const sourceBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur';
const targetBase = 'c:/fhm/em/app/frontend/src/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman';

const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

continents.forEach(continent => {
  const sourceDir = path.join(sourceBase, continent);
  const targetDir = path.join(targetBase, continent);

  if (!fs.existsSync(sourceDir)) {
    console.warn(`Source directory not found: ${sourceDir}`);
    return;
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const continentExports = [];

  files.forEach(file => {
    const fileName = file.replace('.ts', '');
    const countryName = fileName.replace(/^\d+_/, ''); // remove number prefix for variable
    const varName = `${countryName}_hunian`;

    const content = `import { HunianData } from "..";

export const ${varName}: HunianData = {
  rumah_subsidi: 0,
  apartemen: 0,
  mansion: 0,
};
`;

    fs.writeFileSync(path.join(targetDir, file), content);
    continentExports.push(`export * from "./${fileName}";`);
    console.log(`Generated: ${continent}/${file}`);
  });

  // Create Continent Index
  fs.writeFileSync(path.join(targetDir, 'index.ts'), continentExports.join('\n') + '\n');
  console.log(`Created Index for ${continent}`);
});

console.log('Housing Database Scaffold for 207 Countries Complete.');
