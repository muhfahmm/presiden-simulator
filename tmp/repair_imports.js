const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/fhm/EM4/app/frontend-desktop/src/app';

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Pattern 1: data/types
            if (content.match(/from\s+["']@\/app\/select-country\/data\/types["']/)) {
                content = content.replace(/from\s+["']@\/app\/select-country\/data\/types["']/g, 'from "@/app/select-country/data/types/_index"');
                modified = true;
            }
            if (content.match(/from\s+["'](\.\.\/)+select-country\/data\/types["']/)) {
                content = content.replace(/(from\s+["'](\.\.\/)+select-country\/data\/types)(["'])/g, '$1/_index$3');
                modified = true;
            }
            // Add case for local relative imports in select-country folder
            if (content.match(/from\s+["']\.\/data\/types["']/)) {
                content = content.replace(/from\s+["']\.\/data\/types["']/g, 'from "./data/types/_index"');
                modified = true;
            }

            // Pattern 2: data/countries
            if (content.match(/from\s+["']@\/app\/select-country\/data\/countries["']/)) {
                content = content.replace(/from\s+["']@\/app\/select-country\/data\/countries["']/g, 'from "@/app/select-country/data/countries/_index"');
                modified = true;
            }
            if (content.match(/from\s+["'](\.\.\/)+select-country\/data\/countries["']/)) {
                content = content.replace(/(from\s+["'](\.\.\/)+select-country\/data\/countries)(["'])/g, '$1/_index$3');
                modified = true;
            }
             if (content.match(/from\s+["']\.\/data\/countries["']/)) {
                content = content.replace(/from\s+["']\.\/data\/countries["']/g, 'from "./data/countries/_index"');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated imports in: ${fullPath}`);
            }
        }
    }
}

processDir(projectRoot);
console.log('Finished global import repair.');
