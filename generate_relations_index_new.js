const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\relations';
const targetFile = path.join(srcDir, 'index.ts');

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
        dictionary += `  "${name.replace(/_/g, ' ')}": ${varName},\n`; 
    });
});

dictionary += '};\n';

const fileContent = `// Auto-generated Relations Index\n${imports}\n${dictionary}`;
fs.writeFileSync(targetFile, fileContent);

console.log(`Generated relations index at ${targetFile}`);
