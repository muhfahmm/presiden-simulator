const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\em\\app\\frontend\\src\\app\\database\\data\\semua_fitur_negara\\3_tempat_umum\\6_komersial';
const continents = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

continents.forEach(continent => {
  const continentDir = path.join(baseDir, continent);
  if (!fs.existsSync(continentDir)) return;

  const files = fs.readdirSync(continentDir);
  files.forEach(file => {
    if (!file.endsWith('.ts')) return;
    const filePath = path.join(continentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to find the object content inside { ... }
    // We target the "mall": X part and add others after it.
    if (content.includes('"mall"')) {
      // If it already has "hotel", skip it to avoid duplicates
      if (content.includes('"hotel"')) return;

      content = content.replace(/"mall":\s*(\d+)/, (match, val) => {
        return `"mall": ${val},\n  "hotel": 0,\n  "pusat_grosir_tekstil": 0`;
      });

      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${filePath}`);
    }
  });
});
