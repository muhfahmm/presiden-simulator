const fs = require('fs');
const path = require('path');

const GLOBAL_PATH = path.join(__dirname, 'src', 'app', 'database', 'data', 'negara', 'benua', 'global');

const continents = ['asia', 'afrika', 'eropa', 'na', 'sa', 'oceania'];

function traverseDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      traverseDir(dirPath, callback);
    } else if (f.endsWith('.ts') && f !== 'index.ts') {
      callback(dirPath);
    }
  });
}

continents.forEach(continent => {
  const continentPath = path.join(GLOBAL_PATH, continent);
  if (!fs.existsSync(continentPath)) return;
  
  traverseDir(continentPath, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already injected
    if (content.includes('sektor_komersial":') && content.includes('sektor_hiburan":')) {
      return; 
    }
    
    const filename = path.basename(filePath, '.ts'); // e.g. 66_india
    const match = filename.match(/^\d+_(.+)$/);
    if (!match) return;
    
    let countryId = match[1]; // india
    
    const importKomersial = `import { ${countryId}_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/${continent}/${filename}";\n`;
    const importHiburan = `import { ${countryId}_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/${continent}/${filename}";\n`;

    // Inject imports below the olahraga import
    const olahragaImportRegex = new RegExp(`import { ${countryId}_olahraga }.*?;\\n`);
    if (olahragaImportRegex.test(content)) {
       content = content.replace(olahragaImportRegex, match => match + importKomersial + importHiburan);
    } else {
       // fallback, inject at top
       content = importKomersial + importHiburan + content;
    }

    // Inject assignments
    const olahragaAssignRegex = new RegExp(`"sektor_olahraga":\\s*${countryId}_olahraga,`);
    if (olahragaAssignRegex.test(content)) {
       content = content.replace(olahragaAssignRegex, match => match + `\n  "sektor_komersial": ${countryId}_komersial,\n  "sektor_hiburan": ${countryId}_hiburan,`);
    } else {
       // Just find "hukum": [country]_hukum,
        const hukumAssignRegex = new RegExp(`"hukum":\\s*${countryId}_hukum,`);
        if (hukumAssignRegex.test(content)) {
            content = content.replace(hukumAssignRegex, match => match + `\n  "sektor_komersial": ${countryId}_komersial,\n  "sektor_hiburan": ${countryId}_hiburan,`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filename);
  });
});
