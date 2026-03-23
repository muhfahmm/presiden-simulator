const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

const sectorLabels = {
    'infrastructure': '🏗️ INFRASTRUKTUR & KELISTRIKAN',
    'sector_extraction': '⛏️ EKSTRAKSI & ENERGI',
    'sector_manufacturing': '🏭 PENGOLAHAN & MANUFAKTUR',
    'sector_livestock': '🐄 PETERNAKAN & PERIKANAN',
    'sector_agriculture': '🌾 PERTANIAN & PERKEBUNAN',
    'sector_defense': '🛡️ PERTAHANAN & KEAMANAN',
    'sector_military_strategic': '🛰️ STRATEGIS MILITER',
    'sector_social': '🏥 SOSIAL & PELAYANAN PUBLIK',
    'military': '⚔️ KEKUATAN ARMADA MILITER',
    'trade': '🚢 PERDAGANGAN INTERNASIONAL',
    'taxes': '💰 PAJAK & EKONOMI',
    'demand': '📊 PERMINTAAN & KEBUTUHAN RAKYAT',
    'geopolitics': '🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL',
    'ministries': '🏛️ KEMENTERIAN NEGARA'
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Clean up existing headers to start fresh and avoid double newlines
    content = content.replace(/\/\/ =============================================================\n\s*\/\/ .* Jenis\)\n\s*\/\/ =============================================================\n/g, '');
    // Also clean up the one without count if it exists
    content = content.replace(/\/\/ =============================================================\n\s*\/\/ .*\n\s*\/\/ =============================================================\n/g, '');
    // Clean up slightly shorter versions if any
    content = content.replace(/\/\/ ==========================================\n\s*\/\/ .*\n\s*\/\/ ==========================================\n/g, '');
    
    // Normalize newlines before sectors to prevent accumulating them
    for (const key of Object.keys(sectorLabels)) {
        const regex = new RegExp(`(\\n\\s*)*(\\s+)"${key}":`, 'g');
        content = content.replace(regex, (match, p1, p2) => `\n\n${p2}"${key}":`);
    }

    for (const [key, label] of Object.entries(sectorLabels)) {
        const regexStr = `^(\\s+)"${key}":\\s*{`;
        const regex = new RegExp(regexStr, 'm');
        
        const match = content.match(regex);
        if (match) {
            const indent = match[1];
            const startIdx = match.index;
            
            let blockSearch = content.substring(startIdx);
            const blockEndIdx = findClosingBrace(blockSearch);
            const blockContent = blockSearch.substring(0, blockEndIdx);
            
            // Count keys: lines that look like "subkey":. We count depth 2 indentation.
            const itemMatches = blockContent.match(/^\s{4,}"[^"]+":/gm);
            const count = itemMatches ? itemMatches.length : 0;
            
            const header = `${indent}// =============================================================\n${indent}// ${label} (${count} Jenis)\n${indent}// =============================================================\n`;
            
            content = content.substring(0, startIdx) + header + content.substring(startIdx);
        }
    }
    
    // Final normalization of excessive newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
}

function findClosingBrace(str) {
    let depth = 0;
    let inString = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '"' && str[i-1] !== '\\') inString = !inString;
        if (inString) continue;
        
        if (str[i] === '{') depth++;
        if (str[i] === '}') {
            depth--;
            if (depth === 0) return i + 1;
        }
    }
    return str.length;
}

regions.forEach(region => {
    const regionPath = path.join(baseDir, region);
    if (!fs.existsSync(regionPath)) return;
    
    fs.readdirSync(regionPath).forEach(file => {
        if (file.endsWith('.ts') && file !== '_index.ts') {
            processFile(path.join(regionPath, file));
        }
    });
});

console.log('Finished processing all files.');
