const fs = require('fs');
const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const styleTarget = `              const isSelected = selectedWp && (
                 seg.origin === selectedWp || seg.partner === selectedWp ||
                 (seg.originId && seg.originId === selectedWp) ||
                 (seg.partnerId && seg.partnerId === selectedWp)
              );`;

    const styleReplacer = `              const isSelected = selectedWp && (
                 seg.origin === selectedWp || seg.partner === selectedWp ||
                 (seg.originId && seg.originId === selectedWp) ||
                 (seg.partnerId && seg.partnerId === selectedWp)
              );
              
              if (selectedWp && Math.random() < 0.05) {
                 console.log("[Draw Debug] selectedWp:", selectedWp, "seg.origin:", seg.origin, "seg.partner:", seg.partner, "originId:", seg.originId, "partnerId:", seg.partnerId, "isSelected:", isSelected);
              }`;

    if (content.includes('const isSelected = selectedWp && (')) {
        content = content.replace(styleTarget, styleReplacer);
        fs.writeFileSync(filePath, content);
        console.log("Draw debug console logs injected successfully!");
    } else {
         console.log("Draw Debug anchor target NOT found in file!");
    }
}
LinePlaceholder: true
