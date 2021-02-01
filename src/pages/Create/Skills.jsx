import React, { useContext, useState, useEffect } from "react";
import TagsInput from "react-tagsinput";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";

import { populateResume } from "utils/resume";

import { skillsIds } from "constants/formIds";
import { CREATE } from "constants/routes";

const Skills = ({ history }) => {
  const { FORM_ID, SKILLS } = skillsIds;

  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const skillsInitialState = resumeDetail[FORM_ID][SKILLS];

  const [skills, setSkills] = useState([...skillsInitialState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resume = {
      ...resumeDetail,
      [FORM_ID]: {
        ...resumeDetail[FORM_ID],
        [SKILLS]: [...skills],
        isSumbitted: true,
      },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    //sending to next step
    history.push(CREATE.PREVIEW);
  };

  useEffect(() => {
    if (skills.length !== skillsInitialState.length) {
      const resume = {
        ...resumeDetail,
        [FORM_ID]: {
          ...resumeDetail[FORM_ID],
          [SKILLS]: [...skills],
        },
      };

      //setting the resume context value so it is globally acessible
      setResumeDetails(resume);

      //saving to localStorage
      populateResume(resume);
    }
    // eslint-disable-next-line
  }, [skills, FORM_ID, SKILLS, setResumeDetails, skillsInitialState.length]);

  return (
    <FormLayout
      headingText="Skills"
      step={5}
      disableButton={false}
      formID={FORM_ID} //inorder to submit outside the form
    >
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <TagsInput
          inputProps={{
            placeholder: "Type and press enter.",
            className: `${
              skills.length > 0 ? "mb-1" : " "
            } react-tagsinput-input`,
          }}
          value={skills}
          maxTags={10}
          onlyUnique
          maxlength="16"
          className={`tag-wrapper ${skills.length > 0 ? "pb-0" : ""}`}
          addKeys={[9, 13, 188]}
          name={SKILLS}
          onChange={(tags) => {
            setSkills(tags);
          }}
        />
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(Skills);
