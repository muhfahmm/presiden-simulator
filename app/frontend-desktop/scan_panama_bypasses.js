const fs = require('fs');
const path = require('path');

const regionsDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/regions';
const regionFolders = ['amerika_utara', 'amerika_tengah', 'amerika_selatan', 'eropa', 'asia', 'oceania'];

const southAmericaNodes = [
    'Colombia', 'Kolombia', 'Venezuela', 'Guyana', 'Suriname', 'French Guiana', 'Guyana Perancis',
    'Brazil', 'Brasil', 'Uruguay', 'Argentina', 'Chile', 'Peru', 'Ecuador', 'Ekuador', 'Bolivia',
    'Steer Panama South', 'Steer Colombia West', 'Steer Ecuador West', 'Steer Peru West', 'Steer Chile Central',
    'Steer Drake Passage', 'Steer Falklands', 'Steer Argentina East', 'Steer Brazil South', 'Steer Brazil East',
    'Steer Amazon Delta', 'Steer Venezuela North', 'Steer Guajira Offshore'
];

let bypassCount = 0;

regionFolders.forEach(folder => {
  const dir = path.join(regionsDir, folder);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (!file.endsWith('.ts') || file.startsWith('_')) return;

    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const regex = /"([^"]+)"\s*:\s*\[([\s\S]*?)\]/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        const dest = match[1];
        const arrayStr = match[2];
        const nodes = arrayStr.split(',').map(n => n.replace(/["\s\n\[\]]+/g, '').trim()).filter(Boolean);

        if (nodes.length === 0) continue;

        const hasSouth = nodes.some(n => southAmericaNodes.includes(n));
        const hasPanama = nodes.includes("Panama") || nodes.includes("Steer Panama Crossing");

        if (hasSouth && !hasPanama) {
            const isCrossing = nodes.some(n => !southAmericaNodes.includes(n)); 
            if (isCrossing) {
                console.log(`[BYPASS] In ${folder}/${file} for destination "${dest}":`);
                console.log(`  Nodes: ${nodes.join(' -> ')}`);
                bypassCount++;
            }
        }
    }
  });
});

console.log(`Total Bypasses Found: ${bypassCount}`);
LinePlaceholder: true
