const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const mIdx = lines.findIndex(l => l.includes("const aggMilitary = buildAggregated(militarySectors);"));

if (mIdx !== -1) {
    console.log("Found military agg at line:", mIdx);
    
    const bIdx = lines.findIndex(l => l.includes("const dailyBaseMaintenance = calculateBaseMaintenance(initialCountry);"));
    
    if (bIdx !== -1) {
        console.log("Found dailyBaseMaintenance at line:", bIdx);
        lines[bIdx] = `  const aggMaintenance = buildAggregated(maintenanceSectors);
  const dailyBaseMaintenance = Object.values(aggMaintenance).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 100000;`;
    }

    // Replace previous lines content join buffer
    let newContent = lines.join('\n');
    
    const mTarget = `const dailyMilitaryExpense = Object.values(aggMilitary).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 10000;`;
    const mTargetAlt = `const dailyMilitaryExpense = Object.values(aggMilitary).reduce((sum, items) => sum + items.reduce((subSum, item) => subSum + (item.count * item.maintenance), 0), 0) / 10000;`; // Wait, already replaced in step 934? 
    
    // Let's just do REPLACEMENT with regex or exact match safe buffers !!
    if (newContent.includes("/ 10000;")) {
        newContent = newContent.replace(/\/ 10000;/g, "/ 100000;");
        console.log("Replaced 10000 divisor with 100000");
    }

    fs.writeFileSync(path, newContent, 'utf8');
    console.log("Scale fix applied");
} else {
    console.log("Military anchor not found");
}
