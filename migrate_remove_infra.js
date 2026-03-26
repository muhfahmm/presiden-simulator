const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
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

console.log(`Processing ${files.length} files...`);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove kualitas_jalan
  content = content.replace(/\s*"kualitas_jalan":\s*\d+,?\n?/g, '');
  // Remove cakupan_internet
  content = content.replace(/\s*"cakupan_internet":\s*\d+,?\n?/g, '');
  
  // Cleanup trailing commas in objects if any (optional but good)
  content = content.replace(/,\s*}/g, '\n    }');
  
  fs.writeFileSync(file, content);
});

console.log('Migration complete.');
