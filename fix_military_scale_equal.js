const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

const anchor = `const dailyMilitaryExpense = Object.values(aggMilitary).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 10000;`;
const replacement = `const dailyMilitaryExpense = Object.values(aggMilitary).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 100000;`;

if (content.includes(anchor)) {
    content = content.replace(anchor, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Scaling adjusted to equal');
} else {
    console.log('Anchor not found');
}
