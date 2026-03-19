const fs = require('fs');
const path = require('path');

const filePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game/trades/TradeMapCanvas.tsx';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const target = '  }, [geoData, userCountry, targetCountry, centersData, aiPathfinder]);';
    const replacer = '  }, [geoData, userCountry, targetCountry, centersData, aiPathfinder, selectedWp]);';

    if (content.includes(target)) {
        content = content.replace(target, replacer);
        fs.writeFileSync(filePath, content);
        console.log("Dependency array updated with selectedWp successfully!");
    } else {
        console.log("Target useLayout dependencies NOT found in absolute string matching.");
    }
}
LinePlaceholder: true
