const fs = require('fs');
const path = require('path');

const brainPaths = [
    "c:\\fhm\\em\\app\\frontend\\src\\app\\game\\components\\AI_logic\\5_AI_Pembangunan\\1_produksi\\brain",
    "c:\\fhm\\em\\app\\frontend\\src\\app\\game\\components\\AI_logic\\5_AI_Pembangunan\\2_produksi_militer\\brain",
    "c:\\fhm\\em\\app\\frontend\\src\\app\\game\\components\\AI_logic\\5_AI_Pembangunan\\3_tempat_umum\\brain"
];

brainPaths.forEach(dirPath => {
    if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.py'));
        files.forEach(fileName => {
            const filePath = path.join(dirPath, fileName);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // 1. Update Steel Key
            content = content.replace(/"12_tambang_bijih_besi"/g, '"4_smelter"');
            
            // 2. Add stocks initialization if missing
            if (content.includes('stocks.get') && !content.includes('stocks = ')) {
                // Find budget line
                const budgetMatch = content.match(/budget = (input_data|data).get\("budget", 0\)/);
                if (budgetMatch) {
                    const varName = budgetMatch[1];
                    content = content.replace(budgetMatch[0], `${budgetMatch[0]}\n        stocks = ${varName}.get("stocks", {})`);
                }
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Processed: ${fileName}`);
        });
    }
});
