const fs = require('fs');
const path = require('path');

const file1 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/gamemap.tsx';
const file2 = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

[file1, file2].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        // Find style attribute inside <canvas
        if (content.includes('style={{ cursor: isHovering ? hoverCursor : defaultCursor }}')) {
             content = content.replace(
                 'style={{ cursor: isHovering ? hoverCursor : defaultCursor }}',
                 'style={{ cursor: isHovering ? hoverCursor : defaultCursor, pointerEvents: active ? "auto" : "none" }}'
             );
             console.log(`Pointer-events added to style in ${path.basename(file)}`);
        } else {
             // Fallback
             content = content.replace(
                 'className="h-full w-auto max-w-none z-10"',
                 'className="h-full w-auto max-w-none z-10" style={{ pointerEvents: active ? "auto" : "none" }}'
             );
        }

        fs.writeFileSync(file, content);
    }
});

console.log("Canvas pointer-events blocking safety applied!");
LinePlaceholder: true
