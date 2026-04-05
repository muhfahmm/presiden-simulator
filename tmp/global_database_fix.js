const fs = require('fs');
const path = require('path');

const mainBase = 'c:/fhm/em/app/frontend/src/app/database/data/negara/benua/global';
const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

continents.forEach(continent => {
  const mainDir = path.join(mainBase, continent);
  if (!fs.existsSync(mainDir)) return;

  const files = fs.readdirSync(mainDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

  files.forEach(file => {
    const mainFilePath = path.join(mainDir, file);
    let content = fs.readFileSync(mainFilePath, 'utf8');
    let changed = false;

    // Fixed Regex:
    // Group 1: The key that lost its value (e.g. sektor_hiburan or sektor_listrik)
    // Group 2: The hunian property name (always "hunian")
    // Group 3: The hunian variable value (e.g. qatar_hunian)
    // Group 4: The original value for group 1 (e.g. qatar_listrik)
    const complexRegex = /"([^"]+)":\s+"hunian":\s+(\w+),\s+(\w+),/g;
    
    if (complexRegex.test(content)) {
        content = content.replace(complexRegex, (match, key, hunianVar, originalVar) => {
            return `"${key}": ${originalVar},\n  "hunian": ${hunianVar},`;
        });
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(mainFilePath, content);
        console.log(`Repaired Global Pattern in: ${continent}/${file}`);
    }
  });
});

console.log('Massive Global Database Repair Complete.');
