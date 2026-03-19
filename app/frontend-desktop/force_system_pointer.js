const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

let count = 0;
[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Exact regex to match custom hover SVG cursor to replace
        const regex = /const hoverCursor = \`url\([\s\S]*?\`;/g;
        
        if (content.match(regex)) {
             content = content.replace(regex, 'const hoverCursor = "pointer";');
             fs.writeFileSync(file, content);
             console.log(`Forced standard 'pointer' in ${path.basename(file)}`);
             count++;
        }
    }
});

console.log(`Updated hover cursors to standard hand pointers in ${count} files.`);
LinePlaceholder: true
