const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\em\\app\\frontend\\src\\app\\database\\data\\semua_fitur_negara';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(baseDir);
console.log(`Found ${files.length} files in database.`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Regex 1: Match 'biaya_pemeliharaan: number,' in objects (with optional trailing comma)
  const patternObject = /^\s*biaya_pemeliharaan:\s*\d+,?\s*$/gm;
  
  // Regex 2: Match 'biaya_pemeliharaan?: number;' or 'biaya_pemeliharaan: number;' in interfaces
  const patternInterface = /^\s*biaya_pemeliharaan\??:\s*number;?\s*$/gm;

  let newContent = content.replace(patternObject, '');
  newContent = newContent.replace(patternInterface, '');

  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated database file: ${file}`);
  }
});
