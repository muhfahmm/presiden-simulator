const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations', 'afrika', 'chad.ts');
const content = fs.readFileSync(filePath, 'utf8');

const matches = content.match(/name:\s*"([^"]+)"/g);
if (matches) {
    const names = matches.map(m => m.match(/"([^"]+)"/)[1]);
    console.log(JSON.stringify(names.sort(), null, 2));
} else {
    console.log('No matches');
}
