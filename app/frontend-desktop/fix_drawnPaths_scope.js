const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Declare useRef for drawnPaths in Component Body top buffers (around line 125)
    const refDecl = `  const [selectedWp, setSelectedWp] = useState<string | null>(null);\n  // Line hitting cache ref\n  const drawnPathsRef = useRef<{ pts: {rtX:number, rtY:number}[], origin: string, partner: string, originId: string, partnerId: string }[]>([]);`;

    if (content.includes('const [selectedWp, setSelectedWp] = useState<string | null>(null);') && !content.includes('drawnPathsRef')) {
         content = content.replace('const [selectedWp, setSelectedWp] = useState<string | null>(null);', refDecl);
         console.log("drawnPathsRef declared in Component scope!");
    }

    // 2. Remove old local array from useEffect block (was around line 188 offsets.forEach)
    content = content.replace('drawnPaths.length = 0; // Clear line tap cache', 'drawnPathsRef.current = []; // Clear line tap cache');
    // or matching old decl
    content = content.replace('const drawnPaths: { pts: {rtX:number, rtY:number}[], origin: string, partner: string, originId: string, partnerId: string }[] = [];', '');

    // 3. Update cache loading inside drawn paths loading buffers
    content = content.replace('drawnPaths.push', 'drawnPathsRef.current.push');

    // 4. Update onClick handler to read from `.current` list buffers
    if (content.includes('typeof drawnPaths !== \'undefined\'')) {
         content = content.replace('typeof drawnPaths !== \'undefined\'', 'drawnPathsRef.current.length > 0');
         content = content.replace('drawnPaths.forEach', 'drawnPathsRef.current.forEach');
         console.log("onClick updated read from drawnPathsRef!");
    }

    fs.writeFileSync(filePath, content);
    console.log("Scope binding fix applied successfully to drawnPaths!");
}
LinePlaceholder: true
