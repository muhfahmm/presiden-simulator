const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

const onMouseMoveBody = `onMouseMove={(e) => {
        if (typeof active !== 'undefined' && !active) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const clickX = ((e.clientX - rect.left) / rect.width) * (mapWidth * 3);
        const clickY = ((e.clientY - rect.top) / rect.height) * mapHeight;
        const mappedClickX = clickX % mapWidth;

        let foundHover = false;
        centersData.forEach((center: any) => {
          const x = ((center.lon + 180) / 360) * mapWidth;
          const y = ((90 - center.lat) / 180) * mapHeight;
          const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
          if (dist < 40) foundHover = true;
        });

        if (typeof waypointCoords !== 'undefined') {
          Object.keys(waypointCoords).forEach((name) => {
             const coord = waypointCoords[name];
             const x = ((coord.lon + 180) / 360) * mapWidth;
             const y = ((90 - coord.lat) / 180) * mapHeight;
             const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
             if (dist < 40) foundHover = true;
          });
        }

        setIsHovering(foundHover);
      }}`;

let count = 0;
[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        if (content.includes('onMouseMove={() => {}}')) {
             content = content.replace('onMouseMove={() => {}}', onMouseMoveBody);
             fs.writeFileSync(file, content);
             console.log(`Cursor pointer restored in ${path.basename(file)}`);
             count++;
        }
    }
});

console.log(`Cursor updates applied to ${count} files.`);
LinePlaceholder: true
