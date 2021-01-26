import { CREATE } from "constants/routes";

const {
  PROFESSIONAL_SUMMARY,
  BASIC_INFO,
  CONTACT_INFO,
  WORK_EXPERIENCE,
  SKILLS,
} = CREATE;

const getGoBackRoute = (step) => {
  switch (step) {
    case 2:
      return BASIC_INFO;

    case 3:
      return PROFESSIONAL_SUMMARY;

    case 4:
      return CONTACT_INFO;

    case 5:
      return WORK_EXPERIENCE;

    case 6:
      return SKILLS;

    default:
      break;
  }
};

export default getGoBackRoute;
