const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\fhm\\em\\app\\frontend\\src\\app\\game\\components\\2_navigasi_menu\\2_navigasi_bawah\\7_kementrian\\1_database_menteri';
const dirs = fs.readdirSync(rootDir).filter(f => fs.statSync(path.join(rootDir, f)).isDirectory());

const effToCost = {
  '5': 2500000,
  '10': 7500000,
  '15': 20000000,
  '20': 50000000,
  '25': 125000000,
  '50': 550000000
};

dirs.forEach(dir => {
  const file = path.join(rootDir, dir, 'index.ts');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    for (const [eff, cost] of Object.entries(effToCost)) {
      // Regex to find { eff: X, cost: ANY_NUMBER,
      const regex = new RegExp(`{ eff: ${eff}, cost: \\d+,`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, `{ eff: ${eff}, cost: ${cost},`);
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(file, content);
      console.log(`Fixed/Updated ${file}`);
    }
  }
});
