import React, { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import { CREATE } from "constants/routes";

const RedirectIfSumbitted = (Component) => ({ ...props }) => {
  const { pathname } = useLocation();

  const [resumeDetail] = useContext(ResumeDetailsContext);

  const {
    basicInfo: { isSumbitted: isBasicInfoSubmitted },
    summary: { isSumbitted: isSummarySubmitted },
    contact: { isSumbitted: isContactSubmitted },
    work: { isSumbitted: isWorkSubmitted },
    skills: { isSumbitted: isSkillsSubmitted },
  } = resumeDetail;

  //listing routes
  const {
    PROFESSIONAL_SUMMARY,
    BASIC_INFO,
    CONTACT_INFO,
    WORK_EXPERIENCE,
    SKILLS,
    PREVIEW,
  } = CREATE;

  const redirectTo = (url) => {
    if (pathname === url) return <Component {...props} />;

    return <Redirect to={url} />;
  };

  if (!isBasicInfoSubmitted) {
    return redirectTo(BASIC_INFO);
  }

  if (isBasicInfoSubmitted && !isSummarySubmitted) {
    return redirectTo(PROFESSIONAL_SUMMARY);
  }

  if (isSummarySubmitted && !isContactSubmitted) {
    return redirectTo(CONTACT_INFO);
  }

  if (isContactSubmitted && !isWorkSubmitted) {
    return redirectTo(WORK_EXPERIENCE);
  }

  if (isWorkSubmitted && !isSkillsSubmitted) {
    return redirectTo(SKILLS);
  }

  if (isSkillsSubmitted) {
    return redirectTo(PREVIEW);
  }

  return <Component {...props} />;
};

export default RedirectIfSumbitted;
