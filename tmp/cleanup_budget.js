const fs = require('fs');
const path = require('path');

const baseDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/database/data/countries';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            // Remove the line containing "anggaran_pertahanan"
            const lines = content.split('\n');
            const newLines = lines.filter(line => !line.includes('"anggaran_pertahanan"'));
            
            // If the last line (which would be "pertahanan_siber": X,) now ends the block, 
            // the trailing comma is fine in TypeScript.
            
            const newContent = newLines.join('\n');
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
}

walk(baseDir);
