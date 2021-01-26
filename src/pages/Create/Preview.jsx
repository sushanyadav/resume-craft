import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

import RedirectIfSumbitted from "hoc/RedirectIfSumbitted";

import FormLayout from "components/Form/FormLayout";
import Resume from "components/Resume";

import { previewIds } from "constants/formIds";

const Preview = ({ history }) => {
  const { FORM_ID } = previewIds;

  let resume = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    resume.save();
  };

  return (
    <FormLayout headingText="Preview your resume" step={6} formID={FORM_ID}>
      <form id={FORM_ID} onSubmit={handleSubmit}>
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
