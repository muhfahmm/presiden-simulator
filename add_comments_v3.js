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
    
    // 1. Aggressively remove any existing comment headers and excessive newlines
    content = content.replace(/\/\/ =+\n(\s*\/\/ .*\n)*\s*\/\/ =+\n/g, '');
    
    for (const [key, label] of Object.entries(sectorLabels)) {
        const regexStr = `^\\s*"${key}":\\s*{`;
        const regex = new RegExp(regexStr, 'm');
        
        const match = content.match(regex);
        if (match) {
            const startIdx = match.index;
            
            // Extract the block to count items
            let blockSearch = content.substring(startIdx);
            const blockEndIdx = findClosingBrace(blockSearch);
            const blockContent = blockSearch.substring(0, blockEndIdx);
            
            // Count keys: lines that look like "subkey":.
            const itemMatches = blockContent.match(/^\s{4,}"[^"]+":/gm);
            const count = itemMatches ? itemMatches.length : 0;
            
            const indent = "  "; // Unified indentation
            const header = `\n${indent}// =============================================================\n${indent}// ${label} (${count} Jenis)\n${indent}// =============================================================\n`;
            
            // Find where the key line actually starts including any existing leading newlines/spaces if we want to replace them
            // But since we cleaned up headers above, let's just find the start of the line.
            
            // Prepend header to the line
            content = content.substring(0, startIdx).trimEnd() + "\n" + header + content.substring(startIdx);
        }
    }
    
    // Final cleanup: ensure only single blank lines between major blocks
    content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
    
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
