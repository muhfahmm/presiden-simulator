const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('#e4a100')) {
         content = content.replace('#e4a100', '#00e5ff');
         fs.writeFileSync(filePath, content);
         console.log("Highlight color changed to Neon Cyan/Blue!");
    } else {
         console.log("Highlight target color code #e4a100 not found!");
    }
}
LinePlaceholder: true
