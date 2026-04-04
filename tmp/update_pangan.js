const fs = require('fs');
const path = require('path');

const rootDir = 'app/frontend/src/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Check if already updated
            if (content.includes('minyak_goreng')) continue;
            
            // Regex to find the last item before } as const;
            // Matches something like "mie_instan": 16
            const newFields = ',\n    "minyak_goreng": 0,\n    "susu": 0,\n    "pakan_ternak": 0\n  }';
            
            // Look for the last numeric value before the closing brace
            const updatedContent = content.replace(/(\d+)\n\s+} as const;/g, `$1${newFields} as const;`);
            
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
