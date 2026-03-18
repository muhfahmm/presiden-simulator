const fs = require('fs');
const data = JSON.parse(fs.readFileSync('c:/fhm/EM4/app/frontend-desktop/public/world.geojson', 'utf8'));

const continents = {
  asia: [], europe: [], africa: [], northAmerica: [], southAmerica: [], oceania: [], antarctica: []
};

data.features.forEach(f => {
  const n = f.properties.name.toLowerCase();
  const id = f.id;
  // Basic categorization by name to get the IDs
  if (/afghanistan|india|china|japan|indonesia|malaysia|thailand|vietnam|iran|iraq|saudi|turkey|russia|kazakhstan|pakistan|korea|mongolia|myanmar|nepal|philippines|sri lanka|taiwan|uzbekistan|yemen|israel|jordan|lebanon|syria|oman|qatar|kuwait|united arab|armenia|azerbaijan|georgia|cyprus|bhutan|brunei|cambodia|laos|timor|palestine|northern cyprus/.test(n)) continents.asia.push(id);
  else if (/france|germany|italy|spain|united kingdom|poland|ukraine|romania|netherlands|belgium|greece|czech|portugal|sweden|hungary|austria|switzerland|bulgaria|serbia|belarus|austria|norway|ireland|croatia|georgia|moldova|bosnia|albania|lithuania|slovenia|latvia|estonia|montenegro|luxembourg|malta|iceland|andorra|monaco|san marino|vatican|kosovo|macedonia|slovakia/.test(n)) continents.europe.push(id);
  else if (/egypt|nigeria|ethiopia|congo|south africa|tanzania|kenya|uganda|algeria|sudan|morocco|angola|ghana|mozambique|madagascar|ivory|cameroon|niger|mali|burkina|malawi|zambia|senegal|chad|somalia|zimbabwe|guinea|rwanda|benin|tunisia|burundi|south sudan|togo|sierra|libya|central african|eritrea|namibia|gambia|botswana|gabon|lesotho|guinea bissau|equatorial|mauritius|swaziland|djibouti|comoros|cape verde|cabo verde|sao tome|seychelles|western sahara|somaliland/.test(n)) continents.africa.push(id);
  else if (/united states|canada|mexico|cuba|guatemala|haiti|dominican|honduras|nicaragua|el salvador|costa rica|panama|jamaica|trinidad|bahamas|belize|barbados|saint|grenada|antigua|bermuda|puerto|greenland/.test(n)) continents.northAmerica.push(id);
  else if (/brazil|colombia|argentina|peru|venezuela|chile|ecuador|bolivia|paraguay|uruguay|guyana|suriname|french guiana|falkland/.test(n)) continents.southAmerica.push(id);
  else if (/australia|papua|new zealand|fiji|solomon|vanuatu|samoa|kiribati|tonga|marshall|micronesia|palau|nauru|tuvalu|new caledonia/.test(n)) continents.oceania.push(id);
  else if (/antarctica|french southern/.test(n)) continents.antarctica.push(id);
});

console.log(JSON.stringify(continents, null, 2));
