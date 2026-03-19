const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find absolute location to delete double brackets
    const targetBlockRegex = /if \(Math\.random\(\) < 0\.05\) console\.log[\s\S]*?\}\}[\s\r\n]*\}\}/g;

    const matches = content.match(targetBlockRegex);
    if (matches) {
        console.log(`Found ${matches.length} matches to fix!`);
        content = content.replace(targetBlockRegex, 'if (Math.random() < 0.05) console.log("Hover debugging:", foundHover, "Min dist to", closestName, "is", debugMinDist);\n      }}');
        fs.writeFileSync(filePath, content);
        console.log("Double bracket fix applied successfully!");
    } else {
        console.log("Target double bracket block NOT found in file!");
    }
}
LinePlaceholder: true
