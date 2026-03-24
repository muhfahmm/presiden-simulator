const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

const target = `name: metadata.label || metadata.name || key,`;
const replacement = `name: metadata.desc || metadata.label || metadata.name || key,`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Update success');
} else {
    console.log('Target name string not found');
}
