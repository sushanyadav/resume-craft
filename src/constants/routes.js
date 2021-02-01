//put routes in string  if it has no sub routes
export const HOME = "/";
export const NOT_FOUND = "/not-found";

//put routes in object if it has sub routes
export const CREATE = {
  INDEX: "/create/",
  BASIC_INFO: "/create/basic-info",
  PROFESSIONAL_SUMMARY: "/create/summary",
  CONTACT_INFO: "/create/contact-info",
  WORK_EXPERIENCE: "/create/work",
  SKILLS: "/create/skills",
  PREVIEW: "/create/preview",
};

// eslint-disable-next-line
export default {
  HOME,
  CREATE,
  NOT_FOUND,
};
