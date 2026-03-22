const fs = require('fs');
const path = require('path');

const relDir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations');
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

let imports = [];
let mappings = [];

regions.forEach(region => {
    const rDir = path.join(relDir, region);
    if (!fs.existsSync(rDir)) return;

    const files = fs.readdirSync(rDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    
    files.forEach(file => {
        const filePath = path.join(rDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Find export const name
        const match = content.match(/export const (\w+)_relations =/);
        if (match) {
            const exportName = `${match[1]}_relations`;
            const baseName = file.replace('.ts', '');
            const objKey = baseName.replace(/_/g, ' '); // eg "afrika selatan"
            
            imports.push(`import { ${exportName} } from "./${region}/${baseName}";`);
            mappings.push(`  "${objKey}": ${exportName},`);
        }
    });
});

let indexContent = `// Auto-generated Relations Index\n`;
indexContent += imports.join('\n') + '\n\n';
indexContent += `export const allRelations: { [key: string]: { name: string; relation: number }[] } = {\n`;
indexContent += mappings.join('\n') + '\n};\n';

fs.writeFileSync(path.join(relDir, 'index.ts'), indexContent, 'utf8');
console.log('Successfully regenerated index.ts with', mappings.length, 'countries.');
