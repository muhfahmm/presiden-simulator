const targetCountries = [
  "afganistan", "afrika selatan", "albania", "aljazair", "amerika serikat", "andorra", "angola", 
  "antigua dan barbuda", "arab saudi", "argentina", "armenia", "australia", "austria", "azerbaijan", 
  "bahama", "bahrain", "bangladesh", "barbados", "belanda", "belarus", "belgia", "belize", "benin", 
  "bermuda", "bhutan", "bolivia", "bosnia dan hercegovina", "botswana", "brazil", "brunei", 
  "bulgaria", "burkina faso", "burundi", "ceko", "chad", "chile", "china", "costa rica", "curacao", 
  "denmark", "djibouti", "dominika", "ekuador", "el salvador", "eritrea", "estonia", "eswatini", 
  "ethiopia", "fiji", "filipina", "finlandia", "gabon", "gambia", "georgia", "ghana", "gibraltar", 
  "greenland", "grenada", "guam", "guatemala", "guiana prancis", "guinea", "guinea bissau", 
  "guyana", "haiti", "honduras", "hong kong", "hungaria", "india", "indonesia", "inggris", "irak", 
  "iran", "irlandia", "islandia", "israel", "italia", "jamaika", "jepang", "jerman", "kamboja", 
  "kamerun", "kanada", "kazakhstan", "kenya", "kepulauan faroe", "kirgizstan", "kiribati", "kolombia", 
  "komoro", "kongo", "korea selatan", "korea utara", "kosovo", "kroasia", "kuba", "kuwait", "laos", 
  "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luksemburg", 
  "madagaskar", "makau", "makedonia utara", "malawi", "malaysia", "maldives", "mali", "malta", 
  "maroko", "marshall", "mauritania", "mauritius", "meksiko", "mesir", "mikronesia", "moldova", 
  "monako", "mongolia", "montenegro", "mozambik", "myanmar", "namibia", "nauru", "nepal", "niger", 
  "nigeria", "nikaragua", "norwegia", "oman", "pakistan", "palau", "palestina", "panama", 
  "pantai gading", "papua nugini", "paraguay", "peru", "polandia", "portugal", "prancis", 
  "puerto rico", "qatar", "republik afrika tengah", "republik demokratik kongo", "republik dominika", 
  "republik rumania", "republik serbia", "republik sudan", "republik tanzania", "republik timor leste", 
  "republik uganda", "republik zambia", "republik zimbabwe", "rusia", "rwanda", "saint kitts dan nevis", 
  "saint lucia", "saint vincent dan grenadine", "samoa", "samoa amerika", "san marino", 
  "sao tome dan principe", "selandia baru", "senegal", "seychelles", "sierra leone", "singapura", 
  "siprus", "slovenia", "slowakia", "somalia", "spanyol", "sri lanka", "sudan selatan", "suriah", 
  "suriname", "swedia", "swiss", "tahiti", "taiwan", "tajikistan", "tanjung verde", "thailand", 
  "togo", "tonga", "trinidad dan tobago", "tunisia", "turki", "turkmenistan", "tuvalu", "ukraina", 
  "uni emirat arab", "uruguay", "uzbekistan", "vanuatu", "vatikan", "venezuela", "vietnam", "yaman", 
  "yordania", "yunani"
];

const fs = require('fs');
const content = fs.readFileSync('c:/fhm/EM/app/frontend/src/app/database/data/countries/relations/asia/indonesia.ts', 'utf8');

// Use regex to extract the array content
const match = content.match(/export const indonesia_relations = (\[[\s\S]*?\]);/);
if (match) {
    // Basic extraction - this is a bit hacky but works for simple object arrays
    const jsonString = match[1].replace(/(\w+):/g, '"$1":').replace(/'/g, '"');
    const relations = JSON.parse(jsonString);
    const relationNames = relations.map(r => r.name);
    
    console.log("=== AUDIT RESULTS ===");
    console.log("Total Count:", relationNames.length);

    const missingInRelations = targetCountries.filter(c => !relationNames.includes(c));
    if (missingInRelations.length > 0) {
      console.log("Missing (Needs to be added):", JSON.stringify(missingInRelations, null, 2));
    }

    const extraInRelations = relationNames.filter(c => !targetCountries.includes(c));
    if (extraInRelations.length > 0) {
      console.log("Extra (Needs to be removed or renamed):", JSON.stringify(extraInRelations, null, 2));
    }

    const duplicates = relationNames.filter((item, index) => relationNames.indexOf(item) !== index);
    if (duplicates.length > 0) {
      console.log("Duplicates (Needs to be deduplicated):", JSON.stringify(duplicates, null, 2));
    }
    console.log("=====================");
}
