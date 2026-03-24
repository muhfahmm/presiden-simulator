const fs = require('fs');
const path = require('path');

const directoryPath = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\select-country\\data\\countries\\afrika';

const mappings = {
  "afrika_selatan.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "aljazair.ts": { ideology: "Demokrasi", religion: "Islam" },
  "angola.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "benin.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "botswana.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "burkina_faso.ts": { ideology: "Demokrasi", religion: "Islam" },
  "burundi.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "chad.ts": { ideology: "Demokrasi", religion: "Islam" },
  "djibouti.ts": { ideology: "Demokrasi", religion: "Islam" },
  "eritrea.ts": { ideology: "Nasionalisme", religion: "Islam" },
  "eswatini.ts": { ideology: "Monarki", religion: "Protestan" },
  "ethiopia.ts": { ideology: "Demokrasi", religion: "Kristen Ortodoks" },
  "gabon.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "gambia.ts": { ideology: "Demokrasi", religion: "Islam" },
  "ghana.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "guinea.ts": { ideology: "Demokrasi", religion: "Islam" },
  "guinea_bissau.ts": { ideology: "Demokrasi", religion: "Islam" },
  "kamerun.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "kenya.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "komoro.ts": { ideology: "Demokrasi", religion: "Islam" },
  "kongo.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "lesotho.ts": { ideology: "Monarki", religion: "Katolik" },
  "liberia.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "libya.ts": { ideology: "Nasionalisme", religion: "Islam" },
  "madagaskar.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "malawi.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "mali.ts": { ideology: "Demokrasi", religion: "Islam" },
  "maroko.ts": { ideology: "Monarki", religion: "Islam" },
  "mauritania.ts": { ideology: "Demokrasi", religion: "Islam" },
  "mauritius.ts": { ideology: "Demokrasi", religion: "Hindu" },
  "mesir.ts": { ideology: "Demokrasi", religion: "Islam" },
  "mozambik.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "namibia.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "niger.ts": { ideology: "Demokrasi", religion: "Islam" },
  "nigeria.ts": { ideology: "Demokrasi", religion: "Islam" },
  "pantai_gading.ts": { ideology: "Demokrasi", religion: "Islam" },
  "republik_afrika_tengah.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "republik_demokratik_kongo.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "republik_sudan.ts": { ideology: "Nasionalisme", religion: "Islam" },
  "republik_tanzania.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "republik_uganda.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "republik_zambia.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "republik_zimbabwe.ts": { ideology: "Demokrasi", religion: "Protestan" },
  "rwanda.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "sao_tome_dan_principe.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "senegal.ts": { ideology: "Demokrasi", religion: "Islam" },
  "seychelles.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "sierra_leone.ts": { ideology: "Demokrasi", religion: "Islam" },
  "somalia.ts": { ideology: "Nasionalisme", religion: "Islam" },
  "sudan_selatan.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "tanjung_verde.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "togo.ts": { ideology: "Demokrasi", religion: "Katolik" },
  "tunisia.ts": { ideology: "Demokrasi", religion: "Islam" }
};

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  let count = 0;
  files.forEach((file) => {
    if (mappings[file]) {
      const filePath = path.join(directoryPath, file);
      let content = fs.readFileSync(filePath, 'utf8');

      // Update ideology
      content = content.replace(/"?ideology"?:\s*["'][^"']+["']/g, `"ideology": "${mappings[file].ideology}"`);
      // Update religion
      content = content.replace(/"?religion"?:\s*["'][^"']+["']/g, `"religion": "${mappings[file].religion}"`);

      fs.writeFileSync(filePath, content, 'utf8');
      count++;
    }
  });

  console.log(`Successfully updated ${count} files.`);
});
