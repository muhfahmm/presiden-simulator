const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\tab-menu\\Hubungan';
const destDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\relations';

const continents = ['afrika', 'asia', 'eropa', 'na', 'sa', 'oceania'];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

let count = 0;
continents.forEach(cont => {
    const srcPath = path.join(srcDir, cont);
    const destPath = path.join(destDir, cont);

    if (fs.existsSync(srcPath)) {
        try {
            if (fs.existsSync(destPath)) {
                fs.readdirSync(srcPath).forEach(file => {
                    const fSrc = path.join(srcPath, file);
                    const fDest = path.join(destPath, file);
                    fs.renameSync(fSrc, fDest);
                });
                fs.rmdirSync(srcPath); 
            } else {
                fs.renameSync(srcPath, destPath);
            }
            console.log(`Successfully moved ${cont}`);
            count++;
        } catch (e) {
            console.error(`Failed to move ${cont}:`, e.message);
        }
    }
});

console.log(`Migration finished. Moved ${count} folders.`);
