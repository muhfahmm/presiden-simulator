const fs = require('fs');
const path = require('path');

const directoryPath = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries\\afrika';

const ideologyMap = {
  "afrika_selatan": "Demokrasi",
  "aljazair": "Nasionalisme",
  "angola": "Sosialisme",
  "benin": "Demokrasi",
  "botswana": "Kapitalisme",
  "burkina_faso": "Nasionalisme", // Military Junta
  "burundi": "Konservatisme",
  "chad": "Nasionalisme", // Military Transitional
  "djibouti": "Konservatisme",
  "eritrea": "Sosialisme", // Totalitarian one-party
  "eswatini": "Monarki",
  "ethiopia": "Nasionalisme",
  "gabon": "Nasionalisme", // Military
  "gambia": "Demokrasi",
  "ghana": "Demokrasi",
  "guinea": "Nasionalisme", // Military
  "guinea_bissau": "Demokrasi",
  "kamerun": "Konservatisme",
  "kenya": "Kapitalisme",
  "komoro": "Demokrasi",
  "kongo": "Sosialisme", // Congolese Party of Labour
  "lesotho": "Monarki",
  "liberia": "Demokrasi",
  "libya": "Nasionalisme",
  "madagaskar": "Demokrasi",
  "malawi": "Demokrasi",
  "mali": "Nasionalisme", // Military
  "maroko": "Monarki",
  "mauritania": "Konservatisme", // Islamic Republic
  "mauritius": "Demokrasi",
  "mesir": "Nasionalisme", // Military-backed
  "mozambik": "Sosialisme", // FRELIMO
  "namibia": "Sosialisme", // SWAPO
  "niger": "Nasionalisme", // Military
  "nigeria": "Demokrasi",
  "pantai_gading": "Kapitalisme",
  "republik_afrika_tengah": "Nasionalisme",
  "republik_demokratik_kongo": "Demokrasi",
  "republik_sudan": "Nasionalisme", // Military
  "republik_tanzania": "Sosialisme", // Chama Cha Mapinduzi
  "republik_uganda": "Konservatisme",
  "republik_zambia": "Demokrasi",
  "republik_zimbabwe": "Sosialisme", // ZANU-PF
  "rwanda": "Konservatisme",
  "sao_tome_dan_principe": "Demokrasi",
  "senegal": "Demokrasi",
  "seychelles": "Liberalisme",
  "sierra_leone": "Demokrasi",
  "somalia": "Konservatisme",
  "sudan_selatan": "Nasionalisme",
  "tanjung_verde": "Liberalisme",
  "togo": "Konservatisme",
  "tunisia": "Nasionalisme"
};

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.log('Error: ' + err);

  let updated = 0;
  files.forEach(file => {
    if (file === '_index.ts') return;
    
    const name = file.replace('.ts', '');
    if (ideologyMap[name]) {
      const filePath = path.join(directoryPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/"?ideology"?:\s*["'][^"']+["']/g, `"ideology": "${ideologyMap[name]}"`);
      
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
    }
  });

  console.log(`Successfully updated ideologies for ${updated} African countries.`);
});
