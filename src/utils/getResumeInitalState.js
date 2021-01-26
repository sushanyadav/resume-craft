import {
  basicInfoIds,
  summaryIds,
  contactInfoIds,
  workIds,
  workModalIds,
  skillsIds,
  previewIds,
} from "constants/formIds";

const {
  FIRST_NAME,
  LAST_NAME,
  JOB_TITLE,
  FORM_ID: BASIC_INFO_FORM_ID,
} = basicInfoIds;

const { PROFESSIONAL_SUMMARY, FORM_ID: SUMMARY_FORM_ID } = summaryIds;

const {
  CITY,
  STATE,
  EMAIL,
  WEBSITE,
  FORM_ID: CONTACT_FORM_ID,
} = contactInfoIds;

const { FORM_ID: WORK_FORM_ID, WORK_EXPERIENCES } = workIds;

const { FORM_ID: SKILLS_FORM_ID, SKILLS } = skillsIds;

const { FORM_ID: PREVIEW_FORM_ID } = previewIds;

const {
  WORK_JOB_TITLE,
  EMPLOYER,
  START_DATE,
  END_DATE,
  CURRENTLY_WORKING,
  JOB_DESCRIPTION,
} = workModalIds;

const getResumeInitalState = () => {
  const initialResumeState = {
    [BASIC_INFO_FORM_ID]: {
      [FIRST_NAME]: "",
      [LAST_NAME]: "",
      [JOB_TITLE]: "",
      isSumbitted: false,
    },
    [SUMMARY_FORM_ID]: {
      [PROFESSIONAL_SUMMARY]: "",
      isSumbitted: false,
    },
    [CONTACT_FORM_ID]: {
      [CITY]: "",
      [STATE]: "",
      [EMAIL]: "",
      [WEBSITE]: "",
      isSumbitted: false,
    },
    [WORK_FORM_ID]: {
      [WORK_EXPERIENCES]: [],
      isSumbitted: false,
    },
    [WORK_FORM_ID]: {
      [WORK_EXPERIENCES]: [],
      isSumbitted: false,
    },
    [SKILLS_FORM_ID]: {
      [SKILLS]: [],
      isSumbitted: false,
    },
    [PREVIEW_FORM_ID]: {
      isSumbitted: false,
    },
  };

  return initialResumeState;
};

export default getResumeInitalState;

export const getWorkExperienceInitalState = () => {
  const initalWorkExperienceState = {
    [WORK_JOB_TITLE]: "",
    [EMPLOYER]: "",
    [START_DATE]: "",
    [END_DATE]: "",
    [CURRENTLY_WORKING]: false,
    [JOB_DESCRIPTION]: "",
  };

  return initalWorkExperienceState;
};
