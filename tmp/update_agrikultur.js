const fs = require('fs');
const path = require('path');

const rootDir = 'app/frontend/src/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Periksa apakah sudah diupdate
            if (content.includes('karet')) {
                console.log(`Skipping: ${fullPath} (Already updated)`);
                continue;
            }
            
            // Mengganti penutup objek dengan field baru
            const searchPattern = /(\s+)} as const;/g;
            const replacement = ',\n    "karet": 0,\n    "kapas": 0,\n    "tembakau": 0\n  } as const;';
            
            const updatedContent = content.replace(searchPattern, replacement);
            
            if (content !== updatedContent) {
                fs.writeFileSync(fullPath, updatedContent);
                console.log(`Updated: ${fullPath}`);
            } else {
                console.log(`Failed to update: ${fullPath} (Structure mismatch)`);
            }
        }
    }
}

processDirectory(rootDir);
