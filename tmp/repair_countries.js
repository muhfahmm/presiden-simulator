const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.ts') && file !== '_index.ts') {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // 1. Fix Imports
            if (content.includes('from "../../types"')) {
                content = content.replace('from "../../types"', 'from "../../types/_index"');
                modified = true;
            }

            // 2. Merge Agri-Peternakan if needed
            if (content.includes('"sektor_peternakan"') && content.includes('"sektor_pertanian"')) {
                try {
                    // Extract peternakan data
                    const petMatch = content.match(/"sektor_peternakan":\s*\{([\s\S]*?)\}/);
                    const perMatch = content.match(/"sektor_pertanian":\s*\{([\s\S]*?)\}/);
                    
                    if (petMatch && perMatch) {
                        const petText = petMatch[1];
                        const perText = perMatch[1];

                        const getValue = (text, key) => {
                            const m = text.match(new RegExp(`"${key}":\\s*([\\d.]+)`));
                            return m ? parseFloat(m[1]) : 0;
                        };

                        const agriData = {
                            ayam_unggas: (getValue(petText, 'ayam') + getValue(petText, 'unggas')) / 2,
                            sapi_perah: getValue(petText, 'sapi_perah'),
                            sapi_potong: getValue(petText, 'sapi_potong'),
                            domba_kambing: getValue(petText, 'domba_kambing'),
                            udang_kerang: (getValue(petText, 'udang') + getValue(petText, 'kerang')) / 2,
                            ikan: getValue(petText, 'ikan'),
                            padi: getValue(perText, 'beras'),
                            gandum_jagung: (getValue(perText, 'gandum') + getValue(perText, 'jagung')) / 2,
                            sayur_umbi: (getValue(perText, 'sayur_sayuran') + getValue(perText, 'umbi_umbian')) / 2,
                            kedelai: getValue(perText, 'kedelai'),
                            kelapa_sawit: getValue(perText, 'kelapa_sawit'),
                            kopi_teh_kakao: (getValue(perText, 'kopi') + getValue(perText, 'teh') + getValue(perText, 'cokelat')) / 3,
                            kekuatan: getValue(petText, 'kekuatan') || 20 // Default if missing
                        };

                        const agriBlock = `"sektor_agri_peternakan": {
    "ayam_unggas": ${agriData.ayam_unggas.toFixed(1)},
    "sapi_perah": ${Math.round(agriData.sapi_perah)},
    "sapi_potong": ${Math.round(agriData.sapi_potong)},
    "domba_kambing": ${Math.round(agriData.domba_kambing)},
    "udang_kerang": ${agriData.udang_kerang.toFixed(1)},
    "ikan": ${Math.round(agriData.ikan)},
    "padi": ${Math.round(agriData.padi)},
    "gandum_jagung": ${agriData.gandum_jagung.toFixed(1)},
    "sayur_umbi": ${agriData.sayur_umbi.toFixed(1)},
    "kedelai": ${Math.round(agriData.kedelai)},
    "kelapa_sawit": ${Math.round(agriData.kelapa_sawit)},
    "kopi_teh_kakao": ${agriData.kopi_teh_kakao.toFixed(1)},
    "kekuatan": 20.0
  }`;

                        // Replace peternakan block with the new combined block
                        // and remove the pertanian block entirely
                        
                        // Regex to replace the whole peternakan section including comments
                        const petSectionRegex = /\/\/ =+\s*\/\/ [^\r\n]*?PETERNAKAN[^\r\n]*?\s*\/\/ =+\s*\n\s*"sektor_peternakan":\s*\{[\s\S]*?\},/g;
                        const perSectionRegex = /\n\s*\/\/ =+\s*\/\/ [^\r\n]*?PERTANIAN[^\r\n]*?\s*\/\/ =+\s*\n\s*"sektor_pertanian":\s*\{[\s\S]*?\},/g;

                        content = content.replace(petSectionRegex, `// =============================================================\n  // 5. 🌾 AGRI & PETERNAKAN\n  // =============================================================\n\n  ${agriBlock},`);
                        content = content.replace(perSectionRegex, '');
                        modified = true;
                    }
                } catch (e) {
                    console.error(`Error processing ${fullPath}: ${e.message}`);
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Repaired: ${fullPath}`);
            }
        }
    }
}

const targetDir = path.resolve('c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries');
processDir(targetDir);
console.log('Finished global repair.');
