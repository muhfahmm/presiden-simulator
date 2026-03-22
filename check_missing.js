const fs = require('fs');
const path = require('path');

const relDir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations');
const countriesDir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'countries');

const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];
let relationFiles = [];
let countryFiles = [];

regions.forEach(r => {
    const cDir = path.join(countriesDir, r);
    if (fs.existsSync(cDir)) {
        const files = fs.readdirSync(cDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
        countryFiles.push(...files.map(f => f.replace('.ts', '').replace(/_/g, ' ')));
    }
    
    const rDir = path.join(relDir, r);
    if (fs.existsSync(rDir)) {
        const files = fs.readdirSync(rDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
        relationFiles.push(...files.map(f => f.replace('.ts', '').replace(/_/g, ' ')));
    }
});

const missing = countryFiles.filter(c => !relationFiles.includes(c));
const extras = relationFiles.filter(c => !countryFiles.includes(c));

fs.writeFileSync('missing.json', JSON.stringify({ missing, extras }, null, 2));
