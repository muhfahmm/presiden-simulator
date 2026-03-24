const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.includes('{Object.entries(aggregated).map'));

if (sIdx !== -1) {
    console.log("Found start map index:", sIdx);
    const replacement = [
'                                     {Object.entries(aggregated).map(([category, items]: any, catIdx) => {',
'                                        const totalCount = items.reduce((sum: any, i: any) => sum + (i.count || 0), 0);',
'                                        return (',
'                                        <div key={catIdx} className="space-y-2">',
'                                           <div className="flex items-center gap-2">',
'                                              <div className="w-1 h-3 bg-amber-400 rounded-full"></div>',
'                                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">{category} <span className="text-amber-400/90 font-black ml-1 text-[9px]">({totalCount})</span></span>',
'                                           </div>',
'                                           <div className="grid grid-cols-2 gap-2">',
'                                              {items.map((item: any, idx: number) => (',
'                                                 <div key={idx} className="bg-zinc-950 core-border border border-zinc-900/60 p-3 rounded-xl flex justify-between items-center">',
'                                                    <div className="flex flex-col">',
'                                                       <span className="text-xs font-medium text-zinc-300">{item.name}</span>',
'                                                       <span className="text-[10px] text-zinc-500">Jumlah: {item.count}</span>',
'                                                    </div>',
'                                                    <span className="text-xs font-black text-amber-400">-{item.maintenance} / unit</span>',
'                                                 </div>',
'                                              ))}',
'                                           </div>',
'                                        </div>',
'                                     )})} '
    ];

    lines.splice(sIdx, 21, ...replacement);
    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Target map not found');
}
