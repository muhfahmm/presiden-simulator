const fs = require('fs');

try {
    let text = fs.readFileSync('src/app/select-country/data/countries.ts', 'utf8');
    
    // Extract the JSON part
    let jsonStr = text.replace('import { CountryData } from "./types";\n\nexport const countries: CountryData[] = ', '');
    // remove trailing semicolon and newlines
    jsonStr = jsonStr.trim();
    if (jsonStr.endsWith(';')) {
        jsonStr = jsonStr.slice(0, -1);
    }
    
    let data = JSON.parse(jsonStr);

    const targetPartners = ["United States", "China", "Japan", "Germany", "Australia", "Brazil", "India", "South Africa", "United Kingdom", "France"];

    data.forEach(c => {
        if (!c.geopolitics) {
            c.geopolitics = {
                allies: [],
                enemies: [],
                stance: "Neutral",
                international_influence: {
                    soft_power: Math.floor(Math.random() * 60) + 20,
                    hard_power: Math.floor(Math.random() * 60) + 20,
                    diplomatic_prestige: Math.floor(Math.random() * 60) + 20
                },
                international_orgs: [],
                agreements: []
            };
        }
        
        let numPartners = Math.floor(Math.random() * 3) + 3;
        let partners = [...targetPartners].sort(() => 0.5 - Math.random()).slice(0, numPartners);
        
        partners.forEach(p => {
            if (p !== c.name_en && !c.geopolitics.agreements.find(a => a.partner === p)) {
                c.geopolitics.agreements.push({
                    partner: p,
                    type: "Trade",
                    status: "Active"
                });
            }
        });
    });

    let output = 'import { CountryData } from "./types";\n\nexport const countries: CountryData[] = ' + JSON.stringify(data, null, 2) + ';\n';
    fs.writeFileSync('src/app/select-country/data/countries.ts', output);
    console.log("Successfully injected geopolitics trade agreements!");
} catch (e) {
    console.error("Error parsing or writing file:", e);
}
