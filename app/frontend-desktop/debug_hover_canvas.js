const fs = require('fs');
const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const loggingLine = `        let foundHover = false;
        let debugMinDist = 99999;
        let closestName = "";
        `;

    const checkLine = `          if (dist < 40) foundHover = true;
          if (dist < debugMinDist) { debugMinDist = dist; closestName = center.name_en; }
        `;

    const consoleLine = `        setIsHovering(foundHover);
        if (Math.random() < 0.05) console.log("Hover debugging:", foundHover, "Min dist to", closestName, "is", debugMinDist);
      }}`;

    // Overwrite with detailed prints
    content = content.replace('let foundHover = false;', loggingLine);
    content = content.replace('if (dist < 40) foundHover = true;', checkLine);
    content = content.replace('setIsHovering(foundHover);', consoleLine);

    // Also let's temporarily force standard 'pointer' style cursor to rule out SVG malforms !!
    content = content.replace('const hoverCursor = `url("data:image/svg+xml;utf8,<svg', '// const hoverCursor = `url("data:image/svg+xml;utf8,<svg');
    if (!content.includes('const hoverCursor = "pointer";')) {
         content = content.replace('const hoverCursor = `url', 'const hoverCursor = "pointer";\n  const dummyHover = `url');
    }

    fs.writeFileSync(filePath, content);
    console.log("Hover log injected and cursor forced to 'pointer' native state!");
}
LinePlaceholder: true
