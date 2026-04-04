const fs = require('fs');
const path = require('path');

const rootDir = 'app/frontend/src/app';

const replacements = [
    ['3_infrastruktur', '9_infrastruktur'],
    ['5_sektor_manufaktur', '3_manufaktur'],
    ['6_sektor_peternakan', '4_sektor_peternakan'],
    ['7_sektor_agrikultur', '5_sektor_agrikultur'],
    ['8_sektor_perikanan', '6_sektor_perikanan'],
    ['9_sektor_olahan_pangan', '7_sektor_olahan_pangan'],
    ['10_sektor_farmasi', '8_sektor_farmasi']
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const [oldName, newName] of replacements) {
                // Gunakan regex global untuk mengganti semua kemunculan
                const regex = new RegExp(oldName, 'g');
                content = content.replace(regex, newName);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(rootDir);
console.log('Mass renaming and import update completed.');
