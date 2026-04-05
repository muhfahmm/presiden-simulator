const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\fhm\\em\\app\\frontend\\src\\app\\database\\data\\semua_fitur_negara\\2_pertahanan\\2_intelijen';
const continents = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

let count = 0;

continents.forEach(c => {
    const tDir = path.join(targetDir, c);
    
    if (fs.existsSync(tDir)) {
        const files = fs.readdirSync(tDir).filter(f => f.endsWith('.ts'));
        files.forEach(f => {
            const match = f.match(/^(\d+)_(.+)\.ts$/);
            if (match) {
                const countryName = match[2];
                const content = `export const ${countryName}_intelijen = {
  sistem_satelit: 0,
  jaringan_radar: 0,
  operasi_siber: 0
} as const;\n`;
                fs.writeFileSync(path.join(tDir, f), content);
                count++;
            }
        });
    }
});

console.log('Formatted ' + count + ' files in 2_intelijen');
