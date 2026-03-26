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
            if (content.includes('"pabrik_militer":')) {
                // 1. Extract the current pabrik_militer block to preserve values (though most are 0)
                const factoryMatch = content.match(/("pabrik_militer":\s*\{[\s\S]*?\n\s*\},?)/);
                if (!factoryMatch) return;
                
                const factoryBlock = factoryMatch[0];
                
                // 2. Remove the block from its current position
                let newContent = content.replace(/(\n\s*"pabrik_militer":\s*\{[\s\S]*?\n\s*\},)/, '');
                newContent = newContent.replace(/(\n\s*"pabrik_militer":\s*\{[\s\S]*?\n\s*\},?)/, ''); // Backup if first fails
                
                // 3. Find armada_kepolisian and insert after it
                // We need to match the closing brace of armada_kepolisian correctly
                // Most files have a structure like: 
                // "armada_kepolisian": {
                //   ...
                // },
                
                const policeRegex = /("armada_kepolisian":\s*\{[\s\S]*?\n\s*\},)/;
                if (policeRegex.test(newContent)) {
                    newContent = newContent.replace(policeRegex, `$1\n  ${factoryBlock}`);
                    
                    // Clean up potential double commas or formatting
                    newContent = newContent.replace(/\},\n\s+,"pabrik_militer"/, '},\n  "pabrik_militer"');
                    
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    console.log(`Reordered: ${filePath}`);
                } else {
                    console.log(`Failed to find police block in: ${filePath}`);
                }
            }
        }
    });
}

walk(baseDir);
