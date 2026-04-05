const fs = require('fs');
const path = require('path');

const rootDir = 'c:/fhm/em/app/frontend/src/app';
const sectors = [
  { old: '1_infrastruktur', new: '1_Layanan Publik/1_infrastruktur' },
  { old: '2_pendidikan', new: '1_Layanan Publik/2_pendidikan' },
  { old: '3_kesehatan', new: '1_Layanan Publik/3_kesehatan' },
  { old: '4_hukum', new: '1_Layanan Publik/4_hukum' },
  { old: '5_olahraga', new: '1_Layanan Publik/5_olahraga' },
  { old: '6_komersial', new: '1_Layanan Publik/6_komersial' },
  { old: '7_hiburan', new: '1_Layanan Publik/7_hiburan' },
  { old: 'hunian_permukiman', new: '2_Hunian & Pemukiman/hunian_permukiman' }
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(rootDir);
console.log(`Found ${allFiles.length} files to process.`);

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  sectors.forEach(sector => {
    // Specifically target imports containing 3_tempat_umum
    const searchStr = `3_tempat_umum/${sector.old}`;
    const replaceStr = `3_tempat_umum/${sector.new}`;
    
    if (content.includes(searchStr)) {
      content = content.split(searchStr).join(replaceStr);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});

console.log('Global Import Refactor Complete.');
