const fs = require('fs');
const path = require('path');

const relDir = path.join(__dirname, 'app', 'frontend-desktop', 'src', 'app', 'select-country', 'data', 'relations');

// Template file to copy from
const templateFile = path.join(relDir, 'asia', 'afganistan.ts');
let templateContent = fs.readFileSync(templateFile, 'utf8');

// Function to generate new file
function createCountryFile(region, filename, exportName) {
    const destPath = path.join(relDir, region, filename);
    if (!fs.existsSync(destPath)) {
        const newContent = templateContent.replace(/export const \w+_relations =/g, `export const ${exportName}_relations =`);
        fs.writeFileSync(destPath, newContent, 'utf8');
        console.log(`Created ${region}/${filename}`);
    } else {
        console.log(`Exists ${region}/${filename}`);
    }
}

// 1. Create missing Africa Selatan & Amerika Serikat (value default 50)
createCountryFile('afrika', 'afrika_selatan.ts', 'afrika_selatan');
createCountryFile('na', 'amerika_serikat.ts', 'amerika_serikat');

// 2. Rename hyphens to match format expected by checking script
function renameCountryFile(region, oldFilename, newFilename, oldExport, newExport) {
    const oldPath = path.join(relDir, region, oldFilename);
    const newPath = path.join(relDir, region, newFilename);
    if (fs.existsSync(oldPath)) {
        let content = fs.readFileSync(oldPath, 'utf8');
        content = content.replace(`export const ${oldExport}_relations =`, `export const ${newExport}_relations =`);
        fs.writeFileSync(newPath, content, 'utf8');
        fs.unlinkSync(oldPath);
        console.log(`Renamed ${oldFilename} to ${newFilename}`);
    }
}

renameCountryFile('afrika', 'guinea-bissau.ts', 'guinea_bissau.ts', 'guinea_bissau', 'guinea_bissau'); // actually export name in guinea-bissau might be guinea_bissau or similar, let's just forcefully replace what export const is
// Wait, safer to just replace any export const
function safeRename(region, oldFilename, newFilename, newExport) {
    const oldPath = path.join(relDir, region, oldFilename);
    const newPath = path.join(relDir, region, newFilename);
    if (fs.existsSync(oldPath)) {
        let content = fs.readFileSync(oldPath, 'utf8');
        content = content.replace(/export const \w+_relations =/g, `export const ${newExport}_relations =`);
        fs.writeFileSync(newPath, content, 'utf8');
        fs.unlinkSync(oldPath);
        console.log(`Renamed ${oldFilename} to ${newFilename}`);
    }
}

safeRename('afrika', 'guinea-bissau.ts', 'guinea_bissau.ts', 'guinea_bissau');
safeRename('asia', 'republik_timor-leste.ts', 'republik_timor_leste.ts', 'republik_timor_leste');
