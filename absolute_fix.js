const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

const startStr = `                                 <div className="flex items-center gap-3 border-b border-zinc-800 pb-2">`;
const endStr = `                                 </div>
                              </div>
                           );`;

const sIdx = content.indexOf(startStr);
if (sIdx !== -1) {
    const eIdx = content.indexOf(endStr, sIdx);
    if (eIdx !== -1) {
        console.log("Found bounds at:", sIdx, eIdx);
        const chunkToReplace = content.substring(sIdx, eIdx);
        
        const correctChunk = `                                 <div className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                                    <Zap className="h-5 w-5 text-amber-400" />
                                    <span className="text-sm font-bold text-white">Rincian Perawatan Infrastruktur</span>
                                 </div>
                                 <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
                                    {Object.entries(aggregated).map(([category, items]: any, catIdx) => {
                                        const totalCount = items.reduce((sum: any, i: any) => sum + (i.count || 0), 0);
                                        return (
                                        <div key={catIdx} className="space-y-2">
                                           <div className="flex items-center gap-2">
                                              <div className="w-1 h-3 bg-amber-400 rounded-full"></div>
                                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">{category} <span className="text-amber-400/90 font-black ml-1 text-[9px]">({totalCount})</span></span>
                                           </div>
                                           <div className="grid grid-cols-2 gap-2">
                                              {items.map((item: any, idx: number) => (
                                                 <div key={idx} className="bg-zinc-950 core-border border border-zinc-900/60 p-3 rounded-xl flex justify-between items-center">
                                                    <div className="flex flex-col">
                                                       <span className="text-xs font-medium text-zinc-300">{item.name}</span>
                                                       <span className="text-[10px] text-zinc-500">Jumlah: {item.count}</span>
                                                    </div>
                                                    <span className="text-xs font-black text-amber-400">-{item.maintenance} / unit</span>
                                                 </div>
                                              ))}
                                           </div>
                                        </div>
                                     )})}
`;
        content = content.substring(0, sIdx) + correctChunk + content.substring(eIdx);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Layout correction success");
    } else {
        console.log("End layout node anchor not found");
    }
} else {
    console.log("Start layout node anchor not found");
}
