const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.includes('Object.entries(aggregated).map'));

if (sIdx !== -1) {
    console.log("Found start map loop at line index:", sIdx);
    
    for (let i = sIdx; i < sIdx + 40; i++) {
        // Find Category Title Span
        if (lines[i] && lines[i].includes('{category} <span')) {
            console.log("Found category title at:", i);
            lines[i] = `                                              <span className="text-sm font-black text-amber-400 uppercase tracking-wider">{category} <span className="text-zinc-200">({totalCount})</span></span>`;
        }
        
        // Find Item name
        if (lines[i] && lines[i].includes('{item.name}</span>')) {
            console.log("Found item name at:", i);
            lines[i] = `                                                       <span className="text-sm font-bold text-white">{item.name}</span>`;
        }

        // Find Item count
        if (lines[i] && lines[i].includes('Jumlah: {item.count}')) {
            console.log("Found item count at:", i);
            lines[i] = `                                                       <span className="text-xs font-medium text-zinc-400">Jumlah: {item.count}</span>`;
        }

        // Find maintenance
        if (lines[i] && lines[i].includes('-{item.maintenance} / unit')) {
            console.log("Found item maintenance at:", i);
            lines[i] = `                                                    <span className="text-sm font-black text-rose-400">-{item.maintenance} / unit</span>`;
        }
    }

    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Target map not found');
}
