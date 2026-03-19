const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Downscale 120 to 60
        content = content.replace(/dist < 120/g, 'dist < 60');
        content = content.replace(/minDist < 120/g, 'minDist < 60');

        fs.writeFileSync(file, content);
        console.log(`Radius calibrated to 60 in ${path.basename(file)}`);
    } else {
        console.log(`File missing: ${file}`);
    }
});

console.log("All canvas targets calibrated for medium-snapping radius!");
LinePlaceholder: true
