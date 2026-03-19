const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const isPanamaCrossingReplacer = `const isPanamaCrossing = ((currentPos.lon < -78.5 && nextWpLon > -76.5) || (currentPos.lon > -76.5 && nextWpLon < -78.5)) && currentPos.lat > 1.0 && nextWpLat > 1.0 && currentPos.lat < 15.0 && nextWpLat < 15.0 && wpName !== "Panama" && Math.abs(currentPos.lon - (-79.53)) > 0.5 && Math.abs(nextWpLon - (-79.53)) > 0.5;
                  if (isPanamaCrossing) {
                    const panamaNode = { lon: -79.53, lat: 8.96 };
                    const key1 = \`\${currentPos.lon.toFixed(1)},\${currentPos.lat.toFixed(1)}->\${panamaNode.lon.toFixed(1)},\${panamaNode.lat.toFixed(1)}\`;
                    uniqueSegments.set(key1, { start: { lon: currentPos.lon, lat: currentPos.lat }, end: panamaNode, isFinal: false, partner: "Panama Trunk" });
                    const key2 = \`\${panamaNode.lon.toFixed(1)},\${panamaNode.lat.toFixed(1)}->\${nextWpLon.toFixed(1)},\${nextWpLat.toFixed(1)}\`;
                    uniqueSegments.set(key2, { start: panamaNode, end: { lon: nextWpLon, lat: nextWpLat }, isFinal: isFinal, partner: wpName });
                    currentPos = { lon: nextWpLon, lat: nextWpLat };
                    return;
                  }`;

const regex = /const isPanamaCrossing = \(\(currentPos\.lat < 8\.5[\s\S]*?currentPos = \{ lon: nextWpLon, lat: nextWpLat \};[\s]*return;[\s]*\}/g;

const matches = content.match(regex);
if (matches) {
    console.log(`Found ${matches.length} matches. Replacing...`);
    content = content.replace(regex, isPanamaCrossingReplacer);
    fs.writeFileSync(filePath, content);
    console.log("Replaced successfully!");
} else {
    console.log("No matches found!");
}
LinePlaceholder: true
