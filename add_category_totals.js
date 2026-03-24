const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const mIdx = lines.findIndex(l => l.includes("Object.entries(agg).map(([category, items]: any, catIdx) => {"));

if (mIdx !== -1) {
    console.log("Found loop at line:", mIdx);
    
    const insertion = `              const categorySum = filteredItems.reduce((sum: number, item: any) => sum + (item.count * item.maintenance), 0);`;
    
    // find where `if (totalCount === 0) return null;` is
    let anchorIdx = -1;
    for (let i = mIdx; i < mIdx + 10; i++) {
        if (lines[i] && lines[i].includes("if (totalCount === 0) return null;")) {
            anchorIdx = i;
            break;
        }
    }
    
    if (anchorIdx !== -1) {
        lines.splice(anchorIdx + 1, 0, insertion);
        console.log("Injected categorySum at line:", anchorIdx + 1);
        
        // Find title index
        let titleIdx = -1;
        for (let i = anchorIdx; i < anchorIdx + 10; i++) {
            if (lines[i] && lines[i].includes("<span className={`text-sm font-black ${color} uppercase tracking-wider`}>")) {
                titleIdx = i;
                break;
            }
        }
        
        if (titleIdx !== -1) {
            console.log("Found title span at line:", titleIdx);
            lines[titleIdx] = `                    <span className={\`text-sm font-black \${color} uppercase tracking-wider\`}>{category} <span className="text-zinc-200">({totalCount})</span> <span className="text-rose-400 font-black ml-1">= -{categorySum}</span></span>`;
        } else {
            console.log("Title span not found after anchor");
        }
        
        fs.writeFileSync(path, lines.join('\n'), 'utf8');
        console.log("Update success");
    } else {
        console.log("Anchor condition not found");
    }
} else {
    console.log("Loop structure not found");
}
