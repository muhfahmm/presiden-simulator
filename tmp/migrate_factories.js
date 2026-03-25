const fs = require('fs');
const path = require('path');

const baseDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (!content.includes('pabrik_militer')) {
                // Insert pabrik_militer after sektor_pertahanan block
                // Specifically looking for the end of sektor_pertahanan: { ... },
                const newObject = `  "pabrik_militer": {\n    "pabrik_drone_kamikaze": 0,\n    "pabrik_amunisi": 0,\n    "pabrik_kendaraan_tempur": 0,\n    "pabrik_senjata_berat": 0\n  },`;
                
                // Use regex that finds sektor_pertahanan block and its closing brace
                const regex = /("sektor_pertahanan":\s*\{[\s\S]*?\n\s*\d*\s*\},)/;
                const newContent = content.replace(regex, `$1\n${newObject}`);
                
                if (content !== newContent) {
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    console.log(`Updated: ${filePath}`);
                } else {
                    console.log(`Failed to match: ${filePath}`);
                }
            }
        }
    });
}

walk(baseDir);
