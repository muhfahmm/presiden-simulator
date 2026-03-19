const fs = require('fs');
const path = require('path');

const regionsDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/regions';
const folders = ['amerika_utara', 'amerika_tengah', 'amerika_selatan'];

let count = 0;

folders.forEach(dirName => {
    const dirPath = path.join(regionsDir, dirName);
    if (!fs.existsSync(dirPath)) return;
    
    fs.readdirSync(dirPath).forEach(file => {
        if (!file.endsWith('.ts') || file.startsWith('_')) return;
        const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
        
        const match = content.match(/export const \w+Routes\s*=\s*(\{[\s\S]*?\});/);
        if (match) {
            try {
                const obj = eval(`(${match[1]})`);
                Object.keys(obj).forEach(dest => {
                    const nodes = obj[dest];
                    if (Array.isArray(nodes)) {
                        const hasSouth = nodes.some(n => /colombia|venezuela|guyana|brazil|brasil|uruguay|argentina|chile|peru|ekuador|ecuador/i.test(n));
                        const hasNorth = nodes.some(n => /usa|united states|canada|kanada|mexico|meksiko|costa rica|kostarika|nicaragua|honduras|guatemala|belize|salvador/i.test(n));
                        const hasPanama = nodes.some(n => /panama/i.test(n));

                        if (hasSouth && hasNorth && !hasPanama) {
                            console.log(`[BYPASS] In ${dirName}/${file} -> ${dest}`);
                            console.log(`  Path: ${nodes.join(' -> ')}`);
                            count++;
                        }
                    }
                });
            } catch (err) { }
        }
    });
});

console.log(`Total Aggregate Bypasses Found: ${count}`);
LinePlaceholder: true
