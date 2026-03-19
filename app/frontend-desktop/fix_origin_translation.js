const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Update Map Declaration to include Id props
    content = content.replace(
        'const uniqueSegments = new Map<string, { start: any, end: any, isFinal: boolean, partner: string, origin?: string }>();',
        'const uniqueSegments = new Map<string, { start: any, end: any, isFinal: boolean, partner: string, origin?: string, originId?: string, partnerId?: string }>();'
    );

    // 2. Update Loop 1 inner `.set` to include Id props
    const loop1Target = `if (!uniqueSegments.has(key) || isFinal) {
                    uniqueSegments.set(key, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: { lon: nextWpLon, lat: nextWpLat }, isFinal, partner: wpName, origin: uNameEn });
                  }`;
    const loop1Replacer = `if (!uniqueSegments.has(key) || isFinal) {
                    uniqueSegments.set(key, { 
                      start: { lon: currentPos.lon, lat: currentPos.lat }, 
                      end: { lon: nextWpLon, lat: nextWpLat }, 
                      isFinal, partner: wpName, origin: uNameEn, originId: uNameId, partnerId: nextWpObj?.name_id || wpName 
                    });
                  }`;
                  
    content = content.replace(loop1Target, loop1Replacer);

    // 2.5 Update Loop 1.5 inner `.set` to include Id props
    const loop15Target = `if (!uniqueSegments.has(key) || isFinal) {
                         uniqueSegments.set(key, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: { lon: nextWpLon, lat: nextWpLat }, isFinal, partner: wpName, origin: originName });
                      }`;
    const loop15Replacer = `if (!uniqueSegments.has(key) || isFinal) {
                         const startWpMatch = centersData.find(c => c.name_en === originName || c.name_id === originName);
                         uniqueSegments.set(key, { 
                            start: { lon: currentPos.lon, lat: currentPos.lat }, 
                            end: { lon: nextWpLon, lat: nextWpLat }, 
                            isFinal, partner: wpName, origin: originName, originId: startWpMatch?.name_id || originName, partnerId: nextWpObj?.name_id || wpName
                         });
                      }`;
    content = content.replace(loop15Target, loop15Replacer);

    // 3. Update style verification to check both Id and En
    const styleTarget = `const isSelected = selectedWp && (seg.origin === selectedWp || seg.partner === selectedWp);`;
    const styleReplacer = `const isSelected = selectedWp && (
                 seg.origin === selectedWp || seg.partner === selectedWp ||
                 (seg.originId && seg.originId === selectedWp) ||
                 (seg.partnerId && seg.partnerId === selectedWp)
              );`;
              
    content = content.replace(styleTarget, styleReplacer);

    fs.writeFileSync(filePath, content);
    console.log("Translations ID matching applied to uniqueSegments successfully!");
}
LinePlaceholder: true
