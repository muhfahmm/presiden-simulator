import { CountryData } from "../../types";

export const KONSUMSI_SOSIAL = {
  education: {
    kindergarten: 0.5,
    elementary_school: 1,
    middle_school: 2,
    high_school: 3,
    university: 10,
    education_institute: 5,
    laboratory: 15,
    observatory: 8,
    research_center: 20,
    development_center: 15
  },
  health: {
    large_hospital: 20,
    small_hospital: 5,
    diagnostic_center: 10
  },
  sports: {
    swimming_pool: 5,
    racing_circuit: 15,
    stadium: 10,
    international_stadium: 20
  },
  law: {
    police_academy: 10,       // MW per unit
    police_station: 3,        // MW per unit
    police_car_fleet: 0.1,     // MW per unit
    prosecution_office: 5,   // MW per unit
    court: 10,                // MW per unit
    legal_aid_center: 3       // MW per unit
  }
};

export function hitungKonsumsiSosial(social: CountryData["sector_social"]) {
  const edu = social.education;
  const health = social.health;
  const sports = social.sports;

  const totalEdu = 
    edu.kindergarten * KONSUMSI_SOSIAL.education.kindergarten +
    edu.elementary_school * KONSUMSI_SOSIAL.education.elementary_school +
    edu.middle_school * KONSUMSI_SOSIAL.education.middle_school +
    edu.high_school * KONSUMSI_SOSIAL.education.high_school +
    edu.university * KONSUMSI_SOSIAL.education.university +
    edu.education_institute * KONSUMSI_SOSIAL.education.education_institute +
    edu.laboratory * KONSUMSI_SOSIAL.education.laboratory +
    edu.observatory * KONSUMSI_SOSIAL.education.observatory +
    edu.research_center * KONSUMSI_SOSIAL.education.research_center +
    edu.development_center * KONSUMSI_SOSIAL.education.development_center;

  const totalHealth = 
    health.large_hospital * KONSUMSI_SOSIAL.health.large_hospital +
    health.small_hospital * KONSUMSI_SOSIAL.health.small_hospital +
    health.diagnostic_center * KONSUMSI_SOSIAL.health.diagnostic_center;

  const totalSports = 
    sports.swimming_pool * KONSUMSI_SOSIAL.sports.swimming_pool +
    sports.racing_circuit * KONSUMSI_SOSIAL.sports.racing_circuit +
    sports.stadium * KONSUMSI_SOSIAL.sports.stadium +
    sports.international_stadium * KONSUMSI_SOSIAL.sports.international_stadium;

  const totalLaw = 
    social.law.police_academy * KONSUMSI_SOSIAL.law.police_academy +
    social.law.police_station * KONSUMSI_SOSIAL.law.police_station +
    social.law.police_car_fleet * KONSUMSI_SOSIAL.law.police_car_fleet +
    social.law.prosecution_office * KONSUMSI_SOSIAL.law.prosecution_office +
    social.law.court * KONSUMSI_SOSIAL.law.court +
    social.law.legal_aid_center * KONSUMSI_SOSIAL.law.legal_aid_center;

  return totalEdu + totalHealth + totalSports + totalLaw;
}
