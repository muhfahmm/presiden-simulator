const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game';
const files = [
    {
        filepath: path.join(baseDir, 'mainGameMap.tsx'),
        propsName: 'GameMapCanvasProps',
        funcName: 'GameMapCanvas'
    },
    {
        filepath: path.join(baseDir, 'tab-menu', 'SDA', 'mapSDA.tsx'),
        propsName: 'MapSDAProps',
        funcName: 'MapSDA'
    },
    {
        filepath: path.join(baseDir, 'tab-menu', 'Hubungan', 'mapHubungan.tsx'),
        propsName: 'MapHubunganProps',
        funcName: 'MapHubungan'
    },
    {
        filepath: path.join(baseDir, 'tab-menu', 'trades', 'TradeMapCanvas.tsx'),
        propsName: 'TradeMapCanvasProps',
        funcName: 'TradeMapCanvas'
    }
];

files.forEach(f => {
    if (!fs.existsSync(f.filepath)) {
        console.error(`File missing: ${f.filepath}`);
        return;
    }

    let content = fs.readFileSync(f.filepath, 'utf-8');

    // 1. Add geoData to Props Interface
    const propsRegex = new RegExp(`interface\\s+${f.propsName}\\s*\\{[\\s\\S]*?\\}`);
    content = content.replace(propsRegex, match => {
        if (match.includes('geoData?:')) return match; // already added
        const lastBrace = match.lastIndexOf('}');
        return match.slice(0, lastBrace) + '  geoData?: any;\n' + match.slice(lastBrace);
    });

    // 2. Add geoData to functional Component args
    const funcRegex = new RegExp(`export\\s+default\\s+function\\s+${f.funcName}\\s*\\(\\s*\\{([^\\}]+)\\}\\s*:\\s*${f.propsName}\\s*\\)`);
    content = content.replace(funcRegex, (match, args) => {
        if (args.includes('geoData')) return match;
        const trimmedArgs = args.trim();
        return `export default function ${f.funcName}({ ${trimmedArgs}, geoData }: ${f.propsName})`;
    });

    // 3. Remove local state [geoData, setGeoData]
    content = content.replace(/const\s+\[geoData,\s*setGeoData\]\s*=\s*useState<any>\(null\);?\s*\r?\n/g, '');

    // 4. Remove internal fetch useEffect block
    // Specifically looking for fetch("/world.geojson") inside useEffect
    content = content.replace(/useEffect\(\s*\(\s*\)\s*=>\s*\{[\s\S]*?fetch\(\s*["']\/world\.geojson["']\s*\)[\s\S]*?\},?\s*\[\]\s*\);?/g, '');

    fs.writeFileSync(f.filepath, content);
    console.log(`Refactored ${f.funcName} successfully.`);
});
