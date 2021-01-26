import React, { useEffect } from "react";
import { Modal } from "react-responsive-modal";

import Input from "components/Form/Input";
import TextArea from "components/Form/TextArea";

import { workModalIds } from "constants/formIds";

const WorkModal = ({
  workExperience,
  modalSubmitHandler,
  openModal,
  onCloseModal,
  setWorkExperience,
}) => {
  const {
    WORK_JOB_TITLE,
    EMPLOYER,
    START_DATE,
    END_DATE,
    CURRENTLY_WORKING,
    JOB_DESCRIPTION,
  } = workModalIds;

  const setField = (field, value) =>
    setWorkExperience({
      ...workExperience,
      [field]: value,
    });

  const {
    id,
    currentlyWorking,
    employer,
    endDate,
    jobDescription,
    startDate,
    workJobTitle,
  } = workExperience;

  const hasNoJobTitle = workJobTitle.trim() === "";

  useEffect(() => {
    if (currentlyWorking) {
      setWorkExperience({
        ...workExperience,
        [END_DATE]: "Present",
      });
    } else {
      setWorkExperience({
        ...workExperience,
        [END_DATE]: "",
      });
    }
  }, [currentlyWorking]);

  useEffect(() => {
    if (startDate > endDate) {
      setWorkExperience({
        ...workExperience,
        [END_DATE]: "",
      });
    }
  }, [startDate]);

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      classNames={{ closeButton: "close", modal: "modal" }}
      center
    >
      <h2 className="modal-heading">Work experience</h2>
      <div className="modal-input-layout">
        <Input
          label="Job title"
          id={WORK_JOB_TITLE}
          wrapperClass="mr-only-pc"
          placeholder="Job title"
          type="text"
          value={workJobTitle}
          setValue={setField}
        />

        <Input
          label="Employer"
          id={EMPLOYER}
          placeholder="Enter the employer name"
          type="text"
          value={employer}
          setValue={setField}
        />
      </div>
      <div className="modal-input-layout">
        <div className="date-wrapper">
          <Input
            label="Start date"
            id={START_DATE}
            wrapperClass="mr-only-pc"
            placeholder="Start date"
            type="date"
            value={startDate}
            setValue={setField}
          />
        </div>
        <div className="date-wrapper">
          <Input
            label="End date"
            id={END_DATE}
            placeholder="End date"
            type={currentlyWorking ? "text" : "date"}
            value={endDate}
            startDate={startDate}
            disabled={currentlyWorking}
            setValue={setField}
          />
        </div>
      </div>
      <div className="center-content vertical checkbox-wrapper">
        <Input
          id={CURRENTLY_WORKING}
          type="checkbox"
          value={currentlyWorking}
          setValue={setField}
        />
        <label htmlFor={CURRENTLY_WORKING}>I currently work here</label>
      </div>

      <TextArea
        id={JOB_DESCRIPTION}
        label="Job description"
        placeholder="Description of what you did at the job"
        value={jobDescription}
        setValue={setField}
      />
      <div className="btn-wrapper right">
        <button
          className="primary-btn"
          type="button"
          disabled={hasNoJobTitle}
          onClick={() => modalSubmitHandler(id)}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default WorkModal;
