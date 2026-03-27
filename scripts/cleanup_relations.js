const fs = require('fs');
const path = require('path');

const targetCountries = JSON.parse(fs.readFileSync('c:/fhm/EM/scripts/target_countries.json', 'utf8'));

const normalizationMap = {
    "guinea-bissau": "guinea bissau",
    "kosta rika": "costa rica",
    "timor-leste": "republik timor leste",
    "republik timor-leste": "republik timor leste",
    "tanzania": "republik tanzania",
    "zambia": "republik zambia",
    "zimbabwe": "republik zimbabwe",
    "republik madagaskar": "madagaskar",
    "republik moldova": "moldova",
    "republik mozambik": "mozambik"
};

const relationsDir = 'c:/fhm/EM/app/frontend/src/app/database/data/countries/relations';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/(export const \w+ = )(\[[\s\S]*?\])(;)/);
    
    if (!match) return;

    const prefix = match[1];
    const arrayStr = match[2];
    const suffix = match[3];

    // Helper to evaluate the array literal safelyish
    // Since it's a TS file with object literals, we can do a simplified parse or use eval
    const ownerMatch = prefix.match(/export const (\w+)_relations/);
    const ownerName = ownerMatch ? ownerMatch[1].replace(/_/g, ' ') : "";

    let relations;
    const itemRegex = /\{[\s\S]*?name:\s*["']([\s\S]*?)["'],\s*relation:\s*(\d+)[\s\S]*?\}/g;
    relations = [];
    let itemMatch;
    while ((itemMatch = itemRegex.exec(arrayStr)) !== null) {
        relations.push({ name: itemMatch[1], relation: parseInt(itemMatch[2]) });
    }

    const cleaned = [];
    const relationMap = {};
    
    relations.forEach(rel => {
        let name = rel.name.toLowerCase().replace(/[_-]/g, ' ');
        // apply manual normalization
        if (normalizationMap[name]) {
            name = normalizationMap[name];
        } else if (name.startsWith("republik ") && !targetCountries.includes(name)) {
            const withoutRepublik = name.replace("republik ", "");
            if (targetCountries.includes(withoutRepublik)) name = withoutRepublik;
        } else if (!name.startsWith("republik ") && !targetCountries.includes(name)) {
            const withRepublik = "republik " + name;
            if (targetCountries.includes(withRepublik)) name = withRepublik;
        }
        
        if (targetCountries.includes(name)) {
            relationMap[name] = rel.relation;
        }
    });

    // Reconstruct based on ALL 207 target countries
    targetCountries.forEach(target => {
        if (target === ownerName) return; // Skip self
        
        const score = relationMap[target] !== undefined ? relationMap[target] : 50;
        cleaned.push({ name: target, relation: score });
    });

    // Sort alphabetically by name
    cleaned.sort((a, b) => a.name.localeCompare(b.name));

    // Reconstruct the array string
    let newArrayStr = "[\n";
    cleaned.forEach((rel, i) => {
        newArrayStr += `  { name: "${rel.name}", relation: ${rel.relation} }${i === cleaned.length - 1 ? "" : ","}\n`;
    });
    newArrayStr += "]";

    const newContent = content.replace(match[0], `${prefix}${newArrayStr}${suffix}`);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Synced ${path.basename(filePath)}: ${cleaned.length} countries (Owner: ${ownerName})`);
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (file.endsWith('.ts') && file !== 'index.ts') {
            processFile(fullPath);
        }
    });
}

console.log("Starting cleanup...");
traverse(relationsDir);
console.log("Cleanup complete.");
