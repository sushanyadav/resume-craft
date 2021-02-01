import React, { useContext, useState, useEffect } from "react";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import Input from "components/Form/Input";

import { populateResume } from "utils/resume";

import { contactInfoIds } from "constants/formIds";
import { CREATE } from "constants/routes";

const ContactInfo = ({ history }) => {
  const { CITY, STATE, EMAIL, WEBSITE, FORM_ID } = contactInfoIds;

  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const contactInfoInitialState = resumeDetail[FORM_ID];

  const [contactInfo, setContactInfo] = useState(contactInfoInitialState);

  const setField = (field, value) =>
    setContactInfo({
      ...contactInfo,
      [field]: value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...contactInfo, isSumbitted: true },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    //sending to next step
    history.push(CREATE.WORK_EXPERIENCE);
  };

  const { city, state, email, website } = contactInfo;

  useEffect(() => {
    const resume = {
      ...resumeDetail,
      [FORM_ID]: { ...resumeDetail[FORM_ID], ...contactInfo },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);
    // eslint-disable-next-line
  }, [contactInfo, FORM_ID, setResumeDetails]);

  return (
    <FormLayout
      headingText="Contact information"
      step={3}
      disableButton={false}
      formID={FORM_ID} //inorder to submit outside the form
    >
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <Input
          label="City"
          id={CITY}
          placeholder="Enter your city"
          type="text"
          value={city}
          setValue={setField}
        />
        <Input
          label="State"
          id={STATE}
          placeholder="Enter your state"
          type="text"
          value={state}
          setValue={setField}
        />
        <Input
          label="Email"
          id={EMAIL}
          placeholder="Enter your email"
          type="text"
          value={email}
          setValue={setField}
        />
        <Input
          label="Website"
          id={WEBSITE}
          placeholder="Enter your website"
          type="text"
          value={website}
          setValue={setField}
        />
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(ContactInfo);
