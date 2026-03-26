const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
};

const baseDir = path.join(process.cwd(), 'src/app/database/data/countries');
const files = walk(baseDir);

console.log(`Processing ${files.length} files in ${baseDir}...`);

const fieldsToRemove = [
  "emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam",
  "garam", "nikel", "litium", "tembaga", "aluminium",
  "logam_tanah_jarang", "bijih_besi"
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  fieldsToRemove.forEach(field => {
    // Regex matches "field": value, possibly with decimal and optional comma/newline
    const regex = new RegExp(`\\s*"${field}":\\s*[\\d\\.]+,?\\n?`, 'g');
    content = content.replace(regex, '');
  });
  
  // Cleanup trailing commas in objects
  content = content.replace(/,\s*}/g, '\n    }');
  
  fs.writeFileSync(file, content);
});

console.log('Migration complete.');
