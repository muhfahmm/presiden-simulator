const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

function formatIndonesianNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function extractTrillionValue(val) {
    if (typeof val === 'number') {
        // If it's already a large number (e.g. 456...000), divide by 1T to get the base
        if (val > 1000000000) return val / 1000000000000;
        return val;
    }
    if (typeof val !== 'string') return 0;
    
    // Remove "Rp", "T", spaces, and currency periods (e.g. 1.280 -> 1280)
    let clean = val.replace(/Rp\.?\s?/g, '').replace(/\s?T/g, '').replace(/\./g, '').replace(/,/g, '.').trim();
    return parseFloat(clean) || 0;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find budget line
    const budgetRegex = /"budget":\s*("[^"]+"|\d+)/;
    const incomeRegex = /"income":\s*("[^"]+"|\d+)/;
    
    const budgetMatch = content.match(budgetRegex);
    const incomeMatch = content.match(incomeRegex);
    
    if (budgetMatch) {
        let rawBudget = budgetMatch[1].replace(/"/g, '');
        let valT = extractTrillionValue(rawBudget);
        let fullVal = valT * 1000000000000;
        
        content = content.replace(budgetRegex, `"budget": ${fullVal}`);
    }
    
    if (incomeMatch) {
        let rawIncome = incomeMatch[1].replace(/"/g, '');
        let valT = extractTrillionValue(rawIncome);
        let fullVal = valT * 1000000000000;
        let formattedFull = formatIndonesianNumber(fullVal);
        
        content = content.replace(incomeRegex, `"income": "${formattedFull} / ${valT} T"`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

regions.forEach(region => {
    const regionPath = path.join(baseDir, region);
    if (!fs.existsSync(regionPath)) return;
    
    fs.readdirSync(regionPath).forEach(file => {
        if (file.endsWith('.ts') && file !== '_index.ts') {
            processFile(path.join(regionPath, file));
        }
    });
});

console.log('Finished mass update of economic data.');
