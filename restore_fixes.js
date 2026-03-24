const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.includes('Object.entries(s.data).forEach'));

if (sIdx !== -1) {
    console.log("Found start loop index:", sIdx);
    for (let i = sIdx; i < sIdx + 10; i++) {
        if (lines[i] && lines[i].includes('m.key === key || m.dataKey === key')) {
            console.log("Fixing metadata.find at line:", i);
            lines[i] = lines[i].replace('m.key === key || m.dataKey === key', 'm.key === key || m.id === key || m.dataKey === key');
        }
        if (lines[i] && lines[i].includes('const cat = metadata.category || s.label;')) {
            console.log("Fixing cat variable at line:", i);
            lines[i] = lines[i].replace('metadata.category || s.label', 'metadata.category || metadata.groupId || s.label');
        }
    }
    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Target start loop not found');
}
