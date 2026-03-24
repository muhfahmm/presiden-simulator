const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

// Inject logger before expenseItems list sits below buildAggregated
const lines = content.split('\n');
const targetIdx = lines.findIndex(l => l.includes("const aggMilitary = buildAggregated(militarySectors);"));

if (targetIdx !== -1) {
    const injector = `
    const debugItems: any[] = [];
    Object.entries(aggMilitary).forEach(([cat, items]: any) => {
        items.forEach((item: any) => {
           debugItems.push({ cat, name: item.name, count: item.count, maint: item.maintenance, total: item.count * item.maintenance });
        });
    });
    fs.writeFileSync('c:\\\\fhm\\\\EM4\\\\militDebug.json', JSON.stringify(debugItems, null, 2));
    `;
    lines.splice(targetIdx + 1, 0, injector);
    fs.writeFileSync('c:\\\\fhm\\\\EM4\\\\app\\\\frontend-desktop\\\\src\\\\app\\\\game\\\\components\\\\ekonomi\\\\3-pemasukkanpengeluaran\\\\PemasukkanPengeluaranModal_debug.tsx', lines.join('\n'));
    console.log("Debug injected");
}
