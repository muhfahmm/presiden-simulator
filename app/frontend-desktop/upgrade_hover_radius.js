const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Match dist < 40 and replace with 120
        content = content.replace(/dist < 40/g, 'dist < 120');
        
        // Also increase the onClick condition radius if present
        content = content.replace(/minDist < 40/g, 'minDist < 120');

        fs.writeFileSync(file, content);
        console.log(`Radius upgraded to 120 in ${path.basename(file)}`);
    } else {
        console.log(`File missing: ${file}`);
    }
});

console.log("All canvas targets made highly responsive!");
LinePlaceholder: true
