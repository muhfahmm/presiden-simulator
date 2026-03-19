const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // exact spacing fit from previously written script 
    const blockToRemove = `        if (typeof waypointCoords !== 'undefined') {
          Object.keys(waypointCoords).forEach((name) => {
             const coord = waypointCoords[name];
             const x = ((coord.lon + 180) / 360) * mapWidth;
             const y = ((90 - coord.lat) / 180) * mapHeight;
             const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
             if (dist < 40) foundHover = true;
          });
        }`;

    if (content.includes(blockToRemove)) {
        content = content.replace(blockToRemove, '');
        fs.writeFileSync(filePath, content);
        console.log("waypointCoords fix applied to gamemap.tsx!");
    } else {
        console.log("waypointCoords target block NOT found in gamemap.tsx!");
    }
}
LinePlaceholder: true
