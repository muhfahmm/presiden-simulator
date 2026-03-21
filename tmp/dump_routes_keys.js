const fs = require('fs');

const filepath = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\game\\trades\\international\\routes.ts';
let text = fs.readFileSync(filepath, 'utf-8');

// Strip export default and type annotations
text = text.replace('export const internationalRoutes: Record<string, any> = ', '');
text = text.replace('};\n', '}');

// Eval the object
try {
    const obj = eval(`(${text})`);
    const keys = Object.keys(obj);
    fs.writeFileSync('c:\\fhm\\EM4\\tmp\\memory_keys.txt', keys.join('\n'));
    console.log("Keys dumped successfully. Total keys: " + keys.length);
} catch (e) {
    console.log("Eval failed: " + e.message);
    
    // Fallback: match all 2-space indented string keys accurately
    const matches = text.match(/^\s{2}"([^"]+)":/gm);
    if (matches) {
        const clean = matches.map(m => m.trim().replace('":', '').replace('"', '').replace('"', ''));
        fs.writeFileSync('c:\\fhm\\EM4\\tmp\\memory_keys.txt', clean.join('\n'));
        console.log("Regex fallback found keys: " + clean.length);
    }
}
