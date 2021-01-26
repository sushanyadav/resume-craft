import getResumeInitalState from "utils/getResumeInitalState";

export const RESUME_KEY = "resume";

const populateResume = (resumeData) => {
  return localStorage.setItem(RESUME_KEY, JSON.stringify(resumeData));
};

const getResume = () => {
  const initialResumeState = getResumeInitalState();

  const resume = JSON.parse(localStorage.getItem(RESUME_KEY));

  if (!resume) return { ...initialResumeState };

  return resume;
};

export { populateResume, getResume };
