const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        const regex = /onMouseMove=\{\(e\) => \{[\s\S]*?setIsHovering\(foundHover\);\s*\}\}/g;
        if (content.match(regex)) {
             content = content.replace(regex, 'onMouseMove={() => {}}');
             console.log(`Disabled onMouseMove in ${path.basename(file)}`);
        } else {
             // Fallback for simple matches
             content = content.replace(/onMouseMove=\{\(e\) => \{[\s\S]*?\}\}/g, 'onMouseMove={() => {}}');
        }
        
        fs.writeFileSync(file, content);
    }
});

console.log("All canvas hovers disabled!");
LinePlaceholder: true
