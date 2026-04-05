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

    // Fix the specific corruption pattern from a previous script
    // Pattern: "sektor_listrik":\n  "hunian": [var_hunian], [var_listrik],
    const brokenRegex = /"sektor_listrik":\s+("hunian":\s+(\w+),\s+(\w+),)/g;
    
    if (brokenRegex.test(content)) {
        content = content.replace(brokenRegex, (match, p1, hunianVar, listrikVar) => {
            return `"sektor_listrik": ${listrikVar},\n  "hunian": ${hunianVar},`;
        });
        changed = true;
    }

    // Secondary fix for cases where it might have merged onto one line or slightly different spacing
    const brokenRegex2 = /"sektor_listrik":\s*"hunian":\s*(\w+),\s*(\w+),/g;
    if (brokenRegex2.test(content)) {
        content = content.replace(brokenRegex2, `"sektor_listrik": $2,\n  "hunian": $1,`);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(mainFilePath, content);
        console.log(`Repaired: ${continent}/${file}`);
    }
  });
});

console.log('Mass Repair Complete.');
