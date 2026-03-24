const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.includes('Rincian Perawatan Infrastruktur') || l.includes('Zap'));

if (sIdx !== -1) {
    console.log("Found context start at index:", sIdx);
    
    // Find inner closure `})}` which was absolute line 528 (approx ~30 lines down)
    for (let i = sIdx; i < sIdx + 40; i++) {
        if (lines[i] && lines[i].includes('})}') && lines[i].includes('                                              ')) {
            console.log("Fixing inner map closure at lines index:", i);
            lines[i] = lines[i].replace('})}', '))}')
            break;
        }
    }

    // Find outer closure `))` which is a map closing on line 531
    for (let i = sIdx; i < sIdx + 40; i++) {
        // Look for bottom layout node map `))`
        if (lines[i] && (lines[i].includes('))') || lines[i].includes('))')) && lines[i].includes('                                     ') && i > sIdx + 15) {
            console.log("Fixing outer map closure at lines index:", i);
            lines[i] = lines[i].replace('))', '})}');
            break;
        }
    }

    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Context map not found');
}
