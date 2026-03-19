const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // exact spacing fit from previously viewed lines 614-621
    const redundantBlock = `              // Style\n              ctx.lineWidth = 3.5;\n              ctx.strokeStyle = "#ef4444";`;

    if (content.includes(redundantBlock)) {
        content = content.replace(redundantBlock, '');
        fs.writeFileSync(filePath, content);
         console.log("Redundant RED style block removed successfully!");
    } else {
         console.log("Redundant block NOT found in exact string matching. Checking Regex.");
         const regex = /\/\/ Style\s+ctx\.lineWidth = 3\.5;\s+ctx\.strokeStyle = "#ef4444";/;
         content = content.replace(regex, '');
         fs.writeFileSync(filePath, content);
         console.log("Redundant RED style block removed via Regex!");
    }
}
LinePlaceholder: true
