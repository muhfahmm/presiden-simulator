const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Declare Cache Map inside useEffect top buffers (approx line 188)
    const renderLoopStart = `    const ctx = canvas.getContext("2d");\n    if (!ctx) return;`;
    const cacheDecl = `\n    // Line hitting cache\n    const drawnPaths: { pts: {rtX:number, rtY:number}[], origin: string, partner: string, originId: string, partnerId: string }[] = [];\n`;

    if (content.includes('const offsets = [0, mapWidth, mapWidth * 2];')) {
         content = content.replace('const offsets = [0, mapWidth, mapWidth * 2];', cacheDecl + '    const offsets = [0, mapWidth, mapWidth * 2];');
    }

    // 2. Clear cache inside offset.forEach loops (approx top of loop)
    // Actually, just clear drawnPaths.length = 0 at the absolute top of the continuous offset loop cycle or useEffect loop cycle !!
    content = content.replace('offsets.forEach(offset => {', 'drawnPaths.length = 0; // Clear line tap cache\n    offsets.forEach(offset => {');

    // 3. Cache paths inside uniqueSegments.forEach
    const cachePopulateTarget = `normalized.forEach((p, idx) => {`;
    const cachePopulateValue = `drawnPaths.push({ pts: normalized, origin: seg.origin || "", partner: seg.partner || "", originId: seg.originId || "", partnerId: seg.partnerId || "" });\n              normalized.forEach((p, idx) => {`;
    
    // Safety check to only insert ONCE
    if (content.includes(cachePopulateTarget) && !content.includes('drawnPaths.push')) {
         content = content.replace(cachePopulateTarget, cachePopulateValue);
    }

    // 4. Update onClick handler below layout bounds
    const clickTargetRegex = /Object\.keys\(waypointCoords\)\.forEach\(\(name\) => \{[\s\S]*?if\s*\(closest\s*&&\s*minDist\s*<\s*60\)\s*\{[\s\S]*?setSelectedWp\(null\);\s*\}/g;

    const clickReplacer = `Object.keys(waypointCoords).forEach((name) => {
             if (hiddenWaypoints.includes(name)) return;
             const coord = waypointCoords[name];
             const x = ((coord.lon + 180) / 360) * mapWidth;
             const y = ((90 - coord.lat) / 180) * mapHeight;
             const dist = Math.sqrt((mappedClickX - x) ** 2 + (clickY - y) ** 2);
             if (dist < minDist) { minDist = dist; closest = { name: name }; }
          });
        }

        // --- DIRECT LINE CLICKING HIT TESTS ---
        let clickedPath: any = null;
        if (minDist >= 60 && typeof drawnPaths !== 'undefined') {
            let minLineDist = 40; // Pixel threshold to snap click to a red line
            drawnPaths.forEach(line => {
                line.pts.forEach(pt => {
                    const lx = pt.rtX * mapWidth;
                    const ly = pt.rtY * mapHeight;
                    const lDist = Math.sqrt((mappedClickX - lx) ** 2 + (clickY - ly) ** 2);
                    if (lDist < minLineDist) {
                        minLineDist = lDist;
                        clickedPath = line;
                    }
                });
            });
        }

        if (closest && minDist < 60) {
          const targetName = closest.name;
          setSelectedWp(prev => prev === targetName ? null : targetName);
          onSelect(targetName);
        } else if (clickedPath) {
          // If a line is clicked, highlight that line continuous by setting its point origin !!
          const targetName = clickedPath.origin || clickedPath.originId || clickedPath.partner;
          setSelectedWp(prev => prev === targetName ? null : targetName);
        } else {
          setSelectedWp(null);
        }`;

    content = content.replace(clickTargetRegex, clickReplacer);

    fs.writeFileSync(filePath, content);
    console.log("Direct line hit testing added to TradeMapCanvas successfully!");
}
LinePlaceholder: true
