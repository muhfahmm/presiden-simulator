const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\tab-menu\\Hubungan';
const targetFile = path.join(srcDir, 'relations_index.ts');

const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

let imports = '';
let dictionary = 'export const allRelations: { [key: string]: { name: string, relation: number }[] } = {\n';

continents.forEach(cont => {
    const contPath = path.join(srcDir, cont);
    if (!fs.existsSync(contPath)) return;
    
    fs.readdirSync(contPath).forEach(file => {
        if (!file.endsWith('.ts')) return;
        const name = file.replace('.ts', '');
        const varName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '_') + '_relations';
        
        imports += `import { ${varName} } from "./${cont}/${name}";\n`;
        dictionary += `  "${name.replace(/_/g, ' ')}": ${varName},\n`; // keyed by indonesian node text name
    });
});

dictionary += '};\n';

const fileContent = `// Auto-generated Relations Index\n${imports}\n${dictionary}`;
fs.writeFileSync(targetFile, fileContent);

console.log(`Generated relations_index.ts connecting all static datasets.`);
