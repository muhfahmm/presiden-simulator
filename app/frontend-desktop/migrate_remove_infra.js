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

// Target the data directory relative to the current working directory
const baseDir = path.join(process.cwd(), 'src/app/select-country/data/countries');
const files = walk(baseDir);

console.log(`Processing ${files.length} files in ${baseDir}...`);

if (files.length === 0) {
  console.error("No files found! Check your CWD.");
  process.exit(1);
}

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove kualitas_jalan: number, (including optional comma and newline)
  content = content.replace(/\s*"kualitas_jalan":\s*\d+,?\n?/g, '');
  // Remove cakupan_internet: number,
  content = content.replace(/\s*"cakupan_internet":\s*\d+,?\n?/g, '');
  
  // Fix trailing commas if they were at the end of an object
  content = content.replace(/,\s*}/g, '\n    }');
  
  fs.writeFileSync(file, content);
});

console.log('Migration complete.');
