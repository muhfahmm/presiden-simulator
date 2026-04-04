const fs = require('fs');
const path = require('path');

const rootDir = 'app/frontend/src/app';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Periksa apakah ada referensi ke 4_sektor_ekstraksi
            if (content.includes('4_sektor_ekstraksi')) {
                const updatedContent = content.replace(/4_sektor_ekstraksi/g, '2_sektor_mineral_kritis');
                
                if (content !== updatedContent) {
                    fs.writeFileSync(fullPath, updatedContent);
                    console.log(`Updated imports in: ${fullPath}`);
                }
            }
        }
    }
}

processDirectory(rootDir);
console.log('Bulk import update completed.');
