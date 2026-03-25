const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.ts') && file !== '_index.ts') {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Regex to remove the permintaan block
            // It matches: the comment block above it, the "permintaan" key, the object, and the trailing comma
            const regex = /\s*\/\/ =+[\s\S]*?\/\/ 13\. 📊 PERMINTAAN & KEBUTUHAN RAKYAT[\s\S]*?\/\/ =+[\s\S]*?"permintaan":\s*\{[\s\S]*?\},\s*/g;
            
            const newContent = content.replace(regex, '\n  ');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

const targetDir = path.resolve('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries');
processDir(targetDir);
console.log('Finished pruning permintaan data.');
