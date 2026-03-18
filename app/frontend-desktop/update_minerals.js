const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'select-country', 'data', 'countries.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Use regex to inject fields after "nickel": value,
content = content.replace(/"nickel": (\d+),/g, (match, p1) => {
    const lithium = Math.floor(Math.random() * 31);
    const aluminum = Math.floor(Math.random() * 31);
    return `"nickel": ${p1},\n      "lithium": ${lithium},\n      "aluminum": ${aluminum},`;
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated countries.ts with lithium and aluminum.');
