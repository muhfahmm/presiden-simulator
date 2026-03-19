const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const target = 'const normalized = smoothPath(rawNormalized);';
const replacer = 'const normalized = (seg.partner === "Panama Trunk" || seg.partner === "Mid-Atlantic Trunk") ? rawNormalized : smoothPath(rawNormalized);';

if (content.includes(target)) {
    content = content.replace(target, replacer);
    fs.writeFileSync(filePath, content);
    console.log("Smoother bypassed successfully!");
} else {
    console.log("Target string NOT found inside file!");
}
LinePlaceholder: true
