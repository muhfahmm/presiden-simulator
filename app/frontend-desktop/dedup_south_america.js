const fs = require('fs');
const path = require('path');

const dir = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/regions/amerika_selatan';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.ts')) return; // Include index/steering as well!
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const uniqueLines = [];
  const seenKeys = new Set();

  lines.forEach(l => {
     const keyMatch = l.match(/"([^"]+)"\s*:/);
     if (keyMatch) {
         const key = keyMatch[1];
         if (seenKeys.has(key)) {
             console.log(`Skipping duplicate key [${key}] in ${file}`);
             return; 
         }
         seenKeys.add(key);
     }
     uniqueLines.push(l);
  });

  fs.writeFileSync(filePath, uniqueLines.join('\n'));
  console.log(`Successfully deduplicated ${file}`);
});
console.log("Deduplication complete!");
LinePlaceholder: true
