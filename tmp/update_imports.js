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
            
            // Periksa apakah ada referensi ke 1_produksi
            if (content.includes('1_produksi')) {
                // Regex untuk mengganti 1_produksi menjadi 1_jumlah_bangunan_per_negara
                // Kita ganti semua kemunculannya saja agar aman (karena penamaannya unik)
                const updatedContent = content.replace(/1_produksi/g, '1_jumlah_bangunan_per_negara');
                
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
