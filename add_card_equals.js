const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

const anchor = `<span className="text-sm font-black text-rose-400">-{item.maintenance} / unit</span>`;
const replacement = `<span className="text-sm font-black text-rose-400">-{item.maintenance} / unit <span className="text-zinc-500 font-bold mx-1">=</span> <span className="text-rose-400">-{item.count * item.maintenance}</span></span>`;

if (content.includes(anchor)) {
    content = content.replace(anchor, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Update success');
} else {
    console.log('Anchor not found');
}
