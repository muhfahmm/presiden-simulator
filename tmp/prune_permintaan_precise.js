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
            
            // Precise regex to match ONLY the permintaan section and its object
            const regex = /\s*\/\/ =+\r?\n\s*\/\/ 1[34]\. [^\r\n]*?PERMINTAAN[^\r\n]*?\r?\n\s*\/\/ =+\r?\n\s*"permintaan":\s*\{[\s\S]*?\},\r?\n?/g;
            
            const newContent = content.replace(regex, '\n\n  ');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Pruned: ${fullPath}`);
            }
        }
    }
}

const targetDir = path.resolve('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries');
processDir(targetDir);
console.log('Finished precise pruning.');
