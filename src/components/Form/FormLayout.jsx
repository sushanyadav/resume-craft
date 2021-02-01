import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import { populateResume } from "utils/resume";

import { steps } from "constants/formIds";
import { CREATE } from "constants/routes";

const FormLayout = ({
  children,
  disableButton,
  step,
  headingText,
  formID,
  history,
}) => {
  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const totalStep = 6;

  const hasBackButton = step > 1;

  const handleGoBack = () => {
    const previousFormID = steps[step - 1];

    const resume = {
      ...resumeDetail,
      [previousFormID]: { ...resumeDetail[previousFormID], isSumbitted: false },
      [formID]: { ...resumeDetail[formID], isSumbitted: false },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

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

    const gobackRoute = getGoBackRoute(step);

    history.push(gobackRoute);
  };

  const Buttons = ({ wrapperClass, primaryBtnText }) => (
    <div className={`${wrapperClass} btn-wrapper`}>
      {hasBackButton && (
        <button onClick={handleGoBack} className="text-btn">
          &#8592; Back
        </button>
      )}
      <button
        className="primary-btn"
        type="submit"
        form={formID}
        disabled={disableButton}
      >
        {primaryBtnText}
      </button>
    </div>
  );

  return (
    <>
      {step < totalStep && (
        <span className="steps">
          Step {step}/{totalStep - 1}
        </span>
      )}
      <h1 className="heading-text">{headingText}</h1>
      {step === totalStep && (
        <Buttons wrapperClass="left" primaryBtnText="Download as PDF" />
      )}
      {children}
      {step !== totalStep && (
        <Buttons
          wrapperClass="right"
          primaryBtnText={step === totalStep - 1 ? "Finish" : " Next step"}
        />
      )}
    </>
  );
};

export default withRouter(FormLayout);
