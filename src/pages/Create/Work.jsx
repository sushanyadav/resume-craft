import React, { useContext, useState } from "react";

import { ResumeDetailsContext } from "contextAPI/ResumeDetailsContext";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import WorkModal from "components/Modal/WorkModal";

import { populateResume } from "services/resume";
import { getWorkExperienceInitalState } from "utils/getResumeInitalState";
import randomIdGenerator from "utils/randomIdGenerator";

import { workIds } from "constants/formIds";
import { CREATE } from "constants/routes";

import "react-responsive-modal/styles.css";

const Work = ({ history }) => {
  const { FORM_ID, WORK_EXPERIENCES } = workIds;

  const [resumeDetail, setResumeDetails] = useContext(ResumeDetailsContext);

  const workExperienceArray = resumeDetail[FORM_ID][WORK_EXPERIENCES];

  const initalState = getWorkExperienceInitalState();

  const [workExperience, setWorkExperience] = useState(initalState);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const resume = {
      ...resumeDetail,
      [FORM_ID]: {
        ...resumeDetail[FORM_ID],
        isSumbitted: true,
      },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    //sending to next step
    history.push(CREATE.SKILLS);
  };

  const resetModalValues = () => {
    setWorkExperience(initalState);
  };

  const onOpenModal = () => {
    resetModalValues();
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const modalSubmitHandler = (currentId) => {
    const id = randomIdGenerator();

    //deleteingDublicates
    const deleteDublicates = workExperienceArray.filter(
      (workExperience) => workExperience.id !== currentId
    );

    const combineWithExprienceArray = [...deleteDublicates].concat(
      workExperience
    );

    let modifiedArray = [...workExperienceArray, { id, ...workExperience }];

    if (currentId) modifiedArray = combineWithExprienceArray;

    const resume = {
      ...resumeDetail,
      [FORM_ID]: {
        ...resumeDetail[FORM_ID],
        [WORK_EXPERIENCES]: [...modifiedArray],
      },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);

    setOpenModal(false);
  };

  const workDeleteHandler = (id) => {
    const confirmDelete = window.confirm("Do you really want to delete?");

    if (!confirmDelete) return;

    const finalworkExperienceArray = workExperienceArray.filter(
      (workExperience) => workExperience.id !== id
    );

    const resume = {
      ...resumeDetail,
      [FORM_ID]: {
        ...resumeDetail[FORM_ID],
        [WORK_EXPERIENCES]: [...finalworkExperienceArray],
      },
    };

    //setting the resume context value so it is globally acessible
    setResumeDetails(resume);

    //saving to localStorage
    populateResume(resume);
  };

  const preFillModal = (prefillId) => {
    const selectedWorkExpirience = workExperienceArray.find(({ id }) => {
      return id === prefillId;
    });

    setWorkExperience({ ...selectedWorkExpirience });
    setOpenModal(true);
  };

  return (
    <FormLayout
      headingText="Your work experience"
      step={4}
      formID={FORM_ID} //inorder to submit outside the form
    >
      <ul className="work-list-items">
        {workExperienceArray &&
          workExperienceArray.map(
            ({ id, workJobTitle, startDate, endDate, currentlyWorking }) => {
              return (
                <li key={id} className="work-list-item">
                  <div>
                    <p>{workJobTitle}</p>
                    <span>
                      {startDate.substring(0, 4)} -{" "}
                      {currentlyWorking ? endDate : endDate.substring(0, 4)}
                    </span>
                  </div>
                  <div>
                    <button
                      className="text-btn p-0 mr"
                      onClick={() => preFillModal(id)}
                      type="button"
                    >
                      &#9998;
                    </button>
                    <button
                      className="text-btn p-0"
                      type="button"
                      onClick={() => workDeleteHandler(id)}
                    >
                      &#10006;
                    </button>
                  </div>
                </li>
              );
            }
          )}
      </ul>
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <button type="button" onClick={onOpenModal} className="open-modal-btn">
          Add a work experience
        </button>
        <WorkModal
          workExperience={workExperience}
          modalSubmitHandler={modalSubmitHandler}
          openModal={openModal}
          onCloseModal={onCloseModal}
          setWorkExperience={setWorkExperience}
        />
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(Work);
