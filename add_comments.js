const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries';
const regions = ['afrika', 'asia', 'eropa', 'na', 'oceania', 'sa'];

const sectorLabels = {
    'infrastructure': 'INFRASTRUKTUR & KELISTRIKAN',
    'sector_extraction': 'EKSTRAKSI & ENERGI',
    'sector_manufacturing': 'PENGOLAHAN & MANUFAKTUR',
    'sector_livestock': 'PETERNAKAN & PERIKANAN',
    'sector_agriculture': 'PERTANIAN & PERKEBUNAN',
    'sector_defense': 'PERTAHANAN & KEAMANAN',
    'sector_military_strategic': 'MILITER STRATEGIS',
    'sector_social': 'SOSIAL & KESEJAHTERAAN',
    'military': 'DATA MILITER',
    'trade': 'PERDAGANGAN',
    'taxes': 'PERPAJAKAN',
    'demand': 'PERMINTAAN NASIONAL',
    'geopolitics': 'GEOPOLITIK',
    'ministries': 'KEMENTERIAN'
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if comments already exist to avoid duplication
    if (content.includes('// ====================================')) {
        console.log(`Skipping ${filePath} (already has comments)`);
        return;
    }

    for (const [key, label] of Object.entries(sectorLabels)) {
        // Regex to find the key at the start of a line (with indentation)
        // Match:   "key": {
        const regexStr = `^(\\s+)"${key}":\\s*{`;
        const regex = new RegExp(regexStr, 'm');
        
        const match = content.match(regex);
        if (match) {
            const indent = match[1];
            const startIdx = match.index;
            
            // Find the block to count items
            // This is a simplified approach: find text between the opening { and the next closing } at the same indentation level
            // Or more simply, count occurrences of ":" between this block and the next sector or end of object
            
            let blockSearch = content.substring(startIdx);
            // Count lines that look like "subkey": value
            // We only count immediate children. A good heuristic is lines starting with indent + 2 spaces
            const blockEndIdx = findClosingBrace(blockSearch);
            const blockContent = blockSearch.substring(0, blockEndIdx);
            
            // Count keys: lines that look like "something": 
            const itemMatches = blockContent.match(/^\s{4,}"[^"]+":/gm);
            const count = itemMatches ? itemMatches.length : 0;
            
            const header = `${indent}// =============================================================\n${indent}// ${label} (${count} Jenis)\n${indent}// =============================================================\n`;
            
            content = content.substring(0, startIdx) + header + content.substring(startIdx);
        }
    }
    
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
