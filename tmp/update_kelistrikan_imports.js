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
            
            // Periksa apakah ada referensi ke 2_kelistrikan
            if (content.includes('2_kelistrikan')) {
                const updatedContent = content.replace(/2_kelistrikan/g, '1_sektor_listrik_nasional');
                
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
