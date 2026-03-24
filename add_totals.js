const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.includes('{Object.entries(aggregated).map'));

if (sIdx !== -1) {
    console.log("Found start map index:", sIdx);
    lines[sIdx] = lines[sIdx].replace('=> (', '=> {');
    lines.splice(sIdx + 1, 0, '                                        const totalCount = items.reduce((sum: any, i: any) => sum + (i.count || 0), 0);', '                                        return (');
    
    for (let i = sIdx; i < sIdx + 20; i++) {
        if (lines[i] && lines[i].includes('uppercase tracking-wider">')) {
            console.log("Found category label at:", i);
            lines[i] = lines[i].replace('">{category}</span>', '">{category} <span className="text-amber-400/90 font-black ml-1 text-[9px]">({totalCount})</span></span>');
            break;
        }
    }

    for (let i = sIdx; i < lines.length; i++) {
        if (lines[i] && lines[i].includes('))}')) {
             console.log("Found closing brace at:", i);
             lines[i] = lines[i].replace('))}', '})}');
             break;
        }
    }

    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Target map not found');
}
