import { countries } from "../game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/OrgMembersList";
// Wait, I can't import from there easily.
// I'll import from the source.
import { countries as allCountries } from "./database/data/negara/benua/index";
import { members } from "./database/data/database_organisasi_internasional/1_organisasi_PBB/1_Dana_Moneter_Internasional_(IMF)/members";

const countryIds = new Set(allCountries.map(c => c.name_id.toLowerCase()));
const membersList = members.map(m => m.toLowerCase());

const missing = membersList.filter(m => !countryIds.has(m));
const uniqueMembers = Array.from(new Set(membersList.filter(m => countryIds.has(m)))).sort();

console.log("TOTAL IN MEMBERS.TS:", membersList.length);
console.log("UNIQUE IN MEMBERS.TS:", new Set(membersList).size);
console.log("MISSING FROM GAME DATABASE:", missing);
console.log("FINAL COUNT:", uniqueMembers.length);
console.log("FINAL LIST:", JSON.stringify(uniqueMembers));
