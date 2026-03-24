const fs = require('fs');
const path = require('path');

const srcDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries';
const destDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/agreements';
const continents = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

// Ensure directories exist
continents.forEach(c => {
    const dir = path.join(destDir, c);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

function migrate() {
    continents.forEach(continent => {
        const continentSrc = path.join(srcDir, continent);
        const continentDest = path.join(destDir, continent);

        if (!fs.existsSync(continentSrc)) return;

        const files = fs.readdirSync(continentSrc).filter(f => f.endsWith('.ts') && f !== '_index.ts');

        files.forEach(file => {
            const filePath = path.join(continentSrc, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Find the agreements array
            // It looks like: "agreements": [ ... ]
            // We need to handle the whole array including its closing bracket
            
            const regex = /"agreements":\s*\[([\s\S]*?)\]\s*,?\s*/;
            const match = content.match(regex);

            if (match) {
                const agreementsBody = match[1];
                const agreementsArray = `[\n${agreementsBody}\n]`;
                const countryName = file.replace('.ts', '');
                
                // Construct the new file content
                const newFileContent = `export const ${countryName}Agreements = ${agreementsArray};`;
                
                // Write to new location
                fs.writeFileSync(path.join(continentDest, file), newFileContent);

                // Remove from original content
                // Also remove the trailing comma if it exists
                let newContent = content.replace(regex, '');
                
                // Sometimes removing the block leaves a comma before the closing brace if it was the last item
                // or two commas if it was in the middle. 
                // But since it's inside "geopolitics": { ... }, let's be careful.
                
                fs.writeFileSync(filePath, newContent);
                console.log(`Migrated ${countryName} in ${continent}`);
            } else {
                console.log(`No agreements found in ${countryName} (${continent})`);
            }
        });
    });
}

migrate();
