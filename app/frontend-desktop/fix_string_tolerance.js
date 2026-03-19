const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Update Drawing Style Condition with Tolerance
    const styleTarget = `              const isSelected = selectedWp && (
                 seg.origin === selectedWp || seg.partner === selectedWp ||
                 (seg.originId && seg.originId === selectedWp) ||
                 (seg.partnerId && seg.partnerId === selectedWp)
              );`;

    const styleReplacer = `              const isSelected = selectedWp && (
                 seg.origin?.trim().toLowerCase() === selectedWp.trim().toLowerCase() || 
                 seg.partner?.trim().toLowerCase() === selectedWp.trim().toLowerCase() ||
                 (seg.originId && seg.originId.trim().toLowerCase() === selectedWp.trim().toLowerCase()) ||
                 (seg.partnerId && seg.partnerId.trim().toLowerCase() === selectedWp.trim().toLowerCase())
              );`;

    if (content.includes('seg.origin === selectedWp')) {
        content = content.replace(styleTarget, styleReplacer);
        console.log("Drawing Style check made tolerant!");
    } else {
        // Fallback for simple match if prior was different
        const simpleTarget = `const isSelected = selectedWp && (seg.origin === selectedWp || seg.partner === selectedWp);`;
        const simpleReplacer = `const isSelected = selectedWp && (
                 seg.origin?.trim().toLowerCase() === selectedWp.trim().toLowerCase() || 
                 seg.partner?.trim().toLowerCase() === selectedWp.trim().toLowerCase()
              );`;
        content = content.replace(simpleTarget, simpleReplacer);
        console.log("Drawing Style fallback applied!");
    }

    // 2. Update onClick handler with .trim() safety
    content = content.replace('const targetName = closest.name;', 'const targetName = closest.name?.trim();');

    fs.writeFileSync(filePath, content);
    console.log("String space-tolerant updates applied to TradeMapCanvas successfully!");
}
LinePlaceholder: true
