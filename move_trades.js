const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\tab-menu\\trades';
const destDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\trades';

const items = ['tradeRoutes.ts', 'mainTradeRoutes.ts', 'international', 'regional'];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

let count = 0;
items.forEach(item => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    if (fs.existsSync(srcPath)) {
        try {
            if (fs.existsSync(destPath) && fs.statSync(srcPath).isDirectory()) {
                fs.readdirSync(srcPath).forEach(file => {
                     fs.renameSync(path.join(srcPath, file), path.join(destPath, file));
                });
                fs.rmdirSync(srcPath);
            } else {
                fs.renameSync(srcPath, destPath);
            }
            console.log(`Successfully moved ${item}`);
            count++;
        } catch (e) {
            console.error(`Failed to move ${item}:`, e.message);
        }
    }
});

console.log(`Migration finished. Moved ${count} trade assets.`);
