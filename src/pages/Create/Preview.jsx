import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import Resume from "components/Resume";

import { previewIds } from "constants/formIds";
import { CREATE } from "constants/routes";

const Preview = ({ history }) => {
  const { FORM_ID } = previewIds;

  let resume = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    resume.save();
  };

  const handleClear = () => {
    const confirmGoBack = window.confirm(
      "Do you really want to go back? current progess wont be saved !"
    );

    if (!confirmGoBack) return;

    localStorage.clear();
    window.location.reload();
    history.push(CREATE.BASIC_INFO);
  };

  return (
    <FormLayout headingText="Preview your resume" step={6} formID={FORM_ID}>
      <form id={FORM_ID} onSubmit={handleSubmit}>
        <button className="text-btn" type="button" onClick={handleClear}>
          Create another resume
        </button>
        <div className="resume-wrapper">
          <PDFExport
            fileName="my_resume.pdf"
            title=""
            subject=""
            keywords=""
            ref={(r) => (resume = r)}
          >
            <Resume />
          </PDFExport>
        </div>
      </form>
    </FormLayout>
  );
};

export default RedirectIfSumbitted(Preview);
