const fs = require('fs');
const path = require('path');

const baseDir = 'c:/fhm/EM4/app/frontend-desktop/src/app/select-country/data/countries';

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('"pabrik_militer":')) {
                // 1. Extract the current pabrik_militer block
                const factoryMatch = content.match(/("pabrik_militer":\s*\{[\s\S]*?\n\s*\},?)/);
                if (!factoryMatch) return;
                const factoryBlock = factoryMatch[0].trim().replace(/,$/, '') + ','; 
                
                // 2. Remove any existing pabrik_militer blocks (cleanup previous failed attempt)
                let newContent = content.replace(/(\s*"pabrik_militer":\s*\{[\s\S]*?\n\s*\},?)/g, '');
                
                // 3. Find the anchor (Section 10 Header)
                const section10Header = '// 10. 🏥 SOSIAL & PELAYANAN PUBLIK';
                if (newContent.includes(section10Header)) {
                    const lines = newContent.split('\n');
                    let targetIndex = -1;
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].includes(section10Header)) {
                            // Find the last closing brace of the armada_kepolisian block
                            // This should be 1-2 lines above the header
                            for (let j = i - 1; j >= 0; j--) {
                                if (lines[j].trim() === '}') { // armada_kepolisian ends with } (no comma before the header in some cases)
                                     targetIndex = j;
                                     break;
                                }
                                if (lines[j].trim() === '},') {
                                     targetIndex = j;
                                     break;
                                }
                            }
                            break;
                        }
                    }
                    
                    if (targetIndex !== -1) {
                        // Ensure the previous block has a comma if it didn't
                        if (lines[targetIndex].trim() === '}') {
                            lines[targetIndex] = lines[targetIndex].replace('}', '},');
                        }
                        
                        lines.splice(targetIndex + 1, 0, `  "pabrik_militer": ${factoryBlock.replace('"pabrik_militer":', '').trim()}`);
                        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
                        // console.log(`Successfully Reordered: ${filePath}`);
                    }
                }
            }
        }
    });
}

walk(baseDir);
