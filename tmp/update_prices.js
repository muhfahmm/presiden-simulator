const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\fhm\\em\\app\\frontend\\src\\app\\game\\components\\2_navigasi_menu\\2_navigasi_bawah\\7_kementrian\\1_database_menteri';
const dirs = fs.readdirSync(rootDir).filter(f => fs.statSync(path.join(rootDir, f)).isDirectory());

const priceMap = {
  ' 50000': ' 2500000',
  ' 100000': ' 7500000',
  ' 150000': ' 20000000',
  ' 250000': ' 50000000',
  ' 500000': ' 125000000',
  ' 1500000': ' 550000000'
};

dirs.forEach(dir => {
  const file = path.join(rootDir, dir, 'index.ts');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [oldPrice, newPrice] of Object.entries(priceMap)) {
      if (content.includes(`cost:${oldPrice}`)) {
        content = content.split(`cost:${oldPrice}`).join(`cost:${newPrice}`);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
});
