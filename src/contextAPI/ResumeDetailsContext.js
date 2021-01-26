import React, { useState, createContext } from "react";

import { getResume } from "utils/resume";

export const ResumeDetailsContext = createContext();

export const ResumeDetailsProvider = ({ children }) => {
  const resumeFromLocalStorage = getResume();

  const [resumeDetail, setResumeDetails] = useState({
    ...resumeFromLocalStorage,
  });

  return (
    <ResumeDetailsContext.Provider value={[resumeDetail, setResumeDetails]}>
      {children}
    </ResumeDetailsContext.Provider>
  );
};
