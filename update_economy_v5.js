const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

function formatIndonesianNumber(num) {
    // Round to handle floating point issues from the previous error
    let rounded = Math.round(num);
    return rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function extractTrillionValue(valStr) {
    // If it's already an exponential string from the bug (e.g. 4.562e+26)
    if (valStr.includes('e+')) {
        let val = parseFloat(valStr);
        // Divide down until it's in the hundreds/thousands range (base T)
        while (val >= 10000) {
            val /= 1000000000000;
        }
        return val;
    }

    // Normal extraction
    let clean = valStr.replace(/Rp\.?\s?/g, '').replace(/\s?T/g, '').trim();
    
    // Handle the dot-as-thousand-separator vs decimal
    // If there's a dot but it looks like a trillion value already (many digits), we keep it as a number.
    // If it's small, it might be 1.5 T.
    
    let numericOnly = clean.replace(/\./g, '').replace(/,/g, '');
    if (numericOnly.length >= 13) {
        // It's already a full number or close to it
        return parseFloat(numericOnly) / 1000000000000;
    }
    
    // Otherwise, treat as base T
    let val = parseFloat(clean.replace(/\./g, '').replace(/,/g, '.')) || 0;
    return val;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const budgetRegex = /"budget":\s*("[^"]+"|\d+(\.\d+)?(e\+\d+)?)/;
    const incomeRegex = /"income":\s*("[^"]+"|\d+(\.\d+)?(e\+\d+)?)/;
    
    const budgetMatch = content.match(budgetRegex);
    const incomeMatch = content.match(incomeRegex);
    
    if (budgetMatch) {
        let rawBudget = budgetMatch[1].replace(/"/g, '');
        let valT = extractTrillionValue(rawBudget);
        let fullVal = Math.round(valT * 1000000000000);
        
        content = content.replace(budgetRegex, `"budget": ${fullVal}`);
    }
    
    if (incomeMatch) {
        let rawIncome = incomeMatch[1].replace(/"/g, '');
        // Special case: "198.000... / 198 T" (previous correct format)
        if (rawIncome.includes(' / ')) {
            rawIncome = rawIncome.split(' / ')[1]; // Get the "198 T" part
        }
        
        let valT = extractTrillionValue(rawIncome);
        let fullVal = Math.round(valT * 1000000000000);
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

console.log('Finished mass update of economic data (FIXED).');
