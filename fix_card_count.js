const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

const target = `const totalCount = items.reduce((sum: any, i: any) => sum + (i.count || 0), 0);`;
const replacement = `const totalCount = items.length;`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Update success');
} else {
    console.log('Target count reduce not found');
}
