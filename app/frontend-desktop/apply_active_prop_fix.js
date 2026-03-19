const fs = require('fs');
const path = require('path');

const pageFile = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/page.tsx';
const gameFile = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const tradeFile = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

// 1. Update GameMapCanvas Props and Handlers
if (fs.existsSync(gameFile)) {
    let content = fs.readFileSync(gameFile, 'utf-8');
    
    // Add Prop Interface
    if (!content.includes('active?: boolean;')) {
        content = content.replace('mapMode?: "default" | "sda" | "hubungan" | "trade";', 'mapMode?: "default" | "sda" | "hubungan" | "trade";\n  active?: boolean;');
    }
    
    // Add Prop Destructure
    content = content.replace('export default function GameMapCanvas({ userCountry, targetCountry, onSelect, mapMode = "default" }: GameMapCanvasProps)', 
        'export default function GameMapCanvas({ userCountry, targetCountry, onSelect, mapMode = "default", active = true }: GameMapCanvasProps)');

    // Add Guard on click
    content = content.replace('onClick={(e) => {', 'onClick={(e) => {\n        if (!active) return;');

    // Update drag threshold to 15px
    content = content.replace('if (dist > 5) return;', 'if (dist > 15) return; // Ignore slight drags');

    // Add Guard to hover
    content = content.replace('onMouseMove={(e) => {', 'onMouseMove={(e) => {\n        if (!active) return;');

    fs.writeFileSync(gameFile, content);
    console.log("GameMapCanvas guards applied!");
}

// 2. Update TradeMapCanvas with active Prop
if (fs.existsSync(tradeFile)) {
    let content = fs.readFileSync(tradeFile, 'utf-8');
    
    if (!content.includes('active?: boolean;')) {
        content = content.replace('onSelect: (name: string) => void;', 'onSelect: (name: string) => void;\n  active?: boolean;');
    }
    
    // Allow destructured default
    if (content.includes('export default function TradeMapCanvas({ userCountry, targetCountry, onSelect }: TradeMapCanvasProps)')) {
        content = content.replace('export default function TradeMapCanvas({ userCountry, targetCountry, onSelect }: TradeMapCanvasProps)', 
            'export default function TradeMapCanvas({ userCountry, targetCountry, onSelect, active = true }: TradeMapCanvasProps)');
    } else {
        content = content.replace(/export default function TradeMapCanvas\(\{([\s\S]*?)\}\:[\s]*TradeMapCanvasProps\)/, 
            'export default function TradeMapCanvas({ $1, active = true }: TradeMapCanvasProps)');
    }

    // Add guards
    if (!content.includes('if (!active) return;\n        const startPos')) {
        content = content.replace('onClick={(e) => {', 'onClick={(e) => {\n        if (!active) return;');
    }
    if (!content.includes('if (!active) return;\n        const canvas')) {
        content = content.replace('onMouseMove={(e) => {', 'onMouseMove={(e) => {\n        if (!active) return;');
    }

    fs.writeFileSync(tradeFile, content);
    console.log("TradeMapCanvas guards applied!");
}

// 3. Update page.tsx with prop active pass overs
if (fs.existsSync(pageFile)) {
    let content = fs.readFileSync(pageFile, 'utf-8');
    
    content = content.replace('<GameMapCanvas \n                    userCountry={userCountry}', 
        '<GameMapCanvas \n                    active={mapMode !== "trade"}\n                    userCountry={userCountry}');

    content = content.replace('<TradeMapCanvas \n                    userCountry={userCountry}', 
        '<TradeMapCanvas \n                    active={mapMode === "trade"}\n                    userCountry={userCountry}');

    fs.writeFileSync(pageFile, content);
    console.log("Page.tsx active prop wiring applied!");
}
LinePlaceholder: true
