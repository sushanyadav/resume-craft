import React, { useContext, useState, useEffect } from "react";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import Input from "components/Form/Input";

import { populateResume } from "services/resume";

import { basicInfoIds } from "constants/formIds";
import { CREATE } from "constants/routes";

const BasicInfo = ({ history }) => {
  const { FIRST_NAME, LAST_NAME, JOB_TITLE, FORM_ID } = basicInfoIds;

  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const basicInfoInitialState = resumeDetail[FORM_ID];

  const [basicInfo, setBasicInfo] = useState(basicInfoInitialState);

  const setField = (field, value) =>
    setBasicInfo({
      ...basicInfo,
      [field]: value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...basicInfo, isSumbitted: true },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    //sending to next step
    history.push(CREATE.PROFESSIONAL_SUMMARY);
  };

  useEffect(() => {
    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...resumeDetail[FORM_ID], ...basicInfo },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    // eslint-disable-next-line
  }, [basicInfo, FORM_ID, setResumeDetails]);

  const { firstname, lastname, jobtitle } = basicInfo;

  return (
    <FormLayout
      headingText="Enter your basic information"
      step={1}
      disableButton={false}
      formID={FORM_ID} //inorder to submit outside the form
    >
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <Input
          label="First name"
          id={FIRST_NAME}
          placeholder="Enter your first name"
          type="text"
          value={firstname}
          setValue={setField}
        />
        <Input
          label="Last name"
          id={LAST_NAME}
          placeholder="Enter your last name"
          type="text"
          value={lastname}
          setValue={setField}
        />
        <Input
          label="Job title"
          id={JOB_TITLE}
          placeholder="Enter your job title"
          type="text"
          value={jobtitle}
          setValue={setField}
        />
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(BasicInfo);
