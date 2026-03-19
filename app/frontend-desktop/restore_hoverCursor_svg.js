const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Exact search for that commented block
    const target = `  // const hoverCursor = "pointer";\n  const dummyHover = \`url("data:image/svg+xml;utf8,<svg`;
    
    if (content.includes('const dummyHover =')) {
         // Replace dummyHover declaration to hoverCursor
         content = content.replace('// const hoverCursor = "pointer";\n  const dummyHover =', 'const hoverCursor =');
         fs.writeFileSync(filePath, content);
         console.log("hoverCursor restored!");
    } else {
         console.log("dummyHover statement NOT found!");
    }
}
LinePlaceholder: true
