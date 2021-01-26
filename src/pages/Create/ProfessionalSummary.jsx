import React, { useContext, useState, useEffect } from "react";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import TextArea from "components/Form/TextArea";

import { populateResume } from "utils/resume";

import { summaryIds } from "constants/formIds";
import { CREATE } from "constants/routes";

const ProfessionalSummary = ({ history }) => {
  const { PROFESSIONAL_SUMMARY, FORM_ID } = summaryIds;

  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const professionalSummaryState = resumeDetail[FORM_ID];

  const [professionalSummary, setProfessionalSummary] = useState(
    professionalSummaryState
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...professionalSummary, isSumbitted: true },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    //sending to next step
    history.push(CREATE.CONTACT_INFO);
  };

  const { professionalSummary: professionalSummaryValue } = professionalSummary;

  const setField = (field, value) =>
    setProfessionalSummary({
      ...professionalSummary,
      [field]: value,
    });

  useEffect(() => {
    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...resumeDetail[FORM_ID], ...professionalSummary },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);
  }, [professionalSummary]);

  return (
    <FormLayout
      headingText="Professional Summary"
      step={2}
      disableButton={false}
      formID={FORM_ID} //inorder to submit outside the form
    >
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <TextArea
          id={PROFESSIONAL_SUMMARY}
          placeholder=""
          label="Include 2-3 clear sentences about your overall experience"
          value={professionalSummaryValue}
          setValue={setField}
        />
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(ProfessionalSummary);
